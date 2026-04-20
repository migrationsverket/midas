import{j as e,l}from"./iframe-DChMXCrL.js";import{S as t}from"./Skeleton-LcoSBFtP.js";import{T as p}from"./TextField-D-QcWhza.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-MaGjQcWt.js";import"./utils-BplLbAcs.js";import"./FieldError-BY3Emi0e.js";import"./Text-TXgPlLZT.js";import"./useFocusRing-BpLKk3JS.js";import"./index-BtCGvG5N.js";import"./index-Q46JL2nn.js";import"./Text-CYuY9x3r.js";import"./RSPContexts-uXDlDre3.js";import"./Form-BAd9hYMN.js";import"./Group-gGcgkmgi.js";import"./Input-ZbbcuS7K.js";import"./Hidden-H9l0LVv0.js";import"./Button-MapMtsGv.js";import"./useLabel-CG1tGj69.js";import"./useLabels-4tTwJsFS.js";import"./useButton-yAWY8-j7.js";import"./useTextField-E2JLN3xF.js";import"./useControlledState-ovwSt6hg.js";import"./useField-Cu7NXcUO.js";import"./TextField.module-DdivwlC8.js";import"./Label-D0Wx9sWd.js";import"./Dialog-ricOgdWO.js";import"./OverlayArrow-lXWzun3y.js";import"./useResizeObserver-BMMfhl0-.js";import"./Collection-BU_lyoK4.js";import"./index-D-b3Of-R.js";import"./Separator-DRumvpJ6.js";import"./SelectionManager-DkBkh9eR.js";import"./useEvent-KX6gLrPs.js";import"./scrollIntoView-qDeDHRgD.js";import"./SelectionIndicator-ojDmiLhu.js";import"./useDescription-DzqttwPD.js";import"./ListKeyboardDelegate-bS7E8K2Y.js";import"./PressResponder-CrAYBKk_.js";import"./useLocalizedStringFormatter-CHUWFnrm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9d_KvjGm.js";import"./getScrollParent-Cuy0Pyiw.js";import"./VisuallyHidden-O06opA_U.js";import"./ModalOverlay-Bl49Zkkr.js";import"./x-DKchXy5q.js";import"./createLucideIcon-DiQgCGzM.js";import"./useLocalizedStringFormatter-t-oeGUHJ.js";import"./Heading-Bk8iZ59n.js";import"./Button-5OLTPx-2.js";import"./Button.module-BB7N-cLd.js";import"./info-Dlkn4Jr2.js";import"./Popover-CUhzMhki.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
