import{j as e,l}from"./iframe-CSVmyJ9R.js";import{S as t}from"./Skeleton-BDOcidrG.js";import{T as d}from"./TextField-JyyX-lkQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DFRrKeNc.js";import"./utils-CPqOETBM.js";import"./TextField-CgT5uWqT.js";import"./FieldError-DHYVenvj.js";import"./Text-C8HgXGPu.js";import"./useFocusRing-BrPdNnBS.js";import"./index-E587h0fs.js";import"./index-CVwQ3yNk.js";import"./Text-BsEzx2Ek.js";import"./RSPContexts-GO5W47ky.js";import"./Form-ZrLhv48n.js";import"./useFormValidation-DspL0P0U.js";import"./Group-Drjw8Ou_.js";import"./Input-Bs3OvUXW.js";import"./Hidden-B-TeHCBv.js";import"./Button-BQXPo15e.js";import"./useLabels-D1ztbA9R.js";import"./useButton-DFFPcWTi.js";import"./useTextField-D75bFy9u.js";import"./useControlledState-DTJWCz0V.js";import"./useField-KTNK2PUR.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B0IaRgKH.js";import"./Dialog-Sdg7eLn8.js";import"./OverlayArrow-Bgv8sbJO.js";import"./useResizeObserver-tu5o0PEw.js";import"./Collection-DgaZtCGP.js";import"./index-CdxjXi9l.js";import"./Separator-Bo8VghUH.js";import"./SelectionManager-BGeO44f6.js";import"./useEvent-qx2c1K7D.js";import"./scrollIntoView-t6kjJQiD.js";import"./SelectionIndicator-99zEWoLq.js";import"./useDescription-B4Vu6QR4.js";import"./ListKeyboardDelegate-BG1wdXY4.js";import"./PressResponder-CpYqWZpE.js";import"./useLocalizedStringFormatter-B8c5ZoQv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BYzozrC1.js";import"./VisuallyHidden-CSK4owg4.js";import"./Button-BmI8BsBm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DjLs2VzN.js";import"./createLucideIcon-CvwfQw68.js";import"./x-CjC83yIY.js";import"./Heading-hsM_iYer.js";import"./info-ChFLJxWM.js";import"./Popover-CPobd-JO.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
