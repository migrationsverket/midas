import{j as o}from"./jsx-runtime-DtgEGaVE.js";import{c as T}from"./clsx-B-dksMZM.js";import{e as p}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b='"../theme/tokens.css"',k="#000000",z='"Inter", sans-serif',H="_normal_3gu1l_15",j="_expressive_3gu1l_20",N="_compact_3gu1l_25",r={tokens:b,black:k,display:z,normal:H,expressive:j,compact:N},c=({children:e,...a})=>o.jsx(q,{...a,children:e}),q=({component:e="p",children:a,className:_,variant:B="normal",isExpressive:E=!1,...i})=>{const S={normal:E?r.expressive:r.normal,compact:r.compact},l=T(S[B],_);return e==="span"?o.jsx("span",{className:l,...i,children:a}):o.jsx("p",{className:l,...i,children:a})};try{c.displayName="Body",c.__docgenInfo={description:"",displayName:"Body",props:{variant:{defaultValue:{value:"normal"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"compact"'}]}},component:{defaultValue:{value:"p"},description:"The semantic element of the component",name:"component",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}}}}}catch{}const U={component:c,title:"Components/Typography/Body",tags:["autodocs"],args:{isExpressive:!1}},n={args:{variant:"normal",children:"body-02"},play:async({canvas:e,args:{children:a}})=>{p(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},s={args:{variant:"compact",children:"body-01"},play:async({canvas:e,args:{children:a}})=>{p(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},t={args:{variant:"normal",children:"Body",isExpressive:!0},play:async({canvas:e,args:{children:a}})=>{p(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}};var m,d,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'normal',
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
}`,...(y=(d=n.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var v,x,u;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'normal',
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
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const w=["Body02","Body01","ExpressiveBody"];export{s as Body01,n as Body02,t as ExpressiveBody,w as __namedExportsOrder,U as default};
