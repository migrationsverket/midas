import{j as e,l}from"./iframe-DamRJThF.js";import{S as t}from"./Skeleton-CjOyRxYg.js";import{T as d}from"./TextField-CRszeH0J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BFhokEBZ.js";import"./utils-DgcDlDIC.js";import"./FieldError-DbzbM9K4.js";import"./Text-DJngJYPB.js";import"./useFocusRing-bURA5Avq.js";import"./index-DlvZii8t.js";import"./index-BIVPacnA.js";import"./Text-DL78e22r.js";import"./RSPContexts-Dggcgd1E.js";import"./Form-BLTkFQuM.js";import"./Group-ujm_Ud_U.js";import"./Input-XSgAA2TM.js";import"./Hidden-BuQbP2-q.js";import"./Button-uaN-QkBJ.js";import"./useLabels-DuyfGClc.js";import"./useButton-COqJVObs.js";import"./useTextField-BOCJfouZ.js";import"./useControlledState-XD3RgfmU.js";import"./useField-B2FXZjju.js";import"./TextField.module-DdivwlC8.js";import"./Label-DicBUfv7.js";import"./Dialog-DEgR2qnS.js";import"./OverlayArrow-DYWN_5ER.js";import"./useResizeObserver-eK_zIgwr.js";import"./Collection-tkyA9Vv4.js";import"./index-C30nhWEM.js";import"./Separator-CYZPONwa.js";import"./SelectionManager-C2qvcpfW.js";import"./useEvent-CvQwGKSH.js";import"./scrollIntoView-BpYJI3yu.js";import"./SelectionIndicator-Czi5_gzH.js";import"./useDescription-Bsqqymym.js";import"./ListKeyboardDelegate-DyKCuwLA.js";import"./PressResponder-DPDWKR9m.js";import"./useLocalizedStringFormatter-CCiP9Lwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbPnchON.js";import"./getScrollParent-DgPjGSeo.js";import"./VisuallyHidden-BwmvdnrK.js";import"./x-C5nClHWi.js";import"./createLucideIcon-XwoK3Gs0.js";import"./useLocalizedStringFormatter-9w7CTOq4.js";import"./Heading-JFX8v4G2.js";import"./Button-Cp7EKUE4.js";import"./Button.module-BB7N-cLd.js";import"./info-AGBaNTQ0.js";import"./Popover-DwSLTJis.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
