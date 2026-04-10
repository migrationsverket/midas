import{j as e,l}from"./iframe-ntYsoI3q.js";import{S as t}from"./Skeleton-L-hj_1XF.js";import{T as p}from"./TextField-DSrvpV6W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CBe1htja.js";import"./utils-BJHfATlu.js";import"./FieldError-BR-RMZw1.js";import"./Text-DeKUVabC.js";import"./useFocusRing-D9nk-FO4.js";import"./index-PknmiIVy.js";import"./index-FJM3BeIO.js";import"./Text-DcoyKAFk.js";import"./RSPContexts-Vvgjzfon.js";import"./Form-q--S1nBS.js";import"./Group-CA3PZ7_L.js";import"./Input-klmdQr_w.js";import"./Hidden-BJHd_AQT.js";import"./Button-Czul53LM.js";import"./useLabel-Dq9C3dm5.js";import"./useLabels-xSNV-NpM.js";import"./useButton-BE2eqaFK.js";import"./useTextField-B00liPAR.js";import"./useControlledState-DrHB4IJb.js";import"./useField-BT-2cJTY.js";import"./TextField.module-DdivwlC8.js";import"./Label-DjnTj5Ne.js";import"./Dialog-aWieR_i3.js";import"./OverlayArrow-BuYpS_zT.js";import"./useResizeObserver-fXUigDQo.js";import"./Collection-DCsSzMBi.js";import"./index-kwkfIc0O.js";import"./Separator-DbZKR2lQ.js";import"./SelectionManager-DlacRCpb.js";import"./useEvent-BZsGlSL3.js";import"./scrollIntoView-DyKyaLk8.js";import"./SelectionIndicator-7xtEuHmh.js";import"./useDescription-FAfc1Eak.js";import"./ListKeyboardDelegate-DEfcmcZu.js";import"./PressResponder-BvfnRz9n.js";import"./useLocalizedStringFormatter-hhUVFxwM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DcS6Wy41.js";import"./getScrollParent-1fm_mwK8.js";import"./VisuallyHidden-Tbx6jsXW.js";import"./Modal-BCZqBgaH.js";import"./x-DVmtkFru.js";import"./createLucideIcon-DVRKw96B.js";import"./useLocalizedStringFormatter-CkAS-7e9.js";import"./Heading-Bb4w0_0o.js";import"./Button-Cjgmk6w1.js";import"./Button.module-BB7N-cLd.js";import"./info-BweepCZS.js";import"./Popover-BD_g_Io3.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
