import{j as e,l}from"./iframe-D1quRbgW.js";import{S as t}from"./Skeleton-_CGeIRzJ.js";import{T as p}from"./TextField-BjIEIJth.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bz22Anl9.js";import"./utils-5jbBDEho.js";import"./FieldError-tCCfgJxh.js";import"./Text-3Qvoq1in.js";import"./useFocusRing-9kJRwLWf.js";import"./index-C1wTVLbv.js";import"./index-w4IFX-ob.js";import"./Text-D_OKwN2L.js";import"./RSPContexts-BOAQgN9e.js";import"./Form-CYOiDrvK.js";import"./Group-BYE11aio.js";import"./Input-D6BpUq6c.js";import"./Hidden-CE_f7fkS.js";import"./Button-BhbL5JV7.js";import"./useLabel-DDdOINwl.js";import"./useLabels-BsTHS2Oy.js";import"./useButton-D9N6BOnF.js";import"./useTextField-vt5FCW9J.js";import"./useControlledState-DeZ6Yvot.js";import"./useField-Cufj8K7g.js";import"./TextField.module-DdivwlC8.js";import"./Label-CQyhlHOY.js";import"./Dialog-CRuSb46z.js";import"./OverlayArrow-Cu_hZ8Ow.js";import"./useResizeObserver-mi6LLgFF.js";import"./Collection-D07AIaI6.js";import"./index-DVsa0PpW.js";import"./Separator-Bm91EQOq.js";import"./SelectionManager-BfK7m5GQ.js";import"./useEvent-l8liJTej.js";import"./scrollIntoView-Bo7c4HRy.js";import"./SelectionIndicator-BQcve-Om.js";import"./useDescription-CYq7ZcY8.js";import"./ListKeyboardDelegate-abc3RMeL.js";import"./PressResponder-B1v66ZVJ.js";import"./useLocalizedStringFormatter-JzAhjm-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7P9G73n.js";import"./getScrollParent-BuLIPRgk.js";import"./VisuallyHidden-BTPkzFD2.js";import"./Dialog-B0MaM1ld.js";import"./x-C6gJ_9jG.js";import"./createLucideIcon-xiP51FEZ.js";import"./useLocalizedStringFormatter-BjC_IaMj.js";import"./Heading-DBO9UxDb.js";import"./Button-BfQ6mpwy.js";import"./Button.module-BB7N-cLd.js";import"./info-C4xCLEuX.js";import"./Popover-o2aALoW-.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
