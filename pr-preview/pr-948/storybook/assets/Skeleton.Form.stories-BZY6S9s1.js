import{j as e,l}from"./iframe-DJhNi_-f.js";import{S as t}from"./Skeleton-JezRQCmW.js";import{T as d}from"./TextField-MR1XqC0H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DNHjN0VH.js";import"./utils-Do643h1j.js";import"./TextField-BkEsXOnz.js";import"./FieldError-QYZw2O7I.js";import"./Text-B4M7ccT6.js";import"./useFocusRing-CIQbBMgf.js";import"./index-DW_CeOSp.js";import"./index-BnbnG8Mx.js";import"./Text-CU6r8O-i.js";import"./RSPContexts-BRjDF350.js";import"./Form-CLlO0DOv.js";import"./useFormValidation-DbRJxy_Q.js";import"./Group-yKWdujXF.js";import"./Input-vzd-CH3g.js";import"./Hidden-qjutHgwq.js";import"./Button-Ca0cwykn.js";import"./useLabels-BKEV4xVA.js";import"./useButton-Cy4auwEY.js";import"./useTextField-CGEfXXrj.js";import"./useControlledState-C8VisnXZ.js";import"./useField-BfEFq4ZS.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BOXZoz72.js";import"./Dialog-0SV1q2b4.js";import"./OverlayArrow-Ctn2UXTW.js";import"./useResizeObserver-DSshg31Y.js";import"./Collection-CS1q8Cfc.js";import"./index-CuF8TwUo.js";import"./Separator-Bm2rReie.js";import"./SelectionManager-CcrafMcI.js";import"./useEvent-CIe0shvn.js";import"./scrollIntoView-DaAL2pSO.js";import"./SelectionIndicator-2Ntg86hS.js";import"./useDescription-Ac_ksCkA.js";import"./ListKeyboardDelegate-9FCFhy9f.js";import"./PressResponder-qN6oycR-.js";import"./useLocalizedStringFormatter-DUAmzbz5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-JJILP5BF.js";import"./VisuallyHidden-DymIWSTG.js";import"./Button-BJ539bZj.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Bk0a2hhK.js";import"./createLucideIcon--d2H5b3A.js";import"./x-BB4FDb35.js";import"./Heading-UuKjrE2g.js";import"./info-BHyE-Bs9.js";import"./Popover-Bt3s2enk.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
