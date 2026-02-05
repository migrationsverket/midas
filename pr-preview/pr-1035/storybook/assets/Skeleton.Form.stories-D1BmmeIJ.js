import{j as e,l}from"./iframe-BWc43a1O.js";import{S as t}from"./Skeleton-P3Jprbwb.js";import{T as p}from"./TextField-vxBMOrny.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DGbQQRLG.js";import"./utils-39kWX_LE.js";import"./TextField-RTvRI9BH.js";import"./FieldError-B8r7qfMZ.js";import"./Text-DAytGxCt.js";import"./useFocusRing-C4VyUsZg.js";import"./index-CLPYF8fa.js";import"./index-CGp4UFbQ.js";import"./Text-BcD4jl1C.js";import"./RSPContexts-C4lt73rl.js";import"./Form-PZDttHkQ.js";import"./useFormValidation-AEiBswFt.js";import"./Group-Cow3PDcH.js";import"./Input-W7WsnlAa.js";import"./Hidden-CJZ0JVr6.js";import"./Button-D8sshy66.js";import"./useLabels-Cx5jYDxX.js";import"./useButton-DMB5d1hu.js";import"./useTextField-D_5CY7gJ.js";import"./useControlledState-2cnZjxyB.js";import"./useField-Brc245Bn.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DEDMf6ns.js";import"./Dialog-DUNFkMUW.js";import"./OverlayArrow-CGIuurpL.js";import"./useResizeObserver-DLaqHKLH.js";import"./Collection-CoR1ILLM.js";import"./index-BEi9dFA3.js";import"./Separator-C6dCCEwp.js";import"./SelectionManager-DcmAlHpt.js";import"./useEvent-BStJuAN2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dab4Jfto.js";import"./useDescription-DTPWIusX.js";import"./ListKeyboardDelegate-Jxu6v7Ls.js";import"./PressResponder-COWZRMh9.js";import"./useLocalizedStringFormatter-RWz-MW4O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvaxS6yv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BkExIDrJ.js";import"./Button-Dko06iif.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BwtwStJt.js";import"./createLucideIcon-CFy2YlCm.js";import"./x-BymJwMBN.js";import"./Heading-CBDXh2kn.js";import"./info-D5eE1DC0.js";import"./Popover-kRCuYCJN.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
