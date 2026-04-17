import{j as e}from"./iframe-BspZq9tj.js";import{R as a,a as c}from"./Radio-CObEtGPC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DAmpme0n.js";import"./clsx-B-dksMZM.js";import"./Group-C5bte03E.js";import"./useFocusRing-ZSLB6af2.js";import"./index-CNFgOk2C.js";import"./index-CYPXKPzf.js";import"./FieldError-CWZFsZje.js";import"./Text-DJFK0YJf.js";import"./clsx-Ciqy0D92.js";import"./Text-D4utVkCo.js";import"./Form-D4R1YekT.js";import"./Button-W6h6LqJQ.js";import"./Hidden-BxNHn6hu.js";import"./useLabel-SKuz0xAF.js";import"./useLabels-DTPL2hi6.js";import"./useButton-Du_s3oIP.js";import"./SelectionIndicator-C4bCSSqv.js";import"./useField-DEHFco72.js";import"./VisuallyHidden-mXHZbk3a.js";import"./useControlledState-BFbpEbwN.js";import"./Label-Bx2FMeQ6.js";import"./Dialog-DTaRZt9n.js";import"./RSPContexts-CPwEBVvI.js";import"./OverlayArrow-D-O01WwV.js";import"./useResizeObserver-iRDz0PCC.js";import"./Collection-UMJcuUuS.js";import"./index-CgOuGLE0.js";import"./Separator-rxcASnPy.js";import"./SelectionManager-Dtp9ZmKg.js";import"./useEvent-SgyYcF3m.js";import"./scrollIntoView-BoOeRgl-.js";import"./useDescription-D5AIqWjS.js";import"./ListKeyboardDelegate-DWzGTbDd.js";import"./PressResponder-DxMBIfA0.js";import"./useLocalizedStringFormatter-Cea7ejb5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqI0Oqar.js";import"./getScrollParent-DmWmoZNO.js";import"./ModalOverlay-T8T40r7e.js";import"./x-B87ahrOa.js";import"./createLucideIcon-DZ4T53Ud.js";import"./useLocalizedStringFormatter-CSYYDYLy.js";import"./Heading-2memYd0M.js";import"./Button-CgVYtA8O.js";import"./Button.module-BB7N-cLd.js";import"./info-Bxsw_oHy.js";import"./Popover-C5QtIM1u.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
