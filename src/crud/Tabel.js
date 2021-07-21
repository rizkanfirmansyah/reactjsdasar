import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ makanans, editData, hapusData}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.deskripsi}</td>
                <td>Rp. {makanan.harga}</td>
                <td>
                  <button className="btn btn-warning mr-3" onClick={() => editData(makanan.id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => hapusData(makanan.id)}>Hapus</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
