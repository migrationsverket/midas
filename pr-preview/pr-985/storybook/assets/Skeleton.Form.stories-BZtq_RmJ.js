import{j as e,l}from"./iframe-Dmln2s8W.js";import{S as t}from"./Skeleton-Dvma7VOY.js";import{T as p}from"./TextField-Ozj2IwaV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DVTyY92o.js";import"./utils-DN9YrxvM.js";import"./TextField-C0j8N5ID.js";import"./FieldError-cMeQo-5a.js";import"./Text-Bi8iFHf7.js";import"./useFocusRing-g7C5sCWj.js";import"./index-Cc6wq1BM.js";import"./index-C6K-yTup.js";import"./Text-D8VRkt36.js";import"./RSPContexts-C_ptDiqD.js";import"./Form-DlNVYM_d.js";import"./useFormValidation--hY_38Im.js";import"./Group-BfICMTxC.js";import"./Input-DJlPhiOc.js";import"./Hidden-7UyqWpMT.js";import"./Button-C5hq3iWd.js";import"./useLabels-Bj5Rya5X.js";import"./useButton-DT7lzV_U.js";import"./useTextField-CBGgj8rR.js";import"./useControlledState-DsKm9z2H.js";import"./useField-BnKPORsj.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dsn1AE2w.js";import"./Dialog-DEpfbp4W.js";import"./OverlayArrow-DawRgZp8.js";import"./useResizeObserver-CHPFMx5m.js";import"./Collection-CSVgx94G.js";import"./index-DE9j6rU8.js";import"./Separator-fIq0ZFE4.js";import"./SelectionManager-oJ2kg1zF.js";import"./useEvent-RAMa1tqT.js";import"./scrollIntoView-BZ0zJ7wl.js";import"./SelectionIndicator-DiPPuvdp.js";import"./useDescription-DWosbqC5.js";import"./ListKeyboardDelegate-DpCh4HH2.js";import"./PressResponder-DLmQb4o4.js";import"./useLocalizedStringFormatter-Cv3mFRMK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B4GVGfW4.js";import"./VisuallyHidden-DuElax1d.js";import"./Button-DnEmQCas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BqeJSIDu.js";import"./createLucideIcon-DAJh3Chd.js";import"./x-Dp4VYtmK.js";import"./Heading-CTTK_qZT.js";import"./info-CjhRKSpd.js";import"./Popover-7KdpxPIy.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
