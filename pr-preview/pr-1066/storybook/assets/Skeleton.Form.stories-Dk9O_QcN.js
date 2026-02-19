import{j as e,l}from"./iframe-BWxdoVbq.js";import{S as t}from"./Skeleton-Cu3ZBL_F.js";import{T as p}from"./TextField-11ZQ5sLf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Z0XICiXf.js";import"./utils-BnYb9Hw4.js";import"./FieldError-CxzGL3jS.js";import"./Text-dn5dCY6n.js";import"./useFocusRing-DPldp525.js";import"./index-DG33oO9s.js";import"./index-DTDl1n2p.js";import"./Text-DGZxErjX.js";import"./RSPContexts-Dux4Wkx7.js";import"./Form-BPid_5N5.js";import"./useFormValidation-DNc0NnIZ.js";import"./Group-Nf5xTQKI.js";import"./Input-C4YB48n9.js";import"./Hidden-Cxs9AA6g.js";import"./Button-ccQsUA8n.js";import"./useLabels-CAVv4we_.js";import"./useButton-CdcPrfen.js";import"./useTextField-DP8Mhr5R.js";import"./useControlledState-FuJuatlB.js";import"./useField-DHj-Ewwt.js";import"./TextField.module-DBQiRr7K.js";import"./Label-CLB1tHyl.js";import"./Dialog-DhP15DIK.js";import"./OverlayArrow-BY3LyeC7.js";import"./useResizeObserver-CTUsI4k8.js";import"./Collection-2_PO0O5b.js";import"./index-D_mW35hG.js";import"./Separator-CCq7NZc6.js";import"./SelectionManager-CdbwfAoN.js";import"./useEvent-y-8iBWin.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-oTm2G6Fh.js";import"./useDescription-DgM0dtj0.js";import"./ListKeyboardDelegate-DQTFuCE0.js";import"./PressResponder-B3LKxLIx.js";import"./useLocalizedStringFormatter-CqDQSu3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CC4XGFMH.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Sp8_SWOf.js";import"./Button-DObiC3sf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DEH2FHS3.js";import"./createLucideIcon-BPWVcFpY.js";import"./x-BJpOH67y.js";import"./Heading-CeJPd17r.js";import"./info-CZ3e5W5E.js";import"./Popover-Z6vSNCr_.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
