import{j as a}from"./iframe-DSnn27g_.js";import{a as r,R as b,s as y}from"./Radio-DM0Wz02v.js";import"./preload-helper-Dp1pzeXC.js";import"./Group-D-uhdptX.js";import"./utils-DMRVVt0W.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-B0kGOk6b.js";import"./index-DZBSjlS6.js";import"./index-BjdDVgTd.js";import"./FieldError-DR6MOAC8.js";import"./Text-GLsatxCV.js";import"./clsx-Ciqy0D92.js";import"./Text-RvcCloK4.js";import"./Form-B8OxDnWn.js";import"./useFormValidation-C4L9LAeU.js";import"./Button-o7f1f1B_.js";import"./Hidden-D3uRTTac.js";import"./useLabels-Ce0RUtwe.js";import"./useButton-C4obrwMi.js";import"./SelectionIndicator-BTX2l7Ny.js";import"./useField-CPqt_KXj.js";import"./VisuallyHidden-D--nviQF.js";import"./useControlledState-uxvYb-ts.js";import"./Label-CEFU5H62.js";import"./Dialog-fUx9UXtV.js";import"./RSPContexts-C9onCh2x.js";import"./OverlayArrow-BVE-o5kx.js";import"./useResizeObserver-gr4U8P4D.js";import"./Collection-BSGo8TNc.js";import"./index-BG3CRSBQ.js";import"./Separator-yV2blzUM.js";import"./SelectionManager-BHoXafN8.js";import"./useEvent-C0v-h-xd.js";import"./scrollIntoView-Dw_LmK8o.js";import"./useDescription-Bth95dVM.js";import"./ListKeyboardDelegate-C3zexFoS.js";import"./PressResponder-Cc00asK9.js";import"./useLocalizedStringFormatter-mbK1evP8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-5ZVZ4IwV.js";import"./useLocalizedStringFormatter-B35VshaI.js";import"./Button-DM8Q6ENn.js";import"./Button.module-CcWMkJAG.js";import"./x-Cs4_OoCJ.js";import"./createLucideIcon-Ctc5foUX.js";import"./Heading-BaqoISbv.js";import"./info-B8Fun2z2.js";import"./Popover-zWQ88JPE.js";const{expect:o,userEvent:t}=__STORYBOOK_MODULE_TEST__,qe={title:"Components/Radio",component:b,subcomponents:{Radio:r},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},z=["Äpple","Banan","Kiwi","Apelsin"],i=z.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),children:e},e)),U=[a.jsx(r,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(r,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(r,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],n={args:{label:"Frukt",description:"Välj en frukt",children:z.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),className:"test-radio-class",children:e},e)),className:"test-class"},play:async({canvas:e,step:s,args:h})=>{await s("it should preserve its classNames when being passed new ones",async()=>{const L=e.getByRole("radiogroup"),A=e.getByRole("group").childNodes;await o(L).toHaveClass(y.radioGroup,h.className),A.forEach(async P=>{await o(P).toHaveClass(y.radio,"test-radio-class")})})}},l={args:{children:i,isDisabled:!0}},p={args:{children:i,isReadOnly:!0,value:"Kiwi"}},d={args:{children:U}},c={args:{children:i,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:i,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s,args:h})=>{await s("should show a validation error message if the user submitted without selecting anything",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),o(e.getByRole("radiogroup")).toBeInvalid(),o(e.getByText(h.errorMessage)).toBeInTheDocument()})}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:i,errorMessage:void 0,validate:e=>e!=null&&e.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should show the custom error message if the constraints was not satisfied",async()=>{await t.tab(),await t.keyboard("[Enter]"),await t.tab(),await t.keyboard("[Enter]"),o(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},g={args:{...n.args,children:a.jsxs(a.Fragment,{children:[a.jsx(r,{value:"apple",children:"Äpple"},"radio-apple"),a.jsx(r,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var v,w,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  },
  play: async ({
    canvas,
    step,
    args
  }) => {
    await step('it should preserve its classNames when being passed new ones', async () => {
      const radioGroup = canvas.getByRole('radiogroup');
      const radios = canvas.getByRole('group').childNodes;
      await expect(radioGroup).toHaveClass(styles.radioGroup, args.className as string);
      radios.forEach(async radio => {
        await expect(radio).toHaveClass(styles.radio, 'test-radio-class');
      });
    });
  }
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,R,k;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var j,B,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi'
  }
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,D,S;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var N,O,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(T=(O=c.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var C,V,G;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var M,_,F;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
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
}`,...(F=(_=u.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var H,K,q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};const ze=["Normal","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{u as CustomValidation,l as Disabled,g as Horizontal,c as Invalid,n as Normal,d as OneItemDisabled,p as ReadOnly,m as Required,ze as __namedExportsOrder,qe as default};
