
import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    touched?: boolean;
    error?: string;

}

const Input: React.FC<Props> = ({ touched, error, className,id, placeholder, ...rest }) => {
    return (
        <div>
            {id&&placeholder&&(<label htmlFor={id} className="sr-only">
                {placeholder}
            </label>)}
            <input id={id}
                {...rest}
                className={"outline-none " + className}
                placeholder={placeholder}/>
            {touched && <div className="text-red-500">{error}</div>}
        </div>
    );

};
Input.defaultProps = {
}

export default React.memo(Input);
