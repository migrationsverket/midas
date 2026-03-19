import{j as e,l}from"./iframe-Boi322-e.js";import{S as t}from"./Skeleton-B2_VdIPr.js";import{T as d}from"./TextField-DJJTmLtf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BV7tYqbo.js";import"./utils-z1j4bIi1.js";import"./FieldError-CghXp7Fo.js";import"./Text-bXt2bHa-.js";import"./useFocusRing-CkCvH5DS.js";import"./index-Cvkkkaql.js";import"./index-s4s_PHwE.js";import"./Text-D7z3Z1mn.js";import"./RSPContexts-CQ86iZLn.js";import"./Form-Co5HaTHR.js";import"./Group-DTgLm_AU.js";import"./Input-CG9S7cb5.js";import"./Hidden-Cxs5fcIU.js";import"./Button-BZrkaF7s.js";import"./useLabels-DbPeSc60.js";import"./useButton-aRTTkymG.js";import"./useTextField-DSk9WCGP.js";import"./useControlledState-CJDuseoe.js";import"./useField-ChTCt58t.js";import"./TextField.module-DdivwlC8.js";import"./Label-k1QDnvb1.js";import"./Dialog-BKos6ltr.js";import"./OverlayArrow-BwJO3Yzs.js";import"./useResizeObserver-CY43OvIT.js";import"./Collection-C_Ee4okz.js";import"./index-hNEIOhKB.js";import"./Separator-DO0jyVTu.js";import"./SelectionManager-CeqfsY14.js";import"./useEvent-CDk6Ke-x.js";import"./scrollIntoView-xxfCmNq8.js";import"./SelectionIndicator-DbUjPPJv.js";import"./useDescription-CQ5vqFNH.js";import"./ListKeyboardDelegate-D-uh4i55.js";import"./PressResponder-D88WmAIY.js";import"./useLocalizedStringFormatter-BdYnyh_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BNH90ywo.js";import"./getScrollParent-C8E3tpWG.js";import"./VisuallyHidden-CV_gcmgX.js";import"./x-chi6RhK4.js";import"./createLucideIcon-C52beLhx.js";import"./useLocalizedStringFormatter-DQv5OY2h.js";import"./Heading-B6yBeY0W.js";import"./Button-BbOSYGn_.js";import"./Button.module-BB7N-cLd.js";import"./info-BNB2_TRS.js";import"./Popover-DyY7ZtRb.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
