import{j as e,l}from"./iframe-Bwfgw8pk.js";import{S as t}from"./Skeleton-CHFTOkcH.js";import{T as p}from"./TextField-BbfyH_F_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-M0p-BrU_.js";import"./utils-BYZTfypc.js";import"./FieldError-rZWlknNl.js";import"./Text-CHrquvV0.js";import"./useFocusRing-cRFXK4sJ.js";import"./index-D1I53Bzg.js";import"./index-VSa-88v0.js";import"./Text-COMr0RdB.js";import"./RSPContexts-DoSu8nwv.js";import"./Form-B-uJv9__.js";import"./useFormValidation-Szp1BRKK.js";import"./Group-DBi18YdO.js";import"./Input-Cr2J6GAR.js";import"./Hidden-C55orz_R.js";import"./Button-BsV8k1dg.js";import"./useLabels-BW9zsbr2.js";import"./useButton-CETvSTMc.js";import"./useTextField-DzJC1fGe.js";import"./useControlledState-iPtiFsr4.js";import"./useField-DeuwejZf.js";import"./TextField.module-DdivwlC8.js";import"./Label-DLQcVOKH.js";import"./Dialog-C7W01rMn.js";import"./OverlayArrow-Dr8c5DE9.js";import"./useResizeObserver-BQc1W3Sq.js";import"./Collection-Did71HL7.js";import"./index-CWidqN52.js";import"./Separator-F19jK_-2.js";import"./SelectionManager-BneQkNS9.js";import"./useEvent-DV0ae6Un.js";import"./scrollIntoView-DORWTWY7.js";import"./SelectionIndicator-CbPDFvK6.js";import"./useDescription-DGPUAMqe.js";import"./ListKeyboardDelegate-DWcO9r8m.js";import"./PressResponder-C84U-Gpu.js";import"./useLocalizedStringFormatter-CQ1hUGUd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCIo6s83.js";import"./getScrollParent-BLupYbMm.js";import"./VisuallyHidden-B9CGtyyD.js";import"./x-CMFzoPcG.js";import"./createLucideIcon-BSOfHJOH.js";import"./useLocalizedStringFormatter-Du3bV9_E.js";import"./Heading-CvI5Q4DY.js";import"./Button-Cc79re0B.js";import"./Button.module-BB7N-cLd.js";import"./info-97EeHFTy.js";import"./Popover-DF332a0H.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
