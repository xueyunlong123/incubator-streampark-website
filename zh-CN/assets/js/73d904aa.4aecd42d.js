"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[7710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(u,".").concat(d)]||p[d]||s[d]||i;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"Team",title:"\u56e2\u961f\u6210\u5458\u7ba1\u7406",sidebar_position:6},l=void 0,o={unversionedId:"user-guide/Team",id:"user-guide/Team",title:"\u56e2\u961f\u6210\u5458\u7ba1\u7406",description:"\u7528\u6237\u7ba1\u7406",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/6-Team.md",sourceDirName:"user-guide",slug:"/user-guide/Team",permalink:"/zh-CN/docs/user-guide/Team",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/6-Team.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Team",title:"\u56e2\u961f\u6210\u5458\u7ba1\u7406",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"LDAP \u4f7f\u7528",permalink:"/zh-CN/docs/user-guide/LDAP"},next:{title:"\u53d8\u91cf\u7ba1\u7406",permalink:"/zh-CN/docs/user-guide/Variable"}},u={},c=[{value:"\u7528\u6237\u7ba1\u7406",id:"\u7528\u6237\u7ba1\u7406",level:2},{value:"\u56e2\u961f\u7ba1\u7406",id:"\u56e2\u961f\u7ba1\u7406",level:2},{value:"\u89d2\u8272\u7ba1\u7406",id:"\u89d2\u8272\u7ba1\u7406",level:2},{value:"\u6210\u5458\u7ba1\u7406",id:"\u6210\u5458\u7ba1\u7406",level:2}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7528\u6237\u7ba1\u7406"},"\u7528\u6237\u7ba1\u7406"),(0,a.kt)("p",null,"ADMIN \u521b\u5efa\u6216\u4fee\u6539\u7528\u6237\u65f6\u53ef\u4ee5\u6307\u5b9a\u7528\u6237\u7c7b\u578b\uff0c\u7528\u6237\u7c7b\u578b\u6709 ADMIN \u548c USER \u4e24\u79cd\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ADMIN \u8868\u793a\u7cfb\u7edf\u7ba1\u7406\u5458\uff0c\u5373\uff1aStreamPark \u7684\u8d85\u7ea7\u7ba1\u7406\u5458\uff0c\u6709 StreamPark \u7ba1\u7406\u9875\u9762\u4ee5\u53ca\u5404\u4e2a\u56e2\u961f\u7684\u6240\u6709\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},"USER \u8868\u793a\u5e73\u53f0\u7684\u666e\u901a\u7528\u6237\u3002\u521b\u5efa USER \u53ea\u662f\u521b\u5efa\u8d26\u53f7\u7684\u8fc7\u7a0b\uff0c\u9ed8\u8ba4\u666e\u901a\u7528\u6237\u5728\u5e73\u53f0\u6ca1\u6709\u4efb\u4f55\u6743\u9650\u3002\u521b\u5efa USER \u540e\u4e14\u7cfb\u7edf\u7ba1\u7406\u5458\u7ed9 USER \u5728\u4e00\u4e9b\u56e2\u961f\u7ed1\u5b9a\u89d2\u8272\u540e\uff0cUSER \u624d\u4f1a\u5728\u76f8\u5e94\u56e2\u961f\u6709\u6743\u9650\u3002")),(0,a.kt)("h2",{id:"\u56e2\u961f\u7ba1\u7406"},"\u56e2\u961f\u7ba1\u7406"),(0,a.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\u516c\u53f8\u5185\u4e0d\u540c\u90e8\u95e8\u7684\u4f5c\u4e1a\uff0cStreamPark \u652f\u6301\u4e86\u56e2\u961f\u7ba1\u7406\u3002\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u5728 StreamPark \u4e0a\u4e3a\u4e0d\u540c\u90e8\u95e8\u521b\u5efa\u4e0d\u540c\u7684\u56e2\u961f\u3002"),(0,a.kt)("img",{src:"/doc/image/team/team_management.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u70b9\u51fb\u5e73\u53f0\u53f3\u4e0a\u89d2\uff0c\u9009\u62e9\u6709\u6743\u9650\u7684\u56e2\u961f\u3002"),(0,a.kt)("img",{src:"/doc/image/team/change_team.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u56e2\u961f\u7c7b\u4f3c\u4e8e\u5de5\u4f5c\u7a7a\u95f4\u7684\u6982\u5ff5\uff0c\u5f53\u9009\u62e9\u56e2\u961f\u540e\u5e73\u53f0\u53ea\u4f1a\u5c55\u793a\u5f53\u524d\u56e2\u961f\u7684\u4f5c\u4e1a\u548c\u9879\u76ee\u3002\u5982\u679c\u7528\u6237\u5728\u591a\u4e2a\u56e2\u961f\u6709\u6743\u9650\uff0c\u5207\u6362\u5230\u5176\u4ed6\u56e2\u961f\u5373\u53ef\u67e5\u770b\u6216\u64cd\u4f5c\u76f8\u5e94\u56e2\u961f\u7684\u4f5c\u4e1a\u3002"),(0,a.kt)("img",{src:"/doc/image/team/app_list.png"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u89d2\u8272\u7ba1\u7406"},"\u89d2\u8272\u7ba1\u7406"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7ba1\u7406\u4f5c\u4e1a\u4ee5\u53ca\u9632\u6b62\u8bef\u64cd\u4f5c\uff0c\u56e2\u961f\u5185\u90e8\u4e5f\u9700\u8981\u533a\u5206\u7ba1\u7406\u5458\u548c\u666e\u901a\u5f00\u53d1\u8005\uff0c\u6240\u4ee5 StreamPark \u5f15\u5165\u4e86\u89d2\u8272\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u5f53\u524d\uff0cStreamPark \u652f\u6301\u4e24\u8005\u89d2\u8272\uff0c\u5206\u522b\u662f\uff1ateam admin \u548c developer\u3002 team admin \u62e5\u6709\u56e2\u961f\u5185\u7684\u6240\u6709\u6743\u9650\uff0cdeveloper \u76f8\u6bd4 team admin \u800c\u8a00\uff0c\u5c11\u4e86\u5220\u9664\u4f5c\u4e1a\u3001\u6dfb\u52a0 USER \u5230\u56e2\u961f\u7b49\u6743\u9650\u3002"),(0,a.kt)("img",{src:"/doc/image/team/role_management.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5f53\u7136\u5982\u679c\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u4ee5\u4e0a\u89d2\u8272\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\uff0c\u4e5f\u53ef\u4ee5\u5728\u89d2\u8272\u7ba1\u7406\u9875\u9762\u6dfb\u52a0\u66f4\u52a0\u7684\u89d2\u8272\uff0c\u4e14\u5b9a\u4e49\u5404\u4e2a\u89d2\u8272\u7684\u6743\u9650\u3002"),(0,a.kt)("h2",{id:"\u6210\u5458\u7ba1\u7406"},"\u6210\u5458\u7ba1\u7406"),(0,a.kt)("p",null,"\u6210\u5458\u7ba1\u7406\u4e3b\u8981\u7528\u4e8e\u7ef4\u62a4\u7528\u6237\u548c\u56e2\u961f\u7684\u6620\u5c04\uff0c\u5373\uff1a\u6bcf\u4e2a\u56e2\u961f\u6709\u54ea\u4e9b\u7528\u6237\uff0c\u6bcf\u4e2a\u7528\u6237\u5728\u5f53\u524d\u56e2\u961f\u5206\u522b\u662f\u4ec0\u4e48\u89d2\u8272\u3002"),(0,a.kt)("img",{src:"/doc/image/team/member_management.png"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4e00\u4e2a\u56e2\u961f\u53ef\u4ee5\u62e5\u6709\u591a\u4e2a\u7528\u6237\uff0c\u4e00\u4e2a\u7528\u6237\u4e5f\u53ef\u4ee5\u5c5e\u4e8e\u591a\u4e2a\u56e2\u961f\uff0c\u4e14\u5728\u4e0d\u540c\u7684\u56e2\u961f\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u89d2\u8272\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1auser_a \u5728 team1 \u548c team2 \u6709\u6743\u9650\uff0c\u5728 team1 \u662f developer\uff0c\u5728 team2 \u662f team admin\u3002\u5219\uff1auser_a \u5728 team2 \u662f\u56e2\u961f\u7ba1\u7406\u5458\uff0c\u4ed6\u5728 team2\n\u6709\u6240\u6709\u6743\u9650\uff0c\u5305\u62ec\uff1a\u5f00\u53d1\u4f5c\u4e1a\uff0c\u8fd0\u7ef4\u4f5c\u4e1a\uff0c\u5220\u9664\u4f5c\u4e1a\u4ee5\u53ca\u6dfb\u52a0\u5176\u4ed6\u7528\u6237\u5230 team2\u3002user_a \u5728 team1 \u662f\u4e00\u4e2a\u666e\u901a\u5f00\u53d1\u8005\uff0c\u53ea\u6709\u6743\u9650\u5f00\u53d1\u548c\u8fd0\u7ef4\u4f5c\u4e1a\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a\u6210\u5458\u7ba1\u7406\u9875\u9762\u53ea\u80fd\u67e5\u770b\u5f53\u524d\u56e2\u961f\u7684\u6210\u5458\uff0c\u5982\u679c\u9700\u8981\u67e5\u770b\u6216\u4fee\u6539\u5176\u4ed6\u56e2\u961f\u7684\u6210\u5458\u6620\u5c04\uff0c\u8bf7\u5148\u5207\u6362\u5230\u5176\u4ed6\u56e2\u961f\u3002"))}p.isMDXComponent=!0}}]);