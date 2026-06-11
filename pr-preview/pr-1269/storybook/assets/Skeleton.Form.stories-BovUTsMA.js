import{j as e,l}from"./iframe-DLIfUtVm.js";import{S as t}from"./Skeleton-oSuJydM_.js";import{T as p}from"./TextField-6f42sQN4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BIkYQE2F.js";import"./utils-DijK3BhG.js";import"./FieldError-BHIohEsL.js";import"./Text-BOHNy1km.js";import"./useFocusRing-B-eRA-0U.js";import"./index-ic1LOc6Q.js";import"./index-BmToxQMH.js";import"./Text-CpkwsxmM.js";import"./RSPContexts-D91XMIa7.js";import"./Form-BSZhUe1f.js";import"./Group-ckdiMqG1.js";import"./Input-BzY6P365.js";import"./Hidden-gQ2c-O38.js";import"./Button-DjhlSD9p.js";import"./useLabel-CMC2PGue.js";import"./useLabels-D1ty8LnF.js";import"./useButton-B7XowPCf.js";import"./useTextField-CgzQ8hLd.js";import"./useControlledState-TKTqriB6.js";import"./useField-DQBV-Tta.js";import"./TextField.module-DdivwlC8.js";import"./Label-DUC1b-tc.js";import"./Dialog-N4-uAqw5.js";import"./OverlayArrow-BQld5ld3.js";import"./useResizeObserver-DphTRZ6E.js";import"./Collection-cGfgXwcY.js";import"./index--ml_NepL.js";import"./Separator-BOcGevY0.js";import"./SelectionManager-B5QpEOZo.js";import"./useEvent-COzGA22f.js";import"./scrollIntoView-C8C62cn2.js";import"./SelectionIndicator-XUvq_wYE.js";import"./useDescription-BaeFvinJ.js";import"./ListKeyboardDelegate-DQOkQRlN.js";import"./PressResponder-BmwLoaVU.js";import"./useLocalizedStringFormatter-4oJDcrPd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D_QCD2Ih.js";import"./getScrollParent-QlPDcvR1.js";import"./VisuallyHidden-B6pFoD4c.js";import"./ModalOverlay-DigGoIVP.js";import"./x-DxaaQwzc.js";import"./createLucideIcon-D_WvFzuZ.js";import"./useLocalizedStringFormatter-vmL8Qz6d.js";import"./Heading-B0E4XyP3.js";import"./Button-C_w78fqJ.js";import"./Button.module-BB7N-cLd.js";import"./info-BKv4yiRX.js";import"./Popover-D9jXiJ7h.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
