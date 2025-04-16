import{C as b}from"./Card-DwWSq3eW.js";import{e as n,u as k}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-ClJtLjXi.js";import"./Link-D1ga7JLI.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./filterDOMProps-BSfnXAP7.js";import"./usePress-DljlCKCj.js";import"./useFocusRing-CPQALXIu.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cs9agisI.js";import"./createLucideIcon-8wDOqnHv.js";const y={source:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",description:"Pineapple"},P={component:b,title:"Components/Card",tags:["autodocs"],args:{title:"Welcome to card",content:"Sometimes the default accessible name of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or icon font (which you shouldn't be using) without any text.",image:y,background:!1,link:{children:"Läs mer om Card",href:"#"},headingTag:"h2"}},e={parameters:{a11y:{test:"todo"}},play:async({canvas:g,step:h})=>{await h("It should be possible to focus the link",async()=>{const o=g.getByText("Läs mer om Card");n(o).not.toHaveFocus(),await k.tab(),n(o).toHaveFocus()})}},t={args:{background:!0},parameters:{a11y:{test:"todo"}}},a={args:{background:!0,link:{children:"Läs mer om Card",href:"#",isDisabled:!0}},parameters:{a11y:{test:"todo"}}};var s,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be possible to focus the link', async () => {
      const link = canvas.getByText('Läs mer om Card');
      expect(link).not.toHaveFocus();

      // focus the link
      await userEvent.tab();
      expect(link).toHaveFocus();
    });
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    background: true
  },
  parameters: {
    a11y: {
      test: 'todo'
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    background: true,
    link: {
      children: 'Läs mer om Card',
      href: '#',
      isDisabled: true
    }
  },
  parameters: {
    a11y: {
      test: 'todo'
    }
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const T=["Example","WithBackground","Disabled"];export{a as Disabled,e as Example,t as WithBackground,T as __namedExportsOrder,P as default};
