import{j as e}from"./iframe-C2f3UQ4Q.js";import{R as a,a as c}from"./Radio-BJZWdV4-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLD-we63.js";import"./clsx-B-dksMZM.js";import"./Group-oML09Sjz.js";import"./useFocusRing-DVjvJ21q.js";import"./index-l0Ekt22g.js";import"./index-CjqMqS35.js";import"./FieldError-BA_pXY2h.js";import"./Text-CFY7ThNC.js";import"./clsx-Ciqy0D92.js";import"./Text-BR3njYC5.js";import"./Form-CgrJV7ns.js";import"./Button-CzARpBSV.js";import"./Hidden-BHtTPiMo.js";import"./useLabel-DqyzBRvV.js";import"./useLabels-DcONnofe.js";import"./useButton-CJnW-LDE.js";import"./SelectionIndicator-D6k5vYNx.js";import"./useField-0g5R6fiS.js";import"./VisuallyHidden-Cug_bQSe.js";import"./useControlledState-BkR5yEcJ.js";import"./Label-Ca1BE5-1.js";import"./Dialog-DIomJqtq.js";import"./RSPContexts-Bp3NLRK2.js";import"./OverlayArrow-BunP0fua.js";import"./useResizeObserver-CtCc1gMc.js";import"./Collection-D-JS7TLq.js";import"./index-CoMFBIZN.js";import"./Separator-BNQyI1hy.js";import"./SelectionManager-Dawn3y1S.js";import"./useEvent-CN0f60Tw.js";import"./scrollIntoView-Bp6pSfX4.js";import"./useDescription-Majc7XiZ.js";import"./ListKeyboardDelegate-B4-w-E8p.js";import"./PressResponder-PicVGm3l.js";import"./useLocalizedStringFormatter-BB6QmVJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2Tp_pi8.js";import"./getScrollParent-Cb8Zmktw.js";import"./ModalOverlay-BFjQR49T.js";import"./x-CEzz9POE.js";import"./createLucideIcon-B0GS721z.js";import"./useLocalizedStringFormatter-DxAPCXcs.js";import"./Heading-CZXc5KA3.js";import"./Button-Cubx1h0F.js";import"./Button.module-BB7N-cLd.js";import"./info-9Nz0ofXd.js";import"./Popover-DGCgmkqO.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
