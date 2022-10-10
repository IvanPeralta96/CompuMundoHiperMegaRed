import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Create() {
  const [APIData, setAPIData] = useState([]);
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [pc, setPc] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [idEmpleado, setIdEmpleado] = useState("");
  const [precio, setPrecio] = useState("");
  const postData = () => {
    axios.post("http://localhost:4000/api/clientes/", {
      nombre,
      celular,
      pc,
      observaciones,
      idEmpleado,
      precio,
    });
  };
  useEffect(() => {
    axios.get("http://localhost:4000/api/empleados").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  return (
    <div>
      <p>
        {" "}
        <h2>Turnos para Reparacion</h2>{" "}
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formCliente">
          <Form.Label>Cliente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre Cliente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCelular">
          <Form.Label>Nº Celular</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Numero de Celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPC">
          <Form.Label>PC//Notebook</Form.Label>
          <Form.Control
            type="char"
            placeholder="Computadora//Notebook(Modelo)"
            value={pc}
            onChange={(e) => setPc(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formObs">
          <Form.Label>Observaciones</Form.Label>
          <Form.Control
            type="char"
            placeholder="Detalles del problema"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicSelect">
          <Form.Label>Empleado a Cargo</Form.Label>
          <Form.Select
            value={idEmpleado}
            onChange={(e) => {
              setIdEmpleado(e.target.value);
            }}
          >
            <option value="elegir">Selecionar id del Empleado</option>
            {APIData.map((data) => {
              return <option>{data.nombreEmpleado}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formVal">
          <Form.Label>Valor Arreglo</Form.Label>
          <Form.Control
            type="char"
            placeholder="Costo del Arreglo"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Link to={"/Read"}>
          <Button variant="success" type="submit" onClick={postData}>
            Crear Turno
          </Button>
        </Link>
      </Form>
    </div>
  );
}
