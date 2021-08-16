
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { fetchPeoples } from "../../api/peoples";
import { People } from "../../models/People";

interface Props {

}

const Peoples: React.FC<Props> = (props) => {

    // const peoples=useAppSelector(peopleByIdSelector)

    const [peoples, setPeoples] = useState<People[]>([]);
    
    const history=useHistory()
    console.log(peoples)

    useEffect(() => {
        fetchPeoples().then((peoples) => setPeoples(peoples));
    }, [])//eslint-disable-line

    if(!peoples){
        return (<div className="relative flex flex-col items-center justify-center h-screen bg-black">
        <FaSpinner className="absolute w-10 h-10 text-white animate-spin " />
        <FaSpinner className="absolute text-white animate-spin w-14 h-14 " />
        <FaSpinner className="absolute w-20 h-20 text-white animate-spin" />
        <FaSpinner className="absolute w-24 h-24 text-white animate-spin" />
        <FaSpinner className="absolute w-32 h-32 text-white animate-spin" />
        <FaSpinner className="absolute text-white animate-spin w-36 h-36" />
       </div>)
    }

    return (
        <div className="bg-gray-300">
            <div className="flex flex-wrap space-x-2 space-y-2 text-white">{peoples.map((p: People) => <div onClick={() => {history.push("/peoples/" + p.id)
                    }} className="flex flex-col items-center justify-center text-center duration-75 transform bg-indigo-400 border-2 rounded-lg shadow-2xl cursor-pointer h-36 w-36 ease-in-oute-in-out hover:-translate-y-2"><div>{p.first_name + " " + p.last_name}</div><div><img className="w-16 h-16 m-4 rounded-full" src={p.profile_pic_url} alt="" onError={(e: any) => { e.target.onerror = null; e.target.src = "https://cdn.dribbble.com/users/81809/screenshots/3443452/ssg-goku.jpg" }} /></div></div>)}</div>
        </div>
    );

};
Peoples.defaultProps = {
}

export default React.memo(Peoples);
