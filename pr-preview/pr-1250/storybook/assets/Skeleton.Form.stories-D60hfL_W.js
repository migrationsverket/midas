import{j as e,l}from"./iframe-ZWFuO3rS.js";import{S as t}from"./Skeleton-DYaR5esA.js";import{T as p}from"./TextField-CUCr31RR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-nOy-an9t.js";import"./utils-CXJrMo2L.js";import"./FieldError-BqdH46Wm.js";import"./Text-CW08t5T_.js";import"./useFocusRing-CF4sVLCG.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./Text-uwKeqPz3.js";import"./RSPContexts-Dt_P8EmM.js";import"./Form-QTqY28Eg.js";import"./Group-C3Kvev_s.js";import"./Input-DDbyFfi8.js";import"./Hidden-DlAqJEIp.js";import"./Button-CuvBXfLT.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./useTextField-Cv92JwZx.js";import"./useControlledState-CaSPfHyR.js";import"./useField-DLnhlBC6.js";import"./TextField.module-DdivwlC8.js";import"./Label-C8dYgMga.js";import"./Dialog-D5pdNRVZ.js";import"./OverlayArrow-C6DoMgcq.js";import"./useResizeObserver-CqncRxwe.js";import"./Collection-BWOiDNzU.js";import"./index-D3vqNWyO.js";import"./Separator-DRfwBEBl.js";import"./SelectionManager-UM6kyFyM.js";import"./useEvent-D0Q6FxQg.js";import"./scrollIntoView-CxB-7RAS.js";import"./SelectionIndicator-BD5ZlguQ.js";import"./useDescription-BZozsu8w.js";import"./ListKeyboardDelegate-06m2HPXH.js";import"./PressResponder-BGak0TH8.js";import"./useLocalizedStringFormatter-w6fCSWeH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C8wgjS_2.js";import"./getScrollParent-CnRw05DR.js";import"./VisuallyHidden-5iCcQboa.js";import"./ModalOverlay-Dxkf-sWd.js";import"./x-C7_Ecf5k.js";import"./createLucideIcon-BJpb_u0I.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./Heading-7px2xDz0.js";import"./Button-DoVlW0aQ.js";import"./Button.module-BB7N-cLd.js";import"./info-bT8T8goN.js";import"./Popover-DZO6Osg5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
