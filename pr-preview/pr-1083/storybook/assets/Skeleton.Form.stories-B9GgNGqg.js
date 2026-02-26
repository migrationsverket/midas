import{j as e,l}from"./iframe-ByuAakOV.js";import{S as t}from"./Skeleton-Cytfyc1z.js";import{T as p}from"./TextField-BIzhm_C0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BmqSR7e5.js";import"./utils-DCDz8-p-.js";import"./FieldError-DONXBIHr.js";import"./Text-5L-Loq_n.js";import"./useFocusRing-DeCr3XEL.js";import"./index-BFgkI4lh.js";import"./index-BxJqq9XP.js";import"./Text-DGHuFiVK.js";import"./RSPContexts-1jdWfN7k.js";import"./Form-CHtQa1xb.js";import"./useFormValidation-CAmb2oIx.js";import"./Group-BShcvnkl.js";import"./Input-oD_qIANz.js";import"./Hidden-C7SU6pSU.js";import"./Button-DvbXCpzv.js";import"./useLabels-T0jO5CxA.js";import"./useButton-B3mMDgAO.js";import"./useTextField-DEQ0TCEN.js";import"./useControlledState-DR_wIXu3.js";import"./useField-Ds2pdaH6.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cbz_csKc.js";import"./Dialog-B9zq4CTD.js";import"./OverlayArrow-BVIhPBA-.js";import"./useResizeObserver-DgG2Venz.js";import"./Collection-DmQ61gQy.js";import"./index-DAksP4v9.js";import"./Separator-DTuDXXpM.js";import"./SelectionManager-AXoRuYDA.js";import"./useEvent-Bw7OTlan.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CnN3WJdS.js";import"./useDescription-DRnY-b0G.js";import"./ListKeyboardDelegate-kdv9SUeX.js";import"./PressResponder-CGIvgWXl.js";import"./useLocalizedStringFormatter-BdQ9RizH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bkqzv1i4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DZTJ2PK7.js";import"./Button-BMoNBLUG.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BIIuRCVh.js";import"./createLucideIcon-D1D3L2Mc.js";import"./x-OKF1Kye1.js";import"./Heading-BfBN2Tsx.js";import"./info-CXEqD7B_.js";import"./Popover-DH9idd7L.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
