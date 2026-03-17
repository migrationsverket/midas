import{j as e,l}from"./iframe-BLfzYH9C.js";import{S as t}from"./Skeleton-1ONHIeNv.js";import{T as p}from"./TextField-Bbfq0toQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-1Bw7CC3z.js";import"./utils-D0dfH4vr.js";import"./FieldError-BSEuC_KV.js";import"./Text-Cc2e18q6.js";import"./useFocusRing-F01J-ZUp.js";import"./index-BEL0ZsXZ.js";import"./index-DhCXTl7z.js";import"./Text-56NGX4CE.js";import"./RSPContexts-BNbJSQvo.js";import"./Form-cxB3ur0K.js";import"./useFormValidation-YSQ6LHA7.js";import"./Group-CZ7bViit.js";import"./Input-C8TK0AgI.js";import"./Hidden-N269CFB0.js";import"./Button-CMX4o17j.js";import"./useLabels-Wx4YnUYv.js";import"./useButton-Bx_5EIaY.js";import"./useTextField-CE_JM4y7.js";import"./useControlledState-BRpuf71A.js";import"./useField-DKtJjQd8.js";import"./TextField.module-DdivwlC8.js";import"./Label-CRlv_YQO.js";import"./Dialog-K2Yv4GS0.js";import"./OverlayArrow-BP2ncnR4.js";import"./useResizeObserver-CDZGr-1Y.js";import"./Collection-DFEsajZM.js";import"./index-DtV-80Z9.js";import"./Separator-DO8MgAw5.js";import"./SelectionManager-qSVT5I_Q.js";import"./useEvent-xhNamUK9.js";import"./scrollIntoView-B8nL968g.js";import"./SelectionIndicator-BfekULxp.js";import"./useDescription-Dwgsbzew.js";import"./ListKeyboardDelegate-CaluARbj.js";import"./PressResponder-CBpc36_T.js";import"./useLocalizedStringFormatter-Cc04N7q5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUuqGRqk.js";import"./getScrollParent-pMGfvvbY.js";import"./VisuallyHidden-_5qjtK7j.js";import"./x-C-j_grLj.js";import"./createLucideIcon-CD_jUR-R.js";import"./useLocalizedStringFormatter-mYyUkQYg.js";import"./Heading-tqTcM_ey.js";import"./Button-sSCuqLNu.js";import"./Button.module-BB7N-cLd.js";import"./info-DRpzurts.js";import"./Popover-DElGLT-y.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
