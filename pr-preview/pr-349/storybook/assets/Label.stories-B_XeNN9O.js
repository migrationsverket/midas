import{j as v}from"./jsx-runtime-DtgEGaVE.js";import{c as x}from"./clsx-B-dksMZM.js";import{$ as _}from"./Label-oUcQSHlD.js";import{e as h}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-DdXLQA3f.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";const T='"../theme/tokens.css"',s={tokens:T,"--text-primary":"light-dark(#171717, #f2f2f2)","--font-family":'"Inter", sans-serif',"--size-02":"0.875rem","--line-height-02":"1.125rem","--size-03":"1rem","--line-height-03":"1.25rem","label-01":"_label-01_sua9e_4","label-02":"_label-02_sua9e_5"},n="label",r=({children:e,className:a,variant:d="label-01",elementType:f=n,...g})=>{const y={"label-01":s["label-01"],"label-02":s["label-02"]},u={className:x(y[d],a),elementType:f||n,...g};return v.jsx(_,{...u,children:e})};try{r.displayName="Label",r.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:{value:"label-01"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"label-01"'},{value:'"label-02"'}]}},elementType:{defaultValue:{value:"label"},description:"",name:"elementType",required:!1,type:{name:"string"}}}}}catch{}const H={component:r,title:"Components/Typography/Label",tags:["autodocs"]},t={args:{variant:"label-01",children:'I am a label with the variant of "label-01"'},play:async({canvas:e,args:{children:a}})=>{h(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},l={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:e,args:{children:a}})=>{h(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
