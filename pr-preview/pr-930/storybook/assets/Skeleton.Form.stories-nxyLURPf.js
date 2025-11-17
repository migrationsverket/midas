import{j as e,l}from"./iframe-DzMIb7Ox.js";import{S as t}from"./Skeleton-DaEsgNq5.js";import{T as d}from"./TextField-BcvXNIhq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BDlq1KRa.js";import"./utils-Cdwe4BCh.js";import"./TextField-CDsJgs0y.js";import"./FieldError-DbxKaZYC.js";import"./Text-BBuKGEIS.js";import"./useFocusRing-BFU8EAFv.js";import"./index-DW-0uUM6.js";import"./index-Cl0FZxW_.js";import"./Text-CuzShXx2.js";import"./RSPContexts-DJiMJ6Uh.js";import"./Form-BrMVOI4Z.js";import"./useFormValidation-DiMAdNhw.js";import"./Group-BYU8YkSb.js";import"./Input-CMnmmIuM.js";import"./Hidden-DAvjwAnA.js";import"./Button-Crwjj3sD.js";import"./useLabels-CeSEzTdd.js";import"./useButton-1toAChHK.js";import"./useTextField-ColjL6hN.js";import"./useControlledState-C6lxKGJg.js";import"./useField-ikIrFh80.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BXWQeB_I.js";import"./Dialog-B3GjjMvg.js";import"./OverlayArrow-Bwr_osth.js";import"./useResizeObserver-Dmvy1v7R.js";import"./Collection-BJHhLXCJ.js";import"./index-qS7KxFYS.js";import"./Separator-_fjjPMXC.js";import"./SelectionManager-ChKt8TQX.js";import"./useEvent-ZscvBuYj.js";import"./scrollIntoView-C77nXoWt.js";import"./SelectionIndicator-ClB5sx6g.js";import"./useDescription-BHWqtBw9.js";import"./ListKeyboardDelegate-DZs0j5nu.js";import"./PressResponder-BeY7CEEu.js";import"./useLocalizedStringFormatter-Cm24wEWc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BMEE02Hx.js";import"./VisuallyHidden-BJydeYP9.js";import"./useLocalizedStringFormatter-zyVrsTaN.js";import"./Button-BHSCiAEx.js";import"./Button.module-CtQ1deO8.js";import"./x-tzBCnGcQ.js";import"./createLucideIcon-DxKoJQzX.js";import"./Heading-Br2mJzVB.js";import"./info-yWSDsxN-.js";import"./Popover-Y_gtzwk9.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
