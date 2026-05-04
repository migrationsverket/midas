import{j as e}from"./iframe-CcoWXO6B.js";import{R as a,a as c}from"./Radio-BMggsNQm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CvmzGVmn.js";import"./clsx-B-dksMZM.js";import"./Group-Co4Z1JTg.js";import"./useFocusRing-G8rwOJ76.js";import"./index-C0yg_Dj0.js";import"./index-CfJimmGR.js";import"./FieldError-C7pmBmh_.js";import"./Text-C1aI8N19.js";import"./clsx-Ciqy0D92.js";import"./Text-_y8SHX-J.js";import"./Form-JzoeJJ8G.js";import"./Button-CqtDw1Oq.js";import"./Hidden-CvcA5WHf.js";import"./useLabel-CGCEMESv.js";import"./useLabels-soLHUhGS.js";import"./useButton-Tnb7auBt.js";import"./SelectionIndicator-Cv50w2_h.js";import"./useField-DGwwU4v2.js";import"./VisuallyHidden-D34CPKZD.js";import"./useControlledState-6QHQ6cmR.js";import"./Label-Dz5b3s2x.js";import"./Dialog-YcwYl4gJ.js";import"./RSPContexts-2FrTYNtF.js";import"./OverlayArrow-0UDGu89H.js";import"./useResizeObserver-B8a0kWth.js";import"./Collection-Csy7u5cV.js";import"./index-BYbSV4b0.js";import"./Separator-BGyYcMKt.js";import"./SelectionManager-BsDWfXhd.js";import"./useEvent-HAa0P1KD.js";import"./scrollIntoView-DAiNmZGo.js";import"./useDescription-YzAHNiST.js";import"./ListKeyboardDelegate-BRi_rYns.js";import"./PressResponder-Cog0uUsK.js";import"./useLocalizedStringFormatter-BR6J7xDD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-gGfbTkXn.js";import"./getScrollParent-CrWEQW42.js";import"./ModalOverlay-NcdcMjL3.js";import"./x-CN2QjC-O.js";import"./createLucideIcon-CUodyQE8.js";import"./useLocalizedStringFormatter-DhaaJ_kE.js";import"./Heading-CQkLHTFo.js";import"./Button-tDMUeh37.js";import"./Button.module-BB7N-cLd.js";import"./info-rb3vhgVU.js";import"./Popover-CIVNeZMg.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
