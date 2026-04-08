import{j as e,l}from"./iframe-IoRZPpzT.js";import{S as t}from"./Skeleton-zpRQWwru.js";import{T as p}from"./TextField-CVchnYFF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C3B2rz54.js";import"./utils-BxE4vEtI.js";import"./FieldError-BWVbvEBE.js";import"./Text-Bm8kOdo3.js";import"./useFocusRing-Cfj0kgNA.js";import"./index-C3u5Wnjv.js";import"./index-CWXAEqH-.js";import"./Text-fDJLlYrf.js";import"./RSPContexts-BGd6R71q.js";import"./Form-an_t5IvV.js";import"./Group-013S7T0p.js";import"./Input-BrOSOBAi.js";import"./Hidden-wW-xxMhm.js";import"./Button-CVTJNyWz.js";import"./useLabel-Cv3-1VeN.js";import"./useLabels-0sv1QR26.js";import"./useButton-BSTxFbL2.js";import"./useTextField-AuN8sM1I.js";import"./useControlledState-BGABXmqM.js";import"./useField-Vudx1VTG.js";import"./TextField.module-DdivwlC8.js";import"./Label-iKyXcyVL.js";import"./Dialog-6AmIAoc6.js";import"./OverlayArrow-BrQpk8b0.js";import"./useResizeObserver-DbLAT6KP.js";import"./Collection-PjH1GUxA.js";import"./index-BlQyREr_.js";import"./Separator-BoTsBsv-.js";import"./SelectionManager-BZO6tDgr.js";import"./useEvent-B1wVgNEN.js";import"./scrollIntoView-36gHvCrJ.js";import"./SelectionIndicator-D9ob4S69.js";import"./useDescription-BxymuZdi.js";import"./ListKeyboardDelegate-F-0GlIkm.js";import"./PressResponder-BvHiC6OZ.js";import"./useLocalizedStringFormatter-Dl-vCCz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2b1p0I-.js";import"./getScrollParent-DwAHZWkX.js";import"./VisuallyHidden-DVgF-hYp.js";import"./x-BKVjaePe.js";import"./createLucideIcon-D_o_RWfS.js";import"./useLocalizedStringFormatter-DWwCwLPP.js";import"./Heading-CkL6u_jg.js";import"./Button-fE-_CYhO.js";import"./Button.module-BB7N-cLd.js";import"./info-DQDJ0BFx.js";import"./Popover-wn25MY2L.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
