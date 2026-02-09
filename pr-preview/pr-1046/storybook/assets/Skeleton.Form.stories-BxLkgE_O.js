import{j as e,l}from"./iframe-CDlGoVBX.js";import{S as t}from"./Skeleton-9RCZXval.js";import{T as p}from"./TextField-9iLmVbQj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DI1ecJHV.js";import"./utils-DK0QJ5bq.js";import"./TextField-c6Sz-paG.js";import"./FieldError-BTnAzmQ0.js";import"./Text-gvo1OKGS.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./Text-Cflgqxbo.js";import"./RSPContexts-omBJ6Sgu.js";import"./Form-DTFKHJWV.js";import"./useFormValidation-C3JGr8K4.js";import"./Group-BYFKWapm.js";import"./Input-H5icjH4o.js";import"./Hidden-D3g4_ydn.js";import"./Button-ChHi1CmX.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./useTextField-DnEnbiaG.js";import"./useControlledState-CcD6TCI7.js";import"./useField-C4i4gm-f.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DnbVg9hf.js";import"./Dialog-ChLjSgrj.js";import"./OverlayArrow-DodgMuZn.js";import"./useResizeObserver-D1875uj1.js";import"./Collection-C0k2ascB.js";import"./index-D25xMYNc.js";import"./Separator-Cbp4e2aL.js";import"./SelectionManager-Dgm03e0j.js";import"./useEvent-BCnLZYbk.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2Q5v_NP.js";import"./useDescription-DUfOP2Oy.js";import"./ListKeyboardDelegate-Cd18ptaN.js";import"./PressResponder-CwsbJqYe.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RKI4vDG-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BoTcuaXb.js";import"./Button-bhz0d5b_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./createLucideIcon-DnI-ftFI.js";import"./x-DzdEbKW-.js";import"./Heading-Z24TZx0I.js";import"./info-DDIYqxGr.js";import"./Popover-wobZ9HHk.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
