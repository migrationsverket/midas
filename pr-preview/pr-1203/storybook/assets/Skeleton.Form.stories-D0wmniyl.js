import{j as e,l}from"./iframe-CpD0sz2e.js";import{S as t}from"./Skeleton-B6nIr3PF.js";import{T as p}from"./TextField-DdBqoEhj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cm9O-v2b.js";import"./utils-ojEvGYm9.js";import"./FieldError-DwX7T7Dy.js";import"./Text-eC571-Sp.js";import"./useFocusRing-CBhF1Pep.js";import"./index-2osu5sAu.js";import"./index-C5xpIHaH.js";import"./Text-BdNXNsJY.js";import"./RSPContexts-C3ByxqzR.js";import"./Form-DxMz1J6H.js";import"./Group-CAOphb69.js";import"./Input-dDREXL9s.js";import"./Hidden-CJYkSVxl.js";import"./Button-TIyC3aNe.js";import"./useLabel-BcpaW40H.js";import"./useLabels-DFOTVMl_.js";import"./useButton-ku5NYICY.js";import"./useTextField-C1s1PE88.js";import"./useControlledState-DBG5XgRx.js";import"./useField-rnQHL0Me.js";import"./TextField.module-DdivwlC8.js";import"./Label-C0eyx21t.js";import"./Dialog-C9Iit8M9.js";import"./OverlayArrow-v1h8ybWe.js";import"./useResizeObserver-DVRfh8yT.js";import"./Collection-BfwYAR2I.js";import"./index-DDxHk1Dv.js";import"./Separator-DLxpPfl4.js";import"./SelectionManager-BRGCZ5vw.js";import"./useEvent-ZFJxjcoT.js";import"./scrollIntoView-Dc3aCiHD.js";import"./SelectionIndicator-D6jFdMfo.js";import"./useDescription-BlE-AVuu.js";import"./ListKeyboardDelegate-D7_f1PQY.js";import"./PressResponder-P3r-OniJ.js";import"./useLocalizedStringFormatter-CO2jAPcS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Comx9zlQ.js";import"./getScrollParent-DH_QPoUW.js";import"./VisuallyHidden-BXLSQV9r.js";import"./x-CZaGtiyi.js";import"./createLucideIcon-DFkdkqMu.js";import"./useLocalizedStringFormatter-BvEEsuGU.js";import"./Heading-DbFG1U6V.js";import"./Button-BEQpNkHS.js";import"./Button.module-BB7N-cLd.js";import"./info-CGnKrqY9.js";import"./Popover-Bz9dV85l.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
