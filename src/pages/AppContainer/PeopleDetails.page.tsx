
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOnePeople } from "../../api/individualpeople";
import { People } from "../../models/People";
interface Props {

}

const PeopleDetails: React.FC<Props> = (props) => {
    const { id } = useParams<any>()

    const [people, setPeople] = useState<People>();
    //     const peoplesByIds=useAppSelector(peopleByIdSelector);
    //     const dispatch=useDispatch()
    //     const people=peoplesByIds[id];

    //     useEffect(()=>{
    //         dispatch(currentSelectedPeopleAction(id));//eslint-disable-next-line
    //  },[id])

    useEffect(() => {
        fetchOnePeople(id).then((people) => setPeople(people.data.data));
    }, [id])//eslint-disable-line

if(!people){
    return (<div className="text-3xl font-bold text-red-600">LOADING REQUIRED USER...</div>)
}

    return (
        <>
            {/* {people&&<div className="h-40 text-white bg-gray-600">{people.first_name+people.last_name}<img className="w-16 h-16 m-4 rounded-full" src={people.profile_pic_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" }} /><div>{people.phone_number + + people.education + people.email + people.role + people.birth_date+ people.birth_date + people.birth_year + people.nick_name}</div></div>} */}

            {people&&<div className="flex flex-col items-center p-4 mt-12 ml-56 space-y-1 text-center text-gray-300 bg-gray-600 rounded-lg shadow-xl h-96">
                <div><img className="w-40 h-40 m-4 rounded-full" src={people.profile_pic_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" }} /></div>
                <div className="text-xl font-semibold tracking-wide">{people.first_name+" "+people.middle_name+" "+people.last_name}</div>
                <div className="text-xl font-semibold tracking-wide">{people.phone_number}</div>
                <div  className="text-xl font-semibold tracking-wide">Role: {people.role}</div>
                <div  className="text-xl font-semibold tracking-wide">{people.email}</div>
               </div>}
        </>
    );

};
PeopleDetails.defaultProps = {
}

export default React.memo(PeopleDetails);
