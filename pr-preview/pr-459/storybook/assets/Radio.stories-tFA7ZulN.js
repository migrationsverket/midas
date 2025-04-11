import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{R as b,a as u,s as q}from"./Radio-Bhrsp4Of.js";import{e as g,u as r}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-BegkCWIz.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CklmaPa3.js";import"./Form-BWK6xyH1.js";import"./Text-CLHHKsvT.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-tLTeCxiF.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-CWlvLRaT.js";import"./useField-Dtc4qbuX.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./usePress-D7qiRhp3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./VisuallyHidden-9izUKr4W.js";import"./Label-DjHNQKaV.js";import"./Text-DTW4hkTA.js";import"./FieldError-DCgcqB00.js";const ge={title:"Components/Radio",component:b,tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},z=["Äpple","Banan","Kiwi","Apelsin"],n=z.map(e=>a.jsx(u,{value:e,id:e.toLowerCase(),children:e},e)),H=[a.jsx(u,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(u,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(u,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:n,className:"test-class"},play:async({canvas:e,step:t,args:o})=>{await t("it should preserve its classNames when being passed new ones",async()=>{const O=e.getByLabelText(o.label);g(O).toHaveClass(q.radioGroup,o.className)})}},i={args:{children:n,isDisabled:!0}},l={args:{children:H}},d={args:{children:n,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},c={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:n,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:o})=>{await t("should show a validation error message if the user submitted without selecting anything",async()=>{await r.tab(),await r.tab(),await r.keyboard("[Enter]"),g(e.getByRole("radiogroup")).toBeInvalid(),g(e.getByText(o.errorMessage)).toBeInTheDocument()})}},p={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:n,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should show the custom error message if the constraints was not satisfied",async()=>{await r.tab(),await r.keyboard("[Enter]"),await r.tab(),await r.keyboard("[Enter]"),g(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},m={args:{...s.args,orientation:"horizontal"}};var h,y,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,f,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,j,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var D,B,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var R,S,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var V,N,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(N=p.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var M,C,F;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    orientation: 'horizontal'
  }
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const be=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{p as CustomValidation,i as Disabled,m as Horizontal,d as Invalid,s as Normal,l as OneItemDisabled,c as Required,be as __namedExportsOrder,ge as default};
