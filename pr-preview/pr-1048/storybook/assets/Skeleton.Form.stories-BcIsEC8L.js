import{j as e,l}from"./iframe-CyQ_Q7rG.js";import{S as t}from"./Skeleton-Bpxa0k5h.js";import{T as p}from"./TextField-ekr1Mknt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DxNdU4kG.js";import"./utils-BoW3E2H5.js";import"./FieldError-CQXxDwPR.js";import"./Text-Dq2_g6JH.js";import"./useFocusRing-BQ-1QbEG.js";import"./index-CR1l2dC_.js";import"./index-DOUe2Txr.js";import"./Text-agLRoWzJ.js";import"./RSPContexts-BGLALdn-.js";import"./Form-DbePOiZQ.js";import"./useFormValidation-B0oDx7tm.js";import"./Group-CbvK-T66.js";import"./Input-xkd25XqC.js";import"./Hidden-CRjkj892.js";import"./Button-CntAlnRy.js";import"./number-DfkVkf0F.js";import"./useLabels-CGrF7Gz1.js";import"./useButton-DyeUmxt9.js";import"./useTextField-D4-g9e6y.js";import"./useControlledState-fHHUIill.js";import"./useField-BkpnFURk.js";import"./TextField.module-Dhscz2t0.js";import"./Label-Dk_ZCLRp.js";import"./Dialog-CTc7Teu9.js";import"./OverlayArrow-w7zPFq0b.js";import"./useResizeObserver-CiwbCPBb.js";import"./Collection-9Co2B5T4.js";import"./index-CBTRi50S.js";import"./Separator-BlZOPbYT.js";import"./SelectionManager-Cnu2jLOl.js";import"./useEvent-CcBMeIPq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CaTZmifC.js";import"./useDescription-DuUNP3eU.js";import"./ListKeyboardDelegate-cqpvQpUp.js";import"./PressResponder-D-Tn8nZU.js";import"./useLocalizedStringFormatter-D7j2-V_a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Did0fznj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DBSUrbfY.js";import"./Button-BTfIzcvP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDxyTvCl.js";import"./createLucideIcon-DGHBNn-o.js";import"./x-BDgCrCJo.js";import"./Heading-Cqo1c1jI.js";import"./info-BukWwPZ4.js";import"./Popover-DLFPzgw0.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
