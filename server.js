var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('combined'));

var articleone = {
    title:'page one' ,
    content: 'content for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article one'
};

function createtemplate(data) {
    var title = data.title;
    var content = data.content;
    var articletemplate =
    `<html>
    <style>
    padding-top: 10px;
    padding-left: 10px;
    </style>
        <head>
            <title>
            ${title}
            </title>
        </head>
    <body>
         <div>
            <h5> ${content} 2</h5>
            <a href="/" > Home </a> 
            <hr/>
        </div>
    </body>
        
</html>
`;
    return articletemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/first',function(req,res){
  res.send(createtemplate(articleone));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
