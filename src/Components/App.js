//GlobalStyles와 Theme를 불러서 사용하는 곳이다.
//Theme는 ThemeProvider를 통해서 컴포넌트에게 전달된다.
//GlobalStyles는 import 후 tag 형태로 작성해놓으면 적용된다.
//App.js는 함수형으로 제작되었다.

import React from "react";
import { gql } from "apollo-boost"; 
import GlobalStyles from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { useQuery } from "react-apollo-hooks";

//Graphql로 만들었던 backend의 Query를 호출하기 위해서는 clinet 단에서 Query를 작성해야한다.
//Query를 만들기 위하여 import하였다.
const QUERY = gql`{
  isloggedIn @client //Query를 사용할 때는 API에 호출하지 못하도록 @client를 해줌.
}
`

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return(
    <ThemeProvider theme={Theme}>
    <>
    <GlobalStyles />
    <Router isLoggedIn={isLoggedIn} />
  </>  
</ThemeProvider>
  )
}
  
   
