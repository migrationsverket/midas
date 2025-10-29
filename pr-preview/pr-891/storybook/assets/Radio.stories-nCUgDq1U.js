import{j as a}from"./iframe-D22RnrI5.js";import{a as r,R as b,s as y}from"./Radio-DqYXhybb.js";import"./preload-helper-Ct5FWWRu.js";import"./Group-2BrCLVBV.js";import"./utils-IQwsi_Mp.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CelFkdst.js";import"./index-B6eCQ9aw.js";import"./index-DZ5AQ9RU.js";import"./FieldError-Hi4vksVn.js";import"./Text-C_rQTysa.js";import"./clsx-Ciqy0D92.js";import"./Text-CWwJ5Kgj.js";import"./Form-StjO7poT.js";import"./useFormValidation-BAkWF0Gg.js";import"./Button-rdu5FjWn.js";import"./Hidden-CtIENPW4.js";import"./useLabels-DCbQxQd_.js";import"./useButton-DTvkVre_.js";import"./SelectionIndicator-tBl4dzhl.js";import"./useField-r-GiupzV.js";import"./VisuallyHidden-aWO_RYgT.js";import"./useControlledState-Civ9vvMz.js";import"./Label-ZoLaA4pR.js";import"./Dialog-5Q1RHl6S.js";import"./RSPContexts-DFUkwuHx.js";import"./OverlayArrow-a7rvTWVZ.js";import"./useResizeObserver-CkrFVkoI.js";import"./Collection-D-9NlrVc.js";import"./index-Btrb5JSf.js";import"./Separator-ovPP9zcr.js";import"./SelectionManager-BDylyf_D.js";import"./useEvent-CbrHpgHc.js";import"./scrollIntoView-DFHnj_oN.js";import"./useDescription-BfXV2LOb.js";import"./ListKeyboardDelegate-B8eLekIo.js";import"./PressResponder-4CpaqU4b.js";import"./useLocalizedStringFormatter-BSWUiH8B.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CBtZzG_M.js";import"./useLocalizedStringFormatter-C3cFmwKu.js";import"./Button-T9TteJoQ.js";import"./Button.module-CtQ1deO8.js";import"./x-35cMYwCl.js";import"./createLucideIcon-DImY0aIE.js";import"./Heading-CuV8echB.js";import"./info-D8uJKAbJ.js";import"./Popover-BsFa4I11.js";const{expect:o,userEvent:t}=__STORYBOOK_MODULE_TEST__,ye={title:"Components/Radio",component:b,subcomponents:{Radio:r},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},v=["Äpple","Banan","Kiwi","Apelsin"],i=v.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),children:e},e)),R=[a.jsx(r,{value:"banan",children:"Banan"},"radio-banan"),a.jsx(r,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),a.jsx(r,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],n={args:{label:"Frukt",description:"Välj en frukt",children:v.map(e=>a.jsx(r,{value:e,id:e.toLowerCase(),className:"test-radio-class",children:e},e)),className:"test-class"},play:async({canvas:e,step:s,args:h})=>{await s("it should preserve its classNames when being passed new ones",async()=>{const w=e.getByRole("radiogroup"),f=e.getByRole("group").childNodes;await o(w).toHaveClass(y.radioGroup,h.className),f.forEach(async x=>{await o(x).toHaveClass(y.radio,"test-radio-class")})})}},l={args:{children:i,isDisabled:!0}},p={args:{children:i,isReadOnly:!0,value:"Kiwi"}},d={args:{children:R}},c={args:{children:i,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:i,isRequired:!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s,args:h})=>{await s("should show a validation error message if the user submitted without selecting anything",async()=>{await t.tab(),await t.tab(),await t.keyboard("[Enter]"),o(e.getByRole("radiogroup")).toBeInvalid(),o(e.getByText(h.errorMessage)).toBeInTheDocument()})}},u={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:i,errorMessage:void 0,validate:e=>e?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:e=>a.jsxs("form",{children:[a.jsx(b,{...e}),a.jsx("button",{type:"submit",children:"Submit"})]}),play:async({canvas:e,step:s})=>{await s("it should show the custom error message if the constraints was not satisfied",async()=>{await t.tab(),await t.keyboard("[Enter]"),await t.tab(),await t.keyboard("[Enter]"),o(e.getByText("Inga äpplen är tillåtna")).toBeInTheDocument()})}},g={args:{...n.args,children:a.jsxs(a.Fragment,{children:[a.jsx(r,{value:"apple",children:"Äpple"},"radio-apple"),a.jsx(r,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
