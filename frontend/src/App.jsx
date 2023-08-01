import React from "react";
import Headers from "./components/Headers";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Headers />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
