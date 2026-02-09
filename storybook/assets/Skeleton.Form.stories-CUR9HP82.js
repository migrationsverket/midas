import{j as e,l}from"./iframe-DOXdiU66.js";import{S as t}from"./Skeleton-D0VOMXNY.js";import{T as p}from"./TextField-ikP6e-q1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-1Zk4YByE.js";import"./utils-CmnmUlXv.js";import"./TextField-EFUpt8Vy.js";import"./FieldError-DkJbgax8.js";import"./Text-gQE2jOxd.js";import"./useFocusRing-DmwdXSTO.js";import"./index-ClfAcbiY.js";import"./index-BXbJVeS4.js";import"./Text-O51bLbCJ.js";import"./RSPContexts-DC30gU2X.js";import"./Form-B7uuhRnR.js";import"./useFormValidation-DEhwRD6x.js";import"./Group-Csr0_epx.js";import"./Input-C5RdI2fK.js";import"./Hidden-TB3BoZiq.js";import"./Button-DcU_sKA3.js";import"./useLabels-j-fCOdoN.js";import"./useButton-BADRSzES.js";import"./useTextField-DRBZq_2S.js";import"./useControlledState-CJroEoWv.js";import"./useField-ByAKI2BZ.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BleqQC3f.js";import"./Dialog-B_uYMmnU.js";import"./OverlayArrow-CO3pT8NC.js";import"./useResizeObserver-C-OFc9UL.js";import"./Collection-BIazFUA_.js";import"./index-CXkiP9a7.js";import"./Separator-CJeQ8KyV.js";import"./SelectionManager-CXFNo1_J.js";import"./useEvent-D7Unhy1s.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ClV0_nCJ.js";import"./useDescription-Czop0qa_.js";import"./ListKeyboardDelegate-aan13HZ9.js";import"./PressResponder-DxkVbpjR.js";import"./useLocalizedStringFormatter-CWz_tyHY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-2rpEPmUy.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-1ky1b9n5.js";import"./Button-CXH-q602.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DslrlAyz.js";import"./createLucideIcon-CTd9hGNC.js";import"./x-CAiuwumR.js";import"./Heading-BnPWYYa9.js";import"./info-CQsqc1Md.js";import"./Popover-a6QyB0iN.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
