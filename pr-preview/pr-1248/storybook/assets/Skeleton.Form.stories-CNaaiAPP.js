import{j as e,l}from"./iframe-W4nJ5fCl.js";import{S as t}from"./Skeleton-RGI4QeLx.js";import{T as p}from"./TextField-N_RxM6jr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D5i4JS7K.js";import"./utils-BMpeEmxJ.js";import"./FieldError-D3aP5cbk.js";import"./Text-7uFUvoRD.js";import"./useFocusRing-CHaZCxXN.js";import"./index-DEBoppYt.js";import"./index-rtxYMlVc.js";import"./Text-AfrZysmO.js";import"./RSPContexts-C3FuW2H8.js";import"./Form-woZLC3Si.js";import"./Group-Dyp7XMR1.js";import"./Input-D_GS_qQW.js";import"./Hidden-DgKJ7wvz.js";import"./Button-C7OXJw6w.js";import"./useLabel-BQqoQBPd.js";import"./useLabels-PCa51qdN.js";import"./useButton-CuGrHjI5.js";import"./useTextField-BO0L5qHJ.js";import"./useControlledState-C1a0SOin.js";import"./useField-BdE6-JOU.js";import"./TextField.module-DdivwlC8.js";import"./Label-BMRVrZ0p.js";import"./Dialog-Cyy3NcUN.js";import"./OverlayArrow-CRLt9m8S.js";import"./useResizeObserver-DxpD5VCO.js";import"./Collection-BsD5Bj9-.js";import"./index-BSsmI8Ds.js";import"./Separator-BypnE9cm.js";import"./SelectionManager-DP-ujGtA.js";import"./useEvent-BkKUNT6i.js";import"./scrollIntoView-wq7p_jb-.js";import"./SelectionIndicator-glRimQ0H.js";import"./useDescription-DtiWVPbn.js";import"./ListKeyboardDelegate-CmK4Ay-W.js";import"./PressResponder-CP6R-Gx9.js";import"./useLocalizedStringFormatter-C2aEMzMq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C46x7hVc.js";import"./getScrollParent-DNPkZ1s0.js";import"./VisuallyHidden-6HiRHb8s.js";import"./ModalOverlay-B3mNV_C3.js";import"./x-DAORPWxu.js";import"./createLucideIcon-DlNL3tyz.js";import"./useLocalizedStringFormatter-B3mguR4f.js";import"./Heading-wdOPcwKO.js";import"./Button-Ic5TYFB0.js";import"./Button.module-BB7N-cLd.js";import"./info-BidWNk1o.js";import"./Popover-DMS2y1yM.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
