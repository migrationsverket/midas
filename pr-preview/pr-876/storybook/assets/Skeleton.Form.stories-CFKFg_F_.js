import{j as e,l}from"./iframe-QXqfLk9Z.js";import{S as t}from"./Skeleton-bVRNY70a.js";import{T as p}from"./TextField-bzuL-MbI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dc4iZiIN.js";import"./utils-Dggx2A6b.js";import"./FieldError-CFf5Jtc5.js";import"./Text-By_cFIOS.js";import"./useFocusRing-BiM2zrLV.js";import"./index-C07zKFPd.js";import"./index-C1BcpjW_.js";import"./Text-CFRxdyIy.js";import"./RSPContexts-DJB4f0eu.js";import"./Form-CvFTFOS9.js";import"./Group-COkufXAs.js";import"./Input-OMFgtILA.js";import"./Hidden-BI9BX3f7.js";import"./Button-66KmAdCV.js";import"./useLabel-BM1McJfg.js";import"./useLabels-Chfv84nV.js";import"./useButton-CGi5uJBG.js";import"./useTextField-CXinp14V.js";import"./useControlledState-Bn462BK_.js";import"./useField-Do9vNT6o.js";import"./TextField.module-DdivwlC8.js";import"./Label-CtbGVC8e.js";import"./Dialog-DmuQYGRp.js";import"./OverlayArrow-DeFjAeMd.js";import"./useResizeObserver-DSoQhSwH.js";import"./Collection-DQcURX3F.js";import"./index-DLrli4PL.js";import"./Separator-ChsWyHBb.js";import"./SelectionManager-6rzd6JLX.js";import"./useEvent-BHqgde0v.js";import"./scrollIntoView-CjMfEqzR.js";import"./SelectionIndicator-v_veeFNb.js";import"./useDescription-DGDiHLtH.js";import"./ListKeyboardDelegate-BmtFJP2y.js";import"./PressResponder-CFbwKyE3.js";import"./useLocalizedStringFormatter-BHMdmhnJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DC4VXQPy.js";import"./getScrollParent-MFR6QYRG.js";import"./VisuallyHidden-CPFiO8Sa.js";import"./ModalOverlay-DS1YbNIX.js";import"./x-Bafa4ygD.js";import"./createLucideIcon-DWZDC5UL.js";import"./useLocalizedStringFormatter-CnCt5dkn.js";import"./Heading-Dt6lwUoq.js";import"./Button-D4lkIHuh.js";import"./Button.module-BB7N-cLd.js";import"./info-DOEuqSCI.js";import"./Popover-Ij-4ZDWk.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
