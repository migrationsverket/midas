import{j as e,l}from"./iframe-L3ZiwQam.js";import{S as t}from"./Skeleton-DheU92w5.js";import{T as d}from"./TextField-BTN8RfST.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-XJHPJdgt.js";import"./utils-8_0C2edU.js";import"./TextField-Bqg9Y47_.js";import"./FieldError-BqSjwlEK.js";import"./Text-VmXli42R.js";import"./useFocusRing-xkAUyvIA.js";import"./index-CTyHgkao.js";import"./index-C7aC8kzM.js";import"./Text-DEU87KDU.js";import"./RSPContexts-Dirc5gTa.js";import"./Form-C9EcRY5w.js";import"./useFormValidation-DDOsi_wH.js";import"./Group-6HcCCMws.js";import"./Input-DuW3hWMU.js";import"./Hidden-p2g1pf0R.js";import"./Button-BdnTjb0J.js";import"./useLabels-BPwrjTKQ.js";import"./useButton-kd668K9b.js";import"./useTextField-DWm5VZoC.js";import"./useControlledState-Dpt5Xs4z.js";import"./useField-7Cb9kWpW.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Bif5xaDN.js";import"./Dialog-CpbMgZim.js";import"./OverlayArrow-k6pfxubS.js";import"./useResizeObserver-CS3iHKqK.js";import"./Collection-Bp7mpPOK.js";import"./index-BvUrGcBd.js";import"./Separator-BrTWXljZ.js";import"./SelectionManager-DGETsi7e.js";import"./useEvent-Dw1NpWTu.js";import"./scrollIntoView-CsuURo36.js";import"./SelectionIndicator-D0ESiHsz.js";import"./useDescription-D_158S4T.js";import"./ListKeyboardDelegate-UV3scr6I.js";import"./PressResponder-Ct9hO6zv.js";import"./useLocalizedStringFormatter-CAQOHLqK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DlD0-RJx.js";import"./VisuallyHidden-D6HuS3bN.js";import"./Button-DGRhcKVW.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-SIx4tihu.js";import"./createLucideIcon-BAFEPMu5.js";import"./x-BmA9jPar.js";import"./Heading-BYh2sWiY.js";import"./info-t29klxPo.js";import"./Popover-CsH00Z4r.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
