import{j as a}from"./jsx-runtime-BYYWji4R.js";import{a as t,R as b,s as q}from"./Radio-BkZnMf52.js";import{e as g,u as r}from"./index-CqmFxPum.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-sOySE-B3.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-DFgaa26k.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./FieldError-D-8BaYqJ.js";import"./Text-YK1d3YhA.js";import"./Text-Wus0_tJ0.js";import"./Form-C9xWP2Oj.js";import"./useFormValidation-FjWTytrw.js";import"./Button-CEgTOQBH.js";import"./Hidden-BC9qER92.js";import"./context-zNjZoWML.js";import"./useButton-D8WL2Jhl.js";import"./FocusScope-Bcf2Ll4M.js";import"./useField-S31s4Mk4.js";import"./VisuallyHidden-jmj7sg3v.js";import"./useControlledState-H1tiOFpU.js";import"./Label-CbpCufc3.js";import"./Dialog-C4m1OGM_.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-TRvrVqvs.js";import"./Collection-DAIuP0SD.js";import"./index-NDK0uC61.js";import"./Separator-CH_dNUfe.js";import"./SelectionManager-Cm3DuGdl.js";import"./useEvent-YbNcfHeo.js";import"./scrollIntoView-D-J2YGNX.js";import"./ListKeyboardDelegate-Cv5X-nlC.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D3zukwiL.js";import"./Dialog-BHPO13O3.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./Button-D2_AVwS4.js";import"./Button.module-AG3JZ-l4.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-BqhVQUP5.js";import"./info-DTm9uzms.js";const Fe={title:"Components/Radio",component:b,subcomponents:{Radio:t},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},z=["Äpple","Banan","Kiwi","Apelsin"],o=z.map(e=>a.jsx(t,{value:e,id:e.toLowerCase(),children:e},e)),H=[a.jsx(t,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(t,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(t,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],n={args:{label:"Frukt",description:"Välj en frukt",children:o,className:"test-class"},play:async({canvas:e,step:s,args:i})=>{await s("it should preserve its classNames when being passed new ones",async()=>{const O=e.getByLabelText(i.label);g(O).toHaveClass(q.radioGroup,i.className)})}},p={args:{children:o,isDisabled:!0}},l={args:{children:H}},d={args:{children:o,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},c={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:o,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s,args:i})=>{await s("should show a validation error message if the user submitted without selecting anything",async()=>{await r.tab(),await r.tab(),await r.keyboard("[Enter]"),g(e.getByRole("radiogroup")).toBeInvalid(),g(e.getByText(i.errorMessage)).toBeInTheDocument()})}},m={tags:["!dev","!autodocs"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:o,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should show the custom error message if the constraints was not satisfied",async()=>{await r.tab(),await r.keyboard("[Enter]"),await r.tab(),await r.keyboard("[Enter]"),g(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},u={args:{...n.args,children:a.jsxs(a.Fragment,{children:[a.jsx(t,{value:"apple",children:"Äpple"},"radio-apple"),a.jsx(t,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var h,y,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,x,f;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,j,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var B,D,R;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var E,S,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const Me=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{m as CustomValidation,p as Disabled,u as Horizontal,d as Invalid,n as Normal,l as OneItemDisabled,c as Required,Me as __namedExportsOrder,Fe as default};
