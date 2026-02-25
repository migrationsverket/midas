import{j as e,l}from"./iframe-BemYTmI0.js";import{S as t}from"./Skeleton-CTZgGGmW.js";import{T as p}from"./TextField-3yHuIhNm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CidQ8mFK.js";import"./utils-BFE3Bu5p.js";import"./FieldError-Cmx8qBX6.js";import"./Text-BdKoRU3R.js";import"./useFocusRing-DZNPQtTp.js";import"./index-ClgbtUC1.js";import"./index-BYexVBob.js";import"./Text-C_3jh_f2.js";import"./RSPContexts-Bpi28sKY.js";import"./Form-Cl-wZTVf.js";import"./useFormValidation-Hprlhq0d.js";import"./Group-GN5Y-yTy.js";import"./Input-B9zgWadz.js";import"./Hidden-BgieuMJL.js";import"./Button-BIUCE2_i.js";import"./useLabels-B0oUE5fB.js";import"./useButton-BFMyhuBV.js";import"./useTextField-C-GApOC2.js";import"./useControlledState-CpK-5b_b.js";import"./useField-BByJZkIc.js";import"./TextField.module-DdivwlC8.js";import"./Label-Co7s0eKC.js";import"./Dialog-zjIWTz44.js";import"./OverlayArrow-szcx6Hif.js";import"./useResizeObserver-BYTLaHDK.js";import"./Collection-CVw2CSpD.js";import"./index-BwX8aiOo.js";import"./Separator-BFJnq1WA.js";import"./SelectionManager-CETzm5H2.js";import"./useEvent-BjqKnd5t.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DBlRDH-v.js";import"./useDescription-DhkrqMYF.js";import"./ListKeyboardDelegate-CUrp1wRU.js";import"./PressResponder-BlFiJnok.js";import"./useLocalizedStringFormatter-dRW-fgCh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DkEgdanO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYKpW6eG.js";import"./Button-BvlrAquf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CsgibMpR.js";import"./createLucideIcon-CvZzPSN7.js";import"./x-DusiX_N1.js";import"./Heading-DoAu3hzM.js";import"./info-C77x0O1Y.js";import"./Popover-C-8PUIjr.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
