(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(89),r=a.n(n),i=a(13),o=a(4),d=a(5),l=a(10),j=a(11),b=(a(103),a(104),a(17)),h=a(46),u=a(90),m=a(2);var x=function(){return Object(m.jsxs)("div",{className:"controls",children:[Object(m.jsx)(b.b,{to:"/todo",className:"link",children:Object(m.jsx)(h.a,{size:20})}),Object(m.jsx)(b.b,{to:"/add-new",className:"link",children:Object(m.jsx)(u.a,{size:20})})]})},O=a(30),v=a.n(O);a(110);var f=function(e){var t=e.taskRemaining;return Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsxs)("div",{className:"navbar-task",children:[Object(m.jsx)("h1",{className:"navbar-task-count",children:t}),Object(m.jsx)("h5",{children:"remaining"})]}),Object(m.jsx)("div",{className:"navbar-date",children:v()(new Date).format("LL")})]})},g=a(91);a(111);var N=function(e){var t=e.todo,a=t.task,s=t.title,c=t.deadLine;return Object(m.jsxs)("div",{className:"todo-card",children:[Object(m.jsxs)("div",{className:"todo-info",children:[Object(m.jsx)(g.a,{size:"25px"}),Object(m.jsxs)("div",{className:"todo-task-and-title",children:[Object(m.jsx)("h5",{className:"card-title",children:s}),Object(m.jsx)("div",{className:"todo-task",children:a})]})]}),Object(m.jsx)("h6",{className:"todo-date",children:v()(c).calendar().split(" ")[0]})]})},p=(a(112),a(25));var k=function(e){var t=e.todoList;return Object(m.jsx)("div",{className:"list-wrapper",children:0===t.length?Object(m.jsxs)("div",{className:"empty-list",children:[Object(m.jsx)("h1",{children:"Let's get some work done!"}),Object(m.jsx)(b.b,{to:"/add-new",className:"link-card",children:Object(m.jsx)(p.a,{children:"ADD ITEM"})})]}):t.map((function(e,t){return Object(m.jsx)(b.b,{to:"/todo-details/"+e.id,className:"link-card",children:Object(m.jsx)(N,{todo:e})},t)}))})},y=a(66),L=a(98),T=a(31),w=(a(211),{title:"",category:"",task:"",dataCreated:new Date,deadLine:""}),C=T.b({title:T.c().max(25,"Must be 25 characters or less").required("Required"),category:T.c().max(20,"Must be 20 characters or less").required("Required"),task:T.c().required("Required"),deadLine:T.a().required("Required")}),B=function(e){var t=e.addTodo,a=Object(L.a)({initialValues:w,validationSchema:C,onSubmit:function(e){console.log(e),t(Object(y.a)(Object(y.a)({},e),{},{id:Math.floor(1e4*Math.random())}))}});return Object(m.jsxs)("form",{onSubmit:a.handleSubmit,className:"list-wrapper",children:[Object(m.jsx)("label",{className:"form-label",htmlFor:"title",children:"Title"}),Object(m.jsx)("input",{id:"title",name:"title",type:"text",className:"form-control",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.title}),a.touched.title&&a.errors.title?Object(m.jsx)("div",{className:"form-text",children:a.errors.title}):null,Object(m.jsx)("label",{className:"form-label",htmlFor:"category",children:"Category"}),Object(m.jsx)("input",{id:"category",name:"category",type:"text",className:"form-control",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.category}),a.touched.category&&a.errors.category?Object(m.jsx)("div",{className:"form-text",children:a.errors.category}):null,Object(m.jsx)("label",{className:"form-label",htmlFor:"task",children:"Task"}),Object(m.jsx)("input",{id:"task",name:"task",type:"text",className:"form-control",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.task}),a.touched.task&&a.errors.task?Object(m.jsx)("div",{className:"form-text",children:a.errors.task}):null,Object(m.jsx)("label",{className:"form-label",htmlFor:"deadLine",children:"Dead Line"}),Object(m.jsx)("input",{id:"deadLine",name:"deadLine",type:"date",className:"form-control",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.deadLine}),a.touched.deadLine&&a.errors.deadLine?Object(m.jsx)("div",{className:"form-text",children:a.errors.deadLine}):null,Object(m.jsx)(p.a,{type:"submit",id:"submit-btn",children:"Submit"})]})},D=a(7),S=(a(212),a(64)),q=a(65);var M=function(e){var t=e.getTodoDetails,a=e.deleteTodo,s=Object(D.g)(),c=Object(D.h)().id,n=t(Number(c));return console.log("ZZZ",n),0===n.length?Object(m.jsx)(D.a,{to:{pathname:"/NoMatch"}}):Object(m.jsxs)("div",{className:"list-wrapper",children:[Object(m.jsxs)("div",{className:"head",children:[Object(m.jsxs)(S.a,{className:"head-top",children:[Object(m.jsx)("h3",{className:"todo-title",children:n[0].title}),Object(m.jsx)(p.a,{variant:"outline-danger",id:"del-btn",onClick:function(){a(Number(c)),s.push("/todo")},children:Object(m.jsx)(h.b,{})})]}),Object(m.jsxs)(S.a,{children:[Object(m.jsx)(q.a,{xs:4,children:n[0].category}),Object(m.jsx)(q.a,{children:Object(m.jsx)("h6",{className:"todo-date",children:v()(n[0].deadLine).calendar()})})]})]}),Object(m.jsx)("div",{className:"body",children:n[0].task})]})},R=a(97);a(213);var F=function(){var e=Object(D.g)();return Object(m.jsxs)("div",{className:"no-match",children:[Object(m.jsx)("h5",{children:"Oopsie! Something's missing..."}),Object(m.jsx)("h6",{children:"The page you were looking for doesn't exit , isn't available or was loading incorrectly."}),Object(m.jsx)(p.a,{variant:"success",onClick:function(){return e.push("/todo")},children:"Home"})]})},z=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getTodoDetails=function(t){return e.state.todos.filter((function(e){return e.id===t}))},e.addTodo=function(t){e.setState((function(e){return{todos:[t].concat(Object(i.a)(e.todos))}}))},e.deleteTodo=function(t){var a=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:a})},e.state={todos:[]},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsx)(b.a,{children:Object(m.jsxs)(R.a,{id:"app-wrapper",children:[Object(m.jsx)(f,{taskRemaining:this.state.todos.length}),Object(m.jsx)(x,{}),Object(m.jsxs)(D.d,{children:[Object(m.jsx)(D.b,{exact:!0,path:"/todo",children:Object(m.jsx)(k,{todoList:this.state.todos})}),Object(m.jsx)(D.b,{path:"/add-new",children:Object(m.jsx)(B,{addTodo:this.addTodo})}),Object(m.jsx)(D.b,{path:"/todo-details/:id",children:Object(m.jsx)(M,{getTodoDetails:this.getTodoDetails,deleteTodo:this.deleteTodo})}),Object(m.jsx)(D.b,{path:"*",children:Object(m.jsx)(F,{})})]})]})})}}]),a}(s.Component);a(214);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.452ab92e.chunk.js.map