import{j as e,l}from"./iframe-CxnkivWk.js";import{S as t}from"./Skeleton--xPMet6h.js";import{T as p}from"./TextField-DRddSBJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-ulqYpEHE.js";import"./utils-D9spTQed.js";import"./FieldError-CXKQ23yv.js";import"./Text-C1PtMghN.js";import"./useFocusRing-DuH0mTQw.js";import"./index-D6J4-gBr.js";import"./index-BAOnkMzS.js";import"./Text-DEFKyO3K.js";import"./RSPContexts-BoJ1S5Xk.js";import"./Form-DkPx28L8.js";import"./Group-BNGUzLFf.js";import"./Input-D9JcCxco.js";import"./Hidden-DV_3dmeB.js";import"./Button-bNvppfaR.js";import"./useLabel-DAx5WPkE.js";import"./useLabels-Dvg-ZEsL.js";import"./useButton-C_SSCC3h.js";import"./useTextField-BIzTlx2_.js";import"./useControlledState-DslVItvC.js";import"./useField-B3iEvv-2.js";import"./TextField.module-DdivwlC8.js";import"./Label-CQ464mk5.js";import"./Dialog-DwLoy7Vv.js";import"./OverlayArrow-BG0VBke4.js";import"./useResizeObserver-DaS98GU_.js";import"./Collection-CXm-x1nl.js";import"./index-B3NRX8rx.js";import"./Separator-Dnq--nuB.js";import"./SelectionManager-Cl7E85EL.js";import"./useEvent-CQPjNeLr.js";import"./scrollIntoView-CctMTOtZ.js";import"./SelectionIndicator-DnuaDN2e.js";import"./useDescription-DJZJclYp.js";import"./ListKeyboardDelegate-1o8DOqqA.js";import"./PressResponder-CjKLrE4L.js";import"./useLocalizedStringFormatter-B8oxEIA6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cek9N8W3.js";import"./getScrollParent-ClxdokLI.js";import"./VisuallyHidden-CHjZ0tZh.js";import"./ModalOverlay-NDRHYBNJ.js";import"./x-CesJmbak.js";import"./createLucideIcon-DTCD7Iny.js";import"./useLocalizedStringFormatter-Byuqcgqc.js";import"./Heading-COAl1DmL.js";import"./Button-gL8l0gpP.js";import"./Button.module-BB7N-cLd.js";import"./info-lbJk4b3T.js";import"./Popover-x6b8bzWC.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
