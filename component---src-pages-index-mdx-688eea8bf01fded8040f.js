(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"7oih":function(t,e,o){"use strict";o("zTTH"),o("sC2a");var r=o("wTIg"),n=o("q1tI"),i=o.n(n),l=o("Wbzz"),a=o("7ljp"),s=o("qKvR"),d=o("eVhr"),c=o("4FWg"),p=o("9Yco"),u=function(t){var e=t.children;return Object(s.d)(l.StaticQuery,{query:"3609520525",render:function(t){var o=t.allMdx.edges.map((function(t){return{title:t.node.frontmatter.title,slug:t.node.fields.slug}}));return e(o)},data:p})};o("HQhv");function f(t,e){for(var o=0;o<e.length;o++){var r=e[o];if(0===t.slug.indexOf(r.slug+"/"))return void f(t,r.children)}e.push({title:t.title,slug:t.slug,children:[]})}o("cFtU"),o("q8oJ"),o("m210"),o("4DPX"),o("gu/5"),o("eoYm"),o("zGcK"),o("rzGZ"),o("Dq+y"),o("8npG"),o("YbXK"),o("ToIb");function g(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var b=new Set(["/404/"]),m=["tippy","constructors","modifiers","utils","virtual-elements","tree-shaking","faq","typings","browser-support"],x=["Popper Offsets","Offset","Prevent Overflow","Arrow","Flip","Hide","Compute Styles","Apply Styles","Event Listeners"];function h(t){var e=t.filter((function(t){return!b.has(t.slug)})).map((function(t){return t.slug=t.slug.replace(/\/$/,""),t})).sort((function(t,e){return t.slug.split("/").length-e.slug.split("/").length})).sort((function(t,e){return x.indexOf(t.title)-x.indexOf(e.title)}));return[].concat(g(e.filter((function(t){return!m.some((function(e){return t.slug.includes(e)}))}))),g(m.reduce((function(t,o){return[].concat(g(t),g(e.filter((function(t){return t.slug.includes(o)}))))}),[])))}var y=o("vUvN"),v=o.n(y),O=(o("Ggvi"),o("sc67"),o("E5k/"),o("17x9")),j=o.n(O);function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}function k(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var z=function(t){var e=t.color,o=t.size,r=k(t,["color","size"]);return i.a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),i.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),i.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};z.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},z.defaultProps={color:"currentColor",size:"24"};var S=z,T={name:"80dmy3",styles:"display:block;transform:translateX(0);"},C=Object(r.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;overflow:auto;transform:translateX(-",260,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(t){return t.open&&T})," ",c.d.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),E={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},P=Object(r.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(t){return t.root?0:15}),"px;line-height:1.5;",(function(t){return!t.root&&E})),q=Object(r.a)(l.Link,{target:"e1y4lhx02"})({name:"13d61k5",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),A=Object(r.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",c.d.lg,"{display:none;}"),L={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},F=Object(r.a)("div",{target:"e1y4lhx04"})("background:#c83b50;margin-top:-8px;width:100%;position:sticky;top:0;padding:8px 0;transition:box-shadow 0.4s ease-out;display:none;",c.d.lg,"{display:block;}",(function(t){return t.scrolled&&L})),I=function(t){var e=t.mobile;return Object(s.d)("img",{src:v.a,draggable:"false",alt:"Popper Logo",css:Object(s.c)("display:block;margin:0 auto -10px;width:100px;height:50px;user-select:none;margin-top:",e?"-12px":"0",";")})},D=Object(r.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),H=Object(r.a)("button",{target:"e1y4lhx06"})("position:relative;top:10px;left:25px;display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",c.d.lg,"{display:none;}"),N=Object(r.a)("div",{target:"e1y4lhx07"})("padding:0 10px 20px 0;",c.d.lg,"{margin-top:15px;}"),G=function t(e){var o=e.route;return Object(s.d)(i.a.Fragment,null,Object(s.d)(P,{root:!0},Object(s.d)("li",null,Object(s.d)(q,{to:o.slug+"/",activeStyle:{backgroundColor:"#FFF",color:"#C83B50"}},o.title)),Object(s.d)(P,{root:1===o.slug.split("/").length},o.children.map((function(e,o){return Object(s.d)(t,{key:o,route:e})})))))},M=0;function X(t){t.description,t.lang,t.meta,t.title;var e=Object(n.useState)(!1),o=e[0],r=e[1],l=Object(n.useState)(!1),a=l[0],d=l[1],c=Object(n.useRef)();function p(){r(!0)}function g(){r(!1)}function b(){var t=c.current.scrollTop;M=t,d(t>10)}return Object(n.useLayoutEffect)((function(){var t=c.current;t.scrollTop=M;var e=t.querySelector('[aria-current="page"]');if(e){var o=e.getBoundingClientRect();(o.bottom>window.innerHeight||o.top<0)&&e.scrollIntoView()}}),[]),Object(s.d)(u,null,(function(t){return Object(s.d)(i.a.Fragment,null,Object(s.d)(A,null,Object(s.d)(D,{onClick:p,"aria-expanded":o?"true":"false","aria-label":"Click to open navigation menu"},Object(s.d)(S,{size:30})),Object(s.d)(I,{mobile:!0})),Object(s.d)(C,{open:o,ref:c,onScroll:b},Object(s.d)(F,{scrolled:a},Object(s.d)(I,null)),Object(s.d)(H,{onClick:g},"Close Menu"),Object(s.d)(N,null,function(t){for(var e=[],o=0;o<t.length;o++){f(t[o],e)}return e}(h(t)).map((function(t,e){return Object(s.d)(G,{route:t,key:e})})))))}))}var B=o("9CUm");o("8ypT"),o("cu9l");function K(){return(K=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}function R(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var U=function(t){var e=t.color,o=t.size,r=R(t,["color","size"]);return i.a.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),i.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};U.propTypes={color:j.a.string,size:j.a.oneOfType([j.a.string,j.a.number])},U.defaultProps={color:"currentColor",size:"24"};var V=U,W=o("EAKA"),Y=Object(r.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",c.d.lg,"{padding-top:0;margin-left:",260,"px;}"),J=Object(r.a)(c.b,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",c.d.lg,"{margin-left:",260,"px;}"),Q=Object(r.a)("div",{target:"e1fogcta2"})({name:"17w03cj",styles:"display:flex;justify-content:space-between;border-top:1px solid #44395d;margin-top:50px;"}),Z=Object(r.a)(c.a,{target:"e1fogcta3"})("display:flex;width:100%;padding:0;",c.d.md,"{padding:0 40px;}"),$=Object(r.a)("div",{target:"e1fogcta4"})({name:"i0w8di",styles:"flex:1;min-width:0;display:flex;"}),_=Object(r.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",c.d.md,"{display:block;}"),tt=Object(r.a)(l.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;",c.d.md,"{font-size:22px;width:100%;}",c.d.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}text-align:",(function(t){return t.first?"left":"right"}),";"),et=Object(s.c)("vertical-align:3px;",c.d.md,"{vertical-align:0;}"),ot=Object(r.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",c.d.md,"{top:54px;}",c.d.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),rt={"x-ad":d.a};e.a=function(t){var e=t.children,o=t.path,r=t.pageResources;return Object(n.useLayoutEffect)((function(){try{document.querySelector(window.location.hash).scrollIntoView()}catch(t){}}),[]),Object(s.d)(a.a,{components:rt},Object(s.d)(s.a,{styles:Object(s.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",c.d.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",c.d.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(s.d)("div",null,r&&Object(s.d)(B.a,{title:r.json.pageContext.frontmatter.title}),Object(s.d)(X,{root:"/",target:"location"}),Object(s.d)(Y,null,Object(s.d)(c.a,null,e),Object(s.d)(u,null,(function(t){var e=function(t){var e=h(t),r=o.replace(/\/$/,""),n=e.findIndex((function(t){return t.slug===r}));return{prev:e[n-1],next:e[n+1]}}(t),r=e.prev,n=e.next;return Object(s.d)(Q,null,Object(s.d)(Z,null,Object(s.d)($,null,r&&Object(s.d)(tt,{to:r.slug+"/",first:!0},Object(s.d)(ot,{"data-prev":!0},Object(s.d)(V,{size:28,css:et})),r.title)),Object(s.d)(_,null),Object(s.d)($,null,n&&Object(s.d)(tt,{to:n.slug+"/",last:!0},n.title,Object(s.d)(ot,{"data-next":!0},Object(s.d)(W.a,{size:28,css:et}))))))}))),Object(s.d)(J,null,"© ",(new Date).getFullYear()," MIT License")))}},"9Yco":function(t){t.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"title":"Not Found"}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"title":"Home"}}},{"node":{"fields":{"slug":"/docs/browser-support/"},"frontmatter":{"title":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/constructors/"},"frontmatter":{"title":"Constructors"}}},{"node":{"fields":{"slug":"/docs/faq/"},"frontmatter":{"title":"FAQ"}}},{"node":{"fields":{"slug":"/docs/"},"frontmatter":{"title":"Documentation"}}},{"node":{"fields":{"slug":"/docs/tippy/"},"frontmatter":{"title":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/tree-shaking/"},"frontmatter":{"title":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/typings/"},"frontmatter":{"title":"Typings"}}},{"node":{"fields":{"slug":"/docs/virtual-elements/"},"frontmatter":{"title":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/modifiers/apply-styles/"},"frontmatter":{"title":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/arrow/"},"frontmatter":{"title":"Arrow"}}},{"node":{"fields":{"slug":"/docs/modifiers/compute-styles/"},"frontmatter":{"title":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/event-listeners/"},"frontmatter":{"title":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/modifiers/flip/"},"frontmatter":{"title":"Flip"}}},{"node":{"fields":{"slug":"/docs/modifiers/hide/"},"frontmatter":{"title":"Hide"}}},{"node":{"fields":{"slug":"/docs/modifiers/"},"frontmatter":{"title":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/modifiers/offset/"},"frontmatter":{"title":"Offset"}}},{"node":{"fields":{"slug":"/docs/modifiers/popper-offsets/"},"frontmatter":{"title":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/modifiers/prevent-overflow/"},"frontmatter":{"title":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/detect-overflow/"},"frontmatter":{"title":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/"},"frontmatter":{"title":"Utils"}}}]}}}')},pfKO:function(t,e,o){"use strict";o.r(e),o.d(e,"_frontmatter",(function(){return l})),o.d(e,"default",(function(){return d}));o("E5k/"),o("rzGZ"),o("Dq+y"),o("8npG"),o("Ggvi"),o("q1tI");var r=o("7ljp"),n=(o("7oih"),o("OkDN"));o("qKvR");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}var l={},a={_frontmatter:l},s=n.b;function d(t){var e=t.components,o=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,["components"]);return Object(r.b)(s,i({},a,o,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"empty",style:{position:"relative"}},Object(r.b)("a",i({parentName:"h1"},{href:"#empty","aria-label":"empty permalink",className:"gatsby-link-icon before"}),Object(r.b)("svg",i({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"empty"))}d.isMDXComponent=!0},vUvN:function(t,e,o){t.exports=o.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(t,e,o){"use strict";var r=o("P8UN"),n=o("Wadk")(6),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("Dq1/")(i)}}]);
//# sourceMappingURL=component---src-pages-index-mdx-688eea8bf01fded8040f.js.map