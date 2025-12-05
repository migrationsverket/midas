import{j as e,l}from"./iframe-cjgaQTbV.js";import{S as t}from"./Skeleton-DJNaS_NG.js";import{T as p}from"./TextField-Dd5bvnhS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dbxlm4Gy.js";import"./utils-B7obR6Um.js";import"./TextField-BXa4bwxk.js";import"./FieldError-DSvxWesv.js";import"./Text-DzSej0my.js";import"./useFocusRing-tZdXTMa6.js";import"./index-CMBZFI91.js";import"./index-BuJptDJm.js";import"./Text-BAi7lGpW.js";import"./RSPContexts-__dCJUmR.js";import"./Form-BO_uRoUS.js";import"./useFormValidation-B16qkoBX.js";import"./Group-BhYG2Itl.js";import"./Input-DivuSL8L.js";import"./Hidden-BNDGTdgg.js";import"./Button-Bc8n5vPI.js";import"./useLabels-_lpRaq5N.js";import"./useButton-CJbE9EUu.js";import"./useTextField-DoqngYPp.js";import"./useControlledState-fnpb4ApR.js";import"./useField-BZOCOk0a.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CuBawSra.js";import"./Dialog-BsLWpUMD.js";import"./OverlayArrow-tYVmOJei.js";import"./useResizeObserver-Br0kjitw.js";import"./Collection-nVug7_BD.js";import"./index-CpszQrPg.js";import"./Separator-BFF7Ylml.js";import"./SelectionManager-CZ8Ui-y-.js";import"./useEvent-D2p3mPWR.js";import"./scrollIntoView-DfJRvT_I.js";import"./SelectionIndicator-Dcikiw-2.js";import"./useDescription-DoEqjAMH.js";import"./ListKeyboardDelegate-CEa8y7i2.js";import"./PressResponder-5EseZFBi.js";import"./useLocalizedStringFormatter-Bja4yra-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQLmtl1X.js";import"./VisuallyHidden-DFAX4X2F.js";import"./Button-CJqsJHUi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhHkNnmO.js";import"./createLucideIcon-B-E7-HZJ.js";import"./x-DPDdbP7_.js";import"./Heading-T_2JYl4t.js";import"./info-CNh9d9md.js";import"./Popover-B4wTK_E3.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
