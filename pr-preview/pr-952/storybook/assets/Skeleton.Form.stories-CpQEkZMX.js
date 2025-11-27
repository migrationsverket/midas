import{j as e,l}from"./iframe-WZjYUZug.js";import{S as t}from"./Skeleton-rsusKV1A.js";import{T as d}from"./TextField-BouGynr5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B2y_2okj.js";import"./utils-41IgFTt3.js";import"./TextField-v2Lx0a7i.js";import"./FieldError-8QYALo9Q.js";import"./Text-CD5L3NGu.js";import"./useFocusRing-BhLet_pE.js";import"./index-DE2S3xCs.js";import"./index-bZw2_QEe.js";import"./Text-CbC6PGTn.js";import"./RSPContexts-BeSw2lJx.js";import"./Form-58Avexl9.js";import"./useFormValidation-DSN2a0x4.js";import"./Group-DlII4j6u.js";import"./Input-CcMI8fuT.js";import"./Hidden-DM5r5VXO.js";import"./Button-ELQey9_7.js";import"./useLabels-Db4OJvCS.js";import"./useButton-DnSOK5iD.js";import"./useTextField-BZ6s1Euv.js";import"./useControlledState-Dmj__v8P.js";import"./useField-ChkA15T1.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B8z2bN0U.js";import"./Dialog-CO7lnnxU.js";import"./OverlayArrow-KtlUpSfm.js";import"./useResizeObserver-Cb48ibZ7.js";import"./Collection-DogVQ-m1.js";import"./index-Brnm5fDl.js";import"./Separator-Z1h7D3F8.js";import"./SelectionManager-CmoSNFsK.js";import"./useEvent-zWCVMw-y.js";import"./scrollIntoView-CfUOfy0t.js";import"./SelectionIndicator-C6Cfr3z4.js";import"./useDescription-DmU-x1Sy.js";import"./ListKeyboardDelegate-BJUOpd50.js";import"./PressResponder-BAsdqq2D.js";import"./useLocalizedStringFormatter-BzhYOgrj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BrRm6VkK.js";import"./VisuallyHidden-y2k8W_sW.js";import"./Button-CADr4mbo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BxtrdjQp.js";import"./createLucideIcon-7p7juL6_.js";import"./x-Cv2ylPsy.js";import"./Heading-DM4-bJBc.js";import"./info-tyKdpEBP.js";import"./Popover--Ji-kmTf.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
