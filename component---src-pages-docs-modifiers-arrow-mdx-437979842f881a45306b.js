(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3Sck":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return i}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("q1tI");var n=a("7ljp"),o=a("7oih"),r=a("KK5/");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},p={_frontmatter:s},l=o.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,c({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"Arrow"),Object(n.b)("p",null,"The ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"arrow")," modifier positions an inner element of the popper so it appears\ncentered relative to the reference element, usually the triangle or caret that\npoints toward the reference element."),Object(n.b)("x-ad",null),Object(n.b)("h2",null,"Demo"),Object(n.b)(r.a,{mdxType:"ArrowDemo"}),Object(n.b)("h2",null,"Phase"),Object(n.b)("p",null,Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"main")),Object(n.b)("h2",null,"Options"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(n.b)("pre",c({parentName:"div"},{className:"language-flow"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-flow"}),Object(n.b)("span",c({parentName:"code"},{className:"token keyword"}),"type")," Options ",Object(n.b)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  element",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," HTMLElement ",Object(n.b)("span",c({parentName:"code"},{className:"token operator"}),"|")," ",Object(n.b)("span",c({parentName:"code"},{className:"token type tag"}),"string"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),'// "[data-popper-arrow]"'),"\n  padding",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," Padding",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"// 0"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",null,Object(n.b)("code",c({parentName:"h3"},{className:"language-text"}),"element")),Object(n.b)("p",null,"Specifies the element to position as the arrow. This element must be a child of\nthe popper element."),Object(n.b)("p",null,"A string represents a ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"CSS")," selector queried within the context of the popper\nelement."),Object(n.b)("p",null,"Popper will automatically pick up the following element (using the\n",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"data-popper-arrow")," attribute) and position it:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.b)("pre",c({parentName:"div"},{className:"language-html"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-html"}),Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"id"),Object(n.b)("span",c({parentName:"span"},{className:"token attr-value"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"="),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"'),"popper",Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(n.b)("span",c({parentName:"span"},{className:"token attr-name"}),"data-popper-arrow"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token tag"}),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.b)("span",c({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.b)("p",null,"Or you can pass an element without an attribute:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",c({parentName:"div"},{className:"language-js"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",c({parentName:"code"},{className:"token keyword"}),"const")," arrow ",Object(n.b)("span",c({parentName:"code"},{className:"token operator"}),"=")," document",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"querySelector"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",c({parentName:"code"},{className:"token string"}),"'#arrow'"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token string"}),"'arrow'"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n        element",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," arrow",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h3",null,Object(n.b)("code",c({parentName:"h3"},{className:"language-text"}),"padding")),Object(n.b)("p",null,"If you don't want the arrow to reach the ",Object(n.b)("em",{parentName:"p"},"very")," edge of the popper (this is\ncommon if your popper has rounded corners using ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"border-radius"),"), you can apply\nsome padding to it."),Object(n.b)("p",null,"You can pass a ",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"number"),", which will be equal padding on all four sides, or an\n",Object(n.b)("code",c({parentName:"p"},{className:"language-text"}),"object")," containing side properties each with their own padding value."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",c({parentName:"div"},{className:"language-js"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",c({parentName:"code"},{className:"token function"}),"createPopper"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n      name",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token string"}),"'arrow'"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n      options",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n        padding",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token number"}),"5"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",c({parentName:"code"},{className:"token comment"}),"// 5px from the edges of the popper"),"\n      ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h2",null,"Data"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(n.b)("pre",c({parentName:"div"},{className:"language-flow"}),Object(n.b)("code",c({parentName:"pre"},{className:"language-flow"}),Object(n.b)("span",c({parentName:"code"},{className:"token keyword"}),"type")," Data ",Object(n.b)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  x",Object(n.b)("span",c({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n  y",Object(n.b)("span",c({parentName:"code"},{className:"token operator"}),"?"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.b)("span",c({parentName:"code"},{className:"token type tag"}),"number"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))))}i.isMDXComponent=!0},"7oih":function(e,t,a){"use strict";a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("zTTH"),a("sC2a");var n=a("wTIg"),o=a("q1tI"),r=a.n(o),c=a("Wbzz"),s=a("7ljp"),p=a("qKvR"),l=a("eVhr"),i=a("4FWg"),d=a("9Yco"),b=function(e){var t=e.children;return Object(p.d)(c.StaticQuery,{query:"3609520525",render:function(e){var a=e.allMdx.edges.map((function(e){return{title:e.node.frontmatter.title,slug:e.node.fields.slug}}));return t(a)},data:d})};a("HQhv");function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];if(0===e.slug.indexOf(n.slug+"/"))return void u(e,n.children)}t.push({title:e.title,slug:e.slug,children:[]})}a("cFtU"),a("q8oJ"),a("m210"),a("4DPX"),a("gu/5"),a("eoYm"),a("zGcK"),a("YbXK"),a("ToIb");function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=new Set(["/404/"]),f=["tippy","constructors","modifiers","utils","virtual-elements","tree-shaking","faq","typings","browser-support"],N=["Popper Offsets","Offset","Prevent Overflow","Arrow","Flip","Hide","Compute Styles","Apply Styles","Event Listeners"];function O(e){var t=e.filter((function(e){return!g.has(e.slug)})).map((function(e){return e.slug=e.slug.replace(/\/$/,""),e})).sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).sort((function(e,t){return N.indexOf(e.title)-N.indexOf(t.title)}));return[].concat(m(t.filter((function(e){return!f.some((function(t){return e.slug.includes(t)}))}))),m(f.reduce((function(e,a){return[].concat(m(e),m(t.filter((function(e){return e.slug.includes(a)}))))}),[])))}var j=a("vUvN"),h=a.n(j),k=(a("sc67"),a("17x9")),x=a.n(k);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var w=function(e){var t=e.color,a=e.size,n=v(e,["color","size"]);return r.a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};w.propTypes={color:x.a.string,size:x.a.oneOfType([x.a.string,x.a.number])},w.defaultProps={color:"currentColor",size:"24"};var z=w,P={name:"80dmy3",styles:"display:block;transform:translateX(0);"},S=Object(n.a)("div",{target:"e1y4lhx00"})("background:#c83b50;padding:10px 10px 20px;position:fixed;top:0;height:100vh;width:",250,"px;overflow:auto;transform:translateX(-",250,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&P})," ",i.d.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),T=Object(n.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;padding-left:",(function(e){return e.root?0:15}),"px;line-height:1.5;"),q=Object(n.a)(c.Link,{target:"e1y4lhx02"})({name:"1j52rfc",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:20px;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),A=Object(n.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",i.d.lg,"{display:none;}"),C=function(e){var t=e.mobile;return Object(p.d)("img",{src:h.a,draggable:"false",alt:"Popper Logo",css:Object(p.c)("display:block;position:absolute;left:50%;top:0;margin-left:-50px;width:100px;height:50px;display:",t?"block":"none",";user-select:none;",i.d.lg,"{display:",t?"none":"block",";margin-top:8px;}")})},E=Object(n.a)("button",{target:"e1y4lhx04"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),L=Object(n.a)("button",{target:"e1y4lhx05"})("background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",i.d.lg,"{display:none;}"),D=Object(n.a)("div",{target:"e1y4lhx06"})(i.d.lg,"{margin-top:50px;}"),F=function e(t){var a=t.route;return Object(p.d)(r.a.Fragment,null,Object(p.d)(T,{root:!0},Object(p.d)("li",null,Object(p.d)(q,{to:a.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50",borderRadius:20}},a.title)),Object(p.d)(T,{root:1===a.slug.split("/").length},a.children.map((function(t,a){return Object(p.d)(e,{key:a,route:t})})))))};function I(e){e.description,e.lang,e.meta,e.title;var t=Object(o.useState)(!1),a=t[0],n=t[1];function c(){n(!0)}function s(){n(!1)}return Object(p.d)(b,null,(function(e){return Object(p.d)(r.a.Fragment,null,Object(p.d)(A,null,Object(p.d)(E,{onClick:c,"aria-expanded":a?"true":"false","aria-label":"Click to open navigation menu"},Object(p.d)(z,{size:30})),Object(p.d)(C,{mobile:!0})),Object(p.d)(S,{open:a},Object(p.d)(C,null),Object(p.d)(L,{onClick:s},"Close Menu"),Object(p.d)(D,null,function(e){for(var t=[],a=0;a<e.length;a++){u(e[a],t)}return t}(O(e)).map((function(e,t){return Object(p.d)(F,{route:e,key:t})})))))}))}var G=a("9CUm");a("8ypT"),a("cu9l");function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var K=function(e){var t=e.color,a=e.size,n=H(e,["color","size"]);return r.a.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};K.propTypes={color:x.a.string,size:x.a.oneOfType([x.a.string,x.a.number])},K.defaultProps={color:"currentColor",size:"24"};var X=K,U=a("EAKA");function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var W=Object(n.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",i.d.lg,"{padding-top:0;margin-left:",250,"px;}"),B=Object(n.a)(i.b,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",i.d.lg,"{margin-left:",250,"px;}"),J=Object(n.a)("div",{target:"e1fogcta2"})({name:"17w03cj",styles:"display:flex;justify-content:space-between;border-top:1px solid #44395d;margin-top:50px;"}),R=Object(n.a)(i.a,{target:"e1fogcta3"})("display:flex;width:100%;padding:0;",i.d.md,"{padding:0 40px;}"),Q=Object(n.a)("a",{target:"e1fogcta4"})({name:"1c79cqq",styles:"padding:50px 25px;border:none;min-width:50%;pointer-events:none;"}),V=Object(n.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",i.d.md,"{display:block;}"),Z=Object(n.a)(c.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;border-bottom:2px solid transparent;flex-grow:1;word-break:break-word;",i.d.md,"{font-size:22px;width:100%;}",i.d.lg,"{font-size:24px;}&:first-of-type{&:not(:last-of-type){padding-right:15px;}}&:last-of-type{border-bottom-color:transparent;text-align:right;&:not(:first-of-type){padding-left:15px;}}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),$=Object(p.c)("vertical-align:3px;",i.d.md,"{vertical-align:0;}"),_=Object(n.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",i.d.md,"{top:54px;}",i.d.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),ee={a:function(e){var t=e.href,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["href"]);return Object(p.d)(c.Link,Y({to:t},a))},"x-ad":l.a};t.a=function(e){var t=e.children,a=e.path,n=e.pageResources;return Object(p.d)(s.a,{components:ee},Object(p.d)(p.a,{styles:Object(p.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",i.d.md,"{pre[class*='language-']{padding:15px 20px;}}")}),Object(p.d)("div",null,n.json&&Object(p.d)(G.a,{title:n.json.pageContext.frontmatter.title}),Object(p.d)(I,{root:"/",target:"location"}),Object(p.d)(W,null,Object(p.d)(i.a,null,t),Object(p.d)(b,null,(function(e){var t=function(e){var t=O(e),n=a.replace(/\/$/,""),o=t.findIndex((function(e){return e.slug===n}));return{prev:t[o-1],next:t[o+1]}}(e),n=t.prev,o=t.next;return Object(p.d)(J,null,Object(p.d)(R,null,n?Object(p.d)(Z,{to:n.slug},Object(p.d)(_,{"data-prev":!0},Object(p.d)(X,{size:28,css:$})),n.title):Object(p.d)(Q,null),Object(p.d)(V,null),o?Object(p.d)(Z,{to:o.slug},o.title,Object(p.d)(_,{"data-next":!0},Object(p.d)(U.a,{size:28,css:$}))):Object(p.d)(Q,null)))}))),Object(p.d)(B,null,"© ",(new Date).getFullYear()," MIT License")))}},"9Yco":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"title":"Not Found"}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"title":"Home"}}},{"node":{"fields":{"slug":"/docs/browser-support/"},"frontmatter":{"title":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/constructors/"},"frontmatter":{"title":"Constructors"}}},{"node":{"fields":{"slug":"/docs/faq/"},"frontmatter":{"title":"FAQ"}}},{"node":{"fields":{"slug":"/docs/tippy/"},"frontmatter":{"title":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/tree-shaking/"},"frontmatter":{"title":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/typings/"},"frontmatter":{"title":"Typings"}}},{"node":{"fields":{"slug":"/docs/virtual-elements/"},"frontmatter":{"title":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/utils/detect-overflow/"},"frontmatter":{"title":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/"},"frontmatter":{"title":"Utils"}}},{"node":{"fields":{"slug":"/docs/modifiers/apply-styles/"},"frontmatter":{"title":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/compute-styles/"},"frontmatter":{"title":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/arrow/"},"frontmatter":{"title":"Arrow"}}},{"node":{"fields":{"slug":"/docs/modifiers/event-listeners/"},"frontmatter":{"title":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/modifiers/flip/"},"frontmatter":{"title":"Flip"}}},{"node":{"fields":{"slug":"/docs/modifiers/"},"frontmatter":{"title":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/modifiers/hide/"},"frontmatter":{"title":"Hide"}}},{"node":{"fields":{"slug":"/docs/modifiers/offset/"},"frontmatter":{"title":"Offset"}}},{"node":{"fields":{"slug":"/docs/modifiers/popper-offsets/"},"frontmatter":{"title":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/modifiers/prevent-overflow/"},"frontmatter":{"title":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/"},"frontmatter":{"title":"Documentation"}}}]}}}')},vUvN:function(e,t,a){e.exports=a.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,a){"use strict";var n=a("P8UN"),o=a("Wadk")(6),r="findIndex",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),n(n.P+n.F*c,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-modifiers-arrow-mdx-437979842f881a45306b.js.map