"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[39],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Quickstart",l={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quickstart",description:"Running for Development",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/dashboard/getting-started/quickstart",draft:!1,tags:[],version:"current",lastUpdatedAt:1680775320,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Developer Documentation",permalink:"/dashboard/home"},next:{title:"Concepts",permalink:"/dashboard/getting-started/concepts"}},d={},s=[{value:"Running for Development",id:"running-for-development",level:2},{value:"Other Building Modes",id:"other-building-modes",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("h2",{id:"running-for-development"},"Running for Development"),(0,o.kt)("p",null,"To get started running the UI for development:"),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies\nyarn install\n\n# For development, serve with hot reload at https://localhost:8005\n# using the endpoint for your Rancher API\nAPI=https://your-rancher yarn dev\n# or put the variable into a .env file\n# Goto https://localhost:8005\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," is the URL of a deployed Rancher environment (backend API)")),(0,o.kt)("h2",{id:"other-building-modes"},"Other Building Modes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This documentation is out of date")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Build for standalone use within Rancher\n# (These are done on commit/tag via Drone)\n./scripts/build-embedded # for embedding into rancher builds\n./scripts/build-hosted # for hosting on a static file webserver and pointing Rancher\'s ui-dashboard-index at it\n# Output in dist/\n\n# Build and run with server-side-rendering\n# (This method and SSR are not currently used, but should be maintained for future)\nyarn build\nyarn start\n\n# Develop via Docker instead of a local nodejs\ndocker build -f Dockerfile.dev -t dashboard:dev .\ndocker run -v $(pwd):/src \\\n  -v dashboard_node:/src/node_modules \\\n  -p 8005:8005 \\\n  -e API=https://your-rancher \\\n  dashboard:dev\n# The first time will take *forever* installing node_modules into the volume; it will be faster next time.\n# Goto https://localhost:8005\n\n# Developing against a standalone "Steve" API on a Mac\ngit clone https://github.com/rancher/steve.git\ncd steve\nmake run-host\n\ncd dashboard\ndocker build -f Dockerfile.dev -t rancher/dashboard:dev .\ndocker run -v $(pwd):/src \\\n  -v dashboard_node:/src/node_modules \\\n  -p 8005:8005 \\\n  -e API=http://172.17.0.1:8989 \\\n  rancher/dashboard:dev\n# The first time will take *forever* installing node_modules into the volume; it will be faster next time.\n# Goto https://localhost:8005\n')))}u.isMDXComponent=!0}}]);