import{j as e,l}from"./iframe-Bj8DUbD9.js";import{S as t}from"./Skeleton-BTE2jFtj.js";import{T as p}from"./TextField-Cd9-C3AO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-uy9_CkhF.js";import"./utils-ZO4yOhXK.js";import"./FieldError-D0YXHKSR.js";import"./Text-sbFHWdQM.js";import"./useFocusRing-JSDzquTf.js";import"./index-z9FA-6qc.js";import"./index-BheBXkbs.js";import"./Text-BT7-HsIw.js";import"./RSPContexts-DDd4UCxF.js";import"./Form-D0Ugz0bB.js";import"./useFormValidation-D4KwHiGL.js";import"./Group-VklwlUcd.js";import"./Input-C9TSnnGC.js";import"./Hidden-D5KISXrR.js";import"./Button-BF7jf_Ur.js";import"./useLabels-MzyfVlFc.js";import"./useButton-DViiPWBR.js";import"./useTextField-e-4r-eRY.js";import"./useControlledState-o6yOdn5X.js";import"./useField-ag9vEqi7.js";import"./TextField.module-DdivwlC8.js";import"./Label-BkaAnjNx.js";import"./Dialog-D8awK9VJ.js";import"./OverlayArrow-D0j7aBB6.js";import"./useResizeObserver-Bd6XHY1K.js";import"./Collection-BPF05rQA.js";import"./index-CtLrQJlI.js";import"./Separator-3daChmw5.js";import"./SelectionManager-Csm6B-vw.js";import"./useEvent-CXLssXy0.js";import"./scrollIntoView-Cyg4d7Wf.js";import"./SelectionIndicator-C0jNY1hm.js";import"./useDescription-BprtaOQi.js";import"./ListKeyboardDelegate-G0c0-2Di.js";import"./PressResponder-CW-OlPRb.js";import"./useLocalizedStringFormatter-BYlnSABI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bs64OQR9.js";import"./getScrollParent-DD_GG-02.js";import"./VisuallyHidden-CHpwvWxj.js";import"./x-Dg59dYX4.js";import"./createLucideIcon-D8pz04BM.js";import"./useLocalizedStringFormatter-DH047og8.js";import"./Heading-Dh5hcPFl.js";import"./Button-Cmlv3L41.js";import"./Button.module-BB7N-cLd.js";import"./info-Qp74svrK.js";import"./Popover-BweEmV_e.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
