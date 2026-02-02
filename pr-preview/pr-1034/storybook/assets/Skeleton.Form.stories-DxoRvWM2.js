import{j as e,l}from"./iframe-BQxOfzlW.js";import{S as t}from"./Skeleton-DdOkvyal.js";import{T as p}from"./TextField-BcJBJ6dZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DjlRQNcP.js";import"./utils-BXBr2vrV.js";import"./TextField-DwCbbJNa.js";import"./FieldError-dlUiDVEq.js";import"./Text-BZHSWyDa.js";import"./useFocusRing-DQFHtdEB.js";import"./index-DYsqMbTI.js";import"./index-D95GD9Yp.js";import"./Text-XBZd4_As.js";import"./RSPContexts-CmlY3_rm.js";import"./Form-B5GBoHi2.js";import"./useFormValidation-BXrbXpbC.js";import"./Group-BOJK8WHb.js";import"./Input-DISCksiO.js";import"./Hidden-VLZyivb1.js";import"./Button-B8qi-92i.js";import"./useLabels-zI525H0W.js";import"./useButton-C-Vp9A3A.js";import"./useTextField-ChC9H0-F.js";import"./useControlledState-DfXJmpIS.js";import"./useField-CuahQc0k.js";import"./TextField.module-DpzeWGpt.js";import"./Label-ClE-JV3D.js";import"./Dialog-Cj_T0WXP.js";import"./OverlayArrow-D1Pp5Xhu.js";import"./useResizeObserver-C39eOITL.js";import"./Collection-Dke8_xmQ.js";import"./index-BD-gBNV-.js";import"./Separator-CTPbjBqP.js";import"./SelectionManager-DFqTi-k6.js";import"./useEvent-BAia882S.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CrAjeEEw.js";import"./useDescription-n_gbERc3.js";import"./ListKeyboardDelegate-Cp2cso8X.js";import"./PressResponder-BcP4Iafh.js";import"./useLocalizedStringFormatter-CK8fZOyp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DeMivh_6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Sl6NNMXK.js";import"./Button-BPwMgPSD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_higiKm.js";import"./createLucideIcon-5RmQ-8qX.js";import"./x-IcEcso0D.js";import"./Heading-Cjc1je68.js";import"./info-fBLj6L9n.js";import"./Popover-DyF-XfFL.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
