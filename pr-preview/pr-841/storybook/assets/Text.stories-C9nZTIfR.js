import{T as z}from"./Text-Cc4_KUyN.js";import"./iframe-Y_DjccHQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./Text-CVVxx-WX.js";import"./utils-B69TGfDa.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,D={component:z,title:"Components/Typography/Text",tags:["autodocs"],args:{isExpressive:!1}},s={args:{variant:"body-01",elementType:"p",children:'I am a paragraph with the variant of "body-01"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},r={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},n={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',isExpressive:!0},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}},o={args:{variant:"body-02",elementType:"span",children:'I am a span element with the variant of "body-02"'},play:async({canvas:e,args:{children:a,elementType:w}})=>{const p=e.getByText(a);t(p.nodeName.toLowerCase()).toBe(w),t(p).toHaveStyle({"font-size":"16px","line-height":"22px"})}},i={args:{slot:"description",children:'I am a description with the slot of "description"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"14px","line-height":"18px","font-weight":400})}};var c,h,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var y,d,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,x,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,T,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(u=(T=o.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var B,S,b;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const L=["Body01","Body02","ExpressiveBody02","Span","Description"];export{s as Body01,r as Body02,i as Description,n as ExpressiveBody02,o as Span,L as __namedExportsOrder,D as default};
