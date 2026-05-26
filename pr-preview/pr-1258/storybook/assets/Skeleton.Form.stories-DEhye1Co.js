import{j as e,l}from"./iframe-DE3udc98.js";import{S as t}from"./Skeleton-C9b2dkZ0.js";import{T as p}from"./TextField-CfSHHGO2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BNbPrZdX.js";import"./utils-BZFqyVfK.js";import"./FieldError-HOINxNuD.js";import"./Text-B_7CE5hn.js";import"./useFocusRing-Zfbb9wtm.js";import"./index-DsLsEgIC.js";import"./index-TlyN-2Ns.js";import"./Text-6UvYXfTp.js";import"./RSPContexts-DDA8iB-A.js";import"./Form-bIhb4EIq.js";import"./Group-B49H1fYm.js";import"./Input-6rAJLlXY.js";import"./Hidden-B3N7s3Fy.js";import"./Button-WyeeTejZ.js";import"./useLabel-BaazdV9R.js";import"./useLabels-CkuL1gsk.js";import"./useButton-iHShjyV-.js";import"./useTextField-BBnno9zv.js";import"./useControlledState-CKJ2TdtV.js";import"./useField-XJ9uRbgJ.js";import"./TextField.module-DdivwlC8.js";import"./Label-B0yx0nEy.js";import"./Dialog-BXGga2Mo.js";import"./OverlayArrow-CjZBtWJ9.js";import"./useResizeObserver-Cli1IaX8.js";import"./Collection-DsWBFVqV.js";import"./index-CTmFy_vj.js";import"./Separator-BOf7wMAy.js";import"./SelectionManager-BBjREWqS.js";import"./useEvent-Bsmzdkq1.js";import"./scrollIntoView-CopONKPx.js";import"./SelectionIndicator-Bn5sd7Os.js";import"./useDescription-DUhpeiqJ.js";import"./ListKeyboardDelegate-CmqxmKAk.js";import"./PressResponder-bVLOz5RB.js";import"./useLocalizedStringFormatter-C2IC4Uej.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-otoYotsg.js";import"./getScrollParent-CISTh7Q2.js";import"./VisuallyHidden-JI0zcCIW.js";import"./ModalOverlay-CSADgSwq.js";import"./x-Did9_kjk.js";import"./createLucideIcon-DBgVndRE.js";import"./useLocalizedStringFormatter-D9xfpa_H.js";import"./Heading-FDPSjiuZ.js";import"./Button-D9EvRssF.js";import"./Button.module-BB7N-cLd.js";import"./info-HVPaG_XE.js";import"./Popover-jdEPNxSF.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
