import{j as e}from"./iframe-EPbYJ3aH.js";import{R as a,a as c}from"./Radio-DFHiIfp_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BFyuPOg-.js";import"./clsx-B-dksMZM.js";import"./Group-BQ6Jklka.js";import"./useFocusRing-vFk-w4SV.js";import"./index-CMa-XrnA.js";import"./index-CEkD2vSE.js";import"./FieldError-QU59tQ0w.js";import"./Text-DXPQUnae.js";import"./clsx-Ciqy0D92.js";import"./Text-DaRCpEpM.js";import"./Form-Bo93hY_x.js";import"./Button-D1GYvhMH.js";import"./Hidden-CHhsJSI8.js";import"./useLabel-Cb-B9e5n.js";import"./useLabels-bRXyuIVZ.js";import"./useButton-CS8vRMxU.js";import"./SelectionIndicator-Zdxp2d1B.js";import"./useField-Czz-xLhT.js";import"./VisuallyHidden-CRUsIDEu.js";import"./useControlledState-B7DCF9AW.js";import"./Label-hTDzrJT1.js";import"./Dialog-n78VMrVu.js";import"./RSPContexts-BCgG5sDy.js";import"./OverlayArrow-CYxpLZMe.js";import"./useResizeObserver-BbDP_QOM.js";import"./Collection-BCcQ8_2d.js";import"./index-Cx30adBd.js";import"./Separator-ZzheoSvB.js";import"./SelectionManager-fY8UI5b1.js";import"./useEvent-DrVet--T.js";import"./scrollIntoView-DIrfA17L.js";import"./useDescription-B2aIStsg.js";import"./ListKeyboardDelegate-CBTehG4B.js";import"./PressResponder-CbR5kRKy.js";import"./useLocalizedStringFormatter-Bl42Cfqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2RjG4Qj.js";import"./getScrollParent-IjDHduKu.js";import"./ModalOverlay-Dmzx1hCu.js";import"./x-DpzpagIl.js";import"./createLucideIcon-CDlkFEI-.js";import"./useLocalizedStringFormatter-scKp9dSq.js";import"./Heading-Dg6ksqRs.js";import"./Button-CF00LYtn.js";import"./Button.module-BB7N-cLd.js";import"./info-Bz-zzsad.js";import"./Popover-OahhESU-.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
