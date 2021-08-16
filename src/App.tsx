
import React, { useEffect } from "react";
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';
// import { ImSpinner2 } from "react-icons/im"
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
import { FaSpinner } from "react-icons/fa";
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
  if (token && !user) {
    return (<div className="relative flex flex-col items-center justify-center h-screen bg-black">
     <FaSpinner className="absolute w-10 h-10 text-white animate-spin " />
     <FaSpinner className="absolute text-white animate-spin w-14 h-14 " />
     <FaSpinner className="absolute w-20 h-20 text-white animate-spin" />
     <FaSpinner className="absolute w-24 h-24 text-white animate-spin" />
     <FaSpinner className="absolute w-32 h-32 text-white animate-spin" />
     <FaSpinner className="absolute text-white animate-spin w-36 h-36" />
    </div>);
  }
  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/auth/login" />}
          </Route>
          <Route path="/auth">
            {user ? (<Redirect to="/dashboard" />) : (<Suspense fallback={(<div className="relative flex flex-col items-center justify-center h-screen bg-black">
     <FaSpinner className="absolute w-10 h-10 text-white animate-spin " />
     <FaSpinner className="absolute text-white animate-spin w-14 h-14 " />
     <FaSpinner className="absolute w-20 h-20 text-white animate-spin" />
     <FaSpinner className="absolute w-24 h-24 text-white animate-spin" />
     <FaSpinner className="absolute w-32 h-32 text-white animate-spin" />
     <FaSpinner className="absolute text-white animate-spin w-36 h-36" />
    </div>)}> <AuthLazy /></Suspense>)}
          </Route>
          <Route path={["/dashboard",
            "/recordings",
            "/usersettings",
            "/peoples",
            "/peoples/:id",
            "/groups",
            "/groups/:id",
            "/batch/:batchNumber/lecture/:lectureNumber"
          ]} exact>
            <Nav />
            <Header />
            <Suspense fallback={(<div className="relative flex flex-col items-center justify-center h-screen bg-black">
     <FaSpinner className="absolute w-10 h-10 text-white animate-spin " />
     <FaSpinner className="absolute text-white animate-spin w-14 h-14 " />
     <FaSpinner className="absolute w-20 h-20 text-white animate-spin" />
     <FaSpinner className="absolute w-24 h-24 text-white animate-spin" />
     <FaSpinner className="absolute w-32 h-32 text-white animate-spin" />
     <FaSpinner className="absolute text-white animate-spin w-36 h-36" />
    </div>)}>
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
