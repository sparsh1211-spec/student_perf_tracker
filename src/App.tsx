
import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// import AppContext from "./App.context";
import {
  Switch,
  Route,
  // Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
// import Avatar from "./components/Avatar/Avatar";
// import AppContainerPage from "./pages/AppContainer.page";
// import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";
import { LS_AUTH_TOKEN } from "./api/base";
import { Suspense } from "react";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
// import { User } from "./models/User";
import { me } from "./middlewares/auth.middleware";
import Nav from "../src/Nav";
import Header from "./Header";
import { useAppSelector } from "./store";
// import { useDispatch } from "react-redux";
// import { authActions } from "./actions/auth.actions";
import { meSelector } from "./selectors/auth.selectors";
// import { User } from "./models/User";
// import UserInformation from "./UserInformation";
// import Sidebar from "./components/Sidebar";
// import DashboardPage from "./pages/Dashboard.page";
// import LoginPage from "./pages/Login.page";
// import RecordingsPage from "./pages/Recordings.page";
// import SignupPage from "./pages/Signup.page";




// const AppContainerPageLazy=React.lazy(()=>import("./pages/AppContainer/AppContainer.page"));


// const AuthPageLazy=lazy(()=>import("./pages/Auth/Auth.page"));


interface Props {
}

const App: React.FC<Props> = (props) => {

  //  const [user, setUser] = useState<User>();
  const user = useAppSelector(meSelector)
  // const dispatch = useDispatch();

  console.log(user);

  const token = localStorage.getItem(LS_AUTH_TOKEN);



  useEffect(() => {
    if (!token || user) {
      return;
    }

    me();
  }, [])//eslint-disable-line react-hooks/exhaustive-deps

  console.log("App rerendering and token is: " + token);

  if (!user && token) {
    return <div className="h-screen bg-blue-300"><AiOutlineLoading3Quarters className="text-blue-600 h-96 w-96 animate-spin ml-96"/></div>
  }
  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/auth/login" />}
          </Route>
          <Route path="/auth">
            {user ? (<Redirect to="/dashboard" />) : (<Suspense fallback={<div className="text-red-500 bg-blue-300">Loading....<AiOutlineLoading3Quarters className="animate-spin" /></div>}> <AuthLazy /></Suspense>)}
          </Route>
          <Route path={["/dashboard",
            "/recordings",
            "/usersettings",
            "/groups",
            "/groups/:id",
            "/batch/:batchNumber/lecture/:lectureNumber"
          ]} exact>
            <Nav />
            <Header />
            <Suspense fallback={<div className="text-red-500">Loading....<AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters></div>}>
              {user ? (<AppContainerPageLazy />) : (<Redirect to="/auth/login" />)}
            </Suspense>
          </Route>
          {/* <Route path="/usersettings">
            <UserInformation user={user!}/>
          </Route> */}
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );

};
App.defaultProps = {
}

export default React.memo(App);
