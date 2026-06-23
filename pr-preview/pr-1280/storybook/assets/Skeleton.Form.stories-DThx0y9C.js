import{j as e,l}from"./iframe-dvXwWV4I.js";import{S as t}from"./Skeleton-9Fa6ou9i.js";import{T as p}from"./TextField-B30GiM5L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DykLZBeG.js";import"./utils-CSQgyNi0.js";import"./FieldError-C76blMz5.js";import"./Text-CQFRG3Bv.js";import"./useFocusRing-CFfVe8sk.js";import"./index-BluzQUAG.js";import"./index-CbKl3GPI.js";import"./Text-CqtbULFE.js";import"./RSPContexts-CrUawT1P.js";import"./Form-DVwVv6S8.js";import"./Group-BV8wH11K.js";import"./Input-gYxwRStd.js";import"./Hidden-BiX0nsQm.js";import"./Button-DtMCt8o7.js";import"./useLabel-DUS9osvw.js";import"./useLabels-CR4N-lVY.js";import"./useButton-DGlHeihW.js";import"./useTextField-BkMuYRIu.js";import"./useControlledState-zKncmKHQ.js";import"./useField-oOkckiEp.js";import"./TextField.module-DdivwlC8.js";import"./Label-CtWSyj0i.js";import"./Dialog-EVYgDcS7.js";import"./OverlayArrow-C5_CppNZ.js";import"./useResizeObserver-BO4ZyoY5.js";import"./Collection-HMTWRzY6.js";import"./index-BSXZ-u45.js";import"./Separator-bA0nHXlQ.js";import"./SelectionManager-D0zL9NsZ.js";import"./useEvent-CmLc8va6.js";import"./scrollIntoView-DYF4SUsq.js";import"./SelectionIndicator-CPkYOcv2.js";import"./useDescription-DSgANlen.js";import"./ListKeyboardDelegate-CXITj8z1.js";import"./PressResponder-Dqgpfkyb.js";import"./useLocalizedStringFormatter-BZ3gM8Ke.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BK5BlJ81.js";import"./getScrollParent-Bb4tqPd4.js";import"./VisuallyHidden-DTt1NZf8.js";import"./ModalOverlay-CZPcNFjx.js";import"./x-BvR5c_PP.js";import"./createLucideIcon-Cuh90yXY.js";import"./useLocalizedStringFormatter-CE8NwZkm.js";import"./Heading-DLEaafvb.js";import"./Button-DN_kkRXq.js";import"./Button.module-BB7N-cLd.js";import"./info-awsmCqDM.js";import"./Popover-B9NynIFS.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
