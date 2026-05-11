import{j as e,l}from"./iframe-BFuflVuT.js";import{S as t}from"./Skeleton-BtGCwlIP.js";import{T as p}from"./TextField-BPOvHPjh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DW3hLT0c.js";import"./utils-CVETsxUB.js";import"./FieldError-B21E2xEp.js";import"./Text-50232H9V.js";import"./useFocusRing-BGj7TLCb.js";import"./index-Brk4EwLy.js";import"./index-CJP4tsNo.js";import"./Text-Cd7qZGor.js";import"./RSPContexts-BKJ_hWyQ.js";import"./Form-_O7owz9U.js";import"./Group-DxDnkT_x.js";import"./Input-1iFcmsQM.js";import"./Hidden-CWAGeXUM.js";import"./Button-Bvi4kTfB.js";import"./useLabel-CfkHNsqd.js";import"./useLabels-Df7U7HeX.js";import"./useButton-BUsqQPGJ.js";import"./useTextField-BOeOV3eO.js";import"./useControlledState-D_V-QnC2.js";import"./useField-CmfWuk6-.js";import"./TextField.module-DdivwlC8.js";import"./Label-Btf5roma.js";import"./Dialog-HGbVhZh3.js";import"./OverlayArrow-BO59qnCj.js";import"./useResizeObserver-D2vfYUms.js";import"./Collection-DwqB045i.js";import"./index-Cx84pKcq.js";import"./Separator-CJ6jYql_.js";import"./SelectionManager-CDDOpm3X.js";import"./useEvent-qDpnqejC.js";import"./scrollIntoView-DyJWvoJg.js";import"./SelectionIndicator-C0jG9iBd.js";import"./useDescription-CL478hBZ.js";import"./ListKeyboardDelegate-DG5oTXvP.js";import"./PressResponder-BUvOU1QA.js";import"./useLocalizedStringFormatter-BAc9MzAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDwZiepJ.js";import"./getScrollParent-CJmvDIbp.js";import"./VisuallyHidden-ChouFcZQ.js";import"./ModalOverlay-Cs4VCEIj.js";import"./x-Dlq0AP5X.js";import"./createLucideIcon-CY2uueIZ.js";import"./useLocalizedStringFormatter-Cm1acgw7.js";import"./Heading-DSRT_WaZ.js";import"./Button-B_e2-Iv-.js";import"./Button.module-BB7N-cLd.js";import"./info-DR2nXUtE.js";import"./Popover-BQXWP18I.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
