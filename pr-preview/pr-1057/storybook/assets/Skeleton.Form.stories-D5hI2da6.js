import{j as e,l}from"./iframe-JdJ-OJm1.js";import{S as t}from"./Skeleton-DUFbAyAE.js";import{T as p}from"./TextField-B4XwukZ-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D1RD9-iD.js";import"./utils-96Qmq1tf.js";import"./TextField-Coqb0JqV.js";import"./FieldError-BnFcX8Xu.js";import"./Text-DIR17Pu1.js";import"./useFocusRing-DO3ZBB6k.js";import"./index-BNPS8vul.js";import"./index-DPgChp4i.js";import"./Text-JWOQbzzd.js";import"./RSPContexts-FHwAvAup.js";import"./Form-yrI-dzfw.js";import"./useFormValidation-BOj7Bfra.js";import"./Group-rPPYO04K.js";import"./Input-CF7HKYg-.js";import"./Hidden-DKn4TiUA.js";import"./Button-DZGa_zA9.js";import"./useLabels-TKpnNBwe.js";import"./useButton-CFkNx72h.js";import"./useTextField-DVgm_0_v.js";import"./useControlledState-D8NqpIqI.js";import"./useField-DgnJ1pPy.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CXR60Qin.js";import"./Dialog-CvVjvxX0.js";import"./OverlayArrow-CLxF1Nrn.js";import"./useResizeObserver-B-MYGkyy.js";import"./Collection-C9if6wGk.js";import"./index-D4irGP9Q.js";import"./Separator-CoL6nCE9.js";import"./SelectionManager-Df6LefBc.js";import"./useEvent-LxIxBIYw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BVMdCOZy.js";import"./useDescription-CQRfVWLt.js";import"./ListKeyboardDelegate-BLVLGwaI.js";import"./PressResponder-WAEWb9JB.js";import"./useLocalizedStringFormatter-1JARTe_X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C_zL_4CQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dgod2K5q.js";import"./Button-DhPOwdCl.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C8P-aJlJ.js";import"./createLucideIcon-oTUJ9cxW.js";import"./x-DLZInyov.js";import"./Heading-C_TZWBlV.js";import"./info-iKV4g4LT.js";import"./Popover-f5XJ8qYg.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
