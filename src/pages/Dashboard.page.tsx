
import React from "react";
import { Link } from "react-router-dom";

interface Props{
   
}

const Dashboard: React.FC<Props>=(props) => {
    return (
        <>
            <div>Dashboard_Page h bhai</div>
            <div><Link to="/recordings" className="font-bold text-blue-700 underline">Go to Recordings</Link></div>
        </>
    );

};
Dashboard.defaultProps={
}

export default React.memo(Dashboard);
