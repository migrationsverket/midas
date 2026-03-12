import{j as e,l}from"./iframe-cYpxZzUZ.js";import{S as t}from"./Skeleton-COtBtfnK.js";import{T as p}from"./TextField-B7PhNYRs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BRT-vR26.js";import"./utils-Da5YKx2_.js";import"./FieldError-B5Zp84t6.js";import"./Text-BEBHFL1U.js";import"./useFocusRing-Ro1kVhTk.js";import"./index-DWJi6tle.js";import"./index-nlAR4CdQ.js";import"./Text-BWvCs6nS.js";import"./RSPContexts-PAZO9wT0.js";import"./Form-DzRAN7ks.js";import"./useFormValidation-cnpDgIF1.js";import"./Group-DgVDP7K9.js";import"./Input-mQR8rMNc.js";import"./Hidden-CEh4KexJ.js";import"./Button-I19PkSL9.js";import"./useLabels-yIxCyUCA.js";import"./useButton-BTaVYt9k.js";import"./useTextField-C4i3To1d.js";import"./useControlledState-BAEBGgdv.js";import"./useField-KHoqv6p7.js";import"./TextField.module-DdivwlC8.js";import"./Label-df7BdyEv.js";import"./Dialog-EHn9dooH.js";import"./OverlayArrow-CvoS3GVf.js";import"./useResizeObserver-BMDdilg5.js";import"./Collection-DMSsilCO.js";import"./index-BHK2Mwib.js";import"./Separator-BPdP3iah.js";import"./SelectionManager-CBa264Qr.js";import"./useEvent-CieYChAx.js";import"./scrollIntoView-rdHf84fN.js";import"./SelectionIndicator-CHMUoP5F.js";import"./useDescription-D_79kmmu.js";import"./ListKeyboardDelegate-MdSAf45I.js";import"./PressResponder-VukDtROZ.js";import"./useLocalizedStringFormatter-BSJ4rvpt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C9JA0yfm.js";import"./getScrollParent-DCSYnjJt.js";import"./VisuallyHidden-DaBYovm5.js";import"./x-BpfnAhHg.js";import"./createLucideIcon-CeCkLO_B.js";import"./useLocalizedStringFormatter-Cgn8B_F7.js";import"./Heading-DtwqYiEh.js";import"./Button-CJf-JCMB.js";import"./Button.module-D_C6WeTN.js";import"./info-CQYNQ5QQ.js";import"./Popover-CYeW9AVh.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
