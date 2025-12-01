import{j as e,l}from"./iframe-DDGhSUPH.js";import{S as t}from"./Skeleton-C9nIYbGA.js";import{T as d}from"./TextField-D1KkwO0F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CsUXqpgd.js";import"./utils-DkSk5Fpi.js";import"./TextField-DLW9Am9p.js";import"./FieldError-B2snDo_I.js";import"./Text-BJg9Wjq2.js";import"./useFocusRing-Cp9EtA1A.js";import"./index-BxxJ1gtc.js";import"./index-LwRNPsNd.js";import"./Text-BWNYfE2D.js";import"./RSPContexts-FtlrlkMu.js";import"./Form-B9IEcsSr.js";import"./useFormValidation-CaDXXURK.js";import"./Group-Dg6Z6XKh.js";import"./Input-DBlwM_VG.js";import"./Hidden-CVyjnzAi.js";import"./Button-DoGvud4r.js";import"./useLabels-rropAply.js";import"./useButton-BDswbpVc.js";import"./useTextField-D2bFFZST.js";import"./useControlledState-DUR86Gn9.js";import"./useField-BDo5h1AO.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CRQCXL-o.js";import"./Dialog-BhZp17LH.js";import"./OverlayArrow-Bvxjbbqo.js";import"./useResizeObserver-DRd9bCYq.js";import"./Collection-CIBeIq1W.js";import"./index-GMEkWNu-.js";import"./Separator-DZkffLye.js";import"./SelectionManager-BgF8caGQ.js";import"./useEvent-shFS8DT5.js";import"./scrollIntoView-cvGLPaS2.js";import"./SelectionIndicator-8ByGf7t5.js";import"./useDescription-DEKDhtSX.js";import"./ListKeyboardDelegate-CBJWcIUN.js";import"./PressResponder-C7DDSvFC.js";import"./useLocalizedStringFormatter-DCfAOUk8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BMuJYkOi.js";import"./VisuallyHidden-44FJARoa.js";import"./Button-CXmfUOo7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BChb16bJ.js";import"./createLucideIcon-KTBaycPF.js";import"./x-5VQdn16L.js";import"./Heading-Cq1LxtAA.js";import"./info-C8eGkilz.js";import"./Popover-BHFYxrAR.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
