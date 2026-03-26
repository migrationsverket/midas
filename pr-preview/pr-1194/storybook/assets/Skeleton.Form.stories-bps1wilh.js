import{j as e,l}from"./iframe-DCTfXxhU.js";import{S as t}from"./Skeleton-Ks9LPKHR.js";import{T as p}from"./TextField-BxroWKLp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CpAKqWVt.js";import"./utils-nW_xli8K.js";import"./FieldError-CjtBgxrO.js";import"./Text-5UTT66SL.js";import"./useFocusRing-DkB_y7Fd.js";import"./index-mul5IfuL.js";import"./index-oL1NoEtf.js";import"./Text-Caoun6Yq.js";import"./RSPContexts-C4YWDn84.js";import"./Form-B53GEl8m.js";import"./Group-CQg2sBSK.js";import"./Input-BD-aNJo6.js";import"./Hidden-Dz79xEs9.js";import"./Button-CFGQLTfC.js";import"./useLabel-5AB1LZK2.js";import"./useLabels-DDnu_dmS.js";import"./useButton-Dit7Lb_r.js";import"./useTextField-Ce7gwFy5.js";import"./useControlledState-2cB3sfef.js";import"./useField-cahVHmCN.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cvx-nJAP.js";import"./Dialog-3cUYIf5e.js";import"./OverlayArrow-DVHWQDca.js";import"./useResizeObserver-t3Iz6Tve.js";import"./Collection-MVAFJtKF.js";import"./index-DhAt9fxo.js";import"./Separator-CXS7e2fM.js";import"./SelectionManager-Q5KiZ2oK.js";import"./useEvent-OuWmKtZ0.js";import"./scrollIntoView-B6roOr1g.js";import"./SelectionIndicator-CNpscESu.js";import"./useDescription-DDe33wr-.js";import"./ListKeyboardDelegate-DB5YzvGd.js";import"./PressResponder-DPD-HP0o.js";import"./useLocalizedStringFormatter-CXqAKE2A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-XKPbh1bn.js";import"./getScrollParent-DwM-DNDW.js";import"./VisuallyHidden-BmJc66Gc.js";import"./x-DKEdZNvx.js";import"./createLucideIcon-2FpY4XeI.js";import"./useLocalizedStringFormatter-D6vCsR43.js";import"./Heading-SRtQzMK0.js";import"./Button-9AP9GDtE.js";import"./Button.module-BB7N-cLd.js";import"./info-DxAoRSCF.js";import"./Popover-BYRFfDR8.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
