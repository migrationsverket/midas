import{j as a}from"./jsx-runtime-DtgEGaVE.js";import{R as g,a as m,s as M}from"./Radio-CEGymK-p.js";import{e as u,u as t}from"./index-DtSMq7G1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Group-BegkCWIz.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CklmaPa3.js";import"./Form-BWK6xyH1.js";import"./Text-CLHHKsvT.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-tLTeCxiF.js";import"./Label-DuUY1oNM.js";import"./Hidden-lswqw32w.js";import"./useControlledState-DGyHFLi9.js";import"./FocusScope-CWlvLRaT.js";import"./useField-Dtc4qbuX.js";import"./useLabel-D9x7ijjo.js";import"./context-gwlhO1hg.js";import"./usePress-D7qiRhp3.js";import"./index-cpIEhwLo.js";import"./useFocusable-Cn0G9B-O.js";import"./VisuallyHidden-9izUKr4W.js";import"./Label-DjHNQKaV.js";import"./Text-DTW4hkTA.js";import"./FieldError-DCgcqB00.js";const pe={title:"Components/Radio",component:g,tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},C=["Äpple","Banan","Kiwi","Apelsin"],s=C.map(e=>a.jsx(m,{value:e,id:e.toLowerCase(),children:e},e)),F=[a.jsx(m,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(m,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(m,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],i={args:{label:"Frukt",description:"Välj en frukt",children:s,className:"test-class"},play:async({canvas:e,step:r,args:n})=>{await r("it should preserve its classNames when being passed new ones",async()=>{const N=e.getByLabelText(n.label);u(N).toHaveClass(M.radioGroup,n.className)})}},o={args:{children:s,isDisabled:!0}},l={args:{children:F}},d={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},p={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:r,args:n})=>{await r("should show a validation error message if the user submitted without selecting anything",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),u(e.getByRole("radiogroup")).toBeInvalid(),u(e.getByText(n.errorMessage)).toBeInTheDocument()})}},c={tags:["!dev"],args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(g,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:r})=>{await r("it should show the custom error message if the constraints was not satisfied",async()=>{await t.tab(),await t.keyboard("[Enter]"),await t.tab(),await t.keyboard("[Enter]"),u(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}};var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,w,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,k,j;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(j=(k=l.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,D,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,R,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var S,V,G;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(G=(V=c.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const ce=["Normal","Disabled","OneItemDisabled","Invalid","Required","CustomValidation"];export{c as CustomValidation,o as Disabled,d as Invalid,i as Normal,l as OneItemDisabled,p as Required,ce as __namedExportsOrder,pe as default};
