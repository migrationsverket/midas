import{j as e,l}from"./iframe--IbK7uvL.js";import{S as t}from"./Skeleton-ChTIOy9n.js";import{T as p}from"./TextField-2Hk-m6l5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-jdrH-q9i.js";import"./utils-CA7lVtot.js";import"./FieldError-C7TTOr5D.js";import"./Text-fLskqfUb.js";import"./useFocusRing-D2xoM2VM.js";import"./index-BZz7yXlj.js";import"./index-CXKCK8P0.js";import"./Text-qvWOJ16d.js";import"./RSPContexts-CuIQ88x9.js";import"./Form-SHW1w9sE.js";import"./useFormValidation-CKM46q2q.js";import"./Group-Bctorbyi.js";import"./Input-WFLj8i1j.js";import"./Hidden-BExZVod8.js";import"./Button-Re0Yy6Pp.js";import"./useLabels-rslA135_.js";import"./useButton-Cojk1q0i.js";import"./useTextField-CjddA_Zz.js";import"./useControlledState-xHQ8O9W1.js";import"./useField-CsTm_RNd.js";import"./TextField.module-DdivwlC8.js";import"./Label-DiAadJbE.js";import"./Dialog-BziSI5az.js";import"./OverlayArrow-wQIpOgVU.js";import"./useResizeObserver-D4SKbTHF.js";import"./Collection-DYP0TvTP.js";import"./index-DQ8CC9Ma.js";import"./Separator-CLdh5GVL.js";import"./SelectionManager-hB9sSLiJ.js";import"./useEvent-C2aKNcd9.js";import"./scrollIntoView-DpbtecG_.js";import"./SelectionIndicator-BVtUFBWh.js";import"./useDescription-C_IbgAiL.js";import"./ListKeyboardDelegate-CIOrWFjf.js";import"./PressResponder-Cu-sV0FT.js";import"./useLocalizedStringFormatter-Dg5HXGYt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6FfuHjp.js";import"./getScrollParent-BemRRphk.js";import"./VisuallyHidden-CYG4Jpuo.js";import"./x-CRmhj2OD.js";import"./createLucideIcon-CZI6jzSG.js";import"./useLocalizedStringFormatter-Dr2L-_6O.js";import"./Heading-SJsGu3yX.js";import"./Button-BYHfDOH9.js";import"./Button.module-BB7N-cLd.js";import"./info-CwquDcC_.js";import"./Popover-C_KG0Jqv.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
