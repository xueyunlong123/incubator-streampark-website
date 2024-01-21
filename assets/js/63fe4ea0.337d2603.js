"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[9193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),i=n(67294),r=n(86010),o=n(12466),l=n(16550),s=n(91980),p=n(67392),c=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,p]=f({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var g=n(72389);const h="tabList__CuJ",b="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},o,{className:(0,r.Z)("tabs__item",b,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",h)},i.createElement(N,(0,a.Z)({},e,t)),i.createElement(y,(0,a.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return i.createElement(v,(0,a.Z)({key:String(t)},e))}},60044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(74866),o=n(85162);const l={id:"alert-conf",title:"Alert Configuration",sidebar_position:3},s=void 0,p={unversionedId:"development/alert-conf",id:"development/alert-conf",title:"Alert Configuration",description:"StreamPark supports a variety of alerts, mainly as follows\uff1a",source:"@site/docs/development/alert-conf.md",sourceDirName:"development",slug:"/development/alert-conf",permalink:"/docs/development/alert-conf",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/development/alert-conf.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"alert-conf",title:"Alert Configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Project Configuration",permalink:"/docs/development/config"},next:{title:"Apache Kafka Connector",permalink:"/docs/connector/Kafka-Connector"}},c={},d=[{value:"DingTalk",id:"dingtalk",level:3},{value:"Wechat",id:"wechat",level:3},{value:"Lark",id:"lark",level:3},{value:"Alert Test",id:"alert-test",level:2},{value:"Modify alert configuration:",id:"modify-alert-configuration",level:2},{value:"Use alert configuration",id:"use-alert-configuration",level:2},{value:"Delete alert configuration:",id:"delete-alert-configuration",level:2}],u={toc:d};function m(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StreamPark")," supports a variety of alerts, mainly as follows\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"E-mail"),": Mail notification"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DingTalk"),": DingTalk Custom Group Robot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WeChat"),": Enterprise WeChat Custom Group Robot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lark"),": Feishu Custom Group Robot")),(0,i.kt)("p",null,"StreamPark support any combination of alerts"),(0,i.kt)("admonition",{title:"Future plan",type:"info"},(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SMS notification")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"webhook callback")," notification will be supported in the future\n1Test exception will be fed back to the front-end page\n:::")),(0,i.kt)("h2",{parentName:"admonition",id:"added-alert-configuration"},"Added alert configuration"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Click StreamPark")," -> Setting on the left, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Alert Setting")," to enter the alert configuration.\n",(0,i.kt)("img",{alt:"alert_add_setting.png",src:n(72383).Z,width:"1529",height:"556"})),(0,i.kt)("p",{parentName:"admonition"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add New")," to add alert configuration:"),(0,i.kt)("p",{parentName:"admonition"},"1.Name alert will be added\n2.Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"AlertType"),", then configure the corresponding configuration item."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"alert_add_example.png",src:n(64295).Z,width:"1529",height:"1256"})),(0,i.kt)("p",{parentName:"admonition"},"The configuration content of different alert types is as follows:"),(0,i.kt)("h3",{parentName:"admonition",id:"e-mail"},"E-mail"),(0,i.kt)("p",{parentName:"admonition"},"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"E-mail")," as the alert type.\nThen, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Alert Email")," and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_dingtalk.png",src:n(48035).Z,width:"1528",height:"619"})),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Configuration instructions\uff1a")),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Alert Email"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"Required")),", The email address of the email notification. Multiple email\naddresses need to separate by commas \u2019 ,\u2019."))),(0,i.kt)("p",null,"To use the email alarm notification method,please configure system mail sending\ninformation: ",(0,i.kt)("inlineCode",{parentName:"p"},"Setting -> System Setting -> Sender Email Setting"),"\n",(0,i.kt)("img",{alt:"alert_conf_mail_sender.png",src:n(23223).Z,width:"1514",height:"1076"}),"\nAbove is configured using 163 mailboxes.Please fill in the specific email address according to your actual situation.\n:::"),(0,i.kt)("h3",{id:"dingtalk"},"DingTalk"),(0,i.kt)("p",null,"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"DingTalk")," as the alert type."),(0,i.kt)("p",null,"Then, Enter robot ",(0,i.kt)("inlineCode",{parentName:"p"},"DingTalk Tokens")," and other configurations, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_ding_talk.png",src:n(28317).Z,width:"1512",height:"908"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configuration description\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DingTalk Url"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .It is used to expose to a unified forwarding address within the company. By\ndefault, ",(0,i.kt)("inlineCode",{parentName:"li"},"https://oapi.dingtalk.com/robot/send?access_token=")," is used, and then the ",(0,i.kt)("inlineCode",{parentName:"li"},"Token")," and the\ncorresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret")," are assembled for verification and sent."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DingTalk Token"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"Required")),".It is the default address of the group robot, and intercepts the\ncontent after ",(0,i.kt)("inlineCode",{parentName:"li"},"access_token=.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DingTalk User"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"mobile phone number")," to remind the corresponding users in the group. Multiple\nmobile phone numbers should be separated by commas \u2019 ,\u2019 ."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"At All User"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .After it is turned on, the alarm message will be @ everyone in the group."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Secret Enable"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .If ",(0,i.kt)("inlineCode",{parentName:"li"},"encryption signature verification")," is enabled, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret Token")," signature\nverification key information needs to be configured.")),(0,i.kt)("admonition",{title:"DingTalk robot application",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/group/custom-robot-access"},"DingTalk official documentation")," for robot application and configuration")),(0,i.kt)("h3",{id:"wechat"},"Wechat"),(0,i.kt)("p",null,"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Wechat")," as the alert type."),(0,i.kt)("p",null,"Then, Enter robot ",(0,i.kt)("inlineCode",{parentName:"p"},"WeChat token"),", click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_wecom.png",src:n(84443).Z,width:"1506",height:"660"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Configuration description\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"WeChat token"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"required")),".It is the default address of the group robot, and intercepts the content after ",(0,i.kt)("inlineCode",{parentName:"li"},"key="))),(0,i.kt)("admonition",{title:"Wechat robot application",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to the ","[WeChat official]"," (",(0,i.kt)("a",{parentName:"p",href:"https://developer.work.weixin.qq.com/document/path/91770"},"https://developer.work.weixin.qq.com/document/path/91770"),") for robot application and configuration")),(0,i.kt)("h3",{id:"lark"},"Lark"),(0,i.kt)("p",null,"Firstly, choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Lark")," as the alert type."),(0,i.kt)("p",null,"Then, Enter robot ",(0,i.kt)("inlineCode",{parentName:"p"},"Lark Tokens")," and other configurations, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),".\n",(0,i.kt)("img",{alt:"alert_add_lark.png",src:n(86249).Z,width:"1511",height:"781"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configuration description\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"streampark.proxy.lark-url"),"\uff1aWe need to add the ",(0,i.kt)("inlineCode",{parentName:"li"},"streampark.proxy.lark-url")," property to the configuration file. Example: yaml file adds streampark.proxy.lark-url: ",(0,i.kt)("a",{parentName:"li",href:"https://open.feishu.cn"},"https://open.feishu.cn")," ."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Lark Token"),"\uff1a",(0,i.kt)("font",{color:"red"},(0,i.kt)("inlineCode",{parentName:"li"},"Required")),".1. It is the default address of the group robot, intercept the content behind ",(0,i.kt)("inlineCode",{parentName:"li"},"/hook/"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"At All User"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .2.After it is turned on, the alarm message will be @ everyone in the group."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Secret Enable"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"optional")," .3.If ",(0,i.kt)("inlineCode",{parentName:"li"},"encryption signature verification")," is enabled, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret Token")," signature verification key information needs to be configured.")),(0,i.kt)("admonition",{title:"Lark robot application",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview"},"official Lark official")," for robot application and configuration")),(0,i.kt)("h2",{id:"alert-test"},"Alert Test"),(0,i.kt)("p",null,"To ensure that the alert configuration information takes effect, we encourage to perform a message notification test\u2014\u2014click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Lightning button")," below the corresponding configuration information\n",(0,i.kt)("img",{alt:"alert_send_test.png",src:n(63359).Z,width:"1515",height:"640"})),(0,i.kt)("p",null,"If the test is sent successfully, the return is as follows:\n",(0,i.kt)("img",{alt:"alert_send_test_success.png",src:n(48827).Z,width:"765",height:"386"})),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"E-mail",label:"E-mail",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_email.png",src:n(48179).Z,width:"630",height:"922"}))),(0,i.kt)(o.Z,{value:"Ding Talk",label:"Ding Talk",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_ding_talk.png",src:n(72969).Z,width:"430",height:"383"}))),(0,i.kt)(o.Z,{value:"Wechat",label:"Wechat",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_wechat.png",src:n(8916).Z,width:"411",height:"366"}))),(0,i.kt)(o.Z,{value:"Lark",label:"Lark",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_test_lark.png",src:n(23110).Z,width:"515",height:"405"})))),(0,i.kt)("h2",{id:"modify-alert-configuration"},"Modify alert configuration:"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit button")," below the corresponding alarm configuration information to modify the corresponding configuration information. click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," to save.\n",(0,i.kt)("img",{alt:"alert_edit.png",src:n(17682).Z,width:"1514",height:"616"})),(0,i.kt)("h2",{id:"use-alert-configuration"},"Use alert configuration"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"application")," task is created and modified, configured alert could be selected in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Fault Alert Template"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alert_application_example.png",src:n(87693).Z,width:"918",height:"263"})),(0,i.kt)("h2",{id:"delete-alert-configuration"},"Delete alert configuration:"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"trash can button")," below the corresponding alarm configuration information to delete the corresponding configuration information\u3002\n",(0,i.kt)("img",{alt:"alert_conf_delete.png",src:n(36292).Z,width:"1515",height:"622"})),(0,i.kt)("p",null,"This information will be shown after the deletion is successful:\n",(0,i.kt)("img",{alt:"alert_delete_success.png",src:n(17846).Z,width:"720",height:"395"})),(0,i.kt)("admonition",{title:"warn",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The alert configuration plans to delete  should be ensured that not used in any application configuration")))}m.isMDXComponent=!0},28317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_ding_talk-b3caec1ffb7d3d854b81ae1cb2b03240.png"},48035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_email-ce05ec3b962e3da8715421bd4ba067b6.png"},64295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_example-cff0970a99cd0619307c145f53b97489.png"},86249:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_lark-d2ab4845e83ef632194e1f742891f5e9.png"},72383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_setting-cf588ab5ece868ab22b6e1e6e4ba261f.png"},84443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_add_wecom-63b035f6ca0c4399c8e3546b8d87834d.png"},87693:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_application_example-c31cb94e6de97e1a980100e28ef1dfb4.png"},36292:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_conf_delete-4de431dcb0c2771fa0f982f9f5400303.png"},23223:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_conf_mail_sender-817f2078cfe746f369903506b4e21c67.png"},17846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_delete_success-2bbd348dbe458d95b505211eedb1ef2e.png"},17682:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_edit-9362d5ea6791b866c0fcdb106b04fda5.png"},63359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_send_test-7cd2e3cce6cfc5a7949bc382c82bddde.png"},48827:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_send_test_success-3394a1b85454dd88f5504e2cb2e7772b.png"},72969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_ding_talk-00a51843a9faf5a5dc793a12580db8af.png"},48179:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_email-2c342e2867b99c5bb4b60796aab9a203.png"},23110:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_lark-8786b1c7559ecd42b93f95a74662b9af.png"},8916:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert_test_wechat-2cc8875b55d42a6ad43b5094c38394ac.png"}}]);