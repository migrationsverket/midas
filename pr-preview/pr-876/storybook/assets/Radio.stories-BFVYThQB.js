import{j as e}from"./iframe-drf9EhAh.js";import{R as a,a as c}from"./Radio-D3K6oNjI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DcVi9P2n.js";import"./clsx-B-dksMZM.js";import"./Group-DBxIGOXS.js";import"./useFocusRing-CFnRXdWt.js";import"./index-DYwtvWTx.js";import"./index-C8RswtkR.js";import"./FieldError-Csn4LdNH.js";import"./Text-4jcbiO_v.js";import"./clsx-Ciqy0D92.js";import"./Text-BGu5cWKN.js";import"./Form-D1u5ze6A.js";import"./Button-uX5YcsyE.js";import"./Hidden-DCsyu9It.js";import"./useLabel-Nvs3avqK.js";import"./useLabels-CghwtOHR.js";import"./useButton-BPOukTAc.js";import"./SelectionIndicator-CGpdz0B5.js";import"./useField-BeF2QHdx.js";import"./VisuallyHidden-S3B-3ASH.js";import"./useControlledState-PtQwVjVx.js";import"./Label-B4tCS9Bi.js";import"./Dialog-BecWSRZT.js";import"./RSPContexts-CdnNEEoB.js";import"./OverlayArrow-C5cLVELl.js";import"./useResizeObserver-D54OGLsw.js";import"./Collection-Bsu-J4zk.js";import"./index-BZAuS4Xz.js";import"./Separator-C-y7AnE8.js";import"./SelectionManager-Cw-cvhTc.js";import"./useEvent-DDZO5sYT.js";import"./scrollIntoView-DPcz4qGT.js";import"./useDescription-DoT_EJq_.js";import"./ListKeyboardDelegate-Cu9VUk_s.js";import"./PressResponder-JoTRNLaF.js";import"./useLocalizedStringFormatter-B8W8LNuc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-NoejLbZr.js";import"./getScrollParent-C25lSkvK.js";import"./ModalOverlay-Bw3fg6dQ.js";import"./x-BhSuHU0t.js";import"./createLucideIcon-ZHG_RQ_P.js";import"./useLocalizedStringFormatter-IFaLmUck.js";import"./Heading-BUSolncq.js";import"./Button-CKcwfDVm.js";import"./Button.module-BB7N-cLd.js";import"./info-CQOOIdcR.js";import"./Popover-DmAk6xa2.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
