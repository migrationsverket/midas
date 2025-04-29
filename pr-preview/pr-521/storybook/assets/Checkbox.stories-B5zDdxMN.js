import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{C as n}from"./Checkbox-AnYfTTdG.js";import{u as i,e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-CeCCo7XS.js";import"./utils-Dv9Ux5aE.js";import"./Form-BMyPeP3B.js";import"./Text-D0cNLqf0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-BrFQy5aA.js";import"./useFocusRing-CPQALXIu.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BWvtu4tG.js";import"./useLabel-BAqrTMfP.js";import"./usePress-DljlCKCj.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./useToggleState-BmDBGXg5.js";import"./VisuallyHidden-DiGk2ECL.js";const J={component:n,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isInvalid:!1,isSelected:!1,isIndeterminate:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1},argTypes:{isInvalid:{type:"boolean"},isSelected:{type:"boolean"},isIndeterminate:{type:"boolean"},isDisabled:{type:"boolean"},isRequired:{type:"boolean"},isReadOnly:{type:"boolean"}}},s={render:({...e})=>r.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"})},t={args:{isDisabled:!0},render:({...e})=>r.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"})},a={args:{isRequired:!0,"aria-label":"test"},tags:["!dev"],render:({...e})=>r.jsxs("form",{children:[r.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"}),r.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:e,step:h})=>{await h("It should be (aria) invalid if the user submitted without checking the box",async()=>{const g=e.getByLabelText("test");await i.tab(),await i.tab(),await i.keyboard("[Enter]"),y(g).toBeInvalid()})}};var o,c,u;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Checkbox value='unsubscribe' {...args}>
        Unsubscribe
      </Checkbox>;
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,p,d;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  render: ({
    ...args
  }) => {
    return <Checkbox value='unsubscribe' {...args}>
        Unsubscribe
      </Checkbox>;
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,m,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    'aria-label': 'test'
  },
  tags: ['!dev'],
  render: ({
    ...args
  }) => {
    return <form>
        <Checkbox value='unsubscribe' {...args}>
          Unsubscribe
        </Checkbox>
        <button type='submit'>submit</button>
      </form>;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('It should be (aria) invalid if the user submitted without checking the box', async () => {
      const checkbox = canvas.getByLabelText('test');
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(checkbox).toBeInvalid();
    });
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const K=["Example","Disabled","Required"];export{t as Disabled,s as Example,a as Required,K as __namedExportsOrder,J as default};
