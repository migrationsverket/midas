import{j as k}from"./jsx-runtime-DtgEGaVE.js";import{c as S}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const N="_skeleton_1ddo2_11",R="_circle_1ddo2_21",V="_wave_1ddo2_26",s={skeleton:N,circle:R,wave:V},o=({variant:n="rectangular",width:x,height:i,animation:c="wave"})=>(n==="circle"&&i!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),k.jsx("div",{className:S(s.skeleton,s[n],c&&s[c]),style:{width:x,height:i}}));try{o.displayName="Skeleton",o.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangular"'}]}},animation:{defaultValue:{value:"wave"},description:"",name:"animation",required:!1,type:{name:'false | "wave"'}}}}}catch{}const A={component:o,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangular"},argTypes:{variant:{options:["rectangular","circle"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:["wave",!1],control:{type:"radio"},defaultValue:!1}}},e={args:{variant:"rectangular",width:"100px",height:"40px"}},a={args:{variant:"circle",width:"50px"}},r={args:{...e.args,animation:!1}},t={args:{...e.args,animation:"wave"}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,w,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: false
  }
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var h,_,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Rectangular.args,
    animation: 'wave'
  }
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const E=["Rectangular","Circle","NoAnimation","Wave"];export{a as Circle,r as NoAnimation,e as Rectangular,t as Wave,E as __namedExportsOrder,A as default};
