Use the `createServer()` method to create an HTTP server:

```javascript
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

`res.writeHead()` method is the status code, 200 means that all is OK
```javascript
var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('hello World');
  res.end();
}).listen(8080);

//
```

`http.createServer()` has a `req` argument that represents the request from the client, as an object 
```javascript
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);
```
http://localhost:8080/summer

result:
/summer


Split the query string into readable parts:

```javascript
var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
```
http://localhost:8080/?year=2017&month=July

result:
2017 July

---

Node.js file that reads the HTML file, and return the content:
```javascript
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('demofile01.html',function(err,data){
    res.write(data);
    res.end();  
    });
}).listen(8080);
```

## Create Files

The File System module has methods for creating new files:

* fs.appendFile()
* fs.open()
* fs.writeFile()

```javascript
`fs.appendFile()` method appends specified content to a file. 
If the file does not exist, the file will be created

var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

The `fs.open()` method takes a "flag" as the second argument, 
if the flag is "w" for "writing", the specified file is opened for writing. 
If the file does not exist, an empty file is created:

```javascript
var fs = require('fs');
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
```

The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exists a new file, containing the specified content, will be created:

```javascript
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
```

---

## Update Files

The File System module has methods for updating files:

* fs.appendFile()
* fs.writeFile()

---

## Delete Files
To delete a file with the File System module,  use the `fs.unlink()` method.

Delete "mynewfile2.txt":
```javascript
var fs = require('fs');
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
```

---

## Rename Files

Rename "mynewfile1.txt" to "myrenamedfile.txt":

```javascript
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
```
如果沒有 mynewfile1.txt檔 會出錯

---

## upload Files

The Formidable module can be downloaded and installed using NPM:

`
npm install formidable
`

include the module in any application:

```javascript
var formidable = require('formidable');
```

### Create an Upload Form
Create a Node.js file that writes an HTML form, with an upload field:

```javascript
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080);

```


### Parse the Uploaded File
Include the Formidable module to be able to parse the uploaded file once it reaches the server.
When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.

```javascript
var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
```

### Save the File

```javascript
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/Users/plusone/Documents/uploadfile' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

```

---


## Built-in URL Module

The URL module splits up a web address into readable parts.

To include the URL module, use the require() method:

```javascript
var url = require('url');
```

`url.parse()` method it will return a URL object with each part of the address as properties:

```javascript
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
```

result:
localhost:8080
/default.htm
?year=2017&month=february
february

---


## Node.js File Server

```javascript
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
```














