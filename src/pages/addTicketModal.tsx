import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

interface Props {
  show: boolean;
  // handleClose: any;
  onHide: any;
}

const MyVerticallyCenteredModal: React.FC<Props> = (props) => {
  const [value, setValue] = useState("");
  const formInputs = ["subject", "priotity", "status", "description"];
  const handleChange = (event) => {
    console.log(event.target);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

    // <Modal.Dialog>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Add New Ticket Details</Modal.Title>
    //   </Modal.Header>

    //   <Modal.Body>
    //     <Form>
    //       {formInputs.map((input, i) => {
    //         return (
    //           <Form.Group className="mb-3" controlId="formBasicInput" key={i}>
    //             <Form.Label>{input}</Form.Label>
    //             <Form.Control
    //               type="subject"
    //               placeholder={`Enter ${input}`}
    //               onChange={handleChange}
    //               name={input}
    //               // value={}
    //             />
    //           </Form.Group>
    //         );
    //       })}

    //       <Button variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //   </Modal.Body>

    //   {/* <Modal.Footer>
    //     <Button variant="secondary">Close</Button>
    //     <Button variant="primary">Save changes</Button>
    //   </Modal.Footer> */}
    // </Modal.Dialog>
  );
};

export default MyVerticallyCenteredModal;
