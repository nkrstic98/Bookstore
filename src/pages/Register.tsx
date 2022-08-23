import {User, userModel} from "../models/users";
import {createStore} from "solid-js/store";
import {Component, createSignal, Show} from "solid-js";
import {Button, Card, Col, Container, Form, Row} from "solid-bootstrap";
import {fetchUser} from "./Header";
import {useNavigate} from "@solidjs/router";

type RegisterFormFields = {
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

const registerForm = () => {
    const { userRegister } = userModel();

    const [form, setForm] = createStore<RegisterFormFields>({
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

    const submit = (form: RegisterFormFields) => {
        let userType = "customer";
        if(form.type != "") {
            userType = form.type;
        }

        let user: User = {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            username: form.username,
            password: form.password,
            phone: form.phone,
            address: form.address,
            type: userType,
        }

        let isUserRegistered = userRegister(user);
        if(isUserRegistered) {
            return user;
        }
        else {
            return null;
        }
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

    return { form, submit, updateFormField, clearField };
}

const Register: Component = () => {
    const navigation = useNavigate();
    const [validated, setValidated] = createSignal(false);
    const [registerAttempted, setRegisterAttempted] = createSignal(false);
    const [doPasswordMatch, setDoPasswordMatch] = createSignal(true);
    const [user, setUser] = createSignal<User|null>(null);
    const { form, updateFormField, submit, clearField } = registerForm();

    const handleSubmit = (event: Event): void => {
        const registerForm = event.currentTarget;
        event.preventDefault();
        if(!(registerForm as HTMLFormElement).checkValidity()) {
            event.stopPropagation();
            setValidated(true);
        }
        else {
            if(form.password != form.confirmPassword) {
                setDoPasswordMatch(false);
                clearField("password");
                clearField("confirmPassword");
                return;
            }

            setUser(submit(form));
            if(user() != null) {
                localStorage.setItem("user", JSON.stringify(user()));
                fetchUser();
                navigation("/");
            }
            else {
                setRegisterAttempted(true);
                clearField("password");
                clearField("confirmPassword");
            }
        }
    };

    return (
        <Container style={"margin-top: 40px;"}>
            <Row>
                <Col/>
                <Col xs={8}>
                    <Card>
                        <Card.Body>
                            <p class="text-secondary mb-3" style={"font-size: 13px;"}>Polja oznacena zvezdicom (*) su obavezna</p>
                            <Form noValidate validated={validated()} onSubmit={handleSubmit}>
                                <Show
                                    when={user() == null && registerAttempted()}
                                >
                                    <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom11">
                                        <p class="text-danger">{"Email ili korisnicno ime su povezani sa postojecim nalogom!"}</p>
                                    </Form.Group>
                                </Show>
                                <Show
                                    when={!doPasswordMatch()}
                                >
                                    <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom11">
                                        <p class="text-danger">{"Lozinka i potvrda lozinke se ne poklapaju. Pokusajte ponovo"}</p>
                                    </Form.Group>
                                </Show>

                                <Row class="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Ime*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="firstname"
                                            value={form.firstname}
                                            onChange={updateFormField("firstname")}
                                            placeholder="Unesite ime"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Ime je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>Prezime*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="lastname"
                                            value={form.lastname}
                                            onChange={updateFormField("lastname")}
                                            placeholder="Unesite prezime"
                                            required />
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
                                        />
                                    </Form.Group>
                                </Row>
                                <Row class="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom05">
                                        <Form.Label>Email adresa*</Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="email"
                                            value={form.email}
                                            onChange={updateFormField("email")}
                                            placeholder="Unesite email adresu"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Email adresa je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom06">
                                        <Form.Label>Korisnicko ime*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="username"
                                            value={form.username}
                                            onChange={updateFormField("username")}
                                            placeholder="Unesite korisnicko ime"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Korisnicko ime je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row class="mb-5">
                                    <Form.Group as={Col} controlId="validationCustom07">
                                        <Form.Label>Lozinka*</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="password"
                                            value={form.password}
                                            onChange={updateFormField("password")}
                                            placeholder="Unesite lozinku"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Lozinka je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom08">
                                        <Form.Label>Potvrda lozinke*</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="confirmPassword"
                                            value={form.confirmPassword}
                                            onChange={updateFormField("confirmPassword")}
                                            placeholder="Unesite potvrdu lozinke"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Lozinka je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom09">
                                    <Button class="text-center" type="submit">Registruj se</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default Register;