import{j as e,l}from"./iframe-CXiR3iKp.js";import{S as t}from"./Skeleton-DfVulxiN.js";import{T as p}from"./TextField-CaEZiost.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DQYlgacB.js";import"./utils-Bp_8F4M1.js";import"./FieldError-DhN8Qwjc.js";import"./Text-VVcfFgTz.js";import"./useFocusRing-DoagLvTG.js";import"./index-BVvfbKRI.js";import"./index-DLJWMq1n.js";import"./Text-DQ2_N-F1.js";import"./RSPContexts-BzUEWbO_.js";import"./Form-DKaWK_r_.js";import"./useFormValidation-1zZirEp8.js";import"./Group-BkJoy3vB.js";import"./Input-vwwvPHfR.js";import"./Hidden-l5OStL3l.js";import"./Button-DQDqzjOI.js";import"./useLabels-hiXhHu80.js";import"./useButton-DoaLh7Qx.js";import"./useTextField-CLj7IyXn.js";import"./useControlledState-D8SfxPND.js";import"./useField-DlTgCsXO.js";import"./TextField.module-DdivwlC8.js";import"./Label-Dga4mRfK.js";import"./Dialog-90d5LqQ1.js";import"./OverlayArrow-BuEOYobt.js";import"./useResizeObserver-Dh_BagkN.js";import"./Collection-DOgSX1Rr.js";import"./index-BnfzSOVc.js";import"./Separator-03-x-_Sf.js";import"./SelectionManager-Cg-LEXRR.js";import"./useEvent-CYUKjQ_Y.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTH59uWk.js";import"./useDescription-CwhQFL3q.js";import"./ListKeyboardDelegate-xGHUZWyo.js";import"./PressResponder-BB0iuKRP.js";import"./useLocalizedStringFormatter-oYkQuV-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTKnXGEx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-QuqGTMLw.js";import"./Button-6_2D52en.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-0YZmeDYQ.js";import"./createLucideIcon-D8BZH6VC.js";import"./x-B58mgY9H.js";import"./Heading-CV0Qf8hu.js";import"./info-Dpef2w5o.js";import"./Popover-DkEvv8Au.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
