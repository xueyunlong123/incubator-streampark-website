"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(h,m(m({ref:t},p),{},{components:a})):n.createElement(h,m({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,m=new Array(i);m[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,m[1]=o;for(var l=2;l<i;l++)m[l]=a[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={id:"Team",title:"Team & member Management",sidebar_position:6},m=void 0,o={unversionedId:"user-guide/Team",id:"user-guide/Team",title:"Team & member Management",description:"User Management",source:"@site/docs/user-guide/6-Team.md",sourceDirName:"user-guide",slug:"/user-guide/Team",permalink:"/docs/user-guide/Team",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/6-Team.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"Team",title:"Team & member Management",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"LDAP Tutorial",permalink:"/docs/user-guide/LDAP"},next:{title:"Variable Management",permalink:"/docs/user-guide/Variable"}},s={},l=[{value:"User Management",id:"user-management",level:2},{value:"Team Management",id:"team-management",level:2},{value:"Role Management",id:"role-management",level:2},{value:"Member Management",id:"member-management",level:2}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-management"},"User Management"),(0,r.kt)("p",null,"ADMIN can select the user type when creating or modifying a user. There are two user types: ADMIN and USER."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ADMIN means the system administrator, that is: the super administrator of StreamPark, who has all the permissions of\nthe StreamPark management page and each team."),(0,r.kt)("li",{parentName:"ul"},"USER means a normal user of the platform. Creating a USER is just creating an account. By default, users don't have\nany permissions on the platform. After account is created and the ADMIN binds it to some teams, USER will have\npermissions in the corresponding teams.")),(0,r.kt)("h2",{id:"team-management"},"Team Management"),(0,r.kt)("p",null,"In order to facilitate the management of applications in different departments within the company, StreamPark supports\nteam management. ADMIN can create different teams for different departments on StreamPark."),(0,r.kt)("img",{src:"/doc/image/team/team_management.png"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Users can click on the team at the top right of the platform to select a team with permission."),(0,r.kt)("img",{src:"/doc/image/team/change_team.png"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"A team is similar to the concept of a workspace. When a team is selected, the platform will only display the\napplications and projects of the current team. If the user has permissions in multiple teams, switching to another team\ncan view or operate the applications of the corresponding team."),(0,r.kt)("img",{src:"/doc/image/team/app_list.png"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"role-management"},"Role Management"),(0,r.kt)("p",null,"In order to facilitate application management and prevent misoperation, the team also needs to distinguish between\nadministrator and developer, so StreamPark introduces role management."),(0,r.kt)("p",null,"Currently, StreamPark supports two roles: team admin and developer. The team admin has all the permissions in the team.\nCompared with the team admin, the developer has fewer permissions to delete applications and add USER to the team."),(0,r.kt)("img",{src:"/doc/image/team/role_management.png"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"If the above roles cannot meet the requirements during use, you can also add more roles on the role management page, and\ndefine the permissions of each role."),(0,r.kt)("h2",{id:"member-management"},"Member Management"),(0,r.kt)("p",null,"Member management is used to maintain the mapping between users and teams, that is: which users are in each team, and\nwhat role is each user in the current team."),(0,r.kt)("img",{src:"/doc/image/team/member_management.png"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"A team can have multiple users, a user can also belong to multiple teams, and can have different roles in different\nteams."),(0,r.kt)("p",null,"For example: user_a has permissions in team1 and team2, he is developer in team1, and he is team admin in team2. That\nis, user_a is the team administrator in team2, and he has all permissions in team2, including: develop, maintain, and\ndelete applications and add other users to team2. user_a is a developer in team1, and only has permission to develop and\nmaintain applications."),(0,r.kt)("p",null,"Note: The member management page can only view the members of the current team. If you need to view or modify the member\nmapping of other teams, please switch to other teams first."))}c.isMDXComponent=!0}}]);