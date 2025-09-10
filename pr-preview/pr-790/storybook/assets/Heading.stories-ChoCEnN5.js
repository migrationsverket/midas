import{H as j}from"./Heading-ZwUxRJsC.js";import"./iframe-DnI-QKbS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-CAa9h1GK.js";import"./utils-jRaMmY8n.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,Q={component:j,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1},argTypes:{level:{control:{max:6,min:1}}}},a={args:{level:1,children:"I am a regular h1 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400})}},s={args:{level:1,children:"I am an expressive h1 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"48px","font-weight":400})}},t={args:{level:2,children:"I am a regular h2 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400})}},r={args:{level:2,children:"I am an expressive h2 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"34px","font-weight":500})}},i={args:{level:3,children:"I am a regular h3 element"},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},o={args:{level:3,children:"I am an expressive h3 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600})}},l={args:{level:4,children:"I am an expressive h4 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"26px","font-weight":600})}},p={args:{level:5,children:"I am an expressive h5 element",isExpressive:!0},play:async({canvas:e})=>{n(e.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600})}},g={args:{level:3,elementType:"h1",children:"I am a regular h1 element with a look of a regular h3"},play:async({canvas:e,args:{isExpressive:c,elementType:b}})=>{const h=e.getByRole("heading");n(h.nodeName.toLowerCase()).toBe(b),n(h).toHaveStyle({"font-size":c?"24px":"16px","line-height":c?"32px":"24px","font-weight":600})}};var m,d,v;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var R,z,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(z=i.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var T,_,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var O,L,k;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var N,D,K;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(D=p.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var M,U,Y;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Y=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const V=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{g as ChangeSemanticElement,s as ExpressiveHeading1,r as ExpressiveHeading2,o as ExpressiveHeading3,l as ExpressiveHeading4,p as ExpressiveHeading5,a as Heading1,t as Heading2,i as Heading3,V as __namedExportsOrder,Q as default};
