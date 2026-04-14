import{j as e,l}from"./iframe-DgC-Ldrx.js";import{S as t}from"./Skeleton-1hfaE2D5.js";import{T as p}from"./TextField-CLt9rWX8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BJB2M41P.js";import"./utils-BUpv-0tc.js";import"./FieldError-DZZcZZwp.js";import"./Text-DBf5U8p7.js";import"./useFocusRing-dqGFuQw5.js";import"./index-N9gKTxLp.js";import"./index-Dh-_B1o5.js";import"./Text-FIGzZLpV.js";import"./RSPContexts-CrNZT_wF.js";import"./Form-ynRyQGu4.js";import"./Group-8NEZM85t.js";import"./Input-DJXDnrG2.js";import"./Hidden-B6xJ_9IQ.js";import"./Button-eOYMOt-9.js";import"./useLabel-BjQqLo5U.js";import"./useLabels-DdUViYlU.js";import"./useButton-D1S_DcDn.js";import"./useTextField-CdmC9FlC.js";import"./useControlledState-9EeHrS1X.js";import"./useField-DStHgBoo.js";import"./TextField.module-DdivwlC8.js";import"./Label-DHcZZoo-.js";import"./Dialog-CguZjSDk.js";import"./OverlayArrow-XS7PvNLo.js";import"./useResizeObserver-4DgrDvSQ.js";import"./Collection-DeYQIrew.js";import"./index-BYtlB0jv.js";import"./Separator-8PVCgcBg.js";import"./SelectionManager-wmppj9Sm.js";import"./useEvent-CzHW2e8Z.js";import"./scrollIntoView-DEmmCe3n.js";import"./SelectionIndicator-DEwQOY4-.js";import"./useDescription-DelY62ZZ.js";import"./ListKeyboardDelegate-CMZUMn_O.js";import"./PressResponder-LDZhHItX.js";import"./useLocalizedStringFormatter-Cy9GHfDn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ck2eMurq.js";import"./getScrollParent-DXMGajJM.js";import"./VisuallyHidden-CY4Z8bfN.js";import"./ModalOverlay-CmqOTaTF.js";import"./x-6ABgZAjN.js";import"./createLucideIcon-Dct_wYt8.js";import"./useLocalizedStringFormatter-CU_Lgw4A.js";import"./Heading-CTr8HC6y.js";import"./Button-C6c-eprm.js";import"./Button.module-BB7N-cLd.js";import"./info-B3wi8LVA.js";import"./Popover-D0BYdOfi.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
