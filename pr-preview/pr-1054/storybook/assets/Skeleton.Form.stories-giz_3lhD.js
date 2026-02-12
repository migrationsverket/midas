import{j as e,l}from"./iframe-CYK4t1Gh.js";import{S as t}from"./Skeleton-BhBCmLN_.js";import{T as p}from"./TextField-kAYYJ_xF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bpkh78Fh.js";import"./utils-DBHsElOT.js";import"./FieldError-BeOTnay7.js";import"./Text-Ch4tHKq-.js";import"./useFocusRing-DWc7f6DB.js";import"./index-BosHGsFI.js";import"./index-CUCu8Kx5.js";import"./Text-B_DUIRzD.js";import"./RSPContexts-BcM39O5Y.js";import"./Form-H-NWp1S4.js";import"./useFormValidation-BM9SNmH0.js";import"./Group-DIJATtpH.js";import"./Input-IfYplfUW.js";import"./Hidden-Dhsxn_Nf.js";import"./Button-DECZbtu5.js";import"./useLabels-Dbxh0r6V.js";import"./useButton-O6-M5fpP.js";import"./useTextField-7nuyCBDw.js";import"./useControlledState-D_0fPRZq.js";import"./useField-BNsk_9RN.js";import"./TextField.module-DpzeWGpt.js";import"./Label-Dh6G7m9u.js";import"./Dialog-CxTy_ZbX.js";import"./OverlayArrow-ByMiT-JA.js";import"./useResizeObserver-CFKUjQE-.js";import"./Collection-DVFlaGY-.js";import"./index-BVtMdV-Z.js";import"./Separator-BfdLMTbW.js";import"./SelectionManager-Cq6Z9nU1.js";import"./useEvent-GOx7wBQE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DzLatRQE.js";import"./useDescription-BiSEYNrX.js";import"./ListKeyboardDelegate-Dof0oKnX.js";import"./PressResponder-KUWsL8bB.js";import"./useLocalizedStringFormatter-BN4ru8sL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-T-p8I7LZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-4kkr3OtB.js";import"./Button-BE1wltEw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZIAFqP_.js";import"./createLucideIcon-C53JEkqI.js";import"./x-DW5q0vat.js";import"./Heading-ps86Te0K.js";import"./info-CgmHtHlh.js";import"./Popover-BxVbZjQ0.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
