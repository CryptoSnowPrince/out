"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9844],{33157:function(n,e,t){t.d(e,{zn:function(){return I},JY:function(){return D},LJ:function(){return C},Z$:function(){return j},u$:function(){return A},md:function(){return _}});var r,a=t(98788),s=t(70865),o=t(96670),i=t(87394),u=t(45680),c=t(1005),d=t(47609),l=t(6391),p=t.n(l),f=t(93293),m=t(80173);t(10017);var h=t(3440),v=t.n(h),b=t(50071),y=t(81254),g=t(60242),w=t(97384),k=t(72248);function x(n,e,t,r){return B.apply(this,arguments)}function B(){return(B=(0,a.Z)(function(n,e,t,r){var a,s,o,i=arguments;return(0,u.__generator)(this,function(u){switch(u.label){case 0:a=i.length>4&&void 0!==i[4]?i[4]:"latest",s=i.length>5&&void 0!==i[5]?i[5]:"https://score.snapshot.org/api/scores",u.label=1;case 1:return u.trys.push([1,4,,5]),o={space:n,network:t,snapshot:a,strategies:e,addresses:r},[4,fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:o})})];case 2:return[4,u.sent().json()];case 3:return[2,u.sent().result.scores];case 4:return[2,Promise.reject(u.sent())];case 5:return[2]}})})).apply(this,arguments)}var T={v0:"0xc0FeBE244cE1ea66d27D23012B3D616432433F42",v1:"0x67Dfbb197602FDB9A9D305cC7A43b95fB63a0A56"},Z={name:"contract-call",params:{address:T.v0,decimals:18,methodABI:{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getIFOPoolBalancee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}}},_=function(n){return k.F_.includes(n.author.toLowerCase())},C=function(n,e){if(!n)return[];switch(e){case b.nK.COMMUNITY:return n.filter(function(n){return!_(n)});case b.nK.CORE:return n.filter(function(n){return _(n)});case b.nK.ALL:default:return n}},D=function(n,e){return n.filter(function(n){return n.state===e})},P=[{name:"cake",params:{symbol:"MDEX",address:d.d.cake.address,decimals:18,max:300}}];(0,a.Z)(function(n){var e,t;return(0,u.__generator)(this,function(r){switch(r.label){case 0:return[4,fetch(m.lO,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})];case 1:if((e=r.sent()).ok)return[3,3];return[4,e.json()];case 2:throw Error(null==(t=r.sent())?void 0:t.error_description);case 3:return[4,e.json()];case 4:return[2,r.sent()]}})});var S={v0:16300686,v1:17137653},M=new c.r("https://bsc-mainnet.nodereal.io/v1/5a516406afa140ffa546ee10af7c9b24",56),A=(r=(0,a.Z)(function(n,e,t){var r,a,c,d,l,m,h,v,b,B,_,C,D,A,I,j,E,F,L,O;return(0,u.__generator)(this,function(u){switch(u.label){case 0:if(!(t&&(t>=S.v0||t>=S.v1)))return[3,3];return a=(0,y.O9)(),c=t>=S.v1?"v1":"v0",[4,(0,g.vf)({abi:f,provider:M,calls:[{address:a,name:"getPricePerFullShare"},{address:a,params:[n],name:"userInfo"}],options:{blockTag:t}})];case 1:return l=(d=i.Z.apply(void 0,[u.sent(),2]))[0],h=(m=d[1]).shares,v=m.lockEndTime,b=m.userBoostedShare,[4,x(k.Q8,[{name:"contract-call",params:{address:T[c],decimals:18,methodABI:{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getCakeBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}}},{name:"contract-call",params:{address:T[c],decimals:18,methodABI:{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getCakeBnbLpBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}}},{name:"contract-call",params:{address:T[c],decimals:18,methodABI:{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getCakePoolBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}}},{name:"contract-call",params:{address:T[c],decimals:18,methodABI:{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getCakeVaultBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}}},{name:"contract-call",params:{address:T[c],decimals:18,args:["%{address}",e],methodABI:{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"address[]",name:"_pools",type:"address[]"}],name:"getPoolsBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}}},{name:"contract-call",params:{address:T[c],decimals:18,args:["%{address}",e],methodABI:{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"address[]",name:"_pools",type:"address[]"}],name:"getVotingPower",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}}},Z],"56",[n],t)];case 2:return _=(B=i.Z.apply(void 0,[u.sent(),7]))[0],C=B[1],D=B[2],A=B[3],I=B[4],j=B[5],E=B[6],F=null===(r=(0,w.ur)(new(p())(h.toString()),new(p())(l.toString()),18,3,new(p())(b.toString())))||void 0===r?void 0:r.cakeAsNumberBalance,L="v0"===c?{ifoPoolBalance:E[n]?E[n]:0}:{},[2,(0,o.Z)((0,s.Z)({},L),{voter:n,total:j[n]?j[n]:0,poolsBalance:I[n]?I[n]:0,cakeBalance:_[n]?_[n]:0,cakePoolBalance:D[n]?D[n]:0,cakeBnbLpBalance:C[n]?C[n]:0,cakeVaultBalance:A[n]?A[n]:0,lockedCakeBalance:Number.isFinite(F)?F:0,lockedEndTime:v?+v.toString():0})];case 3:return[4,x(k.Q8,P,"56",[n],t)];case 4:return[2,{total:(O=i.Z.apply(void 0,[u.sent(),1])[0])[n]?O[n]:0,voter:n}]}})}),function(n,e,t){return r.apply(this,arguments)}),I=function(n){return n?v()(n,function(n){return n.proposal.choices[n.choice-1]}):{}},j=function(n){return n?n.reduce(function(n,e){var t,r=parseFloat(null===(t=e.metadata)||void 0===t?void 0:t.votingPower);return r||(r=0),n+r},0):0}},80751:function(n,e,t){t.d(e,{Z:function(){return b}});var r=t(70865),a=t(96670),s=t(26297),o=t(52322);t(2784);var i=t(92228),u=t(3411),c=t(78545),d=t(26074),l=t(5406);function p(){var n=(0,i.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return p=function(){return n},n}function f(){var n=(0,i.Z)(["  \n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return f=function(){return n},n}function m(){var n=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: 0.5rem;\n  // box-shadow: 0 20px 25px -5px #000,0 8px 10px -6px #000;\n"]);return m=function(){return n},n}var h=u.ZP.div.withConfig({componentId:"sc-48a4a64d-0"})(f(),function(n){return n.theme.radii.card},function(n){var e=n.theme,t=n.isDisabled;return e.colors[t?"textDisabled":"text"]},function(n){return n.isActive&&(0,u.iv)(p(),d.DS)},c.Dh),v=(0,u.ZP)(l.ZP).withConfig({componentId:"sc-48a4a64d-1"})(m(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var e=n.theme,t=n.background;return null!=t?t:e.card.background});h.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var b=function(n){var e=n.ribbon,t=n.children,i=(n.background,(0,s.Z)(n,["ribbon","children","background"]));return(0,o.jsx)(h,(0,a.Z)((0,r.Z)({},i),{children:(0,o.jsxs)(v,{background:"hsla(0,0%,100%,.15)",hasCustomBorder:!!i.borderBackground,children:[e,t]})}))}},64170:function(n,e,t){var r=t(92228),a=t(3411),s=t(29708);function o(){var n=(0,r.Z)(["\n  // background-color: ",";\n  background: transparent;\n  border-radius: 6px;\n  box-shadow: ",";\n  // color: ",";\n  color: rgba(255, 255, 255, 1);\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  // border: 1px solid ",";\n  border: 1px solid rgba(255, 255, 255, 0.25);\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n"]);return o=function(){return n},n}var i=a.ZP.input.withConfig({componentId:"sc-47a70ceb-0"})(o(),function(n){return n.theme.colors.input},function(n){var e=n.isSuccess,t=n.isWarning,r=n.theme;return void 0!==t&&t?r.shadows.warning:void 0!==e&&e?r.shadows.success:r.shadows.inset},function(n){return n.theme.colors.text},function(n){var e=n.scale;switch(void 0===e?s.Q.MD:e){case s.Q.SM:return"32px";case s.Q.LG:return"48px";case s.Q.MD:default:return"40px"}},function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.textSubtle},function(n){return n.theme.colors.backgroundDisabled},function(n){return n.theme.colors.textDisabled});i.defaultProps={scale:s.Q.MD,isSuccess:!1,isWarning:!1},e.Z=i},29708:function(n,e,t){t.d(e,{Q:function(){return r}});var r={SM:"sm",MD:"md",LG:"lg"}}}]);
//# sourceMappingURL=9844-cce717cb6490a225.js.map