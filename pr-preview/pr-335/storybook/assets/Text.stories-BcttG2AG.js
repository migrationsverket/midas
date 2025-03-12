import{j as d}from"./jsx-runtime-DtgEGaVE.js";import{c as k}from"./clsx-B-dksMZM.js";import{e as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z='"../theme/tokens.css"',H="#000000",N='"Inter", sans-serif',y={tokens:z,black:H,display:N,"body-01":"_body-01_1fs0a_4","body-02":"_body-02_1fs0a_5"},c=({component:e="p",children:a,className:p,variant:s="body-02",isExpressive:w=!1,...E})=>{const I={"body-01":y["body-01"],"body-02":y["body-02"]},l={className:k(I[s],p),...w&&{"data-expressive":!0},...E};return e==="span"?d.jsx("span",{...l,children:a}):d.jsx("p",{...l,children:a})};try{c.displayName="Text",c.__docgenInfo={description:"",displayName:"Text",props:{variant:{defaultValue:{value:"body-02"},description:"The visual variant of the component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body-01"'},{value:'"body-02"'}]}},component:{defaultValue:{value:"p"},description:"The semantic element of the component",name:"component",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"span"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}}}}}catch{}const O={component:c,title:"Components/Typography/Text",tags:["autodocs"],args:{variant:"body-01",component:"p",children:'I am a paragraph with the variant of "body-01"',isExpressive:!1}},n={play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"20px"})}},r={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02"'},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"22px"})}},o={args:{variant:"body-02",children:'I am a paragraph with the variant of "body-02" using the expressive/external look which has a slightly increased line height',isExpressive:!0},play:async({canvas:e,args:{children:a}})=>{t(e.getByText(a)).toHaveStyle({"font-size":"16px","line-height":"24px"})}},i={args:{variant:"body-02",component:"span",children:'I am a span element with the variant of "body-02"'},play:async({canvas:e,args:{children:a,component:p}})=>{const s=e.getByText(a);t(s.nodeName.toLowerCase()).toBe(p),t(s).toHaveStyle({"font-size":"16px","line-height":"22px"})}};var h,m,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,v,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var f,b,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var _,T,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'body-02',
    component: 'span',
    children: 'I am a span element with the variant of "body-02"'
  },
  play: async ({
    canvas,
    args: {
      children,
      component
    }
  }) => {
    const span = canvas.getByText(children as string);
    expect(span.nodeName.toLowerCase()).toBe(component);
    expect(span).toHaveStyle({
      'font-size': '16px',
      'line-height': '22px'
    });
  }
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const P=["Body01","Body02","ExpressiveBody02","Span"];export{n as Body01,r as Body02,o as ExpressiveBody02,i as Span,P as __namedExportsOrder,O as default};
