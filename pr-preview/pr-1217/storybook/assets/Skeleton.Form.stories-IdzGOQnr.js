import{j as e,l}from"./iframe-DDrwZSUr.js";import{S as t}from"./Skeleton-BkQenqFA.js";import{T as p}from"./TextField-knUhISpR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B889jH7X.js";import"./utils-fZpJvyFO.js";import"./FieldError-Dwx20Li1.js";import"./Text-C8zREkr5.js";import"./useFocusRing-Co7KnI-2.js";import"./index-BDdESxF6.js";import"./index-2ekyzgHz.js";import"./Text-CsbHuTMa.js";import"./RSPContexts-DBeOTN7L.js";import"./Form-CrG6ievP.js";import"./Group-BdlcR2wJ.js";import"./Input-BwSKmiC0.js";import"./Hidden-BbxqZPAf.js";import"./Button-BBtH1XqU.js";import"./useLabel-B-iHNEQ-.js";import"./useLabels-C-XwBesu.js";import"./useButton-DTzMuBwj.js";import"./useTextField-Ce454HzC.js";import"./useControlledState-CoaU-25M.js";import"./useField-CG9QcYio.js";import"./TextField.module-DdivwlC8.js";import"./Label-zFg_rysu.js";import"./Dialog-B_fIIImm.js";import"./OverlayArrow-DdmkYdL-.js";import"./useResizeObserver-CAKse5q8.js";import"./Collection-DdrG0jfe.js";import"./index-D2JzpI49.js";import"./Separator-CyG8sSw9.js";import"./SelectionManager-Pdt05C2-.js";import"./useEvent-v--lpn9l.js";import"./scrollIntoView-Dk5DfXO6.js";import"./SelectionIndicator-BA7AxvgT.js";import"./useDescription-Bqe-Zf64.js";import"./ListKeyboardDelegate-TygQEIe6.js";import"./PressResponder-D59WGRsi.js";import"./useLocalizedStringFormatter--0SdXCip.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RS1PcHRn.js";import"./getScrollParent-DB8NtD2D.js";import"./VisuallyHidden-Dfp2PUpV.js";import"./Modal-DKVo_TS5.js";import"./x-CGnJ7BA1.js";import"./createLucideIcon-YccigzIq.js";import"./useLocalizedStringFormatter-CaCMCUjI.js";import"./Heading-D6s1WcTy.js";import"./Button-B7DQCmWQ.js";import"./Button.module-BB7N-cLd.js";import"./info-IOZI_zMf.js";import"./Popover-BKmRYmCQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
