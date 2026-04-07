import{j as e,l}from"./iframe-C0gItKGI.js";import{S as t}from"./Skeleton-UhaT7i5P.js";import{T as p}from"./TextField-D4cpvR7f.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-VO6QIkyM.js";import"./utils-C4BmiKeT.js";import"./FieldError-X-1CPtGa.js";import"./Text-CP3oPRRG.js";import"./useFocusRing-D6zHA-j4.js";import"./index-JTUL9Zza.js";import"./index-DYJlb7vK.js";import"./Text-COsMTm1B.js";import"./RSPContexts-Cl1Py3Cy.js";import"./Form-Dt3RCtH5.js";import"./Group-BzsLEz3W.js";import"./Input-CF3ebiYZ.js";import"./Hidden-CxiPA8K1.js";import"./Button-o0QsNuSA.js";import"./useLabel-DSorbXz4.js";import"./useLabels-B6zfi_e6.js";import"./useButton-Dx1KDGRQ.js";import"./useTextField-CW9mRz8n.js";import"./useControlledState-BBjdJp7n.js";import"./useField-BOZozsGE.js";import"./TextField.module-DdivwlC8.js";import"./Label-DgEwD7Y0.js";import"./Dialog-CmrXn1at.js";import"./OverlayArrow-BHt5zAHy.js";import"./useResizeObserver-CuPc38Zl.js";import"./Collection-DnowcdnP.js";import"./index-CHNDbKyi.js";import"./Separator-F-oIn2Ic.js";import"./SelectionManager-D-bxzIQz.js";import"./useEvent-B1QAVb7V.js";import"./scrollIntoView-CsIkDecr.js";import"./SelectionIndicator-D3r10E2K.js";import"./useDescription-DN4iRcxV.js";import"./ListKeyboardDelegate-D4HGFgQm.js";import"./PressResponder-CsfYjE0W.js";import"./useLocalizedStringFormatter-CJETvB2q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDhOf0yB.js";import"./getScrollParent-FaTrNgdQ.js";import"./VisuallyHidden-B6iVGiF3.js";import"./x-BC7OWJ1B.js";import"./createLucideIcon-jAmYwIsU.js";import"./useLocalizedStringFormatter-CX1JQrfE.js";import"./Heading-D3BiTKui.js";import"./Button-ByBsZf-O.js";import"./Button.module-BB7N-cLd.js";import"./info-DetYqJur.js";import"./Popover-EkNhVWir.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
