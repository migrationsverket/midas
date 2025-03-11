import{j as x}from"./jsx-runtime-DtgEGaVE.js";import{c as v}from"./clsx-B-dksMZM.js";import{e as m}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const u='"../theme/tokens.css"',f="#000000",_='"Inter", sans-serif',s={tokens:u,black:f,display:_,"label-01":"_label-01_q7ej9_4","label-02":"_label-02_q7ej9_5"},l=({children:e,className:a,variant:d="label-01",...g})=>{const y={"label-01":s["label-01"],"label-02":s["label-02"]},h=v(y[d],a);return x.jsx("label",{className:h,...g,children:e})};try{l.displayName="Label",l.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:{value:"label-01"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label-01"'},{value:'"label-02"'}]}}}}}catch{}const w={component:l,title:"Components/Typography/Label",tags:["autodocs"]},n={args:{variant:"label-01",children:"label-01"},play:async({canvas:e,args:{children:a}})=>{m(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},t={args:{variant:"label-02",children:"label-02"},play:async({canvas:e,args:{children:a}})=>{m(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var r,o,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'label-01',
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
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,p,b;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'label-02',
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
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const z=["Label01","Label02"];export{n as Label01,t as Label02,z as __namedExportsOrder,w as default};
