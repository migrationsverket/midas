import{j as e,l}from"./iframe-CcS9-zHY.js";import{S as t}from"./Skeleton-q0PgiN1t.js";import{T as p}from"./TextField-C37YElVk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-7S5M-bfE.js";import"./utils-BpPVMEC-.js";import"./FieldError-CbsUmaqP.js";import"./Text-Bk3CxDKX.js";import"./useFocusRing-DtQX9EVQ.js";import"./index-B__opsAk.js";import"./index-CTyP7lmf.js";import"./Text-BzFZDvz7.js";import"./RSPContexts-CbDTmKmT.js";import"./Form-B4Em8h3U.js";import"./Group-DNVF67sa.js";import"./Input-Dr_jNhta.js";import"./Hidden-C5RVHIuY.js";import"./Button-CP1lY-X_.js";import"./useLabel-CjpuKoQa.js";import"./useLabels-CEXOtBfV.js";import"./useButton-D8FkW36h.js";import"./useTextField-BOrC1Htv.js";import"./useControlledState-BouQOm1H.js";import"./useField-B-LqTpNQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-x-AGAuY-.js";import"./Dialog-CFvfOaII.js";import"./OverlayArrow-CJgvQAgw.js";import"./useResizeObserver-DEGSXQPw.js";import"./Collection-B8BWG8uC.js";import"./index-BeFzaQ2_.js";import"./Separator-DyJc7VpD.js";import"./SelectionManager-B0z2jKGv.js";import"./useEvent-BvvSzZ47.js";import"./scrollIntoView-xMmmrx8y.js";import"./SelectionIndicator-XmQFTl1h.js";import"./useDescription-BvrFOMAt.js";import"./ListKeyboardDelegate-BKbak_DI.js";import"./PressResponder-D-DWvY-U.js";import"./useLocalizedStringFormatter-CayNuj83.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhvHnTYH.js";import"./getScrollParent-C09F78IA.js";import"./VisuallyHidden-hYYm2jyD.js";import"./ModalOverlay-BoWDw_P2.js";import"./x-I-qa-SpT.js";import"./createLucideIcon-C0GJ5EwW.js";import"./useLocalizedStringFormatter-CK-X1ruo.js";import"./Heading-BXnatuTy.js";import"./Button-D2itB7Px.js";import"./Button.module-BB7N-cLd.js";import"./info-g2NHuh4Z.js";import"./Popover-BkUVv2pi.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
