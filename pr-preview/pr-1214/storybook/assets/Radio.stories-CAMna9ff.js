import{j as e}from"./iframe-CjS4NLOn.js";import{R as a,a as c}from"./Radio-CE4IlEvR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bd-AzVom.js";import"./clsx-B-dksMZM.js";import"./Group-D5gxugEo.js";import"./useFocusRing-DglKaSCo.js";import"./index-BAKX6Q0C.js";import"./index-Bkm3VJ40.js";import"./FieldError-mjdlktiQ.js";import"./Text-BbW2XwBz.js";import"./clsx-Ciqy0D92.js";import"./Text-CX-M1xx_.js";import"./Form-BO2cd7HV.js";import"./Button-Dd-c5XOo.js";import"./Hidden-DQ5FusQj.js";import"./useLabel-BNspr0mf.js";import"./useLabels-Dg9_l0gi.js";import"./useButton-K15jCtz1.js";import"./SelectionIndicator-CWcDMFoj.js";import"./useField-B9WQ8ZUl.js";import"./VisuallyHidden-CY_5XPqM.js";import"./useControlledState-BbWK1__y.js";import"./Label-BnCfDUoG.js";import"./Dialog-Dc12lFt1.js";import"./RSPContexts-kqnwGWDt.js";import"./OverlayArrow-Cp2ICLCM.js";import"./useResizeObserver-BOPoLO7H.js";import"./Collection-D4qV2wHW.js";import"./index-BAbiaVhP.js";import"./Separator-CpprL7gR.js";import"./SelectionManager-BCUC7b48.js";import"./useEvent-CiAr47a4.js";import"./scrollIntoView-2fiPBvL-.js";import"./useDescription-CBNmeEe_.js";import"./ListKeyboardDelegate-8fQbIU8o.js";import"./PressResponder-C_CMVuXZ.js";import"./useLocalizedStringFormatter-gid5zSz2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ctB5lWfz.js";import"./getScrollParent-CSIbG2HY.js";import"./Modal-B4gH7KQG.js";import"./x-Dux1vDQf.js";import"./createLucideIcon-DkfyV_c3.js";import"./useLocalizedStringFormatter-FU720mIV.js";import"./Heading-pmYegQEd.js";import"./Button-iv9BguPP.js";import"./Button.module-BB7N-cLd.js";import"./info-k4HkQ0Eq.js";import"./Popover-B-u84laR.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
