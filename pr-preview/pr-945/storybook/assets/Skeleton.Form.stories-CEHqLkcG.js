import{j as e,l}from"./iframe-DTEEsWKs.js";import{S as t}from"./Skeleton-BxpYy1sO.js";import{T as d}from"./TextField-CiGSbCEK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DL9YKT5i.js";import"./utils-Bei6jhoM.js";import"./TextField-GVjM4_Jc.js";import"./FieldError-YzVCmXmy.js";import"./Text-D2Kdkld6.js";import"./useFocusRing-Bt_R5Kxb.js";import"./index-CDhAOoC2.js";import"./index-CAL1rCpR.js";import"./Text-RBLlkHxH.js";import"./RSPContexts-5KZxHimu.js";import"./Form-B3hcntLC.js";import"./useFormValidation-BgckL5go.js";import"./Group-BZQLSRq2.js";import"./Input-BC70697s.js";import"./Hidden-H9M_Xkwd.js";import"./Button-D8fw21xh.js";import"./useLabels-hQ-tPN-N.js";import"./useButton-Ci76CoW9.js";import"./useTextField-Bg5yeq6w.js";import"./useControlledState-DH-4U24x.js";import"./useField-DH4gi-7n.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BDaeEe6S.js";import"./Dialog-DIN0rEpg.js";import"./OverlayArrow-BBzX5q84.js";import"./useResizeObserver-CRT18-jo.js";import"./Collection-CAGQHqjV.js";import"./index-J-Ia9wnG.js";import"./Separator-BWJxkkUD.js";import"./SelectionManager-C5-FRUSe.js";import"./useEvent-DsaPgCLq.js";import"./scrollIntoView-BryBizoW.js";import"./SelectionIndicator-Ja_ivI3O.js";import"./useDescription-D1sH4a-N.js";import"./ListKeyboardDelegate-589J7MJh.js";import"./PressResponder-Dr-jAvmU.js";import"./useLocalizedStringFormatter-ClfAxNed.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BkVioRiR.js";import"./VisuallyHidden-DXWpkl8V.js";import"./Button-Ir9Meu39.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-4UzQK-SV.js";import"./createLucideIcon-CxA0LOFq.js";import"./x-JqIoOrJh.js";import"./Heading-BZKArxoK.js";import"./info-CmCwUkTo.js";import"./Popover-DdyJyfoV.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
