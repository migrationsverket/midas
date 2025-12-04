import{j as e,l}from"./iframe-BiGwQC7B.js";import{S as t}from"./Skeleton-wL7FkQNS.js";import{T as d}from"./TextField-DxEqAIFt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C5_60jgT.js";import"./utils-C30Tz2FV.js";import"./TextField-CTy5OAPf.js";import"./FieldError-BdtM7o8g.js";import"./Text-CGAgsi4Y.js";import"./useFocusRing-Yc3HhkHH.js";import"./index-tDrwXmSr.js";import"./index-CukiPHwP.js";import"./Text-aG3lDf3K.js";import"./RSPContexts-D_ivU-ZX.js";import"./Form-C7dWceJW.js";import"./useFormValidation-LCwChDGO.js";import"./Group-DQLBcdFM.js";import"./Input-BiZwcFlP.js";import"./Hidden-FKjmD1jf.js";import"./Button-wh89retW.js";import"./useLabels-B8OQIyOs.js";import"./useButton-DM0HTRcL.js";import"./useTextField-B7CJZVWF.js";import"./useControlledState-BsPOPDnb.js";import"./useField-B9Ft1-xe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CLSu6hEu.js";import"./Dialog-CrCVMneY.js";import"./OverlayArrow-D30kDzpP.js";import"./useResizeObserver-DYkmBeUS.js";import"./Collection-Dj3hLLkE.js";import"./index-CcnGAl9P.js";import"./Separator-Cc5LirtC.js";import"./SelectionManager-D4LjFjr8.js";import"./useEvent-BGxB7qrz.js";import"./scrollIntoView-DztyhQpp.js";import"./SelectionIndicator-MQ04DVD-.js";import"./useDescription-D2kvnLh0.js";import"./ListKeyboardDelegate-CZDG5-z1.js";import"./PressResponder-C65zphIG.js";import"./useLocalizedStringFormatter-DWUwKKLO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BCvUZjbw.js";import"./VisuallyHidden-BsPxQLTF.js";import"./Button-CIRUUK5p.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dfxgqjph.js";import"./createLucideIcon-DBZ-Oss7.js";import"./x-CDnnqeqz.js";import"./Heading-BrwkFCbz.js";import"./info-DFMjCQMu.js";import"./Popover-DE6rY3BO.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
