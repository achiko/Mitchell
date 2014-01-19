var express = require('express')  , http = require('http')  , path = require('path');
var app = express();


app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  //app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(__dirname + '/web'));
  app.use(express.compress());
});



//--  Show Main Page
app.get('/', function(request, res){

      	res.sendfile("web/main.html");
});


app.get('/api/data', function(request, res){
      	
      	res.sendfile("web/data.txt");
});



////////////////////////////////////////////////

var port = process.env.PORT || 5000;

app.listen(port, function() {
	  console.log("Listening on " + port);
});
