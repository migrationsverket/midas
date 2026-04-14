import{j as e}from"./iframe-D1Yo_ASl.js";import{R as a,a as c}from"./Radio-CenLuLlG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtPCKdFP.js";import"./clsx-B-dksMZM.js";import"./Group-CAMsnLF6.js";import"./useFocusRing-B1B12oVM.js";import"./index-C22-80z0.js";import"./index-DHyWBhXo.js";import"./FieldError-BrTiJca0.js";import"./Text-CC_-JfUc.js";import"./clsx-Ciqy0D92.js";import"./Text-Cm1JxqTj.js";import"./Form-BTzQwVTd.js";import"./Button-M2F6_Qz4.js";import"./Hidden-BeKvJ1wg.js";import"./useLabel-yNR7PxFA.js";import"./useLabels-ETtHkWia.js";import"./useButton-BA9v4nYB.js";import"./SelectionIndicator-BkCDLdi0.js";import"./useField--yXn37df.js";import"./VisuallyHidden-BaAY3BDc.js";import"./useControlledState-DI2wiQtX.js";import"./Label-CzSxrwtj.js";import"./Dialog-CT-IvoQF.js";import"./RSPContexts-TtF35Naa.js";import"./OverlayArrow-C08_D7Db.js";import"./useResizeObserver-CjU5NYfI.js";import"./Collection-BHwdqdom.js";import"./index-BgxIfYNz.js";import"./Separator-DkUo04Vc.js";import"./SelectionManager-Cl2qeWIC.js";import"./useEvent-CR9RVJbO.js";import"./scrollIntoView-BpMLfVQa.js";import"./useDescription-DFWHaatp.js";import"./ListKeyboardDelegate-C-tPikMB.js";import"./PressResponder-DPFebpjq.js";import"./useLocalizedStringFormatter-vgTNRLY_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLsBHLpF.js";import"./getScrollParent-CqYMlGok.js";import"./Modal-BxS1hXlz.js";import"./x-Dx4ggZKu.js";import"./createLucideIcon-B2W31-43.js";import"./useLocalizedStringFormatter-CdrMB43o.js";import"./Heading-D21J0EHb.js";import"./Button-DcFviok1.js";import"./Button.module-BB7N-cLd.js";import"./info-Cam4-x-Q.js";import"./Popover-DEkZ7Lnp.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
