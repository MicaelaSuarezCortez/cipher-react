(this["webpackJsonpcipher-react"]=this["webpackJsonpcipher-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(1),s=a(2),i=a(4),u=a(3),m=a(5),f=function(e){return r.a.createElement("button",{onClick:e.data,className:"btn btn-primary mr-3"},"Cifrar")},d=function(){return r.a.createElement("button",{className:"btn btn-primary"},"Descifrar")},p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).createRefInputText=r.a.createRef(),a.createRefInputOffset=r.a.createRef(),a.data=function(e){e.preventDefault();var t=a.createRefInputText.current.value,n=a.createRefInputOffset.current.value;a.props.encode(n,t),console.log(n,t)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement("input",{ref:this.createRefInputText,className:"form-control ",type:"text",id:"inputText"})),r.a.createElement("div",{className:"col-md-6 mx-auto my-3"},r.a.createElement("input",{ref:this.createRefInputOffset,type:"number",className:"form-control"})),r.a.createElement("div",{className:"text-center"},r.a.createElement(f,{data:this.data}),r.a.createElement(d,null)),r.a.createElement("div",{className:"text-center my-3"},r.a.createElement("label",{htmlFor:"inputText"},this.props.resultado))))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).encode=function(e,t){for(var n=[],r=t,c=parseInt(e),o=0;o<r.length;o++){var l=(r[o].charCodeAt()-65+c)%26+65;console.log("Position:"+l);var s=String.fromCharCode(l);n.push(s),console.log("word:"+s),a.setState({texto:r,offset:c,resultado:n})}},a.state={offset:"",texto:"",resultado:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"mx-auto text-center"},r.a.createElement("h1",null,"Cipher")),r.a.createElement(p,{encode:this.encode,resultado:this.state.resultado,offset:this.state.offset}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.60e1e9bb.chunk.js.map