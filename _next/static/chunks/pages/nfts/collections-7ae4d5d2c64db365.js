(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8545,9910],{69918:function(n,t,e){var r=e(51522),o=e(85876);n.exports=function(n){return o(r(n))}},67993:function(n,t,e){var r=e(752),o=e(90249);n.exports=function(n,t){return n&&r(t,o(t),n)}},55906:function(n,t,e){var r=e(752),o=e(18582);n.exports=function(n,t){return n&&r(t,o(t),n)}},18874:function(n,t,e){var r=e(86571),o=e(72517),i=e(60091),c=e(67993),u=e(55906),a=e(92175),s=e(51522),l=e(7680),d=e(19987),f=e(13483),p=e(76939),h=e(70940),x=e(99917),m=e(8222),v=e(78725),Z=e(86152),b=e(73226),j=e(4714),C=e(29259),g=e(43679),w=e(90249),y=e(18582),P="[object Arguments]",A="[object Function]",L="[object Object]",S={};S[P]=S["[object Array]"]=S["[object ArrayBuffer]"]=S["[object DataView]"]=S["[object Boolean]"]=S["[object Date]"]=S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Map]"]=S["[object Number]"]=S[L]=S["[object RegExp]"]=S["[object Set]"]=S["[object String]"]=S["[object Symbol]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,S["[object Error]"]=S[A]=S["[object WeakMap]"]=!1,n.exports=function n(t,e,M,B,V,k){var I,T=1&e,H=2&e;if(M&&(I=V?M(t,B,V,k):M(t)),void 0!==I)return I;if(!C(t))return t;var F=Z(t);if(F){if(I=x(t),!T)return s(t,I)}else{var D=h(t),E=D==A||"[object GeneratorFunction]"==D;if(b(t))return a(t,T);if(D==L||D==P||E&&!V){if(I=H||E?{}:v(t),!T)return H?d(t,u(I,t)):l(t,c(I,t))}else{if(!S[D])return V?t:{};I=m(t,D,T)}}k||(k=new r);var N=k.get(t);if(N)return N;k.set(t,I),g(t)?t.forEach(function(r){I.add(n(r,e,M,r,t,k))}):j(t)&&t.forEach(function(r,o){I.set(o,n(r,e,M,o,t,k))});var O=F?void 0:(4&e?H?p:f:H?y:w)(t);return o(O||t,function(r,o){O&&(r=t[o=r]),i(I,o,n(r,e,M,o,t,k))}),I}},74511:function(n,t,e){var r=e(70940),o=e(15125);n.exports=function(n){return o(n)&&"[object Map]"==r(n)}},8109:function(n,t,e){var r=e(70940),o=e(15125);n.exports=function(n){return o(n)&&"[object Set]"==r(n)}},5809:function(n){var t=Math.floor,e=Math.random;n.exports=function(n,r){return n+t(e()*(r-n+1))}},12682:function(n,t,e){var r=e(85876),o=e(98346);n.exports=function(n){return r(o(n))}},50753:function(n,t,e){var r=e(50343);n.exports=function(n,t){return r(t,function(t){return n[t]})}},34727:function(n,t,e){var r=e(79882);n.exports=function(n,t){var e=t?r(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.byteLength)}},96058:function(n){var t=/\w*$/;n.exports=function(n){var e=new n.constructor(n.source,t.exec(n));return e.lastIndex=n.lastIndex,e}},70169:function(n,t,e){var r=e(50857),o=r?r.prototype:void 0,i=o?o.valueOf:void 0;n.exports=function(n){return i?Object(i.call(n)):{}}},7680:function(n,t,e){var r=e(752),o=e(80633);n.exports=function(n,t){return r(n,o(n),t)}},19987:function(n,t,e){var r=e(752),o=e(12680);n.exports=function(n,t){return r(n,o(n),t)}},99917:function(n){var t=Object.prototype.hasOwnProperty;n.exports=function(n){var e=n.length,r=new n.constructor(e);return e&&"string"==typeof n[0]&&t.call(n,"index")&&(r.index=n.index,r.input=n.input),r}},8222:function(n,t,e){var r=e(79882),o=e(34727),i=e(96058),c=e(70169),u=e(6190);n.exports=function(n,t,e){var a=n.constructor;switch(t){case"[object ArrayBuffer]":return r(n);case"[object Boolean]":case"[object Date]":return new a(+n);case"[object DataView]":return o(n,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(n,e);case"[object Map]":case"[object Set]":return new a;case"[object Number]":case"[object String]":return new a(n);case"[object RegExp]":return i(n);case"[object Symbol]":return c(n)}}},85876:function(n,t,e){var r=e(5809);n.exports=function(n,t){var e=-1,o=n.length,i=o-1;for(t=void 0===t?o:t;++e<t;){var c=r(e,i),u=n[c];n[c]=n[e],n[e]=u}return n.length=t,n}},9850:function(n,t,e){var r=e(18874);n.exports=function(n){return r(n,5)}},4714:function(n,t,e){var r=e(74511),o=e(47826),i=e(4146),c=i&&i.isMap,u=c?o(c):r;n.exports=u},43679:function(n,t,e){var r=e(8109),o=e(47826),i=e(4146),c=i&&i.isSet,u=c?o(c):r;n.exports=u},46152:function(n,t,e){var r=e(69918),o=e(12682),i=e(86152);n.exports=function(n){return(i(n)?r:o)(n)}},98346:function(n,t,e){var r=e(50753),o=e(90249);n.exports=function(n){return null==n?[]:r(n,o(n))}},30994:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nfts/collections",function(){return e(82267)}])},8280:function(n,t,e){"use strict";var r=e(92228),o=e(52322),i=e(3411),c=e(43435),u=e(42617);function a(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return a=function(){return n},n}var s=(0,i.ZP)(u.Z).withConfig({componentId:"sc-5ad34a86-0"})(a());t.Z=function(){return(0,o.jsx)(s,{children:(0,o.jsx)(c.Z,{})})}},82267:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return Y}});var r=e(52322),o=e(98788),i=e(70865),c=e(96670),u=e(87394),a=e(92228),s=e(45680),l=e(2784),d=e(20870),f=e(36242),p=e(87016),h=e(33080),x=e(33930),m=e(32301),v=e(77609),Z=e(80751),b=e(32030),j=e(81358),C=e(97712),g=e(94184),w=e(6649),y=e(11982),P=e(74721),A=e(78861),L=e(59696),S=e(2303),M=e(34498),B=e.n(M),V=e(21565),k=e(52774),I=e(3411),T=e(57647),H=e(8266),F=e(73921),D=e(42617),E=e(85361),N=e(8280),O=e(68365),_=e(90021);function z(){var n=(0,a.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]);return z=function(){return n},n}function R(){var n=(0,a.Z)(["\n  color: ",";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"]);return R=function(){return n},n}var U={createdAt:"createdAt",volumeBNB:"totalVolumeBNB",items:"numberTokensListed",supply:"totalSupply",lowestPrice:"lowestPrice",highestPrice:"highestPrice"},W=new Map([[U.createdAt,1],[U.volumeBNB,2],[U.items,3],[U.supply,4],[U.lowestPrice,5],[U.highestPrice,6]]),G=I.ZP.div.withConfig({componentId:"sc-dd646bf3-0"})(z()),Q=I.ZP.div.withConfig({componentId:"sc-dd646bf3-1"})(R(),function(n){return n.theme.colors.primary}),X=function(){var n=(0,F.$G)().t,t=(0,H.IZ)().data,e=(0,d.Z)().isMobile,a=(0,u.Z)((0,l.useState)(null),2),M=a[0],I=a[1],z=(0,u.Z)((0,l.useState)(1),2),R=z[0],X=z[1],Y=(0,u.Z)((0,l.useState)(1),2),$=Y[0],J=Y[1],K=(0,u.Z)((0,l.useState)(k.wO.CARD),2),q=K[0],nn=K[1],nt=(0,u.Z)((0,l.useState)(!1),2),ne=nt[0],nr=nt[1],no=(0,l.useMemo)(function(){return[{label:n("Collection"),value:U.createdAt},{label:n("Volume"),value:U.volumeBNB},{label:n("Items"),value:U.items},{label:n("Supply"),value:U.supply},{label:n("Lowest Price"),value:U.lowestPrice},{label:n("Highest Price"),value:U.highestPrice}]},[n]),ni=(0,S.Z)(t&&t.length?["collectionsWithPrice",q,M]:null,(0,o.Z)(function(){return(0,s.__generator)(this,function(n){var e;return q===k.wO.CARD&&M!==U.lowestPrice&&M!==U.highestPrice?[2,t]:[2,Promise.all(t.map((e=(0,o.Z)(function(n){var t,e,r;return(0,s.__generator)(this,function(o){switch(o.label){case 0:return[4,Promise.all([(0,V.Um)(n.address,"asc"),(0,V.Um)(n.address,"desc")])];case 1:return e=(t=u.Z.apply(void 0,[o.sent(),2]))[0],r=t[1],[2,(0,c.Z)((0,i.Z)({},n),{lowestPrice:e,highestPrice:r})]}})}),function(n){return e.apply(this,arguments)})))]})}),{keepPreviousData:!0}),nc=ni.data,nu=void 0===nc?[]:nc,na=ni.status,ns=(0,l.useCallback)(function(n){return M===n?ne?"↓":"↑":""},[ne,M]),nl=(0,l.useCallback)(function(n){X(1),I(n),nr(M!==n?n!==U.lowestPrice:!ne)},[ne,M]);(0,l.useEffect)(function(){e&&setTimeout(function(){window.scroll({top:50,left:0,behavior:"smooth"})},50)},[e,R]),(0,l.useEffect)(function(){var n=1;nu.length%9==0&&(n=0),J(Math.max(Math.floor(nu.length/9)+n,1))},[nu]);var nd=(0,l.useMemo)(function(){return B()(nu,function(n){return M===U.createdAt?n.createdAt?Date.parse(n.createdAt):null:parseFloat(n[M])},ne?"desc":"asc").filter(function(n){return!O.Z[n.address]})},[nu,M,ne]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{children:(0,r.jsx)(p.Z,{as:"h1",scale:"xxl",color:"secondary","data-test":"nft-collections-title",children:n("Collections")})}),(0,r.jsx)(D.Z,{children:na!==T.iF.Fetched?(0,r.jsx)(N.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{justifyContent:"space-between",alignItems:"center",pr:[null,null,"4px"],pl:["4px",null,"0"],mb:"8px",children:[(0,r.jsx)(x.J,{idPrefix:"clickCollection",viewMode:q,onToggle:nn}),(0,r.jsxs)(h.Z,{width:"max-content",style:{gap:"4px"},flexDirection:"column",children:[(0,r.jsx)(m.Z,{fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:600,children:n("Sort By")}),(0,r.jsx)(v.Z,{options:no,placeHolderText:n("Select"),defaultOptionIndex:W.get(M),onOptionChange:function(n){return nl(n.value)}})]})]}),q===k.wO.TABLE?(0,r.jsx)(Z.Z,{style:{overflowX:"auto"},mb:"32px",children:(0,r.jsxs)(b.Z,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)(j.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nl(U.createdAt)},children:[n("Collection"),ns(U.createdAt)]}),(0,r.jsxs)(j.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nl(U.volumeBNB)},children:[n("Volume"),ns(U.volumeBNB)]}),(0,r.jsxs)(j.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nl(U.lowestPrice)},children:[n("Lowest"),ns(U.lowestPrice)]}),(0,r.jsxs)(j.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nl(U.highestPrice)},children:[n("Highest"),ns(U.highestPrice)]}),(0,r.jsxs)(j.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nl(U.items)},children:[n("Items"),ns(U.items)]}),(0,r.jsxs)(j.Th,{textAlign:"left",style:{cursor:"pointer"},onClick:function(){return nl(U.supply)},children:[n("Supply"),ns(U.supply)]})]})}),(0,r.jsx)("tbody",{children:nd.map(function(n){var t=n.totalVolumeBNB?parseFloat(n.totalVolumeBNB).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0";return(0,r.jsxs)("tr",{"data-test":"nft-collection-row",children:[(0,r.jsx)(j.Td,{style:{cursor:"pointer",minWidth:"200px"},children:(0,r.jsx)(C.Z,{to:"".concat(E.V,"/collections/").concat(n.address),children:(0,r.jsxs)(h.Z,{alignItems:"center",children:[(0,r.jsx)(g.Z,{src:n.avatar,width:48,height:48,mr:"16px"}),n.name]})})}),(0,r.jsx)(j.Td,{children:(0,r.jsxs)(h.Z,{alignItems:"center",children:[t,(0,r.jsx)(w.Z,{ml:"8px"})]})}),(0,r.jsx)(j.Td,{children:n.lowestPrice?n.lowestPrice.toLocaleString(void 0,{maximumFractionDigits:5}):(0,r.jsx)(y.Z,{width:36,height:20})}),(0,r.jsx)(j.Td,{children:n.highestPrice?n.highestPrice.toLocaleString(void 0,{maximumFractionDigits:5}):(0,r.jsx)(y.Z,{width:36,height:20})}),(0,r.jsx)(j.Td,{children:n.numberTokensListed}),(0,r.jsx)(j.Td,{children:null==n?void 0:n.totalSupply})]},n.address)}).slice(9*(R-1),9*R)})]})}):(0,r.jsx)(P.Z,{gridGap:"16px",gridTemplateColumns:["1fr","1fr","repeat(2, 1fr)","repeat(3, 1fr)"],mb:"32px","data-test":"nft-collection-row",children:nd.slice(9*(R-1),9*R).map(function(n){return(0,r.jsx)(_.default,{bgSrc:n.banner.small,avatarSrc:n.avatar,collectionName:n.name,url:"".concat(E.V,"/collections/").concat(n.address),volume:n.totalVolumeBNB?parseFloat(n.totalVolumeBNB):0},n.address)})}),(0,r.jsxs)(G,{children:[(0,r.jsx)(Q,{onClick:function(){X(1===R?R:R-1)},children:(0,r.jsx)(A.Z,{color:1===R?"textDisabled":"primary"})}),(0,r.jsx)(m.Z,{children:n("Page %page% of %maxPage%",{page:R,maxPage:$})}),(0,r.jsx)(Q,{onClick:function(){X(R===$?R:R+1)},children:(0,r.jsx)(L.Z,{color:R===$?"textDisabled":"primary"})})]})]})})]})},Y=function(){return(0,r.jsx)(X,{})}},90021:function(n,t,e){"use strict";e.r(t);var r=e(52322),o=e(33080),i=e(32301),c=e(73921),u=e(79153),a=e(64036);t.default=function(n){var t=n.bgSrc,e=n.avatarSrc,s=n.collectionName,l=n.url,d=n.volume,f=(0,c.$G)().t;return(0,r.jsx)(a.zt,{bgSrc:t,avatarSrc:e,collectionName:s,url:l,children:(0,r.jsxs)(o.Z,{alignItems:"center",children:[(0,r.jsx)(i.Z,{fontSize:"12px",color:"textSubtle",children:f("Volume")}),(0,r.jsx)(u.Kd,{amount:d})]})})}},79704:function(n,t,e){"use strict";var r=e(70865),o=e(96670),i=e(26297),c=e(52322),u=e(5406);t.Z=function(n){var t=n.children,e=(0,i.Z)(n,["children"]);return(0,c.jsx)(u.ZP,(0,o.Z)((0,r.Z)({px:["16px","24px"],mx:"auto",maxWidth:"1200px"},e),{children:t}))}},36242:function(n,t,e){"use strict";var r=e(70865),o=e(96670),i=e(26297),c=e(92228),u=e(52322),a=e(3411),s=e(5406),l=e(79704);function d(){var n=(0,c.Z)(["\n  background: ",";\n"]);return d=function(){return n},n}function f(){var n=(0,c.Z)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  position: relative;\n"]);return f=function(){return n},n}var p=(0,a.ZP)(s.ZP).withConfig({componentId:"sc-a56468b1-0"})(d(),function(n){var t=n.theme;return n.background||t.colors.gradientBubblegum}),h=(0,a.ZP)(l.Z).withConfig({componentId:"sc-a56468b1-1"})(f());t.Z=function(n){var t=n.background,e=n.children,c=(0,i.Z)(n,["background","children"]);return(0,u.jsx)(p,(0,o.Z)((0,r.Z)({background:t},c),{children:(0,u.jsx)(h,{children:e})}))}},77609:function(n,t,e){"use strict";var r=e(70865),o=e(96670),i=e(26297),c=e(87394),u=e(92228),a=e(52322),s=e(2784),l=e(3411),d=e(5406),f=e(54235),p=e(32301);function h(){var n=(0,u.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"]);return h=function(){return n},n}function x(){var n=(0,u.Z)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n  width: 100%;\n\n  "," {\n    min-width: 168px;\n  }\n"]);return x=function(){return n},n}function m(){var n=(0,u.Z)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "]);return m=function(){return n},n}function v(){var n=(0,u.Z)(["\n  cursor: pointer;\n  width: 100%;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n  user-select: none;\n  z-index: 20;\n\n  "," {\n    min-width: 168px;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"]);return v=function(){return n},n}function Z(){var n=(0,u.Z)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"]);return Z=function(){return n},n}function b(){var n=(0,u.Z)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"]);return b=function(){return n},n}var j=l.ZP.div.withConfig({componentId:"sc-ac4f9611-0"})(h(),function(n){return n.theme.shadows.inset},function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.colors.input}),C=l.ZP.div.withConfig({componentId:"sc-ac4f9611-1"})(x(),function(n){return n.theme.colors.input},function(n){return n.theme.zIndices.dropdown},function(n){return n.theme.mediaQueries.sm}),g=(0,l.ZP)(d.ZP).withConfig({componentId:"sc-ac4f9611-2"})(v(),function(n){return n.theme.colors.input},function(n){return n.theme.mediaQueries.sm},function(n){return n.isOpen&&(0,l.iv)(m(),j,function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.tooltip.boxShadow},C,function(n){return n.theme.colors.inputSecondary},function(n){return n.theme.tooltip.boxShadow})}),w=l.ZP.ul.withConfig({componentId:"sc-ac4f9611-3"})(Z(),function(n){return n.theme.zIndices.dropdown}),y=l.ZP.li.withConfig({componentId:"sc-ac4f9611-4"})(b(),function(n){return n.theme.colors.inputSecondary});t.Z=function(n){var t=n.options,e=n.onOptionChange,u=n.defaultOptionIndex,l=void 0===u?0:u,d=n.placeHolderText,h=(0,i.Z)(n,["options","onOptionChange","defaultOptionIndex","placeHolderText"]),x=(0,c.Z)((0,s.useState)(!1),2),m=x[0],v=x[1],Z=(0,c.Z)((0,s.useState)(!1),2),b=Z[0],P=Z[1],A=(0,c.Z)((0,s.useState)(l),2),L=A[0],S=A[1],M=function(n){v(!m),n.stopPropagation()};return(0,s.useEffect)(function(){var n=function(){v(!1)};return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}},[]),(0,s.useEffect)(function(){l&&(S(l-1),P(!0))},[l]),(0,a.jsxs)(g,(0,o.Z)((0,r.Z)({isOpen:m},h),{children:[(0,a.jsx)(j,{onClick:M,children:(0,a.jsx)(p.Z,{color:!b&&d?"text":void 0,children:!b&&d?d:t[L].label})}),(0,a.jsx)(f.Z,{color:"text",onClick:M}),(0,a.jsx)(C,{children:(0,a.jsx)(w,{children:t.map(function(n,r){return d||r!==L?(0,a.jsx)(y,{onClick:function(){S(r),v(!1),P(!0),e&&e(t[r])},children:(0,a.jsx)(p.Z,{children:n.label})},n.label):null})})})]}))}},43435:function(n,t,e){"use strict";var r=e(52322);e(2784);var o=e(5406),i=e(19372);t.Z=function(n){var t=n.size,e=void 0===t?128:t;return(0,r.jsx)(o.ZP,{width:e,height:1.197*e,position:"relative",children:(0,r.jsx)(i.Z,{width:e,height:1.197*e,src:"/images/spinner_new.gif",alt:"spinner"})})}},54235:function(n,t,e){"use strict";var r=e(70865),o=e(96670),i=e(52322);e(2784);var c=e(6816);t.Z=function(n){return(0,i.jsx)(c.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,i.jsx)("path",{d:"M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"})}))}},6649:function(n,t,e){"use strict";var r=e(70865),o=e(96670),i=e(52322);e(2784);var c=e(6816);t.Z=function(n){return(0,i.jsxs)(c.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 64 64"},n),{children:[(0,i.jsx)("path",{d:"M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z",fill:"#EB8C00"}),(0,i.jsx)("path",{d:"M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z",fill:"#FFD800"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z",fill:"#FFE971"}),(0,i.jsx)("path",{d:"M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z",fill:"#FFC700"}),(0,i.jsx)("path",{d:"M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z",fill:"#FFAF00"}),(0,i.jsx)("path",{d:"M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z",fill:"#191326"})]}))}},44665:function(n,t,e){"use strict";var r=e(70865),o=e(96670),i=e(52322);e(2784);var c=e(6816);t.Z=function(n){return(0,i.jsx)(c.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,i.jsx)("path",{d:"M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"})}))}},64940:function(n,t,e){"use strict";var r=e(70865),o=e(96670),i=e(52322);e(2784);var c=e(6816);t.Z=function(n){return(0,i.jsx)(c.Z,(0,o.Z)((0,r.Z)({viewBox:"0 0 24 24"},n),{children:(0,i.jsx)("path",{d:"M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"})}))}},81358:function(n,t,e){"use strict";e.d(t,{Td:function(){return a},Th:function(){return s}});var r=e(92228),o=e(3411),i=e(78545);function c(){var n=(0,r.Z)(["\n  border-bottom: 1px solid ",";\n  color: ",";\n  padding: 16px;\n  vertical-align: middle;\n\n  ","\n"]);return c=function(){return n},n}function u(){var n=(0,r.Z)(["\n  color: ",";\n  font-size: 12px;\n  text-transform: uppercase;\n"]);return u=function(){return n},n}var a=o.ZP.td.withConfig({componentId:"sc-ea0e7240-0"})(c(),function(n){return n.theme.colors.cardBorder},function(n){return n.theme.colors.text},i.cp),s=(0,o.ZP)(a).attrs({as:"th"}).withConfig({componentId:"sc-ea0e7240-1"})(u(),function(n){return n.theme.colors.secondary})},32030:function(n,t,e){"use strict";var r=e(92228),o=e(3411),i=e(78545),c=e(81358);function u(){var n=(0,r.Z)(["\n  max-width: 100%;\n  width: 100%;\n\n  tbody tr:last-child {\n    "," {\n      border-bottom: 0;\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var a=o.ZP.table.withConfig({componentId:"sc-4fe367f7-0"})(u(),c.Td,i.Dh);t.Z=a},33930:function(n,t,e){"use strict";e.d(t,{J:function(){return h},w:function(){return o}});var r,o,i=e(92228),c=e(52322),u=e(2784),a=e(3411),s=e(79221),l=e(44665),d=e(64940);function f(){var n=(0,i.Z)(["\n  margin-left: -8px;\n\n  "," {\n    margin-left: 0;\n  }\n"]);return f=function(){return n},n}(r=o||(o={})).TABLE="TABLE",r.CARD="CARD";var p=a.ZP.div.withConfig({componentId:"sc-5fc869e8-0"})(f(),function(n){return n.theme.mediaQueries.sm}),h=function(n){var t=n.idPrefix,e=n.viewMode,r=n.onToggle,i=(0,u.useCallback)(function(){e!==o.CARD&&r(o.CARD)},[r,e]),a=(0,u.useCallback)(function(){e!==o.TABLE&&r(o.TABLE)},[r,e]);return(0,c.jsxs)(p,{children:[(0,c.jsx)(s.Z,{variant:"text",scale:"sm",id:"".concat(t,"CardView"),onClick:i,children:(0,c.jsx)(l.Z,{color:e===o.CARD?"primary":"textDisabled"})}),(0,c.jsx)(s.Z,{variant:"text",scale:"sm",id:"".concat(t,"TableView"),onClick:a,children:(0,c.jsx)(d.Z,{color:e===o.TABLE?"primary":"textDisabled"})})]})}}},function(n){n.O(0,[4184,8911,4036,9774,2888,179],function(){return n(n.s=30994)}),_N_E=n.O()}]);
//# sourceMappingURL=collections-7ae4d5d2c64db365.js.map