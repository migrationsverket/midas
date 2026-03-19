import{j as e,l}from"./iframe-BMuIqf2U.js";import{S as t}from"./Skeleton-B5-iewOe.js";import{T as d}from"./TextField-Dhx9B9PM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DV8BEc-b.js";import"./utils-CzLgQND9.js";import"./FieldError-BYsndT3-.js";import"./Text-CDpvKUAe.js";import"./useFocusRing-DrTSxcZR.js";import"./index-DrkjSw_E.js";import"./index-BzHeAC17.js";import"./Text-Yadq2hZ1.js";import"./RSPContexts-g3J5QWBf.js";import"./Form-AZXoGIRv.js";import"./Group-DpYibYIB.js";import"./Input-C5dbbndU.js";import"./Hidden-D30GFtt0.js";import"./Button-DOK0QqgZ.js";import"./useLabels-DL2LM1pj.js";import"./useButton-BIdZHsA8.js";import"./useTextField-CmaI2bBi.js";import"./useControlledState-DRATP7Vg.js";import"./useField-BVB_nZx5.js";import"./TextField.module-DdivwlC8.js";import"./Label-B-nvuAvF.js";import"./Dialog-BaFMT-Vg.js";import"./OverlayArrow-BNhHQiLo.js";import"./useResizeObserver-BGa8LNoM.js";import"./Collection-CiDwrQ8E.js";import"./index-BRC2iNSA.js";import"./Separator-9V7Ki1SC.js";import"./SelectionManager-C_GaywSa.js";import"./useEvent-Dau9qK9n.js";import"./scrollIntoView-CjK1TPSG.js";import"./SelectionIndicator-CGmI1Kc3.js";import"./useDescription-C7IYof9s.js";import"./ListKeyboardDelegate-0qm8FZcz.js";import"./PressResponder-BlYZm5Zf.js";import"./useLocalizedStringFormatter-hZHAja5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CFDVl9Vw.js";import"./getScrollParent-DjDKJ7cH.js";import"./VisuallyHidden-BPe22ZQU.js";import"./x-BI9V4c-g.js";import"./createLucideIcon-CEUfukBy.js";import"./useLocalizedStringFormatter-W3lFtewy.js";import"./Heading-BRWOlel1.js";import"./Button-BsMPKC4Q.js";import"./Button.module-BB7N-cLd.js";import"./info-CgmjHY1k.js";import"./Popover-BmTw-2-L.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
