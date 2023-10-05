import React from 'react';
import { useModal } from '../../Context/Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  className="modal-buttons"
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (typeof onButtonClick === 'function') onButtonClick();
    if (typeof onModalClose === 'function') setOnModalClose(onModalClose);
    setModalContent(modalComponent);
  };

  return (
    <button className={className} onClick={onClick} type='click' style={{
        "width": "100%",
        "height": "40px",
        "marginBottom": "10px",
        "borderRadius": "20px",
        "border": "none",
        "fontSize": "1.5em",
    }}>{buttonText}</button>
  );
}

export default OpenModalButton;
