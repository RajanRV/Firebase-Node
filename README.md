## Version 1.4.0

Setup :-
 * Use this cmd on root of the project.
    npm install 
 * To setup firebase edit config/firebase.js with firebase-admin and firebase configurations (Both of them are required).
 * For server configuration edit config/server.json.
 * For development run following cmd.
    npm run dev
 * For production run following cmd.
    npm start

How to :-
 * Create Apis :-
    - Create a folder inside apis folder with the name of api you want.
    - inside that folder create controllers and services folders and routes.json file
    - Format of the routes.json file will be as follows:
        [{
            "path": "path/to/api",
            "method": "REQUEST_METHOD",
            "action": "CONTROLLER_NAME.ACTION_NAME",
            "secure": true | false,
            "enabled": true | false
        }]
    - Here we can specify any number of routes we want.
    - If specified action or controllers is not there then that route will be ignored with console warning.
    - Note :- Here path will be prefixed with API_NAME/ACTUAL_PATH
    
Changelog :- 
 * Create global app/framework variable to access all controllers/services/firebase/middlewares etc
 * Apis added (All apis which are currently on can be found in apis folder in separated api named folder.)
 * Routes added (Now we'll need to just create routes.json containing routes info to define routes)
 * Controllers added (All actions that a route performs can be referenced and found in controllers folder of each api folder)
 * Firebase config separated from code. (Firebase and firebase admin can be configured from config/firebase.js)
 * Server configuration (server configurations like port number etc can be modified from config/server.json)
 * Firebase admin token middleware is separated from code and can be found at middlewares/firebase_token.js
 * Port checking added (Port will be veryfied before starting server on that port and will ask to start server from another free port without changing the code.)

TODO :- 
 * Add cli support to create APIs.
 * implement env-cmd package
 * implement themes concept
 * Make One of the Firebase-admin or Firebase optional.
 * implement array of middlewares
 * implement global middlewares https://expressjs.com/en/guide/routing.html find express.Router
 * Add functions and config to global.