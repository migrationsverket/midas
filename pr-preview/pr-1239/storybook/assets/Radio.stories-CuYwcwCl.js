import{j as e}from"./iframe-CZvMPihu.js";import{R as a,a as c}from"./Radio-Djc0ljY5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cqj1DeIe.js";import"./clsx-B-dksMZM.js";import"./Group-DMivJjDQ.js";import"./useFocusRing-B8JnrIcb.js";import"./index-GihrdCeH.js";import"./index-BkbhKg_o.js";import"./FieldError-BTAbwmK2.js";import"./Text-Dw0gnghQ.js";import"./clsx-Ciqy0D92.js";import"./Text-DgbEXfJ4.js";import"./Form-o2rb1jhL.js";import"./Button-cyaqw3RD.js";import"./Hidden-DWCJo24h.js";import"./useLabel-CaU9RgyQ.js";import"./useLabels-DwUdsAUl.js";import"./useButton-DBJlOvpF.js";import"./SelectionIndicator-DoPI1KKj.js";import"./useField-Ce8tB8jB.js";import"./VisuallyHidden-CgB8hx88.js";import"./useControlledState-FTjsg_U3.js";import"./Label-Cwwy-uVX.js";import"./Dialog-D8ZYrMfm.js";import"./RSPContexts-rKUrJdMM.js";import"./OverlayArrow-289ws-2M.js";import"./useResizeObserver-CCIHhEzp.js";import"./Collection-Bc6fSmVS.js";import"./index-DYYCl4w-.js";import"./Separator-C0Jwfzsf.js";import"./SelectionManager-BO7qKHfi.js";import"./useEvent-CdJapIWn.js";import"./scrollIntoView-DuwlJzJe.js";import"./useDescription-Di037rLQ.js";import"./ListKeyboardDelegate-DhhwE-OE.js";import"./PressResponder-DGNkfhIq.js";import"./useLocalizedStringFormatter-DcVcSICC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C0DkVVOH.js";import"./getScrollParent-CWdG5ZLM.js";import"./ModalOverlay-rg8WRRv_.js";import"./x-COwp3eV_.js";import"./createLucideIcon-w0hL8zu1.js";import"./useLocalizedStringFormatter-CQr6tlIE.js";import"./Heading-ViyAyNFK.js";import"./Button-DHBiSvIz.js";import"./Button.module-BB7N-cLd.js";import"./info-U2EGid5T.js";import"./Popover-Dd-0iVOw.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
