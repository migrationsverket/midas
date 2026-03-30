import{j as e,l}from"./iframe-BaglzexA.js";import{S as t}from"./Skeleton-B5yMnEd5.js";import{T as p}from"./TextField-Yem5TDX7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ck4tRV3E.js";import"./utils-BRuvLXhr.js";import"./FieldError-Cz0FB3Ou.js";import"./Text-BjRotHGw.js";import"./useFocusRing-o2chUIJx.js";import"./index-BDFHFH_G.js";import"./index-B5KTxMw4.js";import"./Text-BUo0m_vR.js";import"./RSPContexts-DSk9wo8I.js";import"./Form-CwjgsrTS.js";import"./Group-Btv4E8l0.js";import"./Input-LqZkovno.js";import"./Hidden-DtQ8Bocl.js";import"./Button-4C6qbeHh.js";import"./useLabel-DPVf23Bi.js";import"./useLabels-BQSacZGu.js";import"./useButton-CAOCdVrC.js";import"./useTextField-CFey5b7_.js";import"./useControlledState-j7ZeGh6U.js";import"./useField-DapuPCPx.js";import"./TextField.module-DdivwlC8.js";import"./Label-BwgB2hF2.js";import"./Dialog-BFiPtzBQ.js";import"./OverlayArrow-BwahUPd-.js";import"./useResizeObserver-BSs5ZcWP.js";import"./Collection-BIZjTEAj.js";import"./index-Bz3DfuhG.js";import"./Separator-BvcQ88ZL.js";import"./SelectionManager-CTXZtEtC.js";import"./useEvent-DiuOeyiB.js";import"./scrollIntoView-CZ_G2l1H.js";import"./SelectionIndicator-BQq5n1jJ.js";import"./useDescription-DGnmrtwz.js";import"./ListKeyboardDelegate-CYhD2eFx.js";import"./PressResponder-BPdNUnDb.js";import"./useLocalizedStringFormatter-CA4tuOSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BiW8wGFg.js";import"./getScrollParent-VIhewieb.js";import"./VisuallyHidden--A_wY8k-.js";import"./x-B7iLIw8y.js";import"./createLucideIcon-B0HwbXf8.js";import"./useLocalizedStringFormatter-DzzpmN-7.js";import"./Heading-CgwcTn9c.js";import"./Button-DEzldRuR.js";import"./Button.module-BB7N-cLd.js";import"./info-LMX08hMO.js";import"./Popover-dFMyhuRz.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
