(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),s=t.n(l),u=(t(14),t(6)),i=t(1),c=t(2),p=t(4),o=t(3),y=t(5),h=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(){return e.props.handleTurns(e.props.idx)},className:"square"},this.props.value))}}]),a}(n.Component),m=(t(15),function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"restart"},r.a.createElement("button",{onClick:this.props.handleRestart},"Restart"))}}]),a}(n.Component)),d=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null," Player 1 Input Your Emoji: "),r.a.createElement("input",{className:"player1",type:"text",value:this.props.player1Input,onChange:this.props.handleChangeP1}),r.a.createElement("br",null),r.a.createElement("label",null," Player 2 Input Your Emoji: "),r.a.createElement("input",{className:"player2",type:"text",onChange:this.props.handleChangeP2}))}}]),a}(n.Component),f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],b=function(e,a){return e.every(function(e){return a.includes(e)})},g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(p.a)(this,Object(o.a)(a).call(this,e))).player1Turn="Player 1's Turn!",t.player2Turn="Player 2's Turn!",t.handleTurns=function(e){var a=t.state,n=a.squares,r=a.player,l=a.player1Ticks,s=a.player2Ticks;""===n[e]&&(r===t.player1Turn?n[e]=t.state.player1Input:n[e]=t.state.player2Input,t.setState({squares:n,player:r===t.player1Turn?t.player2Turn:t.player1Turn,player1Ticks:r===t.player1Turn?[].concat(Object(u.a)(l),[e]):l,player2Ticks:r===t.player2Turn?[].concat(Object(u.a)(s),[e]):s}))},t.handleWinning=function(){for(var e=0;e<f.length;e++){if(b(f[e],t.state.player1Ticks)){t.setState({squares:t.state.squares.map(function(e){return""===e?null:e}),player:"Player 1 wins!",gameOver:!0});break}if(b(f[e],t.state.player2Ticks)){t.setState({squares:t.state.squares.map(function(e){return""===e?null:e}),player:"Player 2 wins!",gameOver:!0});break}("Player 1 wins!"===t.state.player||t.state.squares.includes("")||t.state.squares.includes(null))&&("Player 2 wins!"===t.state.player||t.state.squares.includes("")||t.state.squares.includes(null))||t.setState({player:"The match was a draw...",gameOver:!0})}},t.handleRestart=function(){document.getElementById("emojis").reset(),t.setState({squares:Array(9).fill(""),player:t.player1Turn,player1Ticks:[],player2Ticks:[],player1Input:"X",player2Input:"O"})},t.handleChangeP1=function(e){t.setState({player1Input:t.state.player1Input===t.state.player2Input?"X":e.target.value})},t.handleChangeP2=function(e){t.state.player1Input!==t.state.player2Input&&t.setState({player2Input:e.target.value})},t.state={squares:["","","","","","","","",""],player:t.player1Turn,player1Ticks:[],player2Ticks:[],player1Input:"X",player2Input:"O",gameOver:!1},t}return Object(y.a)(a,e),Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,a){a.player!==this.state.player&&this.handleWinning()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"Tic Tac Toe"),r.a.createElement("h3",{className:"turns"},this.state.player),r.a.createElement("form",{id:"emojis"},r.a.createElement(d,{handleChangeP1:this.handleChangeP1,handleChangeP2:this.handleChangeP2})),r.a.createElement("div",{className:"gameboard"},this.state.squares.map(function(a,t){return r.a.createElement(h,{value:a,key:t,idx:t,handleTurns:e.handleTurns,handleWinning:e.handleWinning})})),r.a.createElement(m,{handleRestart:this.handleRestart}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.86e0b2c6.chunk.js.map