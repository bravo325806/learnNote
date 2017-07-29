

### 啟動 mongodb:

```
mongod --dbpath ~/data/db
```


在輸入資料之前，先使用 use 選擇 database：

```
use DBname
```

用 insert 指令將一些資料輸入到 xxx 這個 collection：
db.xxx.insert(
  {
    ....
)


在執行這個動作時，如果遇到 collection 不存在的狀況，
MongoDB 會自動建立這個 collection。在執行之後，會傳回一個 WriteResult 物件：

```
WriteResult({ "nInserted" : 1 })
```
nInserted 的值就是輸入資料的筆數

所有儲存在 collection 中的 document 都會有一個 ```_id``` field 作為 primary key，
如果輸入資料時沒有加上這個 field，MongoDB 會自動產生一個 ```ObjectId``` 作為 ```_id```。

---
### 查詢資料：

若要查詢資料，可以使用 find 方法，在查詢前要先指定 database（如果已經有指定過就不用）：
```
use DBname
```

直接執行 find 不加任何查詢條件，就會列出該 collection 中所有的 documents：
```
db.restaurants.find()
```

---

### 指定查詢條件

```
db.restaurants.find( { "AAA": "bbbb" } )
```

使用句點（```.```）對 embedded document 加上查詢條件：

```
db.restaurants.find( { "AAA.aaa": "ccc" } )
```

如果同時使用多個查詢條件，可以直接用逗號分開：
```
db.xxx.find( { "aaa": "bbb", "CCC.ccc": "1122" } )
```

這樣的效果就等於 and 運算。而如果要使用 or 運算，則可使用 $or 運算子

```
db.restaurants.find(
  { $or: [ { "aaa": "bbb" }, { "CCC.ccc": "1122" } ] }
 )
 ```

如果要讓查詢的結果依照 field 來排序，可加上 sort 方法，
並且指定排序的 field 名稱與排列方式，1 代表遞增，-1 代表遞減


---

若要查詢整個 MongoDB 中所儲存的資料量大小等系統資訊，可以使用 `db.stats`

``dataSize`` 是所有未壓縮原始資料的大小
```storageSize``` 是分配給 collections 的空間大小
`fileSize `則是資料實際儲存在硬碟中時所使用到的空間大小
單位都是位元組（bytes）


--- 

### 插入新增資料（Insert）:

```
db.COLLECTION_NAME.insert(document)
```

插入一筆新資料到 users Collection （相當於 SQL 裡的 Table 角色）
```
db.users.insert({ username: "apple", password: "12345678" })
```

含當前時間
```
db.users.insert({ username: "apple", password: "12345678", created: new Timestamp() })
```

### 查詢：
(查詢所有 username 為 fred 的資料)
 ```db.users.find({username:"apple"})```


### limit()

```
db.COLLECTION_NAME.find().limit(NUMBER)
```
```
db.my_db.find()
```
{ "_id" : ObjectId("595e0633819456b25048933f"), "username" : "apple1", "password" : "789" }
{ "_id" : ObjectId("595e0816819456b250489340"), "username" : "apple2", "password" : "123" }
{ "_id" : ObjectId("595e081b819456b250489341"), "username" : "apple3", "password" : "123" }

```
db.my_db.find().limit(2)
```
{ "_id" : ObjectId("595e0633819456b25048933f"), "username" : "apple1", "password" : "789" }
{ "_id" : ObjectId("595e0816819456b250489340"), "username" : "apple2", "password" : "123" }


### 更新：

```
db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)
```

```
db.users.update({username:"apple"},{$set:{password:"789"}})
```
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

查詢之後可以發現資料改變了：
```
db.users.find({username: "apple"})
```
{ ... "username" : "user1", "password" : "789" }

### save():

```
db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})
```
The save() method replaces the existing document:

```
db.my_db.find()
```
{ "_id" : ObjectId("595e0633819456b25048933f"), "username" : "apple1", "password" : "123" }

```
db.my_db.save({ "_id" : ObjectId("595e0633819456b25048933f"), "username" : "apple1", "password" : "789" })
```
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

```
db.my_db.find()
```
{ "_id" : ObjectId("595e0633819456b25048933f"), "username" : "apple1", "password" : "789" }



---

### 刪除資料:

```
db.COLLECTION_NAME.remove(DELLETION_CRITTERIA)
```

```
db.users.remove({username:"apple"})
```
WriteResult({ "nRemoved" : 1 })

---

### 刪除DB:
```
db.dropDatabase()
```
> show dbs
admin  0.000GB
local  0.000GB
my_db  0.000GB
test   0.000GB

> use test
switched to db test
> db.dropDatabase()
{ "dropped" : "test", "ok" : 1 }

> show dbs
admin  0.000GB
local  0.000GB
my_db  0.000GB

---

### 新增Collection:

```
db.createCollection("newCollectionName")
```
{ "ok" : 1 }

```
show collections
```
firstCollection
newCollectionName


### 刪除Collection:

```
db.COLLECTION_NAME.drop()
```

```
db.firstCollection.drop()
```
true

---



---
### Example:


```js
var mongodb = require('mongodb');
var mongodbServer = new mongodb.Server('localhost', 27017, { auto_reconnect: true, poolSize: 10 });
var db = new mongodb.Db('my_db', mongodbServer);
/* open db */
db.open(function() {
    /* Select 'contact' collection */
    db.collection('users', function(err, collection) {
        /* Insert a data */
        collection.insert({
            username: 'Jiayi',
            email: 'Jiayi@gmail.com',
            tel: [
                '0987xxx4xx',
                '0912xxxxxx'
            ]
        }, function(err, data) {
            if (data) {
                console.log('Successfully Insert');
            } else {
                console.log('Failed to Insert');
            }
        });
        /* Querying */
        collection.find({ name: 'Jiayi' }, function(err, data) {
            if (data) {
                console.log('Name: ' + data.username + ', email: ' + data.email);
               
            } else {
                console.log('Cannot found');
            }
        });
    });
});
```
---
### koa mongo 完整範例


```js
var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var views = require('co-views');
var mongo = require('koa-mongo');
const logger = require('koa-logger')

var mongodb = require('mongodb');
var mongodbServer = new mongodb.Server('localhost', 27017, {
    auto_reconnect: true,
    poolSize: 10
});
var db = new mongodb.Db('my_db', mongodbServer);
var render = views(__dirname, {
    map: {
        html: 'swig'
        }
    });
var app = koa();
app.use(logger());
app.use(bodyParser());


var router = new Router();
router.get('/', function*() {
    this.body = yield render("index");
});
router.post('/', function*() {
    var userlogin = this.request.body.user;
    var userStr = JSON.stringify(userlogin);
    var passwordlogin = this.request.body.password;
    var passwordStr = JSON.stringify(passwordlogin);
    //console.log('you get user name ' + userlogin);
    //console.log('you get password ' + passwordStr);

    this.body = yield render("index");
    db.open(function() {
        db.collection('userLogin', function(err, collection) {
        /* Insert a data */
        collection.insert({
            username: userlogin,
            password: passwordStr,
        }, function(err, data) {
        if (data) {
            console.log('Successfully Insert');
        } else {
            console.log('Failed to Insert');
        }
        });
    /* Querying */
    collection.find({
        }, function(err, data) {
        if (data) {
            console.log('Name: ' + data.username + ', email: ' + data.email);
        }else{
            console.log('Cannot found');
             }
            });
        });
        db.close();
    });
});
app.use(router.middleware());
app.listen(3000);
console.log("listening 3000 port");

```







