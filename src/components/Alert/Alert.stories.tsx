import Alert from "./Alert";
import "../../index.css"




export default {
    title: 'My Alerts',
    component:Alert ,
    argTypes: {
        theme: {
            control: { type: "select" },
        },
       
        },
};


export const Main = (args: any) => (<Alert {...args}></Alert>);

Main.args = {
    children: "Hello! This is alert component Warning! Sample text here!!!!!!!!!",
    className: "",
    disabled: false,
    type: "submit",   
}


