var express = require("express");
var helper = require('./helper');
var app = express()

app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./views");

var data = helper.randomRenderData(5);
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(3000);

io.on("connection", function(socket){
  console.log("has a connection:" + socket.id);

  socket.emit("Server-send-data", data);
  // listen event disconnect
  socket.on("disconnect",function(){
    console.log(socket.id + " disconnected!!!!!!!!");
  });

  socket.on("Client-send-data", function(){
    socket.emit("Server-send-data", data);
  });


});

// setInterval 5s refesh;
setInterval(function(){
  io.sockets.emit("Server-send-data", data);
  data = helper.randomChangeData(data);
}, 5000);

app.get("/", function(rep, res){
  res.render("home");
});
