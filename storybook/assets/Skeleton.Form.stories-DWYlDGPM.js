import{j as e,l}from"./iframe-MBbdolFR.js";import{S as t}from"./Skeleton-DHStzjAR.js";import{T as p}from"./TextField-Bkx0geYi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CfdLM4VS.js";import"./utils-Dg7ruvLQ.js";import"./FieldError-WKF4owWT.js";import"./Text-BAnCasif.js";import"./useFocusRing-Cblmo_dI.js";import"./index-DPSmS7Ww.js";import"./index-Cat6omEG.js";import"./Text-CKOZXfI5.js";import"./RSPContexts-DCBOH9RH.js";import"./Form-BKAb1_yC.js";import"./useFormValidation-CsKOlYua.js";import"./Group-CbDseRY5.js";import"./Input-HOwCu5mz.js";import"./Hidden-BqEHZ0Ur.js";import"./Button-BeUFbs-K.js";import"./useLabels-8moplH_Y.js";import"./useButton-Cdg81aej.js";import"./useTextField-Dicrt-G2.js";import"./useControlledState-DA1YFynG.js";import"./useField-D_PnAzQa.js";import"./TextField.module-DdivwlC8.js";import"./Label-Q2xdwfa1.js";import"./Dialog-BtHEWZQ3.js";import"./OverlayArrow-DlVd4awp.js";import"./useResizeObserver-BS_0XZUV.js";import"./Collection-Bi0gIBDQ.js";import"./index-CCHFRJrR.js";import"./Separator-BexriwZn.js";import"./SelectionManager-Cas3p51J.js";import"./useEvent-C6xw0YBs.js";import"./scrollIntoView-D3VE82Y3.js";import"./SelectionIndicator-NIeRPzO1.js";import"./useDescription-1itsOOAn.js";import"./ListKeyboardDelegate-DeoEHRa5.js";import"./PressResponder-B160teiR.js";import"./useLocalizedStringFormatter-BVS7UHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZ6U9CIE.js";import"./getScrollParent-BDKRolOu.js";import"./VisuallyHidden-DTLx9iH1.js";import"./x-DzqiEM-p.js";import"./createLucideIcon-DbXfeuCy.js";import"./useLocalizedStringFormatter-0WmapNTJ.js";import"./Heading-DNbI0Dcb.js";import"./Button-hlqL-z4t.js";import"./Button.module-D_C6WeTN.js";import"./info-DIp34tVu.js";import"./Popover-CX_HCApi.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
