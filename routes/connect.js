// ./routes/connect.js
// * The server updates their list of connections with more.

function connect(app) {
    app.post("/connect", (request, response) => {
        // First, check if the request body has a "nodes" list
        if (!request.body.nodes) {
            // If not, send an error response
            response.status(400).send("No nodes list found in request body.");
        }

        // Otherwise, add the nodes to our global connections set
        for (let i = 0; i < request.body.nodes.length; i++) {
            // Add the node to our connections set
            connections.add(request.body.nodes[i]);
        }

        // Send a success response
        response.status(200).send("Noted!");
    });
}

module.exports = connect;
