import * as heroicons from 'react-icons/hi';
import * as faicons from 'react-icons/fa';
import OutlineButton from './OutlineButton';

import "../../index.css"

const icons={"No Icon" : undefined, ...heroicons, ...faicons,}

export default {
    title: 'My Outline Buttons',
    component: OutlineButton,
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

export const Main2 = (args: any) => (<OutlineButton {...args}></OutlineButton>);

Main2.args = {
    children: "Sign in",
    className: "",
    disabled: false,
    type: "submit",

}


