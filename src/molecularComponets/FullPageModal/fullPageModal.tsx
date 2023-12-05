import { ModalWrapper } from "./fullPageModal.styles";
import CloseIcon from "../../assets/close.png";

function FullPageModal({
  open,
  closeModal,
  children,
  header,
}: Readonly<{
  open: boolean;
  closeModal: () => void;
  children?: any;
  header: string;
}>) {
  return (
    <ModalWrapper open={open}>
      <div className="innerBox">
        <div className="closeIcon" onClick={closeModal}>
          <img src={CloseIcon} alt="close" />
        </div>
        <h2 className="modalHeader">{header}</h2>
        {children}
      </div>
    </ModalWrapper>
  );
}

export default FullPageModal;
