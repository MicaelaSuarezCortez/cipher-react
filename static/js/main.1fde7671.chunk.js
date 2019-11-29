(this["webpackJsonpcipher-react"]=this["webpackJsonpcipher-react"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),o=a(1),l=a(2),i=a(4),m=a(3),u=a(5),d=function(e){return r.a.createElement("button",{onClick:e.dataEncode,className:"btn btn-success mr-3  btn-lg button"},"Cifrar")},f=function(e){return r.a.createElement("button",{onClick:e.dataDecode,className:"btn btn-success btn-lg button"},"Descifrar")},p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).createRefInputText=r.a.createRef(),a.createRefInputOffset=r.a.createRef(),a.dataEncode=function(e){e.preventDefault();var t=a.createRefInputText.current.value,n=a.createRefInputOffset.current.value;a.props.encode(n,t)},a.dataDecode=function(e){e.preventDefault();var t=a.createRefInputText.current.value,n=a.createRefInputOffset.current.value;a.props.decode(n,t)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-md-6 mx-auto my-3"},r.a.createElement("input",{type:"text",placeholder:"Ingrese aqu\xed n\xb0 de historia cl\xednica",className:"form-control"})),r.a.createElement("div",{className:"col-md-6 mx-auto"},r.a.createElement("input",{ref:this.createRefInputText,placeholder:"Ingrese texto para cifrar la historia",className:"form-control ",type:"text",id:"inputText"}),r.a.createElement("span",{className:"d-block text-warning text-center span",id:"spanText"})),r.a.createElement("div",{className:"col-md-2 mx-auto my-3"},r.a.createElement("input",{ref:this.createRefInputOffset,placeholder:"N\xb0",type:"number",className:"form-control"}),r.a.createElement("span",{className:"d-block text-warning text-center span",id:"spanOffset"})),r.a.createElement("div",{className:"text-center"},r.a.createElement(d,{dataEncode:this.dataEncode}),r.a.createElement(f,{dataDecode:this.dataDecode})),r.a.createElement("div",{className:"text-justify my-3"},r.a.createElement("label",{htmlFor:"inputText",className:"d-block label"},"Historia cl\xednica: ",this.props.resultado),r.a.createElement("label",{htmlFor:"inputText",className:"d-block label"},"Key: ",this.props.offset))))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).encode=function(e,t){var n=[],r=t,c=parseInt(e);console.log("offset:"+c);var s=document.getElementById("spanText"),o=document.getElementById("spanOffset");if(r.length<1)s.innerHTML="No se aceptan espacios en blanco";else if(/^([0-9])*$/.test(r))s.innerHTML='Solo letras de la "A-Z"';else if(isNaN(c))o.innerHTML="Solo n\xfameros mayores a 0";else for(var l=0;l<r.length;l++){s.innerHTML="",o.innerHTML="";var i=(r[l].charCodeAt()-65+c)%26+65,m=String.fromCharCode(i);n.push(m),a.setState({texto:r,offset:c,resultado:n})}},a.decode=function(e,t){for(var n=[],r=t,c=parseInt(e),s=0;s<r.length;s++){var o=(r[s].charCodeAt()-90-c)%26+90,l=String.fromCharCode(o);n.push(l),a.setState({texto:r,offset:c,resultado:n})}},a.state={offset:"",texto:"",resultado:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-2 aside"},r.a.createElement("figure",null,r.a.createElement("img",{src:"https://user-images.githubusercontent.com/45082005/69830939-2134f580-11f5-11ea-8dd4-977b53d83165.png",alt:"logo",className:"image"}),r.a.createElement("span",{className:"frase text-center d-block"},"GOOD HOSPITAL"))),r.a.createElement("div",{className:"col-xs-12 col-sm-9"},r.a.createElement("header",{className:"mx-auto text-center"},r.a.createElement("h2",{className:"header my-4"},"Repositorio de Historias Cl\xednicas"),r.a.createElement("figure",null,r.a.createElement("img",{src:"https://user-images.githubusercontent.com/45082005/69832301-77a53280-11fb-11ea-88dc-991499006afb.PNG",alt:"portada"}))),r.a.createElement(p,{encode:this.encode,decode:this.decode,resultado:this.state.resultado,offset:this.state.offset}))),r.a.createElement("footer",{className:"row"},r.a.createElement("div",null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.1fde7671.chunk.js.map