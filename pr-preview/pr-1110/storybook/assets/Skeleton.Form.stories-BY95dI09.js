import{j as e,l}from"./iframe-T-9iVXG3.js";import{S as t}from"./Skeleton-d4V9TY_f.js";import{T as p}from"./TextField-Cuz_LBZf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CVuBoXvR.js";import"./utils-B3genDNz.js";import"./FieldError-B3mWOyJN.js";import"./Text-B_uJS0BB.js";import"./useFocusRing-BDfuXA1K.js";import"./index-B-KcomW3.js";import"./index-DLcbmtBd.js";import"./Text-DqB5EYwf.js";import"./RSPContexts-BPLMbvFf.js";import"./Form-DQl3-hlb.js";import"./useFormValidation-Dv3Ujp-e.js";import"./Group-DCwbAAVd.js";import"./Input-BCzFslNV.js";import"./Hidden-gSpfVWl-.js";import"./Button-C-dW1ric.js";import"./useLabels-CRqI88gG.js";import"./useButton-D49MhIWL.js";import"./useTextField-MoqdZUk0.js";import"./useControlledState-BoI1WaNw.js";import"./useField-CtRZfu8w.js";import"./TextField.module-DdivwlC8.js";import"./Label-C3q5OkxP.js";import"./Dialog-CVucMybP.js";import"./OverlayArrow-DctUXpS3.js";import"./useResizeObserver-D_SfmWZp.js";import"./Collection-MsEGC5KJ.js";import"./index-18etiPbY.js";import"./Separator-3WMd_667.js";import"./SelectionManager-CA4lF0s6.js";import"./useEvent-D56kyFzf.js";import"./scrollIntoView-iro7z2eq.js";import"./SelectionIndicator-mJeJ2J_z.js";import"./useDescription-DqYEfudQ.js";import"./ListKeyboardDelegate-DHb2U1Ph.js";import"./PressResponder-Dhq0PlGY.js";import"./useLocalizedStringFormatter-xdS-2W0d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df9qqeiA.js";import"./getScrollParent-CRP0whSm.js";import"./VisuallyHidden-CO4c4_3Y.js";import"./x-Cs-J8gEx.js";import"./createLucideIcon-qLu_u4fs.js";import"./useLocalizedStringFormatter-WowMA0AY.js";import"./Heading-ChYvpQts.js";import"./Button-LHNpYI0v.js";import"./Button.module-BB7N-cLd.js";import"./info-BF2lLuAC.js";import"./Popover-Csz6eImH.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
