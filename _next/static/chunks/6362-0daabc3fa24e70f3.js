"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6362],{93645:function(e,n,o){o.d(n,{u:function(){return i}});var t={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function i(e){return e?t[e]:t.trunc}},61973:function(e,n,o){o.d(n,{Z:function(){return a}});var t=o(83946),i=o(51820),l=o(13882);function a(e,n){(0,l.Z)(2,arguments);var o=(0,t.Z)(n);return(0,i.Z)(e,1e3*o)}},69295:function(e,n,o){o.d(n,{Z:function(){return a}});var t=o(94533),i=o(13882),l=o(93645);function a(e,n,o){(0,i.Z)(2,arguments);var a=(0,t.Z)(e,n)/7;return(0,l.u)(null==o?void 0:o.roundingMethod)(a)}},784:function(e,n,o){o.d(n,{Z:function(){return a}});var t=o(84314),i=o(86559),l=["years","months","weeks","days","hours","minutes","seconds"];function a(e,n){if(arguments.length<1)throw TypeError("1 argument required, but only ".concat(arguments.length," present"));var o,a,r,s,c,d=(0,t.j)(),u=null!==(o=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:d.locale)&&void 0!==o?o:i.Z,x=null!==(r=null==n?void 0:n.format)&&void 0!==r?r:l,p=null!==(s=null==n?void 0:n.zero)&&void 0!==s&&s,h=null!==(c=null==n?void 0:n.delimiter)&&void 0!==c?c:" ";return u.formatDistance?x.reduce(function(n,o){var t="x".concat(o.replace(/(^.)/,function(e){return e.toUpperCase()})),i=e[o];return"number"==typeof i&&(p||e[o])?n.concat(u.formatDistance(t,i)):n},[]).join(h):""}},93799:function(e,n,o){o.d(n,{Z:function(){return eN}});var t=o(92228),i=o(52322),l=o(3411),a=o(517),r=o(20959),s=o(33080),c=o(91928),d=o(36242),u=o(87016),x=o(32301),p=o(70226),h=o(33930),f=o(95003),m=o(23016),j=o(19372),k=o(73921),g=o(72239),v=o(42617),Z=o(95457),y=o(49913),b=o(6391),S=o.n(b),w=o(39241),T=o(5406),B=o(57647),C=o(58959),D=o(11982),I=o(68303),P=o(40330),A=o(56521),z=o(64122),L=function(e){var n=e.pool,o=e.isLoading,t=n.sousId,l=n.stakingToken,a=n.earningToken,r=(0,k.$G)().t,s=(0,A.X_)(l.address||""),c=(0,z.iB)(s,t,a.symbol),d=c.handleApprove,u=c.pendingTx;return(0,i.jsx)(i.Fragment,{children:void 0!==o&&o?(0,i.jsx)(D.Z,{width:"100%",height:"52px"}):(0,i.jsx)(I.Z,{isLoading:u,endIcon:u?(0,i.jsx)(P.Z,{spin:!0,color:"currentColor"}):null,disabled:u,onClick:d,width:"100%",children:r("Enable")})})},K=o(98882),M=o(28335),F=K.H(M.Z),N=o(74748),W=o(913),R=N.i(W.Z),E=o(66980);function q(){var e=(0,t.Z)(["\n  display: inline;\n"]);return q=function(){return e},e}var G=(0,l.ZP)(x.Z).withConfig({componentId:"sc-461a1281-0"})(q()),H=function(e){var n=e.pool,o=e.stakedBalance,t=n.sousId,l=n.stakingToken,a=n.earningToken,r=n.poolCategory,c=n.userData,d=n.earningTokenPrice,u=n.profileRequirement,x=r===B.jh.BINANCE,p=(0,k.$G)().t,h=(null==c?void 0:c.allowance)?new(S())(c.allowance):w.HW,f=(null==c?void 0:c.stakingTokenBalance)?new(S())(c.stakingTokenBalance):w.HW,m=(null==c?void 0:c.pendingReward)?new(S())(c.pendingReward):w.HW,j=!h.gt(0)&&!x,g=o.gt(0),v=!c,Z=(0,C.f)(u),y=Z.notMeetRequired,b=Z.notMeetThreshold;return(0,i.jsx)(s.Z,{flexDirection:"column",children:(0,i.jsxs)(s.Z,{flexDirection:"column",children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(T.ZP,{display:"inline",children:[(0,i.jsx)(G,{color:"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:"".concat(a.symbol," ")}),(0,i.jsx)(G,{color:"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:p("Earned")})]}),(0,i.jsx)(R,{earnings:m,earningTokenSymbol:a.symbol,earningTokenDecimals:a.decimals,sousId:t,earningTokenPrice:d,isBnbPool:x,isLoading:v})]}),(0,i.jsxs)(T.ZP,{display:"inline",children:[(0,i.jsxs)(G,{color:g?"secondary":"textSubtle",textTransform:"uppercase",bold:!0,fontSize:"12px",children:[g?l.symbol:p("Stake")," "]}),(0,i.jsx)(G,{color:g?"textSubtle":"secondary",textTransform:"uppercase",bold:!0,fontSize:"12px",children:g?p("Staked"):"".concat(l.symbol)})]}),y||b?(0,i.jsx)(E.Q,{profileRequirement:u}):j&&!g?(0,i.jsx)(L,{pool:n,isLoading:v}):(0,i.jsx)(F,{isLoading:v,pool:n,stakingTokenBalance:f,stakedBalance:o,isBnbPool:x,isStaked:g})]})})},J=o(42188),U=o(10680),X=function(e){var n=e.pool,o=e.stakedBalance,t=e.performanceFee,l=e.showIcon;return(0,i.jsx)(J.b,{children:(0,i.jsx)(U.Z,{pool:n,stakedBalance:o,performanceFee:void 0===t?0:t,showIcon:void 0===l||l})})},$=o(91202),V=o(26303),_=o(70865),O=o(96670),Q=o(87394),Y=o(33018),ee=o(38497),en=o(98826),eo=60/o(16816).hJ*4;function et(e){var n=(0,Q.Z)((0,ee.tw)(),2),o=n[0],t=n[1],l=(0,Q.Z)((0,ee.Yi)(),2),r=l[0],s=l[1],c=(0,a.mA)().address,d=(0,en.Xh)();return(0,i.jsx)(Y.t,(0,O.Z)((0,_.Z)({},e),{stakedOnly:o,setStakedOnly:t,viewMode:r,setViewMode:s,account:c,threshHold:d>0?d+eo:0}))}var ei=o(2784),el=o(20870),ea=o(74656),er=o(32288),es=o(30289),ec=o(23222),ed=o(61736),eu=o(92169);function ex(){var e=(0,t.Z)(["\n  flex: 4.5;\n  "," {\n    flex: 1 0 120px;\n  }\n"]);return ex=function(){return e},e}var ep=(0,l.ZP)(ec.q).withConfig({componentId:"sc-efcdf2ab-0"})(ex(),function(e){return e.theme.mediaQueries.sm}),eh=function(e){var n=e.pool,o=e.account,t=(0,k.$G)().t,l=(0,el.Z)().isMobile,a=n.sousId,r=n.earningToken,c=n.poolCategory,d=n.userData,u=n.earningTokenPrice,p=(null==d?void 0:d.pendingReward)?new(S())(d.pendingReward):w.HW,h=(0,er.mW)(p,r.decimals),f=(0,er.mW)(p.multipliedBy(u),r.decimals),m=o&&p.gt(0),j=(0,er.NJ)(p,r.decimals),g=(0,er.uf)(h,3,3),v=c===B.jh.BINANCE,Z=t("%asset% Earned",{asset:r.symbol}),y=(0,Q.Z)((0,ed.Z)((0,i.jsx)(W.Z,{formattedBalance:g,fullBalance:j,earningTokenSymbol:r.symbol,earningsDollarValue:f,sousId:a,isBnbPool:v})),1)[0];return(0,i.jsx)(ep,{role:"cell",children:(0,i.jsxs)(ec.J,{children:[(0,i.jsx)(x.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:Z}),!n.userDataLoaded&&o?(0,i.jsx)(D.Z,{width:"80px",height:"16px"}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{children:(0,i.jsxs)(T.ZP,{mr:"8px",height:"32px",onClick:m?function(e){e.stopPropagation(),y()}:void 0,children:[(0,i.jsx)(eu.Z,{mt:"4px",bold:!l,fontSize:l?"14px":"16px",color:m?"primary":"textDisabled",decimals:m?5:1,value:m?h:0}),m?(0,i.jsx)(i.Fragment,{children:u>0&&(0,i.jsx)(eu.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:f,unit:" USD"})}):(0,i.jsx)(x.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},ef=o(52252);function em(){var e=(0,t.Z)(["\n  flex: 2 0 100px;\n"]);return em=function(){return e},e}var ej=(0,l.ZP)(ec.q).withConfig({componentId:"sc-3b238485-0"})(em()),ek=function(e){var n=e.stakingToken,o=e.totalStaked,t=e.totalStakedBalance,l=(0,k.$G)().t;return(0,i.jsx)(ej,{role:"cell",children:(0,i.jsxs)(ec.J,{children:[(0,i.jsx)(x.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:l("Total staked")}),o&&o.gte(0)?(0,i.jsx)(s.Z,{height:"20px",alignItems:"center",children:(0,i.jsx)(eu.Z,{fontSize:"16px",value:t,decimals:0,unit:" ".concat(n.symbol)})}):(0,i.jsx)(D.Z,{width:"80px",height:"16px"})]})})},eg=o(83770),ev=o(51147),eZ=o(97384);function ey(){var e=(0,t.Z)(["\n  flex: 2 0 100px;\n"]);return ey=function(){return e},e}var eb=(0,l.ZP)(ec.q).withConfig({componentId:"sc-645c663f-0"})(ey()),eS=function(e){var n=e.pool,o=n.sousId,t=n.totalStaked,l=n.startBlock,a=n.endBlock,r=n.isFinished,d=(0,en.je)(),u=(0,k.$G)().t,p=(0,eZ.zy)(n,d),h=p.shouldShowBlockCountdown,f=p.blocksUntilStart,m=p.blocksRemaining,j=p.hasPoolStarted,g=p.blocksToDisplay,v=h?(0,i.jsxs)(s.Z,{alignItems:"center",children:[(0,i.jsxs)(s.Z,{flex:"1.3",children:[(0,i.jsx)(eu.Z,{fontSize:"16px",value:g,decimals:0}),(0,i.jsx)(x.Z,{ml:"4px",textTransform:"lowercase",children:u("Blocks")})]}),(0,i.jsx)(s.Z,{flex:"1",children:(0,i.jsx)(c.Z,{external:!0,href:(0,ev.C)(j?a:l,"countdown"),onClick:function(e){return e.stopPropagation()},children:(0,i.jsx)(eg.Z,{ml:"4px"})})})]}):(0,i.jsx)(x.Z,{children:"-"}),Z=j&&!t.gt(0)||!d||!m&&!f;return(0,i.jsx)(eb,{role:"cell",children:(0,i.jsxs)(ec.J,{children:[(0,i.jsx)(x.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:u(j||!h?"Ends in":"Starts in")}),Z&&0!==o&&!r?(0,i.jsx)(D.Z,{width:"80px",height:"16px"}):v]})})},ew=o(28780),eT=o(50211),eB=o(76696),eC=o(50071),eD=function(e){var n=e.pool,o=e.account,t=(0,k.$G)().t,l=(0,el.Z)().isMobile,a=(0,g.eB)(n.vaultKey),r=a.userData,c=r.userShares,d=r.balance,u=d.cakeAsBigNumber,p=d.cakeAsNumberBalance,h=r.isLoading,f=c.gt(0),m=n.vaultKey&&f,j=n.stakingTokenPrice,v=n.stakingToken,Z=n.userData,y=(0,er.mW)(u.multipliedBy(j),v.decimals),b=(null==Z?void 0:Z.stakedBalance)?new(S())(Z.stakedBalance):w.HW,B=(0,er.mW)(b,v.decimals),C=(0,er.mW)(b.multipliedBy(j),v.decimals),I="".concat(n.stakingToken.symbol," ").concat(t(n.vaultKey===eC.om.CakeVault&&a.userData.locked?"Locked":"Staked")),P=o&&(b.gt(0)||m),A=n.vaultKey?h:!n.userDataLoaded;return(0,i.jsx)(ec.q,{role:"cell",flex:n.vaultKey===eC.om.CakeFlexibleSideVault?"1 0 162px":n.vaultKey!==eC.om.CakeVault||P?"2 0 100px":"1 0 120px",children:(0,i.jsxs)(ec.J,{children:[(0,i.jsx)(x.Z,{fontSize:"12px",color:"textSubtle",textAlign:"left",children:I}),A&&o?(0,i.jsx)(D.Z,{width:"80px",height:"16px"}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{children:(0,i.jsxs)(T.ZP,{mr:"8px",height:"32px",children:[(0,i.jsx)(eu.Z,{mt:"4px",bold:!l,fontSize:l?"14px":"16px",color:P?"primary":"textDisabled",decimals:P?5:1,value:P?n.vaultKey?Number.isNaN(p)?0:p:B:0}),P?(0,i.jsx)(eu.Z,{display:"inline",fontSize:"12px",color:"textSubtle",decimals:2,prefix:"~",value:n.vaultKey?y:C,unit:" USD"}):(0,i.jsx)(x.Z,{mt:"4px",fontSize:"12px",color:"textDisabled",children:"0 USD"})]})})})]})})},eI=(0,ei.memo)(function(e){var n=e.vaultKey,o=e.account,t=e.initialActivity,l=(0,el.Z)(),a=l.isLg,r=l.isXl,s=l.isXxl,c=r||s,d=(0,g.YX)(n),u=(0,g.eB)(n).totalCakeInVault,x=d.stakingToken,p=d.totalStaked,h=(0,ei.useMemo)(function(){return(0,er.mW)(u,x.decimals)},[x.decimals,u]);return(0,i.jsxs)(ea.A,{initialActivity:t,panel:(0,i.jsx)(ew.Z,{account:o,pool:d,expanded:!0}),children:[(0,i.jsx)(es.Z,{pool:d}),c&&(0,i.jsx)(eT.Z,{pool:d,account:o}),c?(0,i.jsx)(eD,{pool:d,account:o}):null,(0,i.jsx)(eB.Z,{pool:d}),(a||r||s)&&(0,i.jsx)(ek,{stakingToken:x,totalStaked:p,totalStakedBalance:h})]})}),eP=(0,ei.memo)(function(e){var n=e.sousId,o=e.account,t=e.initialActivity,l=(0,el.Z)(),a=l.isLg,r=l.isXl,s=l.isXxl,c=l.isDesktop,d=(0,g.AI)(n).pool,u=d.stakingToken,x=d.totalStaked,p=(0,ei.useMemo)(function(){return(0,er.mW)(x,u.decimals)},[u.decimals,x]);return(0,i.jsxs)(ea.A,{initialActivity:t,panel:(0,i.jsx)(ew.Z,{account:o,pool:d,expanded:!0}),children:[(0,i.jsx)(es.Z,{pool:d}),(0,i.jsx)(eh,{pool:d,account:o}),(a||r||s)&&(0,i.jsx)(ek,{stakingToken:u,totalStaked:x,totalStakedBalance:p}),(0,i.jsx)(ef.Z,{pool:d}),c&&(0,i.jsx)(eS,{pool:d})]})});function eA(){var e=(0,t.Z)(["\n  justify-content: center;\n"]);return eA=function(){return e},e}function ez(){var e=(0,t.Z)(["\n  padding-bottom: 32px;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return ez=function(){return e},e}function eL(){var e=(0,t.Z)(["\n  font-weight: 400;\n  white-space: nowrap;\n  text-decoration: underline;\n"]);return eL=function(){return e},e}var eK=(0,l.ZP)(r.Z).withConfig({componentId:"sc-1c90c2e7-0"})(eA()),eM=(0,l.ZP)(s.Z).withConfig({componentId:"sc-1c90c2e7-1"})(ez(),function(e){return e.theme.mediaQueries.md}),eF=(0,l.ZP)(c.Z).withConfig({componentId:"sc-1c90c2e7-2"})(eL()),eN=function(){var e=(0,k.$G)().t,n=(0,a.mA)().address,o=(0,g.f6)(),t=o.pools,l=o.userDataLoaded;return(0,g.l7)(),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(s.Z,{justifyContent:"space-between",flexDirection:["column",null,null,"row"],children:(0,i.jsxs)(s.Z,{flex:"1",flexDirection:"column",mr:["8px",0],children:[(0,i.jsx)(u.Z,{as:"h1",scale:"xxl",color:"secondary",mb:"24px",children:e("Syrup Pools")}),(0,i.jsx)(u.Z,{scale:"md",color:"text",children:e("Just stake some tokens to earn.")}),(0,i.jsx)(u.Z,{scale:"md",color:"text",children:e("High APR, low risk.")})]})})}),(0,i.jsx)(v.Z,{children:(0,i.jsx)(et,{pools:t,children:function(o){var t=o.chosenPools,a=o.viewMode,r=o.stakedOnly,c=o.normalizedUrlSearch,d=o.showFinishedPools;return(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsxs)(eM,{children:[(0,i.jsx)(x.Z,{fontSize:["16px",null,"20px"],color:"failure",pr:"4px",children:e("Looking for v1 CAKE syrup pools?")}),(0,i.jsxs)(eF,{href:"/migration",fontSize:["16px",null,"20px"],color:"failure",children:[e("Go to migration page"),"."]})]}),n&&!l&&r&&(0,i.jsx)(s.Z,{justifyContent:"center",mb:"4px",children:(0,i.jsx)(p.Z,{})}),a===h.w.CARD?(0,i.jsx)(eK,{children:t.map(function(o){var t,l,a,s;return o.vaultKey?(0,i.jsx)(V.Z,{pool:o,showStakedOnly:r},o.vaultKey):(0,i.jsx)(f.A,{pool:o,isStaked:Boolean(null==o?void 0:null===(t=o.userData)||void 0===t?void 0:null===(l=t.stakedBalance)||void 0===l?void 0:l.gt(0)),cardContent:n?(0,i.jsx)(H,{pool:o,stakedBalance:null==o?void 0:null===(a=o.userData)||void 0===a?void 0:a.stakedBalance}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:e("Start earning")}),(0,i.jsx)(Z.Z,{})]}),tokenPairImage:(0,i.jsx)(y.q,{primaryToken:o.earningToken,secondaryToken:o.stakingToken,width:64,height:64}),cardFooter:(0,i.jsx)($.Z,{pool:o,account:n}),aprRow:(0,i.jsx)(X,{pool:o,stakedBalance:null==o?void 0:null===(s=o.userData)||void 0===s?void 0:s.stakedBalance})},o.sousId)})}):(0,i.jsx)(m.N,{children:t.map(function(e){var o,t;return e.vaultKey?(0,i.jsx)(eI,{initialActivity:c.toLowerCase()===(null===(o=e.earningToken.symbol)||void 0===o?void 0:o.toLowerCase()),vaultKey:e.vaultKey,account:n},e.vaultKey):(0,i.jsx)(eP,{initialActivity:c.toLowerCase()===(null===(t=e.earningToken.symbol)||void 0===t?void 0:t.toLowerCase()),sousId:e.sousId,account:n},e.sousId)})}),(0,i.jsx)(j.Z,{mx:"auto",mt:"12px",src:"/images/decorations/3d-syrup-bunnies.png",alt:"Pancake illustration",width:192,height:184.5})]})}})})]})}}}]);
//# sourceMappingURL=6362-0daabc3fa24e70f3.js.map