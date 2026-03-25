import{j as e,l}from"./iframe-DH698doG.js";import{S as t}from"./Skeleton-Br_JdEfJ.js";import{T as d}from"./TextField-BOJa9xAL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BPPZKQQP.js";import"./utils-mVgYYLB3.js";import"./FieldError-LfuFvrGD.js";import"./Text-wTeCM58U.js";import"./useFocusRing-BGlk11Cg.js";import"./index-DMd-E98X.js";import"./index-DdbUDU8H.js";import"./Text-B6-Pmcz8.js";import"./RSPContexts-BEJaOB8S.js";import"./Form-CD59Qj0z.js";import"./Group-CUa0FXuH.js";import"./Input-lk79nvOO.js";import"./Hidden-lMTjRszI.js";import"./Button-BtUst4AR.js";import"./useLabels-D0yThyi4.js";import"./useButton-D9Hw2-4l.js";import"./useTextField-Br6ZModO.js";import"./useControlledState-BAbuv76Z.js";import"./useField-m9aJz28J.js";import"./TextField.module-DdivwlC8.js";import"./Label-DEUAop5w.js";import"./Dialog-Dwlb0BKu.js";import"./OverlayArrow-BwPtn9BW.js";import"./useResizeObserver-DLoR0yUN.js";import"./Collection-B4bQsR1B.js";import"./index-Cbw_85Vk.js";import"./Separator-BD7iRYR4.js";import"./SelectionManager-tXc53_-F.js";import"./useEvent-CBcHK6bo.js";import"./scrollIntoView-j5v68fUZ.js";import"./SelectionIndicator-DP_4UPJ9.js";import"./useDescription-DRxPyHbI.js";import"./ListKeyboardDelegate-CNPYY1Nf.js";import"./PressResponder-CZI9FFe2.js";import"./useLocalizedStringFormatter-GBxrcPr6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkMlMP0_.js";import"./getScrollParent-3lUfZO39.js";import"./VisuallyHidden-C_koxuPK.js";import"./x-Cpk9L1c7.js";import"./createLucideIcon-CRaNdiYT.js";import"./useLocalizedStringFormatter-BLVqg3Su.js";import"./Heading-Cxf6klKK.js";import"./Button-D64pEHkS.js";import"./Button.module-BB7N-cLd.js";import"./info-DQ99ruZr.js";import"./Popover-C0mBQW6V.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
