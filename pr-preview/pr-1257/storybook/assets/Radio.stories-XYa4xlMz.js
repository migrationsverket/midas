import{j as e}from"./iframe-BEEFzEsx.js";import{R as a,a as c}from"./Radio-CKp52WsK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BVGeTo1z.js";import"./clsx-B-dksMZM.js";import"./Group-4XxyF67-.js";import"./useFocusRing-DayYpa6h.js";import"./index-8CayshPQ.js";import"./index-icYaoe9T.js";import"./FieldError-HGo-eDX1.js";import"./Text-C3TPO5Ck.js";import"./clsx-Ciqy0D92.js";import"./Text-UbV7blhr.js";import"./Form-BGu38tuQ.js";import"./Button-DEUQgxtQ.js";import"./Hidden-C5MrPpGY.js";import"./useLabel-BuYW4wvI.js";import"./useLabels-B32s2Ncd.js";import"./useButton-lpD_KbJB.js";import"./SelectionIndicator-CBUlw6yG.js";import"./useField-BfF4G1fX.js";import"./VisuallyHidden-CkEbrnwS.js";import"./useControlledState-DWXRJogA.js";import"./Label-UegRM3NN.js";import"./Dialog-D5TRopuw.js";import"./RSPContexts-BmjfNHwO.js";import"./OverlayArrow-ROnHuORT.js";import"./useResizeObserver-DNYc8s-v.js";import"./Collection-Dr9ShMWk.js";import"./index-DtekuTHO.js";import"./Separator-C07IJJjh.js";import"./SelectionManager-Bxd3V494.js";import"./useEvent-DC72q5eP.js";import"./scrollIntoView-z3uFmj1G.js";import"./useDescription-Cvt0OA1S.js";import"./ListKeyboardDelegate-DP9rBTKu.js";import"./PressResponder-DQFnH3Jx.js";import"./useLocalizedStringFormatter-CLVweFRJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CcmLfJBi.js";import"./getScrollParent-DF6Cs9JC.js";import"./ModalOverlay-CUzYcfU4.js";import"./x-BRbO8G8P.js";import"./createLucideIcon-DyvpJvxd.js";import"./useLocalizedStringFormatter-BOrzEOxe.js";import"./Heading-Bqj6Dsy8.js";import"./Button-BTzHjp2C.js";import"./Button.module-BB7N-cLd.js";import"./info-lgeWUgSs.js";import"./Popover-VJ-uAztt.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
