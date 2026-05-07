import{j as e}from"./iframe-BANbOrjL.js";import{R as a,a as c}from"./Radio-CoEVc754.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-54peqJ8a.js";import"./clsx-B-dksMZM.js";import"./Group-bGKMXFQ3.js";import"./useFocusRing-DbV3xYYs.js";import"./index-DvmcBK1X.js";import"./index-C5-8epWM.js";import"./FieldError-Dz4Gx-Yr.js";import"./Text-1nbNgZtg.js";import"./clsx-Ciqy0D92.js";import"./Text-Ckl3Bse6.js";import"./Form-CNFyYQkx.js";import"./Button-CFtjy4Ss.js";import"./Hidden-B-0UQMnM.js";import"./useLabel-DaWSn-ZG.js";import"./useLabels-596GHSCS.js";import"./useButton-DJ76KY2c.js";import"./SelectionIndicator-CrTEERDH.js";import"./useField-BkzAvj6x.js";import"./VisuallyHidden-DT3xn_Oy.js";import"./useControlledState-yh8y5GNM.js";import"./Label-CV9B1-E-.js";import"./Dialog-GHWvaqdY.js";import"./RSPContexts-BniJiskW.js";import"./OverlayArrow-3uBcSzI2.js";import"./useResizeObserver-BFsJhDwf.js";import"./Collection-zjfmvZA8.js";import"./index-BUHuSkUj.js";import"./Separator-3vGtn533.js";import"./SelectionManager-xAct9blH.js";import"./useEvent-CZNt73ky.js";import"./scrollIntoView-BwHcSgh9.js";import"./useDescription-BXc5IFCt.js";import"./ListKeyboardDelegate-DM397JfH.js";import"./PressResponder-DKqAQjjU.js";import"./useLocalizedStringFormatter-CQ9MV6Yb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-zaaq6a5j.js";import"./getScrollParent-DmzKjg3u.js";import"./ModalOverlay-CtaOPmLe.js";import"./x-Bo7YhGfd.js";import"./createLucideIcon-mdFywCsT.js";import"./useLocalizedStringFormatter-C_ZDKjDL.js";import"./Heading-BB-a4vZh.js";import"./Button-Dov5qDwf.js";import"./Button.module-BB7N-cLd.js";import"./info-BAT2abYY.js";import"./Popover-C_wY1Eq1.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
