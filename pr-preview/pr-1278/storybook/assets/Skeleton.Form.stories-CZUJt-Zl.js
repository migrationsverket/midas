import{j as e,l}from"./iframe-DcBIsMXx.js";import{S as t}from"./Skeleton-BAEpNT74.js";import{T as p}from"./TextField-aRhFSh5f.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-XTvXPrCt.js";import"./utils-5byDKFfB.js";import"./FieldError-CA3FiWjt.js";import"./Text-DAtPV-yE.js";import"./useFocusRing-D5tG7NYb.js";import"./index-Ddy-ld7t.js";import"./index-lIHyJaf-.js";import"./Text-C7WBWqxX.js";import"./RSPContexts-CEHus4Pd.js";import"./Form-BrIhRNhF.js";import"./Group-BKaapwgt.js";import"./Input-DybDWXr1.js";import"./Hidden-DR2geLuk.js";import"./Button-C4Q8xd0B.js";import"./useLabel-Cl4TFLpj.js";import"./useLabels-x1_Sa4GJ.js";import"./useButton-CpEr-C_f.js";import"./useTextField-BeWQ-UA7.js";import"./useControlledState-e6Gq9Qx5.js";import"./useField-wfnZ9XHu.js";import"./TextField.module-DdivwlC8.js";import"./Label-8F5laRcz.js";import"./Dialog-U0sJFBJY.js";import"./OverlayArrow-BjjS8u_j.js";import"./useResizeObserver-CLOgJ_Vs.js";import"./Collection-D-yzekC7.js";import"./index-BJat-jgU.js";import"./Separator-Cy5KeEv1.js";import"./SelectionManager-D5cCPk2g.js";import"./useEvent-B_qpFesj.js";import"./scrollIntoView-DRKUy1YW.js";import"./SelectionIndicator-DwdD_WnM.js";import"./useDescription-C0VBBDaG.js";import"./ListKeyboardDelegate-Ayo5OROx.js";import"./PressResponder-BKlohJgd.js";import"./useLocalizedStringFormatter-BLQND9we.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Co00YhfZ.js";import"./getScrollParent-DezxaSLv.js";import"./VisuallyHidden-ILsWu368.js";import"./ModalOverlay-CYi-pCzY.js";import"./x-B6Pe-CX-.js";import"./createLucideIcon-D8sotqZ_.js";import"./useLocalizedStringFormatter-RHrCy6F9.js";import"./Heading-DfCChiXd.js";import"./Button-CFaNyWK_.js";import"./Button.module-BB7N-cLd.js";import"./info-DaSkaaYC.js";import"./Popover-B6edw5GI.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
