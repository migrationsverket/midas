import{j as e,l}from"./iframe-CPZ4_d2q.js";import{S as t}from"./Skeleton-CL5X0Zd-.js";import{T as p}from"./TextField-DdJyI55A.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C85sQ4dx.js";import"./utils-DWW_dCIy.js";import"./FieldError-rOuvG30X.js";import"./Text-C-nhapA_.js";import"./useFocusRing-d1kY_X2y.js";import"./index-BFKhD2nT.js";import"./index-DgF8N3uU.js";import"./Text-CxhoFnBV.js";import"./RSPContexts-CNU_cvLJ.js";import"./Form-D49Ri7OX.js";import"./Group-Abbeg9Sy.js";import"./Input-Du1VWq2r.js";import"./Hidden-ddHOLGj0.js";import"./Button-CXhapsAk.js";import"./useLabel-D74j4qSK.js";import"./useLabels-DBtqpm2S.js";import"./useButton-BXpF8VVF.js";import"./useTextField-DPTUmy2B.js";import"./useControlledState-DiN_YqvG.js";import"./useField-DjwAKZ9N.js";import"./TextField.module-DdivwlC8.js";import"./Label-D2m2QNEU.js";import"./Dialog-DdHx8S2w.js";import"./OverlayArrow-DPVhU9-q.js";import"./useResizeObserver-CEyuuEs6.js";import"./Collection-Fsz5o6xJ.js";import"./index-DBpEcHx7.js";import"./Separator-Bsl6T3fj.js";import"./SelectionManager-Tb8iyxQ5.js";import"./useEvent-Bz5nfpns.js";import"./scrollIntoView-DakIikjX.js";import"./SelectionIndicator-Chd1drg3.js";import"./useDescription-DY6oOuRz.js";import"./ListKeyboardDelegate-BtHFCYxu.js";import"./PressResponder-DRQhv0a8.js";import"./useLocalizedStringFormatter-DLx3xcdn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RJHByoGu.js";import"./getScrollParent-B7yWW-nR.js";import"./VisuallyHidden-D_2Qiydl.js";import"./x-_8u0d44F.js";import"./createLucideIcon-CHHQY25e.js";import"./useLocalizedStringFormatter-7dRGsYY4.js";import"./Heading-CCkMK4RX.js";import"./Button-hn_7_4-p.js";import"./Button.module-BB7N-cLd.js";import"./info-CvqlYfZm.js";import"./Popover-DfB-JRIR.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
