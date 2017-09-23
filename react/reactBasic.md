
### Creating a New Application:
```
npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```


什麼是JSX ?
用於在React元件中建立標記（類似XML語法）
單純使用React的函式：
```
React.DOM.h1({className:'row'},'THISISROW');
React.createElement(h1,{className:'row'},'THISISROW');
```
加入JSX：
```
<h1 className="row">THISISROW</h1>
```

```
render:function(){
  return <div className="">text</div>;
}
```
---

### 自訂元件

讓HTML作為一個React元件來呈現，要封裝起來以便render函式標記回傳：

```
var apple = React.createClass({
  render:function(){
    return (
      <div className="row">
        <h1>Hello world</h1>
      </div>
    );
  }
});
```

JSX會render大括號{...}之間的動態值，
任何放在大括號內容都會被運算

```
var text = 'hello';
<h1>{text}</h1>
```
邏輯運算則會放在函式裡面，通過在大括號內呼叫該函式得到結果：

```
function deteTOstring(d){
  return[
    d.getFullYear(),
    d.getMonth()+1,
    d.getDate()
  ].join('-');
};
```
```
<h3>{dateTOstring(new Date())}</h3>
```

使用變數
```js
getIsComplete:function(){
  return this.state.isComplete ? 'is-comolete':'';
},
render:function(){
  var isComplete = this.getIsComplete();
  return <div className={isComplete}>..</div>;
}
```

使用函式

```
getIsComplete:function(){
  return this.state.isComplete ? 'is-comolete':'';
},
render:function(){
  return <div className={this.getIsComplete()};>..</div>;
}
```















































