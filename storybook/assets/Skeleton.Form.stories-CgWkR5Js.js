import{j as e,l}from"./iframe-CuFHe2Vf.js";import{S as t}from"./Skeleton-LJj0qu3J.js";import{T as p}from"./TextField-C5YeRXzq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-8VoMUNRd.js";import"./utils-VBjVty-c.js";import"./FieldError-BD8ZbGLc.js";import"./Text-BF1VogWM.js";import"./useFocusRing-B1hdhdHY.js";import"./index-XnHTh2k6.js";import"./index-6uxo6Atk.js";import"./Text-C4mdW1tH.js";import"./RSPContexts-S1NEbTgr.js";import"./Form-ChRtTK9l.js";import"./Group-BZfJMEwC.js";import"./Input-B0HfqjCP.js";import"./Hidden-Bu9Ft7CN.js";import"./Button-VKTXL-zI.js";import"./useLabel-BWPwXwHm.js";import"./useLabels-DvXUCZzH.js";import"./useButton-CH05P1-e.js";import"./useTextField-jEbRxP4U.js";import"./useControlledState-JP9W3MVB.js";import"./useField-Lr6V8Ghf.js";import"./TextField.module-DdivwlC8.js";import"./Label--KdMaB1S.js";import"./Dialog-CkiBqOrK.js";import"./OverlayArrow-BWFbiArt.js";import"./useResizeObserver-BTZba6w_.js";import"./Collection-XlbfREs0.js";import"./index-BM5YCedE.js";import"./Separator-BnkD2XaK.js";import"./SelectionManager-B0ydga7k.js";import"./useEvent-D-TzDIei.js";import"./scrollIntoView-C3vI_X5p.js";import"./SelectionIndicator-DlvZtmB1.js";import"./useDescription-BeysD_em.js";import"./ListKeyboardDelegate-BLaavUV6.js";import"./PressResponder-nWHRf4FV.js";import"./useLocalizedStringFormatter-DOfPa_xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-hEtmpAV_.js";import"./getScrollParent-BI7k-3ko.js";import"./VisuallyHidden-CygALObj.js";import"./x-Dr_a8wCQ.js";import"./createLucideIcon-C4YuFSR4.js";import"./useLocalizedStringFormatter-CZd5T7mu.js";import"./Heading-fMwQ2lp0.js";import"./Button-CksL_-0o.js";import"./Button.module-BB7N-cLd.js";import"./info-CnU1GKsh.js";import"./Popover-Dx8eip-K.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
