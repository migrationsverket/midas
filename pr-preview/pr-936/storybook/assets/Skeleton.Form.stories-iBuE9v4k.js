import{j as e,l}from"./iframe-DL0cr3No.js";import{S as t}from"./Skeleton-B2V6yZUv.js";import{T as d}from"./TextField-DjXJM6Ik.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dx3Lsvqf.js";import"./utils-BUc-cOn8.js";import"./TextField-DLK2HTqm.js";import"./FieldError-CSzLSbH0.js";import"./Text-BZY7tPCZ.js";import"./useFocusRing-CUC21zm9.js";import"./index-RgupsUkd.js";import"./index-D6BEsua6.js";import"./Text-B4js3SUR.js";import"./RSPContexts-BjTXbXCR.js";import"./Form-BUbZ_MNV.js";import"./useFormValidation-B1jylFA2.js";import"./Group-DB3jIVND.js";import"./Input-plb9iIl2.js";import"./Hidden-pim-7Fp3.js";import"./Button-B1jV44pP.js";import"./useLabels-BC5LH5iw.js";import"./useButton-Bc5mEHZW.js";import"./useTextField-CIP6F1s7.js";import"./useControlledState-oFMNdbap.js";import"./useField-M8QTnn6A.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DJx2IpW_.js";import"./Dialog-BohIRJvw.js";import"./OverlayArrow-CG3MQ4PF.js";import"./useResizeObserver-BzJLR3Y9.js";import"./Collection-DcDiE1Pr.js";import"./index-CeDlO_O7.js";import"./Separator--vLAl-M-.js";import"./SelectionManager-DRsW8gID.js";import"./useEvent-DDHdI2jX.js";import"./scrollIntoView-D8yUuFnl.js";import"./SelectionIndicator-DBYP8byp.js";import"./useDescription-LyMbX_kV.js";import"./ListKeyboardDelegate-vPzME-XO.js";import"./PressResponder-CSJ-l0Dm.js";import"./useLocalizedStringFormatter-YyaJr3k3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Bmi8soUw.js";import"./VisuallyHidden-LIFheGCJ.js";import"./useLocalizedStringFormatter-BelfBJw5.js";import"./Button-BJrL0Zus.js";import"./Button.module-CtQ1deO8.js";import"./x-BkuPOkXI.js";import"./createLucideIcon-CtVHrRwE.js";import"./Heading-BzXe7sUB.js";import"./info-DQIPe783.js";import"./Popover-CewDHiUk.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
