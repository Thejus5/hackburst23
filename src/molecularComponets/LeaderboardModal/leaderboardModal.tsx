import FullPageModal from "../FullPageModal/fullPageModal";

export default function LeaderboardModal({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) {
  return (
    <FullPageModal open={open} closeModal={closeModal} header="Leaderboard">
      <p>
        Hey Awesome Participants!
        <br />
        <br />
        We know you're eager to check out the leaderboard, and guess what? We're
        cooking up something extra special behind the scenes. Our event elves
        are working tirelessly to bring you the most epic leaderboard that will
        blow your mind! 🌟 Patience is a virtue, and we promise it will be worth
        the wait. Get ready for an event that will have you on the edge of your
        seat, and your name shining bright on the leaderboard.
        <br />
        Stay tuned, stay excited, and get ready for an adventure! 🚀✨
        <br />
        <br />
        Cheers,
        <br />
        Kairo 🎉
        <br />
        <br />
        P.S. In the meantime, feel free to spread the excitement with your
        fellow participants!
      </p>
    </FullPageModal>
  );
}
