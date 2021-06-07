import * as React  from 'react';
import style from './style.module.scss';

export interface ModalProps {
    closeModal(): void;
    children?: any;
    isOpen: boolean
}

export const handleBackdropClick = (e:  React.MouseEvent<HTMLDivElement>, closeModal, backDrop) => {
    const { current } = backDrop;
    if (e.target !== current) {
        return;
    }
    closeModal();
};

const CustomModal: React.FC<ModalProps> = ({isOpen, closeModal, children}) => {
    const backDrop = React.useRef(null);

    const handleKeyPress = (e) => {
        const directionCode: string = e.key;

        if (directionCode !== 'Escape') {
            return;
        }
        closeModal();
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyPress, false);

        return () => {
            window.removeEventListener('keydown', handleKeyPress, false);
        };
    });

    return (

          <div className={style.backdrop} ref={backDrop} onClick={(e) => handleBackdropClick(e, closeModal, backDrop)}>
              <div className={style.modalContent}>
                  <div className={style.closeBtn} onClick={closeModal}>
                  </div>
                  <h2 className={style.modalTitle}>Newsletter</h2>
                  <div className="w-full">{children}</div>
              </div>
          </div>


    );
};

export default CustomModal;
