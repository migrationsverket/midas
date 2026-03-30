import{j as e,l}from"./iframe-DOVonus9.js";import{S as t}from"./Skeleton-_283dUJk.js";import{T as p}from"./TextField-BDWHn1LW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CePdXRgv.js";import"./utils-DhPCiJLe.js";import"./FieldError-B2DyCZVK.js";import"./Text-DFd043ah.js";import"./useFocusRing-DFqQelvs.js";import"./index-BXLzhsHf.js";import"./index-DynpYPKw.js";import"./Text-DX6xJkbU.js";import"./RSPContexts-D5KAyYge.js";import"./Form-BdbgD7B8.js";import"./Group-BM_cRr_-.js";import"./Input-CBiXTxlk.js";import"./Hidden-DMUfuflC.js";import"./Button-Cz99NuPN.js";import"./useLabel-CFmo7f_1.js";import"./useLabels-DhmD3WfL.js";import"./useButton-DPc7CUXt.js";import"./useTextField-1111KJFc.js";import"./useControlledState-BPaR75DG.js";import"./useField-D5iM5mrG.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cn6YwaPb.js";import"./Dialog-BRBTPND3.js";import"./OverlayArrow-BMwt-_W_.js";import"./useResizeObserver-Dtt_9W_T.js";import"./Collection-CVMDa6-Z.js";import"./index-sXvwZxO2.js";import"./Separator-DRnungOr.js";import"./SelectionManager-T2xaAnck.js";import"./useEvent-Cvp587Nb.js";import"./scrollIntoView-BxQ_AVGt.js";import"./SelectionIndicator-QWLR05h-.js";import"./useDescription-B5o5KaGQ.js";import"./ListKeyboardDelegate-B3Lsr7h9.js";import"./PressResponder-LBvTNPtN.js";import"./useLocalizedStringFormatter-MwIKQJtH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DHfUSsMm.js";import"./getScrollParent-UWeFGnXQ.js";import"./VisuallyHidden-BveXVc2Y.js";import"./x-BOgOzpuz.js";import"./createLucideIcon-CfE47YAu.js";import"./useLocalizedStringFormatter-zR7_kec3.js";import"./Heading-DhCif57Z.js";import"./Button-BMOShfgc.js";import"./Button.module-BB7N-cLd.js";import"./info-CVtoHCuf.js";import"./Popover-BoxV4OyD.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
