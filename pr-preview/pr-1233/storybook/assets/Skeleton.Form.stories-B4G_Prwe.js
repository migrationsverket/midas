import{j as e,l}from"./iframe-CuHS7f-D.js";import{S as t}from"./Skeleton-H_TKGoFT.js";import{T as p}from"./TextField-NiJUWumf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-XDR2K_lN.js";import"./utils-BFq6s5qx.js";import"./FieldError-DWjsvXUz.js";import"./Text-wtPwzvaL.js";import"./useFocusRing-c3yj8psb.js";import"./index-CUpZ4Q1o.js";import"./index-DHblwsjT.js";import"./Text-Suqt0mTK.js";import"./RSPContexts-CmGu2gwM.js";import"./Form-KXBu28U1.js";import"./Group-BFyk5cnr.js";import"./Input-qYlI4fVr.js";import"./Hidden-DQfRALgS.js";import"./Button-BHwczPOP.js";import"./useLabel-CUA0N587.js";import"./useLabels-D2MJHSWT.js";import"./useButton-DWFuO5be.js";import"./useTextField-CwzW4wa_.js";import"./useControlledState-Kxt6bXWr.js";import"./useField-CrVq981-.js";import"./TextField.module-DdivwlC8.js";import"./Label--dF7n87l.js";import"./Dialog-Dc91KFHZ.js";import"./OverlayArrow-C1DZJQn3.js";import"./useResizeObserver-Bz8PeCUf.js";import"./Collection-97NF7Jpt.js";import"./index-dpH9gAkX.js";import"./Separator-YLElzl4Z.js";import"./SelectionManager-vmbqVhp5.js";import"./useEvent-BpJPF1H-.js";import"./scrollIntoView-CFWK3f8m.js";import"./SelectionIndicator-Cn5dTTdW.js";import"./useDescription-UP5fy7je.js";import"./ListKeyboardDelegate-BEhrGyqr.js";import"./PressResponder-BR-6wi8j.js";import"./useLocalizedStringFormatter-MxafZpyg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7sxD1d7.js";import"./getScrollParent-C0O747nR.js";import"./VisuallyHidden-sy5lx_M_.js";import"./ModalOverlay-B-RtiZAg.js";import"./x-9kI0zPFb.js";import"./createLucideIcon-WRij3kcs.js";import"./useLocalizedStringFormatter-D8LlPcXB.js";import"./Heading-3jJmNByH.js";import"./Button-CT4-7PnM.js";import"./Button.module-BB7N-cLd.js";import"./info-DkvSoVIx.js";import"./Popover-DKYapk_l.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
