import{j as e,l}from"./iframe-GzN0VSzx.js";import{S as t}from"./Skeleton-B8cnH8AG.js";import{T as p}from"./TextField-BV_Bpl6H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Btho7W53.js";import"./utils-dcWRHMqA.js";import"./TextField-BaQGYUvK.js";import"./FieldError-DXzy-Fs_.js";import"./Text-BytI2fT-.js";import"./useFocusRing-BT84Sj0b.js";import"./index-BtUmmQ1y.js";import"./index-DkoMqfON.js";import"./Text-DW2oSw1u.js";import"./RSPContexts-DntI5H5m.js";import"./Form-BMjB8i_m.js";import"./useFormValidation-doFWEBdr.js";import"./Group-N7BZsRgt.js";import"./Input-YqloyaF5.js";import"./Hidden-BiK8gQF-.js";import"./Button-B9ouc3Vz.js";import"./useLabels-8wBAXN0N.js";import"./useButton-BJTX_GMM.js";import"./useTextField-6IsDM_1S.js";import"./useControlledState-CFkZ7Ywi.js";import"./useField-DN3tkGHh.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CXQZZd10.js";import"./Dialog-BB0cbBWM.js";import"./OverlayArrow-B4Mvj34m.js";import"./useResizeObserver-DzkMjZLw.js";import"./Collection-DlB3NQT_.js";import"./index-CD7Lnybu.js";import"./Separator-CAURjAbf.js";import"./SelectionManager-yF3l3XTv.js";import"./useEvent-kmBIgIh4.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPUPbomw.js";import"./useDescription-DH1k0dXL.js";import"./ListKeyboardDelegate-tH97EUPf.js";import"./PressResponder-Bqn7NlWU.js";import"./useLocalizedStringFormatter-CkwJfZLX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ti5FQfNt.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bf3adftS.js";import"./Button-BcwNb2j2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9sMeAIfj.js";import"./createLucideIcon-KJI_USZY.js";import"./x-BypicB4y.js";import"./Heading-qWubh4fZ.js";import"./info-BwCMCLwi.js";import"./Popover-CDfA2okm.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
