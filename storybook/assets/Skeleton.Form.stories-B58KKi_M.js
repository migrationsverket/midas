import{j as e,l}from"./iframe-CVYuRL2L.js";import{S as t}from"./Skeleton-BfHcEnlt.js";import{T as p}from"./TextField-bl-U2qeH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D8PjthXn.js";import"./utils-FalFx0_C.js";import"./TextField-BGJ1ajT5.js";import"./FieldError-BIaXIYDe.js";import"./Text-fqYhQFX9.js";import"./useFocusRing-B7UqG5wX.js";import"./index-CIN53LEN.js";import"./index-DW6Gp5-3.js";import"./Text-Cc7Ev4p7.js";import"./RSPContexts-Dz_7vHVU.js";import"./Form-nEGaHNOI.js";import"./useFormValidation-C5eaxW-H.js";import"./Group-CE9BM4ay.js";import"./Input-DMSXjXnK.js";import"./Hidden-7G--kRMd.js";import"./Button-fgPwWI64.js";import"./useLabels-C6aP1roI.js";import"./useButton-BemEUMtu.js";import"./useTextField-BIlWM_lx.js";import"./useControlledState-Bfw16jnf.js";import"./useField-SLOTdrpb.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C9CTlr3v.js";import"./Dialog-CFrQbFFY.js";import"./OverlayArrow-CnTFpdKe.js";import"./useResizeObserver-wA35P9Sz.js";import"./Collection-XhkaB00H.js";import"./index-CHRmIf3C.js";import"./Separator-DkE98-T3.js";import"./SelectionManager-BIErOqao.js";import"./useEvent-PY-NpLtx.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0gzAB7t.js";import"./useDescription-B68_wcOl.js";import"./ListKeyboardDelegate-DKFf-qNB.js";import"./PressResponder-CSQrrfEb.js";import"./useLocalizedStringFormatter-Caq8B-uR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-nw96wMmH.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJW8H9GE.js";import"./Button-B6nzWHQR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-De7XCe4t.js";import"./createLucideIcon-DJNnvE8I.js";import"./x-7z9CXtj-.js";import"./Heading-CnEQ7lj3.js";import"./info-CVfFx7tC.js";import"./Popover-kvZKtriy.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
