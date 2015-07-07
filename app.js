var express = require('express'),
		path = require("path"),
		liveReload = require('connect-livereload');

var views = path.join(__dirname, "dest/views");

var app = module.exports.app = exports.app = express();
app.use(express.static(__dirname + '/dest'));

app.use(liveReload({
	port: 35729
}));

app.get('/', function (req, res){
	var homePath = path.join(views, "index.min.html");
	res.sendFile(homePath);
})

app.listen(3000, function(){
	console.log("Running! GO CHECK LOCALHOST:3000");
});
