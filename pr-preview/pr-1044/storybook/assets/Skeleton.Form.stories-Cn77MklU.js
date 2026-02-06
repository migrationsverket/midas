import{j as e,l}from"./iframe-LGxspPPV.js";import{S as t}from"./Skeleton-Cg2lYI_8.js";import{T as p}from"./TextField-CTFN7BpI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CQB3dQYU.js";import"./utils-Cvut-P0d.js";import"./TextField-C4nwiI-R.js";import"./FieldError-BPxM1yn6.js";import"./Text-DPh2uykP.js";import"./useFocusRing-BY43M_mY.js";import"./index-C7iNh71x.js";import"./index-C5UCf85T.js";import"./Text-BuitjwDy.js";import"./RSPContexts-q3zVRbuY.js";import"./Form-B52WwzME.js";import"./useFormValidation-sbqd_MHR.js";import"./Group-hU_dQglL.js";import"./Input-BHIaALS4.js";import"./Hidden-CyYWm6Yz.js";import"./Button-BeadT2wH.js";import"./useLabels-VT28YHfM.js";import"./useButton-CKdCQ7hH.js";import"./useTextField-Dy9QaU12.js";import"./useControlledState-BFDfEVCT.js";import"./useField-bjJPXifQ.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BXrjD5XB.js";import"./Dialog-BHB4T5Yx.js";import"./OverlayArrow-UAVAj6Ns.js";import"./useResizeObserver-dvQ7l42U.js";import"./Collection-DAcEpYBW.js";import"./index-DiMhFFci.js";import"./Separator-DNzf_jWa.js";import"./SelectionManager-TUE9aup5.js";import"./useEvent-BlC1y27u.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeBS24gl.js";import"./useDescription-CBkQwsB3.js";import"./ListKeyboardDelegate-nZy2cU_V.js";import"./PressResponder-DQCVsrgv.js";import"./useLocalizedStringFormatter-CQTFAgtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Yolzq5SG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-5rvqsSwz.js";import"./Button-ymzgBHTs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Db9FNN9a.js";import"./createLucideIcon-C9JZLtu2.js";import"./x-CGRcy9or.js";import"./Heading-CLVcntgs.js";import"./info-DPYHt4ph.js";import"./Popover-jYMBoyop.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
