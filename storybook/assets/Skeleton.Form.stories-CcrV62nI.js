import{j as e,l}from"./iframe-GcUoBMSg.js";import{S as t}from"./Skeleton-D4SIDLcl.js";import{T as d}from"./TextField-D0HdqP3K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CySlZeh0.js";import"./utils-rtD3T3TW.js";import"./TextField-DBP4q2zP.js";import"./FieldError-UiNQLKTT.js";import"./Text-F1ylVkWL.js";import"./useFocusRing-DIuTFd3b.js";import"./index-DRY6s0Uf.js";import"./index-CzFqfJNr.js";import"./Text-CNOZt7Js.js";import"./RSPContexts-B8ZXf98J.js";import"./Form-V0e49k1h.js";import"./useFormValidation-C1LSpa0E.js";import"./Group-BTzMLu8F.js";import"./Input-B7qpaNj0.js";import"./Hidden-BqpeSpmt.js";import"./Button-DSIvaIV3.js";import"./useLabels-DexiCPCf.js";import"./useButton-DXkPYxVk.js";import"./useTextField-5yLXyt17.js";import"./useControlledState-BbDaPJvR.js";import"./useField-Btqd0A1t.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-SAUHtp-k.js";import"./Dialog-DYfIYppF.js";import"./OverlayArrow-BcNhpTrX.js";import"./useResizeObserver-j9xgkMrU.js";import"./Collection-DN0v5seS.js";import"./index-D9YajRC4.js";import"./Separator-Dc2O86N8.js";import"./SelectionManager-C_5PIkPp.js";import"./useEvent-B47GfUV2.js";import"./scrollIntoView-DEGH2g_V.js";import"./SelectionIndicator-BRxVJQ3E.js";import"./useDescription-DegkKtjI.js";import"./ListKeyboardDelegate-oF-WQ10S.js";import"./PressResponder-BWvYHgKI.js";import"./useLocalizedStringFormatter-ygoypWk4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJeQ7SrW.js";import"./VisuallyHidden-CO11mDnh.js";import"./Button-CKo_jchp.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-3VUd_YGv.js";import"./createLucideIcon-iWDg5CCZ.js";import"./x-CjwVpvAB.js";import"./Heading-S7p3z2GQ.js";import"./info-DQ1D_jpN.js";import"./Popover-nBLGaqsv.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
