import{j as e,l}from"./iframe-DR3QLKnQ.js";import{S as t}from"./Skeleton-NLDdkCZ4.js";import{T as d}from"./TextField-9Mmu7_DE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B77uo9r_.js";import"./utils-sts9k_ln.js";import"./TextField-DHoye7WF.js";import"./FieldError-BU84FHsn.js";import"./Text-qezIaGP8.js";import"./useFocusRing-D6abqPY3.js";import"./index-CC-McC1K.js";import"./index-BqyGOOW5.js";import"./Text-BHdhtKkP.js";import"./RSPContexts-D4lRqnql.js";import"./Form-Bwg5b0AV.js";import"./useFormValidation-B3Umt8OY.js";import"./Group-DX4e_jaH.js";import"./Input-YDHHbdr-.js";import"./Hidden-BHCXc2iL.js";import"./Button-BtuQvaqs.js";import"./useLabels-D53eucx8.js";import"./useButton-W28Zleer.js";import"./useTextField-C2_qZBKb.js";import"./useControlledState-Bn_L3lPd.js";import"./useField-an-6XtBS.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C_YS3uK5.js";import"./Dialog-81aAOfxg.js";import"./OverlayArrow-DbWF6hqK.js";import"./useResizeObserver-Csvcg689.js";import"./Collection-DQEhpcLP.js";import"./index-ByqEr-oW.js";import"./Separator-05W059dV.js";import"./SelectionManager-wThLC8aC.js";import"./useEvent-Czk1Jm6Z.js";import"./scrollIntoView-DxAon2VW.js";import"./SelectionIndicator-0SpkfJAT.js";import"./useDescription-DlLT_YB0.js";import"./ListKeyboardDelegate-B0ElOSsJ.js";import"./PressResponder-CNyVq9f0.js";import"./useLocalizedStringFormatter-DkcHtNGS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C-oqUxNt.js";import"./VisuallyHidden-DAu2tE45.js";import"./Button-EZlh3IZI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CpsUAzKI.js";import"./createLucideIcon-CCTXZPbI.js";import"./x-DCThHRPI.js";import"./Heading-K3H-Nqnt.js";import"./info-DfAQTFqd.js";import"./Popover-BRascK70.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
