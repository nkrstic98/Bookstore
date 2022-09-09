import {Component, lazy} from 'solid-js';
import {Route, Routes } from '@solidjs/router';
import Header from "./pages/Header";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const BookDetails = lazy(() => import("./pages/BookDetails"));
const Recommendations = lazy(() => import("./pages/Recommendations"));

const App: Component = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/register-user" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/books/:id" component={BookDetails} />
                <Route path={"/recommendations"} component={Recommendations} />
            </Routes>
        </>
    );
};

export default App;
