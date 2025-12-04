import{j as e,l}from"./iframe-CUQ35QY-.js";import{S as t}from"./Skeleton-Dx_bpIXO.js";import{T as d}from"./TextField-BGLMTewx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CwqM-Mgr.js";import"./utils-5RKy4vaX.js";import"./TextField-BqmBljxP.js";import"./FieldError-BjkxW7lY.js";import"./Text-TgbZ0VlZ.js";import"./useFocusRing-B7idPrX2.js";import"./index-CGbKJlQM.js";import"./index-C6uWvgQh.js";import"./Text-NEiftwSw.js";import"./RSPContexts-DZARiAzW.js";import"./Form-CM90o-DO.js";import"./useFormValidation-t2gqBy82.js";import"./Group-D87zkB91.js";import"./Input-C5FHMjve.js";import"./Hidden-Ct1SE1DS.js";import"./Button-Bsh9_HoT.js";import"./useLabels-Bt6x9uRf.js";import"./useButton-BansXk_T.js";import"./useTextField-stxNtcwH.js";import"./useControlledState-6cnBDVnB.js";import"./useField-CNFYxSKs.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DPYqs3XR.js";import"./Dialog-CpdDlTkd.js";import"./OverlayArrow-MZd72Nlp.js";import"./useResizeObserver-CxbX0_JZ.js";import"./Collection-vZhapCR-.js";import"./index-B9eY4gM9.js";import"./Separator-Ces7Lb1C.js";import"./SelectionManager-Dbu5pjpk.js";import"./useEvent-DKevCmMh.js";import"./scrollIntoView-k0ZnzZN6.js";import"./SelectionIndicator-BuYH8QdD.js";import"./useDescription-DpHNilUH.js";import"./ListKeyboardDelegate-CSMrpsfr.js";import"./PressResponder-Vzfn8nnZ.js";import"./useLocalizedStringFormatter-CoOBbLCl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-oXbVstWc.js";import"./VisuallyHidden-Bxln8_qY.js";import"./Button-B1Lfpc_P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHMj4qxM.js";import"./createLucideIcon-CfvbpDl0.js";import"./x-DKHs1ZuY.js";import"./Heading-DmIr2b1p.js";import"./info-DsodtU6p.js";import"./Popover-CbmKLSpx.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
