import FullPageModal from "../FullPageModal/fullPageModal";
import { ContactInfoBox } from "./contactModal.styles";

export default function ContactModal({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) {
  return (
    <FullPageModal header="Contact" open={open} closeModal={closeModal}>
      <ContactInfoBox>
        <p className="label">Send me your queries @</p>
        <a
          href="mailto:kairo.hackburst@qburst.com"
          target="_blank"
          className="link"
        >
          kairo.hackburst@qburst.com
        </a>
      </ContactInfoBox>
    </FullPageModal>
  );
}
