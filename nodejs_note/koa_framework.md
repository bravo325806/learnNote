```js
var koa = require('koa');
var app = koa();
var Router = require('koa-router');
var bodyparser = require('koa-bodyparser');
var chart = require('chart.js');
var views = require('co-views');
var router = new Router();
const logger = require('koa-logger'); //show post||get log 
// mongodb
var mongodb = require('mongodb');
var mongodbServer = new mongodb.Server('localhost', 27017, {
    auto_reconnect: true,
    poolSize: 10
});
var db = new mongodb.Db('dbname', mongodbServer); // use 'dbname' db
var render = views(__dirname, {
    map: {
        html: 'swig'
    }
});

app.use(bodyparser());

router.get('/',function * (){
    this.body ='hello world'
});


router.post('/',function * (){
    
});


app.use(router.middleware());
app.listen(3000,function(){
    console.log('listening port 3000');
});

```
