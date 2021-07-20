import Button from "./Button";
import * as heroicons from 'react-icons/hi';
import * as faicons from 'react-icons/fa';

import "../../index.css"

const icons={"No Icon" : undefined, ...heroicons, ...faicons,}

export default {
    title: 'My Buttons',
    component: Button,
    argTypes: {
        theme: {
            control: { type: "select" },
        },
        Icon: {
            options:Object.keys(icons),
            mapping:icons,
            control: {
                type: "select",
            },
        },
    },
};

export const main = (args: any) => (<Button {...args}></Button>);

main.args = {
    children: "Sign in",
    className: "",
    disabled: false,
    type: "submit",

}


