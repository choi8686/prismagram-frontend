//GlobalStyles와 Theme를 불러서 사용하는 곳이다.
//Theme는 ThemeProvider를 통해서 컴포넌트에게 전달된다.
//GlobalStyles는 import 후 tag 형태로 작성해놓으면 적용된다.
//App.js는 함수형으로 제작되었다.

import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";

export default () => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
    </ThemeProvider>
)