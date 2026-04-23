import{j as e}from"./iframe-yW9ZA3bb.js";import{R as a,a as c}from"./Radio-BLm7NgiJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUJhr-Te.js";import"./clsx-B-dksMZM.js";import"./Group-DSLIBANt.js";import"./useFocusRing-Bwgr8eO9.js";import"./index-BH1NNJD9.js";import"./index-XMJgY8GA.js";import"./FieldError-CaZE3eKK.js";import"./Text-Cihq6LYV.js";import"./clsx-Ciqy0D92.js";import"./Text-DMsq_JIv.js";import"./Form-Dyi7ByEU.js";import"./Button-Dz51wr3r.js";import"./Hidden-zw4kT8e2.js";import"./useLabel-BCJoncEW.js";import"./useLabels-CW7YtnuA.js";import"./useButton-Cr-TXgCI.js";import"./SelectionIndicator-DU1EMdvh.js";import"./useField-DB6t2HH5.js";import"./VisuallyHidden-BLpKIy7O.js";import"./useControlledState-YFMNQnxY.js";import"./Label-BktIqWh4.js";import"./Dialog-CA921wXk.js";import"./RSPContexts-ESkvyycf.js";import"./OverlayArrow-Bc9LmL03.js";import"./useResizeObserver-CnuGVro4.js";import"./Collection-Bw0lf7NA.js";import"./index-rTiiKE-t.js";import"./Separator-WIHQB6Ek.js";import"./SelectionManager-BxnG2-K_.js";import"./useEvent-7NkuCPOG.js";import"./scrollIntoView-DxGdu0tm.js";import"./useDescription-Cw85_cIo.js";import"./ListKeyboardDelegate-HzIwCYcA.js";import"./PressResponder-CZpqY1IJ.js";import"./useLocalizedStringFormatter-sAga3kqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C84mhlBd.js";import"./getScrollParent-ByY90j8k.js";import"./ModalOverlay-CQLS8SbE.js";import"./x-DnrjJHU3.js";import"./createLucideIcon-Dzjc7ziG.js";import"./useLocalizedStringFormatter-bv3drFF0.js";import"./Heading-Df13RFa7.js";import"./Button-CVdu7ubL.js";import"./Button.module-BB7N-cLd.js";import"./info-DvvFrCJ1.js";import"./Popover-DjjRZZRa.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
