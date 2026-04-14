import{j as e,l}from"./iframe-CUSvXe23.js";import{S as t}from"./Skeleton-CY14DHBP.js";import{T as p}from"./TextField-CQBgubjx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B2RSAUdS.js";import"./utils-CkRXDuX-.js";import"./FieldError-t8sTtSNx.js";import"./Text-DLWDclOW.js";import"./useFocusRing-BuJn1tRD.js";import"./index-BjoHnV1_.js";import"./index-CdztG2Xx.js";import"./Text-NxTN73uc.js";import"./RSPContexts-BfFZIYKm.js";import"./Form-CKmcwWsP.js";import"./Group-CLc-S5J5.js";import"./Input-Bh5XjTjP.js";import"./Hidden-Dhsax2Cn.js";import"./Button-C1-Re332.js";import"./useLabel-ulwKDPvJ.js";import"./useLabels-BPCgaUFa.js";import"./useButton-BO5Zhbxe.js";import"./useTextField-BO4SPiFd.js";import"./useControlledState-BDwJH1MB.js";import"./useField-Bd0xb1Jz.js";import"./TextField.module-DdivwlC8.js";import"./Label-P4rLu63J.js";import"./Dialog-WiQnBmSv.js";import"./OverlayArrow-B9pAfRtR.js";import"./useResizeObserver-YHez26s-.js";import"./Collection-DVKXIiRM.js";import"./index-BpgVI4Ey.js";import"./Separator-BI_16oCX.js";import"./SelectionManager-DsrNbEuz.js";import"./useEvent-DjixHLjK.js";import"./scrollIntoView-CjSFcs3B.js";import"./SelectionIndicator-BsHKQOI6.js";import"./useDescription-CSzbO1wx.js";import"./ListKeyboardDelegate--p1TIPpF.js";import"./PressResponder-ZnJokgKw.js";import"./useLocalizedStringFormatter-CQWvwsyX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9OdcW6fl.js";import"./getScrollParent-DO1MdHqq.js";import"./VisuallyHidden-YrO2RMP0.js";import"./Modal-BSelldcL.js";import"./x-W7_jPxcF.js";import"./createLucideIcon-Ce9oZthD.js";import"./useLocalizedStringFormatter-DOZj6KI_.js";import"./Heading-CG9en55N.js";import"./Button-ricz7KuE.js";import"./Button.module-BB7N-cLd.js";import"./info-CwlJQaKh.js";import"./Popover-CUncdCgl.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
