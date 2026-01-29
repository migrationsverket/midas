import{j as e,l}from"./iframe-DsUbAoSq.js";import{S as t}from"./Skeleton-CPdk19lz.js";import{T as p}from"./TextField-CPDacf5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Apy9leHO.js";import"./utils-CItAFvY_.js";import"./TextField-D0HmvqnY.js";import"./FieldError-ekmgTayW.js";import"./Text-Bd-2tMqu.js";import"./useFocusRing-ClDYXhda.js";import"./index-ZLozb24P.js";import"./index-BR563_q3.js";import"./Text-zFFTMSPY.js";import"./RSPContexts-GvaUrLm8.js";import"./Form-BfBWKEHX.js";import"./useFormValidation-CLj26moS.js";import"./Group-DHAwZv9l.js";import"./Input-B-VLloMm.js";import"./Hidden-B6jIkc3U.js";import"./Button-D9RawpLu.js";import"./useLabels-CUikAVDR.js";import"./useButton-ota4yok-.js";import"./useTextField-DxaA-EvC.js";import"./useControlledState-DI4_-MQt.js";import"./useField-B-KRuKWC.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CZrRAjsT.js";import"./Dialog-HmLVov3g.js";import"./OverlayArrow-CMGgcRPr.js";import"./useResizeObserver-CBF1A0dl.js";import"./Collection-C9tiANbY.js";import"./index-C-JsD-TI.js";import"./Separator-DyqAvtne.js";import"./SelectionManager-Pml6f90q.js";import"./useEvent-CgdlAV5M.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CV-tS1Al.js";import"./useDescription-DayPqPx3.js";import"./ListKeyboardDelegate-Bh2C9Qia.js";import"./PressResponder-DuBPcQr9.js";import"./useLocalizedStringFormatter-CqRU1qss.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTsFJrsB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BNJ8vALJ.js";import"./Button-pix4LUFA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DFjihYlH.js";import"./createLucideIcon-hAagXGW6.js";import"./x-CVUBtniR.js";import"./Heading-Bh0pg882.js";import"./info-Dg0JjAHd.js";import"./Popover-Dgwqhbyi.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
