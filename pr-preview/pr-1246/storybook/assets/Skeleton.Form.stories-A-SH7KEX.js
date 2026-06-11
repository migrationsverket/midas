import{j as e,l}from"./iframe-hven07mH.js";import{S as t}from"./Skeleton-BAxeGphF.js";import{T as p}from"./TextField-B6cfRQTp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DcMwYvoH.js";import"./utils-CP0dC5bD.js";import"./FieldError-CGNeiPVK.js";import"./Text-BAoIm1rg.js";import"./useFocusRing-6_qWLH8D.js";import"./index-CAaUGq6x.js";import"./index-VYEOm2qh.js";import"./Text-BkfOg5_y.js";import"./RSPContexts-BL3sWo_M.js";import"./Form-DEztDf84.js";import"./Group-Bas3MU3M.js";import"./Input-DlJaTotj.js";import"./Hidden-bl0dyrpb.js";import"./Button-b_-88Jdv.js";import"./useLabel-3fPS2DpE.js";import"./useLabels-8upbqgKW.js";import"./useButton-Bg6zMZft.js";import"./useTextField-BiDsHsN_.js";import"./useControlledState-_nq-pl6I.js";import"./useField-BkZnRozU.js";import"./TextField.module-DdivwlC8.js";import"./Label-DVeeIgYV.js";import"./Dialog-CrXu0Iq4.js";import"./OverlayArrow-Pyj2Sm6q.js";import"./useResizeObserver-C_bQTHpI.js";import"./Collection-CUMhwKNV.js";import"./index-OuXY1_jV.js";import"./Separator-PQI-1kJF.js";import"./SelectionManager-DwZcMojQ.js";import"./useEvent-BzIwcgMz.js";import"./scrollIntoView--hYGjISc.js";import"./SelectionIndicator-W2IT6oIH.js";import"./useDescription-DSRfQAcu.js";import"./ListKeyboardDelegate-9T6GEUhl.js";import"./PressResponder-DI_yOdFi.js";import"./useLocalizedStringFormatter-DAcMpTAF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzzI9YUs.js";import"./getScrollParent-vliVuo3m.js";import"./VisuallyHidden-B42_LAgy.js";import"./ModalOverlay-VX1_NYaR.js";import"./x-C-2CBxKx.js";import"./createLucideIcon-rLeAgfXY.js";import"./useLocalizedStringFormatter-SJXe37s8.js";import"./Heading-DK-Y_why.js";import"./Button-CsNSTQ8W.js";import"./Button.module-BB7N-cLd.js";import"./info-DzYItAFf.js";import"./Popover-B8afHds0.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
