import {useContext} from "react";
import Usecontext from "../context/Usecontext.js";

const TranslateButton = () => {

    const {setLang} = useContext(Usecontext);
    return(
        <>
            <div className="button-group">
                <button className="lang-btn" data-lang="en" onClick={() =>setLang('en')}>
                    🇬🇧 English
                </button>
                <button className="lang-btn" data-lang="de" onClick={() =>setLang('de')}>
                    🇩🇪 German
                </button>
                <button className="lang-btn" data-lang="fr" onClick={() =>setLang('fr')}>
                    🇫🇷 French
                </button>
            </div>
        </>
    )
}

export default TranslateButton;