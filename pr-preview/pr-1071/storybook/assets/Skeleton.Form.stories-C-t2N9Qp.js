import{j as e,l}from"./iframe-cMEgXkU9.js";import{S as t}from"./Skeleton-BaqtyErr.js";import{T as p}from"./TextField-DOwN6jZA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C0h4E402.js";import"./utils-B3lOSj3F.js";import"./FieldError-Cg9_4rDN.js";import"./Text-ltK-qi4B.js";import"./useFocusRing-CxXiz-Gm.js";import"./index-BmRYBJCP.js";import"./index-BMkS1cfA.js";import"./Text-oSal6G8w.js";import"./RSPContexts-B_AUN_Nr.js";import"./Form-DWqcZOfZ.js";import"./useFormValidation-BwIiM2rU.js";import"./Group-Cd_L9Aho.js";import"./Input-BTJ28KYT.js";import"./Hidden-C5y8YolZ.js";import"./Button-yd3xuf6R.js";import"./useLabels-CkaQlQl_.js";import"./useButton-BPJwIAj2.js";import"./useTextField-DkL4L2a3.js";import"./useControlledState-BX5yaqFT.js";import"./useField-CD7C6WXD.js";import"./TextField.module-Ck-VtJ3k.js";import"./Label-j5taQLiV.js";import"./Dialog-DyVE_MTm.js";import"./OverlayArrow-wG3j_rgS.js";import"./useResizeObserver-D0YoZtNR.js";import"./Collection-CqW90Kdu.js";import"./index-CISngLij.js";import"./Separator-CLCOci5w.js";import"./SelectionManager-jeBnoHsp.js";import"./useEvent-CYCFwh_w.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-boBGA4vK.js";import"./useDescription-B3zABGFf.js";import"./ListKeyboardDelegate-DgnZFSxp.js";import"./PressResponder-BKs3MK94.js";import"./useLocalizedStringFormatter-DBj2jYWp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQ9v6015.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ClFhsG2n.js";import"./Button-B1lVQr-S.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bd2ZBdeQ.js";import"./createLucideIcon-DtfcjQlU.js";import"./x-CNFpAdsD.js";import"./Heading-CZmRs31h.js";import"./info-BI95GXeT.js";import"./Popover-CrzG1Phb.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
