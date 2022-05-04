import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  const handleShow = () => {
    setModal(true);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <button className="btn-submit" onClick={handleShow}>
          Submit
        </button>
      </div>
      {modal && <Modal handleClose={handleClose} />}
    </div>
  );
}

export default App;
