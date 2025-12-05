import{j as e,l}from"./iframe-EvAXEFMI.js";import{S as t}from"./Skeleton-6SDrzKst.js";import{T as d}from"./TextField-DXhj3Rz-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D4ri3mUJ.js";import"./utils-CxbI4lJ8.js";import"./TextField-CFUOlGCT.js";import"./FieldError-BYwZNEs3.js";import"./Text-C1bk4Rmu.js";import"./useFocusRing-DfVRu85N.js";import"./index-BERR-sy9.js";import"./index-5Nx_3vzb.js";import"./Text-CAHlbO0E.js";import"./RSPContexts-79mGs6IV.js";import"./Form-C9aUt5Bh.js";import"./useFormValidation-CNd9s6u-.js";import"./Group-DG4QDBgu.js";import"./Input-Dm9Z5Owb.js";import"./Hidden-DF-gcxja.js";import"./Button-CoUp-4SO.js";import"./useLabels-CcKLbZF9.js";import"./useButton-CyNHfsAf.js";import"./useTextField-CAnMwNGO.js";import"./useControlledState-B-dx9B_p.js";import"./useField-Bz34INMU.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CXiIiWVS.js";import"./Dialog-BHgz53KV.js";import"./OverlayArrow-BP1WHt_0.js";import"./useResizeObserver-CwL_yq3H.js";import"./Collection-CG3_0aNM.js";import"./index-BN8sygBb.js";import"./Separator-B-NA5MJa.js";import"./SelectionManager-D5SH1Aqt.js";import"./useEvent-CwuJt_mK.js";import"./scrollIntoView-C9rzGjd3.js";import"./SelectionIndicator-BjsEM9O1.js";import"./useDescription-DBAUb1QW.js";import"./ListKeyboardDelegate-Cf2KZwiC.js";import"./PressResponder-BrgAiC1q.js";import"./useLocalizedStringFormatter-LpBXKpWQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C-4i_HdT.js";import"./VisuallyHidden-Bx2PPkoO.js";import"./Button-DNu20i5o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BQT0Ev-t.js";import"./createLucideIcon-Dkm_kHZA.js";import"./x-DiiIVqZK.js";import"./Heading-BdUvKCq1.js";import"./info-DHknlrQR.js";import"./Popover-BIBXvtep.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
