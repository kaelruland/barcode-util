import{S as H,i as J,s as L,e as m,t as R,c as v,a as x,h as V,d as g,g as j,J as _,E as W,R as z,T as F,w as S,k as b,x as B,m as y,b as P,y as w,W as G,q as N,o as U,B as q,P as K}from"../chunks/index-e02b2b25.js";import{B as M,S as Q}from"../chunks/StepInput-7ebcc378.js";function C(i,e,s){const r=i.slice();return r[2]=e[s],r}function O(i){let e,s=i[2]+"",r,f;return{c(){e=m("option"),r=R(s),this.h()},l(o){e=v(o,"OPTION",{});var c=x(e);r=V(c,s),c.forEach(g),this.h()},h(){e.__value=f=i[2],e.value=e.__value},m(o,c){j(o,e,c),_(e,r)},p:W,d(o){o&&g(e)}}}function X(i){let e,s,r,f,o,c,k,h,E,u,T,$;s=new M({props:{text:Y,bcid:Z}});let d=Array.from(Array(5).keys()),n=[];for(let t=0;t<d.length;t+=1)n[t]=O(C(i,d,t));function D(t){i[1](t)}let A={step:.125,round:3,min:0};return i[0]!==void 0&&(A.value=i[0]),u=new Q({props:A}),z.push(()=>F(u,"value",D)),{c(){e=m("div"),S(s.$$.fragment),r=b(),f=m("input"),o=b(),c=m("input"),k=b(),h=m("select");for(let t=0;t<n.length;t+=1)n[t].c();E=b(),S(u.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var a=x(e);B(s.$$.fragment,a),r=y(a),f=v(a,"INPUT",{}),o=y(a),c=v(a,"INPUT",{type:!0}),k=y(a),h=v(a,"SELECT",{});var p=x(h);for(let l=0;l<n.length;l+=1)n[l].l(p);p.forEach(g),E=y(a),B(u.$$.fragment,a),a.forEach(g),this.h()},h(){P(c,"type","number"),P(e,"class","ui-test svelte-1nljv8b")},m(t,a){j(t,e,a),w(s,e,null),_(e,r),_(e,f),_(e,o),_(e,c),_(e,k),_(e,h);for(let p=0;p<n.length;p+=1)n[p].m(h,null);_(e,E),w(u,e,null),$=!0},p(t,[a]){if(a&0){d=Array.from(Array(5).keys());let l;for(l=0;l<d.length;l+=1){const I=C(t,d,l);n[l]?n[l].p(I,a):(n[l]=O(I),n[l].c(),n[l].m(h,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=d.length}const p={};!T&&a&1&&(T=!0,p.value=t[0],G(()=>T=!1)),u.$set(p)},i(t){$||(N(s.$$.fragment,t),N(u.$$.fragment,t),$=!0)},o(t){U(s.$$.fragment,t),U(u.$$.fragment,t),$=!1},d(t){t&&g(e),q(s),K(n,t),q(u)}}}let Y="Hello",Z="code128";function ee(i,e,s){let r=3;function f(o){r=o,s(0,r)}return[r,f]}class ae extends H{constructor(e){super(),J(this,e,ee,X,L,{})}}export{ae as default};
