
import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
import PasswordRecovery from "./PasswordRecovery.page"

interface Props {

}

const Auth: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-row justify-between">
            <Switch>
                <Route path="/auth/login">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/auth/signup">
                    <SignupPage></SignupPage>
                </Route>
                <Route path="/auth/forgotpassword">
                    <PasswordRecovery/>
                </Route>
               
            </Switch>
            <AuthHero></AuthHero>
            
        </div>
    );

};
Auth.defaultProps = {
}

export default React.memo(Auth);
