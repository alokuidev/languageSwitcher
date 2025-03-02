import Usecontext from "./Usecontext.js";
import {useState} from "react";

const contextProvider = ({children}) =>{

    const [lang, setLang] = useState('en');

    return(
        <Usecontext.Provider value={{lang, setLang}}>
            {children}
        </Usecontext.Provider>
    )
}

export default contextProvider;