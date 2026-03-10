import{j as e,l}from"./iframe-DR5TyuB-.js";import{S as t}from"./Skeleton-DH66I8sU.js";import{T as p}from"./TextField-B5f5cNEO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BsoA0Gfs.js";import"./utils-Bg7QEZnU.js";import"./FieldError-Cq9sQfrK.js";import"./Text-Bj_TB6m0.js";import"./useFocusRing-QfZ3-vOV.js";import"./index-D2JS04df.js";import"./index-LQ5iOOx9.js";import"./Text-rstErEAJ.js";import"./RSPContexts-DfXBv57K.js";import"./Form-DQ5CyJFm.js";import"./useFormValidation-1PHKSaOz.js";import"./Group-D4aIFVHK.js";import"./Input-BjntRvPO.js";import"./Hidden-BEv0etPG.js";import"./Button-BmNGs9rp.js";import"./useLabels-C7LvHmcE.js";import"./useButton-DuR77GJR.js";import"./useTextField-BoXFmB-n.js";import"./useControlledState-CZJBEfwd.js";import"./useField-DdBHjb8J.js";import"./TextField.module-DdivwlC8.js";import"./Label-vgyYy6G_.js";import"./Dialog-CZCTxdiY.js";import"./OverlayArrow-BasgrjKb.js";import"./useResizeObserver-DwI7ic6Q.js";import"./Collection-CXIrHqSI.js";import"./index-BuE7dfrX.js";import"./Separator-Dp3kX1lW.js";import"./SelectionManager-zatpPLut.js";import"./useEvent-CAO5kR0P.js";import"./scrollIntoView-BBNsC_WK.js";import"./SelectionIndicator-Dt3rSARt.js";import"./useDescription-q7H7pmJx.js";import"./ListKeyboardDelegate-Bkc3dAxZ.js";import"./PressResponder-W9YtXPm7.js";import"./useLocalizedStringFormatter-CWc-yWtF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bt2nCOFM.js";import"./getScrollParent-DwvwwXDB.js";import"./VisuallyHidden-BSWLvPww.js";import"./Button-C-s2hOqB.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CkyMnK2W.js";import"./createLucideIcon-BIu09S4H.js";import"./x-Cyfs5BQi.js";import"./Heading-DeCIOYLm.js";import"./info-CizeJPsi.js";import"./Popover-D6PbhG8P.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
