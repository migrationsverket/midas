import{j as e,l}from"./iframe-D-sLCnpD.js";import{S as t}from"./Skeleton-BvN9Ot13.js";import{T as p}from"./TextField-BtIh9i__.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CXxZiWVL.js";import"./utils-D3U7E8TR.js";import"./FieldError-CFlBecVg.js";import"./Text-BKNBB32x.js";import"./useFocusRing-BddZYFRw.js";import"./index-CLCyT0Oh.js";import"./index-D5x8KNVK.js";import"./Text-CHAFZQ5b.js";import"./RSPContexts-BDn2DSX_.js";import"./Form-CErwLJsl.js";import"./Group-7Y9XR-zS.js";import"./Input-rMBbivEa.js";import"./Hidden-y_sC-lpt.js";import"./Button-DnF54DF8.js";import"./useLabel-Cu8kCPJx.js";import"./useLabels-r9V9wZ09.js";import"./useButton-QMunS1hB.js";import"./useTextField-CuKgcO-_.js";import"./useControlledState-BjvLL9Qd.js";import"./useField-ndYRkqXj.js";import"./TextField.module-DdivwlC8.js";import"./Label-BCpoTopw.js";import"./Dialog-DVAzIS_k.js";import"./OverlayArrow-B3oi1bwN.js";import"./useResizeObserver-BYpqPXO9.js";import"./Collection-j1eO0jwF.js";import"./index-BrwdpFcY.js";import"./Separator-CbDWfo-G.js";import"./SelectionManager-D0Rio1l3.js";import"./useEvent-DaZ7xRUF.js";import"./scrollIntoView-BjuirdaY.js";import"./SelectionIndicator-BZoYaVyr.js";import"./useDescription-Bu2RrSkA.js";import"./ListKeyboardDelegate-CO5NtSQa.js";import"./PressResponder-D0_KeEoj.js";import"./useLocalizedStringFormatter-BcWSncvR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CS2NY984.js";import"./getScrollParent-D1vwRPGd.js";import"./VisuallyHidden-qGd6TSu6.js";import"./ModalOverlay-BVxSKMXr.js";import"./x-2-riXgs7.js";import"./createLucideIcon-DYN3agFs.js";import"./useLocalizedStringFormatter-CdR-Kcyq.js";import"./Heading-C6SAYcER.js";import"./Button-DXPPcOjH.js";import"./Button.module-BB7N-cLd.js";import"./info-oXTJUZr6.js";import"./Popover-BSLE8Opz.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
