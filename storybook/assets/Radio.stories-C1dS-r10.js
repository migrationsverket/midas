import{j as e}from"./iframe-HOh296WD.js";import{R as a,a as c}from"./Radio-CiCIJKLZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZ8gsIC2.js";import"./clsx-B-dksMZM.js";import"./Group-HvG2Yti2.js";import"./useFocusRing-DYVJSnUE.js";import"./index-DjQqBjj0.js";import"./index-1a6t-JIH.js";import"./FieldError-D6lU0Pje.js";import"./Text-B6416v9E.js";import"./clsx-Ciqy0D92.js";import"./Text-Bv9eh8EN.js";import"./Form-MZ71z1xz.js";import"./Button-WtWoZgXq.js";import"./Hidden-Cnam6lCF.js";import"./useLabel-hzJO6Opo.js";import"./useLabels-GBDC-30s.js";import"./useButton-2yjYEibm.js";import"./SelectionIndicator-CoYjaNwA.js";import"./useField-BFtU-cbq.js";import"./VisuallyHidden-C9pq-kak.js";import"./useControlledState-Bg0Nqr_y.js";import"./Label-By7b658h.js";import"./Dialog-BxROUpc5.js";import"./RSPContexts-d4Cds5di.js";import"./OverlayArrow-BfXMfHms.js";import"./useResizeObserver-CVvZeKJF.js";import"./Collection-BZa-_VGk.js";import"./index-BDx-WWmG.js";import"./Separator-CYyZ8P4I.js";import"./SelectionManager-CjAAe4Dw.js";import"./useEvent-CtSfpuPP.js";import"./scrollIntoView-lPtJp7l_.js";import"./useDescription-D6Cyf8Wc.js";import"./ListKeyboardDelegate-BOVwko3u.js";import"./PressResponder-Bx_uvq9y.js";import"./useLocalizedStringFormatter-ohmrZLXW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8NkdEJU.js";import"./getScrollParent-CvmsooRi.js";import"./ModalOverlay-CtckkWP9.js";import"./x-DOfhN6f-.js";import"./createLucideIcon-NVlRk-Ze.js";import"./useLocalizedStringFormatter-B6GQhFME.js";import"./Heading-CFbybLxg.js";import"./Button-BYcFvZWu.js";import"./Button.module-BB7N-cLd.js";import"./info-LLhf2hmC.js";import"./Popover-BtdQxMqg.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
