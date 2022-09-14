import {Component, createSignal, onMount, Show} from "solid-js";
import {useLocation} from "@solidjs/router";
import {fetchUser, setUrl} from "./Header";
import {Col, Container, Row} from "solid-bootstrap";
import {Alert, Button, Card, Form} from "solid-bootstrap";
import { createStore } from "solid-js/store";
import {InputGroup} from "solid-bootstrap";
import {BookComment, bookModel} from "../models/books";

type AddBookForm = {
    title: string
    author: string
    yearPublished?: string
    numberOfPages: string
    description: string
}

const addBookForm = () => {
    const {addBook} = bookModel();

    const [formFile, setFormFile] = createSignal<string>("");
    const [form, setForm] = createStore<AddBookForm>({
        title: "",
        author: "",
        description: "",
        numberOfPages: "",
    });

    const submit = (form: AddBookForm, imageFile: string) => {
        console.log(form);
        let publishingYear = "";
        if (form.yearPublished != undefined) {
            let publishingDate = new Date(form.yearPublished);
            publishingYear = publishingDate.getFullYear() + "";
        }

        return addBook({
            title: form.title,
            author: form.author,
            description: form.description,
            image: imageFile.replace(".jpeg", ""),
            yearPublished: publishingYear,
            numberOfPages: form.numberOfPages,
            averageGrade: 0,
            commentList: [],
            isOnPromotion: false,
        })
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

    return { form, formFile, setFormFile, submit, updateFormField, clearField };
}

const AddBook: Component = () => {

    const { form, formFile, setFormFile, updateFormField, submit, clearField } = addBookForm();

    const [bookExists, setBookExists] = createSignal(false);
    const [isBookAdded, setIsBookAdded] = createSignal(false);

    const [validated, setValidated] = createSignal(false);

    onMount(() => {
        const location = useLocation();
        setUrl(location.pathname);
    })

    const handleSubmit = (event: Event) => {
        const registerForm = event.currentTarget;
        event.preventDefault();
        if(!(registerForm as HTMLFormElement).checkValidity()) {
            event.stopPropagation();
            setValidated(true);
        }
        else {
            setValidated(false);
            let success = submit(form, formFile());
            if(success) {
                setIsBookAdded(true);

                clearField("title")
                clearField("author")
                clearField("yearPublished")
                clearField("numberOfPages")
                clearField("image")
                clearField("description");
            }
            else {
                setBookExists(true);
            }
        }
    }

    return (
        <Container class="mt-5">
            <Row>
                <Col />
                <Col xs={8}>
                    <Show when={bookExists()}>
                        <Alert variant="danger" dismissible onClose={() => setBookExists(false)}>
                            Postoji knjiga sa istim nazivom! Pokušajte ponovo...
                        </Alert>
                    </Show>
                    <Show when={isBookAdded()}>
                        <Alert variant="success" dismissible onClose={() => setIsBookAdded(false)}>
                            Uspešno ste dodali novu knjigu!
                        </Alert>
                    </Show>
                </Col>
                <Col />
            </Row>
            <Row>
                <Col/>
                <Col xs={10}>

                    <Card>
                        <Card.Body>
                            <Form noValidate validated={validated()} onSubmit={handleSubmit}>
                                <Row class="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label>Naziv knjige</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="title"
                                            value={form.title}
                                            onChange={updateFormField("title")}
                                            placeholder="Unesite naziv knjige"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Naziv knjige je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom02">
                                        <Form.Label>Pisac</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="author"
                                            value={form.author}
                                            onChange={updateFormField("author")}
                                            placeholder="Unesite ime pisca"
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Ime pisca je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row class="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom03">
                                        <Form.Label>Godina izdanja</Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="yearPublished"
                                            value={form.yearPublished}
                                            onChange={updateFormField("yearPublished")}
                                            placeholder="Unesite godinu izdanja"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Godina izdanja je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} class="mb-3" controlId="validationCustom04">
                                        <Form.Label>Broj strana</Form.Label>
                                        <Form.Control
                                            type="number"
                                            id="numberOfPages"
                                            value={form.numberOfPages}
                                            onChange={updateFormField("numberOfPages")}
                                            placeholder="Unesite broj strana knjige"
                                            min={0}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Broj strana je obavezno polje!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formFile" class="mb-3">
                                        <Form.Label>Dodajte sliku</Form.Label>
                                        <Form.Control
                                            type="file"
                                            id="image"
                                            onChange={(e: Event) => {
                                                if (e != null && e.target != null && e.target.files.length > 0) {
                                                    setFormFile(e.target.files[0].name)
                                                }
                                            }}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Molimo Vas izaberite sliku knjige!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="validationCustomText">
                                        <Form.Label>O knjizi</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                as="textarea"
                                                id="description"
                                                rows={6}
                                                placeholder="Unesite opis knjige..."
                                                value={form.description}
                                                onChange={updateFormField("description")}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Molimo Vas unesite tekst komentara
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row class="mb-5">
                                </Row>

                                <Form.Group class="mb-4" style={"text-align:center;"} controlId="validationCustom16">
                                    <Button class="text-center" type="submit">Dodaj knjigu</Button>
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

export default AddBook;