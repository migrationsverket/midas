import{T as z}from"./Text-YbdszP_I.js";import{e as t}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Text-CLHHKsvT.js";import"./utils-fGMpyvF6.js";import"./useIsDisabled-Cy36feIv.js";import"./Checkbox-U40LUIMq.js";import"./RSPContexts-CeCCo7XS.js";import"./Form-I0ljaAay.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./useFormValidation-BplRM21L.js";import"./Label-C7YJVz0K.js";import"./Hidden-lswqw32w.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DUxalVp6.js";import"./VisuallyHidden-CIX9y9is.js";import"./Input-CMdrBSNU.js";import"./useDateFormatter-XsEnc7vv.js";import"./context-gwlhO1hg.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./FocusScope-BTvUdKNZ.js";import"./scrollIntoView-Br2KMoz-.js";import"./getScrollParent-DaqmRUg6.js";import"./useEvent-Ou8lCwV4.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./useCollator-BwOLflG5.js";const te={component:z,title:"Components/Typography/Text",tags:["autodocs"],args:{isExpressive:!1}},r={args:{variant:"body-01",elementType:"p",children:'I am a paragraph with the variant of "body-01"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},s={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},o={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',isExpressive:!0},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}},i={args:{variant:"body-02",elementType:"span",children:'I am a span element with the variant of "body-02"'},play:async({canvas:e,args:{children:a,elementType:w}})=>{const p=e.getByText(a);t(p.nodeName.toLowerCase()).toBe(w),t(p).toHaveStyle({"font-size":"16px","line-height":"22px"})}},n={args:{slot:"description",children:'I am a description with the slot of "description"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}};var c,h,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'body-01',
    elementType: 'p',
    children: 'I am a paragraph with the variant of "body-01"'
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '20px'
    });
  }
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var m,y,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'body-02',
    children: 'I am a paragraph with the variant of "body-02"'
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px'
    });
  }
}`,...(d=(y=s.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var g,x,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'body-02',
    children: 'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',
    isExpressive: true
  },
  play: async ({
    canvas,
    args: {
      children
    }
  }) => {
    expect(canvas.getByText(children as string)).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px'
    });
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,u,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'body-02',
    elementType: 'span',
    children: 'I am a span element with the variant of "body-02"'
  },
  play: async ({
    canvas,
    args: {
      children,
      elementType
    }
  }) => {
    const span = canvas.getByText(children as string);
    expect(span.nodeName.toLowerCase()).toBe(elementType);
    expect(span).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px'
    });
  }
}`,...(T=(u=i.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var B,S,b;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    slot: 'description',
    children: 'I am a description with the slot of "description"'
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
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const re=["Body01","Body02","ExpressiveBody02","Span","Description"];export{r as Body01,s as Body02,n as Description,o as ExpressiveBody02,i as Span,re as __namedExportsOrder,te as default};
