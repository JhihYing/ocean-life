"use strict";(self["webpackChunkocean_life"]=self["webpackChunkocean_life"]||[]).push([[982],{4982:function(e,a,t){t.r(a),t.d(a,{default:function(){return ee}});var n=t(3396),i=t(9242),s=t(7139),l=t(8263),o=t(4625),c=t(4663),u=t(5940),p=t(4638);const d=e=>((0,n.dD)("data-v-bc2e6a1a"),e=e(),(0,n.Cn)(),e),r={class:"signup"},m={class:"containerMain"},v=d((()=>(0,n._)("h3",null,"會員註冊",-1))),y=d((()=>(0,n._)("p",{class:"signupInfo"}," 建立 Ｏcean Life 會員個人檔案，獨家優惠搶先領，歡迎加入 Ｏcean Life 這個大家庭。 ",-1))),b={class:"inputText",type:"email",placeholder:"電子郵件*",id:"email",name:"account",ref:"emailInput",required:""},f=d((()=>(0,n._)("br",null,null,-1))),g={class:"InfoBox"},I={class:"passwordBox"},h=["type"],_={key:0,class:"closeEyeImg",src:l},w={key:1,class:"showEyeImg",src:o},x={class:"InfoBox"},k={placeholder:"出生日期*",class:"birthday",type:"text",onfocus:"(this.type='date')",onblur:"(this.type='text')",id:"date",name:"birth",ref:"dayInput",required:""},H=d((()=>(0,n._)("p",null,"每年生日時獲得獨家好禮。",-1))),B={class:"InfoBox"},D={type:"text",placeholder:"姓名*",name:"name",ref:"nameInput",id:"name",required:""},E=d((()=>(0,n._)("p",null,"需填寫真實姓名",-1))),q={name:"gender",class:"sexBox",ref:"sexInput",id:"sex"},N=d((()=>(0,n._)("option",{value:"男",selected:""},"男",-1))),C=d((()=>(0,n._)("option",{value:"女"},"女",-1))),M=d((()=>(0,n._)("option",{value:"其他"},"其他",-1))),U=[N,C,M],F=d((()=>(0,n._)("br",null,null,-1))),L={class:"addressBox"},A=d((()=>(0,n._)("option",{value:"",disabled:""},"請選擇縣市",-1))),S=["value"],V=d((()=>(0,n._)("option",{value:"",disabled:""},"請選擇地區",-1))),Y=["value"],j={type:"text",placeholder:"地址*",name:"road",ref:"addressInput",required:"",id:"address"},z={class:"subscriptionBox"},K={type:"checkbox",id:"subscription",name:"sub",ref:"subscriptionInput"},O=d((()=>(0,n._)("label",{for:"subscription"},"訂閱 Ocean Life， 獲得會員福利最新消息",-1))),P=(0,n.uE)('<span class="agreeInfo" data-v-bc2e6a1a>如建立帳號，即代表同意 Ocean Life 的 <a data-v-bc2e6a1a> 隱私權政策</a> 和 <a data-v-bc2e6a1a> 使用條款</a>。</span><button class="signupBtn" type="submit" data-v-bc2e6a1a>註冊</button><p class="fastSignup" data-v-bc2e6a1a>快速註冊</p><div class="communityIconBox" data-v-bc2e6a1a><div class="fb communityIcon" data-v-bc2e6a1a><img src="'+c+'" alt="" data-v-bc2e6a1a></div><div class="google communityIcon" data-v-bc2e6a1a><img src="'+u+'" alt="" data-v-bc2e6a1a></div><div class="line communityIcon" data-v-bc2e6a1a><img src="'+p+'" alt="" data-v-bc2e6a1a></div></div>',4);function T(e,a,t,l,o,c){const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("main",r,[(0,n._)("div",m,[(0,n._)("form",{onSubmit:a[3]||(a[3]=(0,i.iM)(((...e)=>l.submitFn&&l.submitFn(...e)),["prevent"])),class:"signupForm",ref:"form",action:"https://oceandemo.herokuapp.com/MySpringBoot/addUser",method:"post",enctype:"multipart/form-data"},[v,y,(0,n._)("input",b,null,512),f,(0,n._)("div",g,[(0,n._)("div",I,[(0,n._)("input",{class:"inputText",type:l.showEye?"text":"password",placeholder:"密碼*",id:"pwd",name:"pass",ref:"pwdInput",required:""},null,8,h),(0,n._)("div",{class:"eyeBtn",onClick:a[0]||(a[0]=e=>l.showEye=!l.showEye)},[l.showEye?((0,n.wg)(),(0,n.iD)("img",_)):((0,n.wg)(),(0,n.iD)("img",w))])])]),(0,n._)("div",x,[(0,n._)("input",k,null,512),H]),(0,n._)("div",B,[(0,n._)("input",D,null,512),E]),(0,n._)("select",q,U,512),F,(0,n._)("div",L,[(0,n.wy)((0,n._)("select",{name:"country",class:"county",ref:"countyInput",id:"county","onUpdate:modelValue":a[1]||(a[1]=e=>l.select.data[0].city=e),required:""},[A,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.cityNameInfo.data,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.CityName,value:e.CityName},(0,s.zw)(e.CityName),9,S)))),128))],512),[[i.bM,l.select.data[0].city]]),l.select.data[0].city?(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{key:0,name:"district",ref:"townshipInput",id:"township","onUpdate:modelValue":a[2]||(a[2]=e=>l.select.data[0].area=e),required:""},[V,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.cityNameInfo.data.find((e=>e.CityName===l.select.data[0].city)).AreaList,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.AreaName,value:e.AreaName},(0,s.zw)(e.AreaName),9,Y)))),128))],512)),[[i.bM,l.select.data[0].area]]):(0,n.kq)("",!0)]),(0,n._)("input",j,null,512),(0,n._)("div",z,[(0,n._)("input",K,null,512),O]),P,(0,n._)("span",null,[(0,n.Uk)("已經是會員了? "),(0,n.Wm)(u,{to:"/member/login"},{default:(0,n.w5)((()=>[(0,n.Uk)("立即登入")])),_:1})])],544)])])}t(7658);var Z=t(4311),W=t(2483),G=t(1662),J=t(4870),Q={setup(){const e=(0,J.iH)(!1),a=(0,J.iH)(!1),t=(0,W.tv)(),i=(0,J.qj)({data:G}),s=(0,J.qj)({data:[{city:"",area:""}]}),l=(0,J.iH)(null),o=(0,J.iH)(null),c=(0,J.iH)(null),u=(0,J.iH)(null),p=(0,J.iH)(null),d=(0,J.iH)(null),r=(0,J.iH)(null),m=(0,J.iH)(null),v=(0,J.iH)(null),y=(0,J.iH)(null),b=(0,J.iH)(null),f=e=>{if(b.value.reportValidity()){const e=$("#email").val(),a=$("#pwd").val(),n=$("#date").val(),i=$("#name").val(),s=$("#sex").val(),y=$("#county").val(),b=$("#township").val(),f=$("#address").val(),g=$("input[name='sub']").is(":checked"),I=new FormData;I.append("account",e),I.append("pass",a),I.append("name",i),I.append("gender",s),I.append("birth",n),I.append("country ",y),I.append("district",b),I.append("road",f),I.append("sub",g);const h="https://oceandemo.herokuapp.com/MySpringBoot/addUser";Z.Z.post(h,I).then((function(e){"註冊成功"===e.data?(alert(e.data),t.push({path:"/member/login"}),l.value="",o.value="",c.value="",u.value="",p.value="",d.value="",r.value="",m.value="",v.value="",$("#subscription").prop("checked",!1)):alert(e.data)}))}else e.preventDefault()};return(0,n.YP)((()=>s.data[0].city),(e=>{s.data[0].area=""})),{confirmPwdInput:c,submitFn:f,nameInput:p,sexInput:d,countyInput:r,emailInput:l,pwdInput:o,form:b,townshipInput:m,addressInput:v,dayInput:u,subscriptionInput:y,cityNameInfo:i,select:s,showEye:e,showEyeConfirm:a}}},R=t(89);const X=(0,R.Z)(Q,[["render",T],["__scopeId","data-v-bc2e6a1a"]]);var ee=X},8263:function(e,a,t){e.exports=t.p+"img/closeEye.a5898d5a.svg"},4663:function(e,a,t){e.exports=t.p+"img/fbIcon01.8a81c8bf.svg"},5940:function(e,a,t){e.exports=t.p+"img/googleIcon01.8f2a4c7c.svg"},4638:function(e,a,t){e.exports=t.p+"img/lineIcon01.85e976cb.svg"},4625:function(e,a,t){e.exports=t.p+"img/openEye.d912bbbb.svg"}}]);
//# sourceMappingURL=982.b6944932.js.map