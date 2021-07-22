import OnlineAvatar from "./OnlineAvatar";
import "../../index.css"

export default {
    title: 'OnlineAvatar',
    component: OnlineAvatar,
    argTypes: {
        profilenumber: {
            control: {
                min: 1,
                max: 12,
            },

        },
    },
};

export const Main = (args: any) => (<OnlineAvatar {...args}></OnlineAvatar>);

Main.args = {
    profilenumber: 1,

}


