"use strict";(self["webpackChunkocean_life"]=self["webpackChunkocean_life"]||[]).push([[584],{460:function(e,a,t){t.d(a,{Z:function(){return u}});var l=t(3396);const n={class:"sk-fading-circle"},i=(0,l.uE)('<div class="sk-circle1 sk-circle" data-v-044c9dad></div><div class="sk-circle2 sk-circle" data-v-044c9dad></div><div class="sk-circle3 sk-circle" data-v-044c9dad></div><div class="sk-circle4 sk-circle" data-v-044c9dad></div><div class="sk-circle5 sk-circle" data-v-044c9dad></div><div class="sk-circle6 sk-circle" data-v-044c9dad></div><div class="sk-circle7 sk-circle" data-v-044c9dad></div><div class="sk-circle8 sk-circle" data-v-044c9dad></div><div class="sk-circle9 sk-circle" data-v-044c9dad></div><div class="sk-circle10 sk-circle" data-v-044c9dad></div><div class="sk-circle11 sk-circle" data-v-044c9dad></div><div class="sk-circle12 sk-circle" data-v-044c9dad></div>',12),c=[i];function s(e,a,t,i,s,d){return(0,l.wg)(),(0,l.iD)("div",n,c)}var d={},r=t(89);const o=(0,r.Z)(d,[["render",s],["__scopeId","data-v-044c9dad"]]);var u=o},5692:function(e,a,t){t.d(a,{Z:function(){return D}});var l=t(3396),n=t(7139),i=t(9242),c=t(6973),s=t(2824);const d=e=>((0,l.dD)("data-v-cac73ef0"),e=e(),(0,l.Cn)(),e),r={class:"paginationBox"},o={class:"pagination"},u=d((()=>(0,l._)("img",{src:c,alt:""},null,-1))),v=[u],g={key:0,class:"dot"},p={class:"pageItemBox"},k=["onClick"],h={key:1,class:"dot"},_=d((()=>(0,l._)("img",{src:s,alt:""},null,-1))),f=[_],y={class:"goBox"};function b(e,a,t,c,s,d){return(0,l.wg)(),(0,l.iD)("section",r,[(0,l._)("div",o,[(0,l._)("div",{class:(0,n.C_)(["preBtn arrowBtn",{disabled:1===c.currentPage}]),onClick:a[0]||(a[0]=e=>c.changePage(!1))},v,2),c.currentPage>3?((0,l.wg)(),(0,l.iD)("span",g,"...")):(0,l.kq)("",!0),(0,l._)("ul",p,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.listShow,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,n.C_)(["pageItem",{active:c.currentPage===e}]),key:e,onClick:a=>c.changePage(e)},(0,n.zw)(e),11,k)))),128))]),c.currentPage<c.pages-2?((0,l.wg)(),(0,l.iD)("span",h,"...")):(0,l.kq)("",!0),(0,l._)("div",{class:(0,n.C_)(["nextBtn arrowBtn",{disabled:c.currentPage===c.pages}]),onClick:a[1]||(a[1]=e=>c.changePage(!0))},f,2)]),(0,l._)("div",y,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>c.skipNum=e),onKeyup:a[3]||(a[3]=(0,i.D2)(((...e)=>c.goPage&&c.goPage(...e)),["enter"]))},null,544),[[i.nr,c.skipNum,void 0,{number:!0}]]),(0,l._)("button",{type:"button",onClick:a[4]||(a[4]=(...e)=>c.goPage&&c.goPage(...e))},"Go")])])}t(7658);var w=t(4870),m={props:{total:{type:Number},pagesize:{type:Number},keyWord:{type:String,Number:Number,default:""},keyWordFinish:{type:String,Number:Number,default:""}},setup(e,{emit:a,attrs:t}){const n=(0,w.iH)(),i=(0,w.iH)(t.currentPage),c=(0,l.Fl)((()=>Math.ceil(e.total/e.pagesize))),s=(0,l.Fl)((()=>{const e=[];if(c.value<=5)for(let a=1;a<=c.value;a++)e.push(a);else if(i.value<=2)for(let a=1;a<=5;a++)e.push(a);else if(i.value>=3&&i.value<=c.value-2)for(let a=i.value-2;a<=i.value+2;a++)e.push(a);else if(i.value>c.value-2)for(let a=c.value-4;a<=c.value;a++)e.push(a);return e})),d=e=>{if(!1===e){if(i.value<=1)return;i.value-=1}else if(!0===e){if(i.value>=c.value)return;i.value+=1}else i.value=e;a("change-page",i.value)},r=()=>{"number"!==typeof n.value?(alert("請填入數值"),n.value=""):n.value>c.value?(alert("查無此頁碼，請重新輸入"),n.value=""):n.value<1?(alert("請輸入正確頁碼"),n.value=""):(i.value=n.value,a("change-page",n.value),n.value="")};return(0,l.YP)((()=>e.keyWordFinish),(a=>{e.keyWordFinish,d(1)})),(0,l.YP)((()=>e.keyWord),(a=>{""===e.keyWord&&d(1)})),{currentPage:i,pages:c,listShow:s,changePage:d,goPage:r,skipNum:n,props:e}}},B=t(89);const P=(0,B.Z)(m,[["render",b],["__scopeId","data-v-cac73ef0"]]);var D=P},4584:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var l=t(3396),n=t(9242),i=t(7139);const c=e=>((0,l.dD)("data-v-719da907"),e=e(),(0,l.Cn)(),e),s={key:0,class:"loading"},d={key:1},r={class:"titleBox"},o=c((()=>(0,l._)("h3",null,"消息管理",-1))),u={class:"textBox"},v={class:"editorBox"},g={class:"infoBox"},p={class:"searchBox"},k={class:"tableBox"},h={class:"memberTable"},_=c((()=>(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th",null,"文章編號"),(0,l._)("th",null,"文章類別"),(0,l._)("th",{class:"title"},"標題"),(0,l._)("th",null,"上架日期"),(0,l._)("th",null,"最後更新時間"),(0,l._)("th",null,"文章狀態"),(0,l._)("th")])],-1))),f=["onClick"],y=c((()=>(0,l._)("button",{type:"bttton",class:"editorBtn"},"編輯",-1)));function b(e,a,t,c,b,w){const m=(0,l.up)("Loading"),B=(0,l.up)("router-link"),P=(0,l.up)("Pagination");return c.loading?((0,l.wg)(),(0,l.iD)("section",s,[(0,l.Wm)(m)])):((0,l.wg)(),(0,l.iD)("section",d,[(0,l._)("div",r,[o,(0,l._)("div",u,[(0,l._)("div",v,[(0,l.wy)((0,l._)("button",{type:"bttton",class:"cancelBtn",onClick:a[0]||(a[0]=(...e)=>c.deleteInfo&&c.deleteInfo(...e))}," 刪除 ",512),[[n.F8,c.editorBtn]]),(0,l.wy)((0,l._)("button",{type:"bttton",class:"okBtn",onClick:a[1]||(a[1]=(...e)=>c.finish&&c.finish(...e))}," 完成 ",512),[[n.F8,c.editorBtn]]),(0,l.wy)((0,l._)("button",{type:"button",class:"allEditorBtn",onClick:a[2]||(a[2]=e=>c.editorBtn=!c.editorBtn)}," 編輯 ",512),[[n.F8,!c.editorBtn]]),(0,l.Wm)(B,{class:"addBtn",to:{path:"/backend/newsbackend/add",query:{id:c.dataLength+1}}},{default:(0,l.w5)((()=>[(0,l.Uk)(" + 新增文章 ")])),_:1},8,["to"])]),(0,l._)("div",g,[(0,l._)("p",null,[(0,l.Uk)(" 共有 "),(0,l._)("span",null,(0,i.zw)(c.dataLength)+"則",1),(0,l.Uk)(" 消息 ")]),(0,l._)("div",p,[(0,l.wy)((0,l._)("input",{type:"serch",placeholder:"文章類別、標題","onUpdate:modelValue":a[3]||(a[3]=e=>c.keyWord=e),onKeyup:a[4]||(a[4]=(0,n.D2)(((...e)=>c.goSearch&&c.goSearch(...e)),["enter"]))},null,544),[[n.nr,c.keyWord,void 0,{lazy:!0,trim:!0}]]),(0,l._)("button",{class:"searchBtn",type:"button",onClick:a[5]||(a[5]=(...e)=>c.goSearch&&c.goSearch(...e))})])])])]),(0,l._)("div",k,[(0,l._)("table",h,[_,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.lists,((e,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:e.articleID},[(0,l._)("td",null,[(0,l.wy)((0,l._)("input",{class:"check",type:"checkbox",onClick:a=>c.getID(a,e.articleID)},null,8,f),[[n.F8,c.editorBtn]])]),(0,l._)("td",null,(0,i.zw)((c.currentPage-1)*c.pagesize+a+1),1),(0,l._)("td",null,(0,i.zw)(e.valueEN),1),(0,l._)("td",null,(0,i.zw)(e.articleTitle),1),(0,l._)("td",null,(0,i.zw)(e.createDate),1),(0,l._)("td",null,(0,i.zw)(e.updateDate),1),(0,l._)("td",null,[(0,l._)("button",{type:"bttton",class:(0,i.C_)(["stateBtn",{off:"下架"==e.articleStatus}])},(0,i.zw)(e.articleStatus),3)]),(0,l._)("td",null,[(0,l.Wm)(B,{to:{path:"/backend/newsbackend/editor",query:{id:e.articleID,index:(c.currentPage-1)*c.pagesize+a+1}}},{default:(0,l.w5)((()=>[y])),_:2},1032,["to"])])])))),128))])])]),(0,l.Wm)(P,{total:c.dataLength,pagesize:c.pagesize,currentPage:c.currentPage,onChangePage:c.newlist,keyWord:c.keyWord,keyWordFinish:c.keyWordFinish},null,8,["total","pagesize","currentPage","onChangePage","keyWord","keyWordFinish"])]))}t(7658);var w=t(4311),m=t(5692),B=t(460),P=t(4870),D={components:{Pagination:m.Z,Loading:B.Z},setup(){const e=(0,P.iH)(!0),a=(0,l.f3)("reload"),t=(0,P.iH)(1),n=(0,P.iH)(10),i=(0,P.qj)({data:[]}),c=(0,P.qj)({data:[]}),s=(0,P.iH)(!1),d=(0,P.iH)(""),r=(0,P.iH)(""),o=(0,P.iH)(""),u=(0,P.qj)([]);(0,l.bv)((()=>{w.Z.get("https://oceandemo.herokuapp.com/MySpringBoot/findArticle").then((a=>{i.data=a.data,o.value=a.data.length,e.value=!1}))}));const v=(0,l.Fl)((()=>""===r.value||""===d.value?i.data.slice((t.value-1)*n.value,t.value*n.value):c.data.slice((t.value-1)*n.value,t.value*n.value)));c.data=(0,l.Fl)((()=>{const e=r.value.split(" "),a=[];return e.forEach((e=>{i.data.forEach((t=>{(t.valueEN.includes(e)||t.articleTitle.includes(e))&&a.push(t)}))})),[...new Set(a)]})),(0,l.YP)((()=>d.value),(e=>{""===d.value&&(o.value=i.data.length)}));const g=e=>{t.value=e},p=()=>{""===d.value?(o.value=i.data.length,r.value=""):(r.value=d.value,o.value=c.data.length)},k=()=>{s.value=!s.value,$(".check").prop("checked",!1)},h=()=>{w.Z.post(`https://oceandemo.herokuapp.com/MySpringBoot/deleteArticleById?idList=${u}`).then((function(e){a()}))},_=(e,a)=>{e.target.checked?u.push(a):u.map(((e,t)=>(e===a&&u.splice(t,1),u)))};return{getID:_,finish:k,newsDatas:i,lists:v,currentPage:t,pagesize:n,newlist:g,editorBtn:s,keyWord:d,keyWordFinish:r,dataLength:o,goSearch:p,filterDatas:c,idInfo:u,deleteInfo:h,reload:a,loading:e}}},C=t(89);const W=(0,C.Z)(D,[["render",b],["__scopeId","data-v-719da907"]]);var x=W},2824:function(e,a,t){e.exports=t.p+"img/nextIcon.ffda41ec.svg"},6973:function(e,a,t){e.exports=t.p+"img/preIcon.96e3ab49.svg"}}]);
//# sourceMappingURL=584.25f86a27.js.map