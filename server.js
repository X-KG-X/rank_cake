const express = require("express");
const app = express();
const path = require("path"); 
//******test connection */
// app.get('/', (request, response) => {
//    response.send("Hello Express");
// });

// for API
app.use(express.json());


app.listen(8000, () => console.log("listening on port 8000"));

app.use(express.static( __dirname + '/public/dist/public' ));


// app.all("*", (req,res,next) => {
//   res.sendFile(path.resolve("./public/dist/public/index.html"))
// });

require("./server/config/routes")(app)
