import Tag from "../../atomicComponents/Tags/tags";
import TextTimer from "../../atomicComponents/TextTimer/textTimer";
import {
  QuestionConfigInterface,
  appConfig,
  questionConfig,
} from "../../core/appConfig";
import useTimerEngine from "../../core/utils/useTimerEngine";
import MiniTimer from "../MiniTimer/miniTimer";
import { DataTable, Wrapper } from "./questionBoard.styles";

export default function QuestionBoard() {
  return (
    <Wrapper>
      <div className="padding">
        <div className="timerWrapper">
          <p>Next Question</p>
          <MiniTimer deadlineDate={appConfig.deadLineDate} />
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
                    <a href={question.questionLink} target="_blank">
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
                  <Tag label="Locked" />
                </td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </div>
    </Wrapper>
  );
}
