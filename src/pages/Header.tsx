import {Component, createEffect, createSignal, Show} from "solid-js";
import {Button, Form, Nav, Navbar, NavDropdown} from "solid-bootstrap";
import logo from "../assets/logo.png";
import {User} from "../models/users";
import {useNavigate} from "@solidjs/router";

export function fetchUser() {
    let user = localStorage.getItem("user");
    if(user != null) {
        setUser(JSON.parse(user));
    }
}

export function deleteUser() {
    setUser(null);
}

const [user, setUser] = createSignal<User|null>(null);

const Header: Component = () => {
    const ADMIN = "admin";
    const CUSTOMER = "customer";

    const navigation = useNavigate();
    const [route, setRoute] = createSignal("");

    const logOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigation("/");
    }

    createEffect(() => {
        let user = localStorage.getItem("user");
        if(user != null) {
            setUser(JSON.parse(user));
        }
    })

    return (
        <Navbar bg="danger" variant="dark" style={"padding-left:30px; padding-right: 20px;"}>
            <img src={logo} alt="logo" height={50} width={50}/>
            <Navbar.Brand style={"padding-left:20px"} href="/" onClick={() => setRoute("")}>Knjižara Perce</Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    class="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                    defaultActiveKey="/"
                >
                    <Show
                        when={user() != null && user().type == ADMIN}
                    >
                        <Nav.Link active={route() == "add-book"} href="/add-book" onClick={() => setRoute("add-book")}>Dodavanje knjiga</Nav.Link>
                        <Nav.Link active={route() == "register-user"} href="/register-user" onClick={() => setRoute("register-user")}>Registracija korisnika</Nav.Link>
                    </Show>
                    <Show
                        when={user() != null && user().type == CUSTOMER}
                    >
                        <Nav.Link active={route() == "recommendations"} href="/recommendations" onClick={() => setRoute("recommendations")}>Preporuke</Nav.Link>
                    </Show>
                </Nav>
                <Form class="">
                    <Show
                        when={user() != null}
                        fallback={<Button href="/login" variant="light">Prijavi se</Button>}
                    >
                        <NavDropdown
                            align="end"
                            class="text-light"
                            title={user()?.firstname + " " + user()?.lastname}
                            id="basic-nav-dropdown"
                            onSelect={(selectedKey) => {
                                if(selectedKey == "log-out") {
                                    logOut();
                                }
                            }}
                        >
                            <NavDropdown.Item eventKey="profile" href="/profile">Profil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="log-out" href="/">Izloguj se</NavDropdown.Item>
                        </NavDropdown>
                    </Show>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;