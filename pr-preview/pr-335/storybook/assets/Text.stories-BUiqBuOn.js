import{j as k}from"./jsx-runtime-DtgEGaVE.js";import{c as z}from"./clsx-B-dksMZM.js";import{$ as H}from"./Text-CV6Bluw9.js";import{e as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-DdXLQA3f.js";const N='"../theme/tokens.css"',L="#000000",$='"Inter", sans-serif',l={tokens:N,black:L,display:$,"body-01":"_body-01_1fs0a_4","body-02":"_body-02_1fs0a_5"},d="span",c=({children:e,className:a,variant:p="body-02",isExpressive:s=!1,elementType:S=d,...E})=>{const w={"body-01":l["body-01"],"body-02":l["body-02"]},I={className:z(w[p],a),elementType:S||d,...s&&{"data-expressive":!0},...E};return k.jsx(H,{...I,children:e})};try{c.displayName="Text",c.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"body-02"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body-01"'},{value:'"body-02"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}},elementType:{defaultValue:{value:"span"},description:"",name:"elementType",required:!1,type:{name:"string"}}}}}catch{}const F={component:c,title:"Components/Typography/Text",tags:["autodocs"],args:{isExpressive:!1}},r={args:{variant:"body-01",elementType:"p",children:'I am a paragraph with the variant of "body-01"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},o={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},n={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',isExpressive:!0},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}},i={args:{variant:"body-02",elementType:"span",children:'I am a span element with the variant of "body-02"'},play:async({canvas:e,args:{children:a,elementType:p}})=>{const s=e.getByText(a);t(s.nodeName.toLowerCase()).toBe(p),t(s).toHaveStyle({"font-size":"16px","line-height":"22px"})}};var y,h,m;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,x,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var u,f,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,_,B;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(_=i.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const M=["Body01","Body02","ExpressiveBody02","Span"];export{r as Body01,o as Body02,n as ExpressiveBody02,i as Span,M as __namedExportsOrder,F as default};
