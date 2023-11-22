import { appConfig } from "../../core/appConfig";
import { HeaderText } from "./title.style";

function Title(){
    return(
        <HeaderText>{appConfig.appTitle}</HeaderText>
    )
}

export default Title