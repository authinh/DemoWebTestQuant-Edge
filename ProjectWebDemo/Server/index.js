var express = require("express");
var helper = require('./helper');
var app = express();
app.use(express.static("./public"));// khai bao folder public cho khac hang tim
app.set("view engine","ejs");// set ejs
app.set("views","./views");
var data = helper.randomRenderData(10);

var server = require("http").Server(app);
var io = require("socket.io")(server);// khai bao thu vien socke.io
server.listen(3000);
// on dai dien cho lang nghe, lang nghe event connection
io.on("connection", function(socket){// co nguoi goi len thi connection chay

  console.log("co nguoi ket noi:" + socket.id);
  // ngat ket noi
  socket.on("disconnect",function(){
    console.log(socket.id + " ngat ket noi!!!!!!!!");
  });
  // setTimeout 5s refesh;
  setInterval(function(){
    io.sockets.emit("Server-send-data", data);
    data = helper.randomChangeData(data);
  }, 5000);


});


app.get("/", function(rep, res){
  res.render("home");
});
