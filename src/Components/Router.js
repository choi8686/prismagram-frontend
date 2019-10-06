/*프로젝트 페이지들의 경로들을 결정해주는 파트.
Routes(Feed, Auth, Profile, EditProfile, Explorer)들 중에서 어디를 보여줄지 정해주는 곳.
Routes 폴더에는 보여져야할 페이지가 들어가는 것.
Router.js가 경로를 결정해주는 파일이고, Routes 폴더 안에 있는 파일들이 실제 인스타그램에서 보여지는 페이지들이다.
전체적인 흐름은, 만들 프로젝트에 보여질 페이지들을 Routes 폴더에 정해놓고 Routes에는 많은 Components들이 보여지고 가려지는 것이다.

Router.js를 만들고 Router의 Props에 따라 Router안에 어떤 Router를 넣는지 결정된다.
Route는 path와 component를 정해줘서 경로를 바꿔주는 역할을 한다.
Route를 Router가 감싸고 Proptype을 지정해주고 export default 해주면 App.js에서 사용할 수 있다.*/
import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";


const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Feed} />
    </>
)
const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth} />
    </>
);

const AppRouter = ({ isLoggedIn }) => (
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
    </Router>
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default AppRouter;