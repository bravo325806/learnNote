### Post example:

```js
var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var views = require('co-views');
var mongo = require('koa-mongo');
const logger = require('koa-logger')

var render = views(__dirname,{
                    map : {html : 'swig'}
                  });
var app = koa();
app.use(logger());
app.use(bodyParser());
var router = new Router();
router.get('/',function * (){
    this.body = yield render("index");
});

router.post('/',function*(){
     //var userlogin = this.request.body.user;
     //var userStr = JSON.stringify(userlogin);
     //var passwordlogin = this.request.body.password;
     //var passwordStr = JSON.stringify(passwordlogin);
    
     //console.log('you get user name '+ userlogin);
     //console.log('you get password '+ passwordStr );
    this.body = yield render("index");    
});

app.use(router.middleware());
app.listen(3000);
console.log("listening 3000 port");
```
---

### koa-router

Install using npm:
```npm install koa-router```

Example:

```js
var router = new Router();

router.get('/', function (ctx, next) {
  // ctx.router available 
});

app.use(router.middleware());
```

---

### co-views

安装co-view的同時，根據你的需要安装`swig`  `ejs`  `jade`
Install using npm:
```npm install co-views```

map:
For example if you wanted to use `swig` for `.html` files 

```js{ map: { html: 'swig' } }```

This defaults to "html". 
For example if you mostly use Jade, then you'd likely want to assign this to:

```{ default: 'jade' }```


View lookup is performed relative to the ./examples directory passed, and the "swig" engine is mapped to ".html" files.

```js
var views = require('co-views');

var render = views('examples', {
  map: { html: 'swig' }
});
```

---

### koa-swig

Install using npm:
```npm install koa-swig```

* First, automatically merge ctx.state from koa 0.14.
* Second, automatically merge ctx.flash.
* Finally, merge custom locals.

---

post 測試 使用 Postman

---

### koa-bodyparser

```js
app.use(bodyParser());
var bodyParser = require('koa-bodyparser');
var passwordlogin = this.request.body.password;
```
字串轉換使用```js JSON.stringify() ```:

```js
var passwordStr = JSON.stringify(passwordlogin);
```
