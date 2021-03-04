import React, {FC} from 'react'
import style from '../CustomModal/style.module.scss'
import {handleBackdropClick} from "../CustomModal";

//interface
import {ModalProps} from "../CustomModal";
interface ConfirmModalProps extends ModalProps{
  accept(): any;
  decline(): any;
}

const ConfirmModal: FC<ConfirmModalProps> = ({ isOpen, accept, decline, closeModal, children }) => {
  const backDrop = React.useRef(null);

  const handleKeyPressConfirm = (e) => {
    const directionCode: string = e.key;
    if (directionCode !== 'Escape') {
      return;
    }
    closeModal();
  };

  React.useEffect(() => {
    window.addEventListener('keydown',  handleKeyPressConfirm, false);

    return () => {
      window.removeEventListener('keydown', handleKeyPressConfirm, false);
    };
  });

  return (

      <div className={style.backdrop} ref={backDrop} onClick={(e) => handleBackdropClick(e, closeModal, backDrop)}>
        <div className={style.modalContent}>
          <div className={style.closeBtn} onClick={closeModal}>
          </div>
          <h2 className={style.modalTitle}>Confirm</h2>
          <button
            onClick={() => {
              accept();
              closeModal();
            }}
            className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold
             py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2
             focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="button">
            Agree
          </button>

          <button
            onClick={() => {
              decline();
              closeModal();
            }}
            className="flex-shrink-0 bg-purple-600 text-white text-base font-semibold
             py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2
             focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
            type="button">
            Decline
          </button>

          <div>{children}</div>
        </div>
      </div>

  )
};

export default ConfirmModal
