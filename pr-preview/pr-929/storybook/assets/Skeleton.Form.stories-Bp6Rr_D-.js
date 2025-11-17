import{j as e,l}from"./iframe-DfKVIDFT.js";import{S as t}from"./Skeleton-DRaCJpiZ.js";import{T as d}from"./TextField-KhzhfsoW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dr0tuciv.js";import"./utils-BsJ338XX.js";import"./TextField-DF2P9dFC.js";import"./FieldError-Dd8N4USr.js";import"./Text-T0mofHnw.js";import"./useFocusRing-DqSVY-T2.js";import"./index-DmKxMGqW.js";import"./index-i8eomWHR.js";import"./Text-Ds5rOpWL.js";import"./RSPContexts-3olCKSwS.js";import"./Form-C271ZPZa.js";import"./useFormValidation-B6hiRjg-.js";import"./Group-BZZYZUfU.js";import"./Input-DjsNzoNH.js";import"./Hidden-DXHl2rmN.js";import"./Button-B4NKyMIN.js";import"./useLabels-DK3feGvu.js";import"./useButton-C03Un9El.js";import"./useTextField-BG0cn_vi.js";import"./useControlledState-D9mSLKmW.js";import"./useField-BlKwpNVf.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DFm--mFs.js";import"./Dialog-9Jg-KTwI.js";import"./OverlayArrow-dN5W3qfQ.js";import"./useResizeObserver-DQillnCN.js";import"./Collection-RMEV8-7l.js";import"./index-DI2NCUeh.js";import"./Separator-B4U_Wf8a.js";import"./SelectionManager-q-Jo0_Cc.js";import"./useEvent-5uq1jlnw.js";import"./scrollIntoView-ekMIuG6i.js";import"./SelectionIndicator-CAoS7GoF.js";import"./useDescription-832-Jrdv.js";import"./ListKeyboardDelegate-CDJfq3DG.js";import"./PressResponder-C3GJ2_8T.js";import"./useLocalizedStringFormatter-CRP9x8Uw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CTx9KSmX.js";import"./VisuallyHidden-LQfzhTeZ.js";import"./useLocalizedStringFormatter-CCU9GJU2.js";import"./Button-BbeKBUCA.js";import"./Button.module-CtQ1deO8.js";import"./x-Dk5lZioI.js";import"./createLucideIcon-B4afkyr6.js";import"./Heading-B9V870LV.js";import"./info-rxLgc1WB.js";import"./Popover-DxtgOAZ7.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
