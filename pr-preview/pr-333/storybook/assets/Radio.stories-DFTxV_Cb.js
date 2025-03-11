import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{R as g,a as m,s as M}from"./Radio-DFuDxEg0.js";import{e as u,u as r}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-C-pz1s69.js";import"./useFocusRing-CzvYi63w.js";import"./clsx-B-dksMZM.js";import"./Form-CtPEz-EL.js";import"./Text-Bs3wmQ_r.js";import"./useFormValidation-COh_aIUh.js";import"./Label-D5LZnuba.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-CaULHkOc.js";import"./useField-CeWVpZ88.js";import"./useLabels-C6xreehw.js";import"./context-DhWQxiCQ.js";import"./useFocusable-BFetNXOg.js";import"./VisuallyHidden-Gg3j86pG.js";import"./TextField-eEI7HQPG.js";import"./Input-6VVu8_gT.js";import"./TextField-Ah33ZlDz.js";import"./useTextField-B88Z0jeU.js";import"./TextField.module-DBomeRQe.js";import"./Button-C4oyWw79.js";import"./Button-DWcm3eun.js";import"./LiveAnnouncer-DFDjXwI8.js";const me={title:"Components/Radio",component:g,tags:["autodocs"],args:{label:"Group label",errorMessage:"Du måste välja en frukt?"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},C=["Äpple","Banan","Kiwi","Apelsin"],s=C.map(e=>a.jsx(m,{value:e,id:e.toLowerCase(),children:e},e)),F=[a.jsx(m,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(m,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(m,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],i={args:{label:"Frukt",description:"Välj en frukt",children:s,className:"test-class"},play:async({canvas:e,step:t,args:n})=>{await t("it should preserve its classNames when being passed new ones",async()=>{const V=e.getByLabelText(n.label);u(V).toHaveClass(M.radioGroup,n.className)})}},o={args:{children:s,isDisabled:!0}},l={args:{children:F}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},d={args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:n})=>{await t("should show a validation error message if the user submitted without selecting anything",async()=>{await r.tab(),await r.tab(),await r.keyboard("[Enter]"),u(e.getByRole("radiogroup")).toBeInvalid(),u(e.getByText(n.errorMessage)).toBeInTheDocument()})}},c={args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should show the custom error message if the constraints was not satisfied",async()=>{await r.tab(),await r.keyboard("[Enter]"),await r.tab(),await r.keyboard("[Enter]"),u(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}};var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var w,v,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,k,j;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,D,B;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(B=(D=p.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,R,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var S,G,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(G=c.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};const ue=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation"];export{c as CustomValidation,o as Disabled,p as Invalid,i as Normal,l as OneItemDisabled,d as Required,ue as __namedExportsOrder,me as default};
