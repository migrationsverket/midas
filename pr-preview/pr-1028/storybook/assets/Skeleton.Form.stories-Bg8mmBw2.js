import{j as e,l}from"./iframe-COBKNkIo.js";import{S as t}from"./Skeleton-BY-clGQ5.js";import{T as p}from"./TextField-Cuogx_Sw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CoAEAarK.js";import"./utils-Cawu88FS.js";import"./TextField-BpdwwqNr.js";import"./FieldError-Dc4PcQjT.js";import"./Text-fShGFw3n.js";import"./useFocusRing-CvKJ5iP5.js";import"./index-C-3DmDn0.js";import"./index-BhECMZqo.js";import"./Text-CtIfC9h2.js";import"./RSPContexts-C70LcTh5.js";import"./Form-CrqQ6pcU.js";import"./useFormValidation-UFN-ft0-.js";import"./Group-xuQ-_fHE.js";import"./Input-B2xEvH7p.js";import"./Hidden-DWdHgASM.js";import"./Button-DVN4emYY.js";import"./useLabels-DygN-rGJ.js";import"./useButton-B9wSSCM2.js";import"./useTextField-CgNJouZW.js";import"./useControlledState-njDs9clp.js";import"./useField-9hLn6ruD.js";import"./TextField.module-DpzeWGpt.js";import"./Label-B6eBqJFb.js";import"./Dialog-DB5rjtZZ.js";import"./OverlayArrow-DKSkdDqN.js";import"./useResizeObserver-Bqb8qtFK.js";import"./Collection-ORahdX2f.js";import"./index-CkZw-AsC.js";import"./Separator-D6JsExfa.js";import"./SelectionManager-c9AzP8-j.js";import"./useEvent-eTIvht7u.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Br11R8Lo.js";import"./useDescription-CxjHqdVd.js";import"./ListKeyboardDelegate-CCRA5f7Y.js";import"./PressResponder-DcbM8PZp.js";import"./useLocalizedStringFormatter-5TCmV2CR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8ZwlS_W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-vIshbz0f.js";import"./Button-COjdwtTG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CgpNX7X7.js";import"./createLucideIcon-CRw8Ded6.js";import"./x-Dj_xkDq5.js";import"./Heading-C1jl_BHV.js";import"./info-BqWnuKgo.js";import"./Popover-D6-r6tyV.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
