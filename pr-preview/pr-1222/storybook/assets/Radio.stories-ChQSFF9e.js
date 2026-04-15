import{j as e}from"./iframe-CgWG_iU2.js";import{R as a,a as c}from"./Radio-BaY6pd3D.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-_M8wNiGT.js";import"./clsx-B-dksMZM.js";import"./Group-C-cJ-Nhy.js";import"./useFocusRing-Dsycni8a.js";import"./index-DxbG3zi7.js";import"./index-BG0K86OR.js";import"./FieldError-D-IJ4T5L.js";import"./Text-Dj7d9dGS.js";import"./clsx-Ciqy0D92.js";import"./Text-dFUGDIq7.js";import"./Form-CrH2ZpvP.js";import"./Button-ByOlI6-C.js";import"./Hidden-D3aMc9rP.js";import"./useLabel-DU9qnLW0.js";import"./useLabels-D66rAip6.js";import"./useButton-CtVOG2X0.js";import"./SelectionIndicator-C0agU0dY.js";import"./useField-s0ioTJPg.js";import"./VisuallyHidden-oanLmiAX.js";import"./useControlledState-BM6BESXh.js";import"./Label-Bvp9caED.js";import"./Dialog-NxrkXmQs.js";import"./RSPContexts-Bs45BnO9.js";import"./OverlayArrow-CpNrJJvN.js";import"./useResizeObserver-C6DyJ9gC.js";import"./Collection-BcC6_I8T.js";import"./index-Dn0BG2yc.js";import"./Separator-BcQ7oZhF.js";import"./SelectionManager-CTT6WwYs.js";import"./useEvent-FPbp72qp.js";import"./scrollIntoView-CqQuMmwT.js";import"./useDescription-CpHd73jI.js";import"./ListKeyboardDelegate-DqqiQJTe.js";import"./PressResponder-BcFSV-iY.js";import"./useLocalizedStringFormatter-BQ-Yoit3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BG0HieEY.js";import"./getScrollParent-DZ0TSZLG.js";import"./ModalOverlay-CXx03gPK.js";import"./x-Dv2iooYO.js";import"./createLucideIcon-DjCctUN5.js";import"./useLocalizedStringFormatter-Bvq7R4Wr.js";import"./Heading-Cj6qOAV_.js";import"./Button-nHuGQ5i0.js";import"./Button.module-BB7N-cLd.js";import"./info-2HeSXoER.js";import"./Popover-uHHf-EWQ.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
