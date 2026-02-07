import{j as e,l}from"./iframe-CxuIO7a7.js";import{S as t}from"./Skeleton-ClX3Cky8.js";import{T as p}from"./TextField-B5Av8GBL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BkQSABpk.js";import"./utils-CXGq3B-b.js";import"./TextField-COXYYGul.js";import"./FieldError-94aBjoZy.js";import"./Text-DdhSqAlM.js";import"./useFocusRing-B6J0mh3g.js";import"./index-DUo9Y50I.js";import"./index-gnxrYTyY.js";import"./Text-DcyHZz0V.js";import"./RSPContexts-Dzk6vf8s.js";import"./Form-bIjQ-EOX.js";import"./useFormValidation-Csa25t6B.js";import"./Group-CHEqHYyZ.js";import"./Input-O4Rav74X.js";import"./Hidden-BA1jWOK0.js";import"./Button-DRAmhx2z.js";import"./useLabels-HWrLLSK0.js";import"./useButton-D-iZZiOo.js";import"./useTextField-DkRYEP4M.js";import"./useControlledState-CkPJQRbj.js";import"./useField-DWmTECu8.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CjJE2hgG.js";import"./Dialog-Cb_dptb3.js";import"./OverlayArrow-6djsMobr.js";import"./useResizeObserver-DS999Mn0.js";import"./Collection-9GaMkY2M.js";import"./index-DQR1Cy2T.js";import"./Separator-7rfIak5J.js";import"./SelectionManager-lvwb8BA8.js";import"./useEvent-BmZgTZWk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C_slZNUR.js";import"./useDescription-vGGme-gD.js";import"./ListKeyboardDelegate-Vn6W_k8b.js";import"./PressResponder-DPBLo-uQ.js";import"./useLocalizedStringFormatter-CU3oIUiy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-HNXuJDtz.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-aHkENNoL.js";import"./Button-BYXk57rI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0rrceAj.js";import"./createLucideIcon-CDa9bc5n.js";import"./x-B251onrY.js";import"./Heading-B-UXBj9Z.js";import"./info-DQP_yrL_.js";import"./Popover-B0V2qBer.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
