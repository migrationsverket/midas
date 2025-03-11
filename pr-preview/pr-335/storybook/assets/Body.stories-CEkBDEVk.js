import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{c as k}from"./clsx-B-dksMZM.js";import{e as c}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z='"../theme/tokens.css"',S="#000000",T='"Inter", sans-serif',H="_expressive_1kbfz_6",o={tokens:z,black:S,display:T,"body-01":"_body-01_1kbfz_4","body-02":"_body-02_1kbfz_5",expressive:H},i=({children:e,...s})=>r.jsx(j,{...s,children:e}),j=({component:e="p",children:s,className:f,variant:_="body-02",isExpressive:B=!1,...p})=>{const E={"body-01":o["body-01"],"body-02":B?o.expressive:o["body-02"]},d=k(E[_],f);return e==="span"?r.jsx("span",{className:d,...p,children:s}):r.jsx("p",{className:d,...p,children:s})};try{i.displayName="Body",i.__docgenInfo={description:"",displayName:"Body",props:{variant:{defaultValue:{value:"body-02"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body-01"'},{value:'"body-02"'}]}},component:{defaultValue:{value:"p"},description:"The semantic element of the component",name:"component",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}}}}}catch{}const O={component:i,title:"Components/Typography/Body",tags:["autodocs"],args:{isExpressive:!1}},n={args:{variant:"body-01",children:"body-01"},play:async({canvas:e,args:{children:s}})=>{c(e.getByText(s)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},a={args:{variant:"body-02",children:"body-02"},play:async({canvas:e,args:{children:s}})=>{c(e.getByText(s)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},t={args:{variant:"body-02",children:"Body",isExpressive:!0},play:async({canvas:e,args:{children:s}})=>{c(e.getByText(s)).toHaveStyle({"font-size":"16px","line-height":"24px"})}};var l,y,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'body-01',
    children: 'body-01'
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px'
    });
  }
}`,...(m=(y=n.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var v,x,u;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'body-02',
    children: 'body-02'
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px'
    });
  }
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'body-02',
    children: 'Body',
    isExpressive: true
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px'
    });
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const R=["Body01","Body02","ExpressiveBody"];export{n as Body01,a as Body02,t as ExpressiveBody,R as __namedExportsOrder,O as default};
