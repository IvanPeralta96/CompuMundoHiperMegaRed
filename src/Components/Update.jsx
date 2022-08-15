import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Update() {
  const [APIData, setAPIData] = useState([]);
  const [id, setID] = useState(null);
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [pc, setPc] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [idEmpleado, setIdEmpleado] = useState("");
  const [precio, setPrecio] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/api/empleados").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setNombre(localStorage.getItem("Nombre"));
    setCelular(localStorage.getItem("Celular"));
    setPc(localStorage.getItem("Pc"));
    setObservaciones(localStorage.getItem("Observaciones"));
    setIdEmpleado(localStorage.getItem("Encargado"));
    setPrecio(localStorage.getItem("Precio Arreglo"));
  }, []);

  const updateAPIData = () => {
    axios.put(`http://localhost:4000/api/clientes/${id}`, {
      nombre,
      celular,
      pc,
      observaciones,
      idEmpleado,
      precio,
    });
  };

  return (
    <div>
      <p>
        {" "}
        <h2>Edicion de Turnos para reparación</h2>{" "}
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
              return <option>{data.idEmpleado}</option>;
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
        <Link to={"/read"}>
          <Button variant="primary" type="submit" onClick={updateAPIData}>
            Editar Turno
          </Button>
        </Link>
      </Form>
    </div>
  );
}
