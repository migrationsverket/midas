import{j as e,l}from"./iframe-BrwpvQHc.js";import{S as t}from"./Skeleton-B8Qe9HPh.js";import{T as p}from"./TextField-DvrkmKRG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CIvH55k3.js";import"./utils-BACMs3jS.js";import"./FieldError-Bn-kD1g2.js";import"./Text-Cp5vE00Z.js";import"./useFocusRing-ay8XrwpJ.js";import"./index-e4zmhYiJ.js";import"./index-CfMCfkTD.js";import"./Text-B8xII3uk.js";import"./RSPContexts-LKuPHdSI.js";import"./Form-QTUFbTxy.js";import"./Group-EsSCRkvs.js";import"./Input-CqxWm35E.js";import"./Hidden-62uiVpgl.js";import"./Button-CyBHSIdo.js";import"./useLabel-1zqhq5YX.js";import"./useLabels-D7FAWWUV.js";import"./useButton-DKTae0i9.js";import"./useTextField-CtISlFAN.js";import"./useControlledState-BuArS6Zg.js";import"./useField-BfH21yjI.js";import"./TextField.module-DdivwlC8.js";import"./Label-C3E02UL2.js";import"./Dialog-Czi0d8Hr.js";import"./OverlayArrow-CqCyF7Ym.js";import"./useResizeObserver-C52f4LZj.js";import"./Collection-CUm3w3hw.js";import"./index-DSeJmrPr.js";import"./Separator-Cm-oI8CP.js";import"./SelectionManager-CMlb0qO7.js";import"./useEvent-D8YMy7IN.js";import"./scrollIntoView-CyZOtQhj.js";import"./SelectionIndicator-DAEZu0n9.js";import"./useDescription-DfwBnCrb.js";import"./ListKeyboardDelegate-qi1TIQEk.js";import"./PressResponder-ByjezIr6.js";import"./useLocalizedStringFormatter-CkzWLLcE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCnZU3jm.js";import"./getScrollParent-CBxp-l9V.js";import"./VisuallyHidden-DRJAfVxE.js";import"./ModalOverlay-BhNqjgfR.js";import"./x-C3Fvjogf.js";import"./createLucideIcon-DL41wzn8.js";import"./useLocalizedStringFormatter-V2VPiIBS.js";import"./Heading-B2xW-WDi.js";import"./Button-BhMRkAV6.js";import"./Button.module-BB7N-cLd.js";import"./info-CbCg_KTu.js";import"./Popover-C_pzYqjh.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
