import{j as e}from"./iframe-DtxoFKwo.js";import{a,R as d}from"./Radio-BI-qUS1n.js";import"./preload-helper-Dp1pzeXC.js";import"./Group-BNe777Yx.js";import"./utils-DIWkIshB.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CdyWXIln.js";import"./index-CtRPRv0Z.js";import"./index-B505Biom.js";import"./FieldError-BDMwdtmq.js";import"./Text-D4YkJF8T.js";import"./clsx-Ciqy0D92.js";import"./Text-CZZKswuy.js";import"./Form-BrTz3pE_.js";import"./useFormValidation-Do28Vedx.js";import"./Button-BE_Do470.js";import"./Hidden-BHiOEcku.js";import"./useLabels-D54vKqlx.js";import"./useButton-mneyLtoN.js";import"./SelectionIndicator-B37qDg19.js";import"./useField-DT9fx3LY.js";import"./VisuallyHidden-Cxgi0rpi.js";import"./useControlledState-Cf9Dm7V0.js";import"./Label-BjNdcq1j.js";import"./Dialog-XV2aWCU0.js";import"./RSPContexts-XAz2G-XR.js";import"./OverlayArrow-22WDSqob.js";import"./useResizeObserver-DsQ7K_yQ.js";import"./Collection-C_3kFyjg.js";import"./index-ZmpB6TO1.js";import"./Separator-BU6eY9vc.js";import"./SelectionManager-FcOlnM9k.js";import"./useEvent-otJ549iY.js";import"./scrollIntoView-WFVR6_rQ.js";import"./useDescription-Dpo2AssW.js";import"./ListKeyboardDelegate-CIi-P_r3.js";import"./PressResponder-h6fhfTfY.js";import"./useLocalizedStringFormatter-CQ08zqg5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-Bw9ZEnJh.js";import"./useLocalizedStringFormatter-C_aITI_T.js";import"./Button-B7Jqdyxh.js";import"./Button.module-CcWMkJAG.js";import"./x-7fEGHR51.js";import"./createLucideIcon-Ba6NwseB.js";import"./Heading-CYUOCyeI.js";import"./info-Bh3PztBZ.js";import"./Popover-C0JxeGyN.js";const Fr={title:"Components/Radio",component:d,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},q=["Äpple","Banan","Kiwi","Apelsin"],m=q.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),z=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:q.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},s={args:{children:m,isDisabled:!0}},o={args:{children:z}},i={args:{children:m,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:m,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:m,errorMessage:void 0,validate:r=>r!=null&&r.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},l={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,j;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...(j=(h=s.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,v,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var x,y,R;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...(R=(y=i.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var S,D,I;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,w,F;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(F=(w=p.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var C,M,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Cr=["Primary","Disabled","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{p as CustomValidation,s as Disabled,l as Horizontal,i as Invalid,o as OneItemDisabled,t as Primary,n as Required,Cr as __namedExportsOrder,Fr as default};
