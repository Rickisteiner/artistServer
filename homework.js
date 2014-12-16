var msg ="";
var http = require("http")
var server = http.createServer(function(req,res){
  var path = req.url;
  console.log(path);

  var parent = path.split("/")[2];
  var child = path.split("/")[3];

  if (path === "/artist") {
    msg = "<html><body><ul><li><a href='http://localhost:2000/artist/TaylorSwift'>Taylor Swift</a></li><li><a href='http://localhost:2000/artist/LilyAllen'>Lily Allen</a></li><li><a href='http://localhost:2000/artist/Sia'>Sia</a></li></ul></body></html>";
  }

  else if (path === "/artist/" + parent) {

    if (parent === "TaylorSwift") {
    msg ="<html><body><ul><li>Fearless</li><li>Speak Now</li></ul></body></html>";
    }
    if (parent === "LilyAllen") {
      msg ="<html><body><ul><li>Its Not Me Its You</li><li>Sheezus</li></ul></body></html>";
    }
    if (parent === "Sia") {
      msg ="<html><body><ul><li>1000 Forms Of Fear</li><li>We Are Born</li></ul></body></html>";
    }
  }

  else if (path === "/artist/" + parent + "/" + child) {

    if ((parent === "TaylorSwift") && (child === "Fearless")) {
      msg ="<html><body><ul><li>Fearless</li><li>Fifteen</li><li>White Hourse</li></ul></body></html>";
    }
    if ((parent === "TaylorSwift") && (child === "SpeakNow")) {
      msg ="<html><body><ul><li>Mine</li><li>Sparks Fly</li><li>Mean</li></ul></body></html>";
    }
    if ((parent === "LilyAllen") && (child === "ItsNotMeItsYou")) {
      msg ="<html><body><ul><li>22</li><li>I Could Say</li><li>Him</li></ul></body></html>";
    }
    if ((parent === "LilyAllen") && (child === "Sheezus")) {
      msg ="<html><body><ul><li>L8 CMMR</li><li>Air Balloon</li><li>URL Badman</li></ul></body></html>";
    }
    if ((parent === "Sia") && (child === "1000FormsOfFear")) {
      msg ="<html><body><ul><li>Chandelier</li><li>Big Girls Cry</li><li>Free The Animal</li></ul></body></html>";
    }
    if ((parent === "Sia") && (child === "WeAreBorn")) {
      msg ="<html><body><ul><li>The Fight</li><li>Big Girls Cry</li><li>Bring Night</li></ul></body></html>";
    }
  }

  else {
    msg = "<h1>Missing something...</h1>";
  }
  res.end(msg);
})

server.listen(2000);
