# palangre
Serve your phishing page to the world

## Legal Disclaimer:
The use of Palangre for illegal or malicious activities is strictly prohibited. The developer and contributors are not responsible for the misuse of this tool.

## What is palangre?
The word "palangre" comes from Spanish and its definition is very simple: "Long, thick rope from which branches with hooks at the ends hang to serve bait to the fish."

In short, the "palangre" is a tool that allows us to serve the hook to the fish, and that is the exact use of this tool, but in the context of hacking.

palangre is developed in [Node.js](https://github.com/nodejs/node#readme), with the help of the following dependencies:
- [express](https://github.com/expressjs/express#readme): Web Server
- [body-parser](https://github.com/expressjs/body-parser#readme): Body parsing middleware.
- [chalk](https://github.com/chalk/chalk#readme): Terminal styling.

## Installation
palangre is developed in node.js and therefore requires it to be installed on our computer, so the first step is to download and install it vía [this link](https://nodejs.org).

Once we have node.js installed, we can proceed to download this repository with git and access its contents:

```sh
git clone https://github.com/ricardoGonzf/palangre
cd palangre
```

palangre works thanks to some magnificent dependencies that must be installed, for that we will use npm:

```sh
npm install
```

Once we have palangre installed, we can proceed to run it:

```sh
npm start
```

After running this program, we can check how a web server has been started at [http://localhost:3000](http://localhost:3000), now we just need to configure it to serve our favorite page.

## Usage
Once we have palangre installed, we can proceed to configure it.

To do this, we go to the `serve.json` file and open it with our favorite text editor; Once we are inside it, it will look something like this:

```json
{
    "port" : "3000",
    "content" : "./serve.html",
    "route" : "/",
    "action" : "/login",
    "method" : "POST",
    "username": "username",
    "password": "password",
    "redirect" : "https://github.com/ricardoGonzf/palangre"
}
```

This file is the one that contains the variables so that the page we want to serve works as it should, the description of each variable is the following:

| Variable | Description |
| --- | --- |
| port | The port where you want to serve your page (Default: 3000) |
| content | The path of your page content (Default: ./serve.html) |
| route | The path where your page will be served (Default: /) |
| action | The form handler path (Default: /login) |
| method | The method that the form will use to send data, it can be GET POST or PUT (Default: POST) |
| username | The name of the form entry for the user (Default: username) |
| password | The name of the form entry for the password (Default: password) |
| redirect | To which page should users be redirected once users have logged in or enter a different page other than the login (Default: https://github.com/ricardoGonzf/palangre) |

Before starting to edit parameters, we must upload our phishing page that we want to serve.

In this case, I am going to upload a modified version of the WordPress login that will send me the username and password of my victim to the /login target with a POST method and from the "username" and "password" inputs, like this I move my file called "wp-login.html" to the root of this repository.

Once I have my page to serve in the root of this repository I can modify the configuration, in this case my configuration is as follows:

```json
{
    "port" : "80",
    "content" : "./wp-login.html",
    "route" : "/",
    "action" : "/login",
    "method" : "POST",
    "username": "username",
    "password": "password",
    "redirect" : "https://wordpress.org"
}
```

Once we have our configuration duly modified to the page that we are going to serve, we can proceed to start palangre:

```sh
npm start
```

Now, you just need to send the link of your page to your victims.

Happy hacking!