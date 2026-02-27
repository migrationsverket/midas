import{j as e,l}from"./iframe-C0YgPd_X.js";import{S as t}from"./Skeleton-DFBygcy6.js";import{T as p}from"./TextField-Daa8kWvS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C3RTTlaz.js";import"./utils-Ci8FU_mO.js";import"./FieldError-DPY80cAa.js";import"./Text-DmZIPz6e.js";import"./useFocusRing-d4xeVmwI.js";import"./index-DR6-hAa4.js";import"./index-B1yuzVKX.js";import"./Text-CQgzeM0c.js";import"./RSPContexts-DAjBn9Ce.js";import"./Form-C-7U6XPP.js";import"./useFormValidation-DngJ6Ojw.js";import"./Group-D0hKEJZS.js";import"./Input-DRVq7Hlg.js";import"./Hidden-B7mLw12T.js";import"./Button-XxkWRrW-.js";import"./useLabels-CDHVT8zI.js";import"./useButton-1PkuGq_I.js";import"./useTextField-yfWoYPMd.js";import"./useControlledState-CoSP0aK4.js";import"./useField-CSv43KA5.js";import"./TextField.module-DdivwlC8.js";import"./Label-QRyx3zht.js";import"./Dialog-B2b-OQJC.js";import"./OverlayArrow-IQiF0BdV.js";import"./useResizeObserver-DoFGN10k.js";import"./Collection-Cej5becY.js";import"./index-BLSEeT3a.js";import"./Separator-LwETkJCd.js";import"./SelectionManager-DJK8Q2Ua.js";import"./useEvent-Cmu4Aec-.js";import"./scrollIntoView-DpW98Jv0.js";import"./SelectionIndicator-zMODC9aG.js";import"./useDescription-Ce3Mvgly.js";import"./ListKeyboardDelegate-CB2lvDQ8.js";import"./PressResponder-CWTQ_Gog.js";import"./useLocalizedStringFormatter-DXSG4DWf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNO_MlrR.js";import"./getScrollParent-B8LViZWg.js";import"./VisuallyHidden-DgXH2cKS.js";import"./Button-CRNHL0rZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-eCcOY5R3.js";import"./createLucideIcon-Btasiudw.js";import"./x-Ckyv5PDt.js";import"./Heading-2FeCFYvq.js";import"./info-JLnIJXTg.js";import"./Popover-ohgkohuS.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
