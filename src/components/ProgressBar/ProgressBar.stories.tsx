import ProgressBar from "./ProgressBar";

import "../../index.css"


export default {
    title: 'My ProgressBar',
    component: ProgressBar,
    argTypes: {
        theme: {
            control: { type: "select" },
        },

        progress: {
            control: {
                type: 'range', min: 0, max: 100, 
            },
        },

    },

};

export const main = (args: any) => (<ProgressBar {...args}></ProgressBar>);

main.args = {
    progress: 10,
    className: "",

}


