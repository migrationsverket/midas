import{j as E}from"./jsx-runtime-DtgEGaVE.js";import{c as I}from"./clsx-B-dksMZM.js";import{$ as k}from"./Text-CV6Bluw9.js";import{e as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-DdXLQA3f.js";const z='"../theme/tokens.css"',H="#000000",N='"Inter", sans-serif',l={tokens:z,black:H,display:N,"body-01":"_body-01_1fs0a_4","body-02":"_body-02_1fs0a_5"},c=({children:e,className:a,variant:p="body-02",isExpressive:s=!1,..._})=>{const S={"body-01":l["body-01"],"body-02":l["body-02"]},w={className:I(S[p],a),...s&&{"data-expressive":!0},..._};return E.jsx(k,{...w,children:e})};try{c.displayName="Text",c.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"body-02"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body-01"'},{value:'"body-02"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}},elementType:{defaultValue:null,description:"",name:"elementType",required:!1,type:{name:"string"}}}}}catch{}const P={component:c,title:"Components/Typography/Text",tags:["autodocs"],args:{variant:"body-01",elementType:"p",children:'I am a paragraph with the variant of "body-01"',isExpressive:!1}},r={play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},n={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},o={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',isExpressive:!0},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}},i={args:{variant:"body-02",elementType:"span",children:'I am a span element with the variant of "body-02"'},play:async({canvas:e,args:{children:a,elementType:p}})=>{const s=e.getByText(a);t(s.nodeName.toLowerCase()).toBe(p),t(s).toHaveStyle({"font-size":"16px","line-height":"22px"})}};var d,y,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var m,x,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,u,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,T,B;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const R=["Body01","Body02","ExpressiveBody02","Span"];export{r as Body01,n as Body02,o as ExpressiveBody02,i as Span,R as __namedExportsOrder,P as default};
