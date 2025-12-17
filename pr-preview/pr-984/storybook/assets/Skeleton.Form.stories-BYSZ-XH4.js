import{j as e,l}from"./iframe-D0_uqlPy.js";import{S as t}from"./Skeleton-ClWIPZZx.js";import{T as p}from"./TextField-Cb0MhZml.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-5wCzki7C.js";import"./utils-DZkN7PAb.js";import"./TextField-CtYbKD1Q.js";import"./FieldError-DP3Y5PAe.js";import"./Text-DFiA7Wnk.js";import"./useFocusRing-Dfa_i0W6.js";import"./index-pB_UCRcv.js";import"./index-Ci7Mui0x.js";import"./Text-B1302s0A.js";import"./RSPContexts-BUqAcl8X.js";import"./Form-CNx8SPR0.js";import"./useFormValidation-CyADXFmk.js";import"./Group-kT2cow1F.js";import"./Input-CL_VNVMw.js";import"./Hidden-BjgfQNZ3.js";import"./Button-eXHb7oON.js";import"./useLabels-BQfi_YAD.js";import"./useButton-BfeAEr6h.js";import"./useTextField-Bbr-1mQq.js";import"./useControlledState-BFe0ETRm.js";import"./useField-B5VgGyIk.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D0Z4F8Ks.js";import"./Dialog-DiBznbGW.js";import"./OverlayArrow-B4wC0R2q.js";import"./useResizeObserver-RQWmM80L.js";import"./Collection-C_BTvHxS.js";import"./index-Coz5NjYT.js";import"./Separator-DLsyFjfX.js";import"./SelectionManager-ByuLsODz.js";import"./useEvent-Dv95vs0d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cm3iGR2n.js";import"./useDescription-DI1OzZGu.js";import"./ListKeyboardDelegate-BLIzedj1.js";import"./PressResponder-BQDDDopb.js";import"./useLocalizedStringFormatter-D3uc4cjF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CRLd56QW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D7lPxREE.js";import"./Button-DymjvzeZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgmTFAS9.js";import"./createLucideIcon-Ciz_2pai.js";import"./x-COQunIjs.js";import"./Heading-CoR4_Cl-.js";import"./info-Bj3iqnwS.js";import"./Popover-zIVlmckn.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
