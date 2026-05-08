import{j as e,l}from"./iframe-Cq1efVtu.js";import{S as t}from"./Skeleton-DrbzoYAs.js";import{T as p}from"./TextField-5afKEeYD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-8VZsB5KK.js";import"./utils-CDUIlyKR.js";import"./FieldError-C6eAPC3q.js";import"./Text-DK-NnzUH.js";import"./useFocusRing-TSe7POO2.js";import"./index-ByIJ9DK_.js";import"./index-CycVNjP9.js";import"./Text-RuRZ3ncY.js";import"./RSPContexts-Dkmb-asV.js";import"./Form-Q13wlzI6.js";import"./Group-C4PVmIVz.js";import"./Input-HFnoYBJM.js";import"./Hidden-DNnAB0GJ.js";import"./Button-DksBmTbZ.js";import"./useLabel-ls64yvEj.js";import"./useLabels-DUkn1Zma.js";import"./useButton-CT6xb_5T.js";import"./useTextField-D1hoIgxt.js";import"./useControlledState-C2EcW_bk.js";import"./useField-IIOsVOPa.js";import"./TextField.module-DdivwlC8.js";import"./Label-CgTcfasu.js";import"./Dialog-BkT0iv3q.js";import"./OverlayArrow-mSEVmWTu.js";import"./useResizeObserver-D40imYud.js";import"./Collection-BxhYCovK.js";import"./index-Drb_jYn1.js";import"./Separator-DC9ooKbR.js";import"./SelectionManager-Cd7Mn8EA.js";import"./useEvent-Bq3pP39a.js";import"./scrollIntoView-CUwLIsqS.js";import"./SelectionIndicator-CgZV3gGJ.js";import"./useDescription-xyqlmyLv.js";import"./ListKeyboardDelegate-CD1hJbSr.js";import"./PressResponder-DvJsExzN.js";import"./useLocalizedStringFormatter-UDvCuBP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CX8Z1SzW.js";import"./getScrollParent-5COwKf8k.js";import"./VisuallyHidden-DbkwGiLN.js";import"./ModalOverlay-NUeNkcQD.js";import"./x--VzijxeQ.js";import"./createLucideIcon-CUu-1dyR.js";import"./useLocalizedStringFormatter-CJpwWgd_.js";import"./Heading-BXtAiUcs.js";import"./Button-CTOoH2N3.js";import"./Button.module-BB7N-cLd.js";import"./info-Cqo6jPBc.js";import"./Popover-C_25Ncvt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
