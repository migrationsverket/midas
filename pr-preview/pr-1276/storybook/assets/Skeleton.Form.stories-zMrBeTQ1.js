import{j as e,l}from"./iframe-msAyXsP3.js";import{S as t}from"./Skeleton-DJC0imIC.js";import{T as p}from"./TextField-DW6k7In_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DFeTi4Dy.js";import"./utils-CNLzm5ks.js";import"./FieldError-D_l8yWz1.js";import"./Text-B_o1aquN.js";import"./useFocusRing-DUmFoS0u.js";import"./index-DbT8YmDW.js";import"./index-DdtKLc0f.js";import"./Text-O5KbKawX.js";import"./RSPContexts-iGd1ezyt.js";import"./Form-BzCO8y52.js";import"./Group-C9uwkwF3.js";import"./Input-uT8EL97e.js";import"./Hidden-1dN06UT8.js";import"./Button-CHXcA8G6.js";import"./useLabel-CSQCeGiL.js";import"./useLabels-CoFEN7CD.js";import"./useButton-o2FEXKT7.js";import"./useTextField-CTS6NHyV.js";import"./useControlledState-B9ayh_25.js";import"./useField-BQiibDSC.js";import"./TextField.module-DdivwlC8.js";import"./Label-DxNMoJMl.js";import"./Dialog-C8tFtSHW.js";import"./OverlayArrow-BWBO8op3.js";import"./useResizeObserver-CZWQOcrq.js";import"./Collection-CPSpfntx.js";import"./index-6JCrDjhY.js";import"./Separator-CxLq3Pse.js";import"./SelectionManager-B3prKbih.js";import"./useEvent-C4mqR9gc.js";import"./scrollIntoView-rdVvyk8L.js";import"./SelectionIndicator-CP3-12il.js";import"./useDescription-BVWBMn3A.js";import"./ListKeyboardDelegate-Bs_ISgoC.js";import"./PressResponder-C7lMB_PS.js";import"./useLocalizedStringFormatter-DPSc_3xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DiiBM48K.js";import"./getScrollParent-V1l4010l.js";import"./VisuallyHidden-BM3YcZfp.js";import"./ModalOverlay-YdVRGBnv.js";import"./x-DoBtKp7e.js";import"./createLucideIcon-DQiIjLik.js";import"./useLocalizedStringFormatter-DOzvk0aq.js";import"./Heading-BM06ULQu.js";import"./Button-C2f__mC4.js";import"./Button.module-BB7N-cLd.js";import"./info-Nh4od2m3.js";import"./Popover-Cx4AtZQm.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
