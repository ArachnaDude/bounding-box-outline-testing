import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";

const CustomModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered size='lg'>
      <ModalHeader closeButton>
        <ModalTitle>Modal heading</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h2>Venue Name</h2>
        <h3>Address: 99 Street Name, City Name</h3>
        <p>Wheelchair access: Yes</p>
        <p>Average accessibility rating (Out of 5): ⭐️⭐️⭐️</p>
        <hr></hr>
        <p>
          <strong>Comments:</strong>
        </p>
        <ul>
          <li key='c1'>
            Comment 1: This is a comment about the acessibility of Venue name
            <button>👍 Confirm (x)</button>
          </li>
          <li key='c2'>
            Comment 2: This is a comment about the acessibility of Venue name
            <button>👍 Confirm (x)</button>
          </li>
          <li key='c3'>
            Comment 3: This is a comment about the acessibility of Venue name
            <button>👍 Confirm (x)</button>
          </li>
          <li key='c4'>
            Comment 4: This is a comment about the acessibility of Venue name
            <button>👍 Confirm (x)</button>
          </li>
          <li key='c5'>
            Comment 5: This is a comment about the acessibility of Venue name
            <button>👍 Confirm (x)</button>
          </li>
        </ul>
        <hr></hr>
        <p>
          <b>Leave a comment:</b>
        </p>
        <form>
          <input type='text'></input>
          <button>Submit</button>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
        <Button variant='primary' onClick={onClose}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
