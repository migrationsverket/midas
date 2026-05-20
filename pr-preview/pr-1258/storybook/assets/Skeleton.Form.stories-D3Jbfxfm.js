import{j as e,l}from"./iframe-UJ3BwdI6.js";import{S as t}from"./Skeleton-BMegDi5-.js";import{T as p}from"./TextField-DLkwnSjB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-OBJy9Fjs.js";import"./utils-BYceCV3C.js";import"./FieldError-CS9phB3k.js";import"./Text-BU9YFTb1.js";import"./useFocusRing-CLeeQzke.js";import"./index-DAZT_GQr.js";import"./index-Bx8foN3C.js";import"./Text-C99-Gc34.js";import"./RSPContexts-JudtSyi0.js";import"./Form-BoynS74H.js";import"./Group-Cj4qpDe1.js";import"./Input-TdTFBGXk.js";import"./Hidden-Dl3PKEKv.js";import"./Button-C3rI1i5q.js";import"./useLabel-B0g5vJvf.js";import"./useLabels-C5RnXiv5.js";import"./useButton-Cn8mW4Ll.js";import"./useTextField-VNOp8-r0.js";import"./useControlledState-SS_iM14g.js";import"./useField-XAlNn7CP.js";import"./TextField.module-DdivwlC8.js";import"./Label-B2wEGgYc.js";import"./Dialog-BD0IRIUG.js";import"./OverlayArrow-CHGQ6Qmq.js";import"./useResizeObserver-DTE2Kg-d.js";import"./Collection-VaBd8FzM.js";import"./index-Cm_EPirj.js";import"./Separator-CZoAQZ-8.js";import"./SelectionManager-BujgrAkT.js";import"./useEvent-CTyOrL8U.js";import"./scrollIntoView-CTYRmDo1.js";import"./SelectionIndicator-D_gUha_f.js";import"./useDescription-C3PTeJJa.js";import"./ListKeyboardDelegate-BDLnRayo.js";import"./PressResponder-BMknpfIK.js";import"./useLocalizedStringFormatter-C9onPQuM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_ZWVv1J.js";import"./getScrollParent-DHFOoCum.js";import"./VisuallyHidden-KE5d7FBc.js";import"./ModalOverlay-CijLMVMM.js";import"./x-BHjLPSUz.js";import"./createLucideIcon-C1FynrDV.js";import"./useLocalizedStringFormatter-BPE-JPT8.js";import"./Heading-CWOFI80Y.js";import"./Button-C7x5CU1C.js";import"./Button.module-BB7N-cLd.js";import"./info-DT2O-hN9.js";import"./Popover-CHtRHt4o.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
