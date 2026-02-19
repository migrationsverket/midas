import{j as e}from"./iframe-C8C_T9pK.js";import{R as a,a as c}from"./Radio-D9buMBS9.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-BCjufN1z.js";import"./utils-665vdH3I.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-aErJaiMB.js";import"./index-BgFSJS_x.js";import"./index-Bnqj0GEH.js";import"./FieldError--KTQss0Q.js";import"./Text-oN8gJ-0T.js";import"./clsx-Ciqy0D92.js";import"./Text-B2x6FBCA.js";import"./Form-BLLYgCAY.js";import"./useFormValidation-DeBAaOac.js";import"./Button-DgcJy71N.js";import"./Hidden-BK2dTpyi.js";import"./number-DfkVkf0F.js";import"./useLabels-DLIgyPIl.js";import"./useButton-Bir6pOh3.js";import"./SelectionIndicator-HavseNTU.js";import"./useField-D6-PoPba.js";import"./VisuallyHidden-H5Q5oE0x.js";import"./useControlledState-CVPSNT_z.js";import"./Label-BuLTpC8X.js";import"./Dialog-B14tOGd2.js";import"./RSPContexts-heE_-Jeu.js";import"./OverlayArrow-CFiMoUoE.js";import"./useResizeObserver-C3Mb9prk.js";import"./Collection-DujBSbvT.js";import"./index-nk6UQK0x.js";import"./Separator-DNSZ5KKI.js";import"./SelectionManager-Bq1JnUnl.js";import"./useEvent-CmeL3S54.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B3b6CwtQ.js";import"./ListKeyboardDelegate-CEPsIi7y.js";import"./PressResponder-BOIRIx9Y.js";import"./useLocalizedStringFormatter-D9h1UHb6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D0KE5JXY.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-DZdM0zBg.js";import"./Button-BjszVOBG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFq-SMx0.js";import"./createLucideIcon-CyML3fXz.js";import"./x-DusTrbha.js";import"./Heading-DNNw60WL.js";import"./info-4Gmv43T1.js";import"./Popover-Df-Fld4f.js";const cr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ur=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,ur as __namedExportsOrder,cr as default};
