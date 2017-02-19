var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        
    title:'page one' ,
    content: 'content for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article onecontent for article one'   
    },
    'article-two' : {
    title:'page two' ,
    content: 'content for article two'   
        
    }
    
};
 

function createtemplate(data) {
    var title = data.title;
    var content = data.content;
    var articletemplate =
    `<html>
    
    <div  class = "bottle">
        <head>
            <title>
            ${title}
            </title>
        </head>
        
    <link href="/ui/style.css" rel="stylesheet" />
    

    <body>
         <div>
            <h5> ${content} 2</h5>
            <a href="/" > Home </a> 
            <hr/>
        </div>
    </body>
    </div>         
</html>
`;
    return articletemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName= req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
