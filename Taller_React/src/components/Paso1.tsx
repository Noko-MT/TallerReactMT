import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const Paso1 = () => {
    return (
        <div>
            <h2>Paso 1</h2>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="name" placeholder="Ingrese su nombre" />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="lastName" placeholder="Ingrese su  apellido" />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo" />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="number">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese su telefono" />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="primary">Siguiente</Button>
            </Form>
        </div>
    );
};

export default Paso1;