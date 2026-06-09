import{j as e}from"./iframe-usp88RXh.js";import{R as a,a as c}from"./Radio-DwMrzjKr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BXqK3GQS.js";import"./clsx-B-dksMZM.js";import"./Group-CnsB5Sjn.js";import"./useFocusRing-BnVcW9EZ.js";import"./index-BaVleoZK.js";import"./index-B6kb6Xt1.js";import"./FieldError-DqHkKxnT.js";import"./Text-nB3EVkcg.js";import"./clsx-Ciqy0D92.js";import"./Text-BRG4rOQY.js";import"./Form-DUUm_saO.js";import"./Button-B-TKlEdD.js";import"./Hidden-BTFNJ6XH.js";import"./useLabel-Rz3gMjr1.js";import"./useLabels-BlUIkC-Y.js";import"./useButton-Dr8gKvJs.js";import"./SelectionIndicator-Bd8Rqh60.js";import"./useField-CCIeI78y.js";import"./VisuallyHidden-CVXdiwcx.js";import"./useControlledState-Bk0Ug2PQ.js";import"./Label-ywji7JJ9.js";import"./Dialog-BSHWqXy6.js";import"./RSPContexts-D2RkbuPx.js";import"./OverlayArrow-L2PLXjE1.js";import"./useResizeObserver-cQajaf1D.js";import"./Collection-BUmyaGSs.js";import"./index-tOgqOeDj.js";import"./Separator-CtHn-ijp.js";import"./SelectionManager-UhU7cBz3.js";import"./useEvent-DwdxgGhf.js";import"./scrollIntoView-CDzWWEyI.js";import"./useDescription-aGifrTIo.js";import"./ListKeyboardDelegate-B6XtyFtu.js";import"./PressResponder-Btnj_Ryu.js";import"./useLocalizedStringFormatter-zmPeK12I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tTrc6B4i.js";import"./getScrollParent-C_HcNQWA.js";import"./ModalOverlay-kzwwZkbS.js";import"./x-BTd5rXGN.js";import"./createLucideIcon-DHgdMN24.js";import"./useLocalizedStringFormatter-JvTntPif.js";import"./Heading-Ce7-DSoc.js";import"./Button-DOBuF016.js";import"./Button.module-BB7N-cLd.js";import"./info-DyG7EEjV.js";import"./Popover-Bz5iSXFX.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
