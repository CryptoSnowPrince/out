"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6213],{26390:function(n,e,r){r.d(e,{BY:function(){return o},Bq:function(){return s},DY:function(){return f},Lb:function(){return x},MV:function(){return c},OZ:function(){return t},Rr:function(){return d},Tb:function(){return l},US:function(){return h},Vd:function(){return g},hT:function(){return u},om:function(){return a},si:function(){return b},tE:function(){return p},xy:function(){return i}});var t=2,c=52.1429,a=.0025,o=.0017,u=225e-6,i=575e-6,d=1619136e3,f=1664130827,s=86400,l=3600,b=10,h=[],p=["0x495c7f3a713870f68f8b418b355c085dfdc412c3","0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea","0xe31debd7abff90b06bca21010dd860d8701fd901","0xfc989fbb6b3024de5ca0144dc23c18a063942ac1","0xe40fc6ff5f2895b44268fd2e1a421e07f567e007","0xfd158609228b43aa380140b46fff3cdf9ad315de","0xc00af6212fcf0e6fd3143e692ccd4191dc308bea","0x205969b3ad459f7eba0dee07231a6357183d3fb6","0x0bd67d358636fd7b0597724aa4f20beedbf3073a","0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075","0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30","0x041929a760d7049edaef0db246fa76ec975e90cc","0xba098df8c6409669f5e6ec971ac02cd5982ac108","0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94","0xe99512305bf42745fae78003428dcaf662afb35d","0xbE609EAcbFca10F6E5504D39E3B113F808389056","0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e","0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b","0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653","0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b"],g=["0x72b169ad8af6c4fb53056b6a2a85602ad6863864"],x=["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","0xdac17f958d2ee523a2206206994597c13d831ec7","0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","0x993864e43caa7f7f12953ad6feb1d1ca635b875f"]},64867:function(n,e,r){r.d(e,{Dw:function(){return b},Ho:function(){return p},J5:function(){return E},OO:function(){return f},Pi:function(){return l},WR:function(){return d},YM:function(){return s},nA:function(){return g},rf:function(){return m},tO:function(){return v},z2:function(){return x}});var t,c=r(47842),a=r(80173),o=r(74958),u=r(72027),i=r(26390),d={BSC:"BNB",ETH:"ETH"},f={BSC:a.I0,ETH:a.Hs},s={BSC:i.Rr,ETH:i.DY},l={BSC:u.a_.BSC,ETH:u.a_.ETHEREUM},b=(t={},(0,c.Z)(t,u.a_.BSC,""),(0,c.Z)(t,u.a_.ETHEREUM,"/eth"),t),h={BSC:o.dQ,ETH:o.GJ},p={BSC:a.JY,ETH:a.EC},g={BSC:"BscScan",ETH:"EtherScan"},x={BSC:i.tE,ETH:i.Vd},v={BSC:i.US,ETH:i.Lb},m=function(n){return E()?o.MS:h[n]},E=function(){return window.location.href.includes("stableSwap")}},20337:function(n,e,r){r.d(e,{z:function(){return h}});var t,c=r(98788),a=r(92228),o=r(45680),u=r(6647),i=r(34498),d=r.n(i),f=r(64867),s=r(70050);function l(){var n=(0,a.Z)(["query blocks {\n    ","\n  }"]);return l=function(){return n},n}var b=function(n){return(0,u.gql)(l(),n)},h=(t=(0,c.Z)(function(n){var e,r,t,c,a,u,i,l,h,p,g,x=arguments;return(0,o.__generator)(this,function(o){switch(o.label){case 0:if(e=x.length>1&&void 0!==x[1]?x[1]:"desc",r=x.length>2&&void 0!==x[2]?x[2]:500,t=x.length>3&&void 0!==x[3]?x[3]:"BSC",(null==n?void 0:n.length)===0)return[2,[]];return[4,(0,s.L)(b,n.map(function(n){return"t".concat(n,":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(n,", timestamp_lt: ").concat(n+600," }) {\n      number\n    }")}),f.OO[t],r)];case 1:if(c=o.sent(),a=[],c){u=!0,i=!1,l=void 0;try{for(h=Object.keys(c)[Symbol.iterator]();!(u=(p=h.next()).done);u=!0)c[g=p.value].length>0&&a.push({timestamp:g.split("t")[1],number:parseInt(c[g][0].number,10)})}catch(v){i=!0,l=v}finally{try{u||null==h.return||h.return()}finally{if(i)throw l}}return[2,d()(a,function(n){return n.number},e)]}return[2,a]}})}),function(n){return t.apply(this,arguments)})},75583:function(n,e,r){var t,c=r(47842),a=r(58194),o=r(30733),u=r.n(o),i=r(72027),d=(t={},(0,c.Z)(t,i.a_.BSC,"smartchain"),(0,c.Z)(t,i.a_.ETHEREUM,"ethereum"),t),f=u()(function(n){return n&&d[n.chainId]?n.chainId==i.a_.BSC?"/images/tokens/".concat((0,a.getAddress)(n.address),".png"):"https://assets-cdn.trustwallet.com/blockchains/".concat(d[n.chainId],"/assets/").concat((0,a.getAddress)(n.address),"/logo.png"):null},function(n){return"".concat(n.chainId,"#").concat(n.address)});u()(function(n,e){return n&&e&&d[e]?"https://assets-cdn.trustwallet.com/blockchains/".concat(d[e],"/assets/").concat((0,a.getAddress)(n),"/logo.png"):null},function(n,e){return"".concat(e,"#").concat(n)}),e.Z=f},74958:function(n,e,r){r.d(e,{GJ:function(){return i},MS:function(){return d},Wt:function(){return f},dQ:function(){return u},vA:function(){return o}});var t=r(80173),c=r(6647),a=r(34406),o=function(n){if(n===t.JY)return{origin:a.env.NEXT_PUBLIC_NODE_REAL_HEADER||window.nrHeader}},u=new c.GraphQLClient(t.JY),i=new c.GraphQLClient(t.EC),d=new c.GraphQLClient(t.gr);new c.GraphQLClient(t.JY,{headers:{"X-Sf":a.env.SF_HEADER},timeout:5e3});var f=new c.GraphQLClient(t.gr,{headers:o(t.gr)});new c.GraphQLClient(t.d$,{headers:{"X-API-KEY":a.env.BIT_QUERY_HEADER},timeout:5e3})},90074:function(n,e){e.Z=function(n,e,r){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e4;return Promise.race([r?n.request(e,r):n.request(e),new Promise(function(n,e){setTimeout(function(){e(Error("Request timed out after ".concat(t," milliseconds")))},t)})])}},70050:function(n,e,r){r.d(e,{L:function(){return f}});var t,c=r(98788),a=r(70865),o=r(45680),u=r(6647),i=r(74958),d=r(90074),f=(t=(0,c.Z)(function(n,e,r){var t,c,f,s,l,b,h,p,g=arguments;return(0,o.__generator)(this,function(o){switch(o.label){case 0:t=g.length>3&&void 0!==g[3]?g[3]:1e3,c={},f=!1,s=0,l=new u.GraphQLClient(r,{headers:(0,i.vA)(r)}),o.label=1;case 1:if(o.trys.push([1,4,,5]),f)return[3,3];return b=e.length,s+t<e.length&&(b=s+t),h=e.slice(s,b),[4,(0,d.Z)(l,n(h))];case 2:return p=o.sent(),c=(0,a.Z)({},c,p),f=Object.keys(p).length<t||s+t>e.length,s+=t,[3,1];case 3:return[2,c];case 4:return console.error("Failed to fetch info data",o.sent()),[2,null];case 5:return[2]}})}),function(n,e,r){return t.apply(this,arguments)})},80751:function(n,e,r){r.d(e,{Z:function(){return x}});var t=r(70865),c=r(96670),a=r(26297),o=r(52322);r(2784);var u=r(92228),i=r(3411),d=r(78545),f=r(26074),s=r(5406);function l(){var n=(0,u.Z)(["\n      animation: "," 3s ease infinite;\n      background-size: 400% 400%;\n    "]);return l=function(){return n},n}function b(){var n=(0,u.Z)(["  \n  border-radius: ",";\n  color: ",";\n  overflow: hidden;\n  position: relative;\n\n  ","\n\n  padding: 1px 1px 3px 1px;\n\n  ","\n"]);return b=function(){return n},n}function h(){var n=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: ",";\n  background: ",";\n  border-radius: 0.5rem;\n  // box-shadow: 0 20px 25px -5px #000,0 8px 10px -6px #000;\n"]);return h=function(){return n},n}var p=i.ZP.div.withConfig({componentId:"sc-48a4a64d-0"})(b(),function(n){return n.theme.radii.card},function(n){var e=n.theme,r=n.isDisabled;return e.colors[r?"textDisabled":"text"]},function(n){return n.isActive&&(0,i.iv)(l(),f.DS)},d.Dh),g=(0,i.ZP)(s.ZP).withConfig({componentId:"sc-48a4a64d-1"})(h(),function(n){return n.hasCustomBorder?"initial":"inherit"},function(n){var e=n.theme,r=n.background;return null!=r?r:e.card.background});p.defaultProps={isActive:!1,isSuccess:!1,isWarning:!1,isDisabled:!1};var x=function(n){var e=n.ribbon,r=n.children,u=(n.background,(0,a.Z)(n,["ribbon","children","background"]));return(0,o.jsx)(p,(0,c.Z)((0,t.Z)({},u),{children:(0,o.jsxs)(g,{background:"hsla(0,0%,100%,.15)",hasCustomBorder:!!u.borderBackground,children:[e,r]})}))}},64170:function(n,e,r){var t=r(92228),c=r(3411),a=r(29708);function o(){var n=(0,t.Z)(["\n  // background-color: ",";\n  background: transparent;\n  border-radius: 6px;\n  box-shadow: ",";\n  // color: ",";\n  color: rgba(255, 255, 255, 1);\n  display: block;\n  font-size: 16px;\n  height: ",";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  // border: 1px solid ",";\n  border: 1px solid rgba(255, 255, 255, 0.25);\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    box-shadow: none;\n    color: ",";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n"]);return o=function(){return n},n}var u=c.ZP.input.withConfig({componentId:"sc-47a70ceb-0"})(o(),function(n){return n.theme.colors.input},function(n){var e=n.isSuccess,r=n.isWarning,t=n.theme;return void 0!==r&&r?t.shadows.warning:void 0!==e&&e?t.shadows.success:t.shadows.inset},function(n){return n.theme.colors.text},function(n){var e=n.scale;switch(void 0===e?a.Q.MD:e){case a.Q.SM:return"32px";case a.Q.LG:return"48px";case a.Q.MD:default:return"40px"}},function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.textSubtle},function(n){return n.theme.colors.backgroundDisabled},function(n){return n.theme.colors.textDisabled});u.defaultProps={scale:a.Q.MD,isSuccess:!1,isWarning:!1},e.Z=u},29708:function(n,e,r){r.d(e,{Q:function(){return t}});var t={SM:"sm",MD:"md",LG:"lg"}}}]);
//# sourceMappingURL=6213-e118ceb2c5c405a0.js.map