(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{174:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(18),a=c.n(s),r=(c(174),c(10)),o=c(11),i=c(26),d=c.n(i),j=c(104);c(205);j.a.initializeApp({apiKey:"AIzaSyBZMPl1Huw4zI1qbqLR5m5QRMKTzIeT-40",authDomain:"todo-app-54dd4.firebaseapp.com",projectId:"todo-app-54dd4",storageBucket:"todo-app-54dd4.appspot.com",messagingSenderId:"770504022143",appId:"1:770504022143:web:3415b9ed582bd72e35874a"});var l=j.a;var u=c(4),A=Object(n.createContext)();function b(e){var t=e.children,c="today",s=Object(n.useState)(c),a=Object(r.a)(s,2),i=a[0],j=a[1],b=Object(n.useState)(void 0),m=Object(r.a)(b,2),O=m[0],f=m[1],h=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var e=l.firestore().collection("todos").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));s(t)}));return function(){return e()}}),[]),c}(),x=function(e,t){var c=Object(n.useState)([]),s=Object(r.a)(c,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){var c=t.map((function(t){return Object(o.a)({numOfTodos:e.filter((function(e){return e.projectName===t.name&&!e.checked})).length},t)}));i(c)}),[e,t]),a}(h,function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var e=l.firestore().collection("projects").onSnapshot((function(e){var t=e.docs.map((function(e){return{id:e.id,name:e.data().name}}));s(t)}));return function(){return e()}}),[]),c}()),p=function(e,t){var c=Object(n.useState)([]),s=Object(r.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){var c,n=d()().format("MM/DD/YYYY");c="today"===t?e.filter((function(e){return e.date===n})):"next 7 days"===t?e.filter((function(e){var t=d()(e.date,"MM/DD/YYYY"),c=d()(n,"MM/DD/YYYY"),s=t.diff(c,"days");return s>=0&&s<7})):"all days"===t?e:e.filter((function(e){return e.projectName===t})),o(c)}),[e,t]),a}(h,i);return Object(u.jsx)(A.Provider,{value:{defaultProject:c,selectedProject:i,setSelectedProject:j,todos:p,projects:x,selectedTodo:O,setSelectedTodo:f},children:t})}var m=function(e){var t=e.children,c=Object(n.useRef)(),s=Object(n.useContext)(A).setSelectedTodo;Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){return document.removeEventListener("click",a)}}),[]);var a=function(e){(e.target===c.current||c.current.contains(e.target))&&s(!1)};return Object(u.jsx)("div",{className:"Sidebar",ref:c,children:t})};var O=function(e){var t=e.children;return Object(u.jsx)("div",{className:"Main",children:t})};var f=function(){return Object(u.jsxs)("div",{className:"User",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"logo"})}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsx)("p",{children:"Code Explained"}),Object(u.jsx)("a",{href:"#",children:"Logout!"})]})]})},h=c(19);var x=function(e){var t=e.children,c=e.showModal,s=e.setShowModal,a=Object(n.useRef)(),r=Object(h.useSpring)({top:c?"25%":"0%",opacity:c?1:0,config:{friction:10}});return c&&Object(u.jsx)("div",{className:"Modal",ref:a,onClick:function(e){e.target===a.current&&s(!1)},children:Object(u.jsx)(h.animated.div,{style:r,className:"container",children:t})})},p=c(231),v=c(232),g=c(240),N=c(241),S=c(242),y=c(25),C=c(233),w=c(254),M=c(137);var D=function(e){var t=e.handleSubmit,c=e.heading,n=void 0!==c&&c,s=e.text,a=e.setText,r=e.day,o=e.setDay,i=e.time,d=e.setTime,j=e.todoProject,l=e.setTodoProject,A=e.projects,b=e.showButtons,m=void 0!==b&&b,O=e.setShowModal,f=void 0!==O&&O;return Object(u.jsx)(y.a,{utils:M.a,children:Object(u.jsxs)("form",{onSubmit:t,className:"TodoForm",children:[Object(u.jsxs)("div",{className:"text",children:[n&&Object(u.jsx)("h3",{children:n}),Object(u.jsx)("input",{type:"text",value:s,onChange:function(e){return a(e.target.value)},placeholder:"To do ...",autoFocus:!0})]}),Object(u.jsxs)("div",{className:"remind",children:[Object(u.jsx)(p.a,{}),Object(u.jsx)("p",{children:"Remind Me!"})]}),Object(u.jsxs)("div",{className:"pick-day",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)(v.a,{}),Object(u.jsx)("p",{children:"Choose a day"})]}),Object(u.jsx)(C.a,{value:r,onChange:function(e){return o(e)}})]}),Object(u.jsxs)("div",{className:"pick-time",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)(g.a,{}),Object(u.jsx)("p",{children:"Choose time"})]}),Object(u.jsx)(w.a,{value:i,onChange:function(e){return d(e)}})]}),Object(u.jsxs)("div",{className:"pick-project",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)(N.a,{}),Object(u.jsx)("p",{children:"Choose a project"})]}),Object(u.jsx)("div",{className:"projects",children:A.length>0?A.map((function(e){return Object(u.jsx)("div",{className:"project ".concat(j===e.name?"active":""),onClick:function(){return l(e.name)},children:e.name},e.id)})):Object(u.jsx)("div",{style:{color:"#ff0000"},children:"Please add a project before proceeding"})})]}),m&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"cancel",onClick:function(){return f(!1)},children:Object(u.jsx)(S.a,{size:"40"})}),Object(u.jsx)("div",{className:"confirm",children:Object(u.jsx)("button",{children:"+ Add to do"})})]})]})})},T=["today","next 7 days","all days"],Y=c(157),E=c.n(Y);var B=function(){var e=Object(n.useContext)(A),t=e.projects,c=e.selectedProject,s=Object(n.useState)(!1),a=Object(r.a)(s,2),o=a[0],i=a[1],j=Object(n.useState)(""),b=Object(r.a)(j,2),m=b[0],O=b[1],f=Object(n.useState)(new Date),h=Object(r.a)(f,2),p=h[0],v=h[1],g=Object(n.useState)(new Date),N=Object(r.a)(g,2),S=N[0],y=N[1],C=Object(n.useState)(c),w=Object(r.a)(C,2),M=w[0],Y=w[1];return Object(n.useEffect)((function(){Y(c)}),[c]),Object(u.jsxs)("div",{className:"AddNewTodo",children:[Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)("button",{onClick:function(){return i(!0)},children:"+ New Todo"})}),Object(u.jsx)(x,{showModal:o,setShowModal:i,children:Object(u.jsx)(D,{handleSubmit:function(e){e.preventDefault(),m&&!T.includes(M)&&(l.firestore().collection("todos").add({text:m,date:d()(p).format("MM/DD/YYYY"),day:d()(p).format("d"),time:d()(S).format("hh:mm A"),checked:!1,color:E()({luminosity:"dark"}),projectName:M}),i(!1),O(""),v(new Date),y(new Date))},heading:"Add new to do!",text:m,setText:O,day:p,setDay:v,time:S,setTime:y,todoProject:M,setTodoProject:Y,projects:t,showButtons:!0,setShowModal:i})})]})},P=c(243),k=c(244);var V=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(A).setSelectedProject,o=Object(h.useSpring)({config:{friction:10},transform:c?"rotate(0deg)":"rotate(180deg)"}),i=Object(h.useSpring)({display:c?"block":"none",lineHeight:c?1.2:0});return Object(u.jsxs)("div",{className:"Calendar",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)(P.a,{size:"18"}),Object(u.jsx)("p",{children:"Calendar"})]}),Object(u.jsx)(h.animated.div,{className:"btns",style:o,onClick:function(){return s((function(e){return!e}))},children:Object(u.jsx)("span",{children:Object(u.jsx)(k.a,{size:"20"})})})]}),Object(u.jsx)(h.animated.div,{style:i,className:"items",children:T.map((function(e){return Object(u.jsx)("div",{className:"item",onClick:function(){return a(e)},children:e},e)}))})]})},Q=c(248);var X=function(e){var t=e.handleSubmit,c=e.heading,n=e.value,s=e.setValue,a=e.setShowModal,r=e.confirmButtonText;return Object(u.jsxs)("form",{onSubmit:t,className:"ProjectForm",children:[Object(u.jsx)("h3",{children:c}),Object(u.jsx)("input",{value:n,onChange:function(e){return s(e.target.value)},type:"text",placeholder:"project name...",autoFocus:!0}),Object(u.jsx)("button",{className:"cancel",role:"button",onClick:function(){return a(!1)},children:"cancel"}),Object(u.jsx)("button",{className:"confirm",children:r})]})},I=c(245);var z=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),o=Object(r.a)(a,2),i=o[0],d=o[1];return Object(u.jsxs)("div",{className:"AddNewProject",children:[Object(u.jsx)("div",{className:"add-button",children:Object(u.jsx)("span",{onClick:function(){return s(!0)},children:Object(u.jsx)(I.a,{size:"20"})})}),Object(u.jsx)(x,{showModal:c,setShowModal:s,children:Object(u.jsx)(X,{handleSubmit:function(e){if(e.preventDefault(),i){var t=l.firestore().collection("projects");t.where("name","==",i).get().then((function(e){e.empty?t.add({name:i}):alert("Project already exists!")})),s(!1),d("")}},heading:"New project!",value:i,setValue:d,setShowModal:s,confirmButtonText:"+ Add Project"})})]})},G=c(246),J=c(247);var R=function(e){var t=e.project,c=e.setShowModal,s=Object(n.useState)(t.name),a=Object(r.a)(s,2),o=a[0],i=a[1],d=Object(n.useContext)(A),j=d.selectedProject,b=d.setSelectedProject;return Object(u.jsx)("div",{className:"RenameProject",children:Object(u.jsx)(X,{handleSubmit:function(e){e.preventDefault(),function(e,t){var c=l.firestore().collection("projects"),n=l.firestore().collection("todos"),s=e.name;c.where("name","==",t).get().then((function(a){a.empty?c.doc(e.id).update({name:t}).then((function(){n.where("projectName","==",s).get().then((function(e){e.forEach((function(e){e.ref.update({projectName:t})}))})).then((function(){j===s&&b(t)}))})):alert("Project with the same name already exists!")}))}(t,o),c(!1)},heading:"Edit project name!",value:o,setValue:i,setShowModal:c,confirmButtonText:"Confirm"})})};var U=function(e){var t=e.project,c=e.edit,s=Object(n.useContext)(A),a=s.defaultProject,o=s.selectedProject,i=s.setSelectedProject,d=Object(n.useState)(!1),j=Object(r.a)(d,2),b=j[0],m=j[1],O=Object(h.useSpring)({from:{marginTop:"-12px",opacity:0},to:{marginTop:"0px",opacity:1}}),f=Object(h.useTransition)(c,{from:{opacity:0,right:"-20px"},enter:{opacity:1,right:"0px"},leave:{opacity:0,right:"-20px"}});return Object(u.jsxs)(h.animated.div,{style:O,className:"Project",children:[Object(u.jsx)("div",{className:"name",onClick:function(){return i(t.name)},children:t.name}),Object(u.jsx)("div",{className:"btns",children:f((function(e,c){return c?Object(u.jsxs)(h.animated.div,{style:e,className:"edit-delete",children:[Object(u.jsx)("span",{className:"edit",onClick:function(){return m(!0)},children:Object(u.jsx)(G.a,{size:"13"})}),Object(u.jsx)("span",{className:"delete",onClick:function(){return function(e){l.firestore().collection("projects").doc(e.id).delete().then((function(){l.firestore().collection("todos").where("projectName","==",e.name).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}))})).then((function(){o===e.name&&i(a)}))}(t)},children:Object(u.jsx)(J.a,{size:"13"})})]}):0===t.numOfTodos?"":Object(u.jsx)(h.animated.div,{style:e,className:"total-todos",children:t.numOfTodos})}))}),Object(u.jsx)(x,{showModal:b,setShowModal:m,children:Object(u.jsx)(R,{project:t,setShowModal:m})})]})};var F=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),o=Object(r.a)(a,2),i=o[0],d=o[1],j=i?"#1EC94C":"#000000",l=Object(n.useContext)(A).projects,b=Object(h.useSpring)({config:{friction:10},transform:c?"rotate(0deg)":"rotate(180deg)"}),m=Object(h.useSpring)({display:c?"block":"none",lineHeight:c?1.2:0});return Object(u.jsxs)("div",{className:"Projects",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)(N.a,{size:"18"}),Object(u.jsx)("p",{children:"Projects"})]}),Object(u.jsxs)("div",{className:"btns",children:[c&&l.length>0&&Object(u.jsx)("span",{className:"edit",onClick:function(){return d((function(e){return!e}))},children:Object(u.jsx)(Q.a,{size:"15",color:j})}),Object(u.jsx)(z,{}),Object(u.jsx)(h.animated.span,{className:"arrow",onClick:function(){return s((function(e){return!e}))},style:b,children:Object(u.jsx)(k.a,{size:"20"})})]})]}),Object(u.jsx)(h.animated.div,{style:m,className:"items",children:l.map((function(e){return Object(u.jsx)(U,{project:e,edit:i},e.id)}))})]})},K=c(249),Z=c(250),q=c(251),W=c(252);var L=function(e){var t=e.todo,c=Object(n.useState)(!1),s=Object(r.a)(c,2),a=s[0],i=s[1],j=Object(n.useContext)(A),b=j.selectedTodo,m=j.setSelectedTodo,O=function(e){!function(e){l.firestore().collection("todos").doc(e.id).delete()}(e),b===e&&m(!1)},f=Object(h.useSpring)({from:{marginTop:"-12px",opacity:0},to:{marginTop:"0px",opacity:1}}),x=Object(h.useTransition)(t.checked,{from:{position:"absolute",transform:"scale(0)"},enter:{transform:"scale(1)"},leave:{transform:"scale(0)"}});return Object(u.jsx)(h.animated.div,{style:f,className:"Todo",children:Object(u.jsxs)("div",{className:"todo-container",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(u.jsx)("div",{className:"check-todo",onClick:function(){return function(e){l.firestore().collection("todos").doc(e.id).update({checked:!e.checked})}(t)},children:x((function(e,c){return c?Object(u.jsx)(h.animated.span,{style:e,className:"checked",children:Object(u.jsx)(K.a,{color:"#bebebe"})}):Object(u.jsx)(h.animated.span,{style:e,className:"unchecked",children:Object(u.jsx)(Z.a,{color:t.color})})}))}),Object(u.jsxs)("div",{className:"text",onClick:function(){return m(t)},children:[Object(u.jsx)("p",{style:{color:t.checked?"#bebebe":"#000000"},children:t.text}),Object(u.jsxs)("span",{children:[t.time," - ",t.projectName]}),Object(u.jsx)("div",{className:"line ".concat(t.checked?"line-through":"")})]}),Object(u.jsx)("div",{className:"add-to-next-day",onClick:function(){return function(e){var t=d()(e.date,"MM/DD/YYYY").add(1,"days"),c=Object(o.a)(Object(o.a)({},e),{},{date:t.format("MM/DD/YYYY"),day:t.format("d"),checked:!1});delete c.id,l.firestore().collection("todos").add(c)}(t)},children:t.checked&&Object(u.jsx)("span",{children:Object(u.jsx)(q.a,{})})}),Object(u.jsx)("div",{className:"delete-todo",onClick:function(){return O(t)},children:(a||t.checked)&&Object(u.jsx)("span",{children:Object(u.jsx)(W.a,{})})})]})})};var H=function(e){var t=e.todos,c=Object(n.useState)([]),s=Object(r.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){var e=["0","1","2","3","4","5","6"].map((function(e){return{todos:t.filter((function(t){return t.day===e})),number:e}})),c=parseInt(d()().format("d")),n=e.slice(c).concat(e.slice(0,c));o(n)}),[t]),Object(u.jsx)("div",{className:"Next7Days",children:a.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"day",children:[Object(u.jsxs)("div",{className:"name",children:[d()(e.number,"d").format("dddd"),e.number===d()().format("d")&&" (Today)"]}),Object(u.jsxs)("div",{className:"total-todos",children:["(",e.todos.length,")"]})]}),Object(u.jsx)("div",{className:"todos",children:e.todos.map((function(e){return Object(u.jsx)(L,{todo:e},e.id)}))})]},e.number)}))})};var $=function(){var e=Object(n.useContext)(A),t=e.todos,c=e.selectedProject;return Object(u.jsxs)("div",{className:"Todos",children:[Object(u.jsx)("div",{className:"selected-project",children:c}),Object(u.jsx)("div",{className:"todos",children:"next 7 days"===c?Object(u.jsx)(H,{todos:t}):t.map((function(e){return Object(u.jsx)(L,{todo:e},e.id)}))})]})};var _=function(){var e=Object(n.useContext)(A),t=e.selectedTodo,c=e.projects,s=Object(n.useState)(""),a=Object(r.a)(s,2),o=a[0],i=a[1],j=Object(n.useState)(new Date),b=Object(r.a)(j,2),m=b[0],O=b[1],f=Object(n.useState)(new Date),h=Object(r.a)(f,2),x=h[0],p=h[1],v=Object(n.useState)(""),g=Object(r.a)(v,2),N=g[0],S=g[1];return Object(n.useEffect)((function(){t&&(i(t.text),O(d()(t.date,"MM/DD/YYYY")),p(d()(t.time,"hh:mm A")),S(t.projectName))}),[t]),Object(n.useEffect)((function(){t&&l.firestore().collection("todos").doc(t.id).update({text:o,date:d()(m).format("MM/DD/YYYY"),day:d()(m).format("d"),time:d()(x).format("hh:mm A"),projectName:N})}),[o,m,x,N]),Object(u.jsx)("div",{children:t&&Object(u.jsxs)("div",{className:"EditTodo",children:[Object(u.jsx)("div",{className:"header",children:"Edit Todo"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(D,{handleSubmit:function(e){},text:o,setText:i,day:m,setDay:O,time:x,setTime:p,todoProject:N,setTodoProject:S,projects:c})})]})})};var ee=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(m,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(B,{}),Object(u.jsx)(V,{}),Object(u.jsx)(F,{})]}),Object(u.jsxs)(O,{children:[Object(u.jsx)($,{}),Object(u.jsx)(_,{})]})]})};a.a.render(Object(u.jsx)(b,{children:Object(u.jsx)(ee,{})}),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.9962fca7.chunk.js.map