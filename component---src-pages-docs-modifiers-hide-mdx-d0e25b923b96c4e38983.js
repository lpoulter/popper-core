(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7oih":function(e,t,n){"use strict";n("zTTH"),n("sC2a");var a=n("wTIg"),o=n("q1tI"),r=n.n(o),i=n("Wbzz"),s=n("7ljp"),c=n("qKvR"),l=n("eVhr"),p=n("4FWg"),d=n("9Yco"),b=function(e){var t=e.children;return Object(c.d)(i.StaticQuery,{query:"3609520525",render:function(e){var n=e.allMdx.edges.map((function(e){return{title:e.node.frontmatter.title,slug:e.node.fields.slug}}));return t(n)},data:d})};n("HQhv");function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];if(0===e.slug.indexOf(a.slug+"/"))return void u(e,a.children)}t.push({title:e.title,slug:e.slug,children:[]})}n("cFtU"),n("q8oJ"),n("m210"),n("4DPX"),n("gu/5"),n("eoYm"),n("zGcK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb");function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=new Set(["/404/"]),g=["tippy","constructors","modifiers","utils","virtual-elements","tree-shaking","faq","typings","browser-support"],h=["Popper Offsets","Offset","Prevent Overflow","Arrow","Flip","Hide","Compute Styles","Apply Styles","Event Listeners"];function O(e){var t=e.filter((function(e){return!m.has(e.slug)})).map((function(e){return e.slug=e.slug.replace(/\/$/,""),e})).sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).sort((function(e,t){return h.indexOf(e.title)-h.indexOf(t.title)}));return[].concat(f(t.filter((function(e){return!g.some((function(t){return e.slug.includes(t)}))}))),f(g.reduce((function(e,n){return[].concat(f(e),f(t.filter((function(e){return e.slug.includes(n)}))))}),[])))}var j=n("vUvN"),x=n.n(j),y=(n("Ggvi"),n("sc67"),n("E5k/"),n("17x9")),v=n.n(y);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.color,n=e.size,a=k(e,["color","size"]);return r.a.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};w.propTypes={color:v.a.string,size:v.a.oneOfType([v.a.string,v.a.number])},w.defaultProps={color:"currentColor",size:"24"};var S=w,z={name:"80dmy3",styles:"display:block;transform:translateX(0);"},C=Object(a.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;overflow:auto;transform:translateX(-",260,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&z})," ",p.d.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),T={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},H=Object(a.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;line-height:1.5;",(function(e){return!e.root&&T})),P=Object(a.a)(i.Link,{target:"e1y4lhx02"})({name:"13d61k5",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),E=Object(a.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",p.d.lg,"{display:none;}"),q={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},A=Object(a.a)("div",{target:"e1y4lhx04"})("background:#c83b50;margin-top:-8px;width:100%;position:sticky;top:0;padding:8px 0;transition:box-shadow 0.4s ease-out;display:none;",p.d.lg,"{display:block;}",(function(e){return e.scrolled&&q})),I=function(e){var t=e.mobile;return Object(c.d)("img",{src:x.a,draggable:"false",alt:"Popper Logo",css:Object(c.c)("display:block;margin:0 auto -10px;width:100px;height:50px;user-select:none;margin-top:",t?"-12px":"0",";")})},L=Object(a.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),V=Object(a.a)("button",{target:"e1y4lhx06"})("position:relative;top:10px;left:25px;display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",p.d.lg,"{display:none;}"),D=Object(a.a)("div",{target:"e1y4lhx07"})("padding:0 10px 20px 0;",p.d.lg,"{margin-top:15px;}"),F=function e(t){var n=t.route;return Object(c.d)(r.a.Fragment,null,Object(c.d)(H,{root:!0},Object(c.d)("li",null,Object(c.d)(P,{to:n.slug+"/",activeStyle:{backgroundColor:"#FFF",color:"#C83B50"}},n.title)),Object(c.d)(H,{root:1===n.slug.split("/").length},n.children.map((function(t,n){return Object(c.d)(e,{key:n,route:t})})))))},M=0;function R(e){e.description,e.lang,e.meta,e.title;var t=Object(o.useState)(!1),n=t[0],a=t[1],i=Object(o.useState)(!1),s=i[0],l=i[1],p=Object(o.useRef)();function d(){a(!0)}function f(){a(!1)}function m(){var e=p.current.scrollTop;M=e,l(e>10)}return Object(o.useLayoutEffect)((function(){var e=p.current;e.scrollTop=M;var t=e.querySelector('[aria-current="page"]');if(t){var n=t.getBoundingClientRect();(n.bottom>window.innerHeight||n.top<0)&&t.scrollIntoView()}}),[]),Object(c.d)(b,null,(function(e){return Object(c.d)(r.a.Fragment,null,Object(c.d)(E,null,Object(c.d)(L,{onClick:d,"aria-expanded":n?"true":"false","aria-label":"Click to open navigation menu"},Object(c.d)(S,{size:30})),Object(c.d)(I,{mobile:!0})),Object(c.d)(C,{open:n,ref:p,onScroll:m},Object(c.d)(A,{scrolled:s},Object(c.d)(I,null)),Object(c.d)(V,{onClick:f},"Close Menu"),Object(c.d)(D,null,function(e){for(var t=[],n=0;n<e.length;n++){u(e[n],t)}return t}(O(e)).map((function(e,t){return Object(c.d)(F,{route:e,key:t})})))))}))}var B=n("9CUm");n("8ypT"),n("cu9l");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var U=function(e){var t=e.color,n=e.size,a=K(e,["color","size"]);return r.a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};U.propTypes={color:v.a.string,size:v.a.oneOfType([v.a.string,v.a.number])},U.defaultProps={color:"currentColor",size:"24"};var X=U,Y=n("EAKA"),W=Object(a.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",p.d.lg,"{padding-top:0;margin-left:",260,"px;}"),J=Object(a.a)(p.b,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",p.d.lg,"{margin-left:",260,"px;}"),Q=Object(a.a)("div",{target:"e1fogcta2"})({name:"17w03cj",styles:"display:flex;justify-content:space-between;border-top:1px solid #44395d;margin-top:50px;"}),Z=Object(a.a)(p.a,{target:"e1fogcta3"})("display:flex;width:100%;padding:0;",p.d.md,"{padding:0 40px;}"),$=Object(a.a)("div",{target:"e1fogcta4"})({name:"i0w8di",styles:"flex:1;min-width:0;display:flex;"}),_=Object(a.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",p.d.md,"{display:block;}"),ee=Object(a.a)(i.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;",p.d.md,"{font-size:22px;width:100%;}",p.d.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}text-align:",(function(e){return e.first?"left":"right"}),";"),te=Object(c.c)("vertical-align:3px;",p.d.md,"{vertical-align:0;}"),ne=Object(a.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",p.d.md,"{top:54px;}",p.d.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),ae={"x-ad":l.a};t.a=function(e){var t=e.children,n=e.path,a=e.pageResources;return Object(o.useLayoutEffect)((function(){try{document.querySelector(window.location.hash).scrollIntoView()}catch(e){}}),[]),Object(c.d)(s.a,{components:ae},Object(c.d)(c.a,{styles:Object(c.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",p.d.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",p.d.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(c.d)("div",null,a&&Object(c.d)(B.a,{title:a.json.pageContext.frontmatter.title}),Object(c.d)(R,{root:"/",target:"location"}),Object(c.d)(W,null,Object(c.d)(p.a,null,t),Object(c.d)(b,null,(function(e){var t=function(e){var t=O(e),a=n.replace(/\/$/,""),o=t.findIndex((function(e){return e.slug===a}));return{prev:t[o-1],next:t[o+1]}}(e),a=t.prev,o=t.next;return Object(c.d)(Q,null,Object(c.d)(Z,null,Object(c.d)($,null,a&&Object(c.d)(ee,{to:a.slug+"/",first:!0},Object(c.d)(ne,{"data-prev":!0},Object(c.d)(X,{size:28,css:te})),a.title)),Object(c.d)(_,null),Object(c.d)($,null,o&&Object(c.d)(ee,{to:o.slug+"/",last:!0},o.title,Object(c.d)(ne,{"data-next":!0},Object(c.d)(Y.a,{size:28,css:te}))))))}))),Object(c.d)(J,null,"© ",(new Date).getFullYear()," MIT License")))}},"9Yco":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"title":"Not Found"}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"title":"Home"}}},{"node":{"fields":{"slug":"/docs/browser-support/"},"frontmatter":{"title":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/constructors/"},"frontmatter":{"title":"Constructors"}}},{"node":{"fields":{"slug":"/docs/faq/"},"frontmatter":{"title":"FAQ"}}},{"node":{"fields":{"slug":"/docs/"},"frontmatter":{"title":"Documentation"}}},{"node":{"fields":{"slug":"/docs/tippy/"},"frontmatter":{"title":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/tree-shaking/"},"frontmatter":{"title":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/typings/"},"frontmatter":{"title":"Typings"}}},{"node":{"fields":{"slug":"/docs/virtual-elements/"},"frontmatter":{"title":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/modifiers/apply-styles/"},"frontmatter":{"title":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/arrow/"},"frontmatter":{"title":"Arrow"}}},{"node":{"fields":{"slug":"/docs/modifiers/compute-styles/"},"frontmatter":{"title":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/event-listeners/"},"frontmatter":{"title":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/modifiers/flip/"},"frontmatter":{"title":"Flip"}}},{"node":{"fields":{"slug":"/docs/modifiers/hide/"},"frontmatter":{"title":"Hide"}}},{"node":{"fields":{"slug":"/docs/modifiers/"},"frontmatter":{"title":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/modifiers/offset/"},"frontmatter":{"title":"Offset"}}},{"node":{"fields":{"slug":"/docs/modifiers/popper-offsets/"},"frontmatter":{"title":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/modifiers/prevent-overflow/"},"frontmatter":{"title":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/detect-overflow/"},"frontmatter":{"title":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/"},"frontmatter":{"title":"Utils"}}}]}}}')},Yp8U:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("q1tI");var a=n("7ljp"),o=n("7oih"),r=n("KK5/");n("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},c={_frontmatter:s},l=o.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(l,i({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hide",style:{position:"relative"}},Object(a.b)("a",i({parentName:"h1"},{href:"#hide","aria-label":"hide permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",i({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Hide"),Object(a.b)("p",null,"The ",Object(a.b)("code",i({parentName:"p"},{className:"language-text"}),"hide")," modifier lets you hide the popper if it appears to be detached from\nits reference element, or attached to nothing at all. This can occur when the\nreference element is inside a scrolling container and the popper is in a\ndifferent context."),Object(a.b)("x-ad",null),Object(a.b)("p",null,"It adds attributes to ",Object(a.b)("code",i({parentName:"p"},{className:"language-text"}),"state.attributes"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",i({parentName:"li"},{className:"language-text"}),"data-popper-reference-hidden"),": This attribute gets applied to the popper when\nthe reference element is fully clipped and hidden from view, which causes the\npopper to appear to be attached to nothing."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",i({parentName:"li"},{className:"language-text"}),"data-popper-escaped"),": This attribute gets applied when the popper escapes the\nreference element's boundary (and so it appears detached).")),Object(a.b)("p",null,"To hide the popper, apply some CSS:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"css"},Object(a.b)("pre",i({parentName:"div"},{className:"language-css"}),Object(a.b)("code",i({parentName:"pre"},{className:"language-css"}),Object(a.b)("span",i({parentName:"code"},{className:"token comment"}),"/* Hide the popper when the reference is hidden */"),"\n",Object(a.b)("span",i({parentName:"code"},{className:"token selector"}),"#popper[data-popper-reference-hidden]")," ",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.b)("span",i({parentName:"code"},{className:"token property"}),"visibility"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," hidden",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(a.b)("span",i({parentName:"code"},{className:"token property"}),"pointer-events"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," none",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),"}")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," avoid using properties like ",Object(a.b)("code",i({parentName:"p"},{className:"language-text"}),"display: none"),". This doesn't allow\nPopper to read its dimensions which can cause jitter issues.")),Object(a.b)("h2",{id:"demo",style:{position:"relative"}},Object(a.b)("a",i({parentName:"h2"},{href:"#demo","aria-label":"demo permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",i({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Demo"),Object(a.b)("p",null,"The popper turns partially transparent when the popper escapes the reference's\nclipping container. It then becomes invisible when the reference is hidden\nentirely."),Object(a.b)(r.c,{mdxType:"HideDemo"}),Object(a.b)("h2",{id:"phase",style:{position:"relative"}},Object(a.b)("a",i({parentName:"h2"},{href:"#phase","aria-label":"phase permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",i({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Phase"),Object(a.b)("p",null,Object(a.b)("code",i({parentName:"p"},{className:"language-text"}),"main")),Object(a.b)("h2",{id:"options",style:{position:"relative"}},Object(a.b)("a",i({parentName:"h2"},{href:"#options","aria-label":"options permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",i({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Options"),Object(a.b)("p",null,"This modifier currently has no options."),Object(a.b)("h2",{id:"data",style:{position:"relative"}},Object(a.b)("a",i({parentName:"h2"},{href:"#data","aria-label":"data permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",i({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",i({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Data"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(a.b)("pre",i({parentName:"div"},{className:"language-flow"}),Object(a.b)("code",i({parentName:"pre"},{className:"language-flow"}),Object(a.b)("span",i({parentName:"code"},{className:"token keyword"}),"type")," Data ",Object(a.b)("span",i({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),"{"),"\n  isReferenceHidden",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",i({parentName:"code"},{className:"token type tag"}),"boolean"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n  hasPopperEscaped",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",i({parentName:"code"},{className:"token type tag"}),"boolean"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n  referenceClippingOffsets",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," Offsets",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n  popperEscapeOffsets",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," Offsets",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(a.b)("span",i({parentName:"code"},{className:"token comment"}),"// A positive number indicates it's overflowing on that side"),"\n",Object(a.b)("span",i({parentName:"code"},{className:"token keyword"}),"type")," Offsets ",Object(a.b)("span",i({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),"{"),"\n  top",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",i({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n  right",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",i({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n  bottom",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",i({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n  left",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",i({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",i({parentName:"code"},{className:"token punctuation"}),";")))))}p.isMDXComponent=!0},vUvN:function(e,t,n){e.exports=n.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,n){"use strict";var a=n("P8UN"),o=n("Wadk")(6),r="findIndex",i=!0;r in[]&&Array(1)[r]((function(){i=!1})),a(a.P+a.F*i,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-modifiers-hide-mdx-d0e25b923b96c4e38983.js.map