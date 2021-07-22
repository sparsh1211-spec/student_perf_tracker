
import React from "react";
import {
  
  Switch,
  Route,
  // Link,
  BrowserRouter,
  Redirect, 
} from "react-router-dom";
// import Avatar from "./components/Avatar/Avatar";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";
// import DashboardPage from "./pages/Dashboard.page";
// import LoginPage from "./pages/Login.page";
// import RecordingsPage from "./pages/Recordings.page";
// import SignupPage from "./pages/Signup.page";


interface Props{
   
}

const App: React.FC<Props>=(props) => {
    return (
        <>
       
       
       <BrowserRouter>
       <Switch>
         <Route path="/"exact>
         <Redirect to="/auth/login"></Redirect>
         </Route>
         <Route path="/auth">
           <AuthPage/>
         </Route>
         <Route path={["/dashboard", "/recordings","/batch/:batchNumber/lecture/:lectureNumber"]}>
           <AppContainerPage/>
         </Route>
         <Route>
           <NotFoundPage/>
         </Route>
       </Switch>
       </BrowserRouter>
        </>
    );

};
App.defaultProps={
}

export default React.memo(App);
