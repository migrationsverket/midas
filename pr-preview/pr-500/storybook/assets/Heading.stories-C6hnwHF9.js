import{H as G}from"./Heading-B5fVeRjz.js";import{e as n}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-CeCCo7XS.js";import"./utils-Dv9Ux5aE.js";const X={component:G,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1},argTypes:{level:{control:{max:6,min:1}}}},a={args:{level:1,children:"I am a regular h1 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},s={args:{level:1,children:"I am an expressive h1 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"48px","font-weight":400})}},t={args:{level:2,children:"I am a regular h2 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},r={args:{level:2,children:"I am an expressive h2 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"34px","font-weight":500})}},i={args:{level:3,children:"I am a regular h3 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},o={args:{level:3,children:"I am an expressive h3 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},l={args:{level:4,children:"I am an expressive h4 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"26px","font-weight":600})}},p={args:{level:5,children:"I am an expressive h5 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},g={args:{level:3,elementType:"h1",children:"I am a regular h1 element with a look of a regular h3"},play:async({canvas:e,args:{isExpressive:c,elementType:F}})=>{const h=e.getByRole("heading");n(h.nodeName.toLowerCase()).toBe(F),n(h).toHaveStyle({"font-size":c?"24px":"16px","line-height":c?"32px":"24px","font-weight":600})}};var m,d,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(d=a.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var x,y,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'I am an expressive h1 element',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '48px',
      'font-weight': 400
    });
  }
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var f,H,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(H=t.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var E,w,B;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'I am an expressive h2 element',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '34px',
      'font-weight': 500
    });
  }
}`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var z,I,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,C,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'I am an expressive h3 element',
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
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var L,N,_;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'I am an expressive h4 element',
    isExpressive: true
  },
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '26px',
      'font-weight': 600
    });
  }
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var O,b,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'I am an expressive h5 element',
    isExpressive: true
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
}`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var q,A,D;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Y=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{g as ChangeSemanticElement,s as ExpressiveHeading1,r as ExpressiveHeading2,o as ExpressiveHeading3,l as ExpressiveHeading4,p as ExpressiveHeading5,a as Heading1,t as Heading2,i as Heading3,Y as __namedExportsOrder,X as default};
