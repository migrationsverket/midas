import{j as e}from"./iframe-t1Iclc3O.js";import{R as a,a as c}from"./Radio-CQkBC6YX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dct5gSIh.js";import"./clsx-B-dksMZM.js";import"./Group-C4VAEMXP.js";import"./useFocusRing-BpTBuj6A.js";import"./index-CA7bmWu8.js";import"./index-BvJk8jeb.js";import"./FieldError-Dmn3kR1x.js";import"./Text-DMJCfth7.js";import"./clsx-Ciqy0D92.js";import"./Text-BsC3oc9y.js";import"./Form-xhJeY9fj.js";import"./Button-Ct7y-I4z.js";import"./Hidden-CkUuXpVe.js";import"./useLabel-oq7jpXGJ.js";import"./useLabels-D-BGXnYn.js";import"./useButton-DGrW7rRJ.js";import"./SelectionIndicator-COhxVKzK.js";import"./useField-BEiuTqM5.js";import"./VisuallyHidden-Mig31NA5.js";import"./useControlledState-BnBZk0Xv.js";import"./Label-lDn8pxxv.js";import"./Dialog-Cun1OFiI.js";import"./RSPContexts-UAuwQRBq.js";import"./OverlayArrow-sqAO1Y60.js";import"./useResizeObserver-BPrna5LU.js";import"./Collection-Bu6R6sMK.js";import"./index-DepTptNq.js";import"./Separator-Dar1_vP5.js";import"./SelectionManager-T09jeenr.js";import"./useEvent-lx3RMHYY.js";import"./scrollIntoView-C_BhVA7v.js";import"./useDescription-Dv4_a3bS.js";import"./ListKeyboardDelegate-DsWr_BUs.js";import"./PressResponder-CDmh1jkO.js";import"./useLocalizedStringFormatter-Bv8tLnmi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYgWYWfB.js";import"./getScrollParent-DF09mu8u.js";import"./ModalOverlay-Cb1WmGKj.js";import"./x-DDaTip9H.js";import"./createLucideIcon-BnrXW6fJ.js";import"./useLocalizedStringFormatter-CiQgcaMc.js";import"./Heading-BhE84gYF.js";import"./Button-BRu7Bvor.js";import"./Button.module-BB7N-cLd.js";import"./info-DT0TYQNM.js";import"./Popover-BwQmNYpT.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
