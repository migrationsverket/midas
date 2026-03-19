import{j as e,l}from"./iframe-Bv5ml16c.js";import{S as t}from"./Skeleton-CkhTNyCJ.js";import{T as d}from"./TextField-CMW_IJ1W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-7Z0zK3Gc.js";import"./utils-CrzZ4zVW.js";import"./FieldError-ikMxF9RT.js";import"./Text-B5E6ljJT.js";import"./useFocusRing-Cq3qZjv_.js";import"./index-BOMnw_9i.js";import"./index-fzWvs2nE.js";import"./Text-AKHTrLSe.js";import"./RSPContexts-WtmDll1S.js";import"./Form-COgYqSWW.js";import"./Group-Bt0HtLRG.js";import"./Input-Cx3IrvXz.js";import"./Hidden-w_KhT5lQ.js";import"./Button-DLv8fZul.js";import"./useLabels-CDeKv3MG.js";import"./useButton-BFdfWCYJ.js";import"./useTextField-e60pPeBc.js";import"./useControlledState-D6OB0qGK.js";import"./useField-DZJN0KJ3.js";import"./TextField.module-DdivwlC8.js";import"./Label-CVytCgXh.js";import"./Dialog-BXiKJeLw.js";import"./OverlayArrow-s_PFhCGi.js";import"./useResizeObserver-AFalClzs.js";import"./Collection-sUJ8wEdO.js";import"./index-koW_KEyU.js";import"./Separator-BRPlw3SR.js";import"./SelectionManager-qPLhk111.js";import"./useEvent-Bm-0c1SF.js";import"./scrollIntoView-BeG1fKYH.js";import"./SelectionIndicator-B-AzNisY.js";import"./useDescription-BqCWQXFE.js";import"./ListKeyboardDelegate-BMGxV2vJ.js";import"./PressResponder-Czmnea-t.js";import"./useLocalizedStringFormatter-CtTQzSvs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXw-D0yh.js";import"./getScrollParent-CUNZV9Gn.js";import"./VisuallyHidden-CVPJh_a3.js";import"./x-D6Yjzl3t.js";import"./createLucideIcon-CDmvOUsI.js";import"./useLocalizedStringFormatter-CsxePGHN.js";import"./Heading-B8xw2oF8.js";import"./Button-CLHYluxH.js";import"./Button.module-BB7N-cLd.js";import"./info-CISb09uM.js";import"./Popover-BCtEUoE0.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
