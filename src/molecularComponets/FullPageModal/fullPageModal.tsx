import { ModalWrapper } from "./fullPageModal.styles";
import CloseIcon from "../../assets/closeIcon.png";

function FullPageModal({
  open,
  closeModal,
  children,
}: Readonly<{ open: boolean; closeModal: () => void; children?: any }>) {
  return (
    <ModalWrapper open={open}>
      <div className="innerBox">
        <img
          className="closeIcon"
          src={CloseIcon}
          alt="close icon"
          onClick={closeModal}
        />
        {children || (
          <p className="modalText">
          Hey Awesome Participants! <br />
          <br />
          We know you're eager to dive into the rules and check out the
          leaderboard, and guess what? We're cooking up something extra
          special behind the scenes. Our event elves are working tirelessly to
          bring you the most epic set of rules and a leaderboard that will
          blow your mind! 🌟 <br />
          Patience is a virtue, and we promise it will be worth the wait. Get
          ready for an event that will have you on the edge of your seat, and
          your name shining bright on the leaderboard. <br />
          Stay tuned, stay excited, and get ready for an adventure! 🚀✨{" "}
          <br />
          <br />
          Cheers, <br />
          Kairo 🎉 <br />
          <br />
          P.S. In the meantime, feel free to spread the excitement with your
          fellow participants!
        </p>
        )}
      </div>
    </ModalWrapper>
  );
}

export default FullPageModal;
