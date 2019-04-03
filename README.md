# udacity-c2-basic-server

This is a simple node-express server to get your feet wet with requests and responses.

## Setup 
Install dependendencies (requires installation of NodeJS). In your command line, enter:

`npm i`

Install global dependencies:
`npm i -g typescript`

This will install required packages such as express for request handling and body-parser for making post data easier to use.

## Running Locally
To start a developer server that will automatically restart when changes are made to your typescript files run:

`npm run dev`

By default, the server will run on http://localhost:8082

## Packing for Production
To transpile to javascript, run:

`npm run tsc`

By default, the output will be located in ./www

## Important Files

The source code for this demo resides in the ./src directory.

### src/server.ts
The main code for this demo is located in the ./src/server.ts file. This includes 

### src/cars.ts
This is a javascript object containing a list of cars. This will be useful for providing data for simple endpoints.
