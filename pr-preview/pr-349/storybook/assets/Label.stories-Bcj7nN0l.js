import{L as h}from"./Label-B_oYJlgR.js";import{e as c}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Label-BBCc9K7K.js";import"./utils-BhWkjeqE.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";const L={component:h,title:"Components/Typography/Label",tags:["autodocs"]},a={args:{variant:"label-01",children:'I am a label with the variant of "label-01"'},play:async({canvas:t,args:{children:r}})=>{c(t.getByText(r)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},e={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:t,args:{children:r}})=>{c(t.getByText(r)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var o,l,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,n,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const S=["Label01","Label02"];export{a as Label01,e as Label02,S as __namedExportsOrder,L as default};
