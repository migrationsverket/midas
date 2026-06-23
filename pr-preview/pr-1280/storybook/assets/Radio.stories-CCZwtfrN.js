import{j as e}from"./iframe-BusKbIuL.js";import{R as a,a as c}from"./Radio-oKBML954.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BLk-MBDB.js";import"./clsx-B-dksMZM.js";import"./Group-CBE_Jb-J.js";import"./useFocusRing-Bkm-baB3.js";import"./index-CnP2yi1p.js";import"./index-DAOAnwsN.js";import"./FieldError-DYrJGow5.js";import"./Text-By1Rmolv.js";import"./clsx-Ciqy0D92.js";import"./Text-BSlgEswi.js";import"./Form-DVi0rKS7.js";import"./Button-D16PjYbu.js";import"./Hidden-IsjPxMOX.js";import"./useLabel-RD_wy9US.js";import"./useLabels-Dzl_jQ3w.js";import"./useButton-BmGPf_ms.js";import"./SelectionIndicator-DIVBfEpP.js";import"./useField-TTAqEZ-L.js";import"./VisuallyHidden-DfUkCTQh.js";import"./useControlledState-VeRXhIhk.js";import"./Label-TAC8RkyL.js";import"./Dialog-Bl6BPUcG.js";import"./RSPContexts-CMg-o8P6.js";import"./OverlayArrow-XVvRfD3R.js";import"./useResizeObserver-BmwpnOhf.js";import"./Collection-DZTceJ5c.js";import"./index-DlodUe4K.js";import"./Separator-Br0Bxz8Z.js";import"./SelectionManager-CZQO9iyQ.js";import"./useEvent-D1SRwD2V.js";import"./scrollIntoView-DVC3yEfE.js";import"./useDescription-0cGLMs3d.js";import"./ListKeyboardDelegate-BhTo0HRI.js";import"./PressResponder-NQ2bsNbb.js";import"./useLocalizedStringFormatter-BzO50CYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CLn9Imaq.js";import"./getScrollParent-BBgpxqF_.js";import"./ModalOverlay-C6pC5Rcr.js";import"./x-BjSALVJQ.js";import"./createLucideIcon-CsIH265l.js";import"./useLocalizedStringFormatter-B0UBIKFs.js";import"./Heading-MC_GZ1Jp.js";import"./Button-CEECLnQG.js";import"./Button.module-BB7N-cLd.js";import"./info-BdG13eZS.js";import"./Popover-DcyZJrol.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
