import{j as e}from"./iframe-CMe2wz4D.js";import{R as a,a as c}from"./Radio-CGj6wEcs.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-Co_LPMr-.js";import"./utils-DJ_hucLj.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-DN312JKd.js";import"./index-UTABmGgd.js";import"./index-DgLmdWsP.js";import"./FieldError-CqK9CxSD.js";import"./Text-DbDESw7Z.js";import"./clsx-Ciqy0D92.js";import"./Text-C6IcTtvN.js";import"./Form-CsarTKga.js";import"./useFormValidation-Btd0Kabf.js";import"./Button-BuypZ7Sp.js";import"./Hidden-Cq5lhTG-.js";import"./number-DfkVkf0F.js";import"./useLabels-BVLipinj.js";import"./useButton-CdtNP3fm.js";import"./SelectionIndicator-DcYQgJau.js";import"./useField-B4tU80Yq.js";import"./VisuallyHidden-BaQWCrYN.js";import"./useControlledState-D13p9GBW.js";import"./Label-CtMoHr6Q.js";import"./Dialog-BCIJ8lwe.js";import"./RSPContexts-roL6tJu5.js";import"./OverlayArrow-D-Q2SzlG.js";import"./useResizeObserver-D5ureoru.js";import"./Collection-OdPW2hIZ.js";import"./index-C3DfPzTs.js";import"./Separator-CQ0RcBeP.js";import"./SelectionManager-D-1hvZxs.js";import"./useEvent-cUwG2woL.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-jTYbaPrg.js";import"./ListKeyboardDelegate-CVSZe2G2.js";import"./PressResponder-iJE139cV.js";import"./useLocalizedStringFormatter-jsgjsUy3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4BBbAxe.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-BUb7R24X.js";import"./Button-CDQv5njw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fpyssM3k.js";import"./createLucideIcon-Bteudlm4.js";import"./x-BEfRANP2.js";import"./Heading-_-Lcq5Ed.js";import"./info-DJYXbaP0.js";import"./Popover-BmXxTL_W.js";const cr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ur=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,ur as __namedExportsOrder,cr as default};
