import{j as e}from"./iframe-Dtb7hqk6.js";import{R as a,a as c}from"./Radio-BLFljsvy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DwGYJ0wo.js";import"./clsx-B-dksMZM.js";import"./Group-C8i1Lk7e.js";import"./useFocusRing-RCYgGSJe.js";import"./index-VDhw-r5F.js";import"./index-BaORL6uX.js";import"./FieldError-CymQbIva.js";import"./Text-Dub-joLT.js";import"./clsx-Ciqy0D92.js";import"./Text-wLzVGxAi.js";import"./Form-Cgua6hQf.js";import"./Button-BTwY4tVw.js";import"./Hidden-DQwBNi6i.js";import"./useLabel-D9hpHeoi.js";import"./useLabels-DiO75QpW.js";import"./useButton-D8LV6Lrl.js";import"./SelectionIndicator-CI77rCMa.js";import"./useField-BGrWgRXS.js";import"./VisuallyHidden-BB5g-TMV.js";import"./useControlledState-B0XIHWrT.js";import"./Label-Bed8VhVZ.js";import"./Dialog-C-AlgTuC.js";import"./RSPContexts-BRMTqOVY.js";import"./OverlayArrow-BjZbWS1M.js";import"./useResizeObserver-Ck20i0Zq.js";import"./Collection-BD38zrZ2.js";import"./index--ZHyBOuJ.js";import"./Separator-BuMeoZ_r.js";import"./SelectionManager-LaKed2sG.js";import"./useEvent-CrQdtEE9.js";import"./scrollIntoView-1v2Kx20c.js";import"./useDescription-BRXkpFwc.js";import"./ListKeyboardDelegate-C7bJgaTj.js";import"./PressResponder-B2KeLg43.js";import"./useLocalizedStringFormatter-imoO5bwq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCOTFe1W.js";import"./getScrollParent-DsHrkiO1.js";import"./ModalOverlay-GQ2O729M.js";import"./x-BPYm2e-6.js";import"./createLucideIcon-CMh4hIEg.js";import"./useLocalizedStringFormatter-BZzFMzpp.js";import"./Heading-pmehtflV.js";import"./Button-CgYfRdd2.js";import"./Button.module-BB7N-cLd.js";import"./info-QxePBk5N.js";import"./Popover-CnnSplSw.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
