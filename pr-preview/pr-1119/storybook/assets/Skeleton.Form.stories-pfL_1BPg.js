import{j as e,l}from"./iframe-CPefQOMB.js";import{S as t}from"./Skeleton-C6MHquNa.js";import{T as d}from"./TextField-DlIWXTYW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DFWBmf9n.js";import"./utils-DEaTr3Fo.js";import"./FieldError-HmUKiVb0.js";import"./Text-DYVOn2Uj.js";import"./useFocusRing-C-wxtkDE.js";import"./index-DzMaIh1E.js";import"./index-iwjKZAtl.js";import"./Text-CxFNT2uR.js";import"./RSPContexts-BAtoVYGO.js";import"./Form-CpmcMTFY.js";import"./Group-D1X3vN9H.js";import"./Input-DmkKW2MK.js";import"./Hidden-CMfLv80K.js";import"./Button-CZP9j9FA.js";import"./useLabels-CyIDVwdt.js";import"./useButton-h3Du59Bt.js";import"./useTextField-BWVMWcat.js";import"./useControlledState-D3MUrnpH.js";import"./useField-BdgyFtJ7.js";import"./TextField.module-DdivwlC8.js";import"./Label-BiC2qn7L.js";import"./Dialog-jsJXy4uT.js";import"./OverlayArrow-CS9fCMXG.js";import"./useResizeObserver-ChhirTSn.js";import"./Collection-DDNjRncz.js";import"./index-CF4t0_Q1.js";import"./Separator-BdNCc4Jn.js";import"./SelectionManager-D2GrdEi7.js";import"./useEvent-DReQVrX4.js";import"./scrollIntoView-SfcehlMa.js";import"./SelectionIndicator-Bo5GGMOT.js";import"./useDescription-Cd_q-cvg.js";import"./ListKeyboardDelegate-B7f2bhga.js";import"./PressResponder-8GylUK33.js";import"./useLocalizedStringFormatter-2aSusuIC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTyWSrAF.js";import"./getScrollParent-Dax8D36d.js";import"./VisuallyHidden-En7Y8aD0.js";import"./x-BnYSOvfM.js";import"./createLucideIcon-CMS1EKmC.js";import"./useLocalizedStringFormatter-D3LPWJw0.js";import"./Heading-BSJNcz6Y.js";import"./Button-BiVXJ2cY.js";import"./Button.module-BB7N-cLd.js";import"./info-BB-Sp21-.js";import"./Popover-DvBVFfgk.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
