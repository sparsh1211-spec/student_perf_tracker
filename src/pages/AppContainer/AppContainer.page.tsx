
import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { User } from "../../models/User";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props{

  user:User;
   
}

const AppContainer: React.FC<Props>=({user}) => {
    return (
        <div className="flex flex-row">
            <Sidebar user={user}/>
            <Switch>
             <Route path="/dashboard">
           <DashboardPage/>
         </Route>
         <Route path="/recordings">
           <RecordingsPage/>
         </Route>
         <Route path="/batch/:batchNumber/lecture/:lectureNumber">
             <LecturePage/>
         </Route>
         </Switch>
        </div>
    );

};
AppContainer.defaultProps={
}

export default React.memo(AppContainer);
