import{j as e,l}from"./iframe-DRF618FK.js";import{S as t}from"./Skeleton-DI9Jzuv0.js";import{T as d}from"./TextField-BL1znScP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DH000eE8.js";import"./utils-CHqxZhUB.js";import"./FieldError-D4ZV87iq.js";import"./Text-DzrFOIN-.js";import"./useFocusRing-fA7oZfLd.js";import"./index-Cjz8zzHP.js";import"./index-BaUCNhoE.js";import"./Text-B70hZHmJ.js";import"./RSPContexts-D-Mj00TC.js";import"./Form-DM0uwM-A.js";import"./Group-DuP7zzMt.js";import"./Input-9uBS3N6b.js";import"./Hidden-Dr-og7MG.js";import"./Button-D1u5VWPv.js";import"./useLabels-C9Po0DaQ.js";import"./useButton-DiQ0m4E1.js";import"./useTextField-D99h2r-n.js";import"./useControlledState-2qvD9fXu.js";import"./useField-BALZisil.js";import"./TextField.module-DdivwlC8.js";import"./Label-BIO1YihC.js";import"./Dialog-C-JGT57i.js";import"./OverlayArrow-BAcCMvYG.js";import"./useResizeObserver-CbD8FbDi.js";import"./Collection-D9IGT1mQ.js";import"./index-4E03tZY9.js";import"./Separator-jM6Nw-h1.js";import"./SelectionManager-Dn6WZ7i6.js";import"./useEvent-7_b0iMeF.js";import"./scrollIntoView-NDoO0M_I.js";import"./SelectionIndicator-DjfnhSQR.js";import"./useDescription-BYobcx8b.js";import"./ListKeyboardDelegate-C0cDa1dw.js";import"./PressResponder-DIYKYWRc.js";import"./useLocalizedStringFormatter-DdYi2mM1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZo6R1_0.js";import"./getScrollParent-E0P1bmgx.js";import"./VisuallyHidden-fImUcePD.js";import"./x-C1n_E1v7.js";import"./createLucideIcon-B6lUMAq7.js";import"./useLocalizedStringFormatter-CsD_6hYo.js";import"./Heading-DQ6b2Ur-.js";import"./Button-BUqgdpCe.js";import"./Button.module-BB7N-cLd.js";import"./info-D25gzQeR.js";import"./Popover-5iM4d1SC.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
