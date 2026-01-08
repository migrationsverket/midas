import{j as e,l}from"./iframe-Di032A-a.js";import{S as t}from"./Skeleton-BRY7nHMh.js";import{T as p}from"./TextField-Btsvp1wr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-PCTCXdQI.js";import"./utils-BJxOcxIc.js";import"./TextField-DxnCNxId.js";import"./FieldError-CxIoYGIw.js";import"./Text-DkJdkbXM.js";import"./useFocusRing-BEKzggJ1.js";import"./index-CCl7obIv.js";import"./index-FnGCBODv.js";import"./Text-BDBd8d6g.js";import"./RSPContexts-xlTisE2o.js";import"./Form-DPkgKMWI.js";import"./useFormValidation-Bz8g9pwD.js";import"./Group-BZFnwNLf.js";import"./Input-CFCMqXFx.js";import"./Hidden-DxXb6fAE.js";import"./Button-BX9DRAn2.js";import"./useLabels-CfOSYcsl.js";import"./useButton-DKb25YL9.js";import"./useTextField-DSrJ97JN.js";import"./useControlledState-DwpgrxVp.js";import"./useField-BIsrXDBc.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-cNDXDGyu.js";import"./Dialog-Bbzzq5Se.js";import"./OverlayArrow-B37EEZ8F.js";import"./useResizeObserver-CeHxDXST.js";import"./Collection-B6gFlhPH.js";import"./index-C9UOh0Ls.js";import"./Separator-BUMKOiG4.js";import"./SelectionManager-Ds7id3qV.js";import"./useEvent-BbrDk_On.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CAXpIAXj.js";import"./useDescription-DRp0FeRZ.js";import"./ListKeyboardDelegate-DgtNekkt.js";import"./PressResponder-D9mOH36W.js";import"./useLocalizedStringFormatter-BzuFEIom.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CtUyykXV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D_sjnnJP.js";import"./Button-Cil7mUi6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-tbWfEf8y.js";import"./createLucideIcon-CaCVZ628.js";import"./x-DaCt_Qe9.js";import"./Heading-LPSg21Yg.js";import"./info-BC2X28AA.js";import"./Popover-C0a_I_4H.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
