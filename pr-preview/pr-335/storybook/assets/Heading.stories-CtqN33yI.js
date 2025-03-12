import{j as J}from"./jsx-runtime-DtgEGaVE.js";import{c as K}from"./clsx-B-dksMZM.js";import{$ as M}from"./Heading-Bx0h7_1c.js";import{e as n}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-CeCCo7XS.js";import"./utils-DdXLQA3f.js";const P='"../theme/tokens.css"',Q="#000000",W='"Inter", sans-serif',X="_h1_q4x26_5",Y="_h2_q4x26_7",Z="_h3_q4x26_9",ee="_h4_q4x26_11",ne="_h5_q4x26_13",ae="_h6_q4x26_15",a={tokens:P,black:Q,display:W,h1:X,h2:Y,h3:Z,h4:ee,h5:ne,h6:ae},d=({children:e,className:r,isExpressive:D=!1,level:x=3,semanticLevel:F,...G})=>J.jsx(M,{level:F||x,className:K([a.h1,a.h2,a.h3,a.h4,a.h5,a.h6][x-1],r),...D&&{"data-expressive":!0},...G,children:e});try{d.displayName="Heading",d.__docgenInfo={description:"",displayName:"Heading",props:{semanticLevel:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the level property",name:"semanticLevel",required:!1,type:{name:"number"}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}},level:{defaultValue:{value:"3"},description:"",name:"level",required:!1,type:{name:"number"}}}}}catch{}const ge={component:d,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1}},s={args:{level:1,children:"Sapindales"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},i={args:{...s.args,isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},t={args:{level:2,children:"Rutaceae"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},o={args:{...t.args,isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},l={args:{level:3,children:"Citrus"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},p={args:{level:3,children:"Citrus",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},c={args:{level:4,children:"C. reticulata",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},g={args:{level:5,children:"Clementin",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},h={args:{level:3,semanticLevel:1,children:"A h1 that looks just like a h3"},play:async({canvas:e,args:{isExpressive:r}})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":r?"24px":"16px","line-height":r?"32px":"24px","font-weight":600})}};var v,y,m;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Sapindales'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '32px',
      'font-weight': 400
    });
  }
}`,...(m=(y=s.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var u,f,H;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Heading1.args,
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '44px',
      'font-weight': 400
    });
  }
}`,...(H=(f=i.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,E,_;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'Rutaceae'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 400
    });
  }
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var R,w,z;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Heading2.args,
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '36px',
      'font-weight': 500
    });
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var B,k,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Citrus'
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var q,b,j;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'Citrus',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '24px',
      'line-height': '32px',
      'font-weight': 600
    });
  }
}`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var L,$,N;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'C. reticulata',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 600
    });
  }
}`,...(N=($=c.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var V,A,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'Clementin',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '24px',
      'font-weight': 600
    });
  }
}`,...(I=(A=g.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var O,T,U;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    level: 3,
    semanticLevel: 1,
    children: 'A h1 that looks just like a h3'
  },
  play: async ({
    canvas,
    args: {
      isExpressive
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': isExpressive ? '24px' : '16px',
      'line-height': isExpressive ? '32px' : '24px',
      'font-weight': 600
    });
  }
}`,...(U=(T=h.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const he=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{h as ChangeSemanticElement,i as ExpressiveHeading1,o as ExpressiveHeading2,p as ExpressiveHeading3,c as ExpressiveHeading4,g as ExpressiveHeading5,s as Heading1,t as Heading2,l as Heading3,he as __namedExportsOrder,ge as default};
