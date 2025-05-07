import{j as C}from"./jsx-runtime-DtgEGaVE.js";import{c as W}from"./clsx-B-dksMZM.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E='"../theme/tokens.css"',H="_skeleton_1fh0h_14",T="_circle_1fh0h_24",z="_wave_1fh0h_29",a={tokens:E,"--field-skeleton":"light-dark(#f2f2f2, #262626)","--background-inverse":"light-dark(#171717, #f2f2f2)",skeleton:H,circle:T,wave:z},c=({variant:o="rectangle",width:N,height:l,animation:d="wave",isAnimated:j=!0})=>(o==="circle"&&l!==void 0&&console.warn("Height is not allowed when using circle, control size with width"),C.jsx("div",{className:W(a.skeleton,a[o],d&&a[d],j&&a.wave),style:{width:N,height:l}}));try{c.displayName="Skeleton",c.__docgenInfo={description:"",displayName:"Skeleton",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"Height<string | number>"}},variant:{defaultValue:{value:"rectangle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'},{value:'"rectangular"'}]}},animation:{defaultValue:{value:"wave"},description:"@deprecated since v8.4.0 - Use 'isAnimated' instead. This will be removed in future versions.",name:"animation",required:!1,type:{name:'false | "wave"'}},isAnimated:{defaultValue:{value:"true"},description:"",name:"isAnimated",required:!1,type:{name:"boolean"}}}}}catch{}const D={component:c,title:"Components/Skeleton",tags:["autodocs"],args:{variant:"rectangle"},argTypes:{variant:{options:["circle","rectangle","rectangular"],control:{type:"radio"}},width:{type:"string"},height:{type:"string"},animation:{options:[!0,!1],control:{type:"radio"},defaultValue:!1}}},e={args:{variant:"rectangle",width:"100px",height:"40px"}},r={args:{variant:"circle",width:"50px"}},t={args:{variant:"rectangular",width:"100px",height:"40px"}},n={args:{...e.args,animation:!1}},s={args:{...e.args,isAnimated:!0}},i={args:{...e.args,animation:"wave"}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'rectangle',
    width: '100px',
    height: '40px'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    width: '50px'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,w,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '100px',
    height: '40px'
  }
}`,...(_=(w=t.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var x,y,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    animation: false
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var S,A,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    isAnimated: true
  }
}`,...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var V,b,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Rectangle.args,
    animation: 'wave'
  }
}`,...(q=(b=i.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};const F=["Rectangle","Circle","Rectangular","NoAnimation","Animation","Wave"];export{s as Animation,r as Circle,n as NoAnimation,e as Rectangle,t as Rectangular,i as Wave,F as __namedExportsOrder,D as default};
