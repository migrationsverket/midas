import{j as e,l}from"./iframe-DB1fQkim.js";import{S as t}from"./Skeleton-eEtS8Mmx.js";import{T as p}from"./TextField-0ho1xqJi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-fVtaJuTy.js";import"./utils-rcw9EHco.js";import"./FieldError-B9rnBVQS.js";import"./Text-fvBQwzot.js";import"./useFocusRing-BqzMj4PE.js";import"./index-Bt17hO8v.js";import"./index-AryLyPHF.js";import"./Text-Hm2BWrds.js";import"./RSPContexts-BJrSYr0Z.js";import"./Form-CfjHafmL.js";import"./useFormValidation-BzsRUDrO.js";import"./Group-CmtVcgbA.js";import"./Input-DWLGDnim.js";import"./Hidden-DL23eUkw.js";import"./Button-CfOPYvMd.js";import"./useLabels-eN3v5AUZ.js";import"./useButton-De_mFC-y.js";import"./useTextField-BX9BOpAt.js";import"./useControlledState-BGJ8Svio.js";import"./useField-C1-CT7Bj.js";import"./TextField.module-DpzeWGpt.js";import"./Label-aZXoWtjV.js";import"./Dialog-BBC3VHlZ.js";import"./OverlayArrow-CQ7RtPct.js";import"./useResizeObserver-DaTVkAJj.js";import"./Collection-DzJxdVpc.js";import"./index-BKfnPzb7.js";import"./Separator-D79YFtWQ.js";import"./SelectionManager-BLyrVyiQ.js";import"./useEvent-Cy_tRzK_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Btb-iVUx.js";import"./useDescription-Vm0yjvuZ.js";import"./ListKeyboardDelegate-CN8wZZsU.js";import"./PressResponder-B_yr5Zfc.js";import"./useLocalizedStringFormatter-boXa-JbY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DvZ16s0t.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kOOindq1.js";import"./Button-q_lSiE8f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5j4HyRnM.js";import"./createLucideIcon-BkMAC4LJ.js";import"./x-Vxu3CVhu.js";import"./Heading-5m64qMAb.js";import"./info-C6dUYnCV.js";import"./Popover-R_bMtkiW.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
