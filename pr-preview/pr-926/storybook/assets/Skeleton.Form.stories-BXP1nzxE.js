import{j as e,l}from"./iframe-1vIqjnby.js";import{S as t}from"./Skeleton-Bifxmd8g.js";import{T as d}from"./TextField-BAcrZxFu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CzijDPC7.js";import"./utils-DP4tvbox.js";import"./FieldError-cJah9zTn.js";import"./Text-D5j6OND1.js";import"./useFocusRing-qKukOunu.js";import"./index-fb0U5xET.js";import"./index-CQziH2IA.js";import"./Text-xTP-Xoo1.js";import"./RSPContexts-a3xvsoTH.js";import"./Form-CK7gSjVE.js";import"./useFormValidation-CY-fO6eB.js";import"./Group-PCI0l0_m.js";import"./Input-DQL-dUrG.js";import"./Hidden-C6xvz5Aa.js";import"./Button-I0OIDbhB.js";import"./useLabels-Cb18_xpb.js";import"./useButton-yhDvMx9o.js";import"./useTextField-DE97ZTSh.js";import"./useControlledState-Gd009-3T.js";import"./useField-DHtH5iYa.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Bs6Gjzsz.js";import"./Dialog-QcJzazWJ.js";import"./OverlayArrow-C-S-uo79.js";import"./useResizeObserver-BmxZKQb4.js";import"./Collection-B_qjrqu1.js";import"./index-6FT_6TTx.js";import"./Separator-VabwxyGE.js";import"./SelectionManager-LnSuBezg.js";import"./useEvent-CSNMnz9a.js";import"./scrollIntoView-jQrGDwuP.js";import"./SelectionIndicator-C6nzsYuD.js";import"./useDescription-BqgyIHM3.js";import"./ListKeyboardDelegate-CQrGCtp7.js";import"./PressResponder-CiRFdRvu.js";import"./useLocalizedStringFormatter-CJVMb10g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-QIQly7dc.js";import"./VisuallyHidden-BDeEE_jR.js";import"./useLocalizedStringFormatter-CW75oDtM.js";import"./Button-lao2U65D.js";import"./Button.module-CtQ1deO8.js";import"./x-D0NlZ6zO.js";import"./createLucideIcon-BEyZRkKF.js";import"./Heading-Bxf8NlZx.js";import"./info-Bnv_n0yS.js";import"./Popover-CRLvUmwf.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
