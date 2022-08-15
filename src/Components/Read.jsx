import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  const setData = (
    id,
    nombre,
    celular,
    pc,
    observaciones,
    idEmpleado,
    precio
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Celular", celular);
    localStorage.setItem("Pc", pc);
    localStorage.setItem("Observaciones", observaciones);
    localStorage.setItem("Encargado", idEmpleado);
    localStorage.setItem("Precio Arreglo", precio);
  };
  const getData = () => {
    axios.get("http://localhost:4000/api/clientes/").then((getData) => {
      setAPIData(getData.data);
    });
  };
  const onDelete = (id) => {
    axios.delete(`http://localhost:4000/api/clientes/${id}`).then(() => {
      getData();
    });
  };
  useEffect(() => {
    axios.get("http://localhost:4000/api/clientes").then((response) => {
      setAPIData(response.data);
    });
  }, []);
  return (
    <>
      <p>
        {" "}
        <h2>Lista de Turnos</h2>{" "}
      </p>

      <Table striped bordered hover variant="dark" size="lg" className="grid">
        <thead>
          <tr>
            <th>Turno Nº</th>
            <th>Cliente</th>
            <th>Celular</th>
            <th>Pc//Notebook</th>
            <th>Observaciones</th>
            <th>ID Encargado</th>
            <th>Precio del Arreglo</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr>
                <th>{data.id}</th>
                <th>{data.nombre}</th>
                <th>{data.celular}</th>
                <th>{data.pc}</th>
                <th>{data.observaciones}</th>
                <th>{data.idEmpleado}</th>
                <th>${data.precio}</th>
                <th>
                  <Link to={"/update"}>
                    <Button
                      onClick={() =>
                        setData(
                          data.id,
                          data.nombre,
                          data.celular,
                          data.pc,
                          data.observaciones,
                          data.idEmpleado,
                          data.precio
                        )
                      }
                    >
                      Editar
                    </Button>
                  </Link>
                </th>
                <th>
                  <Button variant="danger" onClick={() => onDelete(data.id)}>
                    Borrar
                  </Button>{" "}
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to={"/Create"}>
        <Button variant="success">Crear Turno</Button>
      </Link>
    </>
  );
}
