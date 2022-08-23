import {Component, lazy } from 'solid-js';
import {Route, Routes } from '@solidjs/router';
import Header from "./pages/Header";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const App: Component = () => {
  return (
    <>
        <Header />

      <Routes>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
      </Routes>
    </>
  );
};

export default App;
