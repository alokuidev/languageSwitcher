const TranslateButton = () => {

    return(
        <>
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
        </>
    )
}

export default TranslateButton;