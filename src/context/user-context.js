import { createContext } from "react";


const context = createContext(
    ""//defaultValue
);

//export default context;
export const Provider = context.Provider;
export const Consumer = context.Consumer;
