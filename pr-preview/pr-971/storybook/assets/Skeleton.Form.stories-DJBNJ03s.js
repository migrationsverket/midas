import{j as e,l}from"./iframe-CDjUhHkf.js";import{S as t}from"./Skeleton-CagrprWQ.js";import{T as p}from"./TextField-BP8ZpuBg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CREIPpPE.js";import"./utils-BwP8WbxY.js";import"./TextField-Cuyr04p6.js";import"./FieldError-vdgRg7Vd.js";import"./Text-B18pCq7H.js";import"./useFocusRing-CKu_fLWx.js";import"./index-CtchEpDY.js";import"./index-DoNQNwAs.js";import"./Text-CdNxzd7k.js";import"./RSPContexts-DChnSr8e.js";import"./Form-Dvsz8yXN.js";import"./useFormValidation-Dko6b5Xv.js";import"./Group-CkUx_nZJ.js";import"./Input-D1ODRzOa.js";import"./Hidden-Bqtl1bJc.js";import"./Button-ZrOuQ2QI.js";import"./useLabels-ueWd9dbD.js";import"./useButton-svinwHyX.js";import"./useTextField-B_i4ec6o.js";import"./useControlledState-9B2Btxh8.js";import"./useField-BKbsuMqP.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DRfpDCcy.js";import"./Dialog-NNigcS5v.js";import"./OverlayArrow--18yXwHW.js";import"./useResizeObserver-ClU8gpiW.js";import"./Collection-0IIJjKLO.js";import"./index-BnDbTwLi.js";import"./Separator-m6xfh49t.js";import"./SelectionManager-C_peV35v.js";import"./useEvent-CbUwsR45.js";import"./scrollIntoView-DAsjrTq5.js";import"./SelectionIndicator-MpA4obSc.js";import"./useDescription-qOG3Dy7D.js";import"./ListKeyboardDelegate-yDdHtdKS.js";import"./PressResponder-BM-14wCY.js";import"./useLocalizedStringFormatter-CYjVYPGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C4SgZTQS.js";import"./VisuallyHidden-CTrzc_wT.js";import"./Button-CAbYH_sj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGCNydTJ.js";import"./createLucideIcon-DB6p7_4V.js";import"./x-Dsr3KmO-.js";import"./Heading-DtuzeRSv.js";import"./info-C2WS_2jk.js";import"./Popover-CEKtWBqA.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
