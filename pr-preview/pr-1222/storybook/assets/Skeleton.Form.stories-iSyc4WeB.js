import{j as e,l}from"./iframe-BTaDbuxu.js";import{S as t}from"./Skeleton-g_ys8Xan.js";import{T as p}from"./TextField-D-E1nhqQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DrZ7jwy-.js";import"./utils-1uCA-_jS.js";import"./FieldError-BSmb6mHx.js";import"./Text-DMH4kU1u.js";import"./useFocusRing-BHhR7R8K.js";import"./index-Bb20tbAa.js";import"./index-D6fO5xxY.js";import"./Text-BgkGdlQT.js";import"./RSPContexts-BHVdxW7V.js";import"./Form-CRVSZQwH.js";import"./Group-Bofc7W_S.js";import"./Input-DrCdW5E2.js";import"./Hidden-DHaMiUFe.js";import"./Button-V9h2N0md.js";import"./useLabel-J_84CvRn.js";import"./useLabels-DegCLMnY.js";import"./useButton-S82UpuFO.js";import"./useTextField-DXtDSAZ5.js";import"./useControlledState-CpRYTvJt.js";import"./useField-12NpjcQ6.js";import"./TextField.module-DdivwlC8.js";import"./Label-C6YyueRh.js";import"./Dialog-Cu8HywJD.js";import"./OverlayArrow-CJLkq1Il.js";import"./useResizeObserver-BfE_d8Ln.js";import"./Collection-DjeNEEmf.js";import"./index-DdZfCU1H.js";import"./Separator-ChU6sIgy.js";import"./SelectionManager-DeqISQES.js";import"./useEvent-DlwZgChj.js";import"./scrollIntoView-BMucG0RA.js";import"./SelectionIndicator-lL4f1q1r.js";import"./useDescription-DJkbGKg1.js";import"./ListKeyboardDelegate-Ddis9XgJ.js";import"./PressResponder-Cr7mUyzZ.js";import"./useLocalizedStringFormatter-XUeJ46d1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-gv079wbl.js";import"./getScrollParent-D2rHfLmL.js";import"./VisuallyHidden-CqahcWwX.js";import"./ModalOverlay-D3dqdf8I.js";import"./x--XPZcdcH.js";import"./createLucideIcon-B7TgxeN_.js";import"./useLocalizedStringFormatter-Bl_scK9Q.js";import"./Heading-Bly3ER8A.js";import"./Button-Cy0fOhbL.js";import"./Button.module-BB7N-cLd.js";import"./info-C7_Arssk.js";import"./Popover-4Cm-SRAq.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
