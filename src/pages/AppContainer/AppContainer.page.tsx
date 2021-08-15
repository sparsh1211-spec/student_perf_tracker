
import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
// import { User } from "../../models/User";
import UserInformation from "../../UserInformation";
import DashboardPage from "./Dashboard.page";
// import GroupPage from "./Group.page";
import GroupDetailsPage from "./GroupDetails.page";
import GroupsPage from "./Groups.page";
import LecturePage from "./Lecture.page";
import PeopleDetailsPage from "./PeopleDetails.page";
import PeoplesPage from "./Peoples.page";
import RecordingsPage from "./Recordings.page";

interface Props{

   
}

const AppContainer: React.FC<Props>=() => {
    return (
        <div className="flex flex-row">
            <Sidebar/>
            <Switch>
             <Route path="/dashboard">
           <DashboardPage/>
         </Route>
         <Route path="/usersettings">
            <UserInformation/>
          </Route>
          <Route path="/groups" exact>
            <GroupsPage/>
          </Route>
          <Route path="/peoples" exact>
            <PeoplesPage/>
          </Route>
          <Route path="/groups/:id">
            <GroupDetailsPage/>
          </Route>
          <Route path="/peoples/:id">
            <PeopleDetailsPage/>
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
