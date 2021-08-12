
type Canceler=import ("axios").Canceler

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}

interface Promise{
    [key:string]:Canceler;
}