import{j as e,l}from"./iframe-6hgGCLw8.js";import{S as t}from"./Skeleton-RcD73FuQ.js";import{T as p}from"./TextField-6KXyAiPi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-eVCVmtGE.js";import"./utils-CX_zB5aR.js";import"./FieldError-i2DV-PmA.js";import"./Text-iSCx5bjD.js";import"./useFocusRing-Cuwdf14T.js";import"./index-0RlmGZ9W.js";import"./index-I7rnJuI0.js";import"./Text-CFTnJ3zF.js";import"./RSPContexts-Bcn_vAUn.js";import"./Form-DVYOmAio.js";import"./useFormValidation-D27bsKed.js";import"./Group-CIn6JHUD.js";import"./Input-Bxuz4mgW.js";import"./Hidden-z4IjskhB.js";import"./Button-Brt9OyKK.js";import"./useLabels-CgnqeCaq.js";import"./useButton-DGyELYzD.js";import"./useTextField-BZxv6GTb.js";import"./useControlledState-yzEE9xtq.js";import"./useField-DGwoxVi1.js";import"./TextField.module-DdivwlC8.js";import"./Label-DjDWcUVK.js";import"./Dialog-kpa7IVkr.js";import"./OverlayArrow-CUpIA52P.js";import"./useResizeObserver-pBs7fgAl.js";import"./Collection-BPb9_hiS.js";import"./index-Cu6VjWUj.js";import"./Separator-50bt915P.js";import"./SelectionManager-DzswR_cU.js";import"./useEvent-BJk0ykSO.js";import"./scrollIntoView-Ckk0jegU.js";import"./SelectionIndicator-Csfh2Tbk.js";import"./useDescription-ltz1Kv2E.js";import"./ListKeyboardDelegate-XGMUHETx.js";import"./PressResponder-C9-_L3qb.js";import"./useLocalizedStringFormatter-DMNGX3Z_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BucskLti.js";import"./getScrollParent-B0JbJ1bW.js";import"./VisuallyHidden-CWb-I5WH.js";import"./Button-C-MJs-8h.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-mYRlTdsp.js";import"./createLucideIcon-CMqrOtBY.js";import"./x-DgeoVxQW.js";import"./Heading-Cnm7AISj.js";import"./info-COThjvjL.js";import"./Popover-DhlGCU0D.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
