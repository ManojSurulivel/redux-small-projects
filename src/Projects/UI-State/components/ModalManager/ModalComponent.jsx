import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../redux/slices/ModalSlice.jsx";
import Modal from "./Modal.jsx";
import { Link } from "react-router-dom";
import '../../UiState.css'

const ModalComponent = () => {
  const dispatch = useDispatch();

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
     <div>
     <Link to="/UiState" className='button-top-right'> X </Link>

     <h1>Modal Manager</h1>
      <button onClick={() => dispatch(openModal("modal1"))}>Open Modal 1</button>
      <button onClick={() => dispatch(openModal("modal2"))}>Open Modal 2</button>

      {/* Modals */}
      <Modal modalId="modal1" title="Modal 1">
        <p>This is the content of Modal 1.</p>
      </Modal>
      <Modal modalId="modal2" title="Modal 2">
        <p>This is the content of Modal 2.</p>
      </Modal>
     </div>
   
    </div>
  );
};

export default ModalComponent;
