// ./routes/brew.js
// * The server attempts to brew coffee, but fails, because it is a teapot.

function brew(app) {
    // (Attempt) to get some coffee
    app.get("/brew", function (request, response) {
        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send("I'm a teapot, so I cannot brew coffee!"); // Response message
    });
}

module.exports = brew;
