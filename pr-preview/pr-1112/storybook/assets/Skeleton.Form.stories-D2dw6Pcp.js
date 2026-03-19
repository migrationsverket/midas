import{j as e,l}from"./iframe-C9WX87J6.js";import{S as t}from"./Skeleton-DSfQYabF.js";import{T as d}from"./TextField-Ds9AEqjk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-q_bSc1nL.js";import"./utils-WPpV5jWl.js";import"./FieldError-BMuqq62L.js";import"./Text-BCCgd_b8.js";import"./useFocusRing-CAXYS_HG.js";import"./index-CHnbLAYQ.js";import"./index-La7aNuBH.js";import"./Text-BtCJyYmU.js";import"./RSPContexts-DpKSKp3G.js";import"./Form-CrDGPGDU.js";import"./Group-WJ_ukR0V.js";import"./Input-DInRldIR.js";import"./Hidden-CEJtjfct.js";import"./Button-Bu5uxYhh.js";import"./useLabels-DgR_9Kxw.js";import"./useButton-CpsvKUvy.js";import"./useTextField-D-ryzgE-.js";import"./useControlledState-fvtCyn4a.js";import"./useField-CaDFVgqd.js";import"./TextField.module-DdivwlC8.js";import"./Label-3tTqA_lk.js";import"./Dialog-Be-YiFRp.js";import"./OverlayArrow-BmejntqJ.js";import"./useResizeObserver-mHpqwk-P.js";import"./Collection-Bua-hp0H.js";import"./index-zTUZP3np.js";import"./Separator-2CJ-HnLM.js";import"./SelectionManager-DAfe-HwK.js";import"./useEvent-CwKYR3g8.js";import"./scrollIntoView-BvPcFHyF.js";import"./SelectionIndicator-DMa2A1w6.js";import"./useDescription-DSJqKme2.js";import"./ListKeyboardDelegate-BkqDl2Q0.js";import"./PressResponder-DsSkDH2D.js";import"./useLocalizedStringFormatter-D1_2bmqB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DghRP79b.js";import"./getScrollParent-CXN1jHN8.js";import"./VisuallyHidden-C27kR6LN.js";import"./x-BtWXvI6-.js";import"./createLucideIcon-LB-mxs_a.js";import"./useLocalizedStringFormatter-zypQ79BF.js";import"./Heading-DgSSmx57.js";import"./Button-CB3oN7z-.js";import"./Button.module-BB7N-cLd.js";import"./info-CjH_AYwV.js";import"./Popover-CjjrxHYD.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
