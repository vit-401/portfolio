(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(e,t,i){},109:function(e,t,i){},369:function(e,t,i){},378:function(e,t,i){},379:function(e,t,i){"use strict";i.r(t);var a=i(4),s=i.n(a),c=i(43),n=i.n(c),r=(i(108),i(109),i(58)),o=i.n(r),l=i(102),d=i.n(l),m=i.p+"static/media/IMG_9397-2.99664efc.jpg",j=i(11),h=i(26),u=i(2),p=s.a.memo((function(e){return Object(u.jsxs)("header",{id:"header",className:"header",children:[Object(u.jsx)(o.a,{className:"particles",params:e.params}),Object(u.jsx)(o.a,{className:"particles",params:e.params1}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"header__inner",children:[Object(u.jsx)("div",{className:"header__item",children:Object(u.jsxs)("div",{className:"header__discription",children:[Object(u.jsx)(j.Fade,{bottom:!0,children:Object(u.jsx)("span",{children:"Hi There"})}),Object(u.jsx)(j.Fade,{bottom:!0,children:Object(u.jsxs)("h2",{children:["I am",Object(u.jsx)("span",{className:"name",children:"Vitally Prysyazhnyuk"})]})}),Object(u.jsx)("h3",{children:Object(u.jsx)(d.a,{text:"Frontend Developer",speed:80,typingDelay:1e3,cursor:"_"})})]})}),Object(u.jsx)("div",{className:"header__item",children:Object(u.jsx)(j.Fade,{bottom:!0,children:Object(u.jsxs)("div",{className:"header__photo",children:[Object(u.jsx)("img",{src:m,alt:"",className:"parallaxed"}),Object(u.jsx)("div",{className:"border parallaxed2"})]})})})]})})]})})),b=function(){var e=Object(a.useCallback)((function(e){var t,i=-.3*e.clientX/8,a=-.3*e.clientY/8,s=document.getElementsByClassName("parallaxed"),c=document.getElementsByClassName("parallaxed2");for(t=0;t<s.length;t++)s[t].style.transform="translate3d("+i+"px,"+a+"px, 0px)",c[t].style.transform="translate3d("+2*i+"px,"+2*a+"px, 0px)"}),[]);Object(a.useEffect)((function(){return document.body.addEventListener("mousemove",e),function(){return document.body.addEventListener("mousemove",e)}}),[e]);return Object(u.jsx)(p,{params:{particles:{size:{value:1},line_linked:{enable:!0},move:{random:!0,speed:3}}},params1:{particles:{size:{value:1},line_linked:{enable:!1},move:{random:!0,speed:2,direction:"top",out_mode:"out"}}}})},x=i(25),f=(i(369),i(17)),g=i.n(f),O=s.a.memo((function(e){return Object(u.jsx)(j.Fade,{buttom:!0,children:Object(u.jsx)("div",{className:"filter-item ".concat(e.filterName),children:Object(u.jsx)("div",{className:"card",children:Object(u.jsx)("div",{className:"cardImg",style:{backgroundImage:"url(".concat(e.photoURL,")")},children:Object(u.jsx)("div",{className:"cardContent",children:Object(u.jsxs)("div",{className:"cardInner",children:[Object(u.jsx)("div",{className:"cardDescriptioniTitle",children:e.name}),Object(u.jsx)("div",{className:"cardDescription",children:e.description}),Object(u.jsxs)("div",{className:"cardDescriptionLinks",children:[e.code?Object(u.jsxs)("span",{children:["gitHub: ",Object(u.jsxs)("a",{href:e.code,children:["https://",e.code.slice("https://vit-401.github.io//".length)]})]}):null,e.demo?Object(u.jsxs)("span",{children:["demo: ",Object(u.jsx)("a",{href:e.demo,children:e.demo})]}):null]})]})})})})})})})),v=s.a.memo((function(e){var t=s.a.useState("All"),i=Object(x.a)(t,2),a=i[0],c=i[1],n=[{value:"All",id:1,handler:e.handleFilterAll},{value:"React",id:2,handler:e.handleFilterReact},{value:"NodeJs",id:3,handler:e.handleFilterNode},{value:"Markup",id:4,handler:e.handleFilterHTML}],r=[{title:"KeyStroy",code:"",demo:"https://www.key-stroy.com",filterName:"html",description:"GULP, PHP, HTML/SCSS, Website business card. Implemented Sent to telegrams via telegram bot.",photoURL:"https://i.pinimg.com/originals/23/d0/2f/23d02f8aae2ee1c959b270e8043a1e47.jpg",id:g()()},{title:"TriMSocial",code:"https://github.com/vit-401/SocialNetwork",demo:"https://vit-401.github.io/SocialNetwork",filterName:"react",description:"React, Redux, Redux-Form, Typescript, RestAPI, CSS-Modules/SCSS, functional and classes components, hooks.",photoURL:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_533229588_288361.jpg",id:g()()},{title:"NodeApp",code:"https://github.com/vit-401/NodeJSapp",demo:"",filterName:"node",description:"Node Back-end JavaScript runtime environment",photoURL:"https://www.norma.uz/img/d5/e0/25e9fed55a221815aa4404edb3c9.jpg",id:g()()},{title:"Coffeyka",code:"https://github.com/vit-401/coffeyka",demo:"https://vit-401.github.io/coffeyka/",filterName:"html",description:"PHP, Gulp, JavaScript, HTML, SCSS. \u0415he site of the store`s cafe with the implementation of an adaptive for a mobile device",photoURL:"http://novostiliteratury.ru/wp-content/uploads/2019/02/%D0%9A%D0%BD%D0%B8%D0%B6%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%84%D0%B52.jpg",id:g()()},{title:"TodoList",code:"https://github.com/vit-401/todolist-ts",demo:"https://vit-401.github.io/todolist-ts",filterName:"react",description:"React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC",photoURL:"https://s.mind.ua/img/forall/a/201947/8.jpg?1553245746",id:g()()},{title:"Mazepinska",code:"https://github.com/vit-401/mazepinska",demo:"https://vit-401.github.io/mazepinska",filterName:"html",description:"PHP, Gulp, JavaScript, HTML, SCSS. Sending data from the form to the telegram",photoURL:"https://rostec.ru/upload/iblock/836/8361948222bf21379605716cfa63cbb9.jpg",id:g()()}];return Object(u.jsx)("section",{id:"work",className:"work",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)(j.Fade,{bottom:!0,children:[Object(u.jsx)("div",{className:"titleSection",children:"My Works"}),Object(u.jsx)("div",{className:"moduleLine"})]}),Object(u.jsx)("ul",{className:"workFilters",children:n.map((function(e){return Object(u.jsx)("li",{className:a===e.value?"active":"",onClick:function(){e.handler(),c(e.value)},children:e.value},g()())}))}),Object(u.jsx)("div",{className:"filterWrap",children:Object(u.jsx)("div",{className:"filter-container",children:r.map((function(e,t){return Object(u.jsx)(O,{name:e.title,filterName:e.filterName,description:e.description,demo:e.demo,code:e.code,photoURL:e.photoURL?e.photoURL:"https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"},t)}))})})]})})})),N=i(103),k=i.n(N),y=s.a.memo((function(){var e=s.a.useRef(),t=s.a.useState("*"),i=Object(x.a)(t,2),a=i[0],c=i[1];s.a.useEffect((function(){return e.current=new k.a(".filter-container",{itemSelector:".filter-item",layoutMode:"fitRows",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}}),function(){return e.current.destroy()}}),[]),s.a.useEffect((function(){"*"===a?e.current.arrange({filter:"*"}):e.current.arrange({filter:".".concat(a)})}),[a]);var n=function(e){return function(){return c(e)}};return Object(u.jsx)(v,{handleFilterAll:n("*"),handleFilterReact:n("react"),handleFilterNode:n("node"),handleFilterHTML:n("html")})})),S=s.a.memo((function(e){return Object(u.jsx)("li",{onClick:e.onClick,className:"Menu-list-item",children:Object(u.jsxs)("a",{href:"#home",children:[e.name,Object(u.jsx)("span",{className:"Mask",children:Object(u.jsx)("span",{children:e.name})}),Object(u.jsx)("span",{className:"Mask",children:Object(u.jsx)("span",{children:e.name})})]})})})),I=s.a.memo((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:e.state?"menu-wrapper":"menu-wrapper open",children:[Object(u.jsxs)("button",{onClick:e.onClick,className:e.state?"hamburger-menu":"hamburger-menu open",children:[Object(u.jsx)("span",{className:"hamburger"}),Object(u.jsx)("span",{className:"hamburger-overlay"})]}),Object(u.jsx)("div",{className:"Menu ham-tilt",children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"Menu-list",children:[Object(u.jsxs)(h.Link,{to:"header",spy:!0,smooth:!0,offset:-50,duration:500,children:[" ",Object(u.jsx)(S,{onClick:e.onClick,name:"Home"})]}),Object(u.jsxs)(h.Link,{to:"work",spy:!0,smooth:!0,offset:-50,duration:500,children:[" ",Object(u.jsx)(S,{onClick:e.onClick,name:"Work"})]}),Object(u.jsxs)(h.Link,{to:"skills",spy:!0,smooth:!0,offset:-50,duration:500,children:[" ",Object(u.jsx)(S,{onClick:e.onClick,name:"Skills"})]}),Object(u.jsxs)(h.Link,{to:"contact",spy:!0,smooth:!0,offset:-50,duration:500,children:[" ",Object(u.jsx)(S,{onClick:e.onClick,name:"Contact"})]})]})})})]})})})),C=s.a.memo((function(){var e=Object(a.useState)(!0),t=Object(x.a)(e,2),i=t[0],s=t[1];return Object(u.jsx)(I,{state:i,onClick:function(){s(!i)}})}));function L(){return Object(u.jsx)("section",{id:"contact",className:"contact",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"titleSection",children:"Contact"}),Object(u.jsxs)("form",{className:"contactForm",children:[Object(u.jsx)(j.Fade,{bottom:!0,children:Object(u.jsx)("input",{required:!0,placeholder:"Name",type:"text",className:"formContorl"})}),Object(u.jsx)(j.Fade,{bottom:!0,children:Object(u.jsx)("input",{required:!0,placeholder:"Email",type:"email",className:"formContorl"})}),Object(u.jsx)(j.Fade,{bottom:!0,children:Object(u.jsx)("textarea",{required:!0,placeholder:"Yor message",className:"formContorl"})}),Object(u.jsx)(j.Fade,{bottom:!0,children:Object(u.jsx)("button",{type:"submit",children:"Send Message"})})]})]})})}function w(e){return Object(u.jsxs)("div",{className:"skillsItem",children:[Object(u.jsx)("div",{className:"skillsItemWrap",children:Object(u.jsx)("div",{className:"skillsItemIcon",style:{backgroundImage:"url(".concat(e.urlImg,")")}})}),Object(u.jsx)("div",{className:"skillsItemTitle",children:e.title}),Object(u.jsx)("div",{className:"skillsItemtext",children:e.text})]})}i(378);function F(){return Object(u.jsx)("section",{id:"skills",className:"skills",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"titleSection",children:"Skills"}),Object(u.jsx)("div",{id:"skills",className:"skillsInner",children:Object(u.jsx)(j.Fade,{buttom:!0,children:[{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-react.3b599a68.svg",title:"React",text:"JavaScript library for building user interfaces or UI components."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-redux.a248a991.svg",title:"Redux",text:"JavaScript library for managing application state."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-typescript.265f3327.svg",title:"TypeScript",text:"JavaScript library for managing application state."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-material-ui.d4a8ef06.svg",title:"Material UI",text:"One of the most popular react component libraries!"},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-javascript.f6967c81.svg",title:"Java Script",text:"Programming language that conforms to the ECMAScript specification."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/story.2c0ef392.svg",title:"Story Book",text:"Tool for UI development!"},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-nodejs.0811c32d.svg",title:"NodeJS",text:"Back-end JavaScript runtime environment"},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/graphql.e4356db9.svg",title:"GraphQl",text:"Query language for your API, and a server-side runtime for executing queries by using a type system you define for your data."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/mongodb.a869cddd.svg",title:"MongoDB",text:"Document database, which means it stores data in JSON-like documents."}].map((function(e,t){return Object(u.jsx)(w,{urlImg:e.urlImg,title:e.title,text:e.text},g()())}))})})]})})}var R=s.a.memo((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{}),Object(u.jsx)(b,{}),Object(u.jsx)(y,{}),Object(u.jsx)(F,{}),Object(u.jsx)(L,{})]})}));n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root"))}},[[379,1,2]]]);
//# sourceMappingURL=main.0b6118b4.chunk.js.map