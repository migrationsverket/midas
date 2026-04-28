import{j as e,l}from"./iframe-BWYHj7v3.js";import{S as t}from"./Skeleton-CHDlmloq.js";import{T as p}from"./TextField-C2R5LF5D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CTDNmrTo.js";import"./utils-D2pxdcvN.js";import"./FieldError-BSBdPgF-.js";import"./Text-C4Gl7LUF.js";import"./useFocusRing-Dyg95bXZ.js";import"./index-7oEDLDPj.js";import"./index-9pfm-tft.js";import"./Text-7TDSW4-z.js";import"./RSPContexts-Cti5diL6.js";import"./Form-8H488Lu1.js";import"./Group-CNUH6ghx.js";import"./Input-ClZASIEz.js";import"./Hidden-B4Hoeqhu.js";import"./Button-wGSaEaEO.js";import"./useLabel-CMMx43mY.js";import"./useLabels-DZpMO0Qr.js";import"./useButton-xg-vHwOd.js";import"./useTextField-CEdyPAro.js";import"./useControlledState-DsTneGsr.js";import"./useField-DGT7cjYh.js";import"./TextField.module-DdivwlC8.js";import"./Label-DR-14BQL.js";import"./Dialog-BqnNGtZ2.js";import"./OverlayArrow-DATwpM57.js";import"./useResizeObserver-HwVTSCAl.js";import"./Collection-Dku4YGez.js";import"./index-D44Hxb6u.js";import"./Separator-sjh5eGsW.js";import"./SelectionManager-naoen6to.js";import"./useEvent-y7Reijfp.js";import"./scrollIntoView-DbvRPzab.js";import"./SelectionIndicator-DOs2NO6p.js";import"./useDescription-DkSuF9rM.js";import"./ListKeyboardDelegate-o0zsP83E.js";import"./PressResponder-DzM78joY.js";import"./useLocalizedStringFormatter-C_LLFDGY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-_TVsaW.js";import"./getScrollParent-DoohMUen.js";import"./VisuallyHidden-CBrM5tre.js";import"./ModalOverlay-Coq4E0D8.js";import"./x-BuNpvuba.js";import"./createLucideIcon-Dbzq6jGp.js";import"./useLocalizedStringFormatter-BfKsi0NO.js";import"./Heading-Cu3egZD8.js";import"./Button-DEdirHEy.js";import"./Button.module-BB7N-cLd.js";import"./info-BBom3UrL.js";import"./Popover-JClwP6OG.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
