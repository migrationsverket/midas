import{j as e,l}from"./iframe-BqDkGuh1.js";import{S as t}from"./Skeleton-ZGPGsq10.js";import{T as d}from"./TextField-Cf264_V5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DYGoB-Py.js";import"./utils-W193K7jS.js";import"./TextField-CkDVWpzV.js";import"./FieldError-yw2UMk6d.js";import"./Text-P0Uog9HF.js";import"./useFocusRing-B0vg45rI.js";import"./index-B8hlXOwE.js";import"./index-Dzcfq3Tc.js";import"./Text-CGQubPUz.js";import"./RSPContexts-BrQCiqr8.js";import"./Form-D9GatxtB.js";import"./useFormValidation-BUuh_lTo.js";import"./Group-BpDpYx0G.js";import"./Input-CDcM8Eax.js";import"./Hidden-0zoVmhVR.js";import"./Button-BxGujilG.js";import"./useLabels-Bl_SgAjf.js";import"./useButton-xcFgy60K.js";import"./useTextField-DEEyYg0G.js";import"./useControlledState-D87rnCnG.js";import"./useField-Dapj1Pgq.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CXDiIvEe.js";import"./Dialog-DJgKKran.js";import"./OverlayArrow-DXfW_w3l.js";import"./useResizeObserver-B2POJnuI.js";import"./Collection-BQrYRO22.js";import"./index-Cu4-BjcK.js";import"./Separator-D-IR-f5V.js";import"./SelectionManager-DFWgDQwt.js";import"./useEvent-XcVfxEor.js";import"./scrollIntoView-uYMCGnr-.js";import"./SelectionIndicator-CEQfdIGJ.js";import"./useDescription-Bm9qBg99.js";import"./ListKeyboardDelegate-COMlNfzx.js";import"./PressResponder-DbN2tmM9.js";import"./useLocalizedStringFormatter-B8mdMXCK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CUQivi4p.js";import"./VisuallyHidden-CQi-zQEF.js";import"./Button-DsUfXBsa.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-v7TRxJsd.js";import"./createLucideIcon-DTrJOepx.js";import"./x-B-WsG3hV.js";import"./Heading-yrJTarcr.js";import"./info-BLQj5oE6.js";import"./Popover-_5yJ1RZ5.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
