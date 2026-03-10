import{j as e,l}from"./iframe-bMlrIVqx.js";import{S as t}from"./Skeleton-ChbG9bPD.js";import{T as p}from"./TextField-SAJ4RPSf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B1l44mOn.js";import"./utils-CiQjpS3V.js";import"./FieldError-BuQ4lPqn.js";import"./Text-Bx2VBQkS.js";import"./useFocusRing-D8WCTnIg.js";import"./index-bHuBvRtH.js";import"./index-RO-R4BZE.js";import"./Text-Bdt-QSsh.js";import"./RSPContexts-DoPn5P63.js";import"./Form-CHbmSbh0.js";import"./useFormValidation-eHx-WVAV.js";import"./Group-BDfnJ3lm.js";import"./Input-CTcO8bh6.js";import"./Hidden-hGkg45bv.js";import"./Button-v8dNK1Nl.js";import"./useLabels-1BtgXQl_.js";import"./useButton-d-Sb4YVS.js";import"./useTextField-CIhs8AK4.js";import"./useControlledState-B1Wdr8nI.js";import"./useField-DVMTtL6M.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cx9CnG1X.js";import"./Dialog-a4vPDuZX.js";import"./OverlayArrow-BjZWg3G8.js";import"./useResizeObserver-B1YiBwxG.js";import"./Collection-CMNy8xwo.js";import"./index-fcuKGEAb.js";import"./Separator-Dld-2_Ml.js";import"./SelectionManager-VLtppM1E.js";import"./useEvent-DP6lgkls.js";import"./scrollIntoView-CDYKtDZ7.js";import"./SelectionIndicator-D_gtTXsF.js";import"./useDescription-DpC2r11h.js";import"./ListKeyboardDelegate-D5YpQ5fx.js";import"./PressResponder-DOm5aFeu.js";import"./useLocalizedStringFormatter-CMgAZYok.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfMBG2tT.js";import"./getScrollParent-CjAAh5mb.js";import"./VisuallyHidden-3-YJbPrh.js";import"./Button-BN-gP6-P.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CTQktmvu.js";import"./createLucideIcon-BpTSGys0.js";import"./x-CcCCRFo_.js";import"./Heading-CVhmOHIJ.js";import"./info-Bq9rumUI.js";import"./Popover-CpW1xD15.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
