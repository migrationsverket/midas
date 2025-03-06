import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{R as g,a as u}from"./Radio-eYexzyq9.js";import{e as m,u as r}from"./index-Bn1z2x26.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-BntAPbZu.js";import"./useFocusable-DTLHoeQe.js";import"./clsx-B-dksMZM.js";import"./Form-Cq4QZx_r.js";import"./Text-BorP-jFP.js";import"./useFormValidation-D_zB_ZT8.js";import"./Label-B23VYN9V.js";import"./Hidden-D9yAbrAR.js";import"./index-cpIEhwLo.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-DWsZ07QH.js";import"./useField-lqkOjd2l.js";import"./useLabels-Dt0KIlgT.js";import"./context-DVpahnpO.js";import"./VisuallyHidden-3bHjY8GZ.js";import"./TextField-DoksESly.js";import"./TextField.module-BSzw7ps9.js";import"./Button-CjNJ1YHC.js";import"./Button-DlxIrWB_.js";const ie={title:"Components/Radio",component:g,tags:["autodocs"],args:{label:"Group label",errorMessage:"Du måste välja en frukt?"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},M=["Äpple","Banan","Kiwi","Apelsin"],s=M.map(e=>a.jsx(u,{value:e,id:e.toLowerCase(),children:e},e)),C=[a.jsx(u,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(u,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(u,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],i={args:{label:"Frukt",description:"Välj en frukt",children:s,className:"test-class"},play:async({canvas:e,step:t,args:n})=>{await t("it should preserve its classNames when being passed new ones",async()=>{const V=e.getByLabelText(n.label);m(V).toHaveClass(/radioGroup/,n.className)})}},o={args:{children:s,isDisabled:!0}},l={args:{children:C}},d={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},c={args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t,args:n})=>{await t("should show a validation error message if the user submitted without selecting anything",async()=>{await r.tab(),await r.tab(),await r.keyboard("[Enter]"),m(e.getByRole("radiogroup")).toBeInvalid(),m(e.getByText(n.errorMessage)).toBeInTheDocument()})}},p={args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:t})=>{await t("it should show the custom error message if the constraints was not satisfied",async()=>{await r.tab(),await r.keyboard("[Enter]"),await r.tab(),await r.keyboard("[Enter]"),m(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}};var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      expect(radioGroup).toHaveClass(/radioGroup/, args.className as string);
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
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,D,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,R,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var S,G,N;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(G=p.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};const oe=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation"];export{p as CustomValidation,o as Disabled,d as Invalid,i as Normal,l as OneItemDisabled,c as Required,oe as __namedExportsOrder,ie as default};
