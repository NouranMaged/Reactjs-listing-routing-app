import React, { useState } from "react";
import TablePlanRadar from "./tablePlanRadar";
import "./planRadar.scss";
import { Button, Modal } from "react-bootstrap";
import MyVerticallyCenteredModal from "./addTicketModal";

function PlanRadar(props) {
  const people = new Array(100).fill(true).map((val, id) => ({
    id: id,
    subject: Math.random().toString(20).substring(8),
    priority: Math.random().toString(20).substring(8),
    status: Math.ceil(Math.random() * 80),
    description: Math.random().toString(20).substring(8),
  }));
  console.log(people);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>

      <h1>Records: {people.length}</h1>
      <TablePlanRadar rows={people} />

      {/* {show && <AddTicketModal show={show} handleClose={handleClose} />} */}
    </div>
  );
}

// const people = new Array(1000).fill(true).map((val, id) => ({
//   id: id,
//   firstName: Math.random().toString(20).substring(8),
//   lastName: Math.random().toString(20).substring(8),
//   age: Math.ceil(Math.random() * 80),
// }));

// // Render your table
// render(
//   <div>
//     <h1>Records: {people.length}</h1>
//     <Table rows={people} />
//   </div>,
// );
export default PlanRadar;
