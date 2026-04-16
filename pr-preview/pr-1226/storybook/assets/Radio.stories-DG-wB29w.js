import{j as e}from"./iframe-CCfLQD4z.js";import{R as a,a as c}from"./Radio-BBNTr5TK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-6cPY1nOj.js";import"./clsx-B-dksMZM.js";import"./Group-DtvfQHam.js";import"./useFocusRing-EcVjUqlw.js";import"./index-NgQ47qPP.js";import"./index-Cfi_h6H9.js";import"./FieldError-DW0YkXyi.js";import"./Text-GlhP0ZNt.js";import"./clsx-Ciqy0D92.js";import"./Text-DZ79u1iH.js";import"./Form-DhfgivJc.js";import"./Button-CmCCWuSi.js";import"./Hidden-DWjl7TwO.js";import"./useLabel-BG1zRKxN.js";import"./useLabels-CRZ-4cnr.js";import"./useButton-BiGsVslD.js";import"./SelectionIndicator-Dy5SxFYz.js";import"./useField-CFZKlJFB.js";import"./VisuallyHidden-BkMvzT9s.js";import"./useControlledState-Dk8QnFuU.js";import"./Label-CLlGL0ZY.js";import"./Dialog-DSLsGM2x.js";import"./RSPContexts-CsNweyO-.js";import"./OverlayArrow-D0J3kQcJ.js";import"./useResizeObserver-DH4vzh-U.js";import"./Collection-CEgiOuRD.js";import"./index-Hj45Acj7.js";import"./Separator-D-2HUCAD.js";import"./SelectionManager-MwGpS50M.js";import"./useEvent-BIylNxfJ.js";import"./scrollIntoView-B56Z4Qb3.js";import"./useDescription-DfOXojso.js";import"./ListKeyboardDelegate-B_7IHCzD.js";import"./PressResponder--0lj0NF9.js";import"./useLocalizedStringFormatter-BA4949mp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BUDg1ogU.js";import"./getScrollParent-Cy4s0DF2.js";import"./ModalOverlay-D_f_Y5N7.js";import"./x-Bib5fKG4.js";import"./createLucideIcon-DWEKCqmg.js";import"./useLocalizedStringFormatter-BZhLyzTy.js";import"./Heading-BT23bQxk.js";import"./Button-DJVlOFkK.js";import"./Button.module-BB7N-cLd.js";import"./info-BjAtYUiZ.js";import"./Popover-CJ4AVohE.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
