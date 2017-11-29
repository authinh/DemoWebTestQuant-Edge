var express = require("express");

var app = express();
app.use(express.static("./public"));
app.set("view engine","ejs");// set ejs
app.set("views","./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function(socket){

  console.log("co nguoi ket noi:" + socket.id);

  socket.on("disconnect",function(){
    console.log(socket.id + " ngat ket noi!!!!!!!!");
  });

  socket.on("Client-send-data", function(data){
    console.log(data);
    io.sockets.emit("Server-send-data", data+"8");
  });

});


app.get("/", function(rep, res){
  res.render("home");
});
