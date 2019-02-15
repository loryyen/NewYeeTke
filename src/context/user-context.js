import { createContext } from "react";


export const { Provider, Consumer } = createContext(
    {
        loginAccount: "",
        loginEvent: () => { },
        logoutEvent: () => { }
    }
);

//export default context;
// export const Provider = context.Provider;
// export const Consumer = context.Consumer;
