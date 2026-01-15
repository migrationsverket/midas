import{j as e,l}from"./iframe-CfYlVJbT.js";import{S as t}from"./Skeleton-BagOWTaE.js";import{T as p}from"./TextField-XrJaDNUs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C78mkGQe.js";import"./utils-CJmxlmBT.js";import"./TextField-CLJwfM9x.js";import"./FieldError-C1ZSTrtV.js";import"./Text-DPDTmGdI.js";import"./useFocusRing-CoZPHDQr.js";import"./index-Ye0e-ntf.js";import"./index-CP4lNSy2.js";import"./Text-a5g5-yXG.js";import"./RSPContexts-B6MfxgMQ.js";import"./Form-CkwuCk_n.js";import"./useFormValidation-BsmaiakS.js";import"./Group-RD6g6wj0.js";import"./Input-CGEiRCDO.js";import"./Hidden-CLJR8IU5.js";import"./Button-CF5oaspZ.js";import"./useLabels-CfaUcrJ-.js";import"./useButton-CwgKmRtS.js";import"./useTextField-2f_4fm7z.js";import"./useControlledState-BKJCcjym.js";import"./useField-All465gQ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BpiMwJOf.js";import"./Dialog-DFj_hi3q.js";import"./OverlayArrow-CxGag7bJ.js";import"./useResizeObserver-C7qcJTS3.js";import"./Collection-DiU-1jRC.js";import"./index-Dokwu504.js";import"./Separator-BvPwW-ao.js";import"./SelectionManager-J1zya0Zc.js";import"./useEvent-X8mwGVrv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D6nphIwP.js";import"./useDescription-DZuf13ft.js";import"./ListKeyboardDelegate-BxhRRDfm.js";import"./PressResponder-DEY1h2Cp.js";import"./useLocalizedStringFormatter-BY8QYVwG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DxI-wXWL.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRHGK4kj.js";import"./Button-mO0qg6G0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XdRVw3Iq.js";import"./createLucideIcon-BodeLy3S.js";import"./x-pOvGEv2b.js";import"./Heading-CxtVvS-8.js";import"./info-C4iI7mvH.js";import"./Popover-DexhHeTj.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
