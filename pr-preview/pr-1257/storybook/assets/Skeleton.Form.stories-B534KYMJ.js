import{j as e,l}from"./iframe-CDA_ildW.js";import{S as t}from"./Skeleton-DJ6L9htk.js";import{T as p}from"./TextField-DNeeS8By.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C3FDDNbL.js";import"./utils-DYwc33gT.js";import"./FieldError-6T9sq_yG.js";import"./Text-K4BkD2rQ.js";import"./useFocusRing-3NNdwvus.js";import"./index-CSSYRJw_.js";import"./index-BBLevZqB.js";import"./Text-ThZYXmAV.js";import"./RSPContexts-txMKpHrt.js";import"./Form-DdFGDuZ4.js";import"./Group-C2aha83k.js";import"./Input-Da3U7j3V.js";import"./Hidden-DPevkO8m.js";import"./Button-Djyjt8oy.js";import"./useLabel-B0vXNp9W.js";import"./useLabels-CI-l0tvd.js";import"./useButton-BoIayeTx.js";import"./useTextField-DSELfoWC.js";import"./useControlledState-K9GQEKN-.js";import"./useField-DXzrxJwr.js";import"./TextField.module-DdivwlC8.js";import"./Label-CtbMCTte.js";import"./Dialog-BQv3YqZW.js";import"./OverlayArrow-C2FN7BXZ.js";import"./useResizeObserver-rW2TM9K1.js";import"./Collection-SRMBzawM.js";import"./index-CXnan05L.js";import"./Separator-CduiM4Yn.js";import"./SelectionManager-DvdfVsnr.js";import"./useEvent-H41NhmUB.js";import"./scrollIntoView-CDtwkdUZ.js";import"./SelectionIndicator-Mz0JAxcc.js";import"./useDescription-_BnwWcQ8.js";import"./ListKeyboardDelegate-B31G3H95.js";import"./PressResponder-ymxt6aWP.js";import"./useLocalizedStringFormatter-Bx9Y73Mw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CrDB_43n.js";import"./getScrollParent-BOHsqMJ6.js";import"./VisuallyHidden-D1KRANLi.js";import"./ModalOverlay-DEUulthf.js";import"./x-BUsqX4F1.js";import"./createLucideIcon-HvfaTVWX.js";import"./useLocalizedStringFormatter-D0XL9qnD.js";import"./Heading-BuYaNJ4e.js";import"./Button-ByHOpWo0.js";import"./Button.module-BB7N-cLd.js";import"./info-mC3AECCs.js";import"./Popover-DuqRbdii.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
