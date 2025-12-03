import{j as e,l}from"./iframe-wyIkUD1D.js";import{S as t}from"./Skeleton-aIUymmIo.js";import{T as d}from"./TextField-CWxAfWgn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C8wG7bQQ.js";import"./utils-CayfEQ5F.js";import"./TextField-DMmCKl7T.js";import"./FieldError-CawbUy3c.js";import"./Text-Bd9qAe_e.js";import"./useFocusRing-BjDxUBjo.js";import"./index-C8_xscMq.js";import"./index-BVT2M0jp.js";import"./Text-CyLswFoN.js";import"./RSPContexts-BmEF4fx6.js";import"./Form-nvVQ8iQr.js";import"./useFormValidation-Dw4OIyqs.js";import"./Group-DP6yKNAj.js";import"./Input-BBgiFbeW.js";import"./Hidden-CxKc16eE.js";import"./Button-DEVYr1z-.js";import"./useLabels-B7l2UtXF.js";import"./useButton-DOQkadi1.js";import"./useTextField-DNcEQ0aI.js";import"./useControlledState-CXqW8AC6.js";import"./useField-BtkUA_cy.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Bf4q779u.js";import"./Dialog-CS-4EN2d.js";import"./OverlayArrow-BvBJQPE9.js";import"./useResizeObserver-Cupyqcp5.js";import"./Collection-7wC7NTzx.js";import"./index-DWYf6tA-.js";import"./Separator-CzSEw5fh.js";import"./SelectionManager-lo1pGp0v.js";import"./useEvent-CPbBx1yC.js";import"./scrollIntoView-DniIlJJq.js";import"./SelectionIndicator-B6acqkHu.js";import"./useDescription-zG_-_r1G.js";import"./ListKeyboardDelegate-Bdyef3rS.js";import"./PressResponder-CRlLq7JA.js";import"./useLocalizedStringFormatter-Cl-aTEus.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DKoBHqeV.js";import"./VisuallyHidden-PWbTykwh.js";import"./Button-DPYxe-X7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ChSX0_b-.js";import"./createLucideIcon-BGFGME34.js";import"./x-B0-nOphV.js";import"./Heading-_qV4bcb5.js";import"./info-DDv6hA_c.js";import"./Popover-WTUNNCKQ.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
