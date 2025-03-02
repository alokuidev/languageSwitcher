import {useContext} from "react";
import Usecontext from "../context/Usecontext.js";

const Content = () => {
    const {lang} = useContext(Usecontext);
    return (
        <>
            <div>
                <h1 id="welcome-text">{lang === 'en' ? 'Welcome' : lang === 'de' ? 'Willkommen' : 'Bienvenue'}</h1>
                <p id="content-text">
                  {lang === 'en' ?
                    'This is a sample paragraph. Click a button to translate.'
                    : lang === 'de' ? 'Willkommen auf unserer Website! Hier kannst du tolle Inhalte entdecken und jeden Tag etwas Neues lernen.'
                    : 'Bienvenue sur notre site web ! Ici, vous pouvez explorer du contenu incroyable et apprendre de nouvelles choses chaque jour.'
                  }
                </p>
            </div>
        </>
    )
}

export default Content;