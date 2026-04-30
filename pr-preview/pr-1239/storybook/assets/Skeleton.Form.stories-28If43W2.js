import{j as e,l}from"./iframe-CYdOIShe.js";import{S as t}from"./Skeleton-YYxHXUmt.js";import{T as p}from"./TextField-hP2xv0uo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Kw4HK8Yi.js";import"./utils-HKmh4Wcn.js";import"./FieldError-DuFysaFf.js";import"./Text-JajiEAQE.js";import"./useFocusRing-luUELUDI.js";import"./index-nBFb2I9s.js";import"./index-BdtOk31Q.js";import"./Text-BPz397x3.js";import"./RSPContexts-C-0mxEQj.js";import"./Form-Bw9LTkRW.js";import"./Group-CTyjmJWp.js";import"./Input-BBo9y7oh.js";import"./Hidden-CT5s6T9J.js";import"./Button-CFIgUPn3.js";import"./useLabel-CI9g1Lfo.js";import"./useLabels-CSj9lZg7.js";import"./useButton-CXRipkk8.js";import"./useTextField-DPDg-aWU.js";import"./useControlledState-DtqbYXAa.js";import"./useField-D4dGqq1b.js";import"./TextField.module-DdivwlC8.js";import"./Label-DiLJdHP1.js";import"./Dialog-khqDy2SS.js";import"./OverlayArrow-Bv_uKHfg.js";import"./useResizeObserver-D9MPp3x0.js";import"./Collection-CPviGoO8.js";import"./index-BHTROJYZ.js";import"./Separator-CPeFi5Hl.js";import"./SelectionManager-CuQjp409.js";import"./useEvent-Dw5D7H6E.js";import"./scrollIntoView-DG71oHLe.js";import"./SelectionIndicator-CfkQq6-V.js";import"./useDescription-B-kG1rWN.js";import"./ListKeyboardDelegate-B9pUPDfX.js";import"./PressResponder-Dov8etlp.js";import"./useLocalizedStringFormatter-5ECDI-gb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BydA_BhY.js";import"./getScrollParent-BfoeuBWC.js";import"./VisuallyHidden-DnXqJuQy.js";import"./ModalOverlay-DHUAVCC3.js";import"./x-o-bpfQug.js";import"./createLucideIcon-cX0zgN2L.js";import"./useLocalizedStringFormatter-NjtY28c2.js";import"./Heading-BZlZRKoS.js";import"./Button-CBUriOkd.js";import"./Button.module-BB7N-cLd.js";import"./info-DYVapAuS.js";import"./Popover-DNW5Vz0Y.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
