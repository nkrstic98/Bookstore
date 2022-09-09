import {Component, createSignal, For, onMount} from "solid-js";
import {useLocation, useNavigate} from "@solidjs/router";
import {Book, bookModel} from "../models/books";
import {User} from "../models/users";
import {Col, Container, Row} from "solid-bootstrap";
import {setUrl} from "./Header";

type BookRecommendation = {
    book: Book
    recommender: string
}

const Recommendations: Component = () => {
    const navigation = useNavigate();
    const { getBookById } = bookModel();

    const [recommendedBookList, setRecommendedBookList] = createSignal<BookRecommendation[]>([]);

    onMount(() => {
        let user = localStorage.getItem("user");
        if(user == null) {
            navigation("/login");
            return;
        }

        const location = useLocation();
        setUrl(location.pathname);

        let parsedUser: User = JSON.parse(user);

        let list: BookRecommendation[] = [];
        for (const rec of parsedUser.recommendations) {
            let book = getBookById(rec.bookId)
            if(book == undefined) {
                continue;
            }

            let bookItem: BookRecommendation = {
                book: book,
                recommender: rec.recommender
            }

            list.push(bookItem);
        }

        setRecommendedBookList(list);
    })

    return (
        <Container>
            <h5 class="display-6 text-center mt-4 mb-5">Vaši prijatelji su Vam preporučili...</h5>
            <Row>
                <Col/>
                <Col xs={10}>
                    <table class="table" style={"width: 100%;"}>
                        <tbody>
                        <For each={recommendedBookList()}>{item =>
                            <tr>
                                <td style={"vertical-align: baseline;"}>
                                    <h4>
                                        {item.recommender}
                                    </h4>
                                </td>
                                <td class="text-center" style={"vertical-align: baseline;"}>
                                    <a href={"/books/" + item.book.id} onClick={() => setUrl(`/books/${item.book.id}`)}>
                                        <img
                                            class="img-fluid"
                                            src={"/src/assets/books/" + item.book.image + ".jpeg"}
                                            alt={item.book.title}
                                            style={"height: 200px"}
                                        />
                                    </a>
                                </td>
                                <td style={"vertical-align: baseline;"}>
                                    <Container>
                                        <Row>
                                            <a style={"text-decoration:none;color:black;"} href={"/books/" + item.book.id} onClick={() => setUrl(`/books/${item.book.id}`)}>
                                                <p style={"font-size: 22px"}>{item.book.title} ({item.book.author})</p>
                                            </a>
                                        </Row>
                                    </Container>
                                </td>
                            </tr>
                        }</For>
                        </tbody>
                    </table>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default Recommendations;