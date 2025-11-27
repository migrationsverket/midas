import{j as e,l}from"./iframe-Db2uI-3P.js";import{S as t}from"./Skeleton-BXcWPs7-.js";import{T as d}from"./TextField-Aigk1WGU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-1jPKy8_z.js";import"./utils-jUY8qSDP.js";import"./TextField-DPRf9tf-.js";import"./FieldError-4TO5MPa-.js";import"./Text-D0PoOoWm.js";import"./useFocusRing-CebZnfE_.js";import"./index-CVj3Bmq5.js";import"./index-Bysub-x3.js";import"./Text-EcRg05iA.js";import"./RSPContexts-BhzCrXR4.js";import"./Form-C-OcV_N4.js";import"./useFormValidation-D_AAXofS.js";import"./Group-CZNolnsP.js";import"./Input-Bt49EB_S.js";import"./Hidden-DjwTIE0a.js";import"./Button-DMQEpNPi.js";import"./useLabels-DN0FLkUT.js";import"./useButton-D_S8tzc1.js";import"./useTextField-Dr2UGFVi.js";import"./useControlledState-CZZXp4YV.js";import"./useField-D6ASrV9v.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Dfz3hbEd.js";import"./Dialog-CJBFiC62.js";import"./OverlayArrow-qf1Wj8PH.js";import"./useResizeObserver-BQUu9WDp.js";import"./Collection-vGTZtqDW.js";import"./index-Cd-ScXIK.js";import"./Separator-rU0mq3p8.js";import"./SelectionManager-XdgjPM_J.js";import"./useEvent-B69IVvH-.js";import"./scrollIntoView-DwOgRU02.js";import"./SelectionIndicator-BmqS678f.js";import"./useDescription-Cnit1L6t.js";import"./ListKeyboardDelegate-EGI5pkT2.js";import"./PressResponder-2G30C-xW.js";import"./useLocalizedStringFormatter-3OqgJ0pn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-rHNg365m.js";import"./VisuallyHidden-BhcBefFA.js";import"./Button-Cc1zKl5-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CXXYPB7Q.js";import"./createLucideIcon-BFgY7rx4.js";import"./x-DKfF27R2.js";import"./Heading-CcM4BiAo.js";import"./info-EmqejzV1.js";import"./Popover-D7WTKJWT.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
