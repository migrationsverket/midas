import{j as e,l}from"./iframe-CVrVLVvE.js";import{S as t}from"./Skeleton-id3dIlQW.js";import{T as p}from"./TextField-DoVZr4mD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CbR8m_Mg.js";import"./utils-BQ4eCaf5.js";import"./FieldError-QAxLbE52.js";import"./Text-HjnVJGnN.js";import"./useFocusRing-CcC1WvlX.js";import"./index-BwMrQiTV.js";import"./index-Cf_el0h6.js";import"./Text-Btrte15F.js";import"./RSPContexts-B3Vd-HVy.js";import"./Form-Dqfz_vQQ.js";import"./useFormValidation-BP40jjcD.js";import"./Group-CHAPhtbq.js";import"./Input-_1mc2MFi.js";import"./Hidden-Dy9iPVZJ.js";import"./Button-DKh6gE9A.js";import"./useLabels-DIC4GUAu.js";import"./useButton-gbPJhBj_.js";import"./useTextField-C4H8ISw3.js";import"./useControlledState-CFHykN0p.js";import"./useField-CLV8HXdk.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bb2QV1eg.js";import"./Dialog-DrRhVE2h.js";import"./OverlayArrow-D428xvoP.js";import"./useResizeObserver-D9lsujQI.js";import"./Collection-L6CoHCYF.js";import"./index-DNUh7pym.js";import"./Separator-CuMasCt_.js";import"./SelectionManager-Plq6Rqnc.js";import"./useEvent-DbHEkQiv.js";import"./scrollIntoView-Bievv59Y.js";import"./SelectionIndicator-BO45pZrH.js";import"./useDescription-DOe2Pr8v.js";import"./ListKeyboardDelegate-CdDgpLRy.js";import"./PressResponder-DP4-k3iT.js";import"./useLocalizedStringFormatter-tPqq8kYp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D1nsEHFQ.js";import"./getScrollParent-BV3r_DJq.js";import"./VisuallyHidden-3CXgcY_E.js";import"./Button-CzwXcWRm.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CZN-mYff.js";import"./createLucideIcon-vz5WAnkp.js";import"./x-Bjcmx8lF.js";import"./Heading-CE_jETY5.js";import"./info-Foc1ii6R.js";import"./Popover-jkQQImVG.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
