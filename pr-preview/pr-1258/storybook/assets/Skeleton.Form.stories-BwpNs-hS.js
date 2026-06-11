import{j as e,l}from"./iframe-DsPZ3k2a.js";import{S as t}from"./Skeleton-CcbiudJo.js";import{T as p}from"./TextField-B3Sl4lxl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-S2KgoDIU.js";import"./utils-DVRplGTm.js";import"./FieldError-B7hNQFWR.js";import"./Text-Dz2dRBNa.js";import"./useFocusRing-Cuzdmb74.js";import"./index-CaIK6bHz.js";import"./index-SpvYX93F.js";import"./Text-DD5LVeyW.js";import"./RSPContexts-CozbcOE6.js";import"./Form-DPGlfzHu.js";import"./Group-BuYea3no.js";import"./Input-BVL5fXpA.js";import"./Hidden-vFz_M5_3.js";import"./Button-1ibsdlM-.js";import"./useLabel-CBpqBZPr.js";import"./useLabels-BLAf1Pjr.js";import"./useButton-td_Mid3P.js";import"./useTextField-yGIkuG_W.js";import"./useControlledState-Ynphlhkh.js";import"./useField-stTvCyM3.js";import"./TextField.module-DdivwlC8.js";import"./Label-DtZN8VLb.js";import"./Dialog-1Tc2Tzhh.js";import"./OverlayArrow-N0RcTnbu.js";import"./useResizeObserver-WVHe0Qgn.js";import"./Collection-tBFkX_de.js";import"./index-BJleMyuH.js";import"./Separator-C1wWYv1d.js";import"./SelectionManager-X-CmAPs6.js";import"./useEvent-c1TSVycZ.js";import"./scrollIntoView-Co_8oPFw.js";import"./SelectionIndicator-B7XaYdIl.js";import"./useDescription-D1CIVKnU.js";import"./ListKeyboardDelegate-CouOaG_A.js";import"./PressResponder-CJklNJa2.js";import"./useLocalizedStringFormatter-BhAe1Cmu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CEtoYNbU.js";import"./getScrollParent-SsQAyo_d.js";import"./VisuallyHidden-BoP7uW4X.js";import"./ModalOverlay-B0_dMMU6.js";import"./x-B1yKqvoC.js";import"./createLucideIcon-DFP7Vl1t.js";import"./useLocalizedStringFormatter-B_4X81TH.js";import"./Heading-BS-WW6S5.js";import"./Button-uXogGJvd.js";import"./Button.module-BB7N-cLd.js";import"./info-CQI_rwr8.js";import"./Popover-DFAxb8Ei.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
