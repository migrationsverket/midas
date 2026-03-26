import{j as e,l}from"./iframe-Du56DBQ9.js";import{S as t}from"./Skeleton-BITomyeu.js";import{T as p}from"./TextField-blaRU4j9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C8salcyQ.js";import"./utils-CAvnU5Td.js";import"./FieldError-OzBsZtu-.js";import"./Text-BILk2R8l.js";import"./useFocusRing-f_eVeiMs.js";import"./index-CuQRkvKt.js";import"./index-QgZ7VLnC.js";import"./Text-Cp0RoVFZ.js";import"./RSPContexts-DOVRjuky.js";import"./Form-CXEH7Fev.js";import"./Group-Kw1De_li.js";import"./Input-DrE2OjmY.js";import"./Hidden-pui8tPLU.js";import"./Button-Bp_A6Sod.js";import"./useLabel-B6ITnJQY.js";import"./useLabels-BbAQfqg_.js";import"./useButton-BRUJuVat.js";import"./useTextField-hCBROf8B.js";import"./useControlledState-DMDoFiwU.js";import"./useField-DAQMiV2l.js";import"./TextField.module-DdivwlC8.js";import"./Label-BTiqKC4B.js";import"./Dialog-CMeiwHSg.js";import"./OverlayArrow-DKMcNmPv.js";import"./useResizeObserver-ux4HeMu6.js";import"./Collection-4r5BWoqc.js";import"./index-CDeBbL0O.js";import"./Separator-FCHmyQrv.js";import"./SelectionManager-C_f0uFUG.js";import"./useEvent-X4noRaoO.js";import"./scrollIntoView-Cra0RLpH.js";import"./SelectionIndicator-CbhmTXKy.js";import"./useDescription-Cdh1_1PM.js";import"./ListKeyboardDelegate-CuYYJc4U.js";import"./PressResponder-DgeE-RZd.js";import"./useLocalizedStringFormatter-CWz9Ovv4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKmp2i_8.js";import"./getScrollParent-DL5OVbEN.js";import"./VisuallyHidden-DfEAH0ac.js";import"./x-Cw-UH40G.js";import"./createLucideIcon-CmFcJ4zx.js";import"./useLocalizedStringFormatter-B6x4H80B.js";import"./Heading-BX5V11Nr.js";import"./Button-COw5A1XQ.js";import"./Button.module-BB7N-cLd.js";import"./info-DC35TdQd.js";import"./Popover-BPUxd1Th.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
