import{j as e}from"./iframe-DHMeiSea.js";import{R as a,a as c}from"./Radio-BlK5DFCD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4sbwA05.js";import"./clsx-B-dksMZM.js";import"./Group-D0pRYruO.js";import"./useFocusRing-BZqNlBLL.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./FieldError-lPOYj5uT.js";import"./Text-BM4AoGMt.js";import"./clsx-Ciqy0D92.js";import"./Text-OJU2i65y.js";import"./Form-BA5p4_Pr.js";import"./Button-X7Yqj24b.js";import"./Hidden-BDTDIVWX.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./SelectionIndicator-D6PB-Vso.js";import"./useField-DM8ENoK0.js";import"./VisuallyHidden-V6Y_A8T3.js";import"./useControlledState-CMV_FSB4.js";import"./Label-n0zIZ0YP.js";import"./Dialog-D_XYb5Vc.js";import"./RSPContexts-BSo_BzMb.js";import"./OverlayArrow-DxS57IzR.js";import"./useResizeObserver-Ze8rZcGU.js";import"./Collection-B5CYATRa.js";import"./index-CyT7ybeZ.js";import"./Separator-oRvQrtC5.js";import"./SelectionManager-qRhNxfSP.js";import"./useEvent-lEqisOMe.js";import"./scrollIntoView-CXJd081A.js";import"./useDescription-D2PosSZ6.js";import"./ListKeyboardDelegate-DrOjYDNI.js";import"./PressResponder-C89v-ZUc.js";import"./useLocalizedStringFormatter-C8QLbDFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BShm4XID.js";import"./getScrollParent-DqcIICEx.js";import"./ModalOverlay--PxWcUJn.js";import"./x-C9bWyskH.js";import"./createLucideIcon-DHfZe-cT.js";import"./useLocalizedStringFormatter-B2muSTfc.js";import"./Heading-BSgX0T3V.js";import"./Button-DRj-uv9d.js";import"./Button.module-BB7N-cLd.js";import"./info-DNKVSWHx.js";import"./Popover-BdjDmCqu.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
