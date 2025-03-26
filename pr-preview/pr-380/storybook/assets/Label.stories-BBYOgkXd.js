import{L as c}from"./Label-e6qbx1P3.js";import{e as m}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Label-CkQlERdq.js";import"./utils-Cd6MiihZ.js";import"./Hidden-lswqw32w.js";import"./useIsDisabled-BANivrO7.js";import"./Form-BBmrm8bW.js";import"./Text-BkowhAon.js";import"./useFocusRing-HKeWiXpl.js";import"./index-cpIEhwLo.js";import"./useFormValidation-BWkP5gBo.js";import"./Input-CkPPhu4J.js";import"./useDateFormatter-D8oWd7cd.js";import"./context-BSqmORe6.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-C97GJsIb.js";import"./scrollIntoView-CnTD5aJz.js";import"./useField-B8c6pWIv.js";import"./getScrollParent-2-PurW9V.js";import"./useEvent-Yxrkvbn7.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./useCollator-C3PRVItH.js";import"./VisuallyHidden-I9LV86QJ.js";const J={component:c,title:"Components/Typography/Label",tags:["autodocs"]},t={args:{variant:"label-01",children:'I am a label with the variant of "label-01"'},play:async({canvas:e,args:{children:r}})=>{m(e.getByText(r)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},a={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:e,args:{children:r}})=>{m(e.getByText(r)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,s,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const K=["Label01","Label02"];export{t as Label01,a as Label02,K as __namedExportsOrder,J as default};
