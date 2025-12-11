import{j as e,l}from"./iframe-BgVJ8X44.js";import{S as t}from"./Skeleton-CmI6Pwnr.js";import{T as p}from"./TextField-qbG3yrMX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-cJ1ZgPy5.js";import"./utils-D-I24J34.js";import"./TextField-BPtZ6seK.js";import"./FieldError-gCUQmcQk.js";import"./Text-FAJBtBOA.js";import"./useFocusRing-CTvPExP9.js";import"./index-mSUBts4J.js";import"./index-r-q8-w1E.js";import"./Text-Ur40Kxtz.js";import"./RSPContexts-BLdliVAA.js";import"./Form-CbUobMl-.js";import"./useFormValidation-l60rYMEP.js";import"./Group-DOsUQ65o.js";import"./Input-CJPx1fYB.js";import"./Hidden-2A-J6V47.js";import"./Button-Co07siwL.js";import"./useLabels-Cc5uE-EY.js";import"./useButton-B_FWwj3N.js";import"./useTextField-29mtBU8K.js";import"./useControlledState-CIZ5X_Vt.js";import"./useField-DKjF-YG-.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D_R-DFPW.js";import"./Dialog-Cb-Snr-X.js";import"./OverlayArrow-5UhAPIBu.js";import"./useResizeObserver-DPcD_kfV.js";import"./Collection-4zR0JaNM.js";import"./index-CVChpcMA.js";import"./Separator-au6IV1Kn.js";import"./SelectionManager-B1SpsTaz.js";import"./useEvent-BJMzsLl5.js";import"./scrollIntoView-DecpEwb6.js";import"./SelectionIndicator-0oQqj6CB.js";import"./useDescription-HPM-2TK6.js";import"./ListKeyboardDelegate-QFOBKGo4.js";import"./PressResponder-68RBjuef.js";import"./useLocalizedStringFormatter-D6OWhLn8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-iPCQ6IZJ.js";import"./VisuallyHidden-Cge0FuXr.js";import"./Button-DPgPRHM0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxZR6OYe.js";import"./createLucideIcon-DpkHLMCU.js";import"./x-DaOaleql.js";import"./Heading-CVDh0LRI.js";import"./info-DD1R_IDL.js";import"./Popover-Cmbrc3Cr.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
