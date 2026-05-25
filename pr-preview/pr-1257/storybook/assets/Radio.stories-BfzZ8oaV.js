import{j as e}from"./iframe-D_tI-LG6.js";import{R as a,a as c}from"./Radio-C7eOqMib.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BmuT-4CL.js";import"./clsx-B-dksMZM.js";import"./Group-D4TlFZLJ.js";import"./useFocusRing-DXI1PCCK.js";import"./index-CQI2_EoC.js";import"./index-Dfh6ODF_.js";import"./FieldError-CvwrOOlF.js";import"./Text-CULJXyXM.js";import"./clsx-Ciqy0D92.js";import"./Text-C08wpa18.js";import"./Form-CS_16PeS.js";import"./Button-hSHq5h1Q.js";import"./Hidden-D7jFD7Zq.js";import"./useLabel-BIe-ZNj5.js";import"./useLabels-TnOGI8pm.js";import"./useButton-C13tj-EJ.js";import"./SelectionIndicator-B_gIlSD6.js";import"./useField-kyr3UNB4.js";import"./VisuallyHidden-DzLaLv62.js";import"./useControlledState-D0L1s8oX.js";import"./Label-BQu2VcZX.js";import"./Dialog-eXPf3smd.js";import"./RSPContexts-C1Z7Vm5X.js";import"./OverlayArrow-BGTLKWnm.js";import"./useResizeObserver-BsODJpzd.js";import"./Collection-B7H5xaqM.js";import"./index-BH9s9hTH.js";import"./Separator-Da8IBImH.js";import"./SelectionManager-g-9xTfpe.js";import"./useEvent-BeOXJju6.js";import"./scrollIntoView-Bwch4vY3.js";import"./useDescription-T8zc5UX5.js";import"./ListKeyboardDelegate-D_cKU6vh.js";import"./PressResponder-TY9kKsKw.js";import"./useLocalizedStringFormatter-COHjwRxp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMgKQrZS.js";import"./getScrollParent-BgKCMS-7.js";import"./ModalOverlay-DA3YGCTz.js";import"./x-QsPpT9iF.js";import"./createLucideIcon-Cjn_t3BL.js";import"./useLocalizedStringFormatter-CV-perCM.js";import"./Heading-DHTQxhhY.js";import"./Button-GXHEwtjb.js";import"./Button.module-BB7N-cLd.js";import"./info-bmcdp-s_.js";import"./Popover-xs5lyvhu.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
