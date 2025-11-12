import{j as e,l}from"./iframe-D7Zuc-eZ.js";import{S as t}from"./Skeleton-CsJNqGdb.js";import{T as d}from"./TextField-OslC2cFg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BP1vl7Nd.js";import"./utils-BiMXr0U2.js";import"./FieldError-CPRxs1lF.js";import"./Text-CwUj7ln9.js";import"./useFocusRing-B1DA-kmZ.js";import"./index-P0vLAtIQ.js";import"./index-Dzd6xkVH.js";import"./Text-D6rxf28L.js";import"./RSPContexts-CRpFKCLK.js";import"./Form-Dva3W2SM.js";import"./useFormValidation-BWUsfsfP.js";import"./Group-8FQediQg.js";import"./Input-D86KkBJs.js";import"./Hidden-D0GIwlxM.js";import"./Button-DK5fi9wQ.js";import"./useLabels-cw0VgUfo.js";import"./useButton-UDg4Vaiu.js";import"./useTextField-CJouXrYa.js";import"./useControlledState-DIhMi3rJ.js";import"./useField-CA4s6n78.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DLxAcWAm.js";import"./Dialog-DJJX7omV.js";import"./OverlayArrow-Ix3BDB2F.js";import"./useResizeObserver-l-_q_PQ4.js";import"./Collection-CceFFmqi.js";import"./index-EN3D0NR3.js";import"./Separator-D4nkVwFZ.js";import"./SelectionManager-CEOPFx8V.js";import"./useEvent-Dir0o8KD.js";import"./scrollIntoView-DySWJs71.js";import"./SelectionIndicator-D-bE468Y.js";import"./useDescription-BKQXPKmX.js";import"./ListKeyboardDelegate-BR80anMz.js";import"./PressResponder-Vt5v5mpO.js";import"./useLocalizedStringFormatter-DxUzIujy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CUIdUX5W.js";import"./VisuallyHidden-B63FC8rR.js";import"./useLocalizedStringFormatter-CI8X4Tw9.js";import"./Button-4Dy92-64.js";import"./Button.module-CtQ1deO8.js";import"./x-BKMZouJb.js";import"./createLucideIcon-BQQxESn4.js";import"./Heading-dPFitHZ6.js";import"./info-Bz3lQT5m.js";import"./Popover-C2iNmJM9.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
