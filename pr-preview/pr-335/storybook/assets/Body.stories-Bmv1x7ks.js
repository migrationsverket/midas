import{j as o}from"./jsx-runtime-DtgEGaVE.js";import{c as T}from"./clsx-B-dksMZM.js";import{e as l}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const b='"../theme/tokens.css"',k="#000000",z='"Inter", sans-serif',H="_normal_1rs8v_4",j="_normalExternal_1rs8v_5",N="_compact_1rs8v_6",r={tokens:b,black:k,display:z,normal:H,normalExternal:j,compact:N},c=({children:e,...a})=>o.jsx(q,{...a,children:e}),q=({component:e="p",children:a,className:_,variant:B="normal",isExternal:E=!1,...p})=>{const S={normal:E?r.normalExternal:r.normal,compact:r.compact},i=T(S[B],_);return e==="span"?o.jsx("span",{className:i,...p,children:a}):o.jsx("p",{className:i,...p,children:a})};try{c.displayName="Body",c.__docgenInfo={description:"",displayName:"Body",props:{variant:{defaultValue:{value:"normal"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"compact"'}]}},component:{defaultValue:{value:"p"},description:"The semantic element of the component",name:"component",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'}]}},isExternal:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExternal",required:!1,type:{name:"boolean"}}}}}catch{}const U={component:c,title:"Components/Typography/Body",tags:["autodocs"],args:{isExternal:!1}},n={args:{variant:"normal",children:"body-02"},play:async({canvas:e,args:{children:a}})=>{l(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},t={args:{variant:"compact",children:"body-01"},play:async({canvas:e,args:{children:a}})=>{l(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},s={args:{variant:"normal",children:"Body",isExternal:!0},play:async({canvas:e,args:{children:a}})=>{l(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}};var m,d,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(d=n.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var x,u,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'normal',
    children: 'Body',
    isExternal: true
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const w=["Body02","Body01","ExpressiveBody"];export{t as Body01,n as Body02,s as ExpressiveBody,w as __namedExportsOrder,U as default};
