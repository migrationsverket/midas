import{j as e}from"./iframe-D83U9Jbw.js";import{R as a,a as c}from"./Radio-DGdlHMHW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C_gFKVIz.js";import"./clsx-B-dksMZM.js";import"./Group-BnP0WtNk.js";import"./useFocusRing-Dv4ce94Y.js";import"./index-WtMp4oUJ.js";import"./index-B1HH0YAv.js";import"./FieldError-D6NpRoO1.js";import"./Text-BuTxUZYo.js";import"./clsx-Ciqy0D92.js";import"./Text-CHHIfo1k.js";import"./Form-BsAOBJ02.js";import"./Button-u3kjlioi.js";import"./Hidden-C0_hFnsL.js";import"./useLabel-Bzi_sPr8.js";import"./useLabels-DObCV9cv.js";import"./useButton-CLqFKr2I.js";import"./SelectionIndicator-Ci7z2GGd.js";import"./useField-BLYC98Mc.js";import"./VisuallyHidden-DuKcmmSu.js";import"./useControlledState-DDqmXAM3.js";import"./Label-uIWG8QjI.js";import"./Dialog-DmWEwvnz.js";import"./RSPContexts-ChOs0gX9.js";import"./OverlayArrow-B_C0xGPC.js";import"./useResizeObserver-C6KtlSCD.js";import"./Collection-HGZf4RXY.js";import"./index-BkqBqLPa.js";import"./Separator-CRT8ZXG6.js";import"./SelectionManager-BLkPK2O4.js";import"./useEvent-CpjHCQK_.js";import"./scrollIntoView-VfHWbuBY.js";import"./useDescription-CVN4gXFi.js";import"./ListKeyboardDelegate-Ch9tR-gt.js";import"./PressResponder-mtxETk4T.js";import"./useLocalizedStringFormatter-C9FHlYP_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-EtJKnU.js";import"./getScrollParent-DQrxFRpX.js";import"./ModalOverlay-BtGRJ_vI.js";import"./x-BzoY_Db8.js";import"./createLucideIcon-c1bwsPcC.js";import"./useLocalizedStringFormatter-CPm18cyu.js";import"./Heading-DRQ0iyab.js";import"./Button-ayYEduOo.js";import"./Button.module-BB7N-cLd.js";import"./info-DZZhk5SE.js";import"./Popover-D4IK6SEx.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
