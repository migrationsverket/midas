import{j as x}from"./jsx-runtime-DtgEGaVE.js";import{c as S}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N='"../theme/tokens.css"',R="_skeleton_1fh0h_14",V="_circle_1fh0h_24",q="_wave_1fh0h_29",s={tokens:N,"--field-skeleton":"light-dark(#f2f2f2, #262626)","--background-inverse":"light-dark(#171717, #f2f2f2)",skeleton:R,circle:V,wave:q},o=({variant:n="rectangular",width:y,height:i,animation:c="wave"})=>(n==="circle"&&i!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),x.jsx("div",{className:S(s.skeleton,s[n],c&&s[c]),style:{width:y,height:i}}));try{o.displayName="Skeleton",o.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangular"'}]}},animation:{defaultValue:{value:"wave"},description:"",name:"animation",required:!1,type:{name:'false | "wave"'}}}}}catch{}const E={component:o,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangular"},argTypes:{variant:{options:["rectangular","circle"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:["wave",!1],control:{type:"radio"},defaultValue:!1}}},e={args:{variant:"rectangular",width:"100px",height:"40px"}},a={args:{variant:"circle",width:"50px"}},r={args:{...e.args,animation:!1}},t={args:{...e.args,animation:"wave"}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: false
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,_,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: 'wave'
  }
}`,...(k=(_=t.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const W=["Rectangular","Circle","NoAnimation","Wave"];export{a as Circle,r as NoAnimation,e as Rectangular,t as Wave,W as __namedExportsOrder,E as default};
