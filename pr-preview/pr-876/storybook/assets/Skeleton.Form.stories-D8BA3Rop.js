import{j as e,l}from"./iframe-BNcGdhPn.js";import{S as t}from"./Skeleton-rwEdGx0B.js";import{T as p}from"./TextField-CKjg311x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BRum_fQB.js";import"./utils-BPT-EsfX.js";import"./FieldError-CFxnUxOD.js";import"./Text-Dc9-vgHL.js";import"./useFocusRing-Cu9nwss3.js";import"./index-eJCNODhz.js";import"./index-DyMsBIwY.js";import"./Text-CjSndq1s.js";import"./RSPContexts-DHoclz_N.js";import"./Form-BiZUbCcr.js";import"./Group-Dtrx9Ex4.js";import"./Input-Btp2H53i.js";import"./Hidden-D26ysej5.js";import"./Button-CSPLOvS6.js";import"./useLabel-BYHfbcg2.js";import"./useLabels-Cyu-ySud.js";import"./useButton-CBaQ9s7X.js";import"./useTextField-Bp3odHt0.js";import"./useControlledState-BMDHyIEM.js";import"./useField-3oXs5MuB.js";import"./TextField.module-DdivwlC8.js";import"./Label-DIQtgpJR.js";import"./Dialog-B-cDCHOP.js";import"./OverlayArrow-C245l6va.js";import"./useResizeObserver-gfM9DMFm.js";import"./Collection-C1nt9JNW.js";import"./index-GhtlZNTq.js";import"./Separator-w59tPuNY.js";import"./SelectionManager-D9zlF73V.js";import"./useEvent-CU5jG29K.js";import"./scrollIntoView-DW5hP9Ho.js";import"./SelectionIndicator-C8uxE-m0.js";import"./useDescription-B3I2KEu4.js";import"./ListKeyboardDelegate-BUSiOdW7.js";import"./PressResponder-Dyf4t-uc.js";import"./useLocalizedStringFormatter-Boi35b_5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-aHSinPf_.js";import"./getScrollParent-Dxp0T4Mw.js";import"./VisuallyHidden-BrOw3xQL.js";import"./ModalOverlay-BxxQGZhw.js";import"./x-Cn8Z5y6x.js";import"./createLucideIcon-CIzIYBm5.js";import"./useLocalizedStringFormatter-BLpdVFbs.js";import"./Heading-ChJbJ3Ze.js";import"./Button-BgPh4XDv.js";import"./Button.module-BB7N-cLd.js";import"./info-CecoY-7I.js";import"./Popover-2eTZGnSP.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
