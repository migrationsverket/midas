import{j as e,l}from"./iframe-BGyjMY2A.js";import{S as t}from"./Skeleton-DP10kY5U.js";import{T as p}from"./TextField-CcpNwvEC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BK4dyzpK.js";import"./utils-CTEL-aPn.js";import"./TextField-C2ByGG_v.js";import"./FieldError-B1WUXMvL.js";import"./Text-yiC38_9n.js";import"./useFocusRing-Qz5ydHqq.js";import"./index-BSnPUmLp.js";import"./index-CExSyphq.js";import"./Text-ZEUEevv6.js";import"./RSPContexts-DcfdI7Bu.js";import"./Form-BgNO24kW.js";import"./useFormValidation-CatHWqP6.js";import"./Group-C4GRa7Vz.js";import"./Input-BKH-tWXH.js";import"./Hidden-7YyYTdjK.js";import"./Button-DI8VxDKE.js";import"./useLabels-BKJWTw5n.js";import"./useButton-Cgw_GPMG.js";import"./useTextField-CS7pAb_c.js";import"./useControlledState-tPA4VUhi.js";import"./useField-BU525k87.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CAG2bXHf.js";import"./Dialog-oeGtedrh.js";import"./OverlayArrow-C3Djjy-R.js";import"./useResizeObserver-4-qSZuBz.js";import"./Collection-K_Rojnh4.js";import"./index-CfzByka8.js";import"./Separator-BKNSwlgI.js";import"./SelectionManager-8OCXfYv4.js";import"./useEvent-ERybvefB.js";import"./scrollIntoView-BWfcBpus.js";import"./SelectionIndicator-3VQJzvPK.js";import"./useDescription-Cn9clWz2.js";import"./ListKeyboardDelegate-BbYHlOOG.js";import"./PressResponder-Cmm_PXKw.js";import"./useLocalizedStringFormatter-CHCXaTKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Cml6bqId.js";import"./VisuallyHidden-CeB8DNep.js";import"./Button-DoINo-pg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-_mvD30RP.js";import"./createLucideIcon-Dt69t0iG.js";import"./x-o3LNZlJS.js";import"./Heading-CIYG4bW9.js";import"./info-CymFzWAt.js";import"./Popover-D6XACcMx.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
