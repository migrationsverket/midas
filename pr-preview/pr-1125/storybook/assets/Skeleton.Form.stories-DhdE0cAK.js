import{j as e,l}from"./iframe-CvP1jW3H.js";import{S as t}from"./Skeleton-_YPa6IrD.js";import{T as d}from"./TextField-BSFUG7G6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-br12bHdi.js";import"./utils-JtInM6A8.js";import"./FieldError-nU5bP6xe.js";import"./Text-vBZSXrPV.js";import"./useFocusRing-CbbdQhlq.js";import"./index-DfJv0pAU.js";import"./index-yjciiip6.js";import"./Text-DvtHA-H_.js";import"./RSPContexts-y85Y3Ar7.js";import"./Form-l6bgYXBG.js";import"./Group-h3C5SIrw.js";import"./Input-DXvM12Ta.js";import"./Hidden-JUleaqc2.js";import"./Button-DxNv6VEa.js";import"./useLabels-CkliYhxT.js";import"./useButton-B7hEU-Yu.js";import"./useTextField-C0R3KJeM.js";import"./useControlledState-JSgnBBPW.js";import"./useField-BwjqvGp1.js";import"./TextField.module-DdivwlC8.js";import"./Label-RRUO7qbv.js";import"./Dialog-BBXHog38.js";import"./OverlayArrow-BKgjbxIs.js";import"./useResizeObserver-BiaSXPKT.js";import"./Collection-ChyF6Ibn.js";import"./index-C3fTgA_v.js";import"./Separator-gECTzvov.js";import"./SelectionManager-DijnHxKd.js";import"./useEvent-D_9UE99K.js";import"./scrollIntoView-DRuWzNUG.js";import"./SelectionIndicator-9xjHaAPC.js";import"./useDescription-DcTuAIR2.js";import"./ListKeyboardDelegate-CHiB5u_C.js";import"./PressResponder-CwiTa36h.js";import"./useLocalizedStringFormatter-XI0I9Ge3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bak8Kcbf.js";import"./getScrollParent-Djq9HB-Y.js";import"./VisuallyHidden-DKHlsSRZ.js";import"./x-Cq96u2iw.js";import"./createLucideIcon-CmBW2oBj.js";import"./useLocalizedStringFormatter-DZiVR27P.js";import"./Heading-Bfi4jB_Y.js";import"./Button-DsV2n0cy.js";import"./Button.module-BB7N-cLd.js";import"./info-Cnl4ig7D.js";import"./Popover-Cpo8kF2O.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
