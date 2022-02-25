import OurCustomPopup from "./OurCustomPopup";
import { Popup } from "react-leaflet";
import { useState } from "react";

const CustomPopup = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Popup>
      <div className='App'>
        <main>
          <h1>Button test to render a new popup when clicked</h1>
          <br></br>
          <button onClick={() => setButtonPopup(true)}>Open popup!</button>
          <OurCustomPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <>
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
                  Comment 1: This is a comment about the acessibility of Venue
                  name
                  <button>👍 Confirm (x)</button>
                </li>
                <li key='c2'>
                  Comment 2: This is a comment about the acessibility of Venue
                  name
                  <button>👍 Confirm (x)</button>
                </li>
                <li key='c3'>
                  Comment 3: This is a comment about the acessibility of Venue
                  name
                  <button>👍 Confirm (x)</button>
                </li>
                <li key='c4'>
                  Comment 4: This is a comment about the acessibility of Venue
                  name
                  <button>👍 Confirm (x)</button>
                </li>
                <li key='c5'>
                  Comment 5: This is a comment about the acessibility of Venue
                  name
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
            </>
          </OurCustomPopup>
        </main>
      </div>
    </Popup>
  );
};

export default CustomPopup;
