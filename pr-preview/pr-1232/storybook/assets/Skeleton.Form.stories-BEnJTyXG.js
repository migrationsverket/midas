import{j as e,l}from"./iframe-BNflmq3A.js";import{S as t}from"./Skeleton-Kza_mYzd.js";import{T as p}from"./TextField-Bo5v7u14.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0bxlfhf.js";import"./utils-B7V63oD4.js";import"./FieldError-CpZNXgM0.js";import"./Text-Bnz2t9Ql.js";import"./useFocusRing-C6RlaKsx.js";import"./index-BrcXQqZF.js";import"./index-C235bJJA.js";import"./Text-BlWLVQLi.js";import"./RSPContexts-CIYDedK3.js";import"./Form-ClPIoKYv.js";import"./Group-DjoYRNGK.js";import"./Input-P4PAFc0_.js";import"./Hidden-fjlvP_hk.js";import"./Button-DJfxBrz6.js";import"./useLabel-CJ08WlT4.js";import"./useLabels-D6wk1E_k.js";import"./useButton-DGWy0aPQ.js";import"./useTextField-CSiaFglU.js";import"./useControlledState-DuXs14gL.js";import"./useField-D3c7IL7J.js";import"./TextField.module-DdivwlC8.js";import"./Label-DsSPpc1K.js";import"./Dialog-CqO2zUsn.js";import"./OverlayArrow-7xfz7Hv7.js";import"./useResizeObserver-3Eb8t69T.js";import"./Collection-BCi67oTX.js";import"./index-D9RdZJbp.js";import"./Separator-CN65iN9a.js";import"./SelectionManager-uSE9FSHJ.js";import"./useEvent-DMh1OLFP.js";import"./scrollIntoView-DZi0I4zG.js";import"./SelectionIndicator-C21eoo8L.js";import"./useDescription-B_uvSpwC.js";import"./ListKeyboardDelegate-DTCudMFJ.js";import"./PressResponder-CcUwqPuT.js";import"./useLocalizedStringFormatter-CAvVK8gZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1dnsmar.js";import"./getScrollParent-BjbBQLw-.js";import"./VisuallyHidden-ITIWhviF.js";import"./ModalOverlay-MTJJ6ffD.js";import"./x-DbG6WDA3.js";import"./createLucideIcon-BQvoQkeP.js";import"./useLocalizedStringFormatter-C2_DIja1.js";import"./Heading-CpbECIrv.js";import"./Button-Cyp4EM5w.js";import"./Button.module-BB7N-cLd.js";import"./info-2Y5OfA5f.js";import"./Popover-DmjfmCnZ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
