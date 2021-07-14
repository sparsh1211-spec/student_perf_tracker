
import React from "react";
import { useParams } from "react-router-dom";

interface Props{
   
}

const Lecture: React.FC<Props>=(props) => {
    const {lectureNumber, batchNumber}=useParams<any>();
    
    return (
        <div>
            Showing data of lecture #{lectureNumber} of batch #{batchNumber}
        </div>
    );

};
Lecture.defaultProps={
}

export default React.memo(Lecture);
