"use strict";(()=>{var e={};e.id=5623,e.ids=[5623,660,2888],e.modules={92839:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>_,default:()=>u,getServerSideProps:()=>d,getStaticPaths:()=>g,getStaticProps:()=>x,reportWebVitals:()=>S,routeModule:()=>v,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>h,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>P});var s=r(87093),i=r(35244),o=r(1323),n=r(84003),p=r(39597),c=r(73157),l=e([p,c]);[p,c]=l.then?(await l)():l;let u=(0,o.l)(c,"default"),x=(0,o.l)(c,"getStaticProps"),g=(0,o.l)(c,"getStaticPaths"),d=(0,o.l)(c,"getServerSideProps"),_=(0,o.l)(c,"config"),S=(0,o.l)(c,"reportWebVitals"),P=(0,o.l)(c,"unstable_getStaticProps"),m=(0,o.l)(c,"unstable_getStaticPaths"),q=(0,o.l)(c,"unstable_getStaticParams"),b=(0,o.l)(c,"unstable_getServerProps"),h=(0,o.l)(c,"unstable_getServerSideProps"),v=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/pages/agency/agency-list",pathname:"/pages/agency/agency-list",bundlePath:"",filename:""},components:{App:p.default,Document:n.default},userland:c});a()}catch(e){a(e)}})},73157:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,getStaticProps:()=>getStaticProps});var s=r(20997),i=r(16689),o=r(25460),n=r(7794),p=r(87161),c=r(23777),l=r(74490),u=r(2440),x=e([n,p,c,l,u]);[n,p,c,l,u]=x.then?(await x)():x;let getStaticProps=async({locale:e})=>({props:{...await (0,o.serverSideTranslations)(e,["common"])}}),__WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{(0,u.Y)("/api/client-agent").then(e=>{t(e.data.agencyList)}).catch(e=>console.log("Error",e))},[]),(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.Z,{}),s.jsx(c.Z,{}),s.jsx(l.Z,{clientData:e,style:"list-view",listSize:2,size:3}),s.jsx(p.Z,{})]})};a()}catch(e){a(e)}})},75184:e=>{e.exports=require("@reduxjs/toolkit")},11377:e=>{e.exports=require("next-i18next")},25460:e=>{e.exports=require("next-i18next/serverSideTranslations")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},16689:e=>{e.exports=require("react")},38782:e=>{e.exports=require("react-content-loader")},66405:e=>{e.exports=require("react-dom")},99101:e=>{e.exports=require("react-feather")},32037:e=>{e.exports=require("react-range")},6022:e=>{e.exports=require("react-redux")},38096:e=>{e.exports=require("react-slick")},20997:e=>{e.exports=require("react/jsx-runtime")},99648:e=>{e.exports=import("axios")},3590:e=>{e.exports=import("react-toastify")},67269:e=>{e.exports=import("reactstrap")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[2761,9343,6859,8450,1664,9597,4003,333,1561,127,5025,172,6228,6871,7161,7794,6218,3866,8921,5769,8178,9544,4103,5119,2763,4490],()=>__webpack_exec__(92839));module.exports=r})();