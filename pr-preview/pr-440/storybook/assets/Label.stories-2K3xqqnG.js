import{L as h}from"./Label-DjHNQKaV.js";import{e as c}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Label-DuUY1oNM.js";import"./utils-fGMpyvF6.js";import"./Hidden-lswqw32w.js";const w={component:h,title:"Components/Typography/Label",tags:["autodocs"]},a={args:{variant:"label-01",children:'I am a label with the variant of "label-01"'},play:async({canvas:t,args:{children:r}})=>{c(t.getByText(r)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},e={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:t,args:{children:r}})=>{c(t.getByText(r)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var l,o,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const L=["Label01","Label02"];export{a as Label01,e as Label02,L as __namedExportsOrder,w as default};
