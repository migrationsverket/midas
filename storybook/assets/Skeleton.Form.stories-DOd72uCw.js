import{j as e,l}from"./iframe-EoEhw5Zh.js";import{S as t}from"./Skeleton-CgbNyqjc.js";import{T as p}from"./TextField-nlRNNdKd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CPJ4kfSD.js";import"./utils-9vpvreaM.js";import"./FieldError-D-MKG4ii.js";import"./Text-DXp13W0h.js";import"./useFocusRing-DMgSEdD4.js";import"./index-Dr8ff7Yx.js";import"./index-BnBZZEud.js";import"./Text-D9CNFP89.js";import"./RSPContexts-0TY2XP1U.js";import"./Form-DwDbWIsi.js";import"./useFormValidation-BEz7E7z8.js";import"./Group-DR6p3jJE.js";import"./Input-BXTi2rw6.js";import"./Hidden-CX87kr-j.js";import"./Button-DjmrYvse.js";import"./useLabels-CyiNSM6o.js";import"./useButton-CoeBifMi.js";import"./useTextField-Dwc5-RtS.js";import"./useControlledState-cFso-qT1.js";import"./useField-CmCZJ2oU.js";import"./TextField.module-DdivwlC8.js";import"./Label-DM7nkZpa.js";import"./Dialog-Btlvd5Ns.js";import"./OverlayArrow-DxQzkW5-.js";import"./useResizeObserver-BSOyndif.js";import"./Collection-B9ccTc4Z.js";import"./index-CO1-2h13.js";import"./Separator-C53QjOil.js";import"./SelectionManager-DQz7Nw5Y.js";import"./useEvent-BNUGgeID.js";import"./scrollIntoView-CQrFR7ZE.js";import"./SelectionIndicator-HT-3N3vM.js";import"./useDescription-BA8q_yzK.js";import"./ListKeyboardDelegate-bFzoPsuL.js";import"./PressResponder-D_69Y5um.js";import"./useLocalizedStringFormatter-SZJWhWFc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKl41UlG.js";import"./getScrollParent-B_rII4gY.js";import"./VisuallyHidden-q1pwiIQH.js";import"./x-D6rw-x5f.js";import"./createLucideIcon-mCwC6Qs_.js";import"./useLocalizedStringFormatter-Crb0wUWJ.js";import"./Heading-CEG4slW5.js";import"./Button-y454-6pk.js";import"./Button.module-D_C6WeTN.js";import"./info-CPNKuNrf.js";import"./Popover-pG9coscQ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isAnimated: false
  },
  parameters: {
    docs: {
      source: {
        code: \`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    isOnLayer01: true
  },
  render: args => <div style={{
    backgroundColor: variables.layer01Base,
    padding: '1rem'
  }}>
      <Skeleton {...args} data-testid='skeleton' />
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Skeleton {...args} data-testid='skeleton-1' />
      <Skeleton {...args} data-testid='skeleton-2' />
      <Skeleton {...args} data-testid='skeleton-3' />
    </div>
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start'
  }}>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Skeleton (Loading)
        </h3>
        <Skeleton variant='form' size='large' />
      </div>
      <div style={{
      flex: 1
    }}>
        <h3 style={{
        marginTop: 0,
        fontSize: '1rem',
        fontWeight: 500
      }}>
          Actual TextField
        </h3>
        <TextField label='Namn' description='Fyll i ditt fullständiga namn' />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
