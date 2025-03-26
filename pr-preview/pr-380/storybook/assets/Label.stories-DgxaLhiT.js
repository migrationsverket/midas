import{L as c}from"./Label-D7d8orDF.js";import{e as m}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Label-C7YJVz0K.js";import"./utils-fGMpyvF6.js";import"./Hidden-lswqw32w.js";import"./useIsDisabled-Cy36feIv.js";import"./Checkbox-U40LUIMq.js";import"./RSPContexts-CeCCo7XS.js";import"./Form-I0ljaAay.js";import"./Text-CLHHKsvT.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./useFormValidation-BplRM21L.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DUxalVp6.js";import"./VisuallyHidden-CIX9y9is.js";import"./Input-CMdrBSNU.js";import"./useDateFormatter-XsEnc7vv.js";import"./context-gwlhO1hg.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./FocusScope-BTvUdKNZ.js";import"./scrollIntoView-Br2KMoz-.js";import"./getScrollParent-DaqmRUg6.js";import"./useEvent-Ou8lCwV4.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./useCollator-BwOLflG5.js";const M={component:c,title:"Components/Typography/Label",tags:["autodocs"]},t={args:{variant:"label-01",children:'I am a label with the variant of "label-01"'},play:async({canvas:e,args:{children:r}})=>{m(e.getByText(r)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}},a={args:{variant:"label-02",children:'I am a label with the variant of "label-02"'},play:async({canvas:e,args:{children:r}})=>{m(e.getByText(r)).toHaveStyle({"font-size":"16px","line-height":"20px","font-weight":500})}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const N=["Label01","Label02"];export{t as Label01,a as Label02,N as __namedExportsOrder,M as default};
