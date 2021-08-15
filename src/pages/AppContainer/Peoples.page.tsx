
import React, { useEffect, useState } from "react";
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
