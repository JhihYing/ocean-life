"use strict";(self["webpackChunkocean_life"]=self["webpackChunkocean_life"]||[]).push([[437],{2479:function(e,a,t){t.d(a,{Z:function(){return o}});var l=t(3396);const s={class:"bg"},c={class:"titleText"};function i(e,a,t,i,r,n){return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",c,[(0,l._)("h2",null,[(0,l.WI)(e.$slots,"titleCN",{},(()=>[(0,l.Uk)("最新消息")]),!0)]),(0,l._)("h3",null,[(0,l.WI)(e.$slots,"titleEN",{},(()=>[(0,l.Uk)("Latest News")]),!0)])])])}var r={},n=t(89);const d=(0,n.Z)(r,[["render",i],["__scopeId","data-v-7c457698"]]);var o=d},460:function(e,a,t){t.d(a,{Z:function(){return u}});var l=t(3396);const s={class:"sk-fading-circle"},c=(0,l.uE)('<div class="sk-circle1 sk-circle" data-v-044c9dad></div><div class="sk-circle2 sk-circle" data-v-044c9dad></div><div class="sk-circle3 sk-circle" data-v-044c9dad></div><div class="sk-circle4 sk-circle" data-v-044c9dad></div><div class="sk-circle5 sk-circle" data-v-044c9dad></div><div class="sk-circle6 sk-circle" data-v-044c9dad></div><div class="sk-circle7 sk-circle" data-v-044c9dad></div><div class="sk-circle8 sk-circle" data-v-044c9dad></div><div class="sk-circle9 sk-circle" data-v-044c9dad></div><div class="sk-circle10 sk-circle" data-v-044c9dad></div><div class="sk-circle11 sk-circle" data-v-044c9dad></div><div class="sk-circle12 sk-circle" data-v-044c9dad></div>',12),i=[c];function r(e,a,t,c,r,n){return(0,l.wg)(),(0,l.iD)("div",s,i)}var n={},d=t(89);const o=(0,d.Z)(n,[["render",r],["__scopeId","data-v-044c9dad"]]);var u=o},5692:function(e,a,t){t.d(a,{Z:function(){return C}});var l=t(3396),s=t(7139),c=t(9242),i=t(6973),r=t(2824);const n=e=>((0,l.dD)("data-v-cac73ef0"),e=e(),(0,l.Cn)(),e),d={class:"paginationBox"},o={class:"pagination"},u=n((()=>(0,l._)("img",{src:i,alt:""},null,-1))),v=[u],p={key:0,class:"dot"},g={class:"pageItemBox"},k=["onClick"],h={key:1,class:"dot"},f=n((()=>(0,l._)("img",{src:r,alt:""},null,-1))),_=[f],y={class:"goBox"};function m(e,a,t,i,r,n){return(0,l.wg)(),(0,l.iD)("section",d,[(0,l._)("div",o,[(0,l._)("div",{class:(0,s.C_)(["preBtn arrowBtn",{disabled:1===i.currentPage}]),onClick:a[0]||(a[0]=e=>i.changePage(!1))},v,2),i.currentPage>3?((0,l.wg)(),(0,l.iD)("span",p,"...")):(0,l.kq)("",!0),(0,l._)("ul",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.listShow,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,s.C_)(["pageItem",{active:i.currentPage===e}]),key:e,onClick:a=>i.changePage(e)},(0,s.zw)(e),11,k)))),128))]),i.currentPage<i.pages-2?((0,l.wg)(),(0,l.iD)("span",h,"...")):(0,l.kq)("",!0),(0,l._)("div",{class:(0,s.C_)(["nextBtn arrowBtn",{disabled:i.currentPage===i.pages}]),onClick:a[1]||(a[1]=e=>i.changePage(!0))},_,2)]),(0,l._)("div",y,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>i.skipNum=e),onKeyup:a[3]||(a[3]=(0,c.D2)(((...e)=>i.goPage&&i.goPage(...e)),["enter"]))},null,544),[[c.nr,i.skipNum,void 0,{number:!0}]]),(0,l._)("button",{type:"button",onClick:a[4]||(a[4]=(...e)=>i.goPage&&i.goPage(...e))},"Go")])])}t(7658);var w=t(4870),P={props:{total:{type:Number},pagesize:{type:Number},keyWord:{type:String,Number:Number,default:""},keyWordFinish:{type:String,Number:Number,default:""}},setup(e,{emit:a,attrs:t}){const s=(0,w.iH)(),c=(0,w.iH)(t.currentPage),i=(0,l.Fl)((()=>Math.ceil(e.total/e.pagesize))),r=(0,l.Fl)((()=>{const e=[];if(i.value<=5)for(let a=1;a<=i.value;a++)e.push(a);else if(c.value<=2)for(let a=1;a<=5;a++)e.push(a);else if(c.value>=3&&c.value<=i.value-2)for(let a=c.value-2;a<=c.value+2;a++)e.push(a);else if(c.value>i.value-2)for(let a=i.value-4;a<=i.value;a++)e.push(a);return e})),n=e=>{if(!1===e){if(c.value<=1)return;c.value-=1}else if(!0===e){if(c.value>=i.value)return;c.value+=1}else c.value=e;a("change-page",c.value)},d=()=>{"number"!==typeof s.value?(alert("請填入數值"),s.value=""):s.value>i.value?(alert("查無此頁碼，請重新輸入"),s.value=""):s.value<1?(alert("請輸入正確頁碼"),s.value=""):(c.value=s.value,a("change-page",s.value),s.value="")};return(0,l.YP)((()=>e.keyWordFinish),(a=>{e.keyWordFinish,n(1)})),(0,l.YP)((()=>e.keyWord),(a=>{""===e.keyWord&&n(1)})),{currentPage:c,pages:i,listShow:r,changePage:n,goPage:d,skipNum:s,props:e}}},b=t(89);const W=(0,b.Z)(P,[["render",m],["__scopeId","data-v-cac73ef0"]]);var C=W},1437:function(e,a,t){t.r(a),t.d(a,{default:function(){return L}});var l=t(3396),s=t(9242),c=t(7139);const i=e=>((0,l.dD)("data-v-7cbc212e"),e=e(),(0,l.Cn)(),e),r={class:"onlineshop"},n={class:"containerMain"},d={class:"titleBox"},o=i((()=>(0,l._)("h3",null,"全部商品",-1))),u={class:"serchSortBox"},v={class:"searchBox"},p={key:0,class:"loading"},g={key:1},k={class:"productBox"},h={class:"productList"};function f(e,a,t,i,f,_){const y=(0,l.up)("BgTitle"),m=(0,l.up)("Loading"),w=(0,l.up)("ProductItem"),P=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)("main",r,[(0,l.Wm)(y,null,{titleCN:(0,l.w5)((()=>[(0,l.Uk)("線上商城 ")])),titleEN:(0,l.w5)((()=>[(0,l.Uk)("Online Shop ")])),_:1}),(0,l._)("div",n,[(0,l._)("div",d,[o,(0,l._)("div",u,[(0,l._)("div",v,[(0,l.wy)((0,l._)("input",{type:"serch",placeholder:"請輸入商品名稱","onUpdate:modelValue":a[0]||(a[0]=e=>i.keyWord=e),onKeyup:a[1]||(a[1]=(0,s.D2)(((...e)=>i.goSearch&&i.goSearch(...e)),["enter"]))},null,544),[[s.nr,i.keyWord,void 0,{lazy:!0,trim:!0}]]),(0,l._)("button",{class:"searchBtn",type:"button",onClick:a[2]||(a[2]=(...e)=>i.goSearch&&i.goSearch(...e))})]),(0,l.Uk)(" "+(0,c.zw)(i.sortAnswer),1)])]),i.loading?((0,l.wg)(),(0,l.iD)("section",p,[(0,l.Wm)(m)])):((0,l.wg)(),(0,l.iD)("section",g,[(0,l._)("section",k,[(0,l._)("ul",h,[(0,l.Wm)(w,{lists:i.lists},null,8,["lists"])])]),(0,l.Wm)(P,{total:i.dataLength,pagesize:i.pagesize,currentPage:i.currentPage,onChangePage:i.newlist,keyWord:i.keyWord,keyWordFinish:i.keyWordFinish},null,8,["total","pagesize","currentPage","onChangePage","keyWord","keyWordFinish"])]))])])}t(7658);var _=t(4311),y=t(2479);const m=e=>((0,l.dD)("data-v-ef578d98"),e=e(),(0,l.Cn)(),e),w={class:"productImg"},P=["src"],b={class:"productInfo"},W={class:"priceBox"},C={key:0,class:"saleBox"},D={class:"salePrice"},I=m((()=>(0,l._)("span",{class:"sale"},"sale",-1)));function N(e,a,t,s,i,r){const n=(0,l.up)("router-link");return(0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.props.lists,(e=>((0,l.wg)(),(0,l.iD)("li",{class:"productCard",key:e.productId},[(0,l.Wm)(n,{to:{path:"/onlineshop/product",query:{id:e.productId}}},{default:(0,l.w5)((()=>[(0,l._)("div",w,[(0,l._)("img",{src:"data:image/png;base64,"+e.productImg[0],alt:""},null,8,P)]),(0,l._)("div",b,[(0,l._)("h5",null,(0,c.zw)(e.productName),1),(0,l._)("div",W,[(0,l._)("p",{class:(0,c.C_)({saleActive:""!==e.productPriceSale})}," NT$"+(0,c.zw)(e.productPrice),3),""!==e.productPriceSale?((0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("span",D,"NT$"+(0,c.zw)(e.productPriceSale),1),I])):(0,l.kq)("",!0)])])])),_:2},1032,["to"])])))),128)}var B={props:["lists"],setup(e){return{props:e}}},S=t(89);const x=(0,S.Z)(B,[["render",N],["__scopeId","data-v-ef578d98"]]);var z=x,Z=t(5692),F=t(460),H=t(4870),U={components:{ProductItem:z,BgTitle:y.Z,Pagination:Z.Z,Loading:F.Z},setup(){const e=(0,H.iH)(!0),a=(0,H.qj)({data:[]}),t=(0,H.qj)({data:[]}),s=(0,H.iH)(1),c=(0,H.iH)(8),i=(0,H.iH)(""),r=(0,H.iH)(""),n=(0,H.iH)(""),d=(0,H.iH)("");(0,l.bv)((()=>{_.Z.get("https://oceandemo.herokuapp.com/MySpringBoot/productPage").then((t=>{const l=Object.values(t.data);a.data=l.filter((function(e){return"上架"===e.productStatus})).reverse(),n.value=a.data.length,e.value=!1}))}));const o=(0,l.Fl)((()=>""===r.value||""===i.value?a.data.slice((s.value-1)*c.value,s.value*c.value):t.data.slice((s.value-1)*c.value,s.value*c.value)));t.data=(0,l.Fl)((()=>{const e=r.value.split(" "),t=[];return e.forEach((e=>{a.data.forEach((a=>{a.productName.includes(e)&&t.push(a)}))})),[...new Set(t)]})),(0,l.YP)((()=>i.value),(e=>{""===i.value&&(n.value=a.data.length)}));const u=e=>{s.value=e},v=()=>{""===i.value?(n.value=a.data.length,r.value=""):(r.value=i.value,n.value=t.data.length)};return{lists:o,currentPage:s,pagesize:c,newlist:u,productDatas:a,keyWord:i,filterDatas:t,dataLength:n,goSearch:v,keyWordFinish:r,sortAnswer:d,loading:e}}};const q=(0,S.Z)(U,[["render",f],["__scopeId","data-v-7cbc212e"]]);var L=q},2824:function(e,a,t){e.exports=t.p+"img/nextIcon.ffda41ec.svg"},6973:function(e,a,t){e.exports=t.p+"img/preIcon.96e3ab49.svg"}}]);
//# sourceMappingURL=437.ae575983.js.map