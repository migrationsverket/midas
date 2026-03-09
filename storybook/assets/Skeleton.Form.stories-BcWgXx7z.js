import{j as e,l}from"./iframe-BouJzQQI.js";import{S as t}from"./Skeleton-Cxurbr1R.js";import{T as p}from"./TextField-BN6Bgm_W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D5q6o1nd.js";import"./utils-DjMpdX5f.js";import"./FieldError-BSX4JMis.js";import"./Text-BC2cfNMW.js";import"./useFocusRing-DLAN_On1.js";import"./index-Mk5PyGJk.js";import"./index-CdrImusv.js";import"./Text-B0v4i5dp.js";import"./RSPContexts-AGIfMDJp.js";import"./Form-3Uv5jiVi.js";import"./useFormValidation-BnrePAfb.js";import"./Group-BbJe3CM4.js";import"./Input-BJasM3_D.js";import"./Hidden-Bml1-NzX.js";import"./Button-CGcz2bXe.js";import"./useLabels-rV452Poa.js";import"./useButton-CJHkKL18.js";import"./useTextField-B48X4aPN.js";import"./useControlledState-DpPiTef7.js";import"./useField-DYm5lQPT.js";import"./TextField.module-DdivwlC8.js";import"./Label-ZTfJKP6D.js";import"./Dialog-D0rrcRrp.js";import"./OverlayArrow-BaaYBNiD.js";import"./useResizeObserver-BakVGhSe.js";import"./Collection-DlgC-mQp.js";import"./index-DMRjCPV0.js";import"./Separator-BDEGIMbJ.js";import"./SelectionManager-CCn4U8_w.js";import"./useEvent-DCCwBm7e.js";import"./scrollIntoView-BXxHZrWR.js";import"./SelectionIndicator-DaQ2UpOz.js";import"./useDescription-Mcf3LJqp.js";import"./ListKeyboardDelegate-CPjjqkUk.js";import"./PressResponder-B_sJSV8u.js";import"./useLocalizedStringFormatter-DMqmuQ22.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-bUput27j.js";import"./getScrollParent-DhXY10Gw.js";import"./VisuallyHidden-DJQNz0Bi.js";import"./Button-McxTSLwF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5s11YDl.js";import"./createLucideIcon-C49CaP5m.js";import"./x-BuD-pvTX.js";import"./Heading-DyaNOn6V.js";import"./info-T3qv_oG5.js";import"./Popover-9hVFZY5F.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
