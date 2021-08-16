
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { currentSelectedPeopleAction } from "../../actions/cdremovepeople";
import { peopleByIdSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {

}

const UserDetails: React.FC<Props> = (props) => {

    const id = +(useParams<{ id: string }>().id);
    const peopleByIds = useAppSelector(peopleByIdSelector);
    const dispatch = useDispatch();
    const people = peopleByIds[id];

    useEffect(() => {
        dispatch(currentSelectedPeopleAction(id));//eslint-disable-next-line
    }, [id])
    return (
        <>
            {people && <div className="flex flex-col">
                <div><img src={people.profile_pic_url}></img></div>
                <div>{people.first_name}</div>
                <div>{people.middle_name}</div>
                <div>{people.last_name}</div>
                <div>{people.email}</div>
                <div>{people.phone_number}</div>
                <div>{people.role}</div>
            </div>}
        </>
    );

};
UserDetails.defaultProps = {
}

export default React.memo(UserDetails);
