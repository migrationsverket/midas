import{j as e}from"./iframe-C2VOWNy0.js";import{R as a,a as c}from"./Radio-D51q0L8w.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DL-QRm3L.js";import"./clsx-B-dksMZM.js";import"./Group-Cp8FqMk5.js";import"./useFocusRing-tC1N5ZLd.js";import"./index-BznYJ3G3.js";import"./index-HiVmXaez.js";import"./FieldError-jk1VrFqC.js";import"./Text-Cxs3PxNa.js";import"./clsx-Ciqy0D92.js";import"./Text-Dp8Xagmv.js";import"./Form-DieApCia.js";import"./Button-MPfMNKtf.js";import"./Hidden-BpHByyx6.js";import"./useLabel-CxUvvvjx.js";import"./useLabels-Szx34EwE.js";import"./useButton-BqHFL3UV.js";import"./SelectionIndicator-DZy8CkPU.js";import"./useField-Cy-oi4SU.js";import"./VisuallyHidden-B4dPT57A.js";import"./useControlledState-DnakpviL.js";import"./Label-C1ufRAFG.js";import"./Dialog-EEUdHKU8.js";import"./RSPContexts-Cjt7Khrj.js";import"./OverlayArrow-p5y8_x7o.js";import"./useResizeObserver-B0dNv0Tp.js";import"./Collection-CHSE8riR.js";import"./index-BoJ_FJwf.js";import"./Separator-CnxiX1-7.js";import"./SelectionManager-B5yFKVU5.js";import"./useEvent-BuIe4DGB.js";import"./scrollIntoView-DdcCNGEe.js";import"./useDescription-DsRwbbxm.js";import"./ListKeyboardDelegate-BSxRmpJD.js";import"./PressResponder-B08Bu-FV.js";import"./useLocalizedStringFormatter-BtBT9ZZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qIg_zGPs.js";import"./getScrollParent-D2095vKQ.js";import"./ModalOverlay-CZMLE0FZ.js";import"./x-DCx4jyMP.js";import"./createLucideIcon-DQ7ZZ5Wg.js";import"./useLocalizedStringFormatter-BAlXpd6A.js";import"./Heading--TddKMjF.js";import"./Button-BlyWqisU.js";import"./Button.module-BFenTVPP.js";import"./info-BlgHr3Ny.js";import"./Popover-D7CQ6DW-.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
