import Content from "./component/Content.jsx";
import TranslateButton from "./component/TranslateButton.jsx";

const App = () =>{
    return(
        <>
            <div className="container">
                <div className="card">
                    <Content/>
                    <TranslateButton/>
                </div>
            </div>
          </>
          )
};

export default App;