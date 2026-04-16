import{j as e}from"./iframe-CrvsXgmc.js";import{R as a,a as c}from"./Radio-C2hJn8EG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-gzCDVK3q.js";import"./clsx-B-dksMZM.js";import"./Group-BbSxKl7e.js";import"./useFocusRing-Y3IR8t1i.js";import"./index-BMhhcqfp.js";import"./index-DzLz0lsv.js";import"./FieldError-5hEdY4LM.js";import"./Text-CF9Q2mcX.js";import"./clsx-Ciqy0D92.js";import"./Text-CA7uWGGn.js";import"./Form-bos5N932.js";import"./Button-BJCsZZXs.js";import"./Hidden-DAMs1NRQ.js";import"./useLabel-MRD8p-bz.js";import"./useLabels-BpU9vMZ-.js";import"./useButton-BK6QZOGv.js";import"./SelectionIndicator-o2cRMrjj.js";import"./useField-ctyqcCoa.js";import"./VisuallyHidden-GavGRjxA.js";import"./useControlledState-CFUIREeB.js";import"./Label-DC1BslHI.js";import"./Dialog-BAorNuLL.js";import"./RSPContexts-DH1zBAtU.js";import"./OverlayArrow-j-4w6ptt.js";import"./useResizeObserver-DS_Mr__l.js";import"./Collection-DgAx05eF.js";import"./index-CXAqSaFB.js";import"./Separator-Cfr8Q9pc.js";import"./SelectionManager-uwLQE_60.js";import"./useEvent-DI2Xn_Gs.js";import"./scrollIntoView-C_cKPCXn.js";import"./useDescription-Cw3L3Xvg.js";import"./ListKeyboardDelegate-BxUpHfVv.js";import"./PressResponder-DQ6SDLVP.js";import"./useLocalizedStringFormatter-CdYDGaj0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7nDb7Uq.js";import"./getScrollParent-DN_amqRA.js";import"./ModalOverlay-CUkgOGL-.js";import"./x-_k-E3REV.js";import"./createLucideIcon-C4drZqEd.js";import"./useLocalizedStringFormatter-CB9PjSb0.js";import"./Heading-BYcCu-yi.js";import"./Button-C1guSp-1.js";import"./Button.module-BB7N-cLd.js";import"./info-_82HXk6z.js";import"./Popover-BlcHhC3m.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
