import{j as e,l}from"./iframe-CTgOJ9Ps.js";import{S as t}from"./Skeleton-COasO2sf.js";import{T as p}from"./TextField-Dq_L-g_y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DdRf3zTQ.js";import"./utils-DVlNRVKr.js";import"./TextField-BFyAA7x7.js";import"./FieldError-bycMJmoo.js";import"./Text-DcY7rHII.js";import"./useFocusRing-X2jAZYAF.js";import"./index-CCWPqzcV.js";import"./index-BoZlgUKT.js";import"./Text-KKNDIRRs.js";import"./RSPContexts-CtkEES1X.js";import"./Form-CpKuv4-A.js";import"./useFormValidation-BvD8rtkG.js";import"./Group-BNcLlHyn.js";import"./Input-Bky8Da-S.js";import"./Hidden-BgNUkzG2.js";import"./Button-C-UPDMJV.js";import"./useLabels-A9HpFVJQ.js";import"./useButton-BHqm994R.js";import"./useTextField-DKDELgNf.js";import"./useControlledState-CFnILQr1.js";import"./useField-Dnh_8hCp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-SFdtHiVk.js";import"./Dialog-CnYvrznf.js";import"./OverlayArrow-XRtviRHN.js";import"./useResizeObserver-CKWpUOey.js";import"./Collection-A3cpZHrD.js";import"./index-DBJN-XyW.js";import"./Separator-BzZFj4xO.js";import"./SelectionManager-B9-wcfHY.js";import"./useEvent-DdPK42_P.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-cPAL-U0V.js";import"./useDescription-BAzN6H68.js";import"./ListKeyboardDelegate-CsMq0NaM.js";import"./PressResponder-CrP1xJZp.js";import"./useLocalizedStringFormatter-DYKfyeFk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B3D8S1FJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DMWuysUy.js";import"./Button-BrzX4JOs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-uMvmKC8y.js";import"./createLucideIcon-8WvXNeel.js";import"./x-B0Sr41AG.js";import"./Heading-ClW6Bag1.js";import"./info-CXxa3eYD.js";import"./Popover-BRuKbxpJ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
