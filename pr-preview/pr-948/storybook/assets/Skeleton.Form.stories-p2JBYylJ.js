import{j as e,l}from"./iframe-ESnm-WG3.js";import{S as t}from"./Skeleton-Cilj0Xhs.js";import{T as d}from"./TextField-DWD_h0Lf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bm7GFRTg.js";import"./utils-CfF6X6ci.js";import"./TextField-BtS9-QRW.js";import"./FieldError-rr6C8cNr.js";import"./Text-CopC_eFr.js";import"./useFocusRing-DA_fDrnE.js";import"./index-vxsCmClI.js";import"./index-AgRx6xjg.js";import"./Text-DgO_WfAt.js";import"./RSPContexts-FqK3r0D2.js";import"./Form-DXDc00WU.js";import"./useFormValidation-cPSQcZQK.js";import"./Group-DxsneQig.js";import"./Input-D53fRVMO.js";import"./Hidden-CluJLsa9.js";import"./Button-DFzAjeyw.js";import"./useLabels-CAK9137x.js";import"./useButton-6NzSPfmg.js";import"./useTextField-MzffEJs8.js";import"./useControlledState-Df7HUCxc.js";import"./useField-CyX9ROHV.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DNONlY1K.js";import"./Dialog-ClCm1x3w.js";import"./OverlayArrow-DKF8GtH1.js";import"./useResizeObserver-DuCEJASZ.js";import"./Collection-C-8Cbsbh.js";import"./index-CjhXrpIL.js";import"./Separator-D5Pkyu2p.js";import"./SelectionManager-B4xzLv80.js";import"./useEvent-CO_Npdc0.js";import"./scrollIntoView-yDgqYeez.js";import"./SelectionIndicator-BnOJ7FHR.js";import"./useDescription-BG6y4S9U.js";import"./ListKeyboardDelegate-DSKO2hYg.js";import"./PressResponder-BkJSiJRg.js";import"./useLocalizedStringFormatter-DiyOzk1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CNw16W3a.js";import"./VisuallyHidden-D9McEQWq.js";import"./Button-C-IyseEW.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dl_alOYb.js";import"./createLucideIcon-BI482lZK.js";import"./x-Ctz3SHhN.js";import"./Heading-382vz7ef.js";import"./info-Dpv2K_Rl.js";import"./Popover-DOoH27IE.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
