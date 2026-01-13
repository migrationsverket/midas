import{j as e,l}from"./iframe-Bu5WN3Ef.js";import{S as t}from"./Skeleton-BJbpftHu.js";import{T as p}from"./TextField-Crfkg1ap.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C7pe8TIc.js";import"./utils-BiJWA_3V.js";import"./TextField-BiIMN0t8.js";import"./FieldError-DLBMclUE.js";import"./Text-D6NDkbQ-.js";import"./useFocusRing-MCCMWjEG.js";import"./index-DaK77TxT.js";import"./index-pKua8EdO.js";import"./Text-CSy2wCTo.js";import"./RSPContexts-DaEwdkBS.js";import"./Form-DCuhHodC.js";import"./useFormValidation-Bml2n-Y0.js";import"./Group-Br6p2Hrq.js";import"./Input-DKKUDMsm.js";import"./Hidden-D12ThQaa.js";import"./Button-CHgLdR4q.js";import"./useLabels-B6cgoF5h.js";import"./useButton-CWrQWViA.js";import"./useTextField-CgTyDUfI.js";import"./useControlledState-1KPKbDQX.js";import"./useField-Ceb9wNF7.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BmoUrNGl.js";import"./Dialog-Br_pB8XJ.js";import"./OverlayArrow-CCMeLBLs.js";import"./useResizeObserver-iBP-rbkk.js";import"./Collection-D1vejPdr.js";import"./index-DXrJiyJL.js";import"./Separator-COKc5nQC.js";import"./SelectionManager-BfluCVju.js";import"./useEvent-xlEcSicO.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BikYw6fj.js";import"./useDescription-DwXInZjk.js";import"./ListKeyboardDelegate-BUkeqVgS.js";import"./PressResponder-BYMECfUR.js";import"./useLocalizedStringFormatter-XgHPCMNy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dg2E1Ntk.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B0tGfuXD.js";import"./Button-CsD82h12.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DyFvLZVg.js";import"./createLucideIcon-CT9OvTIw.js";import"./x-CpFc5-1x.js";import"./Heading-CP5wYQUY.js";import"./info-CC9rluUV.js";import"./Popover-baXZnlHo.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
