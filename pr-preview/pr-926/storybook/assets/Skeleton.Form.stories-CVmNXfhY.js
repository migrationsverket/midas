import{j as e,l}from"./iframe-DkfvDrVS.js";import{S as t}from"./Skeleton-907px7l2.js";import{T as d}from"./TextField-BbeBjsjB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-EUlHSWMY.js";import"./utils-DzbRiR6M.js";import"./FieldError-BIMD40Se.js";import"./Text-CsHYCFhe.js";import"./useFocusRing-BM6vq-KP.js";import"./index-DRhH9nnC.js";import"./index-BZFBT-3J.js";import"./Text-DCB-quyL.js";import"./RSPContexts-UtRAkjgF.js";import"./Form-CdjrCtpL.js";import"./useFormValidation-DK-IWL2L.js";import"./Group-CE64cgum.js";import"./Input-DvOb1HYA.js";import"./Hidden-BZCdAkKc.js";import"./Button-BEd_-gNz.js";import"./useLabels-DflfoN4r.js";import"./useButton-DkycpXBB.js";import"./useTextField-CcHXdHqQ.js";import"./useControlledState-BCW3Vp6F.js";import"./useField-MaUdsQMW.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BlNJSWzx.js";import"./Dialog-CuGwoNNM.js";import"./OverlayArrow-BL7ZAVq8.js";import"./useResizeObserver-Cd03Fj5v.js";import"./Collection-D__y08wk.js";import"./index-BwhA17A0.js";import"./Separator-DOw5hx_I.js";import"./SelectionManager-INI6Juvw.js";import"./useEvent-Crzj0sZq.js";import"./scrollIntoView-DkrJ5nKE.js";import"./SelectionIndicator-BT83fwQ4.js";import"./useDescription-tC6WY3QA.js";import"./ListKeyboardDelegate-BSUHa7V5.js";import"./PressResponder-CMHjltVA.js";import"./useLocalizedStringFormatter-CJdbxQ-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CrQPhNEJ.js";import"./VisuallyHidden-M3WPnoP3.js";import"./useLocalizedStringFormatter-CzTybd1w.js";import"./Button-B_yGy9B1.js";import"./Button.module-CtQ1deO8.js";import"./x-DUTAFXft.js";import"./createLucideIcon-caan2w-a.js";import"./Heading-DSaLSNhs.js";import"./info-BcjPOAIS.js";import"./Popover-SWEnd30T.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
