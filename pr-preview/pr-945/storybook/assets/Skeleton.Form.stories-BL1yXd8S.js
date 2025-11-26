import{j as e,l}from"./iframe-DADKt-kQ.js";import{S as t}from"./Skeleton-C2UPmfcN.js";import{T as d}from"./TextField-CjyJb0N4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-vRDmCpiZ.js";import"./utils-CKJqdrmj.js";import"./TextField-BquThzuE.js";import"./FieldError-D8LV-R92.js";import"./Text-D8zsPiTt.js";import"./useFocusRing-Bv8Jxajo.js";import"./index-C7Jitojr.js";import"./index-Bq3agvIg.js";import"./Text-hz03lBtp.js";import"./RSPContexts-CgoyvJfI.js";import"./Form-Dt33ryJQ.js";import"./useFormValidation-GLqBpRvw.js";import"./Group-B60edBJi.js";import"./Input-BzH3dHIx.js";import"./Hidden-kCpqRsBu.js";import"./Button-CJT79hNC.js";import"./useLabels-BkZNSNp-.js";import"./useButton-OTdhny-d.js";import"./useTextField-CepHJpON.js";import"./useControlledState-CgzivPoq.js";import"./useField-BGkGozFn.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-ADkLrKTF.js";import"./Dialog-C3pDXusW.js";import"./OverlayArrow-Dh6thg_b.js";import"./useResizeObserver-BmT7GrSG.js";import"./Collection-CMsCYGr_.js";import"./index-BYuT3Uqr.js";import"./Separator-CfmMNXq5.js";import"./SelectionManager-M25ifrG1.js";import"./useEvent-DdvKetHq.js";import"./scrollIntoView-CgOaBmyz.js";import"./SelectionIndicator-DEc6LJbw.js";import"./useDescription-B1vRvU4Y.js";import"./ListKeyboardDelegate-CArrbG-v.js";import"./PressResponder-ClBGodo-.js";import"./useLocalizedStringFormatter-CP2_5yue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BXEPCtkX.js";import"./VisuallyHidden-CsnTJoII.js";import"./Button-DnuKH5Gw.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BwsyMi25.js";import"./createLucideIcon-C_Dtelqq.js";import"./x-Fn4Q0OGq.js";import"./Heading-H3P6YjwC.js";import"./info-D9eb8G6m.js";import"./Popover-BLnlcE_p.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
