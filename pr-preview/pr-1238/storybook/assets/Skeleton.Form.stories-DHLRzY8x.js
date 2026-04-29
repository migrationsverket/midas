import{j as e,l}from"./iframe-DNIclJcr.js";import{S as t}from"./Skeleton-7HRFzdyo.js";import{T as p}from"./TextField-4kb35iQC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dd2Q1ikG.js";import"./utils-D_0gjjvk.js";import"./FieldError-C44SiAvc.js";import"./Text-Ctfv3ntz.js";import"./useFocusRing-DzLjolkJ.js";import"./index-CUHvxg5U.js";import"./index-DNZxg9il.js";import"./Text-CeEH6Nc6.js";import"./RSPContexts-j22KMFJy.js";import"./Form-UMzwdMM5.js";import"./Group-C-2tBhNu.js";import"./Input-P2QjTkbp.js";import"./Hidden-BEQ2WZ2g.js";import"./Button-BbtXrV7T.js";import"./useLabel-D60xKodB.js";import"./useLabels-BYBeQKfq.js";import"./useButton-rBFOLHck.js";import"./useTextField-qCpS1bcj.js";import"./useControlledState-DkjzWyRs.js";import"./useField-DIAAtUKn.js";import"./TextField.module-DdivwlC8.js";import"./Label-DKBQ5Z-N.js";import"./Dialog-NX3aYLyN.js";import"./OverlayArrow-BqP7NhQp.js";import"./useResizeObserver-CcG7Wlaf.js";import"./Collection-BiyZZjBP.js";import"./index-B4nGpSPg.js";import"./Separator-_S30VGdy.js";import"./SelectionManager-DYMvGJ3J.js";import"./useEvent-CeBY1Vjl.js";import"./scrollIntoView-B-YTSEJ0.js";import"./SelectionIndicator-Bg06VdVn.js";import"./useDescription-D_58VzB0.js";import"./ListKeyboardDelegate-CYlLVH1W.js";import"./PressResponder-CTqAQGv3.js";import"./useLocalizedStringFormatter-DVD6HWHu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D4X84dz2.js";import"./getScrollParent-DqCvg1x9.js";import"./VisuallyHidden-BM29Dd_X.js";import"./ModalOverlay-ylbMTcCJ.js";import"./x-D-ccyFox.js";import"./createLucideIcon-DHdJRlte.js";import"./useLocalizedStringFormatter-D1mfHEq_.js";import"./Heading-DUw36RJn.js";import"./Button-CmNHemBb.js";import"./Button.module-BB7N-cLd.js";import"./info-CY2J8c5p.js";import"./Popover-Ch81ck7w.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
