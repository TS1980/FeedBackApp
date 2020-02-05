module.exports = (blank) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Feedback check!</h3>
                    <p>We need your vote!</p>
                    <p>${blank.body}</p>
                    <div>
                        <a href = "http://localhost:3000/">Yes</a>
                    </div>
                    <div>
                        <a href = "http://localhost:3000/">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};