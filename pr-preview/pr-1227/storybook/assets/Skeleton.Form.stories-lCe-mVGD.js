import{j as e,l}from"./iframe-_pn10Gh5.js";import{S as t}from"./Skeleton-CnuG5JqJ.js";import{T as p}from"./TextField-D0Gf-D5Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BPu1OAdE.js";import"./utils-Dxs9pDcB.js";import"./FieldError-DNAaC6mi.js";import"./Text-CTGKw8zC.js";import"./useFocusRing-Du-3sSFw.js";import"./index-Cw5lWwtj.js";import"./index-8X9ryZUF.js";import"./Text-B6_JfJRz.js";import"./RSPContexts-qi1qSqWJ.js";import"./Form-DbnAgaD0.js";import"./Group-BYgW5Zr6.js";import"./Input-BZw6JaLW.js";import"./Hidden-B59_1jQa.js";import"./Button-BbTH0gim.js";import"./useLabel-G0kMe1Tv.js";import"./useLabels-D2T-Rr0V.js";import"./useButton-C6hhINuJ.js";import"./useTextField-BvlO1Bso.js";import"./useControlledState-B3g2_X4G.js";import"./useField-BidYdbaA.js";import"./TextField.module-DdivwlC8.js";import"./Label-DBLS2Zm1.js";import"./Dialog-Cyw3U-z-.js";import"./OverlayArrow-mp8JD48b.js";import"./useResizeObserver-BWojxgN3.js";import"./Collection-D2dsY8lM.js";import"./index-Bo66yhSK.js";import"./Separator-Ba8TtDCF.js";import"./SelectionManager-4whR5RAS.js";import"./useEvent-DjkDRboI.js";import"./scrollIntoView-PAGe5JTT.js";import"./SelectionIndicator-qNnmvrpX.js";import"./useDescription-BKvd-nfd.js";import"./ListKeyboardDelegate-CQ6Tj1SL.js";import"./PressResponder-E6QiKd1a.js";import"./useLocalizedStringFormatter-BPfMaHdV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXMfGWlf.js";import"./getScrollParent-0TLzMWVN.js";import"./VisuallyHidden-DrcSE3si.js";import"./ModalOverlay-R5dlB-Nl.js";import"./x-LrHo8mCt.js";import"./createLucideIcon-B0iC-DBv.js";import"./useLocalizedStringFormatter-CE2BIbZN.js";import"./Heading-KCFO_xOa.js";import"./Button-D11fELwQ.js";import"./Button.module-BB7N-cLd.js";import"./info-Dq8wNctB.js";import"./Popover-Cd47ZjX9.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
