(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7oih":function(e,t,o){"use strict";o("rzGZ"),o("Dq+y"),o("8npG"),o("Ggvi"),o("E5k/"),o("zTTH"),o("HQhv"),o("v9g0");var a=o("wTIg"),n=o("q1tI"),r=o.n(n),s=o("Wbzz"),i=o("7ljp"),c=o("qKvR"),p=o("eVhr"),l=o("4FWg"),d=o("Z3Aq"),b=function(e){var t=e.children;return Object(c.d)(s.StaticQuery,{query:"1879031470",render:function(e){var o=e.allMdx.edges.map((function(e){return{navigationLabel:e.node.frontmatter.navigationLabel,slug:e.node.fields.slug,order:e.node.frontmatter.order,fileAbsolutePath:e.node.fileAbsolutePath}}));return t(o)},data:d})};o("zGcK"),o("TAD1");function u(e,t){for(var o=0;o<t.length;o++){var a=t[o];if(e.slug.startsWith(a.slug))return void u(e,a.children)}t.push({navigationLabel:e.navigationLabel,slug:e.slug,order:e.order,children:[]}),t=t.sort((function(e,t){return e.order-t.order}))}function m(e){e=e.sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).filter((function(e){return null!=e.navigationLabel}));for(var t=[],o=0;o<e.length;o++){u(e[o],t)}return t.sort((function(e,t){return t.order-e.order})),t}o("Ll4R");function f(e,t){var o=t.match(/^\/docs\/(v[0-9]+)\//),a=o?o[1]:null;return e.filter((function(e){return!e.slug.startsWith("/docs/")||e.slug.startsWith("/docs/"+a+"/")||e.slug.match(/^\/docs\/v[0-9]+\/$/)}))}o("pJf4"),o("gZdQ");var g=!("undefined"==typeof window||!window.document||!window.document.createElement),h={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},v=Object(a.a)("div",{target:"ednh1zf0"})("padding-bottom:10px;display:none;transition:box-shadow 0.4s ease-out;flex-direction:column;align-items:stretch;padding:10px;",(function(e){return e.scrolled&&h})," ",l.e.lg,"{display:flex;}.algolia-autocomplete,input{width:100%;}input{border:0;border-radius:20px;padding:10px 20px;transition:box-shadow 0.2s ease-in-out;&:focus{outline:0;box-shadow:0 0 0 5px #a93244;}}.algolia-autocomplete .ds-dropdown-menu:before{left:10px;}"),j=function(e){var t=e.name,a=e.className,r=e.scrolled;return Object(n.useEffect)((function(){g&&o.e(30).then(o.t.bind(null,"UjO/",7)).then((function(e){return null==document.querySelector(".algolia-autocomplete")&&e.default({apiKey:"d5fa05c4e33e776fbf2b8021cbc15b37",indexName:"popper",inputSelector:".docsearch-input-"+t,algoliaOptions:{facetFilters:["tags:v2"]}})}))}),[t]),Object(c.d)(v,{className:a,scrolled:r},Object(c.d)("input",{type:"search",placeholder:"Search the docs...",className:"docsearch-input-"+t}))},x=o("vUvN"),O=o.n(x),y=(o("sc67"),o("4DPX"),o("17x9")),N=o.n(y);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var L=function(e){var t=e.color,o=e.size,a=k(e,["color","size"]);return r.a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};L.propTypes={color:N.a.string,size:N.a.oneOfType([N.a.string,N.a.number])},L.defaultProps={color:"currentColor",size:"24"};var P=L,z={name:"2p83c6",styles:"display:flex;flex-direction:column;transform:translateX(0);"},A=Object(a.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;transform:translateX(-",260,"px);display:none;z-index:2;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&z})," ",l.e.lg,"{display:flex;flex-direction:column;transform:translateX(0);box-shadow:none;}"),S={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},T=Object(a.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;margin-top:0;line-height:1.5;",(function(e){return!e.root&&S})),C=Object(a.a)(s.Link,{target:"e1y4lhx02"})({name:"60c8rm",styles:"display:block;color:white;text-decoration:none;padding:6px 15px;font-size:18px;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;font-weight:500;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),H=Object(a.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:2;",l.e.lg,"{display:none;}"),q=Object(a.a)("div",{target:"e1y4lhx04"})("background:#c83b50;width:100%;padding:6px 0 0;display:none;",l.e.lg,"{display:flex;flex-direction:column;align-items:center;}"),E={name:"1czmu1r",styles:"width:100px;height:50px;"},D=function(e){var t=e.mobile;return Object(c.d)(s.Link,{to:"/",css:Object(c.c)("display:block;margin:0 auto;user-select:none;margin-top:",t?"-12px":"0",";&,&:hover{border-width:0;}")},Object(c.d)("img",{src:O.a,draggable:"false",alt:"Popper Logo",css:E}))},V=Object(a.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),B=Object(a.a)("button",{target:"e1y4lhx06"})("display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;margin:10px 10px 0 10px;",l.e.lg,"{display:none;}"),I=Object(a.a)("div",{target:"e1y4lhx07"})("overflow:auto;min-height:0;flex:1;padding:0 10px 20px 0;margin-top:20px;",l.e.lg,"{margin-top:10px;}"),M=function e(t){var o=t.route;return Object(c.d)(r.a.Fragment,null,Object(c.d)(T,{root:!0},Object(c.d)("li",{style:{marginBottom:0}},Object(c.d)(C,{to:o.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50",fontWeight:"bold"}},o.navigationLabel)),Object(c.d)(T,{root:2===o.slug.split("/").length},o.children.map((function(t,o){return Object(c.d)(e,{key:o,route:t})})))))},R=0;function F(e){e.description,e.lang,e.meta;var t=e.path,o=Object(n.useState)(!1),a=o[0],s=o[1],i=Object(n.useState)(!1),p=i[0],l=i[1],d=Object(n.useRef)();function u(){s(!0)}function g(){s(!1)}function h(){var e=d.current.scrollTop;R=e,l(e>10)}return Object(n.useLayoutEffect)((function(){var e=d.current;e.scrollTop=R;var t=e.querySelector('[aria-current="page"]');if(t){var o=t.getBoundingClientRect();(o.bottom>window.innerHeight||o.top<0)&&t.scrollIntoView()}}),[]),Object(c.d)(b,null,(function(e){return Object(c.d)(r.a.Fragment,null,Object(c.d)(H,null,Object(c.d)(V,{onClick:u,"aria-expanded":a?"true":"false","aria-label":"Click to open navigation menu"},Object(c.d)(P,{size:30})),Object(c.d)(D,{mobile:!0})),Object(c.d)(A,{open:a},Object(c.d)(q,null,Object(c.d)(D,null)),Object(c.d)(B,{onClick:g},"Close Menu"),Object(c.d)(j,{scrolled:p,name:"docs"}),Object(c.d)(I,{ref:d,onScroll:h},m(f(e,t)).map((function(e,t){return Object(c.d)(M,{route:e,key:t})})))))}))}var W=o("9CUm");o("8ypT"),o("cu9l");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var U=function(e){var t=e.color,o=e.size,a=K(e,["color","size"]);return r.a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};U.propTypes={color:N.a.string,size:N.a.oneOfType([N.a.string,N.a.number])},U.defaultProps={color:"currentColor",size:"24"};var X=U,Z=o("EAKA");function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var Q=Object(a.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",l.e.lg,"{padding-top:0;margin-left:",260,"px;}"),_=Object(a.a)(l.c,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",l.e.lg,"{margin-left:",260,"px;}"),Y=Object(a.a)("div",{target:"e1fogcta2"})({name:"1u8mrbl",styles:"display:flex;border-top:1px solid #44395d;margin-top:50px;"}),$=Object(a.a)(l.a,{target:"e1fogcta3"})("display:flex;justify-content:space-between;width:100%;padding:0;",l.e.md,"{padding:0 40px;}"),ee=Object(a.a)("div",{target:"e1fogcta4"})({name:"1tq8hsw",styles:"display:flex;min-width:0;width:100%;"}),te=Object(a.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",l.e.md,"{display:block;}"),oe=Object(a.a)(s.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;width:100%;&[data-first]{padding-right:10px;}&[data-last]{padding-left:10px;text-align:right;}",l.e.md,"{font-size:22px;}",l.e.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),ae=Object(c.c)("vertical-align:3px;",l.e.md,"{vertical-align:0;}"),ne=Object(a.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",l.e.md,"{top:54px;}",l.e.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),re={"x-ad":p.a,a:function(e){return Object(c.d)("a",J({},e,{onClick:se}),e.children)}};function se(e){try{var t=document.querySelector(window.location.hash);t.scrollIntoView();var o="H2"===t.nodeName;window.innerWidth<=l.f.lg?o||window.scrollBy(0,-60):o&&window.scrollBy(0,50)}catch(a){}}var ie=function e(t){return t.reduce((function(t,o){return t.concat(o).concat(e(o.children))}),[])},ce={name:"1cbva5p",styles:"margin-top:15px;display:inline-block;"},pe=function(e){var t=e.path;return Object(c.d)(b,null,(function(e){var o=e.find((function(e){return e.slug===t}));return o&&Object(c.d)("a",{css:ce,href:"https://github.com/popperjs/popper-core/edit/master/docs/src/"+o.fileAbsolutePath.split("/docs/src/")[1],rel:"noopener noreferrer",target:"_blank"},"Edit this page")}))};t.a=function(e){var t=e.children,o=e.path,a=e.pageResources;!function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o])}(e,["children","path","pageResources"]);return Object(n.useLayoutEffect)(se,[]),Object(c.d)(i.a,{components:re},Object(c.d)(c.a,{styles:Object(c.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;font-weight:bold;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;line-height:1.3;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}li{margin-bottom:5px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",l.e.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",l.e.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(c.d)("div",null,a&&Object(c.d)(W.a,{title:a.json.pageContext.frontmatter.navigationLabel}),Object(c.d)(F,{root:"/",target:"location",path:o}),Object(c.d)(Q,null,Object(c.d)(l.a,null,t,Object(c.d)(pe,{path:o})),Object(c.d)(b,null,(function(e){var t=function(e){var t=ie(m(f(e,o))),a=t.findIndex((function(e){return e.slug===o}));return{prev:t[a-1],next:t[a+1]}}(e),a=t.prev,n=t.next;return Object(c.d)(Y,null,Object(c.d)($,null,Object(c.d)(ee,null,a&&Object(c.d)(oe,{to:a.slug+"/","data-first":!0},Object(c.d)(ne,{"data-prev":!0},Object(c.d)(X,{size:28,css:ae})),a.navigationLabel)),Object(c.d)(te,null),Object(c.d)(ee,null,n&&Object(c.d)(oe,{to:n.slug+"/","data-last":!0},n.navigationLabel,Object(c.d)(ne,{"data-next":!0},Object(c.d)(Z.a,{size:28,css:ae}))))))}))),Object(c.d)(_,null,"© ",(new Date).getFullYear()," MIT License")))}},DoZK:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return l}));o("E5k/"),o("rzGZ"),o("Dq+y"),o("8npG"),o("Ggvi"),o("q1tI");var a=o("7ljp"),n=o("7oih"),r=o("KK5/");o("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},p=n.a;function l(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,["components"]);return Object(a.b)(p,s({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hide",style:{position:"relative"}},Object(a.b)("a",s({parentName:"h1"},{href:"#hide","aria-label":"hide permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Hide"),Object(a.b)("p",null,"The ",Object(a.b)("code",s({parentName:"p"},{className:"language-text"}),"hide")," modifier lets you hide the popper if it appears to be detached from\nits reference element, or attached to nothing at all. This can occur when the\nreference element is inside a scrolling container and the popper is in a\ndifferent context."),Object(a.b)("x-ad",null),Object(a.b)("p",null,"It adds attributes to ",Object(a.b)("code",s({parentName:"p"},{className:"language-text"}),"state.attributes"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",s({parentName:"li"},{className:"language-text"}),"data-popper-reference-hidden"),": This attribute gets applied to the popper when\nthe reference element is fully clipped and hidden from view, which causes the\npopper to appear to be attached to nothing."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",s({parentName:"li"},{className:"language-text"}),"data-popper-escaped"),": This attribute gets applied when the popper escapes the\nreference element's boundary (and so it appears detached).")),Object(a.b)("p",null,"To hide the popper, apply some CSS:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"css"},Object(a.b)("pre",s({parentName:"div"},{className:"language-css"}),Object(a.b)("code",s({parentName:"pre"},{className:"language-css"}),Object(a.b)("span",s({parentName:"code"},{className:"token comment"}),"/* Hide the popper when the reference is hidden */"),"\n",Object(a.b)("span",s({parentName:"code"},{className:"token selector"}),"#popper[data-popper-reference-hidden]")," ",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.b)("span",s({parentName:"code"},{className:"token property"}),"visibility"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," hidden",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(a.b)("span",s({parentName:"code"},{className:"token property"}),"pointer-events"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," none",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," avoid using properties like ",Object(a.b)("code",s({parentName:"p"},{className:"language-text"}),"display: none"),". This doesn't allow\nPopper to read its dimensions which can cause jitter issues.")),Object(a.b)("h2",{id:"demo",style:{position:"relative"}},Object(a.b)("a",s({parentName:"h2"},{href:"#demo","aria-label":"demo permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Demo"),Object(a.b)("p",null,"The popper turns partially transparent when the popper escapes the reference's\nclipping container. It then becomes invisible when the reference is hidden\nentirely."),Object(a.b)(r.c,{mdxType:"HideDemo"}),Object(a.b)("h2",{id:"phase",style:{position:"relative"}},Object(a.b)("a",s({parentName:"h2"},{href:"#phase","aria-label":"phase permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Phase"),Object(a.b)("p",null,Object(a.b)("code",s({parentName:"p"},{className:"language-text"}),"main")),Object(a.b)("h2",{id:"options",style:{position:"relative"}},Object(a.b)("a",s({parentName:"h2"},{href:"#options","aria-label":"options permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Options"),Object(a.b)("p",null,"This modifier currently has no options."),Object(a.b)("h2",{id:"data",style:{position:"relative"}},Object(a.b)("a",s({parentName:"h2"},{href:"#data","aria-label":"data permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",s({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",s({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Data"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(a.b)("pre",s({parentName:"div"},{className:"language-flow"}),Object(a.b)("code",s({parentName:"pre"},{className:"language-flow"}),Object(a.b)("span",s({parentName:"code"},{className:"token keyword"}),"type")," Data ",Object(a.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  isReferenceHidden",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",s({parentName:"code"},{className:"token type tag"}),"boolean"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  hasPopperEscaped",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",s({parentName:"code"},{className:"token type tag"}),"boolean"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  referenceClippingOffsets",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," Offsets",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  popperEscapeOffsets",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," Offsets",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(a.b)("span",s({parentName:"code"},{className:"token comment"}),"// A positive number indicates it's overflowing on that side"),"\n",Object(a.b)("span",s({parentName:"code"},{className:"token keyword"}),"type")," Offsets ",Object(a.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  top",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  right",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  bottom",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  left",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",s({parentName:"code"},{className:"token type tag"}),"number"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))))}l.isMDXComponent=!0},Z3Aq:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/404.mdx","fields":{"slug":"/404/"},"frontmatter":{"navigationLabel":null,"order":null}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/index.mdx","fields":{"slug":"/"},"frontmatter":{"navigationLabel":"Home","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/browser-support.mdx","fields":{"slug":"/docs/v2/browser-support/"},"frontmatter":{"navigationLabel":"Browser Support","order":10}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/constructors.mdx","fields":{"slug":"/docs/v2/constructors/"},"frontmatter":{"navigationLabel":"Constructors","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/lifecycle.mdx","fields":{"slug":"/docs/v2/lifecycle/"},"frontmatter":{"navigationLabel":"Lifecycle","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/migration-guide.mdx","fields":{"slug":"/docs/v2/migration-guide/"},"frontmatter":{"navigationLabel":"Migration Guide","order":11}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tippy.mdx","fields":{"slug":"/docs/v2/tippy/"},"frontmatter":{"navigationLabel":"Tippy.js","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tree-shaking.mdx","fields":{"slug":"/docs/v2/tree-shaking/"},"frontmatter":{"navigationLabel":"Tree-shaking","order":7}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/tutorial.mdx","fields":{"slug":"/docs/v2/tutorial/"},"frontmatter":{"navigationLabel":"Tutorial","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/typings.mdx","fields":{"slug":"/docs/v2/typings/"},"frontmatter":{"navigationLabel":"Typings","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/apply-styles.mdx","fields":{"slug":"/docs/v2/modifiers/apply-styles/"},"frontmatter":{"navigationLabel":"Apply Styles","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/compute-styles.mdx","fields":{"slug":"/docs/v2/modifiers/compute-styles/"},"frontmatter":{"navigationLabel":"Compute Styles","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/event-listeners.mdx","fields":{"slug":"/docs/v2/modifiers/event-listeners/"},"frontmatter":{"navigationLabel":"Event Listeners","order":9}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/hide.mdx","fields":{"slug":"/docs/v2/modifiers/hide/"},"frontmatter":{"navigationLabel":"Hide","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/popper-offsets.mdx","fields":{"slug":"/docs/v2/modifiers/popper-offsets/"},"frontmatter":{"navigationLabel":"Popper Offsets","order":0}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/index.mdx","fields":{"slug":"/docs/v2/utils/"},"frontmatter":{"navigationLabel":"Utils","order":5}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/index.mdx","fields":{"slug":"/docs/v2/modifiers/"},"frontmatter":{"navigationLabel":"Modifiers","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/offset.mdx","fields":{"slug":"/docs/v2/modifiers/offset/"},"frontmatter":{"navigationLabel":"Offset","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/index.mdx","fields":{"slug":"/docs/v2/"},"frontmatter":{"navigationLabel":"Documentation (v2.x)","order":1}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/flip.mdx","fields":{"slug":"/docs/v2/modifiers/flip/"},"frontmatter":{"navigationLabel":"Flip","order":4}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/prevent-overflow.mdx","fields":{"slug":"/docs/v2/modifiers/prevent-overflow/"},"frontmatter":{"navigationLabel":"Prevent Overflow","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/faq.mdx","fields":{"slug":"/docs/v2/faq/"},"frontmatter":{"navigationLabel":"FAQ","order":8}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v1/index.mdx","fields":{"slug":"/docs/v1/"},"frontmatter":{"navigationLabel":"Documentation (v1.x)","order":2}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/virtual-elements.mdx","fields":{"slug":"/docs/v2/virtual-elements/"},"frontmatter":{"navigationLabel":"Virtual Elements","order":6}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/modifiers/arrow.mdx","fields":{"slug":"/docs/v2/modifiers/arrow/"},"frontmatter":{"navigationLabel":"Arrow","order":3}}},{"node":{"fileAbsolutePath":"/home/travis/build/popperjs/popper-core/docs/src/pages/docs/v2/utils/detect-overflow.mdx","fields":{"slug":"/docs/v2/utils/detect-overflow/"},"frontmatter":{"navigationLabel":"Detect Overflow","order":null}}}]}}}')},vUvN:function(e,t,o){e.exports=o.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,o){"use strict";var a=o("P8UN"),n=o("Wadk")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-modifiers-hide-mdx-cc0386ec50e6f047fa11.js.map