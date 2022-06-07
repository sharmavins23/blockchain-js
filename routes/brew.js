// ./routes/brew.js
// * The server attempts to brew coffee, but fails, because it is a teapot.

function brew(app) {
    // (Attempt) to get some coffee
    app.get("/brew", function (request, response) {
        // Append our navbar
        let responseMessage = global.navbar;

        responseMessage += `<p>I'm a teapot, so I cannot brew coffee!</p>`;

        // Send the response for brewing coffee
        response
            .status(418) // HTTP status code 418: I'm a teapot
            .send(responseMessage); // Response message
    });
}

module.exports = brew;
