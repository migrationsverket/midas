import{j as e}from"./iframe-B1G803WZ.js";import{R as a,a as c}from"./Radio-CpoHcFGl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZnrybaQS.js";import"./clsx-B-dksMZM.js";import"./Group-CyICP2Gz.js";import"./useFocusRing-BRG6MU6i.js";import"./index-QTGoW66r.js";import"./index-DlLvDP-d.js";import"./FieldError-BgDbsvpf.js";import"./Text-CAOAbmad.js";import"./clsx-Ciqy0D92.js";import"./Text-B-AGxk9K.js";import"./Form-B7gF1kuZ.js";import"./Button-BLDI2QQO.js";import"./Hidden-DDSSvdX3.js";import"./useLabel-lJyU4eyr.js";import"./useLabels-CNGc6RPU.js";import"./useButton-BMGmM7Rg.js";import"./SelectionIndicator-BsObSX7g.js";import"./useField-BpNxarce.js";import"./VisuallyHidden-B__tRjGj.js";import"./useControlledState-BlM9LERq.js";import"./Label-DXBeXx8q.js";import"./Dialog-Ch1EbeUc.js";import"./RSPContexts-CUgMF8uD.js";import"./OverlayArrow-Cc1DaLcZ.js";import"./useResizeObserver-C-4yQLxN.js";import"./Collection-DabhM5jB.js";import"./index-2DG0SJGy.js";import"./Separator-CO6vWGxM.js";import"./SelectionManager-D1bQmGXg.js";import"./useEvent-AANzrBKs.js";import"./scrollIntoView-D6LN4GJ6.js";import"./useDescription-CwTth-CD.js";import"./ListKeyboardDelegate-CauOf7DY.js";import"./PressResponder-Dy-yCG68.js";import"./useLocalizedStringFormatter-BMaygKaE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C54_hIOs.js";import"./getScrollParent-CigfJhrW.js";import"./ModalOverlay-BO3lRZyj.js";import"./x-C-I1ixf_.js";import"./createLucideIcon-_Uu-7Yuy.js";import"./useLocalizedStringFormatter-D7GfR7l1.js";import"./Heading-D9vzlIYK.js";import"./Button-DU4dwGZ1.js";import"./Button.module-BB7N-cLd.js";import"./info-DauHfwG7.js";import"./Popover-DdKXcdAo.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
