import{j as e,l}from"./iframe-SOAudsoD.js";import{S as t}from"./Skeleton-D3qRj-6_.js";import{T as p}from"./TextField-kgrYlau5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BKZjLXN0.js";import"./utils-CIsr0dbb.js";import"./FieldError-DfImaZQ8.js";import"./Text-BaMrJhkm.js";import"./useFocusRing-BAXSXuvY.js";import"./index-BD7D_b6m.js";import"./index-TydVMVST.js";import"./Text-BA3To6tW.js";import"./RSPContexts-CnPW4VcT.js";import"./Form-CDnZ42LZ.js";import"./Group-D4H6ASst.js";import"./Input-MMdSgvnL.js";import"./Hidden-B1WT_Vdg.js";import"./Button-D067fNNN.js";import"./useLabel-CkEKqqdX.js";import"./useLabels-CF8dmUib.js";import"./useButton-BQJi0Bnf.js";import"./useTextField-DKQU8tGo.js";import"./useControlledState-Bfp68Ksh.js";import"./useField-BBN_lIAz.js";import"./TextField.module-DdivwlC8.js";import"./Label-amsZBz5N.js";import"./Dialog-D9YwlY8K.js";import"./OverlayArrow-C7-MqnuN.js";import"./useResizeObserver-C-NQjgqc.js";import"./Collection-BWp1xM7Q.js";import"./index-DVepOdd-.js";import"./Separator-IVA-fJoe.js";import"./SelectionManager-BpZx4ARm.js";import"./useEvent-BAC2xDQQ.js";import"./scrollIntoView-WOAjmpGz.js";import"./SelectionIndicator-BDBYhVTA.js";import"./useDescription-CvEN5z8s.js";import"./ListKeyboardDelegate-DSEu1shW.js";import"./PressResponder-DpVW2ngz.js";import"./useLocalizedStringFormatter-DhVS51M8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-sSSQQuxs.js";import"./getScrollParent-Czn_DZgU.js";import"./VisuallyHidden-DchdFXfm.js";import"./x-MNLtDlkP.js";import"./createLucideIcon-C9pXYI_x.js";import"./useLocalizedStringFormatter-DNP-DOoF.js";import"./Heading-BUoYcFor.js";import"./Button-C52wufQI.js";import"./Button.module-BB7N-cLd.js";import"./info-G1oiUrUB.js";import"./Popover-BNvV_GSI.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
