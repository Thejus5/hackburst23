import FullPageModal from "../FullPageModal/fullPageModal";
import { HowToPlayWrapper } from "./howToPlayModal.styles";

export default function HowToPlayModal({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) {
  return (
    <FullPageModal header="How to play" open={open} closeModal={closeModal}>
      <HowToPlayWrapper>
        <div className="scrollDiv">
          <p>
            Hey hey! <br />
            <br />
            It’s me, Kairo. I knew that you would come here today! I have kept a
            chest of Rs.5,000 inside the cave for you and a grand puzzle to win
            a grand prize. But I want to ensure that it’s not an easy access.
            You must work hard and earn it.
            <br />
            <br /> As I said, the game will have two streams: A main puzzle and
            the treasure hunt. The main puzzle is straightforward. Solve the
            puzzle within 12 hours and claim your prize worth of Rs.5,000.
            <br />
            <br /> In the treasure hunting game you have to find and open your
            reward chest within 12 hours to claim the prize worth of Rs.5,000.
            The chest is locked with a 10-letter secret word. You will have to
            discover that secret word by solving some puzzles. I have already
            set up the puzzles. Go ahead and explore @
            'kairo.hackburst23.qburst.build'!
            <br />
            <br /> Hint: You can <strong>GET help</strong> from a{" "}
            <strong>postman</strong>.<br />
            <br /> Best of luck,
            <br /> Kairo
            <hr />
          </p>
          <p>
            Main Puzzle:
            <br /> Step 1:
            <br /> Accessing the Main Puzzle
            <br /> The main puzzle will be published here on the website. It
            will be unlocked when the event starts. Keep an eye on the website.
            <br />
            <br /> Step 2: Submitting Answers
            <br /> Add your solution to the repo provided with all codes,
            prompts etc used to build the solution. Add a demo video/screenshots
            if possible as well.
            <br />
            <br /> Step 3: Results: An expert team will review your solution and
            shortlist top solutions. The shortlisted teams will be provided with
            an opportunity to demo their solution. The final results will be
            published after the final evaluation. INR 5000 awaits this quest.
            <br />
            <br /> Treasure Hunt:
            <br /> Each puzzle carries a reward of INR 3000 in addition to the
            reward awaiting within the chest.
            <br />
            <br /> Step 1: Accessing Treasure Hunt Access each treasure hunt
            puzzle by visiting the API endpoint /p/[Qn Id]. The questions will
            be unlocked at different times and will be shown in the website.
            <br />
            <br /> Step 2: Solving Treasure Hunt Puzzles Submit your answers for
            each treasure hunt question using the API endpoint /a/[Qn Id]. If
            your answer is correct, you will get 2 letters of the secret word.
            <br />
            <br /> Step 3: In case you need help solving the puzzle, Kairo will
            give you a wish. Unlock a hint using the API endpoint /p/[Qn
            Id]/hint Please note that using hints will reduce your points for
            that particular question.
            <br />
            <br /> Step 4: Unlocking the Chest Once you've solved all five
            treasure hunt puzzles, you will have all the letters for the secret
            code. Use them to unlock your chest and stand a chance to win INR
            5000, by posting them to the API /unlock/http://13.200.106.34/
            <br />
            <br /> Upload all answer-related documents and screenshots to the
            provided repository for evaluation.
            <br />
            <br />
            Important Tips:
            <br /> * Ensure timely participation to unlock treasure hunt
            questions within the 12-hour period.
            <br /> * Double-check your answers before submission. Each retry
            will cost you points.
            <br /> * Submit answers and any code, file or screenshots related to
            the question should be added in repo for further evaluation.
            <br />
            <br /> By following these steps, participants can navigate through
            the main puzzle and treasure hunt, maximizing their chances of
            winning cash prizes in the "Hackburst 23" hackathon event.
            <br />
          </p>
        </div>
      </HowToPlayWrapper>
    </FullPageModal>
  );
}
