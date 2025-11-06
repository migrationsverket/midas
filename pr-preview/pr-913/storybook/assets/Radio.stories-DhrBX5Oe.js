import{j as e}from"./iframe-BvbRhJsG.js";import{a,R as d}from"./Radio-8oceT4in.js";import"./preload-helper-Dp1pzeXC.js";import"./Group-Ci0qGPnS.js";import"./utils-CS14vqSf.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BPVAUh7v.js";import"./index-B3-53qwc.js";import"./index-BnFhduz6.js";import"./FieldError-BxDTCqc4.js";import"./Text-lWcGrung.js";import"./clsx-Ciqy0D92.js";import"./Text-B2nr1LzC.js";import"./Form-Bss_g8S1.js";import"./useFormValidation-Co1lvxmd.js";import"./Button-Bmi_wjRq.js";import"./Hidden-BHVK8w8L.js";import"./useLabels-bBfz2F1H.js";import"./useButton-Ckg5GaUx.js";import"./SelectionIndicator-DRsBa2Gv.js";import"./useField-CDQxQ9Nr.js";import"./VisuallyHidden-BaZl6s6K.js";import"./useControlledState-CBXFJxHg.js";import"./Label-DHP9RXTf.js";import"./Dialog-BNbEiLTM.js";import"./RSPContexts-Q5Y9ewG3.js";import"./OverlayArrow-CHYfjIjX.js";import"./useResizeObserver-nkPfv1jT.js";import"./Collection-BQ-gfYPI.js";import"./index-DktjSCet.js";import"./Separator-B6Q-yLcW.js";import"./SelectionManager-CZKKZnpr.js";import"./useEvent-DIBtdt1V.js";import"./scrollIntoView-4fLPX-y5.js";import"./useDescription-DS3a88uT.js";import"./ListKeyboardDelegate-vBdjRqyn.js";import"./PressResponder-BCAtUx8N.js";import"./useLocalizedStringFormatter-DyBJTu8f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DmvlycPD.js";import"./useLocalizedStringFormatter-40qb0x8d.js";import"./Button-oLX16Zh5.js";import"./Button.module-CcWMkJAG.js";import"./x-BNTRgTjP.js";import"./createLucideIcon-BuTuzAY3.js";import"./Heading-B6O0H_WJ.js";import"./info-Cf64K6wb.js";import"./Popover-BpYrTlcz.js";const Fr={title:"Components/Radio",component:d,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},q=["Äpple","Banan","Kiwi","Apelsin"],m=q.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),z=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:q.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},s={args:{children:m,isDisabled:!0}},o={args:{children:z}},i={args:{children:m,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:m,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:m,errorMessage:void 0,validate:r=>r!=null&&r.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},l={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
