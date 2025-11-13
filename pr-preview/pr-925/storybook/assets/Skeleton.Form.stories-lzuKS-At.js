import{j as e,l}from"./iframe-CyMjtGPK.js";import{S as t}from"./Skeleton-C8-R5X6-.js";import{T as p}from"./TextField-BINBwxri.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-3YqPwIT1.js";import"./utils-DVuKvfbU.js";import"./TextField-CDC7mTBz.js";import"./FieldError-Bva2mD5K.js";import"./Text-DzIkDf4e.js";import"./useFocusRing-ChpYD699.js";import"./index-D_9YXFXE.js";import"./index-CEYNSK8w.js";import"./Text-Ugwvt_bi.js";import"./RSPContexts-B7a1EqUx.js";import"./Form-Bxd20bgC.js";import"./useFormValidation-DoI_l0NE.js";import"./Group-4BDL0-vA.js";import"./Input-CsLrW7G-.js";import"./Hidden-IMfBhQ0L.js";import"./Button-BXSdsNHC.js";import"./useLabels-DNtrS2Qm.js";import"./useButton-KGQDEH2-.js";import"./useTextField-DLblCXJX.js";import"./useControlledState-CTMqSIS3.js";import"./useField-Bz927p2u.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CXE6cfAH.js";import"./Dialog-BBciz3IO.js";import"./OverlayArrow-CZT2_jrR.js";import"./useResizeObserver--QwmZnvn.js";import"./Collection-DFlPbA8P.js";import"./index-DZDfQsSu.js";import"./Separator-C3w7GKaJ.js";import"./SelectionManager-C6_z_HwH.js";import"./useEvent-DGFI6kX3.js";import"./scrollIntoView-DiSP5vc7.js";import"./SelectionIndicator-OP8igp-4.js";import"./useDescription-y7zAw2pV.js";import"./ListKeyboardDelegate-C5QdJqc9.js";import"./PressResponder-DFq-te7B.js";import"./useLocalizedStringFormatter-CLPnsWem.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Da9WjJ5R.js";import"./VisuallyHidden-BjRgoPVR.js";import"./useLocalizedStringFormatter-C4pjlO5j.js";import"./Button-B8uAn95p.js";import"./Button.module-CtQ1deO8.js";import"./x-E3pVvVHL.js";import"./createLucideIcon-D70ZsCEu.js";import"./Heading-Bo_fpOH0.js";import"./info-DtrsAcnO.js";import"./Popover-DcoGuDuo.js";import"./Input-DfRyvOEe.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
