import{j as e,l}from"./iframe-BqQ5c8fE.js";import{S as t}from"./Skeleton-CsoOaz8M.js";import{T as p}from"./TextField-C2INK6-i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DG6rqdlh.js";import"./utils-vcgv-geB.js";import"./FieldError-vKbkj088.js";import"./Text-mKjyceMN.js";import"./useFocusRing-0ttJCKLt.js";import"./index-BDVX9JuE.js";import"./index-Dx4QUBTR.js";import"./Text-DZT9e49R.js";import"./RSPContexts-BnH9bYe5.js";import"./Form-DesHcFFM.js";import"./Group-B96oZygu.js";import"./Input-C_rKGDhH.js";import"./Hidden-lysAnu3A.js";import"./Button-BUzCWcrF.js";import"./useLabel-BDoARLXo.js";import"./useLabels-Z9FfN6Gk.js";import"./useButton-CjstFyO0.js";import"./useTextField-CM4pVSWA.js";import"./useControlledState-p_0xc8M1.js";import"./useField-BpwbsBj8.js";import"./TextField.module-DdivwlC8.js";import"./Label-C_r7Z9fb.js";import"./Dialog-R4f7XIN1.js";import"./OverlayArrow-B6clPy7K.js";import"./useResizeObserver-CqZUYUxF.js";import"./Collection-CxdKGeHr.js";import"./index-21XDGZRk.js";import"./Separator-BgqByx8U.js";import"./SelectionManager-DSIhunJP.js";import"./useEvent-CwwdPrs-.js";import"./scrollIntoView-BSmOLwAx.js";import"./SelectionIndicator-C8zII3ul.js";import"./useDescription-BXuFRPve.js";import"./ListKeyboardDelegate-ChxPjGZv.js";import"./PressResponder-BBf-2b62.js";import"./useLocalizedStringFormatter-p3b_RLPb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKM6sTcQ.js";import"./getScrollParent-BizxzfZb.js";import"./VisuallyHidden-BYz02vHS.js";import"./ModalOverlay-7Jl_Yv-h.js";import"./x-DEICiepl.js";import"./createLucideIcon-BcjPS7EP.js";import"./useLocalizedStringFormatter-CDETYbM5.js";import"./Heading-nX8hWCWb.js";import"./Button-BS1gBrNw.js";import"./Button.module-BB7N-cLd.js";import"./info-DPNCsAFe.js";import"./Popover-kbi6VSQQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
