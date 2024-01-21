"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),k=n,b=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return r?a.createElement(b,l(l({ref:t},s),{},{components:r})):a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},58041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={slug:"streampark-usercase-haibo",title:"StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},l=void 0,i={permalink:"/zh-CN/blog/streampark-usercase-haibo",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/7-streampark-usercase-haibo.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/7-streampark-usercase-haibo.md",title:"StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe",description:"\u6458\u8981\uff1a\u672c\u6587\u300c StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe \u300d\u4f5c\u8005\u662f\u6d77\u535a\u79d1\u6280\u5927\u6570\u636e\u67b6\u6784\u5e08\u738b\u5e86\u7115\uff0c\u4e3b\u8981\u5185\u5bb9\u4e3a\uff1a",date:"2024-01-21T04:16:34.000Z",formattedDate:"2024\u5e741\u670821\u65e5",tags:[{label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{label:"\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u751f\u4ea7\u5b9e\u8df5"},{label:"FlinkSQL",permalink:"/zh-CN/blog/tags/flink-sql"}],readingTime:6.885,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-haibo",title:"StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","FlinkSQL"]},prevItem:{title:"StreamPark \u5728 Joyme \u7684\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-joyme"},nextItem:{title:"\u81ea\u5982\u57fa\u4e8eApache StreamPark \u7684\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-ziru"}},p={authorsImageUrls:[]},c=[],s={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6458\u8981\uff1a"),"\u672c\u6587\u300c StreamPark \u4e00\u7ad9\u5f0f\u8ba1\u7b97\u5229\u5668\u5728\u6d77\u535a\u79d1\u6280\u7684\u751f\u4ea7\u5b9e\u8df5\uff0c\u52a9\u529b\u667a\u6167\u57ce\u5e02\u5efa\u8bbe \u300d\u4f5c\u8005\u662f\u6d77\u535a\u79d1\u6280\u5927\u6570\u636e\u67b6\u6784\u5e08\u738b\u5e86\u7115\uff0c\u4e3b\u8981\u5185\u5bb9\u4e3a\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9 StreamPark"),(0,n.kt)("li",{parentName:"ol"},"\u5feb\u901f\u4e0a\u624b"),(0,n.kt)("li",{parentName:"ol"},"\u5e94\u7528\u573a\u666f"),(0,n.kt)("li",{parentName:"ol"},"\u529f\u80fd\u6269\u5c55"),(0,n.kt)("li",{parentName:"ol"},"\u672a\u6765\u671f\u5f85")),(0,n.kt)("p",null,"\u6d77\u535a\u79d1\u6280\u662f\u4e00\u5bb6\u884c\u4e1a\u9886\u5148\u7684\u4eba\u5de5\u667a\u80fd\u7269\u8054\u7f51\u4ea7\u54c1\u548c\u89e3\u51b3\u65b9\u6848\u516c\u53f8\u3002\u76ee\u524d\u5728\u516c\u5171\u5b89\u5168\u3001\u667a\u6167\u57ce\u5e02\u3001\u667a\u6167\u5236\u9020\u9886\u57df\uff0c\u4e3a\u5168\u56fd\u5ba2\u6237\u63d0\u4f9b\u5305\u62ec\u7b97\u6cd5\u3001\u8f6f\u4ef6\u548c\u786c\u4ef6\u4ea7\u54c1\u5728\u5185\u7684\u5168\u6808\u5f0f\u6574\u4f53\u89e3\u51b3\u65b9\u6848\u3002"))}m.isMDXComponent=!0}}]);