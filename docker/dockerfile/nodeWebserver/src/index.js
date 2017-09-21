var koa = require('koa');
var app = koa();

var Router = require('koa-router');
var bodyparser = require('koa-bodyparser');

//show post||get console log 
const logger = require('koa-logger');

var server = require('http').createServer(app.callback());
var router = new Router();


router.get('/',function * (){
    this.body = '<h1>Jiayi hello world!!</h1>'
});


app.use(bodyparser());
app.use(router.middleware());
app.listen(3000,function(){
    console.log('listening port 3000');
});
