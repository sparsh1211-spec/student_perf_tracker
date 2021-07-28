
import React, { useEffect, useState } from "react";
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
import { User } from "./models/User";
import { me } from "./api";
import Nav from "../src/Nav";
// import DashboardPage from "./pages/Dashboard.page";
// import LoginPage from "./pages/Login.page";
// import RecordingsPage from "./pages/Recordings.page";
// import SignupPage from "./pages/Signup.page";




// const AppContainerPageLazy=React.lazy(()=>import("./pages/AppContainer/AppContainer.page"));


// const AuthPageLazy=lazy(()=>import("./pages/Auth/Auth.page"));


interface Props {

}

const App: React.FC<Props> = (props) => {

  const [user, setUser] = useState<User>();
  console.log(user);

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token || user) {
      return;
    }

    me().then(u => setUser(u));
  }, [token,user])

  console.log("App rerendering and token is: " + token);

  if (!user && token) {
    return <div>Loading....</div>
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/auth/login" />}
          </Route>
          <Route path="/auth">
            {user ? (<Redirect to="/dashboard" />) : (<Suspense fallback={<div className="text-red-500">Loading Auth page....</div>}> <AuthLazy onLogin={setUser} /></Suspense>)}
          </Route>
          <Route path={["/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber"
          ]}>
            <Nav/>
            <Suspense fallback={<div className="text-red-500">Loading APP CONTAINER PAGE...</div>}>
              {user ? (<AppContainerPageLazy user={user!} />) : (<Redirect to="/auth/login" />)}
            </Suspense>
          </Route>
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
