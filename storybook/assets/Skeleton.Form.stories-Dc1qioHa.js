import{j as e,l}from"./iframe-CmqPL-ve.js";import{S as t}from"./Skeleton-C1rZWtyb.js";import{T as p}from"./TextField-BnZ4IcO4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DGYOgve2.js";import"./utils-SAP-OCBT.js";import"./FieldError-6cTdJ_Za.js";import"./Text-DLxMYZ1_.js";import"./useFocusRing-C_UBzR4Z.js";import"./index-D6miHDB-.js";import"./index-BBGo7RoQ.js";import"./Text-9ERWHN0X.js";import"./RSPContexts-DTDiXTQC.js";import"./Form-UFmVR2TZ.js";import"./useFormValidation-DGYf2tyw.js";import"./Group-BVRVYyWF.js";import"./Input-BMVQCdA_.js";import"./Hidden-C_mQN8s6.js";import"./Button-9NJzBnLU.js";import"./useLabels-Bi-sZgxK.js";import"./useButton-CQub_DYW.js";import"./useTextField--OhJxVk7.js";import"./useControlledState-DSdzAD24.js";import"./useField-CWYy_yBm.js";import"./TextField.module-DdivwlC8.js";import"./Label-DTYKLJxN.js";import"./Dialog-CfXx2jdx.js";import"./OverlayArrow-CK7-NbF3.js";import"./useResizeObserver-tlSJCFh2.js";import"./Collection-CbwnshHz.js";import"./index-CcIX9qGq.js";import"./Separator-C_s5EcvH.js";import"./SelectionManager-K9TuEgi2.js";import"./useEvent-BjnpXFvw.js";import"./scrollIntoView-BTl5uiXp.js";import"./SelectionIndicator-D2u8hlxM.js";import"./useDescription-Sr7ZTB4e.js";import"./ListKeyboardDelegate-IMmnH6-v.js";import"./PressResponder-BStAFXGT.js";import"./useLocalizedStringFormatter-B-4EZhTm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8hJp2sM.js";import"./getScrollParent-B2JBaajl.js";import"./VisuallyHidden-DSb_BfCD.js";import"./x-B30kXvjA.js";import"./createLucideIcon-s6c-d0_0.js";import"./useLocalizedStringFormatter-BKe91JX1.js";import"./Heading-DirSBg-B.js";import"./Button-M655P-gZ.js";import"./Button.module-D_C6WeTN.js";import"./info-C8ko8gSe.js";import"./Popover-t8i18mpV.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
