import{j as e,l}from"./iframe-BKHIzrax.js";import{S as t}from"./Skeleton-CahVTsXF.js";import{T as p}from"./TextField-0TDmmJmS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DEvv6Ksk.js";import"./utils-eagGX55s.js";import"./TextField-DlmYIqu-.js";import"./FieldError-B8rlzmnF.js";import"./Text-BZIVr77b.js";import"./useFocusRing-BQi4GTJZ.js";import"./index-DeiSO1eR.js";import"./index-BURsRzrN.js";import"./Text-B6QRIKA2.js";import"./RSPContexts-DS-_QmkS.js";import"./Form-D2sIDUA1.js";import"./useFormValidation-CNp4vzeH.js";import"./Group-K68NtRn1.js";import"./Input-BNVQYdtm.js";import"./Hidden-Uuem72q2.js";import"./Button-tJyCLzUT.js";import"./useLabels-BY9SCAZ0.js";import"./useButton-BjW1xepF.js";import"./useTextField-DEC9_X6m.js";import"./useControlledState-jVzV3VRN.js";import"./useField-D9QQBjQ_.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-7cbOcuHc.js";import"./Dialog-D5wFmQjH.js";import"./OverlayArrow-Cu3oOdi4.js";import"./useResizeObserver-BfzC8zUj.js";import"./Collection-C5_ZdiZt.js";import"./index-COWepd4V.js";import"./Separator-CncNXzq1.js";import"./SelectionManager-_wwg4auy.js";import"./useEvent-BTVfo0Ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Druru6wY.js";import"./useDescription-DorK6SQb.js";import"./ListKeyboardDelegate-BMd2ah3Z.js";import"./PressResponder-B7PbC8v_.js";import"./useLocalizedStringFormatter-B5xALe7F.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDc4qkpT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C3Qtj23X.js";import"./Button-D46_7az7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUZW3yS9.js";import"./createLucideIcon-DDmRbHsv.js";import"./x-CCKzm0I8.js";import"./Heading-DQMX8xDh.js";import"./info-WG-ufg32.js";import"./Popover-CRgmKirH.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
