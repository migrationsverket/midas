import{j as e,l}from"./iframe-k-zAH7Ef.js";import{S as t}from"./Skeleton-DYRY9rxH.js";import{T as d}from"./TextField-T-ud7C_L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C_ck7MDw.js";import"./utils-BSpJY3Um.js";import"./FieldError-CNbb8asv.js";import"./Text-BGMRpBYZ.js";import"./useFocusRing-DVpNpWCG.js";import"./index-B_jnwY6D.js";import"./index-BhzajAhd.js";import"./Text-BOoeMNrs.js";import"./RSPContexts-DGsEwDeK.js";import"./Form-B-UX-Uqn.js";import"./useFormValidation-Dtr7JyRD.js";import"./Group-DmL_y1CE.js";import"./Input-DHvApcVe.js";import"./Hidden-DHgR79MS.js";import"./Button-BdULP_1i.js";import"./useLabels-CYnXYQCZ.js";import"./useButton-HRso9Wou.js";import"./useTextField-R9OBVb8V.js";import"./useControlledState-CWQoOU6w.js";import"./useField-DvhmVMli.js";import"./TextField.module-DGUQcbB9.js";import"./Label-CloKO9cx.js";import"./Dialog-B0hNAeSx.js";import"./OverlayArrow-CvdGKYEz.js";import"./useResizeObserver-DoIK5Zf8.js";import"./Collection-D44rOmaq.js";import"./index-Cv8hS9vc.js";import"./Separator-IjEHfEYR.js";import"./SelectionManager-H8uXbQRA.js";import"./useEvent-BG9GMXpu.js";import"./scrollIntoView-MFUOiOkG.js";import"./SelectionIndicator-B7O4Zl4E.js";import"./useDescription-ScrL-_TA.js";import"./ListKeyboardDelegate-CMpffdDC.js";import"./PressResponder-C31hFz2h.js";import"./useLocalizedStringFormatter-CxFXRTv0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-a6tJLPyA.js";import"./VisuallyHidden-DbtIx9ZK.js";import"./useLocalizedStringFormatter-Dx6dpw-4.js";import"./Button-DmW_TZqr.js";import"./Button.module-CtQ1deO8.js";import"./x-DPoFmvs4.js";import"./createLucideIcon-b2tMwHkv.js";import"./Heading-BgVylgI-.js";import"./info-C40hproG.js";import"./Popover-D7zgKGQS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
