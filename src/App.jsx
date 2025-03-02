const App = () =>{
    return(
        <>
            <div className="container">
                <div className="card">
                    <h1 id="welcome-text">Welcome</h1>
                    <p id="content-text">
                        This is a sample paragraph. Click a button to translate.
                    </p>
                    <div className="button-group">
                        <button className="lang-btn" data-lang="en">
                            🇬🇧 English
                        </button>
                        <button className="lang-btn" data-lang="de">
                            🇩🇪 German
                        </button>
                        <button className="lang-btn" data-lang="fr">
                            🇫🇷 French
                        </button>
                    </div>
                </div>
            </div>
          </>
          )
};

export default App;