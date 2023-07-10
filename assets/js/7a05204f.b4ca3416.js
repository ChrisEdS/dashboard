"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),h=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=h(n),c=r,m=d["".concat(s,".").concat(c)]||d[c]||p[c]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var h=2;h<o;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(7462),r=(n(7294),n(3905));const o={},i="Development Environment",l={unversionedId:"getting-started/development_environment",id:"getting-started/development_environment",title:"Development Environment",description:"This is part of the developer getting started guide.",source:"@site/docs/getting-started/development_environment.md",sourceDirName:"getting-started",slug:"/getting-started/development_environment",permalink:"/dashboard/getting-started/development_environment",draft:!1,tags:[],version:"current",lastUpdatedAt:1688972162,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Concepts",permalink:"/dashboard/getting-started/concepts"},next:{title:"UI Walkthrough",permalink:"/dashboard/getting-started/ui-walkthrough"}},s={},h=[{value:"Stack",id:"stack",level:2},{value:"Helpful links",id:"helpful-links",level:2},{value:"Platform",id:"platform",level:2},{value:"Installing Rancher",id:"installing-rancher",level:3},{value:"Uninstalling Rancher",id:"uninstalling-rancher",level:3},{value:"UI Walkthrough",id:"ui-walkthrough",level:2},{value:"Environment",id:"environment",level:2},{value:"VS Code",id:"vs-code",level:3},{value:"Chrome",id:"chrome",level:3},{value:"Running / Debugging Dashboard",id:"running--debugging-dashboard",level:2},{value:"Running the Dashboard",id:"running-the-dashboard",level:3},{value:"Debugging the Dashboard",id:"debugging-the-dashboard",level:3},{value:"Breakpoints",id:"breakpoints",level:3},{value:"Debug Output for kubectl",id:"debug-output-for-kubectl",level:3},{value:"GitHub CLI",id:"github-cli",level:4},{value:"Working with Different Rancher Versions",id:"working-with-different-rancher-versions",level:2},{value:"Upgrading Rancher with Docker",id:"upgrading-rancher-with-docker",level:3}],u={toc:h},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-environment"},"Development Environment"),(0,r.kt)("p",null,"This is part of the developer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/README.md"},"getting started guide"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Development is only currently supported on Mac and Linux. Windows is not currently supported.")),(0,r.kt)("h2",{id:"stack"},"Stack"),(0,r.kt)("p",null,"A good base knowledge of Vue, Vuex and Nuxt should be reached before going through the code. Looking through ",(0,r.kt)("inlineCode",{parentName:"p"},"nuxt.config.js")," is a good way to understand how the Dashboard is glued together, importantly how plugins are brought in and how the frontend proxies requests to Rancher's APIs."),(0,r.kt)("h2",{id:"helpful-links"},"Helpful links"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Core Vue Docs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://vuejs.org/v2/guide"},"https://vuejs.org/v2/guide"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Typescript in Vue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://vuejs.org/v2/guide/typescript.html"},"https://vuejs.org/v2/guide/typescript.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vue Template/Directive Shorthands"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://vuejs.org/v2/guide/syntax.html"},"https://vuejs.org/v2/guide/syntax.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vue Conditional rendering"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://vuejs.org/v2/guide/conditional.html"},"https://vuejs.org/v2/guide/conditional.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vuex Core Docs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://vuex.vuejs.org/"},"https://vuex.vuejs.org/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nuxt Get Started"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nuxtjs.org/docs/2.x/get-started/installation"},"https://nuxtjs.org/docs/2.x/get-started/installation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nuxt Structure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nuxtjs.org/docs/2.x/directory-structure"},"https://nuxtjs.org/docs/2.x/directory-structure"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Axios (HTTP Requests)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://axios.nuxtjs.org/options"},"https://axios.nuxtjs.org/options"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Proxy middleware"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nuxt-community/proxy-module"},"https://github.com/nuxt-community/proxy-module")," (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/chimurai/http-proxy-middleware"},"https://github.com/chimurai/http-proxy-middleware"),")")))),(0,r.kt)("h2",{id:"platform"},"Platform"),(0,r.kt)("p",null,"The Dashboard is shipped with the Rancher package which contains the Rancher API. When developing locally the Dashboard must point to an instance of the Rancher API."),(0,r.kt)("h3",{id:"installing-rancher"},"Installing Rancher"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/"},"https://rancher.com/docs/rancher/v2.6/en/installation/"),". Note: Not all Linux distros and versions are supported. To make sure your OS is compatible with Rancher, see the support maintenance terms for the specific Rancher version that you are using: ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-6-5/"},"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-6-5/")),(0,r.kt)("p",null,"The above linked installation docs cover two methods confirmed to work with the Dashboard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/"},"Single Docker Container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/installation/install-rancher-on-k8s/"},"Kube Cluster (via Helm)"))),(0,r.kt)("p",null,"To use the most recent version of Rancher that is actively in development, use the version tag ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.6-head")," when installing Rancher. For example, the Docker installation command would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged -e CATTLE_BOOTSTRAP_PASSWORD=OPTIONAL_PASSWORD_HERE rancher/rancher:v2.6-head\n")),(0,r.kt)("p",null,"Dashboard provides convenience methods to start and stop Rancher in a single docker container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'yarn run docker:local:start\nyarn run docker:local:stop  // default user password as "password"\n')),(0,r.kt)("p",null,"Note that for Rancher to provision and manage downstream clusters, the Rancher server URL must be accessible from the Internet. If you\u2019re running Rancher in Docker Desktop, the Rancher server URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost"),". To make Rancher accessible to downstream clusters for development, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ngrok to test provisioning with a local rancher server"),(0,r.kt)("li",{parentName:"ul"},"Install Rancher on a virtual machine in Digital Ocean or Amazon EC2"),(0,r.kt)("li",{parentName:"ul"},"Change the Rancher server URL using ",(0,r.kt)("inlineCode",{parentName:"li"},"<dashboard url>c/local/settings/management.cattle.io.setting"))),(0,r.kt)("p",null,"Also for consideration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://k3d.io/v4.4.8/#installation"},"K3d")," lets you immediately install a Kubernetes cluster in a Docker container and interact with it with kubectl for development and testing purposes.")),(0,r.kt)("p",null,"You should be able to reach the older Ember UI by navigating to the Rancher API url. This same API Url will be used later when starting up the Dashboard."),(0,r.kt)("h3",{id:"uninstalling-rancher"},"Uninstalling Rancher"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker - This should be a simple ",(0,r.kt)("inlineCode",{parentName:"li"},"docker stop")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"docker rm")),(0,r.kt)("li",{parentName:"ul"},"Kube Cluster -  Use ",(0,r.kt)("inlineCode",{parentName:"li"},"helm delete")," as usual and then the ",(0,r.kt)("inlineCode",{parentName:"li"},"remove")," command from ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/system-tools/"},"System Tools")," client")),(0,r.kt)("h2",{id:"ui-walkthrough"},"UI Walkthrough"),(0,r.kt)("p",null,"An intro to the Rancher UI is ",(0,r.kt)("a",{parentName:"p",href:"/dashboard/getting-started/ui-walkthrough"},"here.")),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"Developers are free to use the IDE and modern browser of their choosing. Here's some tips on some in particular"),(0,r.kt)("h3",{id:"vs-code"},"VS Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("inlineCode",{parentName:"li"},"vetur")," extension. This contains syntax highlighting, IntelliSense, snippets, formatting, etc)"),(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("inlineCode",{parentName:"li"},"ESLint")," extension to underline linting issues. It can also be used to auto-fix errors on save by using ",(0,r.kt)("strong",{parentName:"li"},"Command + Shift + P > ESLint: Fix all auto-fixable Problems.")),(0,r.kt)("li",{parentName:"ul"},"Install a spell checker, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"Code Spell Checker"),", to catch common spelling mistakes and typos")),(0,r.kt)("h3",{id:"chrome"},"Chrome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the Chrome ",(0,r.kt)("inlineCode",{parentName:"p"},"vue-devtools")," extension to view the Vuex store."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"This can consume a lot of the host's resources. It's recommended to pause Vuex history (nav to Vue tab in DevTools and toggle the ",(0,r.kt)("inlineCode",{parentName:"p"},"Recording")," button top right of the history section). Vue devtools will record each mutation, so it's strongly recommended to disable recording early on in debugging, before logging into Rancher. Recording Vuex can then be manually toggled on an as-needed basis to safely investigate shared state")))),(0,r.kt)("h2",{id:"running--debugging-dashboard"},"Running / Debugging Dashboard"),(0,r.kt)("h3",{id:"running-the-dashboard"},"Running the Dashboard"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/blob/master/README.md#running-for-development"},"Running For Development")," section on how to bring up the Dashboard locally"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Troubleshooting: Multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Could not freeze errors")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," terminal"),(0,r.kt)("p",{parentName:"blockquote"},"This is most probably due to a correct cache in ",(0,r.kt)("inlineCode",{parentName:"p"},"/node_modules/.cache"),". Exit out of ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn run clean")," and then try again.")),(0,r.kt)("h3",{id:"debugging-the-dashboard"},"Debugging the Dashboard"),(0,r.kt)("h3",{id:"breakpoints"},"Breakpoints"),(0,r.kt)("p",null,"Finding the correct file in Dev Tools and reliably setting a breakpoint can be hit and miss, even in SPA mode. It is advised to manually add a ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," statement in code instead. "),(0,r.kt)("h3",{id:"debug-output-for-kubectl"},"Debug Output for kubectl"),(0,r.kt)("p",null,"You can increase the verbosity level of kubectl to see the actual HTTP requests that it makes to the Kubernetes API, including the request and response bodies. For example, to see the request and response for rolling back a workload, you could run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl rollout undo deployment/[deployment name] --to-revision=[revision number] -v=8\n")),(0,r.kt)("h4",{id:"github-cli"},"GitHub CLI"),(0,r.kt)("p",null,"When reviewing a pull request, it can be useful to pull down someone's PR using the GitHub CLI. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gh pr checkout 4284\n")),(0,r.kt)("p",null,"The GitHub CLI installation instructions are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cli/cli#installation"},"here.")),(0,r.kt)("h2",{id:"working-with-different-rancher-versions"},"Working with Different Rancher Versions"),(0,r.kt)("p",null,"Most of the time, you will be working with the Docker install because when you pull a Docker image such as ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.6-head"),", it will be based on the newest version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch. By contrast, the Helm chart installs only work with released Rancher versions."),(0,r.kt)("p",null,"To find the version or age of the Rancher instance that you are working with, click the hamburger menu in the top left corner. At the bottom of the side nav that appears, there is a commit hash. If you click the commit hash, you will see more details that you can use to make sure you are working with the correct Rancher version."),(0,r.kt)("p",null,"The Rancher UI files are hosted remotely from a location configured in the global Rancher settings. This means it is possible for a Rancher instance to use a newer version of the UI without upgrading Rancher. To see what UI version a specific Rancher instance is using, go to the global settings in Rancher and look at the settings named ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-dashboard-index ")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-index"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-dashboard-index")," is where the Vue frontend comes from, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-index")," is where the iFramed Ember pages come from. Most of the time, the value for the Vue dashboard points to the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," branch because it is built from master, so if you pull a fresh Docker image of Rancher, it will be built from the state of ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," at the time you pull the image. Shortly before a Rancher release, the default setting for the dashboard is changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," to a released Rancher version."),(0,r.kt)("p",null,"The UI team tries to avoid branching a release version from ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," until a short time before a Rancher release in order to prevent merge conflicts. This is something to keep in mind, because if you are working on a feature that is targeted for a future release, but the latest version of Rancher has a released version in the default global settings, you will need to tell QA that they will need to change the global setting to point to the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," branch in order to see your changes."),(0,r.kt)("p",null,"A common mistake is to accidentally work from the wrong Rancher version. Because the Docker images are cached on your machine, the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," image will not actually be the latest image unless you force Docker to re-fetch the image. For details on forcing Docker to pull a new image, see these docs: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/pull/"},"https://docs.docker.com/engine/reference/commandline/pull/")),(0,r.kt)("h3",{id:"upgrading-rancher-with-docker"},"Upgrading Rancher with Docker"),(0,r.kt)("p",null,"If you want to use a more long-lived Rancher instance, you may need to upgrade Rancher without just killing the container running in Docker. In that case, you can run the script ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/update-docker-image"),", or you can follow ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/single-node-upgrades/"},"these docs")," to upgrade Rancher with Docker."),(0,r.kt)("p",null,"If using the script, you will need to provide 2 arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A container name to be updated"),(0,r.kt)("li",{parentName:"ul"},"An image tag for which to update the container with (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"v2.7-head"),")")),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./scripts/update-docker-image my-rancher-instance v2.7-head\n")))}p.isMDXComponent=!0}}]);