import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{C as n}from"./Checkbox-CRxGHl20.js";import{u as s,e as d}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-CeCCo7XS.js";import"./useFocusRing-CzvYi63w.js";import"./Form-CtPEz-EL.js";import"./Text-Bs3wmQ_r.js";import"./useFormValidation-COh_aIUh.js";import"./Label-D5LZnuba.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useControlledState-DGyHFLi9.js";import"./useField-CeWVpZ88.js";import"./useLabels-C6xreehw.js";import"./useFocusable-BFetNXOg.js";import"./VisuallyHidden-Gg3j86pG.js";const D={component:n,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isInvalid:!1,isSelected:!1,isIndeterminate:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1},argTypes:{isInvalid:{type:"boolean"},isSelected:{type:"boolean"},isIndeterminate:{type:"boolean"},isDisabled:{type:"boolean"},isRequired:{type:"boolean"},isReadOnly:{type:"boolean"}}},t={render:({...e})=>a.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"})},r={args:{isRequired:!0,"aria-label":"test"},render:({...e})=>a.jsxs("form",{children:[a.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"}),a.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:e,step:l})=>{await l("It should be (aria) invalid if the user submitted without checking the box",async()=>{const m=e.getByLabelText("test");await s.tab(),await s.tab(),await s.keyboard("[Enter]"),d(m).toBeInvalid()})}};var i,o,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Checkbox value='unsubscribe' {...args}>
        Unsubscribe
      </Checkbox>;
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,b,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const L=["Example","Required"];export{t as Example,r as Required,L as __namedExportsOrder,D as default};
