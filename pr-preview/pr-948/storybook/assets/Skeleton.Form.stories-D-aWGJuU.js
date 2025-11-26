import{j as e,l}from"./iframe-C1leRaCi.js";import{S as t}from"./Skeleton-DiDaVnQu.js";import{T as d}from"./TextField-DzO3mU2Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bc7qtzio.js";import"./utils-BGVkhvRq.js";import"./TextField-CmeK0ceO.js";import"./FieldError-BUrHU4SW.js";import"./Text-dqBDklPG.js";import"./useFocusRing-DlbSN8Ae.js";import"./index-DEAN_h1R.js";import"./index-v0huand3.js";import"./Text-C7wFv8Yh.js";import"./RSPContexts-DKReEcV9.js";import"./Form-3TjERAUK.js";import"./useFormValidation-DKueZ1JI.js";import"./Group-hPZDh3iX.js";import"./Input-LmdIUsZu.js";import"./Hidden-Cqw8yHzL.js";import"./Button-M9uB7-Jb.js";import"./useLabels-DSFbCLKG.js";import"./useButton-k9xAcm15.js";import"./useTextField-C6_zbFuF.js";import"./useControlledState-ByljhpRz.js";import"./useField-7qqyFdNc.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-1SrJJups.js";import"./Dialog-L6YHMnJd.js";import"./OverlayArrow-BQbiVO17.js";import"./useResizeObserver-CYp1IwN2.js";import"./Collection-NtSEA0gq.js";import"./index-9LIZYk_t.js";import"./Separator-BdfPFPKO.js";import"./SelectionManager-qltLu7pJ.js";import"./useEvent-DgudDhx_.js";import"./scrollIntoView-BeWdCQA-.js";import"./SelectionIndicator-CyWrjH6f.js";import"./useDescription-DLrO9DFj.js";import"./ListKeyboardDelegate-B0hzj8fZ.js";import"./PressResponder-DWiZVrXl.js";import"./useLocalizedStringFormatter-Ya10jvmU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-LrzveM_K.js";import"./VisuallyHidden-YPgCWLl2.js";import"./Button-CwoNmGBb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BWxVH0_G.js";import"./createLucideIcon-C44Pm6ej.js";import"./x-C71pF5OR.js";import"./Heading-CUv8fsir.js";import"./info-m8AoU6df.js";import"./Popover-RdW-JZ0_.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
