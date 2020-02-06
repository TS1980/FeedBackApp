const keys = require('../../config/keys');
module.exports = (blank) => {
    /*return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Feedback check!</h3>
                    <p>We need your vote!</p>
                    <p>${blank.body}</p>
                    <div>
                        <a href = "${keys.domain}"/api/surveys/thanks>Yes</a>
                    </div>
                    <div>
                        <a href = "${keys.domain}"/api/surveys/thanks>No</a>
                    </div>
                </div>
            </body>
        </html>
    `;*/
    return `
    <div>
            <div style="text-align: center;">
                    <h2 
                    style="background-color: #0d47a1;
                    color: white;">Feedback check!</h2>
                    <p>We need your vote!</p>
                    <p>${blank.body}</p>
                    <nav>
                        <a href="${keys.domain}/api/surveys/thanks" style="background-color: #0d47a1;
                        border: none;
                        color: white;
                        padding: 10px 15px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;" >Yes</button>
                        <a href="${keys.domain}/api/surveys/thanks"
                        style="background-color: #bbdefb;
                        border: none;
                        color: black;
                        padding: 10px 15px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;">No</button>
                    </nav>
            </div>
    </div>
    `;
};