import{j as e,l}from"./iframe-AjHIFKYL.js";import{S as t}from"./Skeleton-BgNDHAjw.js";import{T as p}from"./TextField-ChITgEUE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CkkwEQAK.js";import"./utils-BQ53D7f7.js";import"./FieldError-7pShLjHw.js";import"./Text-CCR6G686.js";import"./useFocusRing-CvHv-Osy.js";import"./index-Cfk7mVij.js";import"./index-BxE46KD8.js";import"./Text-pxITg1r8.js";import"./RSPContexts-CcA2FC2H.js";import"./Form-Bb5IqlHO.js";import"./Group-CRjLRbbz.js";import"./Input-DEbCu7yq.js";import"./Hidden-Ciub7nFQ.js";import"./Button-C1DU2kQ0.js";import"./useLabel-BXU14ybb.js";import"./useLabels-D5qCWeBL.js";import"./useButton-C5zGgHMm.js";import"./useTextField-CG6uFKFc.js";import"./useControlledState-DTh410_S.js";import"./useField-agvh2JV_.js";import"./TextField.module-DdivwlC8.js";import"./Label-CE7cd0fN.js";import"./Dialog-C6auVIhw.js";import"./OverlayArrow-BBErFv0z.js";import"./useResizeObserver-CtHhqdT_.js";import"./Collection-POb6Sqt7.js";import"./index-2OLboCXY.js";import"./Separator-B8blZCo-.js";import"./SelectionManager-Bf5HZs2x.js";import"./useEvent-CBOR4nAM.js";import"./scrollIntoView-DoE9Z2_0.js";import"./SelectionIndicator-Bi2cmx6m.js";import"./useDescription-CjzV_vAG.js";import"./ListKeyboardDelegate-BS7k2kA_.js";import"./PressResponder-CC8WqMSK.js";import"./useLocalizedStringFormatter-BzByLjfh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCihiTe5.js";import"./getScrollParent-DezySAXs.js";import"./VisuallyHidden-iv4jmUvN.js";import"./x-DuRIyyoz.js";import"./createLucideIcon-D_tC-MWH.js";import"./useLocalizedStringFormatter-Can2UqR3.js";import"./Heading-2dDi2FmH.js";import"./Button-BEq-_IjI.js";import"./Button.module-BB7N-cLd.js";import"./info-CJ7GMEom.js";import"./Popover-CSWwnxQK.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
