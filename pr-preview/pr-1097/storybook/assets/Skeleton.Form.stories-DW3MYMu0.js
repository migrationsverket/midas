import{j as e,l}from"./iframe-BXrAfsjq.js";import{S as t}from"./Skeleton-uS145ls1.js";import{T as p}from"./TextField-C1yBj3lT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CuEKUZjR.js";import"./utils-cdAGpjgV.js";import"./FieldError-BVjBbXJN.js";import"./Text-aWKwJErA.js";import"./useFocusRing-DgM5hB_S.js";import"./index-DX8EYVJ-.js";import"./index-Dw2cXarQ.js";import"./Text-DoxGzedC.js";import"./RSPContexts-CF2MUXv8.js";import"./Form-vt0dRRGK.js";import"./useFormValidation-BLxToia1.js";import"./Group-eQ6Vw-R4.js";import"./Input-BVp6rFyi.js";import"./Hidden-DJwBGsVR.js";import"./Button-By4fIxyI.js";import"./useLabels-CpmKdeaa.js";import"./useButton-V4TYrtKf.js";import"./useTextField-B5LyVcim.js";import"./useControlledState-CpFSzBx7.js";import"./useField-JUGchugn.js";import"./TextField.module-DdivwlC8.js";import"./Label-DvNqAWHO.js";import"./Dialog-CBk-ybdk.js";import"./OverlayArrow-Bv43kkkE.js";import"./useResizeObserver-CWswtw0p.js";import"./Collection-DYPBJSc4.js";import"./index-OX4n_qIn.js";import"./Separator-CbszEgXG.js";import"./SelectionManager-ICojmhGd.js";import"./useEvent-BoaBlzfX.js";import"./scrollIntoView-3U7tLxsU.js";import"./SelectionIndicator-DVkUuBm9.js";import"./useDescription-t7xMbrFZ.js";import"./ListKeyboardDelegate-kcZGjyqX.js";import"./PressResponder-Hk8K6EH6.js";import"./useLocalizedStringFormatter-A_mBW6J-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B1yYIs_w.js";import"./getScrollParent-CVvcmYh-.js";import"./VisuallyHidden-DmvbNouy.js";import"./Button-ClxvzqtQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRM_oh5H.js";import"./createLucideIcon-CYigPS-O.js";import"./x-D2S3wmoi.js";import"./Heading-zviiFLoA.js";import"./info-C66L3Ywm.js";import"./Popover-BHZTG6i5.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
