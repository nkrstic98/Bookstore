import {Component, createEffect, createSignal, For, Show} from "solid-js";
import {Button, Carousel, Col, Container, Form, FormControl, Row} from "solid-bootstrap";
import {Book, bookModel} from "../models/books";
import {User} from "../models/users";
import {fetchUser} from "./Header";

const [userType, setUserType] = createSignal<string>("customer");

export function updateUser() {
    setUserType("customer");
}

const Home: Component = () => {
    const {getBookList, getBooksOnPromotion} = bookModel();
    const [index, setIndex] = createSignal(0);
    const [booksOnPromotion, setBooksOnPromotion] = createSignal<Book[]>([]);
    const [bookList, setBookList] = createSignal<Book[]>([]);
    const [searchCriteria, setSearchCriteria] = createSignal("");

    createEffect(() => {
        fetchUser();
        fetchBooks();

        let storageUser = localStorage.getItem("user");
        if(storageUser != null) {
            let user: User = JSON.parse(storageUser);
            if(user.type == "customer") {
                setBooksOnPromotion(getBooksOnPromotion());
            }
            setUserType(user.type);
        }
        else {
            setBooksOnPromotion(getBooksOnPromotion());
        }
    })

    const handleSelect = (
        selectedIndex: number,
        _: Record<string, unknown> | null
    ) => {
        setIndex(selectedIndex);
    };

    const fetchBooks = () => {
         let searchCriteria = localStorage.getItem("search-criteria");
         localStorage.removeItem("search-criteria");

         let fetchedBookList = getBookList();

         if(searchCriteria == null) {
             setBookList(fetchedBookList);
         }
         else {
             let compareValue = searchCriteria;
             setSearchCriteria(compareValue);

             let filteredBookList = getBookList().filter(
                 book => book.author.toLowerCase().includes(compareValue.toLowerCase(), 0) || book.title.toLowerCase().includes(compareValue.toLowerCase(), 0)
             )
             setBookList(filteredBookList);
         }
    }

    const searchBooksAndAuthors = () => {
        localStorage.setItem("search-criteria", searchCriteria());
    }

    return (
        <>
            <Show
                when={userType() == "customer"}
                fallback={
                    <Container style={"margin-top: 40px;text-align:center;"}>
                        <Row>
                            <Col/>
                            <Col>
                                <Form class="d-flex">
                                    <FormControl
                                        type="search"
                                        id="value"
                                        placeholder="Uronite u svet knjiga"
                                        class="me-2"
                                        onInput={(e) => {
                                            if (searchCriteria() != "" && e.currentTarget.value == "") {
                                                fetchBooks();
                                            }
                                            setSearchCriteria(e.currentTarget.value);

                                        }}
                                        value={searchCriteria()}
                                    />
                                    <Button variant="outline-success" type="submit" onClick={() => searchBooksAndAuthors()}>Pretraži</Button>
                                </Form>
                            </Col>
                            <Col/>
                        </Row>
                    </Container>
                }
            >
                <Container style={"margin-top: 40px;text-align:center;"}>
                    <Carousel activeIndex={index()} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img src={"src/assets/books/promotions/banner_1.jpeg"} alt="baner_1"/>
                        </Carousel.Item>
                        <For each={booksOnPromotion()}>{book =>
                            <Carousel.Item>
                                <a href={"/books/" + book.id}>
                                    <img src={"src/assets/books/promotions/" + book.image + ".png"} alt={book.image}/>
                                </a>
                            </Carousel.Item>
                        }</For>
                    </Carousel>
                </Container>
            </Show>

            <br/>
            <hr style="margin-left:50px;margin-right:50px"/>
            <br/>

            <Container>
                <For each={bookList()}>{(_, index) =>
                    <Show when={ bookList().length > 0 && index() % 3 == 0}>
                        <Row class="text-center mb-3">
                            <Show when={index() < bookList().length} fallback={<Col/>}>
                                <Col class="ml-3">
                                    <div class="card text-center">
                                        <div class="card-body">
                                            <a href={"/books/" + bookList()[index()].id}>
                                                <img
                                                    class="img-fluid"
                                                    src={"/src/assets/books/" + bookList()[index()].image + ".jpeg"}
                                                    alt={bookList()[index()].image}
                                                    style={"padding:10px;;width:150px;height:220px;"}
                                                />
                                            </a>
                                            <p style="font-size:20px"><a style={"text-decoration:none;color:black;"} href={"/books/" + bookList()[index()].id}>{bookList()[index()].title}</a></p>
                                            <p>{bookList()[index()].author}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Show>
                            <Show when={index() + 1 < bookList().length} fallback={<Col/>}>
                                <Col>
                                    <div class="card text-center">
                                        <div class="card-body">
                                            <a href={"/books/" + bookList()[index()+ 1].id}>
                                                <img
                                                    class="img-fluid"
                                                    src={"/src/assets/books/" + bookList()[index() + 1].image + ".jpeg"}
                                                    alt={bookList()[index() + 1].image}
                                                    style={"padding:10px;;width:150px;height:220px;"}
                                                />
                                            </a>
                                            <p style="font-size:20px"><a style={"text-decoration:none;color:black;"} href={"/books/" + bookList()[index()+ 1].id}>{bookList()[index() + 1].title}</a></p>
                                            <p>{bookList()[index() + 1].author}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Show>
                            <Show when={index() + 2 < bookList().length} fallback={<Col/>}>
                                <Col>
                                    <div class="card text-center style">
                                        <div class="card-body">
                                            <a href={"/books/" + bookList()[index()+ 2].id}>
                                                <img
                                                    class="img-fluid"
                                                    src={"/src/assets/books/" + bookList()[index() + 2].image + ".jpeg"}
                                                    alt={bookList()[index() + 2].image}
                                                    style={"padding:10px;;width:150px;height:220px;"}
                                                />
                                            </a>
                                            <p style="font-size:20px"><a style={"text-decoration:none;color:black;"} href={"/books/" + bookList()[index() + 2].id}>{bookList()[index() + 2].title}</a></p>
                                            <p>{bookList()[index() + 2].author}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Show>
                        </Row>
                    </Show>
                }</For>
            </Container>
        </>
    );
}

export default Home;