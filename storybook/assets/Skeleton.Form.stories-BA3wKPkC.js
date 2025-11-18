import{j as e,l}from"./iframe-xQKE6wa6.js";import{S as t}from"./Skeleton-UjpjevQ1.js";import{T as d}from"./TextField-CUP_pSc0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DrjGA7wQ.js";import"./utils-7domtJUf.js";import"./TextField-bTZyp0BS.js";import"./FieldError-BacFZILj.js";import"./Text-D5teWlx5.js";import"./useFocusRing-1X-zoPws.js";import"./index-DKS5doAt.js";import"./index-DrDygLFm.js";import"./Text-Z6s--rdv.js";import"./RSPContexts-0gzSG6tx.js";import"./Form-YZ1IXBhk.js";import"./useFormValidation-BXZDXhHG.js";import"./Group-C3AoH5OH.js";import"./Input-CK7watvN.js";import"./Hidden-tXn6HuYt.js";import"./Button-Bt7XBPAl.js";import"./useLabels-D4MCwU7s.js";import"./useButton-DqqVSO88.js";import"./useTextField-CVfECSUB.js";import"./useControlledState-DfGN0GbI.js";import"./useField-CSryOIk-.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CMlm0lHf.js";import"./Dialog-JowpRfGg.js";import"./OverlayArrow-BcLaYu3m.js";import"./useResizeObserver-lsYSgK1G.js";import"./Collection-Bo6tqv8G.js";import"./index-CUADajFF.js";import"./Separator-DcHgpmrt.js";import"./SelectionManager-C5npriIT.js";import"./useEvent-7P8ycwW7.js";import"./scrollIntoView-DBfFv-dr.js";import"./SelectionIndicator-B0Oeqg_a.js";import"./useDescription-BX41Wstb.js";import"./ListKeyboardDelegate-Cw-Ma3A8.js";import"./PressResponder-B_Jc9owX.js";import"./useLocalizedStringFormatter-B7SsWOnS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cju36vrW.js";import"./VisuallyHidden-CWmr-2Og.js";import"./Button-V66Mfsaz.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C_k1kBfl.js";import"./createLucideIcon-CCTWRIL7.js";import"./x-BPGViDSS.js";import"./Heading-CIDLnbCA.js";import"./info-BX1m6oO3.js";import"./Popover-IRDRYpbr.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
