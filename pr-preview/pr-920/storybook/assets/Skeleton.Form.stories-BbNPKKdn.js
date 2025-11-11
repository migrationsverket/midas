import{j as e,l}from"./iframe-9CWn0dLe.js";import{S as t}from"./Skeleton-BiDBpBhO.js";import{T as d}from"./TextField-Sn6ItMPa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C_Ry1Pce.js";import"./utils-CuV_iOgg.js";import"./FieldError-Di2SbmV3.js";import"./Text-An75_Zxb.js";import"./useFocusRing-B85yjLqW.js";import"./index-ChHL_39O.js";import"./index-CgCHr7e4.js";import"./Text-6xl2iDhz.js";import"./RSPContexts-CQWVYSX6.js";import"./Form-Da9UzTs3.js";import"./useFormValidation-BUlR97HX.js";import"./Group-0-wkZXPw.js";import"./Input-CQCWXJWi.js";import"./Hidden-CvOu_WHO.js";import"./Button-BJGIOWWr.js";import"./useLabels-C0HlmxZK.js";import"./useButton-mlyjrjfq.js";import"./useTextField-CnplTrXK.js";import"./useControlledState-By_9HlDg.js";import"./useField-PXa-6i87.js";import"./TextField.module-DGUQcbB9.js";import"./Label-DGYWwJtJ.js";import"./Dialog-BJ2MeQOQ.js";import"./OverlayArrow-bxIZebWS.js";import"./useResizeObserver-PH-IxUTk.js";import"./Collection-ePlYcQKq.js";import"./index-C-xxmmib.js";import"./Separator-KzObLJty.js";import"./SelectionManager-C8W5GKFX.js";import"./useEvent-DpugV3Z6.js";import"./scrollIntoView-DTq6YPeW.js";import"./SelectionIndicator-DpMBJUXd.js";import"./useDescription-CN24XJha.js";import"./ListKeyboardDelegate-Duo-3o3m.js";import"./PressResponder-BW7ag9Kf.js";import"./useLocalizedStringFormatter-CncNPno2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Tyo35a9C.js";import"./VisuallyHidden-D1VOR-Jq.js";import"./useLocalizedStringFormatter-B9S3QxzQ.js";import"./Button-CujSre3v.js";import"./Button.module-CtQ1deO8.js";import"./x-COAiMCC9.js";import"./createLucideIcon-B5h6e8RU.js";import"./Heading-C2p66HiZ.js";import"./info-DEJfDtn5.js";import"./Popover-DQb54w-o.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
