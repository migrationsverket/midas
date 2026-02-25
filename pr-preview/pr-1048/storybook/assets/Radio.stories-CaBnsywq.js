import{j as e}from"./iframe-qS8p8Yj8.js";import{R as a,a as c}from"./Radio-BUfHQ8hC.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-SAyaxgPb.js";import"./utils-CLxZ6_kQ.js";import"./useObjectRef-C0Y2IBqc.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CdiqOQ6d.js";import"./useFocusable-C1cH2sYE.js";import"./index-Dkst7HIG.js";import"./index-D29fhoqb.js";import"./FieldError-C6jT-PXD.js";import"./Text-ClZ-RuRz.js";import"./clsx-Ciqy0D92.js";import"./Text-ByM0Af-l.js";import"./Form-r98TiEr6.js";import"./useFormValidation-qBecLUWh.js";import"./Button-DimkExxE.js";import"./Hidden-mOYAz_FQ.js";import"./number-DfkVkf0F.js";import"./useLabels-CutYc3RI.js";import"./useButton-4It9SdDz.js";import"./SelectionIndicator-BzEbHyoW.js";import"./useField-fUevUNIW.js";import"./VisuallyHidden-oxQkvabd.js";import"./useControlledState-CazLd_oJ.js";import"./Label-DxGYUE9Q.js";import"./Dialog-DS7W0Wny.js";import"./RSPContexts-lPk0mMUN.js";import"./OverlayArrow-BnrdSYrK.js";import"./useResizeObserver-Dh8rmeMA.js";import"./Collection-BpTyFAxE.js";import"./CollectionBuilder-Bit_wJez.js";import"./index-CWnYM0ky.js";import"./Separator-afGYKTLK.js";import"./SelectionManager-VxFMphYm.js";import"./useEvent-V2R5wKyi.js";import"./scrollIntoView-DK04Y_7e.js";import"./useDescription-DGHlAMqD.js";import"./ListKeyboardDelegate-DVXQn_pi.js";import"./PressResponder-CEI1d1fj.js";import"./useLocalizedStringFormatter-TI3MlKMg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-SnzFsxjM.js";import"./getScrollParent-faTxr7gT.js";import"./Button-B3ExRFXj.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CYia6YQs.js";import"./createLucideIcon-C52rh-_w.js";import"./x-DvfJYKu-.js";import"./Heading-oJVkiPMA.js";import"./info-BnzI4QuK.js";import"./Popover-GZATagMF.js";const br={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],s=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:s,isDisabled:!0}},i={args:{children:s,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const gr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{m as CustomValidation,o as Disabled,d as Horizontal,p as Invalid,n as OneItemDisabled,t as Primary,i as ReadOnly,l as Required,gr as __namedExportsOrder,br as default};
