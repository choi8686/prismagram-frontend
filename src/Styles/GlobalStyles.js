// styled-components에서 제공하는 모든 tag에 스타일을 적용할 수 있다

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing : border-box;
    }
`