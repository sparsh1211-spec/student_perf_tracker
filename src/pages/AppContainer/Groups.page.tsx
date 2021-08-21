
import React from "react";
import { groupsLoadingSelector, groupQuerySelector, groupsSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";
import { GoSearch } from "react-icons/go"
import { Link, useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsQueryAction } from "../../actions/groups.actions";


interface Props {

}

const Groups: React.FC<Props> = () => {
    const history = useHistory();
    const groups = useAppSelector(groupsSelector);
    const query = useAppSelector(groupQuerySelector);
    const loading = useAppSelector(groupsLoadingSelector);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     fetchGroups({ status: "all-groups", query }).then((groups) => groupActions.queryCompleted(query, groups));
    // }, [])//eslint-disable-line


    return (
        <>
            <div className="ml-24">
                <div className="flex mt-4">
                    <GoSearch className="w-6 h-12 pl-2 bg-gray-200 border-b border-black" />
                    <input value={query} onChange={(event) => {
                        dispatch(groupsQueryAction(event.target.value));
                    }} className="h-12 pl-2 mb-12 bg-gray-200 border-b border-black outline-none w-96" placeholder="Search here"></input>
                    {loading && <FaSpinner className="mt-4 animate-spin" />}</div>
                {groups.map((item, index) => {

                    const itemnumber = index;
                    if (itemnumber % 2 === 0) {
                        return (
                            <div className="pl-4 text-xl font-bold text-black bg-gray-400 cursor-pointer "><Link to={"/groups/" + item.id}>{item.name}</Link></div>
                        );
                    }
                    return (<div onClick={() => {
                        // groupActions.selectedGroupId(item.id)
                        history.push("/groups/" + item.id)
                    }} className="pl-4 text-xl font-bold text-gray-200 bg-gray-800 cursor-pointer ">{item.name}</div>)
                })}{!loading && groups.length === 0 && "No data, Please search a Group"}</div>

        </>
    )
}
Groups.defaultProps = {
}

export default React.memo(Groups);
