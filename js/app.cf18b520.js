(function(){"use strict";var e={2971:function(e,t,n){var a=n(9242),o=n(3396);function r(e,t,n,a,r,i){const c=(0,o.up)("Header"),l=(0,o.up)("TicketLink"),d=(0,o.up)("router-view"),s=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a.route.meta.keepAlive?((0,o.wg)(),(0,o.j4)(c,{key:0})):(0,o.kq)("",!0),a.route.meta.ticketAlive?((0,o.wg)(),(0,o.j4)(l,{key:1})):(0,o.kq)("",!0),(0,o.Wm)(d),a.route.meta.footerKeepAlive?((0,o.wg)(),(0,o.j4)(s,{key:2})):(0,o.kq)("",!0)],64)}const i={class:"header",id:"header"},c={class:"container"},l={class:"navbarBox"};function d(e,t,n,a,r,d){const s=(0,o.up)("Logo"),u=(0,o.up)("Navbar"),p=(0,o.up)("NavbarIcon"),f=(0,o.up)("NavbarHamburger");return(0,o.wg)(),(0,o.iD)("header",i,[(0,o._)("div",c,[(0,o.Wm)(s),(0,o._)("div",l,[(0,o.Wm)(u),(0,o.Wm)(p),(0,o.Wm)(f)])])])}var s=n(7282),u=n(2249),p=n(8605),f=n(5044),m={components:{Logo:s.Z,NavbarHamburger:u.Z,NavbarIcon:p.Z,Navbar:f.Z}},h=n(89);const v=(0,h.Z)(m,[["render",d],["__scopeId","data-v-105ae04d"]]);var b=v,g=n(1737),k=n(5905),w=n(6223);const _={class:"footer"},C={class:"container"},y=(0,o.uE)('<div class="footer-text" data-v-5064ef7e><div class="footer-follow" data-v-5064ef7e><p class="moreMsg" data-v-5064ef7e>更多情報 |</p><a href="" data-v-5064ef7e><img class="fbIcon" src="'+g+'" alt="Facebook圖示" data-v-5064ef7e></a><a href="" data-v-5064ef7e><img class="ytIcon" src="'+k+'" alt="YouTube圖示" data-v-5064ef7e></a><a href="" data-v-5064ef7e><img class="igIcon" src="'+w+'" alt="Instagram圖示" data-v-5064ef7e></a></div><div class="footer-content" data-v-5064ef7e><div class="addTelText" data-v-5064ef7e><p class="addText" data-v-5064ef7e>地址：202基隆市中正區北寧路367號</p><p class="telText" data-v-5064ef7e>TEL：(02) 2690-9031</p></div><hr data-v-5064ef7e><p data-v-5064ef7e> 本平台僅供學習、展示之用，參考資源：Xpark ｜ 海遊館｜墨田水族館｜品川水族館。 </p><div class="copyText" data-v-5064ef7e><p class="copyrightText" data-v-5064ef7e>Copyright © 2023 OCEAN LIFE.</p><p data-v-5064ef7e>All rights reserved</p></div></div></div>',1);function x(e,t,n,a,r,i){const c=(0,o.up)("Backtop");return(0,o.wg)(),(0,o.iD)("footer",_,[(0,o._)("div",C,[(0,o.Wm)(c),y])])}var I=n(9753);const A=e=>((0,o.dD)("data-v-4c97bede"),e=e(),(0,o.Cn)(),e),P=A((()=>(0,o._)("img",{class:"backTopIcon",src:I,alt:"Top圖示"},null,-1))),S=[P];function T(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("a",{id:"BackTopBtn",class:"BackTopBtn",onClick:t[0]||(t[0]=(...e)=>a.clcikTop&&a.clcikTop(...e))},S)}var N={setup(){const e=()=>{$("html,body").animate({scrollTop:0},333)};return{clcikTop:e}}};const H=(0,h.Z)(N,[["render",T],["__scopeId","data-v-4c97bede"]]);var O=H,W={components:{Backtop:O}};const E=(0,h.Z)(W,[["render",x],["__scopeId","data-v-5064ef7e"]]);var U=E,j=n.p+"img/fixed_ticket.16bfe11a.png";const B={class:"ticketLink",id:"TicketTop"},L=(0,o._)("a",{href:"https://www.kkday.com/zh-tw",target:"_blank"},[(0,o._)("img",{src:j,alt:"網路購票"})],-1),Z=[L];function F(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("div",B,Z)}var D={};const q=(0,h.Z)(D,[["render",F]]);var K=q,M=n(65),Y=n(2483),z=n(6905),R=n.n(z),Q={components:{Header:b,Footer:U,TicketLink:K},setup(){const e=(0,M.oR)(),t=(0,Y.yj)(),n=(0,o.Fl)((()=>e.getters.getHeaderIsSohow)),a=(0,o.Fl)((()=>e.getters.getFooterIsSohow));return(0,o.bv)((()=>{R().init({duration:1500,once:!0}),R().init()})),{headerIsSohow:n,footerIsSohow:a,route:t}}};const X=(0,h.Z)(Q,[["render",r]]);var G=X,J=n(680);const V=[{path:"/",name:"Index",component:()=>Promise.all([n.e(311),n.e(32),n.e(798)]).then(n.bind(n,2798)),meta:{keepAlive:!1,ticketAlive:!0,footerKeepAlive:!0}},{path:"/news",name:"News",meta:{keepAlive:!0,ticketAlive:!0,footerKeepAlive:!0},children:[{path:"newsIndex",component:()=>Promise.all([n.e(311),n.e(33)]).then(n.bind(n,4033))},{path:"newspage",component:()=>Promise.all([n.e(311),n.e(459)]).then(n.bind(n,6459))}]},{path:"/information",name:"Information",meta:{keepAlive:!0,ticketAlive:!0,footerKeepAlive:!0},children:[{path:"ticket",component:()=>n.e(193).then(n.bind(n,6193))},{path:"traffic",component:()=>n.e(769).then(n.bind(n,7769))},{path:"faq",component:()=>n.e(343).then(n.bind(n,4343))},{path:"contact",component:()=>n.e(861).then(n.bind(n,7861))}]},{path:"/explore",name:"Explore",meta:{keepAlive:!0,ticketAlive:!0,footerKeepAlive:!0},children:[{path:"guide",component:()=>n.e(676).then(n.bind(n,3676))},{path:"restaurant",component:()=>Promise.all([n.e(32),n.e(296)]).then(n.bind(n,1296))},{path:"activity",component:()=>Promise.all([n.e(311),n.e(518)]).then(n.bind(n,5518))}]},{path:"/onlineshop",name:"Onlineshop",meta:{keepAlive:!0,ticketAlive:!0,footerKeepAlive:!0},children:[{path:"shopIndex",component:()=>Promise.all([n.e(311),n.e(437)]).then(n.bind(n,1437))},{path:"product",component:()=>Promise.all([n.e(311),n.e(32),n.e(180)]).then(n.bind(n,7180))}]},{path:"/cart",name:"Cart",meta:{keepAlive:!0,ticketAlive:!0,footerKeepAlive:!0},children:[{path:"cartNull",component:()=>n.e(852).then(n.bind(n,4852))}]},{path:"/checkout",name:"Checkout",component:()=>n.e(687).then(n.bind(n,687))},{path:"/finish",name:"Finish",component:()=>n.e(317).then(n.bind(n,1317))},{path:"/member",name:"Member",meta:{keepAlive:!0,ticketAlive:!0,requiresAuth:!0,footerKeepAlive:!0},children:[{path:"login",name:"Login",component:()=>Promise.all([n.e(311),n.e(435)]).then(n.bind(n,5435)),meta:{requiresAuth:!1}},{path:"signup",name:"Signup",component:()=>Promise.all([n.e(311),n.e(662),n.e(982)]).then(n.bind(n,4982)),meta:{requiresAuth:!1}},{path:"memberProfile",name:"MemberProfile",component:()=>Promise.all([n.e(311),n.e(662),n.e(403)]).then(n.bind(n,4403))},{path:"changePassword",component:()=>n.e(83).then(n.bind(n,83))},{path:"orderTracking",component:()=>n.e(377).then(n.bind(n,9377))},{path:"myCollection",component:()=>n.e(992).then(n.bind(n,992))}]},{path:"/backendLogin",name:"BackendLogin",component:()=>Promise.all([n.e(311),n.e(700)]).then(n.bind(n,4700))},{path:"/backend",name:"Backend",component:()=>n.e(907).then(n.bind(n,907)),meta:{mangerAuth:!0},children:[{path:"memberbackend",name:"Memberbackend",children:[{path:"member",component:()=>Promise.all([n.e(311),n.e(573)]).then(n.bind(n,9573))},{path:"editor",component:()=>Promise.all([n.e(311),n.e(207)]).then(n.bind(n,6207))}]},{path:"newsbackend",name:"Newsbackend",children:[{path:"news",component:()=>Promise.all([n.e(311),n.e(584)]).then(n.bind(n,4584))},{path:"add",component:()=>Promise.all([n.e(311),n.e(378)]).then(n.bind(n,2378))},{path:"editor",component:()=>Promise.all([n.e(311),n.e(802)]).then(n.bind(n,2802))}]},{path:"activityBackend",name:"ActivityBackend",children:[{path:"activity",component:()=>Promise.all([n.e(311),n.e(933)]).then(n.bind(n,6933))},{path:"add",component:()=>Promise.all([n.e(311),n.e(826)]).then(n.bind(n,3826))},{path:"editor",component:()=>Promise.all([n.e(311),n.e(667)]).then(n.bind(n,2667))}]},{path:"onlineBackend",name:"OnlineBackend",children:[{path:"order",component:()=>n.e(611).then(n.bind(n,611))},{path:"sale",component:()=>n.e(720).then(n.bind(n,2720))},{path:"online",children:[{path:"product",component:()=>Promise.all([n.e(311),n.e(393)]).then(n.bind(n,393))},{path:"add",component:()=>Promise.all([n.e(311),n.e(57)]).then(n.bind(n,9057))},{path:"editor",component:()=>Promise.all([n.e(311),n.e(453)]).then(n.bind(n,6453))}]}]}]}],ee=(0,Y.p7)({history:(0,Y.PO)("/ocean-life/"),routes:V});ee.beforeEach(((e,t,n)=>{const a=J.Z.get("token"),o=localStorage.getItem("token"),r=J.Z.get("mangerToken"),i=localStorage.getItem("mangerToken");return!e.meta.requiresAuth||a||o?!e.meta.mangerAuth||r||i?n():n({name:"BackendLogin"}):n({name:"Login"}),!0})),ee.afterEach(((e,t,n)=>{window.scrollTo(0,0)}));var te=ee,ne=(0,M.MT)({state:{isOpen:!0,headerIsSohow:!0,footerIsSohow:!0},getters:{isOpen(e){return e.isOpen},getHeaderIsSohow(e){return e.headerIsSohow},getFooterIsSohow(e){return e.footerIsSohow}},mutations:{headerIsSohowState(e){e.headerIsSohow=!1},footerIsSohowState(e){e.footerIsSohow=!1}},actions:{headerIsSohow(e){e.commit("headerIsSohowState")},footerIsSohow(e){e.commit("footerIsSohowState")}},modules:{}}),ae=n(7387),oe=n.n(ae),re=n(3820),ie=n(530),ce=n.n(ie);ce().configure({showSpinner:!1}),window.$=window.jQuery=oe(),(0,a.ri)(G).use(re.Z).use(oe()),(0,a.ri)(G).use(ne).use(te).mount("#app")},7282:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(3396),o=n(7139),r=n(2835);const i=e=>((0,a.dD)("data-v-bda42124"),e=e(),(0,a.Cn)(),e),c=i((()=>(0,a._)("img",{class:"logoIcon",src:r,alt:"Ocean Life的Logo"},null,-1)));function l(e,t,n,r,i,l){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(d,{class:(0,o.C_)(["logoBtn",{active:0===e.idx}]),to:"/"},{default:(0,a.w5)((()=>[c])),_:1},8,["class"])}var d={},s=n(89);const u=(0,s.Z)(d,[["render",l],["__scopeId","data-v-bda42124"]]);var p=u},5044:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(3396),o=n(7139),r=n(9242);const i={class:"navbar-list"},c={class:"navbar nav-news"},l={class:"navbar nav-info dropdownOpen"},d={class:"navbar-dropdown"},s={class:"navbar nav-explore dropdownOpen"},u={class:"navbar-dropdown"},p={class:"navbar nav-store"};function f(e,t,n,f,m,h){const v=(0,a.up)("router-link");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("ul",i,[(0,a._)("li",c,[(0,a.Wm)(v,{to:"/news/newsIndex",class:(0,o.C_)({active:1===f.idx})},{default:(0,a.w5)((()=>[(0,a.Uk)("最新消息")])),_:1},8,["class"])]),(0,a._)("li",l,[(0,a.Wm)(v,{to:"/information/ticket",class:(0,o.C_)({active:2===f.idx})},{default:(0,a.w5)((()=>[(0,a.Uk)("入館資訊")])),_:1},8,["class"]),(0,a._)("ul",d,[(0,a._)("li",null,[(0,a.Wm)(v,{to:"/information/ticket"},{default:(0,a.w5)((()=>[(0,a.Uk)("票價&購票")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(v,{to:"/information/traffic"},{default:(0,a.w5)((()=>[(0,a.Uk)("交通指南")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(v,{to:"/information/faq"},{default:(0,a.w5)((()=>[(0,a.Uk)("常見問答")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(v,{to:"/information/contact"},{default:(0,a.w5)((()=>[(0,a.Uk)("聯絡我們")])),_:1})])])]),(0,a._)("li",s,[(0,a.Wm)(v,{to:"/explore/guide",class:(0,o.C_)({active:3===f.idx})},{default:(0,a.w5)((()=>[(0,a.Uk)("探索之旅")])),_:1},8,["class"]),(0,a._)("ul",u,[(0,a._)("li",null,[(0,a.Wm)(v,{to:"/explore/guide"},{default:(0,a.w5)((()=>[(0,a.Uk)("館內導覽")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(v,{to:"/explore/activity"},{default:(0,a.w5)((()=>[(0,a.Uk)("館內活動")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(v,{to:"/explore/restaurant"},{default:(0,a.w5)((()=>[(0,a.Uk)("特色餐廳")])),_:1})])])]),(0,a._)("li",p,[(0,a.Wm)(v,{to:"/onlineshop/shopIndex",class:(0,o.C_)({active:4===f.idx})},{default:(0,a.w5)((()=>[(0,a.Uk)("線上商城")])),_:1},8,["class"])])],512)),[[r.F8,f.isOpen]])}var m=n(65),h=n(4870),v=n(2483),b={setup(){const e=["/","news","information","explore","onlineshop","member","cart"],t=(0,v.yj)(),n=(0,h.iH)(0),o=(0,m.oR)(),r=(0,a.Fl)((()=>o.state.isOpen));return(0,a.YP)((()=>t.path),(()=>{e.forEach(((e,a)=>{const o=t.path.substr(1).split("/")[0];o===e&&(n.value=a)}))}),{immediate:!0}),{isOpen:r,routerArr:e,routeNow:t,idx:n}}},g=n(89);const k=(0,g.Z)(b,[["render",f],["__scopeId","data-v-422e3648"]]);var w=k},2249:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(3396),o=n(7139),r=n(4964),i=n(3220),c=n(2347);const l=e=>((0,a.dD)("data-v-6d14e570"),e=e(),(0,a.Cn)(),e),d=l((()=>(0,a._)("span",{class:"hamburger-box"},[(0,a._)("span",{class:"hamburger-inner"})],-1))),s=[d],u={class:"burger_nav"},p={class:"burger_container"},f={class:"burger_ul"},m={class:"burger_li"},h={class:"burger_li dropdown"},v=l((()=>(0,a._)("div",{class:"add-icon"},null,-1))),b={class:"burger_content"},g={class:"burger_li dropdown"},k=l((()=>(0,a._)("div",{class:"add-icon"},null,-1))),w={class:"burger_content"},_={class:"burger_li"},C=(0,a.uE)('<a href="https://www.kkday.com/zh-tw" class="buy_ticket" target="_blank" data-v-6d14e570><p data-v-6d14e570>網路購票</p></a><div class="burger_follow" data-v-6d14e570><p data-v-6d14e570>Follow Us</p><span data-v-6d14e570>|</span><a href="https://www.facebook.com/" target="_blank" data-v-6d14e570><img src="'+r+'" alt="fb圖示" data-v-6d14e570></a><a href="https://www.youtube.com/" target="_blank" data-v-6d14e570><img src="'+i+'" alt="youtube圖示" data-v-6d14e570></a><a href="https://www.youtube.com/" target="_blank" data-v-6d14e570><img src="'+c+'" alt="ig圖示" data-v-6d14e570></a></div>',2);function y(e,t,n,r,i,c){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{class:(0,o.C_)(["hamburger hamburger--slider",{isActive:r.navHamClose}]),type:"button",onClick:t[0]||(t[0]=(...e)=>r.handClickNavbarHam&&r.handClickNavbarHam(...e))},s,2),(0,a._)("div",u,[(0,a._)("div",p,[(0,a._)("ul",f,[(0,a._)("li",null,[(0,a._)("div",m,[(0,a.Wm)(l,{class:(0,o.C_)(["on",{active:1===r.idx}]),to:"/news/newsIndex",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("最新消息 ")])),_:1},8,["class","onClick"])])]),(0,a._)("li",null,[(0,a._)("div",h,[(0,a._)("a",{class:(0,o.C_)({active:2===r.idx})},"入館資訊",2),v]),(0,a._)("div",b,[(0,a.Wm)(l,{to:"/information/ticket",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("票價 & 購票")])),_:1},8,["onClick"]),(0,a.Wm)(l,{to:"/information/traffic",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("交通指南")])),_:1},8,["onClick"]),(0,a.Wm)(l,{to:"/information/faq",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("常見問答")])),_:1},8,["onClick"]),(0,a.Wm)(l,{to:"/information/contact",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("聯絡我們")])),_:1},8,["onClick"])])]),(0,a._)("li",null,[(0,a._)("div",g,[(0,a._)("a",{class:(0,o.C_)({active:3===r.idx})},"探索之旅",2),k]),(0,a._)("div",w,[(0,a.Wm)(l,{to:"/explore/guide",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("館內導覽")])),_:1},8,["onClick"]),(0,a.Wm)(l,{to:"/explore/activity",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("館內活動")])),_:1},8,["onClick"]),(0,a.Wm)(l,{to:"/explore/restaurant",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("特色餐廳")])),_:1},8,["onClick"])])]),(0,a._)("li",null,[(0,a._)("div",_,[(0,a.Wm)(l,{class:(0,o.C_)({active:4===r.idx}),to:"/onlineshop/shopIndex",onClick:r.handClickNavbarHam},{default:(0,a.w5)((()=>[(0,a.Uk)("線上商城")])),_:1},8,["class","onClick"])])])]),C])])],64)}var x=n(4870),I=n(2483),A={setup(){const e=["/","news","information","explore","onlineshop","member","cart"],t=(0,I.yj)(),n=(0,x.iH)(0),o=(0,x.iH)(!1),r=()=>{o.value=!o.value,$(".burger_nav").slideToggle()};return(0,a.bv)((()=>{const e=document.getElementsByClassName("dropdown");let t;for(t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");const e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))})),(0,a.YP)((()=>t.path),(()=>{e.forEach(((e,a)=>{const o=t.path.substr(1).split("/")[0];o===e&&(n.value=a)}))}),{immediate:!0}),{navHamClose:o,handClickNavbarHam:r,routerArr:e,routeNow:t,idx:n}}},P=n(89);const S=(0,P.Z)(A,[["render",y],["__scopeId","data-v-6d14e570"]]);var T=S},8605:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(3396),o=n(7139);const r={class:"narbar-icon"};function i(e,t,n,i,c,l){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(d,{to:"/member/memberProfile",class:"memberBtn"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,o.C_)(["memberIcon",{on:5===i.idx}])},null,2)])),_:1}),(0,a.Wm)(d,{to:"/cart/cartNull",class:"cartBtn"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,o.C_)(["cartIcon",{on:6===i.idx}])},null,2)])),_:1})])}var c=n(4870),l=n(2483),d={setup(){const e=["/","news","information","explore","onlineshop","member","cart"],t=(0,l.yj)(),n=(0,c.iH)(0),o=(0,c.iH)(!1);return(0,a.YP)((()=>t.path),(()=>{e.forEach(((e,a)=>{const o=t.path.substr(1).split("/")[0];o===e&&(n.value=a)}))}),{immediate:!0}),{isShow:o,idx:n}}},s=n(89);const u=(0,s.Z)(d,[["render",i],["__scopeId","data-v-a91d4f1a"]]);var p=u},9753:function(e,t,n){e.exports=n.p+"img/backTopIcon.007f4097.svg"},4964:function(e,t,n){e.exports=n.p+"img/circle_fb.c1ede462.svg"},2347:function(e,t,n){e.exports=n.p+"img/circle_ig.163f6675.svg"},3220:function(e,t,n){e.exports=n.p+"img/circle_yt.ecba7dc2.svg"},1737:function(e,t,n){e.exports=n.p+"img/fbIcon.28d5843f.svg"},6223:function(e,t,n){e.exports=n.p+"img/igIcon.4db1d711.svg"},2835:function(e,t,n){e.exports=n.p+"img/logo.23b7b7b5.svg"},5905:function(e,t,n){e.exports=n.p+"img/ytIcon.7965cd4e.svg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],r=e[s][2];for(var c=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(c=!1,r<i&&(i=r));if(c){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{32:"85b8eab3",33:"c55369f6",57:"48cc245d",83:"455d7a3b",180:"82cfca9b",193:"2734770e",207:"b82e9dd8",296:"97d095d5",311:"a3e276ff",317:"cd3348d5",343:"5f08b763",377:"ea573f40",378:"9a2be77d",393:"3aa923d0",403:"7132a0e1",435:"dac0dc83",437:"ae575983",453:"08aa9911",459:"39994d91",518:"cf2a7d1b",573:"1c0bd23f",584:"25f86a27",611:"ea9def12",662:"2a503ff2",667:"22a59531",676:"2ed27cd8",687:"3d676e95",700:"7dc858d9",720:"5f023295",769:"00e2b5c6",798:"0cb03ef4",802:"3e2a4eb6",826:"66b575f9",852:"6ee58233",861:"2db68162",907:"2386943a",933:"eef34ebc",982:"b6944932",992:"174feb8d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{33:"e1ccfe52",57:"a27b6e79",83:"6d91cd2b",180:"1c3d4daa",193:"7b7dcbd8",207:"63044d17",296:"6e2b77ec",317:"8c131e38",343:"c72f284f",377:"5b90fdef",378:"b6a3d97a",393:"33cd88c5",403:"68524a93",435:"61a396c8",437:"7c12b0a7",453:"80961355",459:"ef925f1b",518:"d2cedf28",573:"6b094d7d",584:"9c6a35a1",611:"596c63bb",667:"dcc5a60a",676:"8c54c6b8",687:"b2ad2f5c",700:"7c64928a",720:"37d7343a",769:"342344d6",798:"fd051fe7",802:"82ed9545",826:"ad883bbc",852:"648062d3",861:"cd41598c",907:"74deaa26",933:"e1d35c49",982:"3efd49d7",992:"4e733d08"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ocean_life:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var c,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var u=d[s];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+r){c=u;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=a),e[a]=[o];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/ocean-life/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=c,o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),c=n.p+i;if(t(i,c))return o();e(a,c,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={33:1,57:1,83:1,180:1,193:1,207:1,296:1,317:1,343:1,377:1,378:1,393:1,403:1,435:1,437:1,453:1,459:1,518:1,573:1,584:1,611:1,667:1,676:1,687:1,700:1,720:1,769:1,798:1,802:1,826:1,852:1,861:1,907:1,933:1,982:1,992:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),c=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,o[1](c)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],c=a[1],l=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(t&&t(a);d<i.length;d++)r=i[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},a=self["webpackChunkocean_life"]=self["webpackChunkocean_life"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2971)}));a=n.O(a)})();
//# sourceMappingURL=app.cf18b520.js.map