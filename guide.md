# Building A Simple AI Chatbot With Web Speech API And Node.js

## To build the web app, we’re going to take three major steps:
1. Use the `Web Speech API’s` `SpeechRecognition` interface to listen to the user’s voice.
2. Send the user’s message to a commercial natural-language-processing API as a text string.
3. Once `API.AI` returns the response text back, use the `SpeechSynthesis` interface to give it a synthetic voice.


## PREREQUISITES
This tutorial relies on Node.js. You’ll need to be comfortable with JavaScript and have a basic understanding of Node.js.

Make sure [Node.js](https://nodejs.org/en) is installed on your machine, and then we’ll get started!

## Setting Up Your Node.Js Application

First, let’s set up a web app framework with Node.js. 
Create your app directory, and set up your app’s structure like this:
```
.
├── index.js
├── public
│   ├── css
│   │   └── style.css
│   └── js
│       └── script.js
└── views
    └── index.html
```

Then, run this command to initialize your Node.js app:

```
$ npm init -f
```
The `-f` accepts the default setting, or else you can configure the app manually without the flag. Also, this will generate a `package.json` file that contains the basic info for your app.

Now, install all of the dependencies needed to build this app:

```
$ npm install express socket.io apiai --save
```
With the `--save` flag added, your `package.json` file will be automatically updated with the dependencies.


We are going to use [Express](https://expressjs.com/), a Node.js web application server framework, to run the server locally. To enable real-time bidirectional communication between the server and the browser, we’ll use [Socket.IO](https://socket.io/). Also, we’ll install the natural language processing service tool, [API.AI](https://cloud.google.com/dialogflow/docs) in order to build an AI chatbot that can have an artificial conversation.

Socket.IO is a library that enables us to use WebSocket easily with Node.js. By establishing a socket connection between the client and server, our chat messages will be passed back and forth between the browser and our server, as soon as text data is returned by the Web Speech API (the voice message) or by API.AI API (the “AI” message).


Now Implement the Logic in your files. 

HAPPY CODING -- @wittedtech



























