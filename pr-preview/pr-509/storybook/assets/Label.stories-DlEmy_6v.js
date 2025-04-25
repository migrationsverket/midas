import{L as d}from"./Label-CrTTl9gT.js";import{e as s}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Label-Cr3pFc-x.js";import"./utils-Dv9Ux5aE.js";import"./Hidden-lswqw32w.js";const T={component:d,title:"Components/Typography/Label",tags:["autodocs"]},t={args:{children:"I am a label."},play:async({canvas:e,args:{children:a}})=>{s(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}},r={args:{variant:"label-01",children:'I am a label with the variant of "label-01"'},play:async({canvas:e,args:{children:a}})=>{s(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},n={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:e,args:{children:a}})=>{s(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var l,o,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'I am a label.'
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,p,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,m,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const z=["LabelBase","Label01","Label02"];export{r as Label01,n as Label02,t as LabelBase,z as __namedExportsOrder,T as default};
