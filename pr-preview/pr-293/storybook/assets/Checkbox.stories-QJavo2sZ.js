import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{C as n}from"./Checkbox-KxuKcvyj.js";import{w as h,u as r,e as x}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-CeCCo7XS.js";import"./useFocusable-DTLHoeQe.js";import"./Form-Cq4QZx_r.js";import"./Text-BorP-jFP.js";import"./useFormValidation-D_zB_ZT8.js";import"./Label-B23VYN9V.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./useControlledState-DGyHFLi9.js";import"./useField-lqkOjd2l.js";import"./useLabels-Dt0KIlgT.js";import"./VisuallyHidden-3bHjY8GZ.js";const L={component:n,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isInvalid:!1,isSelected:!1,isIndeterminate:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1},argTypes:{isInvalid:{type:"boolean"},isSelected:{type:"boolean"},isIndeterminate:{type:"boolean"},isDisabled:{type:"boolean"},isRequired:{type:"boolean"},isReadOnly:{type:"boolean"}}},t={render:({...e})=>a.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"})},s={args:{isRequired:!0,"aria-label":"test"},render:({...e})=>a.jsxs("form",{children:[a.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"}),a.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvasElement:e,step:m})=>{const p=h(e);m("It should be (aria) invalid if the user submitted without checking the box",async()=>{const d=p.getByLabelText("test");await r.tab(),await r.tab(),await r.keyboard("[Enter]"),x(d).toBeInvalid()})}};var i,o,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Checkbox value='unsubscribe' {...args}>
        Unsubscribe
      </Checkbox>;
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,b,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    'aria-label': 'test'
  },
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
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    step('It should be (aria) invalid if the user submitted without checking the box', async () => {
      const checkbox = canvas.getByLabelText('test');
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(checkbox).toBeInvalid();
    });
  }
}`,...(l=(b=s.parameters)==null?void 0:b.docs)==null?void 0:l.source}}};const _=["Example","Required"];export{t as Example,s as Required,_ as __namedExportsOrder,L as default};
