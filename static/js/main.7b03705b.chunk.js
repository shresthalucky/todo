(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{20:function(t,e,n){t.exports=n(31)},25:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(17),c=n.n(i),o=n(9),l=(n(25),n(19)),s=n(4),u=n(5),d=n(6),h=n(7),m=n(1);var v=function(t){var e=t.title,n=t.path;return r.a.createElement("li",null,r.a.createElement(o.b,{to:n},e))};var p=function(t){return r.a.createElement("nav",null,r.a.createElement("ul",null,Object.keys(t.items).map((function(e){return r.a.createElement(v,{title:e,path:t.items[e].path,key:e})}))))},f=n(14),b=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleInputChange=function(t){a.setState({content:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),a.state.content&&(a.props.submitHandler(Object(f.a)({},a.state,{id:Date.now(),active:!0})),a.setState(Object(f.a)({},a.state,{content:""})))},a.state={content:""},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.content,onChange:this.handleInputChange}),r.a.createElement("button",{type:"submit"},"Add"))}}]),n}(r.a.Component);var E=function(t){var e=t.detail,n=t.actions;return r.a.createElement("div",null,r.a.createElement("h3",null,e.content),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return n.handleActive(e.id)}},e.active?"Done":"Undone"),r.a.createElement("button",{onClick:function(){return n.handleDelete(e.id)}},"Delete")))},j=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.list.filter((function(t){return t.active}));return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(E,{detail:e,key:e.id,actions:t.props.actions})})))}}]),n}(r.a.Component),O=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.list.filter((function(t){return!t.active}));return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(E,{detail:e,key:e.id,actions:t.props.actions})})))}}]),n}(r.a.Component),y=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleActions=function(t,e){var n=a.state.todoLists.filter((function(n){if(n.id===e){if("delete"===t)return!1;n[t]=!n[t]}return!0}));a.setState({todoLists:n})},a.handleAddToList=function(t){console.log(t),a.setState({todoLists:[].concat(Object(l.a)(a.state.todoLists),[t])})},a.navs={active:{path:"/active"},done:{path:"/done"}},a.state={todoLists:[]},a.actionHandlers={handleActive:function(t){return a.handleActions("active",t)},handleDelete:function(t){return a.handleActions("delete",t)}},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement(p,{items:this.navs}),r.a.createElement("main",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:t.navs.active.path})}}),r.a.createElement(m.b,{exact:!0,path:this.navs.active.path},r.a.createElement(b,{submitHandler:this.handleAddToList}),r.a.createElement(j,{list:this.state.todoLists,actions:this.actionHandlers})),r.a.createElement(m.b,{exact:!0,path:this.navs.done.path},r.a.createElement(O,{list:this.state.todoLists,actions:this.actionHandlers})))))}}]),n}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{basename:"/todo"},r.a.createElement(y,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b03705b.chunk.js.map