import{C as u}from"./Card-DG3kb6YT.js";import{w as g,e as o,u as h}from"./index-frOfh_zr.js";import"./jsx-runtime-DtgEGaVE.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-nCOwpkq7.js";import"./Link-D-7ck5zw.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-8wDOqnHv.js";const b={source:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg",description:"Pineapple"},F={component:u,title:"Components/Card",tags:["autodocs"],args:{title:"Welcome to card",content:"Sometimes the default accessible name of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or icon font (which you shouldn't be using) without any text.",image:b,background:!1,link:{children:"Läs mer om Card",href:"#"},headingTag:"h2"}},e={play:async({canvasElement:p,step:d})=>{const l=g(p);d("It should be possible to focus the link",async()=>{const n=l.getByText("Läs mer om Card");o(n).not.toHaveFocus(),await h.tab(),o(n).toHaveFocus()})}},t={args:{background:!0}};var a,s,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,r,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    background: true
  }
}`,...(m=(r=t.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const H=["Example","WithBackground"];export{e as Example,t as WithBackground,H as __namedExportsOrder,F as default};
