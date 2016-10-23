# Polyredux

This is my base project for creating Polymer redux applications

### Setup

##### Install

Install [yarn](https://yarnpkg.com/)

Then install the bower and npm deps with yarn:

    yarn install

If you are having issues (Windows I am looking at you),
fallback to using standard npm & bower install

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    npm start

### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    npm build

### Preview the build

Serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    npm serve:unbundled

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    npm serve:bundled

### Run tests

This command will run
[Web Component Tester](https://github.com/Polymer/web-component-tester) against the
browsers currently installed on your machine.

    npm test
