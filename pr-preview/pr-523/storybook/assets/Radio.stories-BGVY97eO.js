import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{R as b,a as s,s as q}from"./Radio-C7Y_P1Mf.js";import{e as g,u as r}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-DITek4ZD.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CPQALXIu.js";import"./Form-BMyPeP3B.js";import"./Text-D0cNLqf0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-BrFQy5aA.js";import"./Label-Cr3pFc-x.js";import"./Hidden-lswqw32w.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-C0EWTSbR.js";import"./useField-BWvtu4tG.js";import"./useLabel-BAqrTMfP.js";import"./context-oTIQb5ND.js";import"./usePress-DljlCKCj.js";import"./index-cpIEhwLo.js";import"./useFocusable-b_0ijIRa.js";import"./VisuallyHidden-DiGk2ECL.js";import"./Label-C9DvPbah.js";import"./Text-BO1MQlio.js";import"./FieldError-BI5lou7e.js";const ge={title:"Components/Radio",component:b,tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},z=["Äpple","Banan","Kiwi","Apelsin"],i=z.map(e=>a.jsx(s,{value:e,id:e.toLowerCase(),children:e},e)),H=[a.jsx(s,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(s,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(s,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],n={args:{label:"Frukt",description:"Välj en frukt",children:i,className:"test-class"},play:async({canvas:e,step:t,args:o})=>{await t("it should preserve its classNames when being passed new ones",async()=>{const O=e.getByLabelText(o.label);g(O).toHaveClass(q.radioGroup,o.className)})}},l={args:{children:i,isDisabled:!0}},d={args:{children:H}},p={args:{children:i,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},c={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:i,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:o})=>{await t("should show a validation error message if the user submitted without selecting anything",async()=>{await r.tab(),await r.tab(),await r.keyboard("[Enter]"),g(e.getByRole("radiogroup")).toBeInvalid(),g(e.getByText(o.errorMessage)).toBeInTheDocument()})}},m={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:i,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should show the custom error message if the constraints was not satisfied",async()=>{await r.tab(),await r.keyboard("[Enter]"),await r.tab(),await r.keyboard("[Enter]"),g(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},u={args:{...n.args,children:a.jsxs(a.Fragment,{children:[a.jsx(s,{value:"apple",children:"Äpple"},"radio-apple"),a.jsx(s,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var h,y,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  tags: ['!dev'],
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
  tags: ['!dev'],
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
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const be=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{m as CustomValidation,l as Disabled,u as Horizontal,p as Invalid,n as Normal,d as OneItemDisabled,c as Required,be as __namedExportsOrder,ge as default};
