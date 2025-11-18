import{j as e,l}from"./iframe-DgxKfNbk.js";import{S as t}from"./Skeleton-DVEd--9A.js";import{T as d}from"./TextField-HwBu8DMB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-A9z_SJOP.js";import"./utils-BGROS65s.js";import"./TextField-eIO-HeBt.js";import"./FieldError-D6hRhKtv.js";import"./Text-DSs1Iflc.js";import"./useFocusRing-DnzQSyQo.js";import"./index-DUg-lwjY.js";import"./index-CQL2Unmc.js";import"./Text-snGWGL4K.js";import"./RSPContexts-q1M_Avd7.js";import"./Form-0um3YYwp.js";import"./useFormValidation-JYNwapHx.js";import"./Group-UWJeJr-a.js";import"./Input-CFzZeRlY.js";import"./Hidden-CS-gbQoN.js";import"./Button-sp0K8pyj.js";import"./useLabels-DJqk111_.js";import"./useButton-CRwqM10K.js";import"./useTextField-Bu_9v5ag.js";import"./useControlledState-BTur9OCD.js";import"./useField-BhszGCTZ.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cv-uyzw-.js";import"./Dialog-DMCpr_WS.js";import"./OverlayArrow-clitr-Po.js";import"./useResizeObserver-BgxHe9uX.js";import"./Collection-DPWyI2DS.js";import"./index-kUcNiD44.js";import"./Separator-C77sazgq.js";import"./SelectionManager-qp4ytPh3.js";import"./useEvent-BwDP64Ht.js";import"./scrollIntoView-Bwrqcvii.js";import"./SelectionIndicator-DfItiZPp.js";import"./useDescription-mFuPStZN.js";import"./ListKeyboardDelegate-BCngH911.js";import"./PressResponder-BQtFeaSp.js";import"./useLocalizedStringFormatter-nOCS1ZGV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent--B9d3E0m.js";import"./VisuallyHidden-BCoLhgxB.js";import"./useLocalizedStringFormatter-C-Y2NsOw.js";import"./Button-aJbpSB1Q.js";import"./Button.module-CtQ1deO8.js";import"./x-D1MtzSMC.js";import"./createLucideIcon-gMUN6yHh.js";import"./Heading-BI04CBQB.js";import"./info-K4fnEqpv.js";import"./Popover-Bhrr8aa4.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
