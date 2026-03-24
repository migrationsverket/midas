import{j as e,l}from"./iframe-CuGoBoGQ.js";import{S as t}from"./Skeleton-ChPE-Get.js";import{T as d}from"./TextField-CHdDJz3t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BOOF-9k-.js";import"./utils-RwFFfgQr.js";import"./FieldError-CnIE1vat.js";import"./Text-CH2OEfXa.js";import"./useFocusRing-7bYJ39Cr.js";import"./index-BccAwutK.js";import"./index-Bov1f0DO.js";import"./Text-CKD5St-o.js";import"./RSPContexts-CvhTtm28.js";import"./Form-gAbWA84B.js";import"./Group-CDYSY5JO.js";import"./Input-C5zvbX-S.js";import"./Hidden-DY115Oyb.js";import"./Button-IcW5J6Fh.js";import"./useLabels-BByCvXff.js";import"./useButton-CJN9PhJp.js";import"./useTextField-ZIbstcVT.js";import"./useControlledState-SyqHFLy3.js";import"./useField-CTDbBYF-.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cv9vw-CN.js";import"./Dialog-oMXHRbQO.js";import"./OverlayArrow-wJzG2ASR.js";import"./useResizeObserver-CO_fbrFr.js";import"./Collection-5hILMCKy.js";import"./index-i8iJAVkf.js";import"./Separator-DZyDomWo.js";import"./SelectionManager-CpxIph4V.js";import"./useEvent-CK9pGwso.js";import"./scrollIntoView-CMecGSk7.js";import"./SelectionIndicator-LdUPpWCw.js";import"./useDescription-DnBOZ_LL.js";import"./ListKeyboardDelegate-DRfFRZtF.js";import"./PressResponder-LIZPZ6iW.js";import"./useLocalizedStringFormatter-BG2zkY5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BUe7tfCI.js";import"./getScrollParent-Dk_EDX2n.js";import"./VisuallyHidden-PGxXka93.js";import"./x-uQRabDRs.js";import"./createLucideIcon-COJKu3Gj.js";import"./useLocalizedStringFormatter-Xr2nB7Pj.js";import"./Heading-BtcVrrav.js";import"./Button-hgAtNtsw.js";import"./Button.module-BB7N-cLd.js";import"./info-BKcNgafK.js";import"./Popover-CihEuZuN.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
