import{j as a}from"./iframe-BvtnbEWO.js";import{a as r,R as b,s as y}from"./Radio-BGHkok6K.js";import"./preload-helper-Ct5FWWRu.js";import"./Group-ZdvQrpSb.js";import"./utils-Dmj49lEG.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BlbKuGBA.js";import"./index-Buo16tpK.js";import"./index-A6OnxHr3.js";import"./FieldError-DmVA7zlg.js";import"./Text-G_ihDvZJ.js";import"./clsx-Ciqy0D92.js";import"./Text-B7oxr1RI.js";import"./Form-DlbxRFTH.js";import"./useFormValidation-CFPInbMA.js";import"./Button-BDKaMgDI.js";import"./Hidden-B-AZDmCl.js";import"./useLabels-KBXM5tZw.js";import"./useButton-qz_TyAWl.js";import"./SelectionIndicator-CAJEwhrw.js";import"./useField-BnzoMeMJ.js";import"./VisuallyHidden-DqvK4Wff.js";import"./useControlledState-Dzlb7uXm.js";import"./Label-DtYzvuRw.js";import"./Dialog-SMibr7T8.js";import"./RSPContexts-BMp6jLpo.js";import"./OverlayArrow-CjKqQivr.js";import"./useResizeObserver-BU-ZyiTP.js";import"./Collection-WF1BDAnd.js";import"./index-Bi-IqhAu.js";import"./Separator-DG3h-wUM.js";import"./SelectionManager-Cc2ZsgzI.js";import"./useEvent-CdLUELr7.js";import"./scrollIntoView-CptB-SyI.js";import"./useDescription-3yaDVIih.js";import"./ListKeyboardDelegate-BwOp3GOw.js";import"./PressResponder-DQRY-Kqq.js";import"./useLocalizedStringFormatter-B6wo6qEy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DAh1nnIS.js";import"./useLocalizedStringFormatter-B6icmZu0.js";import"./Button-DciKK2iU.js";import"./Button.module-CtQ1deO8.js";import"./x-B4WpRfld.js";import"./createLucideIcon-DLTmB58A.js";import"./Heading-BExRDS79.js";import"./info-C4RVpOnV.js";import"./Popover-lyKFTbo1.js";const{expect:o,userEvent:t}=__STORYBOOK_MODULE_TEST__,ye={title:"Components/Radio",component:b,subcomponents:{Radio:r},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},v=["Äpple","Banan","Kiwi","Apelsin"],i=v.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),children:e},e)),R=[a.jsx(r,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(r,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(r,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],n={args:{label:"Frukt",description:"Välj en frukt",children:v.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),className:"test-radio-class",children:e},e)),className:"test-class"},play:async({canvas:e,step:s,args:h})=>{await s("it should preserve its classNames when being passed new ones",async()=>{const w=e.getByRole("radiogroup"),f=e.getByRole("group").childNodes;await o(w).toHaveClass(y.radioGroup,h.className),f.forEach(async x=>{await o(x).toHaveClass(y.radio,"test-radio-class")})})}},l={args:{children:i,isDisabled:!0}},p={args:{children:i,isReadOnly:!0,value:"Kiwi"}},d={args:{children:R}},c={args:{children:i,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:i,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s,args:h})=>{await s("should show a validation error message if the user submitted without selecting anything",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),o(e.getByRole("radiogroup")).toBeInvalid(),o(e.getByText(h.errorMessage)).toBeInTheDocument()})}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:i,errorMessage:void 0,validate:e=>e?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should show the custom error message if the constraints was not satisfied",async()=>{await t.tab(),await t.keyboard("[Enter]"),await t.tab(),await t.keyboard("[Enter]"),o(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},g={args:{...n.args,children:a.jsxs(a.Fragment,{children:[a.jsx(r,{value:"apple",children:"Äpple"},"radio-apple"),a.jsx(r,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ve=["Normal","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{u as CustomValidation,l as Disabled,g as Horizontal,c as Invalid,n as Normal,d as OneItemDisabled,p as ReadOnly,m as Required,ve as __namedExportsOrder,ye as default};
