import{j as e,l}from"./iframe-CACK1ifN.js";import{S as t}from"./Skeleton-BCRzPyDt.js";import{T as p}from"./TextField-CxaEX6tM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bpz_IgEG.js";import"./utils-DrYd9Pqd.js";import"./TextField-B6QHX8_b.js";import"./FieldError-Bhe1g_YD.js";import"./Text-BnT-eFzO.js";import"./useFocusRing-DYoY7B0o.js";import"./index-Cso1iP6f.js";import"./index-RncFtgOS.js";import"./Text-CRhY20oU.js";import"./RSPContexts-Bjnw7db_.js";import"./Form-Cy_bBUnn.js";import"./useFormValidation-0NxoFJwH.js";import"./Group-igoELnx1.js";import"./Input-DF1MBDxj.js";import"./Hidden-C1FS9acW.js";import"./Button-J7gLD4uT.js";import"./useLabels-C_najzVY.js";import"./useButton-DYZev9kh.js";import"./useTextField-ChcNUG2E.js";import"./useControlledState-DCOK662h.js";import"./useField-DFHBiafe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-rxg6-Xes.js";import"./Dialog-B5kUQCj1.js";import"./OverlayArrow-DLj8T8PD.js";import"./useResizeObserver-Crrk23vz.js";import"./Collection-CAmhBvgE.js";import"./index-Cq_3bRrR.js";import"./Separator-D61x4Nam.js";import"./SelectionManager-D-ZLegKB.js";import"./useEvent-CM7-6yi_.js";import"./scrollIntoView-B7hwb_SX.js";import"./SelectionIndicator-sFKgU-Ui.js";import"./useDescription-osvHzt0k.js";import"./ListKeyboardDelegate-CxhWwM1o.js";import"./PressResponder-1GogWAhd.js";import"./useLocalizedStringFormatter-D7qp87au.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DcH05knO.js";import"./VisuallyHidden-COi0BVk3.js";import"./Button-BoPq1AVj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AIFce-v4.js";import"./createLucideIcon-G0rIHLkb.js";import"./x-PeF9jKEP.js";import"./Heading-D4-h0TMa.js";import"./info-DGPMZgFD.js";import"./Popover-Ca39AIkX.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
