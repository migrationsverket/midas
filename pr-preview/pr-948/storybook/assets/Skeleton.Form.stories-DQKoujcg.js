import{j as e,l}from"./iframe-Drq588aW.js";import{S as t}from"./Skeleton-Dnvsrtw4.js";import{T as d}from"./TextField-Z_DyzdDA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DdyqYQoZ.js";import"./utils-aeymvuYI.js";import"./TextField-DMxnX8vY.js";import"./FieldError-BSCwEXCJ.js";import"./Text-CKbWo8TX.js";import"./useFocusRing-mHQN6z3x.js";import"./index-hBCxN88b.js";import"./index-NNPaNoGh.js";import"./Text-C6r5Lex8.js";import"./RSPContexts-Bw-iGnGu.js";import"./Form-fzg9Y9vg.js";import"./useFormValidation-Xn3ZHDpP.js";import"./Group-BXFNAoQT.js";import"./Input-7b2NrCXN.js";import"./Hidden-Dnbbd5N5.js";import"./Button-C7gy-2EJ.js";import"./useLabels-JiIilPDr.js";import"./useButton-C7taEski.js";import"./useTextField-BJ8B9H1E.js";import"./useControlledState-COayyxOg.js";import"./useField-BVVZciIw.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-u1EOuFNC.js";import"./Dialog-Ch9fc22v.js";import"./OverlayArrow-CWfV5VPx.js";import"./useResizeObserver-DDIL5TaJ.js";import"./Collection-DDxvWCWo.js";import"./index-PgDZ9KRZ.js";import"./Separator-C2I9C8yA.js";import"./SelectionManager-haA2Lgzs.js";import"./useEvent-CC-XZYLs.js";import"./scrollIntoView-Xka9BiDn.js";import"./SelectionIndicator-Dtz2skS5.js";import"./useDescription-CP6I73UT.js";import"./ListKeyboardDelegate-WfcHdrbg.js";import"./PressResponder-CZ3etc2a.js";import"./useLocalizedStringFormatter-CfbPsYEt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2tSCSSO.js";import"./VisuallyHidden-BkTTj5Jf.js";import"./Button-Bby9lJBH.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B0Gzr_5r.js";import"./createLucideIcon-BnM-Ijqi.js";import"./x-C_YK2Sn_.js";import"./Heading-DD2--ACK.js";import"./info-DJNwubPi.js";import"./Popover-CFE09TNQ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
