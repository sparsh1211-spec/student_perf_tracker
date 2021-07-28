
import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
import PasswordRecovery from "../PasswordRecovery.page"
import { User } from "../../models/User";

interface Props {

    onLogin:(user:User)=>void;

}

const Auth: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-row justify-between">
            <Switch>
                <Route path="/auth/login">
                    <LoginPage onLogin={props.onLogin}></LoginPage>
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
