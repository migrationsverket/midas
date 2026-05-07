import{j as e}from"./iframe-DFebKffn.js";import{R as a,a as c}from"./Radio-BTxHV9X2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-J_OqfxpN.js";import"./clsx-B-dksMZM.js";import"./Group-DEOBuZSS.js";import"./useFocusRing-C3NPJWuR.js";import"./index-fFDBVBnh.js";import"./index-BJ2AWJ3X.js";import"./FieldError-CqV6hYY3.js";import"./Text-jpnaKsAZ.js";import"./clsx-Ciqy0D92.js";import"./Text-B-BzwR12.js";import"./Form-nCobm3CY.js";import"./Button-BZDCT8jS.js";import"./Hidden-BATde4xQ.js";import"./useLabel-B8lMlR1q.js";import"./useLabels-C1qgN7Qm.js";import"./useButton-C0xusnOU.js";import"./SelectionIndicator-tE_LDChe.js";import"./useField-B521Xtuh.js";import"./VisuallyHidden-J2xwiqaN.js";import"./useControlledState-BBnpHgMO.js";import"./Label-AidT_L4c.js";import"./Dialog-BFOkpBwH.js";import"./RSPContexts-Cvf_UqQA.js";import"./OverlayArrow-CJmScTPI.js";import"./useResizeObserver-q0q4I5l9.js";import"./Collection-C3aJ_YG1.js";import"./index-WykGGTgN.js";import"./Separator-CcYLIB_G.js";import"./SelectionManager-DnvZe7fF.js";import"./useEvent-BefO7eCM.js";import"./scrollIntoView-Ay2HlXpl.js";import"./useDescription-1A7QrMbF.js";import"./ListKeyboardDelegate-CB2LXJR4.js";import"./PressResponder-x7TTwY6v.js";import"./useLocalizedStringFormatter-DT9MjXti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CODwxVTq.js";import"./getScrollParent-C72LLC1f.js";import"./ModalOverlay-B-1_LG18.js";import"./x-udLSc6dJ.js";import"./createLucideIcon-eIhYDTFQ.js";import"./useLocalizedStringFormatter-1z23XCra.js";import"./Heading-CCEXH8UY.js";import"./Button-CAFfH1xQ.js";import"./Button.module-BB7N-cLd.js";import"./info-De4eU8bo.js";import"./Popover-DLlLbIiU.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    </form>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    </form>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
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
}`,...m.parameters?.docs?.source}}};const cr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,cr as __namedExportsOrder,mr as default};
