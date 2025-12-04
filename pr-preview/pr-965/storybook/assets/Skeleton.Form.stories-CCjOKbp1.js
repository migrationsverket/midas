import{j as e,l}from"./iframe-DFv6IHfp.js";import{S as t}from"./Skeleton-Burr5L2a.js";import{T as d}from"./TextField-CQxqk7e2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-iFsnv6Tl.js";import"./utils-CdweZ9b8.js";import"./TextField-JxLgVeL4.js";import"./FieldError-lQrH4ZG6.js";import"./Text-DUn2-1vf.js";import"./useFocusRing-DHeKREWZ.js";import"./index-DQr9Z14G.js";import"./index-BeE2cmwc.js";import"./Text-3gfxnPvb.js";import"./RSPContexts-VhiPY5ek.js";import"./Form-B8TtzPYO.js";import"./useFormValidation-BKYaHahd.js";import"./Group-hKReVRc6.js";import"./Input-DFY5rkId.js";import"./Hidden-CEz7ZVFR.js";import"./Button-Dw6Cj4Ep.js";import"./useLabels-M6t6KXNG.js";import"./useButton-DauDJiKf.js";import"./useTextField-Bn-D9wLY.js";import"./useControlledState-DjNdup5v.js";import"./useField-Dw1jR3Ho.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D6yULbQG.js";import"./Dialog-CeZGi9yM.js";import"./OverlayArrow-B0Oxyhh1.js";import"./useResizeObserver-BIGMGxLN.js";import"./Collection-DKTv4BFZ.js";import"./index-B0ddwGHD.js";import"./Separator-BxM7bzkQ.js";import"./SelectionManager-CKZquKcF.js";import"./useEvent-CcbF0N8H.js";import"./scrollIntoView-CW_qc0_A.js";import"./SelectionIndicator-CE2cPjaX.js";import"./useDescription-CVPZdUKx.js";import"./ListKeyboardDelegate-CSvuDe02.js";import"./PressResponder-DZiC3qqF.js";import"./useLocalizedStringFormatter-CRBwvr9e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BenZS4AC.js";import"./VisuallyHidden-Ddtdw3a8.js";import"./Button-CR2f2OCB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dap2ufNk.js";import"./createLucideIcon-DF7DR1uu.js";import"./x-ZchVGeng.js";import"./Heading-zhqqpJbx.js";import"./info-t8ZHpdYH.js";import"./Popover-Be-ct-gT.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
