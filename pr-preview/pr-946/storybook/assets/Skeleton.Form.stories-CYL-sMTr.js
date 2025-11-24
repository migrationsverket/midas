import{j as e,l}from"./iframe-Dt8qGcj0.js";import{S as t}from"./Skeleton-DLTFkZr8.js";import{T as d}from"./TextField-B59XGaYy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-4E5DiyY7.js";import"./utils-DzGpUwDk.js";import"./TextField-BEE1ZMlJ.js";import"./FieldError-Boq0AlWn.js";import"./Text-BFMlzHdv.js";import"./useFocusRing-B8EF88pa.js";import"./index-D45MIj80.js";import"./index-yXKLMRgP.js";import"./Text-DXvquVL7.js";import"./RSPContexts-B8qtBHPt.js";import"./Form-CydZd3vQ.js";import"./useFormValidation-PwxkFn_k.js";import"./Group-CnC_2ZN7.js";import"./Input-BAIFtMJ2.js";import"./Hidden-BXZBrSDT.js";import"./Button-CjJiJTes.js";import"./useLabels-DoBVCtRz.js";import"./useButton-CXsFy5nf.js";import"./useTextField-DaeeG-_s.js";import"./useControlledState-BVoQcIBV.js";import"./useField-B0YzA3FQ.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DeRdUZrY.js";import"./Dialog-CNOJc3H-.js";import"./OverlayArrow-DBW45wnx.js";import"./useResizeObserver-BklRVhQH.js";import"./Collection-Mc1jGEir.js";import"./index-2HYxLetr.js";import"./Separator-DQl5Teqn.js";import"./SelectionManager-DycKXJ5f.js";import"./useEvent-EDEmV_un.js";import"./scrollIntoView-DopW3zf_.js";import"./SelectionIndicator-tL3uILI3.js";import"./useDescription-lf21MVH0.js";import"./ListKeyboardDelegate-C_4XVNH0.js";import"./PressResponder-CKYytuCL.js";import"./useLocalizedStringFormatter-MwenM1Zt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DMG60YH-.js";import"./VisuallyHidden-DqAUfebe.js";import"./Button-CoCyWkmo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DHyFRBkx.js";import"./createLucideIcon-CzMrI8-b.js";import"./x-BKRVh5LC.js";import"./Heading-DRviNsfq.js";import"./info-iHyK2GFN.js";import"./Popover-I2mB7qFL.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
