"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[9398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},62885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"quick-start",title:"\u5feb\u901f\u5f00\u59cb",sidebar_position:2},o=void 0,l={unversionedId:"user-guide/quick-start",id:"user-guide/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5982\u4f55\u4f7f\u7528",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/2-quickstart.md",sourceDirName:"user-guide",slug:"/user-guide/quick-start",permalink:"/zh-CN/docs/user-guide/quick-start",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/2-quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"quick-start",title:"\u5feb\u901f\u5f00\u59cb",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/user-guide/deployment"},next:{title:"\u5f00\u53d1\u6307\u5357",permalink:"/zh-CN/docs/user-guide/development"}},c={},s=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u90e8\u7f72 DataStream \u4efb\u52a1",id:"\u90e8\u7f72-datastream-\u4efb\u52a1",level:3},{value:"\u90e8\u7f72 FlinkSql \u4efb\u52a1",id:"\u90e8\u7f72-flinksql-\u4efb\u52a1",level:3},{value:"\u4efb\u52a1\u542f\u52a8\u6d41\u7a0b",id:"\u4efb\u52a1\u542f\u52a8\u6d41\u7a0b",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u4e0a\u4e2a\u7ae0\u8282\u5df2\u7ecf\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u4e00\u7ad9\u5f0f\u5e73\u53f0 ",(0,a.kt)("inlineCode",{parentName:"p"},"streampark-console")," \u7684\u5b89\u88c5, \u672c\u7ae0\u8282\u770b\u770b\u5982\u679c\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"streampark-console")," \u5feb\u901f\u90e8\u7f72\u8fd0\u884c\u4e00\u4e2a\u4f5c\u4e1a, ",(0,a.kt)("inlineCode",{parentName:"p"},"streampark-console")," \u5bf9\u6807\u51c6\u7684 Flink \u7a0b\u5e8f ( \u6309\u7167 Flink \u5b98\u65b9\u8981\u6c42\u7684\u7ed3\u6784\u548c\u89c4\u8303 ) \u548c\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"streampark")," \u5f00\u53d1\u7684\u9879\u76ee\u90fd\u505a\u4e86\u5f88\u597d\u7684\u652f\u6301\uff0c\u4e0b\u9762\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"streampark-quickstart")," \u6765\u5feb\u901f\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"streampark-console")," \u4e4b\u65c5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"streampark-quickstart")," \u662f StreamPark \u5f00\u53d1 Flink \u7684\u4e0a\u624b\u793a\u4f8b\u7a0b\u5e8f\uff0c\u5177\u4f53\u8bf7\u67e5\u9605:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Github: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-streampark-quickstart"},"https://github.com/apache/incubator-streampark-quickstart.git"))),(0,a.kt)("h3",{id:"\u90e8\u7f72-datastream-\u4efb\u52a1"},"\u90e8\u7f72 DataStream \u4efb\u52a1"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u90e8\u7f72\u4e00\u4e2a DataStream \u5e94\u7528"),(0,a.kt)("h3",{id:"\u90e8\u7f72-flinksql-\u4efb\u52a1"},"\u90e8\u7f72 FlinkSql \u4efb\u52a1"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u90e8\u7f72\u4e00\u4e2a FlinkSql \u5e94\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9879\u76ee\u6f14\u793a\u4f7f\u7528\u5230\u7684 flink sql \u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE user_log (\n    user_id VARCHAR,\n    item_id VARCHAR,\n    category_id VARCHAR,\n    behavior VARCHAR,\n    ts TIMESTAMP(3)\n ) WITH (\n'connector.type' = 'kafka', -- \u4f7f\u7528 kafka connector\n'connector.version' = 'universal',  -- kafka \u7248\u672c\uff0cuniversal \u652f\u6301 0.11 \u4ee5\u4e0a\u7684\u7248\u672c\n'connector.topic' = 'user_behavior',  -- kafka topic\n'connector.properties.bootstrap.servers'='kafka-1:9092,kafka-2:9092,kafka-3:9092',\n'connector.startup-mode' = 'earliest-offset', -- \u4ece\u8d77\u59cb offset \u5f00\u59cb\u8bfb\u53d6\n'update-mode' = 'append',\n'format.type' = 'json',  -- \u6570\u636e\u6e90\u683c\u5f0f\u4e3a json\n'format.derive-schema' = 'true' -- \u4ece DDL schema \u786e\u5b9a json \u89e3\u6790\u89c4\u5219\n );\n\nCREATE TABLE pvuv_sink (\n    dt VARCHAR,\n    pv BIGINT,\n    uv BIGINT\n ) WITH (\n'connector.type' = 'jdbc', -- \u4f7f\u7528 jdbc connector\n'connector.url' = 'jdbc:mysql://test-mysql:3306/test', -- jdbc url\n'connector.table' = 'pvuv_sink', -- \u8868\u540d\n'connector.username' = 'root', -- \u7528\u6237\u540d\n'connector.password' = '123456', -- \u5bc6\u7801\n'connector.write.flush.max-rows' = '1' -- \u9ed8\u8ba4 5000 \u6761\uff0c\u4e3a\u4e86\u6f14\u793a\u6539\u4e3a 1 \u6761\n );\n\nINSERT INTO pvuv_sink\nSELECT\n  DATE_FORMAT(ts, 'yyyy-MM-dd HH:00') dt,\n  COUNT(*) AS pv,\n  COUNT(DISTINCT user_id) AS uv\nFROM user_log\nGROUP BY DATE_FORMAT(ts, 'yyyy-MM-dd HH:00');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5230 maven \u4f9d\u8d56\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>5.1.48</version>\n</dependency>\n\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-sql-connector-kafka_2.11</artifactId>\n    <version>1.12.0</version>\n</dependency>\n\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-jdbc_2.11</artifactId>\n    <version>1.12.0</version>\n</dependency>\n\n<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-json</artifactId>\n    <version>1.12.0</version>\n</dependency>\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kafka \u6a21\u62df\u53d1\u9001\u7684\u6570\u636e\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{"user_id": "543462", "item_id":"1715", "category_id": "1464116", "behavior": "pv", "ts":"2021-02-01T01:00:00Z"}\n{"user_id": "662867", "item_id":"2244074","category_id":"1575622","behavior": "pv", "ts":"2021-02-01T01:00:00Z"}\n{"user_id": "662867", "item_id":"2244074","category_id":"1575622","behavior": "pv", "ts":"2021-02-01T01:00:00Z"}\n{"user_id": "662867", "item_id":"2244074","category_id":"1575622","behavior": "learning flink", "ts":"2021-02-01T01:00:00Z"}\n\n')),(0,a.kt)("h3",{id:"\u4efb\u52a1\u542f\u52a8\u6d41\u7a0b"},"\u4efb\u52a1\u542f\u52a8\u6d41\u7a0b"),(0,a.kt)("p",null,"\u4efb\u52a1\u542f\u52a8\u6d41\u7a0b\u56fe\u5982\u4e0b"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"/doc/image/streampark_start.png"}),(0,a.kt)("br",null),(0,a.kt)("strong",null,"streampark-console \u63d0\u4ea4\u4efb\u52a1\u6d41\u7a0b")),(0,a.kt)("p",null,"\u5173\u4e8e\u9879\u76ee\u7684\u6982\u5ff5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Development Mode"),",",(0,a.kt)("inlineCode",{parentName:"p"},"savepoint"),",",(0,a.kt)("inlineCode",{parentName:"p"},"NoteBook"),",\u81ea\u5b9a\u4e49 jar \u7ba1\u7406\uff0c\u4efb\u52a1\u53d1\u5e03\uff0c\u4efb\u52a1\u6062\u590d\uff0c\u53c2\u6570\u914d\u7f6e\uff0c\u53c2\u6570\u5bf9\u6bd4\uff0c\u591a\u7248\u672c\u7ba1\u7406\u7b49\u7b49\u66f4\u591a\u4f7f\u7528\u6559\u7a0b\u548c\u6587\u6863\u540e\u7eed\u6301\u7eed\u66f4\u65b0\u3002.."))}u.isMDXComponent=!0}}]);