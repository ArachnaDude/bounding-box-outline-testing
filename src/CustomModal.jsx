import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import moment from "moment";
import {getVenueInfoById} from "./utils/be-api.js";
import CreateNewComment from "./components/CreateNewComment.js";

const CustomModal = ({ show, onClose }) => {
const [venueItems, setVenueItems] = useState();
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVenueInfoById(1800803167)
    .then((res) => {
      setVenueItems(res);
      setIsLoading(false);
    })
  }, [venueItems]);

  function average(array) {
    let total = 0;
    let count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    let final = Math.round(total / count)
    
    if (final === 5) {
      return "⭐️⭐️⭐️⭐️⭐️"
    } else if (final === 4) {
      return "⭐️⭐️⭐️⭐️★"
    } else if (final === 3) {
    return "⭐️⭐️⭐️★★"
    } else if (final === 2) {
    return "⭐️⭐️★★★"
    } else if (final === 1) {
    return "⭐️★★★★"
    } 
}

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Modal show={show} onHide={onClose} centered size='lg'>
      <ModalHeader closeButton>
        <ModalTitle>{venueItems.name}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h2>{venueItems.name}</h2>
        <h3>Address: 99 Street Name, City Name</h3>
        <p>{"Wheelchair access: " + venueItems.wheelchair}</p>
        <p>{"Access Description: " + venueItems.wheelchairDesc}{" "}<button>Click to change</button></p>
        <p>Average accessibility rating (Out of 5): {average(venueItems.accessibility_ratings)}</p>
        <hr></hr>
        <p>
          <strong>Comments about accessibility:</strong>
        </p>
        <ul>
        {venueItems.comments.map((comments) => {
          return (
            <>
            <li key={comments._id}>
              {comments.body}<br></br>
                 Author: {comments.author}{" "}|{" "}
                  Posted: {moment(comments.commentDate).format(
                              "MMM Do YY"
                            )}<br></br>
                <button>👍 Confirmed: ({comments.total_confirmed_votes})</button>
          </li>
          <br></br>
          </>
          )
        })}
        </ul>
        <hr></hr>
        <p>
          <b>Please leave a comment on how accessible this venue was: </b>
        </p>
        <CreateNewComment id={1800803167} />
      </ModalBody>
      <ModalFooter>
        <Button variant='primary' onClick={onClose}>
          Close
        </Button>
        {/* <Button variant='primary' onClick={onClose}>
          Save Changes
        </Button> */}
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
