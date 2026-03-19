import{j as e,l}from"./iframe-DU8NLsSw.js";import{S as t}from"./Skeleton-DA1YBGZs.js";import{T as d}from"./TextField-Du9CpoWA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0IJuHGA.js";import"./utils-DschNtJz.js";import"./FieldError-CwLWEdZN.js";import"./Text-BZqm9ELR.js";import"./useFocusRing-BMKmF6E1.js";import"./index-C6itxEvf.js";import"./index-DDAOQfjR.js";import"./Text-Dif5ls4o.js";import"./RSPContexts-B6N-eI9R.js";import"./Form-BJkA6abG.js";import"./Group-CcQiZC6c.js";import"./Input-CNSmefZp.js";import"./Hidden-DjBEVfsr.js";import"./Button-CLXNoy7Y.js";import"./useLabels-C6Oc5R34.js";import"./useButton-D62E3rKh.js";import"./useTextField-B-T7FBsf.js";import"./useControlledState-CI3nCHv5.js";import"./useField-sZihLE4Q.js";import"./TextField.module-DdivwlC8.js";import"./Label-Ct3ZN431.js";import"./Dialog-D9rtR4RO.js";import"./OverlayArrow-DO-yg-5j.js";import"./useResizeObserver-B3lKcq_g.js";import"./Collection-BFEtU6Zj.js";import"./index-DxE-xFtT.js";import"./Separator-D2KwEruR.js";import"./SelectionManager-D66mxQR-.js";import"./useEvent-DHKGnH5O.js";import"./scrollIntoView-D3YlmEdr.js";import"./SelectionIndicator-KRuxcBLn.js";import"./useDescription-DHAJH0jb.js";import"./ListKeyboardDelegate-CpOAujDV.js";import"./PressResponder-Bw3EqB76.js";import"./useLocalizedStringFormatter-Cj1K2IHh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ngnsKjAl.js";import"./getScrollParent-vSGEZB_b.js";import"./VisuallyHidden-CTGBozXG.js";import"./x-BTYP4-gW.js";import"./createLucideIcon-24KtAMn6.js";import"./useLocalizedStringFormatter-CFXzQyxC.js";import"./Heading-BFFMpYOw.js";import"./Button-CMEO0cNM.js";import"./Button.module-BB7N-cLd.js";import"./info-yxh-5K7v.js";import"./Popover-D4QOb9hJ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
