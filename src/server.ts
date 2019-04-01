import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';

(async () => {

  const app = express(); //Create an express applicaiton
  const port = 8082; //default port to listen
  
  app.use(bodyParser.json()); //use middleware so post bodies are accessable as req.body.{{variable}}

  // Root URI call
  app.get( "/", ( req: Request, res ) => {
    res.status(200).send("Welcome to the Cloud!");
  } );

  // Root URI call
  app.get( "/:name", ( req: Request, res ) => {
    let { name } = req.params;

    if ( !name ) {
      return res.status(400).send(`name is required`);
    }

    return res.status(200).send(`Welcome to the Cloud, ${name}!`);
  } );

  // Root URI call
  app.post( "/", async ( req, res ) => {
    const name = req.body.name;

    if ( !name ) {
      return res.status(400).send(`name is required`);
    }

    return res.status(200).send(`Welcome to the Cloud, ${name}!`);
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();