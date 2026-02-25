import{j as e}from"./iframe-DXvST5Z4.js";import{R as a,a as c}from"./Radio-B0c6Y1Ak.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-CHgoLV5M.js";import"./utils-C7o3oNWQ.js";import"./useObjectRef-CtV_wNCy.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-C6PpwOyg.js";import"./useFocusable-CcTIrmj7.js";import"./index-BSKCIuFZ.js";import"./index-DpgVVg9m.js";import"./FieldError-Vgbr6qFP.js";import"./Text-DSf5Rh4t.js";import"./clsx-Ciqy0D92.js";import"./Text-6UKv5af0.js";import"./Form-COydQ7wv.js";import"./useFormValidation-IHOBEsDK.js";import"./Button-CS5zO-gt.js";import"./Hidden-CWijdCRp.js";import"./number-DfkVkf0F.js";import"./useLabels-B-ai_w_R.js";import"./useButton-Ci2Hi0-B.js";import"./SelectionIndicator-2Q3RLIt1.js";import"./useField-DQVM1v-x.js";import"./VisuallyHidden-yddiJwiQ.js";import"./useControlledState-CUr3wY18.js";import"./Label-Dxl4-KMf.js";import"./Dialog-CMxuyZUx.js";import"./RSPContexts-BWCV_dnI.js";import"./OverlayArrow-CUZtccMf.js";import"./useResizeObserver-saNrXExm.js";import"./Collection-DRMDRsvi.js";import"./CollectionBuilder-BWvoDEMo.js";import"./index-BmzGzd_D.js";import"./Separator-Crnp6GLu.js";import"./SelectionManager-ClVRgQnB.js";import"./useEvent-WiQdTJ77.js";import"./scrollIntoView-DGoemtfW.js";import"./useDescription-eOAvzRvb.js";import"./ListKeyboardDelegate-7buxBpHF.js";import"./PressResponder-DTxgLEge.js";import"./useLocalizedStringFormatter-CD11qPfL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DT1Z9xLE.js";import"./getScrollParent-Cb93IwoN.js";import"./Button-CyUV4N7K.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DiZlQPZS.js";import"./createLucideIcon-BQeZNnV0.js";import"./x-DPBUFtnb.js";import"./Heading-l0jQkvv9.js";import"./info-b_BswnH4.js";import"./Popover-do22Rs5p.js";const br={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],s=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:s,isDisabled:!0}},i={args:{children:s,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
