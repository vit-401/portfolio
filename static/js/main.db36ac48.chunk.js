(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{336:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a.n(s),r=a(85),i=a.n(r),n=(a(92),a(93),a(46)),l=a.n(n),o=a(86),m=a.n(o),d=a.p+"static/media/IMG_9397-2.99664efc.jpg",j=a(2),u=c.a.memo((function(e){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(l.a,{className:"particles",params:e.params}),Object(j.jsx)(l.a,{className:"particles",params:e.params1}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"header__inner",children:[Object(j.jsx)("div",{className:"header__item",children:Object(j.jsxs)("div",{className:"header__discription",children:[Object(j.jsx)("span",{children:"Hi There"}),Object(j.jsxs)("h2",{children:["I am",Object(j.jsx)("span",{className:"name",children:"Vitally Prysyazhnyuk"})]}),Object(j.jsx)("h3",{children:Object(j.jsx)(m.a,{text:"Frontend Developer",speed:250,typingDelay:1e3,cursor:"_"})})]})}),Object(j.jsx)("div",{className:"header__item",children:Object(j.jsxs)("div",{className:"header__photo parallaxed",children:[Object(j.jsx)("img",{src:d,alt:""}),Object(j.jsx)("div",{className:"border parallaxed2"})]})})]})})]})})),b=function(){var e=Object(s.useCallback)((function(e){var t,a=-.3*e.clientX/8,s=-.3*e.clientY/8,c=document.getElementsByClassName("parallaxed"),r=document.getElementsByClassName("parallaxed2");for(t=0;t<c.length;t++)c[t].style.transform="translate3d("+a+"px,"+s+"px, 0px)",r[t].style.transform="translate3d("+2*a+"px,"+s+"px, 0px)"}),[]);Object(s.useEffect)((function(){return document.body.addEventListener("mousemove",e),function(){return document.body.addEventListener("mousemove",e)}}),[e]);return Object(j.jsx)(u,{params:{particles:{size:{value:2},line_linked:{enable:!0},move:{random:!0,speed:2}}},params1:{particles:{size:{value:1},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}})},h=a(20),x=(a(336),a(35)),p=a.n(x),O=c.a.memo((function(e){return Object(j.jsx)("div",{className:"filter-item ".concat(e.filterName),children:Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"cardImg",children:Object(j.jsx)("div",{className:"cardContent",children:Object(j.jsxs)("div",{className:"cardInner",children:[Object(j.jsx)("div",{className:"cardDescriptioniTitle",children:"TriMSocial"}),Object(j.jsx)("div",{className:"cardDescription",children:"React, Redux, JavaScript, RestAPI, HTML/CSS, functional and classes components, hooks, connect, HOC"}),Object(j.jsxs)("div",{className:"cardDescriptionLinks",children:["gitHub: ",Object(j.jsx)("a",{href:"#",children:"https://djinni.co/my/dashboard/"}),"demo: ",Object(j.jsx)("a",{href:"#",children:"https://djinni.co/my/dashboard/"})]})]})})})})})})),f=c.a.memo((function(e){var t=c.a.useState("All"),a=Object(h.a)(t,2),s=a[0],r=a[1],i=[{value:"All",id:1,handler:e.handleFilterAll},{value:"React",id:2,handler:e.handleFilterVege},{value:"NodeJs",id:3,handler:e.handleFilterFruit}];return Object(j.jsx)("section",{className:"work",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"titleSection",children:"My Works"}),Object(j.jsx)("div",{className:"moduleLine"}),Object(j.jsx)("ul",{className:"workFilters",children:i.map((function(e){return Object(j.jsx)("li",{className:s===e.value?"active":"",onClick:function(){e.handler(),r(e.value)},children:e.value},p()())}))}),Object(j.jsx)("div",{className:"filterWrap",children:Object(j.jsxs)("div",{className:"filter-container",children:[Object(j.jsx)(O,{name:"Potato",filterName:"react"}),Object(j.jsx)(O,{name:"Apple",filterName:"node"}),Object(j.jsx)(O,{name:"BANA",filterName:"react"}),Object(j.jsx)(O,{name:"Orange",filterName:"node"}),Object(j.jsx)(O,{name:"Tomato",filterName:"react"}),Object(j.jsx)(O,{name:"Ananas",filterName:"node"}),Object(j.jsx)(O,{name:"grape",filterName:"react"})]})})]})})})),g=a(87),v=a.n(g),N=c.a.memo((function(){var e=c.a.useRef(),t=c.a.useState("*"),a=Object(h.a)(t,2),s=a[0],r=a[1];c.a.useEffect((function(){return e.current=new v.a(".filter-container",{itemSelector:".filter-item",layoutMode:"fitRows",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}}),function(){return e.current.destroy()}}),[]),c.a.useEffect((function(){"*"===s?e.current.arrange({filter:"*"}):e.current.arrange({filter:".".concat(s)})}),[s]);var i=function(e){return function(){return r(e)}};return Object(j.jsx)(f,{handleFilterAll:i("*"),handleFilterVege:i("react"),handleFilterFruit:i("node")})})),y=c.a.memo((function(e){return Object(j.jsx)("li",{className:"Menu-list-item",children:Object(j.jsxs)("a",{href:"#home",children:[e.name,Object(j.jsx)("span",{className:"Mask",children:Object(j.jsx)("span",{children:e.name})}),Object(j.jsx)("span",{className:"Mask",children:Object(j.jsx)("span",{children:e.name})})]})})})),k=c.a.memo((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:e.state?"menu-wrapper":"menu-wrapper open",children:[Object(j.jsxs)("button",{onClick:e.onClick,className:e.state?"hamburger-menu":"hamburger-menu open",children:[Object(j.jsx)("span",{className:"hamburger"}),Object(j.jsx)("span",{className:"hamburger-overlay"})]}),Object(j.jsx)("div",{className:"Menu ham-tilt",children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"Menu-list",children:[Object(j.jsx)(y,{name:"Home"}),Object(j.jsx)(y,{name:"Work"}),Object(j.jsx)(y,{name:"Services"}),Object(j.jsx)(y,{name:"Blog"}),Object(j.jsx)(y,{name:"Contact"})]})})})]})})})),I=c.a.memo((function(){var e=Object(s.useState)(!0),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(j.jsx)(k,{state:a,onClick:function(){c(!a)}})}));function S(){return Object(j.jsx)("section",{className:"contact",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"titleSection",children:"Contact"}),Object(j.jsxs)("form",{className:"contactForm",children:[Object(j.jsx)("input",{required:!0,placeholder:"Name",type:"text",className:"formContorl"}),Object(j.jsx)("input",{required:!0,placeholder:"Email",type:"email",className:"formContorl"}),Object(j.jsx)("textarea",{required:!0,placeholder:"Yor message",className:"formContorl"}),Object(j.jsx)("button",{type:"submit",children:"Send Message"})]})]})})}function C(e){return Object(j.jsxs)("div",{className:"skillsItem",children:[Object(j.jsx)("div",{className:"skillsItemWrap",children:Object(j.jsx)("div",{className:"skillsItemIcon",style:{backgroundImage:"url(".concat(e.urlImg,")")}})}),Object(j.jsx)("div",{className:"skillsItemTitle",children:e.title}),Object(j.jsx)("div",{className:"skillsItemtext",children:e.text})]})}a(345);function M(){return Object(j.jsx)("section",{className:"skills",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"titleSection",children:"Skills"}),Object(j.jsx)("div",{className:"skillsInner",children:[{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-react.3b599a68.svg",title:"React",text:"JavaScript library for building user interfaces or UI components."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-redux.a248a991.svg",title:"Redux",text:"JavaScript library for managing application state."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-typescript.265f3327.svg",title:"TypeScript",text:"JavaScript library for managing application state."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-material-ui.d4a8ef06.svg",title:"Material UI",text:"One of the most popular react component libraries!"},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-javascript.f6967c81.svg",title:"Java Script",text:"Programming language that conforms to the ECMAScript specification."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/story.2c0ef392.svg",title:"Story Book",text:"Tool for UI development!"},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/icons8-nodejs.0811c32d.svg",title:"NodeJS",text:"Back-end JavaScript runtime environment"},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/graphql.e4356db9.svg",title:"GraphQl",text:"Query language for your API, and a server-side runtime for executing queries by using a type system you define for your data."},{urlImg:"https://sergey-lang.github.io/Portfolio/static/media/mongodb.a869cddd.svg",title:"MongoDB",text:"Document database, which means it stores data in JSON-like documents."}].map((function(e,t){return Object(j.jsx)(C,{urlImg:e.urlImg,title:e.title,text:e.text},p()())}))})]})})}var P=c.a.memo((function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(I,{}),Object(j.jsx)(b,{}),Object(j.jsx)(N,{}),Object(j.jsx)(M,{}),Object(j.jsx)(S,{})]})}));i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))},92:function(e,t,a){},93:function(e,t,a){}},[[346,1,2]]]);
//# sourceMappingURL=main.db36ac48.chunk.js.map