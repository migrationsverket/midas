import{j as e,l}from"./iframe-Cc2x2NhL.js";import{S as t}from"./Skeleton-DdQJ5xXD.js";import{T as p}from"./TextField-CPG23-8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-FK_eDj-W.js";import"./utils-4Igqbjf8.js";import"./FieldError-l6QnCvwQ.js";import"./Text-D3p3B56u.js";import"./useFocusRing-WAjZqxaV.js";import"./index-B2z8J_iy.js";import"./index-BMFqcPHU.js";import"./Text-DcE_bHZ_.js";import"./RSPContexts-0YfvD9LK.js";import"./Form-Dzl391B-.js";import"./Group-XJNTrNJv.js";import"./Input-DhTCACkf.js";import"./Hidden-DXurTabA.js";import"./Button-ByJMIeTP.js";import"./useLabel-C3c6HGiK.js";import"./useLabels-DlHfLFqT.js";import"./useButton-DbeNFfwU.js";import"./useTextField-CO__Sljx.js";import"./useControlledState-B_OZWkkq.js";import"./useField-Dyc8N4z1.js";import"./TextField.module-DdivwlC8.js";import"./Label-DYNh7RDv.js";import"./Dialog-BPf3IZOs.js";import"./OverlayArrow-FlYvI0_Z.js";import"./useResizeObserver-DWx8oCEL.js";import"./Collection-DrMZK_17.js";import"./index-DXdtOShX.js";import"./Separator-7WC-UZS3.js";import"./SelectionManager-DEIbJdB3.js";import"./useEvent-BBH3oYjA.js";import"./scrollIntoView-BdS7fMnb.js";import"./SelectionIndicator-BhAuP5hr.js";import"./useDescription-Djm_rT5S.js";import"./ListKeyboardDelegate-BFNmsEvi.js";import"./PressResponder-C8VUQxtG.js";import"./useLocalizedStringFormatter-DvNtIm_P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dll6ZQaD.js";import"./getScrollParent-D5jUw6gC.js";import"./VisuallyHidden-CAnoPPmf.js";import"./ModalOverlay-BmUXt-jD.js";import"./x-BwuT2ktD.js";import"./createLucideIcon-DcmAEzc9.js";import"./useLocalizedStringFormatter-sXp9RPex.js";import"./Heading-Bd4wMQv_.js";import"./Button-ClCBSbVd.js";import"./Button.module-BB7N-cLd.js";import"./info-dC2Dc-R-.js";import"./Popover-BTHC1uhw.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
