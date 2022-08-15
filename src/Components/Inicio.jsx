import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <>
      <Card style={{ width: "22rem" }} className="bg-dark text-white">
        <Card.Img
          variant="top"
          src="http://3.bp.blogspot.com/_uNR32GxwiMA/SflDphj5HdI/AAAAAAAAAg8/6mtulVAlxoU/s400/compumundo+hyper+mega+red.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title>Servicio Tecnico</Card.Title>
          <Card.Text variant="dark">
            "Tu teoría del universo en forma de rosquilla es intrigante,
            Homero... ¡Tal vez deba robártela!" {"- "}
            <i>
              <b>Stephen Hawking</b>
            </i>
          </Card.Text>
          <div className="d-block">
            <Link to={"/Create"}>
              <Button variant="success">Crear Turno</Button>
            </Link>
            {"  "}
            <Link to={"/Read"}>
              <Button variant="primary">Ver Turnos</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
