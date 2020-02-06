const keys = require('../../config/keys');
module.exports = (blank) => {
    return `
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
    `;
};