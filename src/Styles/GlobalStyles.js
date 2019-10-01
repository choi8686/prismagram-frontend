import { createdGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createdGlobalStyle`
    ${reset};
    *{
        box-sizing : border-box;
    }
`