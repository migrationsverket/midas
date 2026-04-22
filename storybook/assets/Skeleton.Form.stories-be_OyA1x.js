import{j as e,l}from"./iframe-CYBQlmyh.js";import{S as t}from"./Skeleton-CqurDVSO.js";import{T as p}from"./TextField-hjfOsLZa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DaGrZY97.js";import"./utils-CjHCv0XO.js";import"./FieldError-BU-DnlRI.js";import"./Text-CXwGYn4Y.js";import"./useFocusRing-Cpo9J0gL.js";import"./index-K5PVphWA.js";import"./index-DiuA4cA3.js";import"./Text-B63Qy0n5.js";import"./RSPContexts-BhOh3g1F.js";import"./Form-CG88XjbO.js";import"./Group-B2xH6Tb7.js";import"./Input-BAaIFmf5.js";import"./Hidden-CqWz7xzF.js";import"./Button-BOrWC_ny.js";import"./useLabel-CFOjik7v.js";import"./useLabels-L-SzfrFb.js";import"./useButton-BfOUikWI.js";import"./useTextField-DjQ_SLXH.js";import"./useControlledState-bAyCG7NY.js";import"./useField-oiS_17BV.js";import"./TextField.module-DdivwlC8.js";import"./Label-BfaQNbNl.js";import"./Dialog-DpdCXOL1.js";import"./OverlayArrow-BdOPMGMs.js";import"./useResizeObserver-BPB6bT59.js";import"./Collection-DlxFXgXK.js";import"./index-CU5GEWiP.js";import"./Separator-Ci_pKqb2.js";import"./SelectionManager-DAlAVFSS.js";import"./useEvent-wP5p6MOh.js";import"./scrollIntoView-DBa2FBnm.js";import"./SelectionIndicator-2OWYtRRL.js";import"./useDescription-ZMuH04v7.js";import"./ListKeyboardDelegate-UVU4819P.js";import"./PressResponder-C59KZHdB.js";import"./useLocalizedStringFormatter-DjA_iZCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DyEnl83n.js";import"./getScrollParent-TdVCvC4y.js";import"./VisuallyHidden-DCVaQ010.js";import"./ModalOverlay-DjQ98HcD.js";import"./x-J2AEua27.js";import"./createLucideIcon-CC51vNZq.js";import"./useLocalizedStringFormatter-BE4MzKLw.js";import"./Heading-OMAwRvxs.js";import"./Button-V8iqrR4o.js";import"./Button.module-BB7N-cLd.js";import"./info-BHfbtoxs.js";import"./Popover-KLtrzAb6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
