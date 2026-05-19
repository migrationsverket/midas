import{j as e}from"./iframe-B3gHnZ_4.js";import{R as a,a as c}from"./Radio-_nQ_qaL_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CdET5WnV.js";import"./clsx-B-dksMZM.js";import"./Group-DDmPJ7wi.js";import"./useFocusRing-DIJ0sANO.js";import"./index-D2HHYUpr.js";import"./index-ClVbkfNF.js";import"./FieldError-pXnrGUBV.js";import"./Text-C8paMr1m.js";import"./clsx-Ciqy0D92.js";import"./Text-DcZUZMzL.js";import"./Form-BZOB3ErZ.js";import"./Button-tj4RHwPQ.js";import"./Hidden-dfLF-Ti8.js";import"./useLabel-Co4jWqc7.js";import"./useLabels-BzsFe6ap.js";import"./useButton-wyQ3LRsu.js";import"./SelectionIndicator-BG6APWev.js";import"./useField-DuF-U182.js";import"./VisuallyHidden-D_rpyZ3J.js";import"./useControlledState-BvujKDrt.js";import"./Label-MtIz8ajw.js";import"./Dialog-AHNrxR7o.js";import"./RSPContexts-DQ5I8I6_.js";import"./OverlayArrow-BVSn0I_-.js";import"./useResizeObserver-0LoE_Fxu.js";import"./Collection-Bm1PjTGX.js";import"./index-BomGYp4m.js";import"./Separator-B5ZOHvGy.js";import"./SelectionManager-kVD2iHAs.js";import"./useEvent-BVTuF7AB.js";import"./scrollIntoView-BeJDYg3T.js";import"./useDescription-C4OXEZSl.js";import"./ListKeyboardDelegate-BQ6Nv5pj.js";import"./PressResponder-DT1MZKJ6.js";import"./useLocalizedStringFormatter-DX3s4o0C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DvyKmtO9.js";import"./getScrollParent-DysXOOBH.js";import"./ModalOverlay-D2Wzdftf.js";import"./x-DCrvMdPs.js";import"./createLucideIcon-ClRsgvfJ.js";import"./useLocalizedStringFormatter-Cp3BGEKs.js";import"./Heading-gxWPWf0v.js";import"./Button-Cw4w6g1P.js";import"./Button.module-BB7N-cLd.js";import"./info-CCUswF-V.js";import"./Popover-D0wpsLPZ.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
