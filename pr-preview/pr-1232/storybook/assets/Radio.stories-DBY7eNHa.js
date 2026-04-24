import{j as e}from"./iframe-u611P0T1.js";import{R as a,a as c}from"./Radio-C5-bkH8w.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BdhmhbmB.js";import"./clsx-B-dksMZM.js";import"./Group-CJpHDVfm.js";import"./useFocusRing-x1014Y4C.js";import"./index-DjGI_wvA.js";import"./index-bc3f0jR5.js";import"./FieldError-BUsLHsVx.js";import"./Text-C1ITd__M.js";import"./clsx-Ciqy0D92.js";import"./Text-BiFS0ps1.js";import"./Form-Ct-T4_sP.js";import"./Button-DHuMXkEV.js";import"./Hidden-BwAa9Aqn.js";import"./useLabel-UVmCtmUg.js";import"./useLabels-DdnJKdMx.js";import"./useButton-Ck0FEmlG.js";import"./SelectionIndicator-yCd4h3zR.js";import"./useField-DM_n0gFB.js";import"./VisuallyHidden-CPF-h8vx.js";import"./useControlledState-C8WxcwQm.js";import"./Label-C-LHc2be.js";import"./Dialog-DWlne9J1.js";import"./RSPContexts-CHqXj6wS.js";import"./OverlayArrow-DAE7O7dg.js";import"./useResizeObserver-CbeqsHNK.js";import"./Collection-6utQT-aI.js";import"./index-CY3bk5JT.js";import"./Separator-BuPoNgXF.js";import"./SelectionManager-B545sqsy.js";import"./useEvent-NAjU2EOD.js";import"./scrollIntoView-XJLuBOkU.js";import"./useDescription-Dz-E1gaV.js";import"./ListKeyboardDelegate-BSlu98Kz.js";import"./PressResponder-CUS5_lY9.js";import"./useLocalizedStringFormatter-DfPMqepd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tAspbt5B.js";import"./getScrollParent-Dr2tWDHe.js";import"./ModalOverlay-C1viWdRz.js";import"./x-BKnl8vZI.js";import"./createLucideIcon-DZ-Vm0W7.js";import"./useLocalizedStringFormatter-B5u32oMj.js";import"./Heading-CqJG1U4J.js";import"./Button-D0hAEojt.js";import"./Button.module-BB7N-cLd.js";import"./info-CNWJ9NT2.js";import"./Popover-C1J1shoo.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
