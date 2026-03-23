import{j as e,l}from"./iframe-RTTcOKWo.js";import{S as t}from"./Skeleton-C2QGq-TU.js";import{T as d}from"./TextField-DYC41Om2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B3lfEhrO.js";import"./utils-D1hKCylV.js";import"./FieldError-CpMxr9c5.js";import"./Text-C6b-YPN0.js";import"./useFocusRing-BPdF-1cC.js";import"./index-DLoD3cgP.js";import"./index-DFgDWFo1.js";import"./Text-DuBji0m4.js";import"./RSPContexts-CSsrJs75.js";import"./Form-CAZPrwu9.js";import"./Group-CBwj47Ak.js";import"./Input-nUyzNltC.js";import"./Hidden-8U697ZOC.js";import"./Button-By1VqlsU.js";import"./useLabels-CVDdXQg_.js";import"./useButton-BYzzGwzi.js";import"./useTextField-BRubpvpR.js";import"./useControlledState-BfNYqLEH.js";import"./useField-SLaCYCL4.js";import"./TextField.module-DdivwlC8.js";import"./Label-WLINeu_G.js";import"./Dialog-VkPc-IAP.js";import"./OverlayArrow-BdWd3P2S.js";import"./useResizeObserver-rY1Lercj.js";import"./Collection-CnbLTdv5.js";import"./index-Cdog32Ud.js";import"./Separator-CrdCkp7o.js";import"./SelectionManager-BNMg56MX.js";import"./useEvent-BaOlqYrM.js";import"./scrollIntoView-D_w-QXDr.js";import"./SelectionIndicator-FD9ae3ZA.js";import"./useDescription-0Cssm7i0.js";import"./ListKeyboardDelegate-DzEePOMZ.js";import"./PressResponder-CmOYH4Zl.js";import"./useLocalizedStringFormatter-Dp6tEqIr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DO67mrk6.js";import"./getScrollParent-CH4E63H1.js";import"./VisuallyHidden-Dmb8KXLU.js";import"./x-BEn0c19g.js";import"./createLucideIcon-D2PeHOHn.js";import"./useLocalizedStringFormatter-Cqxl6r8R.js";import"./Heading-TYrACDki.js";import"./Button-EZmHrLhm.js";import"./Button.module-BB7N-cLd.js";import"./info-Ds4if5px.js";import"./Popover-DbdINDdm.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
