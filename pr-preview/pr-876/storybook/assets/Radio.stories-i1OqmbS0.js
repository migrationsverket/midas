import{j as e}from"./iframe-DK3mrAyo.js";import{R as a,a as c}from"./Radio-CfxUj46x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-KWB3V7Ew.js";import"./clsx-B-dksMZM.js";import"./Group-FnEYpQ-A.js";import"./useFocusRing-GGCG3XqX.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./FieldError-7i4Fax51.js";import"./Text-ChQBgCn7.js";import"./clsx-Ciqy0D92.js";import"./Text-BG4EGVIm.js";import"./Form-ZU5Jc3do.js";import"./Button-Yd8CTw2L.js";import"./Hidden-B9O9f11_.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./SelectionIndicator-tPL3-k8A.js";import"./useField-BURaNJxe.js";import"./VisuallyHidden-CuCKnYKC.js";import"./useControlledState-c72KLHwF.js";import"./Label-D_tmWt9z.js";import"./Dialog-D9WESYo-.js";import"./RSPContexts-CbpbC2QZ.js";import"./OverlayArrow-rKrAE_rE.js";import"./useResizeObserver-NQKT9YoR.js";import"./Collection-DIXCXOkQ.js";import"./index-CepTmLHf.js";import"./Separator-BnWPNY9L.js";import"./SelectionManager-Dknd4-dt.js";import"./useEvent-q7OaXBNw.js";import"./scrollIntoView-DzztdlRp.js";import"./useDescription-e3GpwAAN.js";import"./ListKeyboardDelegate-jeW_soEh.js";import"./PressResponder-8JpLfvHI.js";import"./useLocalizedStringFormatter-CXfqNWhw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DuQmEC3G.js";import"./getScrollParent-CsmfW8t8.js";import"./ModalOverlay-CfdiJ_2P.js";import"./x-Cj5OGhdg.js";import"./createLucideIcon-ZHubZ-OE.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./Heading-D2LEgSAb.js";import"./Button-BKk1KYPK.js";import"./Button.module-BB7N-cLd.js";import"./info-KL40TE4F.js";import"./Popover-B-7tZGlC.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
