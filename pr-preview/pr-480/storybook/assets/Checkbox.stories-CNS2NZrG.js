import{j as r}from"./jsx-runtime-DtgEGaVE.js";import{C as n}from"./Checkbox-C56IiWnt.js";import{u as i,e as y}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./RSPContexts-CeCCo7XS.js";import"./utils-fGMpyvF6.js";import"./Form-BWK6xyH1.js";import"./Text-CLHHKsvT.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-tLTeCxiF.js";import"./useFocusRing-CklmaPa3.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Dtc4qbuX.js";import"./useLabel-D9x7ijjo.js";import"./usePress-D7qiRhp3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./VisuallyHidden-9izUKr4W.js";const H={component:n,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isInvalid:!1,isSelected:!1,isIndeterminate:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1},argTypes:{isInvalid:{type:"boolean"},isSelected:{type:"boolean"},isIndeterminate:{type:"boolean"},isDisabled:{type:"boolean"},isRequired:{type:"boolean"},isReadOnly:{type:"boolean"}}},s={render:({...e})=>r.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"})},t={args:{isDisabled:!0},render:({...e})=>r.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"})},a={args:{isRequired:!0,"aria-label":"test"},tags:["!dev"],render:({...e})=>r.jsxs("form",{children:[r.jsx(n,{value:"unsubscribe",...e,children:"Unsubscribe"}),r.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:e,step:h})=>{await h("It should be (aria) invalid if the user submitted without checking the box",async()=>{const g=e.getByLabelText("test");await i.tab(),await i.tab(),await i.keyboard("[Enter]"),y(g).toBeInvalid()})}};var o,c,u;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    return <Checkbox value='unsubscribe' {...args}>
        Unsubscribe
      </Checkbox>;
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,d,l;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const J=["Example","Disabled","Required"];export{t as Disabled,s as Example,a as Required,J as __namedExportsOrder,H as default};
