import{j as a}from"./jsx-runtime-BYYWji4R.js";import{a as t,R as b,s as q}from"./Radio-3P9sRG3u.js";import{e as g,u as r}from"./index-CqmFxPum.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-C7PQJuJg.js";import"./utils-oc6myKvD.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-DUrskli4.js";import"./FieldError-C31dJ6Xr.js";import"./Text-C8tPE3tt.js";import"./filterDOMProps-CeZl_uWj.js";import"./Text-Dpx6Gex-.js";import"./Form-CXoNEyM_.js";import"./useFormValidation-Cv-fFL6t.js";import"./Label-CpkHsAPL.js";import"./Hidden-BC9qER92.js";import"./usePress-BfxC_TyQ.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./useFocusable-tJD4A6lu.js";import"./FocusScope-Dq_oVuiP.js";import"./useField-aNJ8ypzk.js";import"./useLabel-Blgy_cRF.js";import"./context-BSqJJvai.js";import"./VisuallyHidden-uwYO98VR.js";import"./useControlledState-H1tiOFpU.js";import"./Label-C8mJCmL2.js";const be={title:"Components/Radio",component:b,subcomponents:{Radio:t},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},z=["Äpple","Banan","Kiwi","Apelsin"],o=z.map(e=>a.jsx(t,{value:e,id:e.toLowerCase(),children:e},e)),H=[a.jsx(t,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(t,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(t,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],n={args:{label:"Frukt",description:"Välj en frukt",children:o,className:"test-class"},play:async({canvas:e,step:s,args:i})=>{await s("it should preserve its classNames when being passed new ones",async()=>{const O=e.getByLabelText(i.label);g(O).toHaveClass(q.radioGroup,i.className)})}},l={args:{children:o,isDisabled:!0}},d={args:{children:H}},p={args:{children:o,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},c={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:o,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s,args:i})=>{await s("should show a validation error message if the user submitted without selecting anything",async()=>{await r.tab(),await r.tab(),await r.keyboard("[Enter]"),g(e.getByRole("radiogroup")).toBeInvalid(),g(e.getByText(i.errorMessage)).toBeInTheDocument()})}},m={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:o,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should show the custom error message if the constraints was not satisfied",async()=>{await r.tab(),await r.keyboard("[Enter]"),await r.tab(),await r.keyboard("[Enter]"),g(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},u={args:{...n.args,children:a.jsxs(a.Fragment,{children:[a.jsx(t,{value:"apple",children:"Äpple"},"radio-apple"),a.jsx(t,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var h,y,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    className: 'test-class'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      const radioGroup = canvas.getByLabelText(args.label as string);
      expect(radioGroup).toHaveClass(styles.radioGroup, args.className as string);
    });
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,x,f;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,j,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var B,D,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var E,S,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    isRequired: true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('should show a validation error message if the user submitted without selecting anything', async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByRole('radiogroup')).toBeInvalid();
      expect(canvas.getByText(args.errorMessage as string)).toBeInTheDocument();
    });
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var V,N,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    errorMessage: undefined,
    validate: value => value?.includes('Äpple') ? 'Inga äpplen är tillåtna' : true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>,
  play: async ({
    canvas,
    step
  }) => {
    await step('it should show the custom error message if the constraints was not satisfied', async () => {
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      await userEvent.tab();
      await userEvent.keyboard('[Enter]');
      expect(canvas.getByText('Inga äpplen är tillåtna')).toBeInTheDocument();
    });
  }
}`,...(G=(N=m.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var F,M,C;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    children: <>
        <Radio key='radio-apple' value='apple'>
          Äpple
        </Radio>
        <Radio key='radio-banan' value='banan'>
          Banan
        </Radio>
      </>,
    orientation: 'horizontal'
  }
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const he=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{m as CustomValidation,l as Disabled,u as Horizontal,p as Invalid,n as Normal,d as OneItemDisabled,c as Required,he as __namedExportsOrder,be as default};
