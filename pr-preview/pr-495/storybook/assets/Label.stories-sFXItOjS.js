import{L as m}from"./Label-YhzPsNci.js";import{e as c}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Label-Cr3pFc-x.js";import"./utils-Dv9Ux5aE.js";import"./Hidden-lswqw32w.js";const L={component:m,title:"Components/Typography/Label",tags:["autodocs"]},e={args:{children:"I am a label"},play:async({canvas:t,args:{children:r}})=>{c(t.getByText(r)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}},a={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:t,args:{children:r}})=>{c(t.getByText(r)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'I am a label'
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
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const w=["LabelPrimary","Label02"];export{a as Label02,e as LabelPrimary,w as __namedExportsOrder,L as default};
