import{j as e,l}from"./iframe-DfJuQE8m.js";import{S as t}from"./Skeleton-BDv9FStf.js";import{T as d}from"./TextField-XGphLV8s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CLOEZ_hR.js";import"./utils-DhOIe8g4.js";import"./TextField-Qd8G9O4C.js";import"./FieldError-C1ud7pvY.js";import"./Text-BE6FOv1W.js";import"./useFocusRing-DEOWgYwB.js";import"./index-CQALj8IV.js";import"./index-BkqquRj0.js";import"./Text-C0meLp2u.js";import"./RSPContexts-Bl-t2YWe.js";import"./Form-CIJEaiBn.js";import"./useFormValidation-jGn96_h-.js";import"./Group-B6y2FFgb.js";import"./Input-B97IhnQ-.js";import"./Hidden-L0FDO2bN.js";import"./Button-C1h3qiWM.js";import"./useLabels-ukq135hJ.js";import"./useButton-D5urjP3V.js";import"./useTextField-Rr4wsSyH.js";import"./useControlledState-eRrBZcf1.js";import"./useField-BJyW5WxN.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-nnQpJCiu.js";import"./Dialog-CZsdvfkm.js";import"./OverlayArrow-Bov2DMmm.js";import"./useResizeObserver-BSNTYhDh.js";import"./Collection-zRDc75Sn.js";import"./index-CFUygh5x.js";import"./Separator-a1OeMPZ9.js";import"./SelectionManager-381fJsVV.js";import"./useEvent-sIyE_x4m.js";import"./scrollIntoView-BOxlOCOK.js";import"./SelectionIndicator-BMh5Wja0.js";import"./useDescription-Cvwf_bWB.js";import"./ListKeyboardDelegate-DxvgtmVa.js";import"./PressResponder-BJHsACuL.js";import"./useLocalizedStringFormatter-DiGWatbI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-irao4iUV.js";import"./VisuallyHidden-Cs6c7lY9.js";import"./Button-DUMkSbLt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAe3Ejvu.js";import"./createLucideIcon-Bek8kOw5.js";import"./x-CHMzvCCf.js";import"./Heading-BJwMHQcl.js";import"./info-D5FDZ8xJ.js";import"./Popover-LFcU3rXq.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
