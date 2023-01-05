"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[2814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},s="5.5 ES6 Modules",l={unversionedId:"javascript/es6",id:"javascript/es6",title:"5.5 ES6 Modules",description:"The WasmEdge QuickJS runtime supports ES6 modules. In fact, the rollup commands we used in the React SSR examples convert and bundle CommonJS and NPM modules into ES6 modules so that they can be executed in WasmEdge QuickJS. This article will show you how to use ES6 module in WasmEdge.",source:"@site/docs/javascript/es6.md",sourceDirName:"javascript",slug:"/javascript/es6",permalink:"/docs/javascript/es6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/es6.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"5.4 Node.js support",permalink:"/docs/javascript/nodejs"},next:{title:"5.6 Built-in modules",permalink:"/docs/javascript/modules"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run the example",id:"run-the-example",level:2},{value:"Code Explanation",id:"code-explanation",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"55-es6-modules"},"5.5 ES6 Modules"),(0,o.kt)("p",null,"The WasmEdge QuickJS runtime supports ES6 modules. In fact, the rollup commands we used in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/javascript/ssr"},"React SSR")," examples convert and bundle CommonJS and NPM modules into ES6 modules so that they can be executed in WasmEdge QuickJS. This article will show you how to use ES6 module in WasmEdge."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/quick-start/install"},"WasmEdge installed")),(0,o.kt)("li",{parentName:"ul"},"Download the WasmEdge QuickJS Runtime",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"curl -OL https://github.com/second-state/wasmedge-quickjs/releases/download/v0.4.0-alpha/wasmedge_quickjs.wasm")," to download ")))),(0,o.kt)("h2",{id:"run-the-example"},"Run the example"),(0,o.kt)("p",null,"We will take the example in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/es6_module_demo"},"example_js/es6_module_demo")," folder as an example. "),(0,o.kt)("p",null,"First, git clone of fork ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"the example repo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/second-state/wasmedge-quickjs.git\n")),(0,o.kt)("p",null,"To run the example, you can do the following on the CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge --dir .:. /path/to/wasmedge_quickjs.wasm example_js/es6_module_demo/demo.js\nhello from module_def.js\nhello from module_def_async.js\n./module_def_async.js `something` is  async thing\n")),(0,o.kt)("h2",{id:"code-explanation"},"Code Explanation"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/es6_module_demo/module_def.js"},"module_def.js")," file defines and exports a simple JS function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function hello(){\n  console.log('hello from module_def.js');\n}\n\nexport {hello};\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/es6_module_demo/module_def_async.js"},"module_def_async.js")," file defines and exports an aysnc function and a variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export async function hello() {\n  console.log('hello from module_def_async.js');\n  return 'module_def_async.js : return value';\n}\n\nexport var something = 'async thing';\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/blob/main/example_js/es6_module_demo/demo.js"},"demo.js")," file imports functions and variables from those modules and executes them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {hello as module_def_hello} from './module_def.js';\n\nmodule_def_hello();\n\nvar f = async () => {\n  let {hello, something} = await import('./module_def_async.js');\n  await hello();\n  console.log('./module_def_async.js `something` is ', something);\n};\n\nf();\n")))}m.isMDXComponent=!0}}]);