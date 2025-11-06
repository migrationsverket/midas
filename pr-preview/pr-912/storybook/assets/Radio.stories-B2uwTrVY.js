import{j as e}from"./iframe-BxABzvsr.js";import{a,R as d}from"./Radio-C9CzU2fl.js";import"./preload-helper-Dp1pzeXC.js";import"./Group-CIug5QoU.js";import"./utils-BhUqFzNj.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-COIxRXK5.js";import"./index-C3YMpM8e.js";import"./index-DtAlXBW-.js";import"./FieldError-m9ZGUe0y.js";import"./Text-CnoN3EMi.js";import"./clsx-Ciqy0D92.js";import"./Text-aSELrP8c.js";import"./Form-DjMIrfxv.js";import"./useFormValidation-BAdH1cET.js";import"./Button-CQqQcPYq.js";import"./Hidden-CuvaBcVJ.js";import"./useLabels-Dm2JA2a8.js";import"./useButton-7P-vX4FP.js";import"./SelectionIndicator-WeY-CkYz.js";import"./useField-Cq9EwsRV.js";import"./VisuallyHidden-CNA-4Q6l.js";import"./useControlledState-Cm49iVED.js";import"./Label-CB8-1sOH.js";import"./Dialog-_lpj7eqH.js";import"./RSPContexts-BGVLssUF.js";import"./OverlayArrow-CACArkr0.js";import"./useResizeObserver-86QmWrwf.js";import"./Collection-DhyrkGmd.js";import"./index-BG4pD6Xu.js";import"./Separator-CEWwX6HE.js";import"./SelectionManager-De9uIlqj.js";import"./useEvent-CGgHwB68.js";import"./scrollIntoView-B3x4tWZO.js";import"./useDescription-BC5U6Sl2.js";import"./ListKeyboardDelegate-BIKBBBo4.js";import"./PressResponder-DfQF25sD.js";import"./useLocalizedStringFormatter-CXKuKS0e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CBAn_BEw.js";import"./useLocalizedStringFormatter-AJ1_Hi3I.js";import"./Button-ba5vxjeM.js";import"./Button.module-CcWMkJAG.js";import"./x-B7CHOQv-.js";import"./createLucideIcon-DJpot9Rw.js";import"./Heading-CsP7xGGQ.js";import"./info-B_uGXPdS.js";import"./Popover-Dx7AP_A1.js";const Fr={title:"Components/Radio",component:d,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},q=["Äpple","Banan","Kiwi","Apelsin"],m=q.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),z=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:q.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},s={args:{children:m,isDisabled:!0}},o={args:{children:z}},i={args:{children:m,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},n={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:m,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},p={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:m,errorMessage:void 0,validate:r=>r!=null&&r.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(d,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},l={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
