import{j as e,l}from"./iframe-DRLQwCNB.js";import{S as t}from"./Skeleton-y6B2xXf6.js";import{T as p}from"./TextField-DD0vIrPU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C4lS9lfx.js";import"./utils-DwlK8lYm.js";import"./FieldError-BkNvp2E6.js";import"./Text-DnHWSscL.js";import"./useFocusRing-lDwfAEVQ.js";import"./index-DH8oBJLm.js";import"./index-BHtNZ3Yk.js";import"./Text-ynU63HEc.js";import"./RSPContexts-TCreybeK.js";import"./Form-ClBOUQaz.js";import"./Group-Op5syUbV.js";import"./Input-CNrY3Htp.js";import"./Hidden-DAi6qXjx.js";import"./Button-B3A8qvAG.js";import"./useLabel-I8iavOjU.js";import"./useLabels-Bv060iu2.js";import"./useButton-BsM8VkEl.js";import"./useTextField-DC19tpsy.js";import"./useControlledState-dveh82K_.js";import"./useField-UQvoHlDM.js";import"./TextField.module-DdivwlC8.js";import"./Label-CtArJP3P.js";import"./Dialog-VTPdiSOi.js";import"./OverlayArrow-CWi5Ps9v.js";import"./useResizeObserver-CyhVbXlj.js";import"./Collection-BbtlcoHs.js";import"./index-Dt_XgYRE.js";import"./Separator-DcnV_yIP.js";import"./SelectionManager-NM3qzexE.js";import"./useEvent-BycsI7SI.js";import"./scrollIntoView-CwirR4Mk.js";import"./SelectionIndicator-CFTkKB0D.js";import"./useDescription-B6f-6xTN.js";import"./ListKeyboardDelegate-B-shSdMA.js";import"./PressResponder-Bil5uI85.js";import"./useLocalizedStringFormatter-BxPern0h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B4F5zzmy.js";import"./getScrollParent-Dj7PaAHW.js";import"./VisuallyHidden-D-pnepPQ.js";import"./x-DIunwg3h.js";import"./createLucideIcon-BcFDGO1n.js";import"./useLocalizedStringFormatter-DUEXk9yR.js";import"./Heading-BoZ3tvwQ.js";import"./Button-BfaOHdzG.js";import"./Button.module-BB7N-cLd.js";import"./info-CnnHMImr.js";import"./Popover-BiIwg91L.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
