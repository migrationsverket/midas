import{j as e,l}from"./iframe-C4RBV6GX.js";import{S as t}from"./Skeleton-CSWRmbxO.js";import{T as d}from"./TextField-C7c3ZPsQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Drdp9s4f.js";import"./utils-BM88gxdX.js";import"./TextField-DiEyGPZ3.js";import"./FieldError-ChRM9hBQ.js";import"./Text-C8QGPdDY.js";import"./useFocusRing-Pgaw3Tz8.js";import"./index-jywy1dsl.js";import"./index-ChQorhKd.js";import"./Text-CbFJ3jze.js";import"./RSPContexts-owpiQDgK.js";import"./Form-Cgzl3mlM.js";import"./useFormValidation-B1xC7qTC.js";import"./Group-5xz5KMxj.js";import"./Input-DDaYlAg0.js";import"./Hidden-J-idEOIL.js";import"./Button-B_dAQwQ7.js";import"./useLabels-DAt0_SEo.js";import"./useButton-CORpOC_p.js";import"./useTextField-DrN6gpha.js";import"./useControlledState-DnbLjGs7.js";import"./useField-mBcm3pN2.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-XWaumv1c.js";import"./Dialog-DR__BGlz.js";import"./OverlayArrow-CYNDcDIQ.js";import"./useResizeObserver-DZVHAzZo.js";import"./Collection-fa4tbiqn.js";import"./index-CjZHxCWE.js";import"./Separator-C8vgocmg.js";import"./SelectionManager-Cs_6do9z.js";import"./useEvent-tTghAMBH.js";import"./scrollIntoView-MVruq_nP.js";import"./SelectionIndicator-B5a_Hs_S.js";import"./useDescription-NLjHVWnU.js";import"./ListKeyboardDelegate-hznWjKXP.js";import"./PressResponder-W-BZk_UE.js";import"./useLocalizedStringFormatter-CkJZKvBs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Kj6L2nZg.js";import"./VisuallyHidden-C_g1YpNq.js";import"./Button-5X29Z93h.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C2kDDKER.js";import"./createLucideIcon-BJxYqGO_.js";import"./x-Ce-e2aw1.js";import"./Heading-B2TH1H8T.js";import"./info-BWElL6d1.js";import"./Popover-BYwf7w3j.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
