import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import HeaderHome from "./Components/HeaderHome/HeaderHome";
import Detail from "./pages/Detail/Detail";
import AdminIndex from "./pages/Admin/AdminIndex/AdminIndex";
import HookUseState from "./HookReact/HookUseState/HookUseState";
import HookUseEffect from "./HookReact/HookUseEffect/HookUseEffect";
import ToDoAppRFC from "./HookReact/HookUseEffect/ToDoAppRFC";
import ParentComponent from "./HookReact/HookUseCallBack/ParentComponent";
import HookUseMemo from "./HookReact/HookUseMemo/HookUseMemo";
import HookUseRef from "./HookReact/HookUseRef/HookUseRef";
import HookRedux from "./HookReact/HookRedux/HookRedux";
import ToDoList from "./HookReact/ToDoList/ToDoList";
import DemoHOCModal from "./pages/HOC/DemoHOCModal/DemoHOCModal";
import ModalHOC from "./pages/HOC/DemoHOCModal/ModalHOC";
import { HomeTemplate } from "./templates/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import DemoAntd from "./pages/DemoAntd/DemoAntd";
import { history } from "./util/setting";
import Profile from "./pages/Profile/Profile";
import HomeMobile from "./pages/Home/HomeMobile";

function App() {
  return (
    <Router history={history}>
      {/* <HeaderHome /> */}
      <Switch>
        <HomeTemplate
          path={"/home"}
          component={Home}
          // sử dụng render thay cho component nếu muốn render ra nhiều components
          // render={(propsRoute) => {
          //   return (
          //     <div>
          //       <HeaderHome />
          //       <Home {...propsRoute} />
          //     </div>
          //   );
          // }}
        />
        <HomeTemplate path={"/contact"} component={Contact} />
        <HomeTemplate path={"/about"} component={About} />
        <HomeTemplate path={"/detail/:id"} component={Detail} />
        <HomeTemplate path={"/hookusestate"} component={HookUseState} />
        <HomeTemplate path={"/hookuseeffect"} component={HookUseEffect} />
        <HomeTemplate path={"/hookusecallback"} component={ParentComponent} />
        <HomeTemplate path={"/hookusememo"} component={HookUseMemo} />
        <HomeTemplate path={"/hookuseref"} component={HookUseRef} />
        <HomeTemplate path={"/hookuseredux"} component={HookRedux} />
        <HomeTemplate path={"/todolist"} component={ToDoList} />
        <HomeTemplate path={"/demohocmodal"} component={DemoHOCModal} />
        <HomeTemplate path={"/profile"} component={Profile} />
        <HomeTemplate
          path={"/"}
          component={Home}
          mobileComponent={HomeMobile}
        />

        <UserTemplate path={"/login"} component={Login} />
        <UserTemplate path={"/register"} component={Register} />

        <AdminTemplate path={"/admin"} component={AdminIndex} />
        <AdminTemplate path={"/demoantd"} component={DemoAntd} />

        {/* remove exact if it already define in template */}
        <HomeTemplate
          // exact
          path={"/"}
          component={Home}
        />
      </Switch>
      <ModalHOC />
    </Router>
  );
}

export default App;
