"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{4544:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r,a=n(1413),c=n(9439),i=n(1104),o=n(2222),l=n(2791),s=n(7689),d=n(9040),u=n(6753),h=["title","titleId"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e,t){var n=e.title,a=e.titleId,c=f(e,h);return l.createElement("svg",y({width:6,height:12,viewBox:"0 0 6 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?l.createElement("title",{id:a},n):null,r||(r=l.createElement("path",{d:"M0.75 10.5L5.25 6L0.75 1.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var _,p=l.forwardRef(v),m=(n.p,["title","titleId"]);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){var n=e.title,r=e.titleId,a=j(e,m);return l.createElement("svg",g({width:6,height:12,viewBox:"0 0 6 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?l.createElement("title",{id:r},n):null,_||(_=l.createElement("path",{d:"M5.25 10.5L0.75 6L5.25 1.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var x=l.forwardRef(b),M=(n.p,"PeriodPaginator_wrapper__n3Arq"),k="PeriodPaginator_buttons_container__K4cwq",P="PeriodPaginator_button__uby6p",w="PeriodPaginator_button_left__BL4Ri",D="PeriodPaginator_button_right__JbrnU",Z="PeriodPaginator_name_container__IM611",O="PeriodPaginator_name__Dfk9Y",N="PeriodPaginator_icon__U7PfY",A="PeriodPaginator_icon_active__Fprkw",L=n(3329),C=function(e){var t=e.isActivePage,n=e.handleLeftClick,r=e.handleRightClick,i=e.currentDate,h=e.setState,y=(0,l.useState)(""),f=(0,c.Z)(y,2),v=f[0],_=f[1],m=(0,s.s0)(),g=(0,s.UO)();return(0,L.jsx)("div",{className:M,children:t?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:Z,children:(0,L.jsx)("h1",{className:O,children:(0,o.Z)(new Date(g.currentDate)," MMM yyyy")})}),(0,L.jsxs)("div",{className:k,children:[(0,L.jsx)("button",{className:"".concat(P," ").concat(w),type:"button",onClick:n,children:(0,L.jsx)(x,{className:"".concat("prev"===v?A:N)})}),(0,L.jsx)("button",{className:"".concat(P," ").concat(D),type:"button",id:"2",onClick:r,children:(0,L.jsx)(p,{className:"".concat("next"===v?A:N)})})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:Z,children:(0,L.jsx)("h1",{className:O,children:(0,o.Z)(new Date(i),"d MMM yyyy")})}),(0,L.jsxs)("div",{className:k,children:[(0,L.jsx)("button",{className:"".concat(P," ").concat(w),type:"button",onClick:function(){_("prev"),h((function(e){return(0,a.Z)((0,a.Z)({},e),{},{currentDate:(0,u.Z)(i,1)})})),m("/calendar/day/".concat((0,o.Z)(i,"ddMMMyyyy")))},children:(0,L.jsx)(x,{className:"".concat("prev"===v?A:N)})}),(0,L.jsx)("button",{className:"".concat(P," ").concat(D),type:"button",onClick:function(e){_("next"),h((function(e){return(0,a.Z)((0,a.Z)({},e),{},{currentDate:(0,d.Z)(i,1)})})),m("/calendar/day/".concat((0,o.Z)(i,"ddMMMyyyy")))},children:(0,L.jsx)(p,{className:"".concat("next"===v?A:N)})})]})]})})},S=n(1087),E="PeriodTypeSelect_periodTypeSelectMarkUp__c+4Wo",R="PeriodTypeSelect_navLink_day__cZrs0",T="PeriodTypeSelect_activeLink_day__h7bxD",I="PeriodTypeSelect_navLink_month__7FavA",F="PeriodTypeSelect_activeLink_month__VaiuX",U=function(e){var t=e.doActiveMonth,n=e.doActiveDate,r=(0,o.Z)(new Date,"ddMMMMyyyy"),a=(0,o.Z)(new Date,"ddMMMMyyyy");return(0,L.jsxs)("div",{className:E,children:[(0,L.jsx)(S.NavLink,{onClick:t,to:"/calendar/month/".concat(r),className:function(e){return e.isActive?F:I},children:"Month"}),(0,L.jsx)(S.NavLink,{onClick:n,to:"/calendar/day/".concat(a),className:function(e){return e.isActive?T:R},children:"Day"})]})},B="CalendarToolbar_wrapper__zs0r1",W=function(e){var t=e.isActivePage,n=e.doActiveMonth,r=e.doActiveDate,a=e.handleRightClick,c=e.handleLeftClick,i=e.currentDate,o=e.setState;return(0,L.jsxs)("div",{className:B,children:[(0,L.jsx)(C,{setState:o,currentDate:i,isActivePage:t,handleRightClick:a,handleLeftClick:c}),(0,L.jsx)(U,{doActiveMonth:n,doActiveDate:r})]})},q="Calendar_container__iRRd3",Y=function(){var e=(0,l.useState)({isActivePage:!1,currentDate:new Date,month:0}),t=(0,c.Z)(e,2),n=t[0],r=t[1],d=(0,s.s0)(),u=(0,s.TH)(),h=(0,o.Z)(n.currentDate,"MMMMu");(0,l.useEffect)((function(){"/calendar"!==u.pathname||d("/calendar/month/".concat(h))}),[h,d,u.pathname]);return(0,L.jsxs)("div",{className:q,children:[(0,L.jsx)(W,{handleLeftClick:function(){r((function(e){return(0,a.Z)((0,a.Z)({},e),{},{currentDate:(0,i.Z)(e.currentDate,-1),month:e.month-1})})),d("/calendar/month/".concat((0,o.Z)(n.currentDate,"ddMMMyyyy")))},handleRightClick:function(){r((function(e){return(0,a.Z)((0,a.Z)({},e),{},{currentDate:(0,i.Z)(e.currentDate,1),month:e.month+1})})),d("/calendar/month/".concat((0,o.Z)(n.currentDate,"ddMMMyyyy")))},isActivePage:n.isActivePage,doActiveMonth:function(){r((function(e){return(0,a.Z)((0,a.Z)({},e),{},{isActivePage:!0})}))},doActiveDate:function(){r((function(e){return(0,a.Z)((0,a.Z)({},e),{},{isActivePage:!1})}))},currentDate:n.currentDate,setState:r}),(0,L.jsx)(l.Suspense,{fallback:null,children:(0,L.jsx)(s.j3,{context:[n]})})]})}}}]);
//# sourceMappingURL=199.516b9615.chunk.js.map