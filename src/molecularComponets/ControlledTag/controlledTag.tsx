import Tag from "../../atomicComponents/Tags/tags";
import useTimerEngine from "../../core/utils/useTimerEngine";

export default function ControlledTag({deadline}:{deadline:string}){

    const {isTimerEnded} = useTimerEngine(deadline)
    return(
        <Tag label={isTimerEnded ? "Open":"Locked"}/>
    )
}