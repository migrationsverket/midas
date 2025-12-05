import{j as e,l}from"./iframe-Duvzi_mO.js";import{S as t}from"./Skeleton-BKRQ2Pmp.js";import{T as d}from"./TextField-D7N8zzqr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CfZkajY9.js";import"./utils-DXbn0oqq.js";import"./TextField-Cmxw3_Ih.js";import"./FieldError-KymSBWrt.js";import"./Text--15STIft.js";import"./useFocusRing--hZOMB0E.js";import"./index-D5Xrr1Vj.js";import"./index-C3jNp5eG.js";import"./Text-B2Au3uTF.js";import"./RSPContexts-DD0p7Dx-.js";import"./Form-BNxCnv7m.js";import"./useFormValidation-Dyub27PJ.js";import"./Group-SQOlcb54.js";import"./Input-fgPw_9lK.js";import"./Hidden-Cj6eSEvr.js";import"./Button-DEGU7aUv.js";import"./useLabels-D1kjihVB.js";import"./useButton-DiocC29F.js";import"./useTextField-D7mbQ9lJ.js";import"./useControlledState-DUm4m-rZ.js";import"./useField-CXIum541.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B_j0zLgj.js";import"./Dialog-yEDAbKl5.js";import"./OverlayArrow-DkyzPOpF.js";import"./useResizeObserver-CoTKjDz1.js";import"./Collection-D7bZwKND.js";import"./index-QULG0cx_.js";import"./Separator-DwD2mKZu.js";import"./SelectionManager-CHE_IsgN.js";import"./useEvent-C1kRtpn3.js";import"./scrollIntoView-CoN4CEq9.js";import"./SelectionIndicator-BrZdy_PU.js";import"./useDescription-hfMxyp8f.js";import"./ListKeyboardDelegate-CxFnV7s1.js";import"./PressResponder-BvLGxz5i.js";import"./useLocalizedStringFormatter-BU47f0l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dn_cR8X0.js";import"./VisuallyHidden-DFNT7U81.js";import"./Button-agFIfSf8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJvV6lOf.js";import"./createLucideIcon-Pkzd9K88.js";import"./x-BUjRGG1p.js";import"./Heading-DxyAYdrG.js";import"./info-DO9Ya7qW.js";import"./Popover-BRL_o9DX.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
