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
                type: 'range', min: 10, max: 100, step: 10
            },
        },

    },

};

export const main = (args: any) => (<ProgressBar {...args}></ProgressBar>);

main.args = {
    progress: 10,
    className: "",

}


