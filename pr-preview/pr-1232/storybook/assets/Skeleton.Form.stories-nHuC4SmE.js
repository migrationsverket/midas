import{j as e,l}from"./iframe-b0nZhEJS.js";import{S as t}from"./Skeleton-Bm9ApL6J.js";import{T as p}from"./TextField-C5A17bmX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Al83lvXo.js";import"./utils-Czy4cRiY.js";import"./FieldError-CFDpOADY.js";import"./Text-CKTyuYl3.js";import"./useFocusRing-CFZ-IXl8.js";import"./index-DA1-9aBn.js";import"./index-DV7yp0R8.js";import"./Text-PpOivcva.js";import"./RSPContexts-BwF7V3QB.js";import"./Form-BYDskUyn.js";import"./Group-DtLMGfSw.js";import"./Input-Cdwbflk7.js";import"./Hidden-CZ6waCzP.js";import"./Button-W8LmO0wX.js";import"./useLabel-DnRB1mu0.js";import"./useLabels-D0XwDCFR.js";import"./useButton-CdJ6_dC8.js";import"./useTextField-BenCDeqQ.js";import"./useControlledState-s-wNeubv.js";import"./useField-Bee8Za-k.js";import"./TextField.module-DdivwlC8.js";import"./Label-Drh-gs1K.js";import"./Dialog-Bgvt-Ohb.js";import"./OverlayArrow-TISIefmd.js";import"./useResizeObserver-C9tbqStX.js";import"./Collection-DnjoQvxt.js";import"./index-D6FvMNA4.js";import"./Separator-D-sB3bC9.js";import"./SelectionManager-_cFQFdJX.js";import"./useEvent-D9RmNfeT.js";import"./scrollIntoView-BA0MjwzP.js";import"./SelectionIndicator-B6azs_Wj.js";import"./useDescription-CGMez1fw.js";import"./ListKeyboardDelegate-Z109lLwT.js";import"./PressResponder-CFMuyrEs.js";import"./useLocalizedStringFormatter-C8ETTJnR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkbuoI5o.js";import"./getScrollParent-C1OYKDte.js";import"./VisuallyHidden-BU0juR5g.js";import"./ModalOverlay-CIKlr_28.js";import"./x-BKNFSSsH.js";import"./createLucideIcon-t4UVlQbW.js";import"./useLocalizedStringFormatter-B84UWKXC.js";import"./Heading-BHoXnOGe.js";import"./Button-BHZxE8mE.js";import"./Button.module-BB7N-cLd.js";import"./info-c9P-7NOY.js";import"./Popover-B5It236L.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
