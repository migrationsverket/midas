import{j as e,l}from"./iframe-BLeM1TYl.js";import{S as t}from"./Skeleton-CYBUfFup.js";import{T as d}from"./TextField-B5O3pmkj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Df4v-lF9.js";import"./utils-D0fgVb1b.js";import"./FieldError-DlB1o_kR.js";import"./Text-B1gNnLul.js";import"./useFocusRing-4Dtk05IT.js";import"./index-BTEhrLut.js";import"./index-C_6FlPHF.js";import"./Text-1bQSpdKb.js";import"./RSPContexts-B2_ECXZ0.js";import"./Form-CA6PbtqL.js";import"./useFormValidation-yTCjfPRY.js";import"./Group-BhQ_KBBP.js";import"./Input-DI2bjUK_.js";import"./Hidden--RnSCsvw.js";import"./Button-CYodFdJJ.js";import"./useLabels-C72m2YsE.js";import"./useButton-Byh70Qyk.js";import"./useTextField-BIS1QLUu.js";import"./useControlledState-BU1bA4yz.js";import"./useField-BkEz_tre.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BDUB9aP2.js";import"./Dialog-CsJbLhRC.js";import"./OverlayArrow-CxUVIxo5.js";import"./useResizeObserver-ByfwIZYt.js";import"./Collection-KmHW79mB.js";import"./index-DgumobkK.js";import"./Separator-C-ipMX97.js";import"./SelectionManager-DwZQilnE.js";import"./useEvent-MaLdhesQ.js";import"./scrollIntoView-l5DGKArg.js";import"./SelectionIndicator-Z6j-XujM.js";import"./useDescription-Crxne3OE.js";import"./ListKeyboardDelegate-C442bTnp.js";import"./PressResponder-ed23W6CK.js";import"./useLocalizedStringFormatter-DnHnQahm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-sfU_okZo.js";import"./VisuallyHidden-B6vc2diR.js";import"./useLocalizedStringFormatter-D5OW06nN.js";import"./Button-Cpp3gRTf.js";import"./Button.module-CtQ1deO8.js";import"./x-Df5oesPo.js";import"./createLucideIcon-CcGBU6Ho.js";import"./Heading-B-qyvk2C.js";import"./info-C2Cg8Glk.js";import"./Popover-Cf4EhHnc.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
