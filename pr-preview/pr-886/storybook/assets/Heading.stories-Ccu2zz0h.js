import{H as j}from"./Heading-LUh6eNHt.js";import"./iframe-CKi6ZPsq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-D4zpuawj.js";import"./utils-Cg1TFf_A.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,V={component:j,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1,enableMargins:!1},argTypes:{level:{control:{max:6,min:1}}}},s={args:{level:1,children:"I am a regular h1 element"},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400,"margin-top":e?"24px":0,"margin-bottom":e?"10px":0})}},t={args:{level:1,children:"I am an expressive h1 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"48px","font-weight":400,"margin-top":e?"32px":0,"margin-bottom":e?"10px":0})}},r={args:{level:2,children:"I am a regular h2 element"},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400,"margin-top":e?"32px":0,"margin-bottom":e?"8px":0})}},i={args:{level:2,children:"I am an expressive h2 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"34px","font-weight":500,"margin-top":e?"24px":0,"margin-bottom":e?"10px":0})}},o={args:{level:3,children:"I am a regular h3 element"},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600,"margin-top":e?"20px":0,"margin-bottom":e?"4px":0})}},g={args:{level:3,children:"I am an expressive h3 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600,"margin-top":e?"32px":0,"margin-bottom":e?"8px":0})}},p={args:{level:4,children:"I am an expressive h4 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"26px","font-weight":600,"margin-top":e?"24px":0,"margin-bottom":e?"8px":0})}},l={args:{level:5,children:"I am an expressive h5 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600,"margin-top":e?"20px":0,"margin-bottom":e?"8px":0})}},m={args:{level:3,elementType:"h1",children:"I am a regular h1 element with a look of a regular h3"},play:async({canvas:n,args:{isExpressive:e,elementType:Y}})=>{const c=n.getByRole("heading");a(c.nodeName.toLowerCase()).toBe(Y),a(c).toHaveStyle({"font-size":e?"24px":"16px","line-height":e?"32px":"24px","font-weight":600})}};var h,x,d;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'I am a regular h1 element'
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '32px',
      'font-weight': 400,
      'margin-top': enableMargins ? '24px' : 0,
      'margin-bottom': enableMargins ? '10px' : 0
    });
  }
}`,...(d=(x=s.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var v,y,u;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'I am an expressive h1 element',
    isExpressive: true
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '36px',
      'line-height': '48px',
      'font-weight': 400,
      'margin-top': enableMargins ? '32px' : 0,
      'margin-bottom': enableMargins ? '10px' : 0
    });
  }
}`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var f,H,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'I am a regular h2 element'
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 400,
      'margin-top': enableMargins ? '32px' : 0,
      'margin-bottom': enableMargins ? '8px' : 0
    });
  }
}`,...(b=(H=r.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var S,E,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'I am an expressive h2 element',
    isExpressive: true
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '26px',
      'line-height': '34px',
      'font-weight': 500,
      'margin-top': enableMargins ? '24px' : 0,
      'margin-bottom': enableMargins ? '10px' : 0
    });
  }
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var B,R,z;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'I am a regular h3 element'
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600,
      'margin-top': enableMargins ? '20px' : 0,
      'margin-bottom': enableMargins ? '4px' : 0
    });
  }
}`,...(z=(R=o.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var I,M,T;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: 'I am an expressive h3 element',
    isExpressive: true
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '20px',
      'line-height': '28px',
      'font-weight': 600,
      'margin-top': enableMargins ? '32px' : 0,
      'margin-bottom': enableMargins ? '8px' : 0
    });
  }
}`,...(T=(M=g.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var _,C,O;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'I am an expressive h4 element',
    isExpressive: true
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '18px',
      'line-height': '26px',
      'font-weight': 600,
      'margin-top': enableMargins ? '24px' : 0,
      'margin-bottom': enableMargins ? '8px' : 0
    });
  }
}`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var L,k,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'I am an expressive h5 element',
    isExpressive: true
  },
  play: async ({
    canvas,
    args: {
      enableMargins
    }
  }) => {
    expect(canvas.getByRole('heading')).toHaveStyle({
      'font-size': '16px',
      'line-height': '24px',
      'font-weight': 600,
      'margin-top': enableMargins ? '20px' : 0,
      'margin-bottom': enableMargins ? '8px' : 0
    });
  }
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var D,K,U;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const W=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{m as ChangeSemanticElement,t as ExpressiveHeading1,i as ExpressiveHeading2,g as ExpressiveHeading3,p as ExpressiveHeading4,l as ExpressiveHeading5,s as Heading1,r as Heading2,o as Heading3,W as __namedExportsOrder,V as default};
