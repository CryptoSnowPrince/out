"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6839],{85875:function(n,e,r){r.d(e,{d:function(){return i}});var t=r(1246),o=r.n(t),i=function(n,e){var r=e||{notation:n>=1e4?"compact":"standard"},t=r.notation,i=r.displayThreshold,c=r.tokenPrecision,s=r.isInteger;if(0===n)return s?"0":"0.00";if(!n)return"-";if(i&&n<i)return"<".concat(i);if(n<1&&!c)return n.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];var a=2;c&&(a=n<1?3:2);var u="0.".concat("0".repeat(a),"a");"standard"===(void 0===t?n>=1e4?"compact":"standard":t)&&(u="0,0.".concat("0".repeat(a))),s&&n<1e3&&(u="0");var d=parseFloat(n.toFixed(a));return o()(d).format(u).toUpperCase()}},2869:function(n,e,r){r.d(e,{X:function(){return v},g:function(){return j}});var t=r(70865),o=r(26297),i=r(92228),c=r(52322),s=r(72027),a=r(2784),u=r(64867),d=r(3411),l=r(75583),f=r(96670),h=r(87394),p=r(27925),x=[];function m(){var n=(0,i.Z)(["\n  width: ",";\n  height: ",";\n  border-radius: ",";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  background-color: ",";\n  color: ",";\n"]);return m=function(){return n},n}function g(){var n=(0,i.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 32px;\n"]);return g=function(){return n},n}var Z=(0,d.ZP)(function(n){var e=n.src,r=n.alt,i=(0,o.Z)(n,["src","alt"]),s=(0,h.Z)((0,a.useState)(0),2)[1],u=x.includes(e);return e&&!u?(0,c.jsx)("img",(0,f.Z)((0,t.Z)({},i),{alt:r,src:e,onError:function(){e&&x.push(e),s(function(n){return n+1})}})):(0,c.jsx)(p.Z,(0,t.Z)({},i))}).withConfig({componentId:"sc-8b5b01e5-0"})(m(),function(n){return n.size},function(n){return n.size},function(n){return n.size},function(n){return n.theme.colors.background},function(n){return n.theme.colors.text}),v=function(n){var e=n.address,r=n.size,i=n.chainName,d=void 0===i?"BSC":i,f=(0,o.Z)(n,["address","size","chainName"]),h=(0,a.useMemo)(function(){return(0,l.Z)(new s.WU(u.Pi[d],e,18,""))},[e,d]);return(0,c.jsx)(Z,(0,t.Z)({size:void 0===r?"24px":r,src:h,alt:"token logo"},f))},w=d.ZP.div.withConfig({componentId:"sc-8b5b01e5-1"})(g()),j=function(n){var e=n.address0,r=n.address1,t=n.size,o=void 0===t?16:t,i=n.chainName,s=void 0===i?"BSC":i;return(0,c.jsxs)(w,{children:[e&&(0,c.jsx)(v,{address:e,size:"".concat(o.toString(),"px"),chainName:s}),r&&(0,c.jsx)(v,{address:r,size:"".concat(o.toString(),"px"),chainName:s})]})}},14279:function(n,e,r){r.d(e,{Eh:function(){return x},Ob:function(){return p},SS:function(){return m},_J:function(){return f},y6:function(){return h}});var t=r(92228),o=r(3411),i=r(32301),c=r(33080);function s(){var n=(0,t.Z)(["\n  cursor: pointer;\n"]);return s=function(){return n},n}function a(){var n=(0,t.Z)(["\n  width: 100%;\n  padding-top: 16px;\n  flex-direction: column;\n  gap: 16px;\n  background-color: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  "," {\n    border-radius: ",";\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,t.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]);return u=function(){return n},n}function d(){var n=(0,t.Z)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,t.Z)(["\n  height: 1px;\n  background-color: ",";\n  width: 100%;\n"]);return l=function(){return n},n}var f=(0,o.ZP)(i.Z).withConfig({componentId:"sc-69956645-0"})(s()),h=(0,o.ZP)(c.Z).withConfig({componentId:"sc-69956645-1"})(a(),function(n){return n.theme.card.background},function(n){return n.theme.radii[0]},function(n){return n.theme.colors.cardBorder},function(n){return n.theme.mediaQueries.md},function(n){return n.theme.radii.card}),p=o.ZP.div.withConfig({componentId:"sc-69956645-2"})(u()),x=o.ZP.div.withConfig({componentId:"sc-69956645-3"})(d(),function(n){return n.theme.colors.primary}),m=o.ZP.div.withConfig({componentId:"sc-69956645-4"})(l(),function(n){return n.theme.colors.cardBorder})},67934:function(n,e,r){var t=r(70865),o=r(96670),i=r(26297),c=r(92228),s=r(52322),a=r(3411),u=r(53419),d=r(28646),l=r(84252);function f(){var n=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return f=function(){return n},n}var h=a.ZP.div.withConfig({componentId:"sc-aaa78dec-0"})(f());e.Z=function(n){var e=n.fill,r=(0,i.Z)(n,["fill"]),c=(0,l.ZP)().theme;return(0,s.jsx)(h,(0,o.Z)((0,t.Z)({},r),{children:void 0!==e&&e?(0,s.jsx)(u.Z,{stroke:c.colors.warning,color:c.colors.warning}):(0,s.jsx)(d.Z,{stroke:c.colors.textDisabled})}))}},56513:function(n,e,r){r.d(e,{O:function(){return nw}});var t=r(52322),o=r(73921),i=r(72027),c=r(12883),s=r(517),a=r(2784),u=r(79074),d=r(5632),l=r(15112),f=r(92228),h=r(33080),p=r(5406),x=r(2572),m=r(41970),g=r(97712),Z=r(29807),v=r(32301),w=r(47241),j=r(39668),y=r(3411),b=r(87394),k=r(64170),C=r(20870),S=r(11982),L=r(92177),P=r(26390),I=r(34498),N=r.n(I),q=r(64867),$=r(98788),z=r(45680),A=r(6647);function D(){var n=(0,f.Z)(["\n  query tokens($symbol: String, $name: String, $id: ID) {\n    asSymbol: tokens(first: 10, where: { symbol_contains: $symbol }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asName: tokens(first: 10, where: { name_contains: $name }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asAddress: tokens(first: 1, where: { id: $id }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n  }\n"]);return D=function(){return n},n}function E(){var n=(0,f.Z)(["\n  query pools($tokens: [String!]!, $id: ID) {\n    as0: pairs(first: 10, where: { token0_in: $tokens }) {\n      id\n    }\n    as1: pairs(first: 10, where: { token1_in: $tokens }) {\n      id\n    }\n    asAddress: pairs(first: 1, where: { id: $id }) {\n      id\n    }\n  }\n"]);return E=function(){return n},n}var R=(0,A.gql)(D()),U=(0,A.gql)(E()),_=function(n){var e=n.flat().map(function(n){return n.id});return Array.from(new Set(e))},B=function(n){var e=(0,b.Z)((0,a.useState)({tokens:[],pools:[],loading:!1,error:!1}),2),r=e[0],t=e[1],o=n.length<P.OZ,i=(0,u.qg)();(0,a.useEffect)(function(){t({tokens:[],pools:[],loading:!o,error:!1})},[n,o]);var c=(0,q.rf)(i);(0,a.useEffect)(function(){var e,r=(e=(0,$.Z)(function(){var e,r,o,i;return(0,z.__generator)(this,function(s){switch(s.label){case 0:return s.trys.push([0,3,,4]),[4,c.request(R,{symbol:n.toUpperCase(),name:n.charAt(0).toUpperCase()+n.slice(1),id:n.toLowerCase()})];case 1:return r=_([(e=s.sent()).asAddress,e.asSymbol,e.asName]).map(function(n){return n.toLowerCase()}),[4,c.request(U,{tokens:r,id:n.toLowerCase()})];case 2:return t({tokens:r,pools:_([(o=s.sent()).asAddress,o.as0,o.as1]).map(function(n){return n.toLowerCase()}),loading:!1,error:!1}),[3,4];case 3:return i=s.sent(),console.error("Search failed for ".concat(n),i),t({tokens:[],pools:[],loading:!1,error:!0}),[3,4];case 4:return[2]}})}),function(){return e.apply(this,arguments)});o||r()},[n,o,i,R,U,c]);var s=(0,u.ZF)(r.tokens),d=(0,u.gw)(r.pools),l=s.length!==r.tokens.length||r.loading,f=d.length!==r.pools.length||r.loading;return{tokens:s,pools:d,tokensLoading:l,poolsLoading:f,error:r.error}},F=r(38497),O=r(85875),M=r(2869),G=r(67934);function V(){var n=(0,f.Z)(["\n  position: relative;\n  z-index: 30;\n  width: 100%;\n"]);return V=function(){return n},n}function H(){var n=(0,f.Z)(["\n  z-index: 9999;\n  border: 1px solid ",";\n"]);return H=function(){return n},n}function Q(){var n=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  width: 100%;\n  top: 50px;\n  max-height: 400px;\n  overflow: auto;\n  right: 0;\n  padding: 1.5rem;\n  padding-bottom: 2.5rem;\n  position: absolute;\n  background: ",";\n  border-radius: 8px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n  border: 1px solid ",";\n  margin-top: 4px;\n  "," {\n    margin-top: 0;\n    width: 500px;\n    max-height: 600px;\n  }\n  "," {\n    margin-top: 0;\n    width: 800px;\n    max-height: 600px;\n  }\n"]);return Q=function(){return n},n}function T(){var n=(0,f.Z)(["\n  position: absolute;\n  min-height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  background-color: black;\n  opacity: 0.7;\n  left: 0;\n  top: 0;\n"]);return T=function(){return n},n}function J(){var n=(0,f.Z)(["\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 1fr;\n  margin: 8px 0;\n  align-items: center;\n  "," {\n    grid-template-columns: 1.5fr repeat(3, 1fr);\n  }\n"]);return J=function(){return n},n}function W(){var n=(0,f.Z)(["\n  height: 1px;\n  background-color: ",";\n  width: 100%;\n  margin: 16px 0;\n"]);return W=function(){return n},n}function X(){var n=(0,f.Z)(["\n  color: ",";\n  display: block;\n  margin-top: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return X=function(){return n},n}function K(){var n=(0,f.Z)(["\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);return K=function(){return n},n}function Y(){var n=(0,f.Z)(["\n  width: fit-content;\n  padding: 4px 8px;\n  border-radius: 8px;\n  display: flex;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  color: ",";\n  :hover {\n    opacity: 0.6;\n    cursor: pointer;\n  }\n"]);return Y=function(){return n},n}var nn=y.ZP.div.withConfig({componentId:"sc-5aa62154-0"})(V()),ne=(0,y.ZP)(k.Z).withConfig({componentId:"sc-5aa62154-1"})(H(),function(n){return n.theme.colors.inputSecondary}),nr=y.ZP.div.withConfig({componentId:"sc-5aa62154-2"})(Q(),function(n){return n.theme.colors.background},function(n){return n.theme.colors.secondary},function(n){return n.theme.mediaQueries.sm},function(n){return n.theme.mediaQueries.md}),nt=y.ZP.div.withConfig({componentId:"sc-5aa62154-3"})(T()),no=y.ZP.div.withConfig({componentId:"sc-5aa62154-4"})(J(),function(n){return n.theme.mediaQueries.sm}),ni=y.ZP.div.withConfig({componentId:"sc-5aa62154-5"})(W(),function(n){return n.theme.colors.cardBorder}),nc=y.ZP.div.withConfig({componentId:"sc-5aa62154-6"})(X(),function(n){return n.theme.colors.secondary}),ns=y.ZP.div.withConfig({componentId:"sc-5aa62154-7"})(K()),na=y.ZP.div.withConfig({componentId:"sc-5aa62154-8"})(Y(),function(n){var e=n.theme;return n.enabled?e.colors.primary:"transparent"},function(n){var e=n.theme;return n.enabled?e.card.background:e.colors.secondary}),nu=function(n,e){return n.address.toLowerCase().includes(e.toLowerCase())||n.symbol.toLowerCase().includes(e.toLowerCase())||n.name.toLowerCase().includes(e.toLowerCase())},nd=function(){var n,e,r,i,c,s,l,f=(0,d.useRouter)(),p=(0,C.Z)(),x=p.isXs,m=p.isSm,g=(0,o.$G)().t,Z=(0,a.useRef)(null),w=(0,a.useRef)(null),j=(0,a.useRef)(null),y=(0,a.useRef)(null),k=(0,b.Z)((0,a.useState)(!1),2),I=k[0],$=k[1],z=(0,b.Z)((0,a.useState)(""),2),A=z[0],D=z[1],E=(0,L.Nr)(A,600),R=B(E),U=R.tokens,_=R.pools,V=R.tokensLoading,H=R.poolsLoading,Q=R.error,T=(0,b.Z)((0,a.useState)(3),2),J=T[0],W=T[1],X=(0,b.Z)((0,a.useState)(3),2),K=X[0],Y=X[1];(0,a.useEffect)(function(){W(3),Y(3)},[E]);var nd=function(n){var e=w.current&&w.current.contains(n.target),r=Z.current&&Z.current.contains(n.target),t=j.current&&j.current.contains(n.target),o=y.current&&y.current.contains(n.target);e||r||t||o||(Y(3),W(3),$(!1))};(0,a.useEffect)(function(){return I?(document.addEventListener("click",nd),document.querySelector("body").style.overflow="hidden"):(document.removeEventListener("click",nd),document.querySelector("body").style.overflow="visible"),function(){document.removeEventListener("click",nd)}},[I]);var nl=(0,b.Z)((0,F.z6)(),2),nf=nl[0],nh=nl[1],np=(0,b.Z)((0,F.Hx)(),2),nx=np[0],nm=np[1],ng=function(n){$(!1),Y(3),W(3),f.push(n)},nZ=(0,u.ZF)(nf),nv=(0,u.gw)(nx),nw=nv.length!==nx.length,nj=(0,b.Z)((0,a.useState)(!1),2),ny=nj[0],nb=nj[1],nk=(0,a.useMemo)(function(){return ny?nZ.filter(function(n){return nu(n,A)}):N()(U,function(n){return n.volumeUSD},"desc")},[ny,U,nZ,A]),nC=(0,a.useMemo)(function(){return ny?nv.filter(function(n){return n.address.toLowerCase().includes(A.toLowerCase())||nu(n.token0,A)||nu(n.token1,A)}):N()(_,function(n){return n.volumeUSD},"desc")},[_,ny,nv,A]),nS=(0,u.hb)(),nL=(0,u.qg)(),nP=(0,q.J5)()?"?type=stableSwap":"";return(0,t.jsxs)(t.Fragment,{children:[I?(0,t.jsx)(nt,{}):null,(0,t.jsxs)(nn,{children:[(0,t.jsx)(ne,{type:"text",value:A,onChange:function(n){D(n.target.value)},placeholder:g("Search liquidity pairs or tokens"),ref:Z,onFocus:function(){$(!0)}}),I&&(0,t.jsxs)(nr,{ref:w,children:[(0,t.jsxs)(h.Z,{mb:"16px",children:[(0,t.jsx)(na,{enabled:!ny,onClick:function(){return nb(!1)},children:g("Search")}),(0,t.jsx)(na,{enabled:ny,onClick:function(){return nb(!0)},children:g("Watchlist")})]}),Q&&(0,t.jsx)(v.Z,{color:"failure",children:g("Error occurred, please try again")}),(0,t.jsxs)(no,{children:[(0,t.jsx)(v.Z,{bold:!0,color:"secondary",children:g("Tokens")}),!x&&!m&&(0,t.jsx)(v.Z,{textAlign:"end",fontSize:"12px",children:g("Price")}),!x&&!m&&(0,t.jsx)(v.Z,{textAlign:"end",fontSize:"12px",children:g("Volume 24H")}),!x&&!m&&(0,t.jsx)(v.Z,{textAlign:"end",fontSize:"12px",children:g("Liquidity")})]}),nk.slice(0,J).map(function(n){return(0,t.jsx)(ns,{onClick:function(){return ng("/info".concat(nS,"/tokens/").concat(n.address).concat(nP))},children:(0,t.jsxs)(no,{children:[(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(M.X,{address:n.address,chainName:nL}),(0,t.jsx)(v.Z,{ml:"10px",children:(0,t.jsx)(v.Z,{children:"".concat(n.name," (").concat(n.symbol,")")})}),(0,t.jsx)(G.Z,{id:"watchlist-icon",style:{marginLeft:"8px"},fill:nf.includes(n.address),onClick:function(e){e.stopPropagation(),nh(n.address)}})]}),!x&&!m&&(0,t.jsxs)(v.Z,{textAlign:"end",children:["$",(0,O.d)(n.priceUSD)]}),!x&&!m&&(0,t.jsxs)(v.Z,{textAlign:"end",children:["$",(0,O.d)(n.volumeUSD)]}),!x&&!m&&(0,t.jsxs)(v.Z,{textAlign:"end",children:["$",(0,O.d)(n.liquidityUSD)]})]})},"searchTokenResult".concat(n.address))}),(n=0===nk.length&&!V&&E.length>=P.OZ,e=0===nk.length&&!V,r=g("No results"),(0,t.jsxs)(t.Fragment,{children:[V&&(0,t.jsx)(S.Z,{}),(ny?e:n)&&(0,t.jsx)(v.Z,{children:r}),!ny&&E.length<P.OZ&&(0,t.jsx)(v.Z,{children:g("Search liquidity pairs or tokens")})]})),(0,t.jsx)(nc,{onClick:function(){J+5<nk.length?W(J+5):W(nk.length)},ref:j,style:{display:nk.length<=J&&"none"},children:g("See more...")}),(0,t.jsx)(ni,{}),(0,t.jsxs)(no,{children:[(0,t.jsx)(v.Z,{bold:!0,color:"secondary",mb:"8px",children:g("Pairs")}),!x&&!m&&(0,t.jsx)(v.Z,{textAlign:"end",fontSize:"12px",children:g("Volume 24H")}),!x&&!m&&(0,t.jsx)(v.Z,{textAlign:"end",fontSize:"12px",children:g("Volume 7D")}),!x&&!m&&(0,t.jsx)(v.Z,{textAlign:"end",fontSize:"12px",children:g("Liquidity")})]}),nC.slice(0,K).map(function(n){return(0,t.jsx)(ns,{onClick:function(){return ng("/info".concat(nS,"/pairs/").concat(n.address).concat(nP))},children:(0,t.jsxs)(no,{children:[(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(M.g,{address0:n.token0.address,address1:n.token1.address,chainName:nL}),(0,t.jsx)(v.Z,{ml:"10px",style:{whiteSpace:"nowrap"},children:(0,t.jsx)(v.Z,{children:"".concat(n.token0.symbol," / ").concat(n.token1.symbol)})}),(0,t.jsx)(G.Z,{id:"watchlist-icon",style:{marginLeft:"10px"},fill:nx.includes(n.address),onClick:function(e){e.stopPropagation(),nm(n.address)}})]}),!x&&!m&&(0,t.jsxs)(v.Z,{textAlign:"end",children:["$",(0,O.d)(n.volumeUSD)]}),!x&&!m&&(0,t.jsxs)(v.Z,{textAlign:"end",children:["$",(0,O.d)(n.volumeUSDWeek)]}),!x&&!m&&(0,t.jsxs)(v.Z,{textAlign:"end",children:["$",(0,O.d)(n.liquidityUSD)]})]})},"searchPoolResult".concat(n.address))}),(i=ny?nw:H,c=0===nC.length&&!H&&E.length>=P.OZ,s=0===nC.length&&!i,l=g(ny?"Saved tokens will appear here":"No results"),(0,t.jsxs)(t.Fragment,{children:[i&&(0,t.jsx)(S.Z,{}),(ny?s:c)&&(0,t.jsx)(v.Z,{children:l}),!ny&&E.length<P.OZ&&(0,t.jsx)(v.Z,{children:g("Search liquidity pairs or tokens")})]})),(0,t.jsx)(nc,{onClick:function(){K+5<nC.length?Y(K+5):Y(nC.length)},ref:y,style:{display:nC.length<=K&&"none"},children:g("See more...")})]})]})]})},nl=r(64332),nf=r(47190),nh=r(32848);function np(){var n=(0,f.Z)(["\n  background: ",";\n  justify-content: space-between;\n  padding: 20px 16px;\n  flex-direction: column;\n  gap: 8px;\n  "," {\n    padding: 20px 40px;\n    flex-direction: row;\n  }\n"]);return np=function(){return n},n}var nx=(0,y.ZP)(h.Z).withConfig({componentId:"sc-5b698930-0"})(np(),function(n){return n.theme.colors.gradientCardHeader},function(n){return n.theme.mediaQueries.sm}),nm=[nh.RJ,nh.eG],ng=function(n){var e,r=n.activeIndex,i=(0,o.$G)().t,c=(0,u.qg)(),s=nl.p5.find(function(n){return n.id===q.Pi[c]}),l=null==s?void 0:null===(e=s.nativeCurrency)||void 0===e?void 0:e.symbol,f=(0,d.useRouter)(),h=(0,j.g)().switchNetworkAsync,x=(0,a.useCallback)(function(n){var e=q.Dw[n];0===r&&f.push("/info".concat(e)),1===r&&f.push("/info".concat(e,"/pairs")),2===r&&f.push("/info".concat(e,"/tokens")),h(n)},[f,r,h]);return(0,t.jsx)(Z.ZP,{alignItems:"top",ml:"8px",avatarSrc:"/images/chains/".concat(q.Pi[c],".png"),text:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.ZP,{display:["none",null,null,null,null,"block"],children:s.name}),(0,t.jsx)(p.ZP,{display:["block",null,null,null,null,"none"],children:l})]}):i("Select a Network"),recalculatePopover:!0,children:function(){return(0,t.jsx)(nZ,{chainId:q.Pi[c],switchNetwork:x})}})},nZ=function(n){var e=n.switchNetwork,r=n.chainId,i=(0,o.$G)().t;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.ZP,{px:"16px",py:"8px",children:(0,t.jsx)(v.Z,{color:"textSubtle",children:i("Select a Network")})}),(0,t.jsx)(w.v,{}),nm.map(function(n){return(0,t.jsxs)(w.l,{style:{justifyContent:"flex-start"},onClick:function(){n.id!==r&&e(n.id)},children:[(0,t.jsx)(nf.E,{chainId:n.id}),(0,t.jsx)(v.Z,{color:n.id===r?"secondary":"text",bold:n.id===r,pl:"12px",children:n.name})]},n.id)})]})},nv=function(n){var e=n.isStableSwap,r=(0,o.$G)().t,i=(0,d.useRouter)(),c=(0,u.hb)(),a=(0,s.mA)().address,l=i.pathname==="/info".concat(c&&"/[chainName]","/pairs"),f=i.pathname==="/info".concat(c&&"/[chainName]","/tokens"),Z=e?"?type=stableSwap":"",v=0;return l&&(v=1),f&&(v=2),(0,t.jsxs)(nx,{children:[(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(p.ZP,{children:(0,t.jsxs)(x.Z,{activeIndex:v,scale:"sm",variant:"subtle",children:[(0,t.jsx)(m.Z,{as:g.Z,to:"/info".concat(c).concat(Z),children:r("Overview")}),(0,t.jsx)(m.Z,{as:g.Z,to:"/info".concat(c,"/pairs").concat(Z),children:r("Pairs")}),(0,t.jsx)(m.Z,{as:g.Z,to:"/info".concat(c,"/tokens").concat(Z),children:r("Tokens")})]})}),!a&&(0,t.jsx)(ng,{activeIndex:v})]}),(0,t.jsx)(p.ZP,{width:["100%","100%","250px"],children:(0,t.jsx)(nd,{})})]})},nw=function(n){var e=n.children,r=(0,s.mA)().address,f=(0,l.g)().chainId,h=(0,d.useRouter)(),p=(0,u.qg)(),x=(0,o.$G)().t,m="stableSwap"===h.query.type;return(0,a.useEffect)(function(){r&&f===i.a_.BSC&&"eth"===h.query.chainName?h.replace("/info",void 0,{shallow:!0}):r&&f===i.a_.ETHEREUM&&"eth"!==h.query.chainName?h.replace("/info/eth",void 0,{shallow:!0}):m&&h.query.chainName&&("eth"===h.query.chainName?h.replace("/info/eth",void 0,{shallow:!0}):h.replace("/info?type=stableSwap",void 0,{shallow:!0}))},[m,f,r,p,h]),(0,t.jsxs)(t.Fragment,{children:["BSC"===p&&(0,t.jsx)(c.Z,{items:[{label:x("Swap"),href:"/info"},{label:x("StableSwap"),href:"/info?type=stableSwap"}],activeItem:m?"/info?type=stableSwap":"/info"}),(0,t.jsx)(nv,{isStableSwap:m}),e]})}},53419:function(n,e,r){var t=r(70865),o=r(96670),i=r(52322);r(2784);var c=r(6816);e.Z=function(n){return(0,i.jsx)(c.Z,(0,o.Z)((0,t.Z)({viewBox:"0 0 24 24"},n),{children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z"})}))}},28646:function(n,e,r){var t=r(70865),o=r(96670),i=r(52322);r(2784);var c=r(6816);e.Z=function(n){return(0,i.jsx)(c.Z,(0,o.Z)((0,t.Z)({viewBox:"0 0 24 24"},n),{children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z"})}))}}}]);
//# sourceMappingURL=6839-69b7553c59e50bb4.js.map