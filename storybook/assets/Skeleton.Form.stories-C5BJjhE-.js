import{j as e,l}from"./iframe-BZXvBH-F.js";import{S as t}from"./Skeleton-BTOXXTwq.js";import{T as p}from"./TextField-DPVjIZ9e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DGoML-VU.js";import"./utils-D0cahHWr.js";import"./TextField-D-wF4KYX.js";import"./FieldError-BKwMNI7Z.js";import"./Text-HwH_WpJH.js";import"./useFocusRing-BIld4Qij.js";import"./index-DMx_9hj9.js";import"./index-BV9gomH3.js";import"./Text-u8_6XOdU.js";import"./RSPContexts-BaMpnc-i.js";import"./Form-ColHnssL.js";import"./useFormValidation-M8hBmAjU.js";import"./Group-CTxJC4Aa.js";import"./Input-CWtC1zMO.js";import"./Hidden-BnqtCAFp.js";import"./Button-qgUbEQ-x.js";import"./useLabels-D7ZAiJsb.js";import"./useButton-DYEcZB5q.js";import"./useTextField-DGYj0rNN.js";import"./useControlledState-92nob15h.js";import"./useField-BVbxo933.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CYllrU6o.js";import"./Dialog-BKq2z-LH.js";import"./OverlayArrow-B-8H3eeE.js";import"./useResizeObserver-DsnhC2g0.js";import"./Collection-YMyUPTpt.js";import"./index-B2buEDzq.js";import"./Separator-BDdmIhpD.js";import"./SelectionManager-CFTjhDPB.js";import"./useEvent-Ba2kTEre.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BQPW2A8r.js";import"./useDescription-yvRYLG0u.js";import"./ListKeyboardDelegate-Bt21Vwxh.js";import"./PressResponder-DahGhdou.js";import"./useLocalizedStringFormatter-CZJb1YX-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXh_qZdV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BrTCLNZ6.js";import"./Button-fGCQSPeO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMdn7775.js";import"./createLucideIcon-DZcmQE6C.js";import"./x-Wf_arxs9.js";import"./Heading-ldMWt8d7.js";import"./info-qH6Uj3qK.js";import"./Popover-BItSiT5i.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
