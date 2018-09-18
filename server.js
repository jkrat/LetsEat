let express = require("express");
let app = express();
const port = 8000;

let bodyParser = require('body-parser');
let session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: "dortmund"}));
app.use(express.static( __dirname + '/client/public/dist/public' ));


// ----------- requirements ------------------

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

// ---------------------------

app.listen(port, ()=> {
    console.log("Listening on: " + port);
});
