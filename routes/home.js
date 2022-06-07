// ./routes/home.js
// * The server serves the default webpage, with a navigation bar.

function home(app) {
    app.get("/", (request, response) => {
        response
            .status(200)
            .sendFile(__dirname + "/html/home.html");
    })
}

module.exports = home;