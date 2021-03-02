(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),a=n(7),r=n.n(a),c=n(2),u=n(3),o=n(5),l=n(4),h=(n(12),n(13),n(0)),d=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:this.renderBoard()})}},{key:"renderSquare",value:function(e){var t=this;return Object(h.jsx)(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"renderRow",value:function(e){for(var t=[],n=0;n<this.props.dimension;n++)t.push(this.renderSquare(n+e*this.props.dimension));return Object(h.jsx)("div",{className:"board-row",children:t},"board-row-"+e)}},{key:"renderBoard",value:function(){for(var e=[],t=0;t<this.props.dimension;t++)e.push(this.renderRow(t));return Object(h.jsx)("div",{className:"game-board",children:e})}}]),n}(i.a.Component);i.a.Component;function m(e){return Object(h.jsx)("button",{className:"square",onClick:e.onClick,children:Object(h.jsx)("div",{className:"content",children:e.value})})}var p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var s;Object(c.a)(this,n),(s=t.call(this,e)).state={dimension:3,tempDimension:3,history:[{squares:[]}],stepNumber:0,xIsNext:!0,lines:[]},s.state.history.squares=Array(s.state.dimension*s.state.dimension).fill(null);var i=[],a=s.calculateRows();return a.forEach((function(e){i.push(e)})),(a=s.calculateCols()).forEach((function(e){i.push(e)})),(a=s.calculateDiags()).forEach((function(e){i.push(e)})),s.state.lines=i,s}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.stepNumber],i=this.calculateWinner(s.squares),a=n.map((function(e,n){var s=n?"Go to move #"+n:"Go to game start";return Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return t.jumpTo(n)},children:s})},n)}));return e=i?"Winner: "+i:"Next player: "+(this.state.xIsNext?"X":"O"),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"Reactic Tac Toe"}),Object(h.jsxs)("section",{className:"setting dimension",children:[Object(h.jsx)("span",{className:"description",children:"Size (3- 10)"}),Object(h.jsx)("input",{className:"board-size-input",type:"number",min:"3",max:"10",onChange:function(e){return t.handleDimensionChange(e)}}),Object(h.jsx)("button",{onClick:function(){return t.handleSubmit()},children:"Change"})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("main",{className:"game-area",children:Object(h.jsx)(d,{squares:s.squares,dimension:this.state.dimension,onClick:function(e){return t.clickSquare(e)}})}),Object(h.jsxs)("section",{className:"game-info",children:[Object(h.jsx)("div",{children:e}),Object(h.jsx)("ol",{children:a})]})]})}},{key:"clickSquare",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();this.calculateWinner(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"calculateWinner",value:function(e){for(var t=0;t<this.state.lines.length;t++){var n=this.state.lines[t];if(!0===this.compareLine(e,n))return e[n[0]]}return null}},{key:"compareLine",value:function(e,t){for(var n=e[t[0]],s=!0,i=1;i<t.length;i++)void 0!==n&&void 0!==e[t[i]]&&n===e[t[i]]||(s=!1);return s}},{key:"calculateWinConditions",value:function(){var e=[],t=this.calculateRows();t.forEach((function(t){e.push(t)})),(t=this.calculateCols()).forEach((function(t){e.push(t)})),(t=this.calculateDiags()).forEach((function(t){e.push(t)})),this.setState({lines:e})}},{key:"calculateRows",value:function(){for(var e=[],t=this.state.dimension,n=0;n<t;n++){for(var s=[],i=0;i<t;i++)s.push(n*t+i);e.push(s)}return e}},{key:"calculateCols",value:function(){for(var e=[],t=this.state.dimension,n=0;n<t;n++){for(var s=[],i=0;i<t;i++)s.push(n+i*t);e.push(s)}return e}},{key:"calculateDiags",value:function(){for(var e=[],t=[],n=[],s=this.state.dimension,i=0;i<s;i++)t.push(i*s+i),n.push((i+1)*s-(i+1));return e.push(t),e.push(n),e}},{key:"handleSubmit",value:function(e){this.setState({dimension:this.state.tempDimension},(function(){this.calculateWinConditions(),this.jumpTo(0)}))}},{key:"handleDimensionChange",value:function(e){var t=3;e.target.value>3&&e.target.value<=10?t=e.target.value:e.target.value>10&&(t=10),this.setState({tempDimension:t})}}]),n}(i.a.Component);r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4a20a10f.chunk.js.map