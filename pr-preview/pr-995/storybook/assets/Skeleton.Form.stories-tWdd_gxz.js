import{j as e,l}from"./iframe-C-ZgYTLd.js";import{S as t}from"./Skeleton-ojBi7una.js";import{T as p}from"./TextField-fJE3wSGf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-OadeWo9B.js";import"./utils-5FE85UMg.js";import"./TextField-B4TQLiaa.js";import"./FieldError-BgIsxqD2.js";import"./Text-ZgpLFqnp.js";import"./useFocusRing-Bc0MHDjd.js";import"./index-ChPkoH3I.js";import"./index-CXE28Dj1.js";import"./Text-BR0bAKi6.js";import"./RSPContexts-CNZ1zMeG.js";import"./Form-CwWoFJfE.js";import"./useFormValidation-DFhaQe1w.js";import"./Group-BQ5lbuz3.js";import"./Input-D8IZw8Ap.js";import"./Hidden-DYGqIVaB.js";import"./Button-B6pX2OWD.js";import"./useLabels-2zRZ-jjd.js";import"./useButton-qcLY0iFO.js";import"./useTextField-DlmJhj-Z.js";import"./useControlledState-j9N21RQd.js";import"./useField-D678ic1M.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BDL6PMm2.js";import"./Dialog-BM8_A6Uk.js";import"./OverlayArrow-3mRbgVn_.js";import"./useResizeObserver-LfOLoz3K.js";import"./Collection-D-w0--MV.js";import"./index-ihfxEqj8.js";import"./Separator-BJayw3EZ.js";import"./SelectionManager-DoS21RMw.js";import"./useEvent-BNx8FKA0.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CkFFauei.js";import"./useDescription-BsSbnagY.js";import"./ListKeyboardDelegate-8j2oF_gg.js";import"./PressResponder-C3BZlgw1.js";import"./useLocalizedStringFormatter-D5GDJFPJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYWptF-D.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BOVmsq2q.js";import"./Button-h5IDA3ie.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVNEhNrj.js";import"./createLucideIcon-DhqApzLs.js";import"./x-CGX4TCwo.js";import"./Heading-DgAAR0AT.js";import"./info-BGcn7pqn.js";import"./Popover-Bn-wUiwq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
