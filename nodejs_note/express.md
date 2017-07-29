
```
npm install express --save 
```

res.send()：傳送HTTP


```js
var express = require('express');
var app = express();

//主頁輸出
 app.get('/', function (req, res) {
   res.send('Hello GET');
})
app.post('/', function (req, res) {
   console.log("主頁POST請求");
   res.send('Hello POST');
})
app.get('/del_user', function (req, res) {
   console.log("/del_user 響應刪除請求");
   res.send('删除頁面');
}) 
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 請求");
   res.send('用戶列表頁面');
})
 
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("造訪： http://127.0.0.1:%s",port)
 
})
```

測試POST
```curl -X POST 127.0.0.1:3000/ -d "test"```

