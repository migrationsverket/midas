import{j as e,l}from"./iframe-BpGtKQe1.js";import{S as t}from"./Skeleton-JX4xZzCG.js";import{T as p}from"./TextField-mYrbtJSv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ZJJXTGRG.js";import"./utils-BKq0-BjK.js";import"./FieldError-CvO6Yv2r.js";import"./Text-Bsc-Zvgg.js";import"./useFocusRing-DM78EYAE.js";import"./index-WHmZXjR5.js";import"./index-A40XJ3N3.js";import"./Text-DVPUkm5u.js";import"./RSPContexts-BV3PZIKk.js";import"./Form-D_AK0U6l.js";import"./useFormValidation-DkBdVNDk.js";import"./Group-Bt5pqll3.js";import"./Input-DU_quQIL.js";import"./Hidden-C6AmhJiF.js";import"./Button-C7_RBjc4.js";import"./useLabels-Bl-mky30.js";import"./useButton-eFtWSIwf.js";import"./useTextField-B6DY9W_n.js";import"./useControlledState-MlmZVz50.js";import"./useField-CWTTVHZk.js";import"./TextField.module-DdivwlC8.js";import"./Label-ge37WYIh.js";import"./Dialog-H3PmNaus.js";import"./OverlayArrow-DUcZR89z.js";import"./useResizeObserver-CS4_wHd6.js";import"./Collection-CPXh_Pmt.js";import"./index-vDgNzL0x.js";import"./Separator-IU4CJp71.js";import"./SelectionManager-DLjlteTg.js";import"./useEvent-ITPJf9hS.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DQ6hjTXS.js";import"./useDescription-BHH3LopT.js";import"./ListKeyboardDelegate-CCvsmqiC.js";import"./PressResponder-DbkpXRfJ.js";import"./useLocalizedStringFormatter-ByTL2pAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bz82QKrP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BXvACDV4.js";import"./Button-D8xW_9uS.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTV9lzwh.js";import"./createLucideIcon-Bd7t5Cp9.js";import"./x-CUMp7a-i.js";import"./Heading-DMXzII-K.js";import"./info-C8tb7oxP.js";import"./Popover-G2PPMehg.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
