(this["webpackJsonptic-tac-toe_game"]=this["webpackJsonptic-tac-toe_game"]||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(10),u=a.n(s),l=(a(9),a(1)),c=a.n(l),i=a(7),o=a(2),m=a(3),p=a(5),h=a(4);var v=function(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(v,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.a.Component),d=a(11);var y=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(d.a)(t[a],3),n=r[0],s=r[1],u=r[2];if(e[n]===e[s]&&e[s]===e[u])return e[n]}return null},k=a(6),b=a.n(k),g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.playerNamePopup()}},{key:"playerNamePopup",value:function(){var e=this;Object(i.a)(c.a.mark((function t(){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.fire({title:"Please enter Player1's name",input:"text",allowOutsideClick:!1});case 2:a=t.sent,r=a.value,localStorage.setItem("player1",r),e.playerNamePopup2();case 6:case"end":return t.stop()}}),t)})))()}},{key:"playerNamePopup2",value:function(){Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.fire({title:"Please enter Player2's name",input:"text",allowOutsideClick:!1});case 2:t=e.sent,a=t.value,localStorage.setItem("player2",a);case 5:case"end":return e.stop()}}),e)})))()}},{key:"popupAlert",value:function(){var e=localStorage.getItem("player1"),t=localStorage.getItem("player2"),a=this.state.xIsNext?e:t;b.a.fire({title:"Congratulation, "+"".concat(a)+"!"}).value}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();if(y(a)||a[e]){if(!y(a))return;this.popupAlert()}else a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"desk",value:function(e){var t=localStorage.getItem("player1"),a=localStorage.getItem("player2");return 0!==e?e%2===0?a+"'s "+"".concat(e)+" move":t+"'s "+"".concat(e)+" move":0==e?"Click here to start again!":"something went wrong!"}},{key:"render",value:function(){var e=this,t=this.state.history,a=t[this.state.stepNumber],r=(y(a.squares),t.map((function(t,a){return n.a.createElement("li",{key:a},n.a.createElement("button",{onClick:function(){return e.jumpTo(a)}},e.desk(a)))})));return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(f,{squares:a.squares,onClick:function(t){return e.handleClick(t)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("ul",null,r)))}}]),a}(n.a.Component);u.a.render(n.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.b47173ee.chunk.js.map