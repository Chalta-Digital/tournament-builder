# Backend – ExpressJS based

This [ExpressJS](https://expressjs.com/) template provides the basic infrastructure for a JSON API.

* [FAQ](docs/FAQ.md)
* [Troubleshooting](docs/TROUBLESHOOTING.md)

## Requirements

* [Node.js](https://nodejs.org/en/download/) (v10) => installation instructions for [Linux](https://github.com/nodesource/distributions), use installers for macOS and Windows (don't forget to restart your Bash shell)
* [Postman](https://www.getpostman.com/downloads/) (v7) for API testing

## Project setup

Make sure, you are in the backend directory `cd backend`

Installs all project dependencies specified in [package.json](./package.json).

```bash
npm install
```

## Start the backend with auto-restarts for development

Automatically restarts your backend if you save any changes to local files.

```bash
npm run dev
```

## Start the backend

```bash
npm start
```

## Postman Tests

* You can import the Postman collection from [tests/server.postman_collection.json](./tests/server.postman_collection.json)
* [Extracting data from responses and chaining requests](http://blog.getpostman.com/2014/01/27/extracting-data-from-responses-and-chaining-requests/)

## Debugging with VSCode

Set a breakpoint and click *Debug > Start Debugging*

> Learn more in the [VSCode Debugging Docs](https://code.visualstudio.com/docs/editor/debugging).
