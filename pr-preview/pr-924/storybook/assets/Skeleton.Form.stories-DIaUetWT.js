import{j as e,l}from"./iframe-CUHTTXY9.js";import{S as t}from"./Skeleton-Dwyl9V1D.js";import{T as d}from"./TextField-BHwaRkOl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-QdcLs6nH.js";import"./utils-Dcvemnmi.js";import"./FieldError-DhrB2_qe.js";import"./Text-D835pmOj.js";import"./useFocusRing-DjsRWKNx.js";import"./index-CAqaGyj3.js";import"./index-4Ydb_h1E.js";import"./Text-Bxb0XJzo.js";import"./RSPContexts-AZZ75FD2.js";import"./Form-CRJFAWD6.js";import"./useFormValidation-1u9KplN9.js";import"./Group-B2HwvEXU.js";import"./Input-BAdH5k_v.js";import"./Hidden-D4n6kN_K.js";import"./Button-CTW6va-d.js";import"./useLabels-BI5qQt6r.js";import"./useButton-BfZu2Gs4.js";import"./useTextField-DKFwGsCx.js";import"./useControlledState-Dsr3uqIL.js";import"./useField-D95uEWDm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-tougiJwH.js";import"./Dialog-DkgCJQSt.js";import"./OverlayArrow-Cpc0h32s.js";import"./useResizeObserver-BShnbDig.js";import"./Collection-BPNeuvlU.js";import"./index-CbxZ2bGO.js";import"./Separator-BkH_9Uti.js";import"./SelectionManager-_hhoXmEe.js";import"./useEvent-M16ECpV-.js";import"./scrollIntoView-1WMQlWAp.js";import"./SelectionIndicator-CoyJ6FxV.js";import"./useDescription-BM1Fm2SQ.js";import"./ListKeyboardDelegate-ComYmjGR.js";import"./PressResponder-T0OSPyo_.js";import"./useLocalizedStringFormatter-CrK0txrp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dau4AleY.js";import"./VisuallyHidden-B5Z1t7Bp.js";import"./useLocalizedStringFormatter-Dc6_OVdg.js";import"./Button-BpmtbzrD.js";import"./Button.module-CtQ1deO8.js";import"./x-Dph03mwd.js";import"./createLucideIcon-BTFShZrE.js";import"./Heading-CrKTex-4.js";import"./info-Bel7BPXx.js";import"./Popover-CDe_pLS-.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
