import {User, userModel} from "../models/users";
import {createStore} from "solid-js/store";
import {Component, createEffect, createSignal, Show} from "solid-js";
import {Alert, Button, Card, Col, Container, Form, Modal, Row} from "solid-bootstrap";
import {deleteUser} from "./Header";
import {useNavigate} from "@solidjs/router";

type UpdateProfileFormFields = {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    phone: string;
    address: string;
    type: string;
}

const updateProfileForm = () => {
    const { userUpdate } = userModel();

    const [form, setForm] = createStore<UpdateProfileFormFields>({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
        type: "",
    });

    const submit = (email: string, firstname: string, lastname: string, address: string, phone: string, password: string) => {
        let user = userUpdate(email, firstname, lastname, address, phone, password);
        if(user != null) {
            localStorage.setItem("user", JSON.stringify(user));
        }
        return user;
    }

    const clearField = (fieldName: string) => {
        setForm({
            [fieldName]: ""
        });
    };

    const updateFormField = (fieldName: string) => (event: Event) => {
        const inputElement = event.currentTarget as HTMLInputElement;
        if (inputElement.type === "checkbox") {
            setForm({
                [fieldName]: inputElement.checked
            });
        } else {
            setForm({
                [fieldName]: inputElement.value
            });
        }
    };

    return { form, setForm, submit, updateFormField, clearField };
}

const Profile: Component = () => {
    const { userDelete } = userModel();

    const navigation = useNavigate();
    const [isUpdateEnabled, setIsUpdateEnabled] = createSignal(false);
    const [isPasswordEnabled, setIsPasswordEnabled] = createSignal(false);
    const [isCheckboxEnabled, setIsCheckboxEnabled] = createSignal(false);
    const [user, setUser] = createSignal<User>({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        phone: "",
        address: "",
        type: "",
        recommendations: [],
    });
    const { form, setForm, updateFormField, submit, clearField } = updateProfileForm();
    const [validated, setValidated] = createSignal(false);
    const [isUpdateSuccessful, setIsUpdateSuccessful] = createSignal(false);
    const [doPasswordMatch, setDoPasswordMatch] = createSignal(true);

    const [show, setShow] = createSignal(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    createEffect(() => {
        let user = localStorage.getItem("user");
        if(user == null) {
            navigation("/login");
        }
        else {
            let parsedUser = JSON.parse(user);
            setUser(parsedUser);
            setForm({
                firstname: parsedUser.firstname,
                lastname: parsedUser.lastname,
                email: parsedUser.email,
                username: parsedUser.username,
                phone: parsedUser.phone,
                address: parsedUser.address,
            })
        }
    })

    const handleSubmit = (event: Event): void => {
        const updateProfileForm = event.currentTarget;
        event.preventDefault();
        if(!(updateProfileForm as HTMLFormElement).checkValidity()) {
            event.stopPropagation();
            setValidated(true);
        }
        else {
            let password = user().password;
            if(isCheckboxEnabled() && (form.password != form.confirmPassword)) {
                setDoPasswordMatch(false);
                clearField("password");
                clearField("confirmPassword");
                return;
            }
            if(isCheckboxEnabled() && (form.password == form.confirmPassword)) {
                password = form.password
            }

            let isUpdateSuccessful = submit(form.email, form.firstname, form.lastname, form.address, form.phone, password);
            if(isUpdateSuccessful) {
                setIsUpdateSuccessful(true);
                let updatedUser = localStorage.getItem("user");
                if(updatedUser != null) {
                    setUser(JSON.parse(updatedUser));
                }
                setIsUpdateEnabled(false);
                setIsPasswordEnabled(false);
                setIsCheckboxEnabled(false);
                setDoPasswordMatch(true);
            }

            clearField("password");
            clearField("confirmPassword");
        }
    }

    const updateAbort = () => {
        setForm({
            firstname: user().firstname,
            lastname: user().lastname,
            email: user().email,
            username: user().username,
            phone: user().phone,
            address: user().address,
        });
        setIsUpdateEnabled(false);
        setIsPasswordEnabled(false);
        setIsCheckboxEnabled(false);
    }

    const deleteProfile = () => {
        localStorage.clear();
        deleteUser();
        userDelete(user().email);
        navigation("/");
    }

    return (
        <>
            <Modal show={show()} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Brisanje profila</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Da li ste sigurni da zelite da obrisete profil?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Odustani</Button>
                    <Button variant="danger" onClick={deleteProfile}>Obrisi</Button>
                </Modal.Footer>
            </Modal>

            <Container style={"margin-top: 40px;"}>
                <Row>
                    <Col/>
                    <Col xs={8}>
                        <Show when={isUpdateSuccessful()}>
                            <Alert variant="success" dismissible onClose={() => setIsUpdateSuccessful(false)}>
                                Uspesno ste ažurirali svoje podatke!
                            </Alert>
                        </Show>
                        <Card>
                            <Card.Body>
                                <Form noValidate validated={validated()} onSubmit={handleSubmit}>
                                    <Show
                                        when={isPasswordEnabled() && !doPasswordMatch()}
                                    >
                                        <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom11">
                                            <p class="text-danger">{"Lozinka i potvrda lozinke se ne poklapaju. Pokusajte ponovo"}</p>
                                        </Form.Group>
                                    </Show>

                                    <Row class="mb-3">
                                        <Form.Group as={Col} controlId="validationCustom01">
                                            <Form.Label>Ime</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="firstname"
                                                value={form.firstname}
                                                onChange={updateFormField("firstname")}
                                                required
                                                disabled={!isUpdateEnabled()}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="validationCustom02">
                                            <Form.Label>Prezime</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="lastname"
                                                value={form.lastname}
                                                onChange={updateFormField("lastname")}
                                                placeholder="Unesite prezime"
                                                required
                                                disabled={!isUpdateEnabled()}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Prezime je obavezno polje!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row class="mb-3">
                                        <Form.Group as={Col} controlId="validationCustom03">
                                            <Form.Label>Adresa</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="address"
                                                value={form.address}
                                                onChange={updateFormField("address")}
                                                placeholder="Unesite adresu"
                                                disabled={!isUpdateEnabled()}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="validationCustom04">
                                            <Form.Label>Broj telefona</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="phone"
                                                value={form.phone}
                                                onChange={updateFormField("phone")}
                                                placeholder="Unesite broj telefona"
                                                disabled={!isUpdateEnabled()}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row class="mb-3">
                                        <Form.Group as={Col} controlId="validationCustom05">
                                            <Form.Label>Email adresa</Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                value={form.email}
                                                onChange={updateFormField("email")}
                                                placeholder="Unesite email adresu"
                                                disabled={true}
                                                required />
                                            <Form.Control.Feedback type="invalid">
                                                Email adresa je obavezno polje!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="validationCustom06">
                                            <Form.Label>Korisnicko ime</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="username"
                                                value={form.username}
                                                onChange={updateFormField("username")}
                                                placeholder="Unesite korisnicko ime"
                                                disabled={true}
                                                required />
                                            <Form.Control.Feedback type="invalid">
                                                Korisnicko ime je obavezno polje!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row class="mb-3">
                                        <Form.Group controlId="validationCustom12">
                                            <Form.Check
                                                type="checkbox"
                                                id="default-checkbox"
                                                label="Promena lozinke"
                                                onChange={() => {
                                                    setIsPasswordEnabled(!isPasswordEnabled())
                                                    setIsCheckboxEnabled(true);
                                                }}
                                                disabled={!isUpdateEnabled()}
                                                checked={isCheckboxEnabled()}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Show when={isPasswordEnabled()}>
                                        <Row class="mb-5">
                                            <Form.Group as={Col} controlId="validationCustom07">
                                                <Form.Label>Lozinka</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    id="password"
                                                    value={form.password}
                                                    onChange={updateFormField("password")}
                                                    placeholder="Unesite lozinku"
                                                    disabled={!isUpdateEnabled()}
                                                    required />
                                                <Form.Control.Feedback type="invalid">
                                                    Lozinka je obavezno polje!
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="validationCustom08">
                                                <Form.Label>Potvrda lozinke</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    id="confirmPassword"
                                                    value={form.confirmPassword}
                                                    onChange={updateFormField("confirmPassword")}
                                                    placeholder="Unesite potvrdu lozinke"
                                                    disabled={!isUpdateEnabled()}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Lozinka je obavezno polje!
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Row>
                                    </Show>

                                    <Show
                                        when={isUpdateEnabled()}
                                        fallback={
                                            <Form.Group class="mb-3 pb-3" style={"text-align:center;"} controlId="validationCustom09">
                                                <Button class="text-center" type="submit" onClick={() => setIsUpdateEnabled(true)}>Azuriraj podatke</Button>
                                            </Form.Group>
                                        }
                                    >
                                        <Row class="mb-3 pb-3">
                                            <Form.Group as={Col} style={"text-align:right;"} controlId="validationCustom09">
                                                <Button class="btn btn-success pr-2" type="submit">Potvrdi</Button>
                                            </Form.Group>
                                            <Form.Group as={Col} style={"text-align:left;"} controlId="validationCustom09">
                                                <Button class="btn btn-warning ml-1" onClick={() => updateAbort()}>Odustani</Button>
                                            </Form.Group>
                                        </Row>
                                    </Show>

                                    <hr />

                                    <Form.Group class="mt-3 mb-3 pt-3" style={"text-align:center;"} controlId="validationCustom09">
                                        <Button class="btn btn-danger" onClick={handleOpen}>Obrisi profil</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </>
    )
}

export default Profile;