import{j as K}from"./jsx-runtime-DtgEGaVE.js";import{c as M}from"./clsx-B-dksMZM.js";import{$ as P}from"./Heading-Bx0h7_1c.js";import{e as n}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-CeCCo7XS.js";import"./utils-DdXLQA3f.js";const Q='"../theme/tokens.css"',W="#000000",X='"Inter", sans-serif',Y="_h1_sxy68_4",Z="_h2_sxy68_5",ee="_h3_sxy68_6",ne="_h4_sxy68_7",ae="_h5_sxy68_8",se="_h6_sxy68_9",a={tokens:Q,black:W,display:X,h1:Y,h2:Z,h3:ee,h4:ne,h5:ae,h6:se},x=({children:e,className:i,isExpressive:d=!1,level:s=3,elementType:v,...G})=>{const J=v&&parseInt(v.split("h")[1]);return K.jsx(P,{level:J||s,className:M([a.h1,a.h2,a.h3,a.h4,a.h5,a.h6][s-1],i),...d&&{"data-expressive":!0},...G,children:e})};try{x.displayName="Heading",x.__docgenInfo={description:"",displayName:"Heading",props:{elementType:{defaultValue:null,description:"Override the semantic element of the component but keep the look of the level property",name:"elementType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},isExpressive:{defaultValue:{value:"false"},description:"Use the external/expressive look",name:"isExpressive",required:!1,type:{name:"boolean"}},level:{defaultValue:{value:"3"},description:"",name:"level",required:!1,type:{name:"number"}}}}}catch{}const ge={component:x,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1}},t={args:{level:1,children:"I am a regular h1 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},o={args:{...t.args,children:"I am an expressive h1 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"44px","font-weight":400})}},r={args:{level:2,children:"I am a regular h2 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},l={args:{...r.args,children:"I am an expressive h2 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"36px","font-weight":500})}},p={args:{level:3,children:"I am a regular h3 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},c={args:{level:3,children:"I am an expressive h3 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"24px","line-height":"32px","font-weight":600})}},h={args:{level:4,children:"I am an expressive h4 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},g={args:{level:5,children:"I am an expressive h5 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"24px","font-weight":600})}},m={args:{level:3,elementType:"h1",children:"I am a regular h1 element with a look of a regular h3"},play:async({canvas:e,args:{isExpressive:i,elementType:d}})=>{const s=e.getByRole("heading");n(s.nodeName.toLowerCase()).toBe(d),n(s).toHaveStyle({"font-size":i?"24px":"16px","line-height":i?"32px":"24px","font-weight":600})}};var y,u,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'I am a regular h1 element'
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var H,E,S;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Heading1.args,
    children: 'I am an expressive h1 element',
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
}`,...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var _,w,I;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'I am a regular h2 element'
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
}`,...(I=(w=r.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var B,R,z;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Heading2.args,
    children: 'I am an expressive h2 element',
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
}`,...(z=(R=l.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var k,b,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'I am a regular h3 element'
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
}`,...(T=(b=p.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var C,N,$;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'I am an expressive h3 element',
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
}`,...($=(N=c.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var j,q,L;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'I am an expressive h4 element',
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
}`,...(L=(q=h.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var V,O,U;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'I am an expressive h5 element',
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
}`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var A,D,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    level: 3,
    elementType: 'h1',
    children: 'I am a regular h1 element with a look of a regular h3'
  },
  play: async ({
    canvas,
    args: {
      isExpressive,
      elementType
    }
  }) => {
    const heading = canvas.getByRole('heading');
    expect(heading.nodeName.toLowerCase()).toBe(elementType);
    expect(heading).toHaveStyle({
      'font-size': isExpressive ? '24px' : '16px',
      'line-height': isExpressive ? '32px' : '24px',
      'font-weight': 600
    });
  }
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const me=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{m as ChangeSemanticElement,o as ExpressiveHeading1,l as ExpressiveHeading2,c as ExpressiveHeading3,h as ExpressiveHeading4,g as ExpressiveHeading5,t as Heading1,r as Heading2,p as Heading3,me as __namedExportsOrder,ge as default};
