import Content from "./component/Content.jsx";
import TranslateButton from "./component/TranslateButton.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

const App = () =>{
    return(
        <ContextProvider>
            <div className="container">
                <div className="card">
                    <Content/>
                    <TranslateButton/>
                </div>
            </div>
        </ContextProvider>
          )
};

export default App;