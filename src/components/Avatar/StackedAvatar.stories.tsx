import StackedAvatar from "./StackedAvatar";
import "../../index.css"

export default {
    title: 'stackedAvatars',
    component:StackedAvatar ,
};

export const Main = (args: any) => (<StackedAvatar {...args}></StackedAvatar>);

Main.args = {
   
}


