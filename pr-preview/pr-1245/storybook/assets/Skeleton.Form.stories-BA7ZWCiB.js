import{j as e,l}from"./iframe-B3CWHhIN.js";import{S as t}from"./Skeleton-B5ekpOno.js";import{T as p}from"./TextField-k5AtWjqf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-jmO4Hg_7.js";import"./utils-Jns7c9tB.js";import"./FieldError-DaCLZlSC.js";import"./Text-CjXkmRxL.js";import"./useFocusRing-Dqy31Yu8.js";import"./index-BnJ3Y3M7.js";import"./index-CJ7rKWZW.js";import"./Text-BEt0Rg_V.js";import"./RSPContexts-D5wE8Zis.js";import"./Form-DZNqsYbE.js";import"./Group-DdYmsXJ0.js";import"./Input-DaIvaMm_.js";import"./Hidden-CgV_CbEL.js";import"./Button-BI1n4R5H.js";import"./useLabel-CC7uv02C.js";import"./useLabels-DG2yLXCg.js";import"./useButton-qyJkLJr0.js";import"./useTextField-BN_lArB3.js";import"./useControlledState-DO7MzpyM.js";import"./useField-Dhf-tbRQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-BaMtZoUC.js";import"./Dialog-5M_yJWc8.js";import"./OverlayArrow-BBLynvro.js";import"./useResizeObserver-DehhQaPW.js";import"./Collection-DltRMGuJ.js";import"./index-DfG7SzIC.js";import"./Separator-B42A5QyY.js";import"./SelectionManager-BsMJ6UOF.js";import"./useEvent-Dz0-ORXf.js";import"./scrollIntoView-CEOdDLMX.js";import"./SelectionIndicator-CJ3Bq9Rm.js";import"./useDescription-BXbEU8r2.js";import"./ListKeyboardDelegate-Ddz2Dxjm.js";import"./PressResponder-XgRyzFBv.js";import"./useLocalizedStringFormatter-CcWFJj2d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Buslp-fm.js";import"./getScrollParent-k-5r8MVO.js";import"./VisuallyHidden-DPG3Zp-i.js";import"./ModalOverlay-CDHf7O94.js";import"./x-BAAJthI0.js";import"./createLucideIcon-B55uVL59.js";import"./useLocalizedStringFormatter-FGEoJAjv.js";import"./Heading-J4CHMMjr.js";import"./Button-CFIqCifj.js";import"./Button.module-BB7N-cLd.js";import"./info-BnsgrLUO.js";import"./Popover-HDQOFG7J.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
