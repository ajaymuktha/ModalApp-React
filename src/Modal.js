import "./Modal.css";

export default function Modal({ handleClose }) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Success</h2>
        <p>Your response is recorded!</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
