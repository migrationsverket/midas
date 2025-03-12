import{j as f}from"./jsx-runtime-DtgEGaVE.js";import{c as u}from"./clsx-B-dksMZM.js";import{$ as v}from"./Label-oUcQSHlD.js";import{e as b}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-DdXLQA3f.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";const x='"../theme/tokens.css"',_="#000000",L='"Inter", sans-serif',n={tokens:x,black:_,display:L,"label-01":"_label-01_q7ej9_4","label-02":"_label-02_q7ej9_5"},s=({children:e,className:a,variant:d="label-01",...h})=>{const y={"label-01":n["label-01"],"label-02":n["label-02"]},g={className:u(y[d],a),...h};return f.jsx(v,{...g,children:e})};try{s.displayName="Label",s.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:{value:"label-01"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label-01"'},{value:'"label-02"'}]}},elementType:{defaultValue:null,description:"",name:"elementType",required:!1,type:{name:"string"}}}}}catch{}const H={component:s,title:"Components/Typography/Label",tags:["autodocs"],args:{variant:"label-01",children:'I am a label with the variant of "label-01"'}},t={play:async({canvas:e,args:{children:a}})=>{b(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},l={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:e,args:{children:a}})=>{b(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,p,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'label-02',
    children: 'I am a label with the variant of "label-02"'
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
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Label01","Label02"];export{t as Label01,l as Label02,N as __namedExportsOrder,H as default};
