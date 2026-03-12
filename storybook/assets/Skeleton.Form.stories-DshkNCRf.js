import{j as e,l}from"./iframe-D3WYY-Ai.js";import{S as t}from"./Skeleton-DVjkHjHO.js";import{T as p}from"./TextField-CkT2hpyR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CqNop33H.js";import"./utils-o1ARpK5H.js";import"./FieldError-C9wlfJJH.js";import"./Text-BhwLGGZ9.js";import"./useFocusRing-BMUWt-Rd.js";import"./index-BB82YbIc.js";import"./index-CjRvgmYY.js";import"./Text-C1vqtxX1.js";import"./RSPContexts-eW0iJSmp.js";import"./Form-neu3gbFu.js";import"./useFormValidation-Ba7VXFWU.js";import"./Group-BT1hXzNj.js";import"./Input-BKUaZMYs.js";import"./Hidden-DKj3_QtK.js";import"./Button-tr2fIea8.js";import"./useLabels-_oHB6RBX.js";import"./useButton-CjQiPJKb.js";import"./useTextField-B62mJzTd.js";import"./useControlledState-Bp5n3e-O.js";import"./useField-ChV84leN.js";import"./TextField.module-DdivwlC8.js";import"./Label-D2xNJqpc.js";import"./Dialog-7H1E9xmo.js";import"./OverlayArrow-LWYC0_6j.js";import"./useResizeObserver-DZQ_wUk4.js";import"./Collection-DTEIflro.js";import"./index-CAYDZGB0.js";import"./Separator-CFrto0e0.js";import"./SelectionManager-DC6SlSh9.js";import"./useEvent--3HdY_tz.js";import"./scrollIntoView-DlV6Y38B.js";import"./SelectionIndicator-UMZFYIdR.js";import"./useDescription-B3ZOGkyf.js";import"./ListKeyboardDelegate-ZfyFr06B.js";import"./PressResponder-B_AkJod5.js";import"./useLocalizedStringFormatter-Dtt9NC--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-XAd5bzCC.js";import"./getScrollParent-CKtVlEpI.js";import"./VisuallyHidden-kDFIOMHt.js";import"./x-BPH0GLJj.js";import"./createLucideIcon-B7GA4VP9.js";import"./useLocalizedStringFormatter-m_o1fVtk.js";import"./Heading-BI9iHQaF.js";import"./Button-DNgVoL5M.js";import"./Button.module-D_C6WeTN.js";import"./info-BISYrNwJ.js";import"./Popover-B7iVHBim.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
