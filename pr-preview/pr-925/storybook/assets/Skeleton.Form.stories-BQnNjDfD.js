import{j as e,l}from"./iframe-8NxkOHC0.js";import{S as t}from"./Skeleton-OEV5YR00.js";import{T as d}from"./TextField-CZiqAni1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CoKpuJru.js";import"./utils-BjJTDc6K.js";import"./TextField-BMjHbFdG.js";import"./FieldError-CzI3oRhH.js";import"./Text-CAM644I6.js";import"./useFocusRing-Ai_dklgC.js";import"./index-Dp_nq2C7.js";import"./index-C0eAkoQ8.js";import"./Text-CFZh4J2g.js";import"./RSPContexts-COvuTsKM.js";import"./Form-DPLGVkx_.js";import"./useFormValidation-DuZ8Mn8e.js";import"./Group-Do67QcGL.js";import"./Input-LGtLMezp.js";import"./Hidden-ARem1YbJ.js";import"./Button-CBX6q1X7.js";import"./useLabels-BwvuP5Nn.js";import"./useButton-gPG0D9SS.js";import"./useTextField-Hgp4FTY4.js";import"./useControlledState-xUvVHfPd.js";import"./useField-CH8AEZxT.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BIUa3pJk.js";import"./Dialog-BmvzvLq-.js";import"./OverlayArrow-CwJldLCy.js";import"./useResizeObserver-BX0kdKzp.js";import"./Collection-3tcND9Ce.js";import"./index-BY16o8kY.js";import"./Separator-uLS3y2pl.js";import"./SelectionManager-QYSQsT4a.js";import"./useEvent-D0REUeSa.js";import"./scrollIntoView-jhVEGj5Z.js";import"./SelectionIndicator-B66G8jmF.js";import"./useDescription-CVSDalp1.js";import"./ListKeyboardDelegate-5WyxpSlG.js";import"./PressResponder-BqXDWtzG.js";import"./useLocalizedStringFormatter-Clupnulk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DeCDJb6-.js";import"./VisuallyHidden-nH3VdIbm.js";import"./Button-be8rRcw-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-SobQoFpC.js";import"./createLucideIcon-Zab4VPSU.js";import"./x-CizWcIUD.js";import"./Heading-NJOheOkw.js";import"./info-vZ96BD-5.js";import"./Popover-D8L-I8mB.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
