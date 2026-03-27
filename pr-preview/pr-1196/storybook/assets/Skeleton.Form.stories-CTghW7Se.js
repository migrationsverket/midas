import{j as e,l}from"./iframe-Csz20ARP.js";import{S as t}from"./Skeleton-Z9LNU_1B.js";import{T as p}from"./TextField-Dx3w8s-d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-tUrqmaso.js";import"./utils-CLTlmF8J.js";import"./FieldError-DCrfS5vQ.js";import"./Text-C-Hcl69m.js";import"./useFocusRing-86VLoSnj.js";import"./index-DgqWrau-.js";import"./index-8BKLnV0B.js";import"./Text--2gnQNTy.js";import"./RSPContexts-CleR7f2E.js";import"./Form-BfSRrjfS.js";import"./Group-BE_iKPcJ.js";import"./Input-D6Coi_9K.js";import"./Hidden-Be3C43tB.js";import"./Button-kUaaPtXV.js";import"./useLabel-B-St2Amk.js";import"./useLabels-ChCuyKnh.js";import"./useButton-DECUyEyv.js";import"./useTextField-DhB9rdcz.js";import"./useControlledState-C0z1d-QQ.js";import"./useField-DIH099Vh.js";import"./TextField.module-DdivwlC8.js";import"./Label-BwojbAdx.js";import"./Dialog-j5bOtoHJ.js";import"./OverlayArrow-C_GZ3LIR.js";import"./useResizeObserver-C2eKhyu0.js";import"./Collection-C1RlERD9.js";import"./index-DsHRxv5I.js";import"./Separator-B6KNmzSM.js";import"./SelectionManager-CZkyF8t-.js";import"./useEvent-BW8WGxtg.js";import"./scrollIntoView-CF0w4XnJ.js";import"./SelectionIndicator-D3inM4um.js";import"./useDescription-D_Cu_EP8.js";import"./ListKeyboardDelegate-Bqu8vzp_.js";import"./PressResponder-BLlHH-R6.js";import"./useLocalizedStringFormatter-l_-wyep1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BmeOkpPh.js";import"./getScrollParent-CETkwjQI.js";import"./VisuallyHidden-D5NA-uw_.js";import"./x-BnuAwExu.js";import"./createLucideIcon-BQ-CV6Lk.js";import"./useLocalizedStringFormatter-B7OoXNKl.js";import"./Heading-C8B2tW6e.js";import"./Button-CwrtXb_B.js";import"./Button.module-BB7N-cLd.js";import"./info-BbnZLDec.js";import"./Popover-DeSMm_kw.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
