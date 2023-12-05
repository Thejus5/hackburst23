import { appConfig } from "../../core/appConfig";
import FullPageModal from "../FullPageModal/fullPageModal";
import { RulesWrapper } from "./rulesModal.style";

export default function RulesModal({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) {
  return (
    <FullPageModal open={open} closeModal={closeModal} header="Rules">
      <RulesWrapper>
        <ul>
          {appConfig.rules.map((rule: string) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </RulesWrapper>
    </FullPageModal>
  );
}
