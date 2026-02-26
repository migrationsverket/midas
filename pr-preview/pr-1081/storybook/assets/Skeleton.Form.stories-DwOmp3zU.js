import{j as e,l}from"./iframe-Ca9PeS4b.js";import{S as t}from"./Skeleton-BeIpG3_L.js";import{T as p}from"./TextField-DQhXpUU1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-COXJs-f_.js";import"./utils-CUoV_pAF.js";import"./FieldError-3WYDLCHb.js";import"./Text-ZWT-9m7v.js";import"./useFocusRing-B56DIc1T.js";import"./index-n_MeXCZI.js";import"./index-CcFOlZnw.js";import"./Text-DlcQ59dF.js";import"./RSPContexts-ByQqD1Vo.js";import"./Form-hfyf2anb.js";import"./useFormValidation-0CkrV3-A.js";import"./Group-QBplJH8u.js";import"./Input-BD5hsiV_.js";import"./Hidden-ZKBw_h0J.js";import"./Button-DLBOkC9W.js";import"./useLabels-5MQe5wH1.js";import"./useButton-jHPk0lvT.js";import"./useTextField-Bo7lxpx9.js";import"./useControlledState-55nfPVrT.js";import"./useField-Bs-tUlaz.js";import"./TextField.module-DdivwlC8.js";import"./Label-DA-3gvj2.js";import"./Dialog-BODDtTyg.js";import"./OverlayArrow-DZRZONk7.js";import"./useResizeObserver-CzYlrVCr.js";import"./Collection-JenPJx5t.js";import"./index-DsiYp3bc.js";import"./Separator-C2kBBs6l.js";import"./SelectionManager-BxeXuy6l.js";import"./useEvent-CTqepDA6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DLnP5b2N.js";import"./useDescription-BxWKVtdh.js";import"./ListKeyboardDelegate-QYpzlqB7.js";import"./PressResponder-wYW3y2Eq.js";import"./useLocalizedStringFormatter-CRS5dirU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dh0BKkJ-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJAuUKrr.js";import"./Button-DaI6b5l3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-fmn21mIk.js";import"./createLucideIcon-CT83y0Ua.js";import"./x-BHPi5tAp.js";import"./Heading-CVqJMxwo.js";import"./info-DAaxha7q.js";import"./Popover-DALRsSIr.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
