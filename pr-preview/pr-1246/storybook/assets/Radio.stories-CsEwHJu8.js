import{j as e}from"./iframe-Dy3Rw66z.js";import{R as a,a as c}from"./Radio-cxW2MPaq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DtZwbp1W.js";import"./clsx-B-dksMZM.js";import"./Group-m_LNitHg.js";import"./useFocusRing-OfUNuA-J.js";import"./index-BL9qN4Dl.js";import"./index-C7Y6vcpr.js";import"./FieldError-CRQYtwdw.js";import"./Text-CjiLEpJA.js";import"./clsx-Ciqy0D92.js";import"./Text-BOYOdsAw.js";import"./Form-wengfQtM.js";import"./Button-DWNrJ0qN.js";import"./Hidden-BiAiu52X.js";import"./useLabel-B2Izx8ga.js";import"./useLabels-CiX5UPE6.js";import"./useButton-DzKW80i7.js";import"./SelectionIndicator-D2Bve7Mk.js";import"./useField-CNgzpJU1.js";import"./VisuallyHidden-ke2bwlqF.js";import"./useControlledState-CujSUpWY.js";import"./Label-B4GuKtlR.js";import"./Dialog-bkeEYBpC.js";import"./RSPContexts-C0IvGsnI.js";import"./OverlayArrow-JVmpp-8a.js";import"./useResizeObserver-C9I6YQo1.js";import"./Collection-B5ifOA6k.js";import"./index-B66NDRAz.js";import"./Separator-CBYmdaTi.js";import"./SelectionManager-CfByhG1g.js";import"./useEvent-DcOaT4Vn.js";import"./scrollIntoView-DNWLzZw6.js";import"./useDescription-BNi02mG9.js";import"./ListKeyboardDelegate-BafHrM3o.js";import"./PressResponder-CmoNFUc_.js";import"./useLocalizedStringFormatter-CUaO5Dey.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D6VEx1B6.js";import"./getScrollParent-sGEfSoh4.js";import"./ModalOverlay-BHj0afcc.js";import"./x-BY2wOibv.js";import"./createLucideIcon-CGcaihwO.js";import"./useLocalizedStringFormatter-BdDGNVQC.js";import"./Heading-CVTdlCZ7.js";import"./Button-Cl_Vf5i1.js";import"./Button.module-BB7N-cLd.js";import"./info-CP5B5L4I.js";import"./Popover-M-vUiPMz.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
