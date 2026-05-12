import{j as e}from"./iframe-Bc-UjTRz.js";import{R as a,a as c}from"./Radio-BGJyjF2j.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CIlBOTwB.js";import"./clsx-B-dksMZM.js";import"./Group-Bzniv0F2.js";import"./useFocusRing-DmMd8vo8.js";import"./index-Dv-GYJsK.js";import"./index-qwqwtO2K.js";import"./FieldError-pc1xIYti.js";import"./Text-FaStHPve.js";import"./clsx-Ciqy0D92.js";import"./Text-EmoXsUsF.js";import"./Form-MxAWzd2x.js";import"./Button-BBbybcMx.js";import"./Hidden-Bobixe9k.js";import"./useLabel-BT5HgTPM.js";import"./useLabels-DPsB-EZ0.js";import"./useButton-CiKofbei.js";import"./SelectionIndicator-gZnD50wI.js";import"./useField-CMU55_2k.js";import"./VisuallyHidden-De98nctX.js";import"./useControlledState-Dz98cjw-.js";import"./Label-C-pg10x0.js";import"./Dialog-BSkPAq_n.js";import"./RSPContexts-BrVLX_Kr.js";import"./OverlayArrow-DfHYbDXs.js";import"./useResizeObserver-BMARLXxD.js";import"./Collection-DChyS9dt.js";import"./index-B-79tFRT.js";import"./Separator-PFdfuk3j.js";import"./SelectionManager-D8tK0CCZ.js";import"./useEvent-CjNBBIKs.js";import"./scrollIntoView-CTyn5EWZ.js";import"./useDescription-axt_AZYR.js";import"./ListKeyboardDelegate-Ch3xdJaU.js";import"./PressResponder-Bd0tk48r.js";import"./useLocalizedStringFormatter-CjnzGiN8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7sGwqcv.js";import"./getScrollParent-DeC6xe2r.js";import"./ModalOverlay-BHNnLZVe.js";import"./x-BlqzX1Dg.js";import"./createLucideIcon-Cvy5MTlk.js";import"./useLocalizedStringFormatter-CK7mP7jw.js";import"./Heading-riE0Xj9K.js";import"./Button-Ddjv6hkf.js";import"./Button.module-BB7N-cLd.js";import"./info-Cqa2lKV1.js";import"./Popover-BkUvNTOR.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
