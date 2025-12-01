import{j as e,l}from"./iframe-DwenO7ee.js";import{S as t}from"./Skeleton-BxNEpO7F.js";import{T as d}from"./TextField-CrSx63hc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BaIGcuQW.js";import"./utils-B04QOTqX.js";import"./TextField-B1IjXvES.js";import"./FieldError-D0wasyEZ.js";import"./Text-DBlsv5Fr.js";import"./useFocusRing-DMrg0sfB.js";import"./index-xMNIBZ7U.js";import"./index-DeJVUVa5.js";import"./Text-f-cH2Nc1.js";import"./RSPContexts-BkoZaB3n.js";import"./Form-DoGAbbt1.js";import"./useFormValidation-DBCLm4XG.js";import"./Group-BjJ_ZPSq.js";import"./Input-BgmZlXxi.js";import"./Hidden-Cu6WCKNR.js";import"./Button-BweeCEHL.js";import"./useLabels-CZNC_GkZ.js";import"./useButton-BxnkwXfu.js";import"./useTextField-CK4Ym3n7.js";import"./useControlledState-BpTl-34E.js";import"./useField-xxMGL5ET.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DVTIyPKl.js";import"./Dialog-CBZJb7MW.js";import"./OverlayArrow-DTZ9SX0m.js";import"./useResizeObserver-BhOhVkDQ.js";import"./Collection-Bvnyi-n-.js";import"./index-BgBpgMa-.js";import"./Separator-DP0E3I2M.js";import"./SelectionManager-BqHINbiI.js";import"./useEvent-CHalSxnW.js";import"./scrollIntoView-mzLO5Dzu.js";import"./SelectionIndicator-B1PjTVfM.js";import"./useDescription-Bo32FiVm.js";import"./ListKeyboardDelegate-DQUPQuil.js";import"./PressResponder-BMrkwj5U.js";import"./useLocalizedStringFormatter-BmtD3KPy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CmvpSIIr.js";import"./VisuallyHidden-D6EEr8kz.js";import"./Button-B4MIMYl2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3eP5Seam.js";import"./createLucideIcon-CA6X7-no.js";import"./x-B0tZ-htC.js";import"./Heading-CYGWc5e2.js";import"./info-DscQycJS.js";import"./Popover-B8hy8FhJ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
