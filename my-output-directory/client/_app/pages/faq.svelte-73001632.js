import{S as T,i as V,s as M,e as v,t as A,c as I,a as q,g as G,d as u,X as E,b as P,f as d,U as k,h as R,Q as N,a4 as le,j as L,v as g,l as x,w,x as _,p as c,n as $,A as b,k as U,ad as be,ae as me,ai as ue,m as K,o as z,$ as pe,a6 as fe,a7 as de,E as ke,F as ve,G as Ie,D as qe,V as Le,Y as xe,_ as Ee,Z as Ae,W as Ge}from"../chunks/vendor-80f08c05.js";import{C as ce,B as Pe,S as Ne}from"../chunks/ColorFaq-2d856b76.js";function We(i){let e,o,s;return{c(){e=v("section"),o=v("h1"),s=A(i[0]),this.h()},l(t){e=I(t,"SECTION",{class:!0,style:!0});var n=q(e);o=I(n,"H1",{style:!0});var r=q(o);s=G(r,i[0]),r.forEach(u),n.forEach(u),this.h()},h(){E(o,"font","70px 'grafitty'"),E(o,"margin","100px 0"),P(e,"class","banner svelte-1e1h7ax"),E(e,"background-image","url("+i[1]+")")},m(t,n){d(t,e,n),k(e,o),k(o,s)},p(t,[n]){n&1&&R(s,t[0]),n&2&&E(e,"background-image","url("+t[1]+")")},i:N,o:N,d(t){t&&u(e)}}}function Qe(i,e,o){let{text:s="",imgUrl:t=""}=e;return i.$$set=n=>{"text"in n&&o(0,s=n.text),"imgUrl"in n&&o(1,t=n.imgUrl)},[s,t]}class Se extends T{constructor(e){super();V(this,e,Qe,We,M,{text:0,imgUrl:1})}}function he(i,e,o){const s=i.slice();return s[3]=e[o],s[4]=e,s[5]=o,s}function Fe(i){let e=i[3].question+"",o;return{c(){o=A(e)},l(s){o=G(s,e)},m(s,t){d(s,o,t)},p(s,t){t&1&&e!==(e=s[3].question+"")&&R(o,e)},d(s){s&&u(o)}}}function De(i){let e,o;return e=new de({props:{$$slots:{default:[Fe]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,t){_(e,s,t),o=!0},p(s,t){const n={};t&65&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){o||(c(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){b(e,s)}}}function $e(i){let e,o,s=i[3].answer+"",t,n,r,a;return{c(){e=v("div"),o=v("p"),t=A(s),n=L(),this.h()},l(l){e=I(l,"DIV",{class:!0});var f=q(e);o=I(f,"P",{class:!0});var p=q(o);t=G(p,s),n=x(p),p.forEach(u),f.forEach(u),this.h()},h(){P(o,"class","mdc-typography--body"),P(e,"class","answer svelte-qdybij")},m(l,f){d(l,e,f),k(e,o),k(o,t),k(o,n),a=!0},p(l,f){(!a||f&1)&&s!==(s=l[3].answer+"")&&R(t,s)},i(l){a||(be(()=>{r||(r=me(e,ue,{},!0)),r.run(1)}),a=!0)},o(l){r||(r=me(e,ue,{},!1)),r.run(0),a=!1},d(l){l&&u(e),l&&r&&r.end()}}}function ye(i){let e,o,s,t;function n(){return i[2](i[3],i[4],i[5])}e=new fe({props:{style:"color: #fff;",$$slots:{default:[De]},$$scope:{ctx:i}}}),e.$on("SMUI:action",n);let r=i[3].showAnswer&&$e(i);return{c(){g(e.$$.fragment),o=L(),r&&r.c(),s=U()},l(a){w(e.$$.fragment,a),o=x(a),r&&r.l(a),s=U()},m(a,l){_(e,a,l),d(a,o,l),r&&r.m(a,l),d(a,s,l),t=!0},p(a,l){i=a;const f={};l&65&&(f.$$scope={dirty:l,ctx:i}),e.$set(f),i[3].showAnswer?r?(r.p(i,l),l&1&&c(r,1)):(r=$e(i),r.c(),c(r,1),r.m(s.parentNode,s)):r&&(K(),$(r,1,1,()=>{r=null}),z())},i(a){t||(c(e.$$.fragment,a),c(r),t=!0)},o(a){$(e.$$.fragment,a),$(r),t=!1},d(a){b(e,a),a&&u(o),r&&r.d(a),a&&u(s)}}}function Ue(i){let e,o,s=i[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=ye(he(i,s,r));const n=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);e=U()},m(r,a){for(let l=0;l<t.length;l+=1)t[l].m(r,a);d(r,e,a),o=!0},p(r,a){if(a&1){s=r[0];let l;for(l=0;l<s.length;l+=1){const f=he(r,s,l);t[l]?(t[l].p(f,a),c(t[l],1)):(t[l]=ye(f),t[l].c(),c(t[l],1),t[l].m(e.parentNode,e))}for(K(),l=s.length;l<t.length;l+=1)n(l);z()}},i(r){if(!o){for(let a=0;a<s.length;a+=1)c(t[a]);o=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);o=!1},d(r){pe(t,r),r&&u(e)}}}function Ce(i){let e,o,s,t,n,r;return n=new le({props:{style:`max-width: 450px; background-color: #000; border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));  height: auto;`,$$slots:{default:[Ue]},$$scope:{ctx:i}}}),{c(){e=v("div"),o=v("h3"),s=A(i[1]),t=L(),g(n.$$.fragment),this.h()},l(a){e=I(a,"DIV",{style:!0});var l=q(e);o=I(l,"H3",{style:!0});var f=q(o);s=G(f,i[1]),f.forEach(u),t=x(l),w(n.$$.fragment,l),l.forEach(u),this.h()},h(){E(o,"color","#000"),E(o,"font","36px 'grafitty'"),E(e,"display","flex"),E(e,"flex-direction","column"),E(e,"max-width","405px")},m(a,l){d(a,e,l),k(e,o),k(o,s),k(e,t),_(n,e,null),r=!0},p(a,[l]){(!r||l&2)&&R(s,a[1]);const f={};l&65&&(f.$$scope={dirty:l,ctx:a}),n.$set(f)},i(a){r||(c(n.$$.fragment,a),r=!0)},o(a){$(n.$$.fragment,a),r=!1},d(a){a&&u(e),b(n)}}}function He(i,e,o){let{listQuestions:s=[],title:t=""}=e;const n=(r,a,l)=>o(0,a[l].showAnswer=!r.showAnswer,s);return i.$$set=r=>{"listQuestions"in r&&o(0,s=r.listQuestions),"title"in r&&o(1,t=r.title)},[s,t,n]}class X extends T{constructor(e){super();V(this,e,He,Ce,M,{listQuestions:0,title:1})}}function Re(i){let e=i[0].question+"",o;return{c(){o=A(e)},l(s){o=G(s,e)},m(s,t){d(s,o,t)},p(s,t){t&1&&e!==(e=s[0].question+"")&&R(o,e)},d(s){s&&u(o)}}}function Te(i){let e,o;return e=new de({props:{$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,t){_(e,s,t),o=!0},p(s,t){const n={};t&9&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){o||(c(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){b(e,s)}}}function ge(i){let e,o;const s=i[1].default,t=qe(s,i,i[3],null);return{c(){e=v("div"),t&&t.c(),this.h()},l(n){e=I(n,"DIV",{class:!0});var r=q(e);t&&t.l(r),r.forEach(u),this.h()},h(){P(e,"class","answer svelte-184p67i")},m(n,r){d(n,e,r),t&&t.m(e,null),o=!0},p(n,r){t&&t.p&&(!o||r&8)&&ke(t,s,n,n[3],o?Ie(s,n[3],r,null):ve(n[3]),null)},i(n){o||(c(t,n),o=!0)},o(n){$(t,n),o=!1},d(n){n&&u(e),t&&t.d(n)}}}function Ve(i){let e,o,s,t;e=new fe({props:{$$slots:{default:[Te]},$$scope:{ctx:i}}}),e.$on("SMUI:action",i[2]);let n=i[0].showAnswer&&ge(i);return{c(){g(e.$$.fragment),o=L(),n&&n.c(),s=U()},l(r){w(e.$$.fragment,r),o=x(r),n&&n.l(r),s=U()},m(r,a){_(e,r,a),d(r,o,a),n&&n.m(r,a),d(r,s,a),t=!0},p(r,[a]){const l={};a&9&&(l.$$scope={dirty:a,ctx:r}),e.$set(l),r[0].showAnswer?n?(n.p(r,a),a&1&&c(n,1)):(n=ge(r),n.c(),c(n,1),n.m(s.parentNode,s)):n&&(K(),$(n,1,1,()=>{n=null}),z())},i(r){t||(c(e.$$.fragment,r),c(n),t=!0)},o(r){$(e.$$.fragment,r),$(n),t=!1},d(r){b(e,r),r&&u(o),n&&n.d(r),r&&u(s)}}}function Me(i,e,o){let{$$slots:s={},$$scope:t}=e,{question:n=""}=e;const r=()=>o(0,n.showAnswer=!n.showAnswer,n);return i.$$set=a=>{"question"in a&&o(0,n=a.question),"$$scope"in a&&o(3,t=a.$$scope)},[n,s,r,t]}class Q extends T{constructor(e){super();V(this,e,Me,Ve,M,{question:0})}}function we(i,e,o){const s=i.slice();return s[3]=e[o],s[5]=o,s}function je(i){let e,o=i[3][0].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function Be(i){let e,o=i[3][1].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function Oe(i){let e,o=i[3][2].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function Ye(i){let e,o=i[3][3].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function Ke(i){let e,o=i[3][4].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function ze(i){let e,o=i[3][5].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function Xe(i){let e,o=i[3][6].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function Ze(i){let e,o=i[3][7].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function Je(i){let e,o=i[3][8].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function et(i){let e,o=i[3][9].answer+"",s;return{c(){e=v("p"),s=A(o),this.h()},l(t){e=I(t,"P",{class:!0});var n=q(e);s=G(n,o),n.forEach(u),this.h()},h(){P(e,"class","mdc-typography--body")},m(t,n){d(t,e,n),k(e,s)},p:N,d(t){t&&u(e)}}}function tt(i){let e,o,s,t,n,r,a,l,f,p,y,C,W,H,S,j,F,B,D,O,Y;return e=new Q({props:{question:i[3][0],$$slots:{default:[je]},$$scope:{ctx:i}}}),s=new Q({props:{question:i[3][1],$$slots:{default:[Be]},$$scope:{ctx:i}}}),n=new Q({props:{question:i[3][2],$$slots:{default:[Oe]},$$scope:{ctx:i}}}),a=new Q({props:{question:i[3][3],$$slots:{default:[Ye]},$$scope:{ctx:i}}}),f=new Q({props:{question:i[3][4],$$slots:{default:[Ke]},$$scope:{ctx:i}}}),y=new Q({props:{question:i[3][5],$$slots:{default:[ze]},$$scope:{ctx:i}}}),W=new Q({props:{question:i[3][6],$$slots:{default:[Xe]},$$scope:{ctx:i}}}),S=new Q({props:{question:i[3][7],$$slots:{default:[Ze]},$$scope:{ctx:i}}}),F=new Q({props:{question:i[3][8],$$slots:{default:[Je]},$$scope:{ctx:i}}}),D=new Q({props:{question:i[3][9],$$slots:{default:[et]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment),o=L(),g(s.$$.fragment),t=L(),g(n.$$.fragment),r=L(),g(a.$$.fragment),l=L(),g(f.$$.fragment),p=L(),g(y.$$.fragment),C=L(),g(W.$$.fragment),H=L(),g(S.$$.fragment),j=L(),g(F.$$.fragment),B=L(),g(D.$$.fragment),O=L()},l(m){w(e.$$.fragment,m),o=x(m),w(s.$$.fragment,m),t=x(m),w(n.$$.fragment,m),r=x(m),w(a.$$.fragment,m),l=x(m),w(f.$$.fragment,m),p=x(m),w(y.$$.fragment,m),C=x(m),w(W.$$.fragment,m),H=x(m),w(S.$$.fragment,m),j=x(m),w(F.$$.fragment,m),B=x(m),w(D.$$.fragment,m),O=x(m)},m(m,h){_(e,m,h),d(m,o,h),_(s,m,h),d(m,t,h),_(n,m,h),d(m,r,h),_(a,m,h),d(m,l,h),_(f,m,h),d(m,p,h),_(y,m,h),d(m,C,h),_(W,m,h),d(m,H,h),_(S,m,h),d(m,j,h),_(F,m,h),d(m,B,h),_(D,m,h),d(m,O,h),Y=!0},p(m,h){const Z={};h&64&&(Z.$$scope={dirty:h,ctx:m}),e.$set(Z);const J={};h&64&&(J.$$scope={dirty:h,ctx:m}),s.$set(J);const ee={};h&64&&(ee.$$scope={dirty:h,ctx:m}),n.$set(ee);const te={};h&64&&(te.$$scope={dirty:h,ctx:m}),a.$set(te);const se={};h&64&&(se.$$scope={dirty:h,ctx:m}),f.$set(se);const ne={};h&64&&(ne.$$scope={dirty:h,ctx:m}),y.$set(ne);const oe={};h&64&&(oe.$$scope={dirty:h,ctx:m}),W.$set(oe);const re={};h&64&&(re.$$scope={dirty:h,ctx:m}),S.$set(re);const ae={};h&64&&(ae.$$scope={dirty:h,ctx:m}),F.$set(ae);const ie={};h&64&&(ie.$$scope={dirty:h,ctx:m}),D.$set(ie)},i(m){Y||(c(e.$$.fragment,m),c(s.$$.fragment,m),c(n.$$.fragment,m),c(a.$$.fragment,m),c(f.$$.fragment,m),c(y.$$.fragment,m),c(W.$$.fragment,m),c(S.$$.fragment,m),c(F.$$.fragment,m),c(D.$$.fragment,m),Y=!0)},o(m){$(e.$$.fragment,m),$(s.$$.fragment,m),$(n.$$.fragment,m),$(a.$$.fragment,m),$(f.$$.fragment,m),$(y.$$.fragment,m),$(W.$$.fragment,m),$(S.$$.fragment,m),$(F.$$.fragment,m),$(D.$$.fragment,m),Y=!1},d(m){b(e,m),m&&u(o),b(s,m),m&&u(t),b(n,m),m&&u(r),b(a,m),m&&u(l),b(f,m),m&&u(p),b(y,m),m&&u(C),b(W,m),m&&u(H),b(S,m),m&&u(j),b(F,m),m&&u(B),b(D,m),m&&u(O)}}}function _e(i){let e,o;return e=new le({props:{style:`max-width: 450px; background-color: #fff; border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));  height: auto;`,$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,t){_(e,s,t),o=!0},p(s,t){const n={};t&64&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){o||(c(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){b(e,s)}}}function st(i){let e,o,s=i[1],t=[];for(let r=0;r<s.length;r+=1)t[r]=_e(we(i,s,r));const n=r=>$(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=U()},l(r){for(let a=0;a<t.length;a+=1)t[a].l(r);e=U()},m(r,a){for(let l=0;l<t.length;l+=1)t[l].m(r,a);d(r,e,a),o=!0},p(r,a){if(a&2){s=r[1];let l;for(l=0;l<s.length;l+=1){const f=we(r,s,l);t[l]?(t[l].p(f,a),c(t[l],1)):(t[l]=_e(f),t[l].c(),c(t[l],1),t[l].m(e.parentNode,e))}for(K(),l=s.length;l<t.length;l+=1)n(l);z()}},i(r){if(!o){for(let a=0;a<s.length;a+=1)c(t[a]);o=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);o=!1},d(r){pe(t,r),r&&u(e)}}}function nt(i){let e,o,s,t;return e=new Ee({props:{class:"card-media-16x9",style:"height: 400px; background-image: url(https://cdn.shopify.com/s/files/1/0106/0162/7706/files/ledergames-fort_360x.jpg?v=1596378316);",aspectRatio:"16x9"}}),s=new Ae({props:{class:"mdc-typography--body2",style:"",$$slots:{default:[st]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment),o=L(),g(s.$$.fragment)},l(n){w(e.$$.fragment,n),o=x(n),w(s.$$.fragment,n)},m(n,r){_(e,n,r),d(n,o,r),_(s,n,r),t=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),s.$set(a)},i(n){t||(c(e.$$.fragment,n),c(s.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),$(s.$$.fragment,n),t=!1},d(n){b(e,n),n&&u(o),b(s,n)}}}function ot(i){let e,o,s,t,n,r,a;return r=new xe({props:{$$slots:{default:[nt]},$$scope:{ctx:i}}}),{c(){e=v("div"),o=v("h3"),s=A(i[0]),t=A(" \u{1F3B2}"),n=L(),g(r.$$.fragment),this.h()},l(l){e=I(l,"DIV",{style:!0});var f=q(e);o=I(f,"H3",{style:!0});var p=q(o);s=G(p,i[0]),t=G(p," \u{1F3B2}"),p.forEach(u),f.forEach(u),n=x(l),w(r.$$.fragment,l),this.h()},h(){E(o,"color","#000"),E(o,"font","36px 'grafitty'"),E(e,"padding","1rem")},m(l,f){d(l,e,f),k(e,o),k(o,s),k(o,t),d(l,n,f),_(r,l,f),a=!0},p(l,f){(!a||f&1)&&R(s,l[0]);const p={};f&64&&(p.$$scope={dirty:f,ctx:l}),r.$set(p)},i(l){a||(c(r.$$.fragment,l),a=!0)},o(l){$(r.$$.fragment,l),a=!1},d(l){l&&u(e),l&&u(n),b(r,l)}}}function rt(i){let e,o,s;return o=new Le({props:{style:"width: 425px; margin-right: 15px;",$$slots:{default:[ot]},$$scope:{ctx:i}}}),{c(){e=v("div"),g(o.$$.fragment),this.h()},l(t){e=I(t,"DIV",{style:!0});var n=q(e);w(o.$$.fragment,n),n.forEach(u),this.h()},h(){E(e,"display","flex"),E(e,"flex-direction","column")},m(t,n){d(t,e,n),_(o,e,null),s=!0},p(t,[n]){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),o.$set(r)},i(t){s||(c(o.$$.fragment,t),s=!0)},o(t){$(o.$$.fragment,t),s=!1},d(t){t&&u(e),b(o)}}}function at(i,e,o){const t=[[{question:" I have a rules question about GameName!",answer:"Please search the Boardgamegeek forums to see if your questions has already been asked or answered. If you are still unclear, please reach out to us at support@darkdev.com"},{question:"When will GameName be available?",answer:`We're currently in the midst of our Kickstarter fulfillment for Oath and currently anticipate a retail release in Summer 2021.

(Last updated: March 25, 2021)`},{question:"Will GameName be translated into different languages?",answer:"Our general rule is to wait for community approval to complete and make first print sales of any of our games in English or Russian before making translated editions. If you want to help or are simply interested in translation, please write to us at support@darkdev.com"},{question:"How do I reset the game back to the original game state?",answer:"If for any reason, you want to reset the order of the cards back to the order of an unplayed game, you can refer to this file (fileLink on cloud) for the specific cards and order."},{question:"I'm new to GameName. Where do I start?",answer:"To play any Root content, you need the base Root game. For more information on how Root extensions extend your experience, you can read more here! If you want to play Root with real people, sign up for  is available here \u{1F449}"},{question:"How the GameName developed, the chronology of changes",answer:"\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u044B \u0432 \u0448\u0435\u0441\u0442\u043E\u0439 \u0440\u0430\u0437 \u043F\u0435\u0447\u0430\u0442\u0430\u0435\u043C \u0431\u0430\u0437\u043E\u0432\u0443\u044E \u0438\u0433\u0440\u0443 ..."},{question:"How do I find Root in stock?",answer:`Poland - - GameName core and all of its related products and expansions are currently sold out on our store and on a distributor level.
		Asia, Australia, USA, EU, rest of world - GameName core and all of its related products and expansions are currently available through distribution and on our webstore right now.`},{question:"How can I find out the version number of an already purchased game?",answer:"To find out which version of the game you own, refer to the back of the box. Your NSF number and edition number will be listed next to the barcode for all of our products, including extensions."},{question:"How to use the latest extensions with the early version of the GameName",answer:"If you have an older version of GameName, you can print these PDFs at home and make changes to your playset, or purchase the Root Upgrade Kit from our online store."},{question:"What languages is GameName available in?",answer:"GameName is natively created and developed in Russian. We also have language edition partners that have worked on GameName in the following languages as well:"},{question:"Are there any changes or new extensions planned in the near future?",answer:"There are currently no official plans for improvement ... Root still has a lot of potential ideas and concepts that we want to implement as add-ons. If you have any suggestions for improvement ..., please write to us at support@darkdev.com. We always consider suggestions from the gaming community. "},{question:"I have a problem with the components of the translated version of Root. Who should I contact about spare parts?",answer:"Unfortunately, we do not have access to components that contain translated text. Please refer to the front or back of your Root box to find the name of the partnered publisher and contact them for a parts request. If you are in need of a component that does not contain text, you can contact us at support@darkdev.com for assistance."},{question:"I missed the Kickstarter / workshop. How do I get the game?",answer:"We are currently accepting orders here to ship Mysterious Manor to USA, Europe, Russia"},{question:" How can I get the game? Miniatures? Addons?",answer:"The main game Vast: The Crystal Caverns, The Miniatures and The Fearsome Foes expansions are available for order in our store, if you want to play this game for free - come to the "},{question:"I have an idea how to improve the game, how to share it?",answer:`Please send your idea to us support@darkdev.com. We will definitely test it.

If you have already printed your idea on paper, you can try it out with the gaming community at one of the .

If your idea seems interesting to the community, you will receive a cash reward or something from our store of your choice.`},{question:"Where can I see how this game was made?",answer:"Videos of the manufacture of various components are available at the links below:"},{question:"",answer:""},{question:"",answer:""}]];let{text:n=""}=e;return i.$$set=r=>{"text"in r&&o(0,n=r.text)},[n,t]}class it extends T{constructor(e){super();V(this,e,at,rt,M,{text:0})}}function lt(i){let e,o,s,t,n,r,a,l;return o=new Ne({props:{title:"Ask us on social media"}}),n=new X({props:{title:"General Help \u2049\uFE0F",listQuestions:i[0]}}),a=new X({props:{title:"Shipping \u{1F69A}",listQuestions:i[1]}}),{c(){e=v("div"),g(o.$$.fragment),s=L(),t=v("div"),g(n.$$.fragment),r=L(),g(a.$$.fragment),this.h()},l(f){e=I(f,"DIV",{style:!0});var p=q(e);w(o.$$.fragment,p),s=x(p),t=I(p,"DIV",{class:!0,style:!0});var y=q(t);w(n.$$.fragment,y),r=x(y),w(a.$$.fragment,y),y.forEach(u),p.forEach(u),this.h()},h(){P(t,"class","questions-wrap svelte-jdx8yf"),E(t,"background-color","#fff"),E(e,"display","flex"),E(e,"flex-direction","column"),E(e,"justify-content","center")},m(f,p){d(f,e,p),_(o,e,null),k(e,s),k(e,t),_(n,t,null),k(t,r),_(a,t,null),l=!0},p:N,i(f){l||(c(o.$$.fragment,f),c(n.$$.fragment,f),c(a.$$.fragment,f),l=!0)},o(f){$(o.$$.fragment,f),$(n.$$.fragment,f),$(a.$$.fragment,f),l=!1},d(f){f&&u(e),b(o),b(n),b(a)}}}function mt(i){let e,o,s,t,n;return o=new X({props:{title:"Workshops \u{1F9E0}",listQuestions:i[2]}}),t=new X({props:{title:"Typography \u{1F4C7}",listQuestions:i[3]}}),{c(){e=v("div"),g(o.$$.fragment),s=L(),g(t.$$.fragment),this.h()},l(r){e=I(r,"DIV",{class:!0,style:!0});var a=q(e);w(o.$$.fragment,a),s=x(a),w(t.$$.fragment,a),a.forEach(u),this.h()},h(){P(e,"class","questions-wrap svelte-jdx8yf"),E(e,"background-color","#fff")},m(r,a){d(r,e,a),_(o,e,null),k(e,s),_(t,e,null),n=!0},p:N,i(r){n||(c(o.$$.fragment,r),c(t.$$.fragment,r),n=!0)},o(r){$(o.$$.fragment,r),$(t.$$.fragment,r),n=!1},d(r){r&&u(e),b(o),b(t)}}}function ut(i){let e,o,s;return o=new it({props:{text:"GameName"}}),{c(){e=v("div"),g(o.$$.fragment),this.h()},l(t){e=I(t,"DIV",{class:!0,style:!0});var n=q(e);w(o.$$.fragment,n),n.forEach(u),this.h()},h(){P(e,"class","questions-wrap svelte-jdx8yf"),E(e,"background-color","#fff")},m(t,n){d(t,e,n),_(o,e,null),s=!0},p:N,i(t){s||(c(o.$$.fragment,t),s=!0)},o(t){$(o.$$.fragment,t),s=!1},d(t){t&&u(e),b(o)}}}function pt(i){let e,o,s,t,n,r,a,l,f;return o=new Se({props:{text:"Frequently Asked Questions",imgUrl:"img/faq/faq_bg.png"}}),t=new ce({props:{title:"Please read the following FAQ before contacting us.",$$slots:{default:[lt]},$$scope:{ctx:i}}}),r=new Pe({props:{title:"Please read the following FAQ before contacting us.",$$slots:{default:[mt]},$$scope:{ctx:i}}}),l=new ce({props:{title:"Please read the following FAQ before contacting us.",$$slots:{default:[ut]},$$scope:{ctx:i}}}),{c(){e=L(),g(o.$$.fragment),s=L(),g(t.$$.fragment),n=L(),g(r.$$.fragment),a=L(),g(l.$$.fragment),this.h()},l(p){Ge('[data-svelte="svelte-gmdffn"]',document.head).forEach(u),e=x(p),w(o.$$.fragment,p),s=x(p),w(t.$$.fragment,p),n=x(p),w(r.$$.fragment,p),a=x(p),w(l.$$.fragment,p),this.h()},h(){document.title="FAQ`s"},m(p,y){d(p,e,y),_(o,p,y),d(p,s,y),_(t,p,y),d(p,n,y),_(r,p,y),d(p,a,y),_(l,p,y),f=!0},p(p,[y]){const C={};y&16&&(C.$$scope={dirty:y,ctx:p}),t.$set(C);const W={};y&16&&(W.$$scope={dirty:y,ctx:p}),r.$set(W);const H={};y&16&&(H.$$scope={dirty:y,ctx:p}),l.$set(H)},i(p){f||(c(o.$$.fragment,p),c(t.$$.fragment,p),c(r.$$.fragment,p),c(l.$$.fragment,p),f=!0)},o(p){$(o.$$.fragment,p),$(t.$$.fragment,p),$(r.$$.fragment,p),$(l.$$.fragment,p),f=!1},d(p){p&&u(e),b(o,p),p&&u(s),b(t,p),p&&u(n),b(r,p),p&&u(a),b(l,p)}}}function ft(i){return[[{question:"How can I get a DIY edition of a game with a unique NFC and autographs of all team members?",answer:"Buy the boardgame, you automatically receive all of the above - you can order the game here: /shop"},{question:" How do I contact you?",answer:`1. Come to us personally for the nearest workshop, we will get to know you personally \u{1F601}
2. Write an email to support@ledergames.com. Our email support team can help with damages, missing components, order requests, and anything else you need help with! `},{question:"Is your studio open for public visits?",answer:"We are all geographically distributed members of one big family DarkDev If you want to communicate personally with one of us, sign up for the workshop"},{question:"Can I get involved as a playtester?",answer:"Definitely! Subscribe to our newsletter! We will contact you if we have opportunities for testing soon \u{1F60A}"},{question:"",answer:""},{question:"What does DIY components mean?",answer:"Lorem"},{question:"Who made the boxes and organizers?",answer:"Boxes, organaziners, playing fields, etc. - we make it ourselves, you can see how it looks in the video at the links below:"},{question:"About Chat-Bot",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""}],[{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}],[{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}],[{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{question:"Lorem Ipsum is simply dummy text of the printing",answer:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]]}class ht extends T{constructor(e){super();V(this,e,ft,pt,M,{})}}export{ht as default};
