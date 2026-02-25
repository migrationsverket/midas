import{j as e,l}from"./iframe-H2fTZ2nq.js";import{S as t}from"./Skeleton-BvYeIwA4.js";import{T as p}from"./TextField-IRJLyZeB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-lfrQuf4W.js";import"./utils-DW5ctycD.js";import"./FieldError-Ze_QYnbw.js";import"./Text-DSNt7iu3.js";import"./useFocusRing-rY5-5oYI.js";import"./index-CIV3byj9.js";import"./index-CSi78BJY.js";import"./Text-K2RkR5q1.js";import"./RSPContexts-ClKYWlVb.js";import"./Form-qTx3d32I.js";import"./useFormValidation-DMoO2kJv.js";import"./Group-CtGktpK3.js";import"./Input-CLucHG0H.js";import"./Hidden-4IKYQ2HC.js";import"./Button-Thvc77gT.js";import"./useLabels-CTAJFpqt.js";import"./useButton-Ch9WkEmD.js";import"./useTextField-Dk4GdbuG.js";import"./useControlledState-CgUQbm6f.js";import"./useField-BMix6HQr.js";import"./TextField.module-DdivwlC8.js";import"./Label-CbRoQGmp.js";import"./Dialog-DdqkwI6r.js";import"./OverlayArrow-BucVBZTx.js";import"./useResizeObserver-Bt5MB7DE.js";import"./Collection-C4vNG5Az.js";import"./index-pKIxTJCR.js";import"./Separator-CkZAe3ix.js";import"./SelectionManager-DdmeT842.js";import"./useEvent-DAH9VV2g.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DuYULepk.js";import"./useDescription-7i5dhWK0.js";import"./ListKeyboardDelegate-BlvDSIj7.js";import"./PressResponder-B-JzOOvD.js";import"./useLocalizedStringFormatter-CY6ZTepc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2Oo5AWv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-h3OxpH0T.js";import"./Button-wmHwb-lN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CfxXtKTH.js";import"./createLucideIcon-DiZz3DHh.js";import"./x-S0-Uc0vp.js";import"./Heading-BTRJR4jH.js";import"./info-CDHs4xnK.js";import"./Popover-ByRR-p8y.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
