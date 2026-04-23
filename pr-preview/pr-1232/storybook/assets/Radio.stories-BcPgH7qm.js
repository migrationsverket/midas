import{j as e}from"./iframe-CiZlFozv.js";import{R as a,a as c}from"./Radio-Dd3XYAmU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtoKVfJq.js";import"./clsx-B-dksMZM.js";import"./Group-DRiAJmX2.js";import"./useFocusRing-C8iINmO1.js";import"./index-C8NJLHuH.js";import"./index-B_UHrRhL.js";import"./FieldError-BFjjyPg1.js";import"./Text-Dp6H8GRU.js";import"./clsx-Ciqy0D92.js";import"./Text-CXoRcQkQ.js";import"./Form-CPfOE8lK.js";import"./Button-CxmVBxVQ.js";import"./Hidden-CBUgc4Bq.js";import"./useLabel-BKmML2fi.js";import"./useLabels-I5-LcgNP.js";import"./useButton-C0UTJWwd.js";import"./SelectionIndicator-OL0J49H_.js";import"./useField-Bx-SoAUQ.js";import"./VisuallyHidden-D6ktoCNF.js";import"./useControlledState-k5LcuuXZ.js";import"./Label-D2By97-8.js";import"./Dialog-4xeHXqVs.js";import"./RSPContexts-fJFJPzCo.js";import"./OverlayArrow-U4qyFhu7.js";import"./useResizeObserver-DgIV1Bdx.js";import"./Collection-Dmi7A3go.js";import"./index-CGOcwJAX.js";import"./Separator-As17z0QB.js";import"./SelectionManager-4hK9Esex.js";import"./useEvent-CUD5UUml.js";import"./scrollIntoView-De6oNUSa.js";import"./useDescription-6-pChhm_.js";import"./ListKeyboardDelegate-B1l65HEm.js";import"./PressResponder-B7ETLP0V.js";import"./useLocalizedStringFormatter-BdUUKMic.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BObUKTOo.js";import"./getScrollParent-BTcAThv_.js";import"./ModalOverlay-B4ShAOHT.js";import"./x-DBo1ex8S.js";import"./createLucideIcon-DFSC9aW4.js";import"./useLocalizedStringFormatter-BpsAI3rB.js";import"./Heading-D2XIdd63.js";import"./Button-BS9Q-Own.js";import"./Button.module-BB7N-cLd.js";import"./info-BpnxZVgw.js";import"./Popover-BG0a_Iou.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
