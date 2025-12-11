import{j as e,l}from"./iframe-ew_c8Ar1.js";import{S as t}from"./Skeleton-Cw9XpI55.js";import{T as p}from"./TextField-CD4_mzCQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-WcGz6zyE.js";import"./utils-Dqzr4Pki.js";import"./TextField-D6aPtBfh.js";import"./FieldError-BvGGtKbz.js";import"./Text-DCZDHd_s.js";import"./useFocusRing-BCBGQLiA.js";import"./index-B-AnuWqo.js";import"./index-DV6EzAem.js";import"./Text-qQ_AxwzD.js";import"./RSPContexts-C0CdLA6m.js";import"./Form-C-XbQG_I.js";import"./useFormValidation-BLzMQRkI.js";import"./Group-QP6MkwAc.js";import"./Input-DWMyK-Zv.js";import"./Hidden-BqxvZ74N.js";import"./Button-CNKdX4lK.js";import"./useLabels-BfgLEKzw.js";import"./useButton-DD4YI9ZW.js";import"./useTextField-sx1qfgip.js";import"./useControlledState-CcfGPE8i.js";import"./useField-Bj1_yxTO.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-YBy9VX1d.js";import"./Dialog-BQ3If_6k.js";import"./OverlayArrow-CaCN9pdQ.js";import"./useResizeObserver-tdd60-57.js";import"./Collection-DVPNe_rB.js";import"./index-CAuzshzC.js";import"./Separator-D8J14l87.js";import"./SelectionManager-D8qpnu3e.js";import"./useEvent-TRpBA60y.js";import"./scrollIntoView-B87_qoAO.js";import"./SelectionIndicator-jAxqj1hI.js";import"./useDescription-BpxF-b7t.js";import"./ListKeyboardDelegate-t0Dd7Zgy.js";import"./PressResponder-DRxrBBeJ.js";import"./useLocalizedStringFormatter-CJvI6W0Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BzLbdOeN.js";import"./VisuallyHidden-pImEXMGE.js";import"./Button-DR2FWxw-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BsyJ0bjv.js";import"./createLucideIcon-CjgT-vsM.js";import"./x-CCzrZzPy.js";import"./Heading-BCUqRBlG.js";import"./info-yrpflt1x.js";import"./Popover-dF1uHzQn.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
