import{C as u}from"./Card-D2axJbPE.js";import{e as a,u as l}from"./index-DtSMq7G1.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-Dbh5wnNF.js";import"./Link-Bcvh8UPc.js";import"./utils-DdXLQA3f.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CAIiVOBX.js";import"./useFocusable-C2jS3Qdx.js";import"./createLucideIcon-8wDOqnHv.js";const g={source:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",description:"Pineapple"},F={component:u,title:"Components/Card",tags:["autodocs"],args:{title:"Welcome to card",content:"Sometimes the default accessible name of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or icon font (which you shouldn't be using) without any text.",image:g,background:!1,link:{children:"Läs mer om Card",href:"#"},headingTag:"h2"}},e={play:async({canvas:p,step:d})=>{await d("It should be possible to focus the link",async()=>{const o=p.getByText("Läs mer om Card");a(o).not.toHaveFocus(),await l.tab(),a(o).toHaveFocus()})}},t={args:{background:!0},parameters:{a11y:{test:"todo"}}};var n,s,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    background: true
  },
  parameters: {
    a11y: {
      test: 'todo'
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const H=["Example","WithBackground"];export{e as Example,t as WithBackground,H as __namedExportsOrder,F as default};
