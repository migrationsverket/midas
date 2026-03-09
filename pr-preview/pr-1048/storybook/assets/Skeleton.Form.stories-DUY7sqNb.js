import{j as e,l}from"./iframe-izS6BN6y.js";import{S as t}from"./Skeleton-CLsj8X4z.js";import{T as p}from"./TextField-CkVNp5gq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cg8CtLSY.js";import"./utils-Bas1Ofad.js";import"./FieldError-CJZEulkW.js";import"./Text-B6_RlQWu.js";import"./useFocusRing-B6uM1GPB.js";import"./index-Clqx6h6T.js";import"./index-2wZtggJW.js";import"./Text-CJepktCx.js";import"./RSPContexts-CPQUc-c6.js";import"./Form-pZC3lHBv.js";import"./useFormValidation-DUyqthVL.js";import"./Group-WgtgzSGF.js";import"./Input-CkRAApqO.js";import"./Hidden-DxoOFtw1.js";import"./Button-DjOmw-p7.js";import"./useLabels-CepOd2Z4.js";import"./useButton-nZ9At_c5.js";import"./useTextField-Bye0e0Vn.js";import"./useControlledState-ComdA_qm.js";import"./useField-BtyYT5I6.js";import"./TextField.module-DdivwlC8.js";import"./Label-DoKPYWfy.js";import"./Dialog-BaMaQg7g.js";import"./OverlayArrow-BtdwFnbw.js";import"./useResizeObserver-BXwipBXo.js";import"./Collection-BZZPf5u-.js";import"./index-D0u9tUkp.js";import"./Separator-CU3gB0Xv.js";import"./SelectionManager-BuiluRNF.js";import"./useEvent-CrtcwO7U.js";import"./scrollIntoView-geoDnyCX.js";import"./SelectionIndicator-DQamjTsW.js";import"./useDescription-9nup2ndP.js";import"./ListKeyboardDelegate-MJ3MficC.js";import"./PressResponder-B1IaQiT6.js";import"./useLocalizedStringFormatter-DFQ1l-q1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-lkKclEGH.js";import"./getScrollParent-Dt0r2HDa.js";import"./VisuallyHidden-C7bQWUTs.js";import"./Button-BJYTdbg5.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CiJzgYQ0.js";import"./createLucideIcon-lSEbjSVl.js";import"./x-CSJ_lR3e.js";import"./Heading-CURgxsXa.js";import"./info-BMOr6wXB.js";import"./Popover-Bblv0dIQ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
