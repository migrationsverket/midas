import{j as e}from"./iframe-CKu8C240.js";import{R as a,a as c}from"./Radio-BCAjjdVF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLX7J-q0.js";import"./clsx-B-dksMZM.js";import"./Group-Bha_k1zj.js";import"./useFocusRing-IcTt8PE9.js";import"./index-CxrKtYp1.js";import"./index-psXWBm0q.js";import"./FieldError-BcSOiHDV.js";import"./Text-BIK_Bqtk.js";import"./clsx-Ciqy0D92.js";import"./Text-B_i6Ec48.js";import"./Form-2G0gdMs3.js";import"./Button-IlsrLhR8.js";import"./Hidden-C6ArxBUW.js";import"./useLabel-MFPilgOm.js";import"./useLabels-CRoKZlxn.js";import"./useButton-g3DD9S56.js";import"./SelectionIndicator-BpVpDmUV.js";import"./useField-DqmtCAAT.js";import"./VisuallyHidden-DpKSD7VN.js";import"./useControlledState-DDnLcn-b.js";import"./Label-yhvRHLnp.js";import"./Dialog-BHEgxswy.js";import"./RSPContexts-BYfsL_eH.js";import"./OverlayArrow-BcnWWkWt.js";import"./useResizeObserver-N3DCOZNY.js";import"./Collection-DIgITLLQ.js";import"./index-X6seohsz.js";import"./Separator-BxU8eOti.js";import"./SelectionManager-crKVw0Rp.js";import"./useEvent-yXAGKDbR.js";import"./scrollIntoView-BgJofm9P.js";import"./useDescription-K8aGsr7r.js";import"./ListKeyboardDelegate-DLOXwcoE.js";import"./PressResponder-B9hl0S5Z.js";import"./useLocalizedStringFormatter-D8TEkIPn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjpYCp_W.js";import"./getScrollParent-BKhUwAVM.js";import"./ModalOverlay-COgAxzfv.js";import"./x-BRw1fyzP.js";import"./createLucideIcon-B2wZBV1e.js";import"./useLocalizedStringFormatter-BcHgs7SS.js";import"./Heading-BdP2SFj1.js";import"./Button-OIliGZdS.js";import"./Button.module-BB7N-cLd.js";import"./info-Bbg8-3uQ.js";import"./Popover-1iTyE8xt.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
