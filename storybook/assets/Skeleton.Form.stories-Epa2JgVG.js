import{j as e,l}from"./iframe-BQlcbrgq.js";import{S as t}from"./Skeleton-B2OOQEPY.js";import{T as p}from"./TextField-Bw0yH6p4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-8XAI5RTC.js";import"./utils-zlU0QFfw.js";import"./FieldError-Bsl-hkeP.js";import"./Text-9noXsIlr.js";import"./useFocusRing-vaJTuI4B.js";import"./index-9xcskC2r.js";import"./index-BwtwGZuI.js";import"./Text-VFn9yNax.js";import"./RSPContexts-Bvy64kgY.js";import"./Form-BbiXVtoW.js";import"./Group-6JbUst6D.js";import"./Input-Dmfx3AYP.js";import"./Hidden-BCstp6u_.js";import"./Button-CDoUC3iq.js";import"./useLabel-Btcj4E6x.js";import"./useLabels-QRQ8ouBW.js";import"./useButton-oX55LUg2.js";import"./useTextField-5FDI_JTc.js";import"./useControlledState-8FQUmPf4.js";import"./useField-C6cnRVBt.js";import"./TextField.module-DdivwlC8.js";import"./Label-B5SwdTYO.js";import"./Dialog-BfMFzFGl.js";import"./OverlayArrow-CfGpEGgB.js";import"./useResizeObserver-BxaWleb4.js";import"./Collection-DiPZ5oiq.js";import"./index-Cc7kdlmZ.js";import"./Separator-Bxvh_6_C.js";import"./SelectionManager-Bqi2DdnI.js";import"./useEvent-DZ7mJmfU.js";import"./scrollIntoView-qNB0-vvI.js";import"./SelectionIndicator-DTHAul58.js";import"./useDescription-WI-F6yLm.js";import"./ListKeyboardDelegate-ekvubGfM.js";import"./PressResponder-CsSdfsYB.js";import"./useLocalizedStringFormatter-DJDlUoLo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dja5saqP.js";import"./getScrollParent-CdT_EqNx.js";import"./VisuallyHidden-CKBFwX4P.js";import"./Dialog-DSo1x1fV.js";import"./x-CQzcLprN.js";import"./createLucideIcon-Dkmw8KOt.js";import"./useLocalizedStringFormatter-DdRSrN8_.js";import"./Heading-oxsWrt8S.js";import"./Button-CWx5j6of.js";import"./Button.module-BB7N-cLd.js";import"./info-CCdV7YtR.js";import"./Popover-CXYnS0Pt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
