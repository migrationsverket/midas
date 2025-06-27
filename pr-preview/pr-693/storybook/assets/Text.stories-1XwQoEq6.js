import{T as z}from"./Text-D7RmNfn4.js";import{e as t}from"./index-CqmFxPum.js";import"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Text-BGwM_jUK.js";import"./utils-BLyg3OOq.js";const _={component:z,title:"Components/Typography/Text",tags:["autodocs"],args:{isExpressive:!1}},r={args:{variant:"body-01",elementType:"p",children:'I am a paragraph with the variant of "body-01"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},s={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},o={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',isExpressive:!0},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}},i={args:{variant:"body-02",elementType:"span",children:'I am a span element with the variant of "body-02"'},play:async({canvas:e,args:{children:a,elementType:w}})=>{const p=e.getByText(a);t(p.nodeName.toLowerCase()).toBe(w),t(p).toHaveStyle({"font-size":"16px","line-height":"22px"})}},n={args:{slot:"description",children:'I am a description with the slot of "description"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}};var c,h,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var y,d,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,x,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const O=["Body01","Body02","ExpressiveBody02","Span","Description"];export{r as Body01,s as Body02,n as Description,o as ExpressiveBody02,i as Span,O as __namedExportsOrder,_ as default};
