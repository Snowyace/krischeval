var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
//define engine and folders
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
//any static files requested by src/href will be directed to the public directory through this method
app.use(express.static(__dirname + '/public')); 

//routes
var route = require('./controllers/routes');
app.get('/',route.root);
app.get('/resume',route.resume);
app.get('/ethnography',route.ethnography);
app.get('/photoseries',route.photoseries);
app.get('/studyspace',route.studyspace);
app.get('/uaaredesign',route.uaaredesign);
app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
app.get('port') );
});