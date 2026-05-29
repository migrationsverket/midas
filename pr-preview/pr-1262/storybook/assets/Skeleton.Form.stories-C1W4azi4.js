import{j as e,l}from"./iframe-CDEaDO_F.js";import{S as t}from"./Skeleton-BmeR9Q1t.js";import{T as p}from"./TextField-hFunfDLT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B6g_i_ol.js";import"./utils-OMrxCTYB.js";import"./FieldError-28bsvyp8.js";import"./Text-BM9CJ7ZD.js";import"./useFocusRing-D6D_N6j5.js";import"./index-HLg42q85.js";import"./index-BWuCcNre.js";import"./Text-I0yIqnfi.js";import"./RSPContexts-ByGtY0Qq.js";import"./Form-CMCMqyJK.js";import"./Group-KrKl25VN.js";import"./Input-DsPCZRUt.js";import"./Hidden-DV64-eP0.js";import"./Button-VtRoDegr.js";import"./useLabel-BWHpOmGl.js";import"./useLabels-BTwbSZKD.js";import"./useButton-mnoEnHil.js";import"./useTextField-BtLcvdq1.js";import"./useControlledState-DL-5sHQJ.js";import"./useField-DLK70uIH.js";import"./TextField.module-DdivwlC8.js";import"./Label-BBH0OudU.js";import"./Dialog-CkXE7XRd.js";import"./OverlayArrow-BfqAbg3c.js";import"./useResizeObserver-BlflmIY_.js";import"./Collection-DpglE9eU.js";import"./index-oXSIQico.js";import"./Separator-C1yvXGtZ.js";import"./SelectionManager-BONC5nvo.js";import"./useEvent-CWkInWDY.js";import"./scrollIntoView-Bi7y7USg.js";import"./SelectionIndicator-1032K0bl.js";import"./useDescription-DD-0CJF1.js";import"./ListKeyboardDelegate-DjIVihIp.js";import"./PressResponder-CemorAbx.js";import"./useLocalizedStringFormatter-BYvnlSsE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPjnfsCI.js";import"./getScrollParent-DqH0lpOQ.js";import"./VisuallyHidden-D_heY0RE.js";import"./ModalOverlay-oqnbdp2F.js";import"./x-jshiSbcB.js";import"./createLucideIcon-B5m9rABL.js";import"./useLocalizedStringFormatter-1JfWbRYz.js";import"./Heading-CLMFJaeB.js";import"./Button-BRFWodMz.js";import"./Button.module-BB7N-cLd.js";import"./info-BZqraZA3.js";import"./Popover-Dn0J3jUe.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
