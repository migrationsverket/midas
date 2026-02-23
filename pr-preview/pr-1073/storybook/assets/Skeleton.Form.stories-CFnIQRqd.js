import{j as e,l}from"./iframe-xAfmlG07.js";import{S as t}from"./Skeleton-B49UWujQ.js";import{T as p}from"./TextField-B4Om7ntt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-6TGSlv_S.js";import"./utils-9cghZAOb.js";import"./FieldError-D0XPClu_.js";import"./Text-DTHVKRvi.js";import"./useFocusRing-DuURs6wG.js";import"./index-Cr2BzmUh.js";import"./index-DtXyM2b7.js";import"./Text-Dg2zxxbH.js";import"./RSPContexts-COny7Pe5.js";import"./Form-4H72jiU6.js";import"./useFormValidation-Dc5CfAEv.js";import"./Group-E2fDzHxk.js";import"./Input-C5boGjK5.js";import"./Hidden-CaQ6AcOr.js";import"./Button-_CPn_6qY.js";import"./useLabels-CuSdSuM5.js";import"./useButton-CnRE8ofO.js";import"./useTextField-Cmkxs48S.js";import"./useControlledState-B8262pyO.js";import"./useField-D592B_sa.js";import"./TextField.module-B0rcsDrm.js";import"./Label-CJ5DCym1.js";import"./Dialog-JhXE_H92.js";import"./OverlayArrow-BQzg_e_8.js";import"./useResizeObserver-C4Shs2bn.js";import"./Collection-B7cfVZ3K.js";import"./index-CRbTRMO1.js";import"./Separator-CQC-DCEi.js";import"./SelectionManager-CyVU1abT.js";import"./useEvent-juwi-LBt.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CUUhQe3s.js";import"./useDescription-BG0yfZwv.js";import"./ListKeyboardDelegate-CcmS_bQH.js";import"./PressResponder-DsrT-E5Y.js";import"./useLocalizedStringFormatter-C4Ie4IXR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwOyL9Gj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPCvzmAs.js";import"./Button-DlzyzK84.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dvc3cf-i.js";import"./createLucideIcon-xLqTy_XU.js";import"./x-DLZX4-ID.js";import"./Heading-CnWMyh0q.js";import"./info-6oHHkX08.js";import"./Popover-qRc5bSAQ.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
