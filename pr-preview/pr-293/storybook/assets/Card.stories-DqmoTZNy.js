import{C as u}from"./Card-DG3kb6YT.js";import{w as h,e as a,u as g}from"./index-frOfh_zr.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-nCOwpkq7.js";import"./Link-D-7ck5zw.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-8wDOqnHv.js";const b={source:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",description:"Pineapple"},j={component:u,title:"Components/Card",tags:["autodocs"]},e={args:{title:"Welcome to card",content:"Sometimes the default accessible name of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or icon font (which you shouldn't be using) without any text.",image:b,background:!1,link:{children:"Läs mer om Card",href:"#"},headingTag:"h2"},play:async({canvasElement:l,step:p})=>{const d=h(l);p("It should be possible to focus the link",async()=>{const o=d.getByText("Läs mer om Card");a(o).not.toHaveFocus(),await g.tab(),a(o).toHaveFocus()})}},t={args:{...e.args,background:!0}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to card',
    content: "Sometimes the default accessible name of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or icon font (which you shouldn't be using) without any text.",
    image: testImage,
    background: false,
    link: {
      children: 'Läs mer om Card',
      href: '#'
    },
    headingTag: 'h2'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    step('It should be possible to focus the link', async () => {
      const link = canvas.getByText('Läs mer om Card');
      expect(link).not.toHaveFocus();

      // focus the link
      await userEvent.tab();
      expect(link).toHaveFocus();
    });
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,r,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    background: true
  }
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const B=["Example","WithBackground"];export{e as Example,t as WithBackground,B as __namedExportsOrder,j as default};
