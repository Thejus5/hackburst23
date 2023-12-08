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
        We know you're eager to check out the leaderboard, and guess what? You
        can get the current leaderboar at '/leaderboard'
        <br />
        <br /> Best of luck,
        <br /> Kairo
      </p>
    </FullPageModal>
  );
}
