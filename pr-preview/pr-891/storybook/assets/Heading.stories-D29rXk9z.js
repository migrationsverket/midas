import{H as x}from"./Heading-CEZus3KD.js";import"./iframe-DVfi3_SF.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-CQyNRPa7.js";import"./utils-DSuW7o8J.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,S={component:x,title:"Components/Typography/Heading",tags:["autodocs"],args:{isExpressive:!1,enableMargins:!1},argTypes:{level:{control:{max:6,min:1}}}},s={args:{level:1,children:"I am a regular h1 element"},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"32px","font-weight":400,"margin-top":e?"24px":0,"margin-bottom":e?"10px":0})}},t={args:{level:1,children:"I am an expressive h1 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"36px","line-height":"48px","font-weight":400,"margin-top":e?"32px":0,"margin-bottom":e?"10px":0})}},r={args:{level:2,children:"I am a regular h2 element"},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":400,"margin-top":e?"32px":0,"margin-bottom":e?"8px":0})}},i={args:{level:2,children:"I am an expressive h2 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"26px","line-height":"34px","font-weight":500,"margin-top":e?"24px":0,"margin-bottom":e?"10px":0})}},o={args:{level:3,children:"I am a regular h3 element"},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600,"margin-top":e?"20px":0,"margin-bottom":e?"4px":0})}},g={args:{level:3,children:"I am an expressive h3 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"20px","line-height":"28px","font-weight":600,"margin-top":e?"32px":0,"margin-bottom":e?"8px":0})}},p={args:{level:4,children:"I am an expressive h4 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"18px","line-height":"26px","font-weight":600,"margin-top":e?"24px":0,"margin-bottom":e?"8px":0})}},l={args:{level:5,children:"I am an expressive h5 element",isExpressive:!0},play:async({canvas:n,args:{enableMargins:e}})=>{a(n.getByRole("heading")).toHaveStyle({"font-size":"16px","line-height":"24px","font-weight":600,"margin-top":e?"20px":0,"margin-bottom":e?"8px":0})}},m={args:{level:3,elementType:"h1",children:"I am a regular h1 element with a look of a regular h3"},play:async({canvas:n,args:{isExpressive:e,elementType:h}})=>{const c=n.getByRole("heading");a(c.nodeName.toLowerCase()).toBe(h),a(c).toHaveStyle({"font-size":e?"24px":"16px","line-height":e?"32px":"24px","font-weight":600})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const E=["Heading1","ExpressiveHeading1","Heading2","ExpressiveHeading2","Heading3","ExpressiveHeading3","ExpressiveHeading4","ExpressiveHeading5","ChangeSemanticElement"];export{m as ChangeSemanticElement,t as ExpressiveHeading1,i as ExpressiveHeading2,g as ExpressiveHeading3,p as ExpressiveHeading4,l as ExpressiveHeading5,s as Heading1,r as Heading2,o as Heading3,E as __namedExportsOrder,S as default};
