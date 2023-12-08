import TextTimer from "../../atomicComponents/TextTimer/textTimer";
import { QuestionConfigInterface, questionConfig } from "../../core/appConfig";
import useTimerEngine from "../../core/utils/useTimerEngine";
import ControlledTag from "../ControlledTag/controlledTag";
import MiniTimer from "../MiniTimer/miniTimer";
import { DataTable, Wrapper } from "./questionBoard.styles";

export default function QuestionBoard() {
  const { isTimerEnded } = useTimerEngine(questionConfig[0].opensIn);

  const getNextQuestion = (): any => {
    return questionConfig.find((question: QuestionConfigInterface) => {
      const timeLeft = Date.parse(question.opensIn) - Date.now();

      return timeLeft > 0;
    });
  };
  return (
    <Wrapper>
      <div className="padding">
        <div className="timerWrapper">
          <p>Next Question in</p>
          <MiniTimer deadlineDate={getNextQuestion()?.opensIn} />
        </div>
        <hr />
        <DataTable>
          <thead>
            <tr>
              <th>Question</th>
              <th>Opens In</th>
              <th>Hint In</th>
              <th>Deadline</th>
              <th className="alignLeft">Status</th>
            </tr>
          </thead>
          <tbody>
            {questionConfig.map((question: QuestionConfigInterface) => (
              <tr key={question.questionName}>
                <td>
                  {question.questionLink ? (
                    <a
                      href={isTimerEnded ? question.questionLink : "#"}
                      target={isTimerEnded ? "_blank" : ""}
                    >
                      {question.questionName}
                    </a>
                  ) : (
                    question.questionName
                  )}
                </td>
                <td>
                  <TextTimer deadLine={question.opensIn} />
                </td>
                <td>
                  <TextTimer deadLine={question.hintIn} />
                </td>
                <td>
                  <TextTimer deadLine={question.deadLine} />
                </td>
                <td>
                  <ControlledTag deadline={question.opensIn} />
                </td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </div>
    </Wrapper>
  );
}
