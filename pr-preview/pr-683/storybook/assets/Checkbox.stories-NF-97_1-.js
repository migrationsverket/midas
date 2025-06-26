import{j as c}from"./jsx-runtime-BYYWji4R.js";import{u,e as D}from"./index-CqmFxPum.js";import{C as j}from"./Checkbox-Bl6EfnlF.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./RSPContexts-HQcWPJyv.js";import"./utils-BLyg3OOq.js";import"./clsx-B-dksMZM.js";import"./Form-CLBgFqGB.js";import"./useFormValidation-Cwkq_bn0.js";import"./useFocusRing-eGNMqT99.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./VisuallyHidden-DWQ0FsMN.js";import"./useToggleState-DcHMzLVj.js";import"./useControlledState-H1tiOFpU.js";const Q={component:j,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"},args:{isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isReadOnly:!1,isRequired:!1,value:"unsubscribe",children:"Unsubscribe"}},e={},r={args:{isDisabled:!0}},s={args:{isInvalid:!0}},a={args:{isIndeterminate:!0}},t={args:{isSelected:!0}},n={args:{isRequired:!0},tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},render:({...o})=>c.jsxs("form",{children:[c.jsx(j,{value:"unsubscribe",...o,children:"Unsubscribe"}),c.jsx("button",{type:"submit",children:"submit"})]}),play:async({canvas:o,step:q})=>{await q("It should be (aria) invalid if the user submitted without checking the box",async()=>{const i=o.getByLabelText("Unsubscribe");await u.click(i),await u.click(i),D(i).toBeInvalid()})}};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,b,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,x,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var k,f,I;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true
  }
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var y,S,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isSelected: true
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,E,R;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isRequired: true
  },
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
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
      const checkbox = canvas.getByLabelText('Unsubscribe');
      await userEvent.click(checkbox);
      await userEvent.click(checkbox);
      expect(checkbox).toBeInvalid();
    });
  }
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const V=["Example","Disabled","Invalid","Indeterminate","Selected","Required"];export{r as Disabled,e as Example,a as Indeterminate,s as Invalid,n as Required,t as Selected,V as __namedExportsOrder,Q as default};
