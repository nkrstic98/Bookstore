import {Component, createEffect, createSignal, Show} from "solid-js";
import {Button, Card, Col, Container, Form, Row} from "solid-bootstrap";
import {User, userModel} from "../models/users";
import {useNavigate} from "@solidjs/router";
import {createStore} from "solid-js/store";
import {fetchUser} from "./Header";

type LoginFormFields = {
    email: string;
    password: string;
};

const loginForm = () => {
    const { userLogin } = userModel();

    const [form, setForm] = createStore<LoginFormFields>({
        email: "",
        password: "",
    });

    const submit = (form: LoginFormFields) => {
        let user = userLogin(form.email, form.password);

        if(user == null || user.password != form.password) {
            return null;
        }

        return user;
    };

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
};

const Login: Component = () => {
    const navigation = useNavigate();
    const [validated, setValidated] = createSignal(false);
    const [loginAttempted, setLoginAttempted] = createSignal(false);
    const [user, setUser] = createSignal<User|null>(null);
    const { form, updateFormField, submit, clearField } = loginForm();

    const handleSubmit = (event: Event): void => {
        const loginForm = event.currentTarget;
        event.preventDefault();
        if(!(loginForm as HTMLFormElement).checkValidity()) {
            event.stopPropagation();
            setValidated(true);
        }
        else {
            setUser(submit(form));
            if(user() != null) {
                localStorage.setItem("user", JSON.stringify(user()));
                fetchUser();
                navigation("/");
            }
            else {
                setLoginAttempted(true);
                clearField("password");
            }
        }
    };

    return (
        <Container style={"margin-top: 40px;"}>
            <Row>
                <Col/>
                <Col xs={4}>
                    <Card>
                        <Card.Body>
                            <Form noValidate validated={validated()} onSubmit={handleSubmit}>
                                <Form.Group class="mb-4" controlId="validationCustom04">
                                    <Show
                                        when={user() == null && loginAttempted()}
                                    >
                                        <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom05">
                                            <p class="text-danger">{"Pogresno uneti korisnicko ime ili lozinka. Pokusajte ponovo"}</p>
                                        </Form.Group>
                                    </Show>
                                    <Form.Label>Email adresa</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="email"
                                        value={form.email}
                                        onChange={updateFormField("email")}
                                        placeholder="Unesite email adresu"
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        Email adresa je obavezno polje!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group class="mb-4" controlId="validationCustom05">
                                    <Form.Label>Lozinka</Form.Label>
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
                                <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom05">
                                    <Button class="text-center" type="submit">Uloguj se</Button>
                                </Form.Group>
                                <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom05">
                                    <a href="/register">Nemate nalog? Registrujte se ovde.</a>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col/>
            </Row>
        </Container>
    );
}

export default Login;