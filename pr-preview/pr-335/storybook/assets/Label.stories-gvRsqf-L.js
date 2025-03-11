import{j as f}from"./jsx-runtime-DtgEGaVE.js";import{c as x}from"./clsx-B-dksMZM.js";import{e as d}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const v='"../theme/tokens.css"',u="#000000",_='"Inter", sans-serif',L="_normal_fth6f_9",S="_bold_fth6f_18",o={tokens:v,black:u,display:_,normal:L,bold:S},s=({children:e,className:a,variant:g="normal",...h})=>{const y={normal:o.normal,bold:o.bold},b=x(y[g],a);return f.jsx("label",{className:b,...h,children:e})};try{s.displayName="Label",s.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:{value:"normal"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'}]}}}}}catch{}const H={component:s,title:"Components/Typography/Label",tags:["autodocs"]},n={args:{variant:"bold",children:"label-02"},play:async({canvas:e,args:{children:a}})=>{d(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}},t={args:{variant:"normal",children:"label-01"},play:async({canvas:e,args:{children:a}})=>{d(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}};var r,l,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'bold',
    children: 'label-02'
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px',
      'font-weight': 500
    });
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'normal',
    children: 'label-01'
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '14px',
      'line-height': '18px',
      'font-weight': 400
    });
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Label02","Label01"];export{t as Label01,n as Label02,N as __namedExportsOrder,H as default};
