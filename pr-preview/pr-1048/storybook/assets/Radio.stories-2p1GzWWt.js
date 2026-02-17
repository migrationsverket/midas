import{j as e}from"./iframe-E1AQR6fx.js";import{R as a,a as c}from"./Radio-JdHhnWy5.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-C_6zvM6e.js";import"./utils-C9k_Z1-L.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-ClTdqGvY.js";import"./index-BY2IQZHk.js";import"./index-LL_riRvH.js";import"./FieldError-EwGM1OTM.js";import"./Text-Dbmjj9FJ.js";import"./clsx-Ciqy0D92.js";import"./Text-CEr6kfZB.js";import"./Form-B-5JEGEy.js";import"./useFormValidation-rmf8_tul.js";import"./Button-Dcl0k1ed.js";import"./Hidden-9DB17Ws8.js";import"./number-DfkVkf0F.js";import"./useLabels-BBvY9IMA.js";import"./useButton-CI0sJCD2.js";import"./SelectionIndicator-CDXq8XPz.js";import"./useField-DWsbBHmV.js";import"./VisuallyHidden-Bpe1pimA.js";import"./useControlledState-DzUy243X.js";import"./Label-CiNpVGFO.js";import"./Dialog-Bwwd36rS.js";import"./RSPContexts-JAi78m_a.js";import"./OverlayArrow-c8jI_WJL.js";import"./useResizeObserver-4_OVHbc_.js";import"./Collection-CReVKHXj.js";import"./index-ZiZl57TD.js";import"./Separator-BeTDEIWg.js";import"./SelectionManager-JLfCQcPz.js";import"./useEvent-DhJ_snWh.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BmqQ3yEq.js";import"./ListKeyboardDelegate-ecpZjwil.js";import"./PressResponder-Cxq4ierj.js";import"./useLocalizedStringFormatter-Cs1nU2fr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D96kronK.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-Cj831iis.js";import"./Button-IKHtJ1-M.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dtq-c4fz.js";import"./createLucideIcon-D8ApGr_r.js";import"./x-CmXiTMgS.js";import"./Heading-at50eEei.js";import"./info-Bk0nJ5nz.js";import"./Popover-Ds9Hc7rx.js";const cr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ur=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,ur as __namedExportsOrder,cr as default};
