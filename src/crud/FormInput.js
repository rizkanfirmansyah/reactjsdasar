import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const FormInput = ({nama, harga, deskripsi, handleChange, handleSubmit, id}) => {
  return (
    <div className="mt-5 mb-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data" }</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="makanan"> 
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                placeholder="Masukkan Nama Makanan"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="makanan">
              <Form.Label>Harga Makanan</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                placeholder="Masukkan Harga Makanan"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Deskripsi Makanan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormInput;
