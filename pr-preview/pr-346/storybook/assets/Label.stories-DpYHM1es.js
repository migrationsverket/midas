import{j as u}from"./jsx-runtime-DtgEGaVE.js";import{c as x}from"./clsx-B-dksMZM.js";import{$ as _}from"./Label-oUcQSHlD.js";import{e as d}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-DdXLQA3f.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";const T='"../theme/tokens.css"',L="#000000",w='"Inter", sans-serif',r={tokens:T,black:L,display:w,"label-01":"_label-01_q7ej9_4","label-02":"_label-02_q7ej9_5"},n="label",s=({children:e,className:a,variant:h="label-01",elementType:y=n,...g})=>{const f={"label-01":r["label-01"],"label-02":r["label-02"]},v={className:x(f[h],a),elementType:y||n,...g};return u.jsx(_,{...v,children:e})};try{s.displayName="Label",s.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:{value:"label-01"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label-01"'},{value:'"label-02"'}]}},elementType:{defaultValue:{value:"label"},description:"",name:"elementType",required:!1,type:{name:"string"}}}}}catch{}const H={component:s,title:"Components/Typography/Label",tags:["autodocs"]},t={args:{variant:"label-01",children:'I am a label with the variant of "label-01"'},play:async({canvas:e,args:{children:a}})=>{d(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},l={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:e,args:{children:a}})=>{d(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'label-01',
    children: 'I am a label with the variant of "label-01"'
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const $=["Label01","Label02"];export{t as Label01,l as Label02,$ as __namedExportsOrder,H as default};
