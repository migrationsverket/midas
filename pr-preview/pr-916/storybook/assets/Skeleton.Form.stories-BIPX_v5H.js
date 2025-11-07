import{j as e,l}from"./iframe-6vocyBZR.js";import{S as t}from"./Skeleton-B0M_Q1LC.js";import{T as d}from"./TextField-DVCgOqga.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cl1X0X5Y.js";import"./utils-BBfZu9kz.js";import"./FieldError-B_UMAHWG.js";import"./Text-D-Z22iAA.js";import"./useFocusRing-B50ygi4K.js";import"./index-B3IiVLzz.js";import"./index-BLXYeBoF.js";import"./Text-fxXJjlwh.js";import"./RSPContexts-D4oWSe-H.js";import"./Form-C5_6FEkg.js";import"./useFormValidation-DdpbHF2n.js";import"./Group-mz-2f5K-.js";import"./Input-D6d9ti0E.js";import"./Hidden-BuJvOqEn.js";import"./Button-BhGf2H3u.js";import"./useLabels-7KDepcIy.js";import"./useButton-CJoNFuGt.js";import"./useTextField-CKFOKb-e.js";import"./useControlledState-DmeySdaI.js";import"./useField-DE_0prIV.js";import"./TextField.module-DGUQcbB9.js";import"./Label-DjGxdlXp.js";import"./Dialog-DqQMkHxn.js";import"./OverlayArrow-CPemihyd.js";import"./useResizeObserver-5tgyVsav.js";import"./Collection-D4jWNWjc.js";import"./index-4MgwAo17.js";import"./Separator-DI6oJU0_.js";import"./SelectionManager-CLE8E8tc.js";import"./useEvent-ZYUzuaQ4.js";import"./scrollIntoView-_NUEia3r.js";import"./SelectionIndicator-DNloq70Y.js";import"./useDescription-Co639SVw.js";import"./ListKeyboardDelegate-CtN3kGMu.js";import"./PressResponder-CIePIazq.js";import"./useLocalizedStringFormatter-Df5C4zQW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D9OqJMJq.js";import"./VisuallyHidden-7XC-BKhD.js";import"./useLocalizedStringFormatter-D-5i6O8E.js";import"./Button-CpfHjZxO.js";import"./Button.module-CtQ1deO8.js";import"./x-TU0qh2BB.js";import"./createLucideIcon-C6fwsjaL.js";import"./Heading-ula2A9Gq.js";import"./info-kH2uwpW1.js";import"./Popover-BOyTgVV5.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
