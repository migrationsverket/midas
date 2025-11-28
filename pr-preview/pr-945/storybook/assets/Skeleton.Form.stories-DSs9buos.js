import{j as e,l}from"./iframe-Bu_0PVym.js";import{S as t}from"./Skeleton-kWptciIx.js";import{T as d}from"./TextField-IAOpZuO1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DiH3cxh0.js";import"./utils-BIbh9FXc.js";import"./TextField-BFTA9Z4K.js";import"./FieldError-D_EEMj73.js";import"./Text-BYC8Q8vx.js";import"./useFocusRing-Dpo6Rp6r.js";import"./index-CFkxhmdC.js";import"./index-DpdlitPn.js";import"./Text-CcT2CHdP.js";import"./RSPContexts-Dlhq9Mwl.js";import"./Form-BWtruAcl.js";import"./useFormValidation-Do08Woe8.js";import"./Group-BVHP5blr.js";import"./Input-D2D0KvCM.js";import"./Hidden-qOIDITa6.js";import"./Button-axDS0fX7.js";import"./useLabels-D-wdi6sm.js";import"./useButton-DnFz0C4G.js";import"./useTextField-Dpc0C8xh.js";import"./useControlledState-DhxqLuUq.js";import"./useField-whxRNlwi.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DXx8a84e.js";import"./Dialog-DCDJBOxd.js";import"./OverlayArrow-BCdGaPI4.js";import"./useResizeObserver-CTdgS_BL.js";import"./Collection-DyYagCuz.js";import"./index-B4MMZpXP.js";import"./Separator-C0vHjDka.js";import"./SelectionManager-CDRyyz4I.js";import"./useEvent-CkXPWDzi.js";import"./scrollIntoView-CmL5QW7o.js";import"./SelectionIndicator-CeBKB-1C.js";import"./useDescription-CzNL1T7g.js";import"./ListKeyboardDelegate-nj8dmpTs.js";import"./PressResponder-32R9ejHz.js";import"./useLocalizedStringFormatter-Drm1wbnq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQAysRqG.js";import"./VisuallyHidden-BhEPxKK7.js";import"./Button-xsqQqkQ4.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bso3J__i.js";import"./createLucideIcon-DsJW-Utu.js";import"./x-BodD-7oO.js";import"./Heading-DbU8QRcB.js";import"./info-CccpeiCo.js";import"./Popover-D93ecue1.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
