import{j as e,l}from"./iframe-BEKS4YDN.js";import{S as t}from"./Skeleton-jLBm7wOI.js";import{T as p}from"./TextField-BSCNowhw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BSzVsXj5.js";import"./utils-xO_879NF.js";import"./FieldError-C9IlqVU0.js";import"./Text-BZzeA2Vt.js";import"./useFocusRing-BhpyH7yS.js";import"./index-C_TP6Ur2.js";import"./index-CEolt4Rx.js";import"./Text-BfCSkgj0.js";import"./RSPContexts-CZte2gii.js";import"./Form-DjNnpm5_.js";import"./Group-Cl_l4hHo.js";import"./Input-B11ZsO07.js";import"./Hidden-CwtVgZCk.js";import"./Button-BPvFIvh-.js";import"./useLabel-CSn61wWa.js";import"./useLabels-BHkcg4nS.js";import"./useButton-BxOD9fvd.js";import"./useTextField-CkwzA_HM.js";import"./useControlledState-BJkUh9eQ.js";import"./useField-H9rBq9I8.js";import"./TextField.module-DdivwlC8.js";import"./Label-BNxY1SH6.js";import"./Dialog-DRYJ3kIW.js";import"./OverlayArrow-BdBQyxp-.js";import"./useResizeObserver-DSo0hXAK.js";import"./Collection-BNCTK-zC.js";import"./index-DQpkWmHs.js";import"./Separator-Dn1IpRZP.js";import"./SelectionManager-BonK-rJX.js";import"./useEvent-h3u_uwpJ.js";import"./scrollIntoView-Bhjt-fS-.js";import"./SelectionIndicator-BFx5J5a6.js";import"./useDescription-qyRNVaLw.js";import"./ListKeyboardDelegate-D2QwNFZw.js";import"./PressResponder-BO2icTrx.js";import"./useLocalizedStringFormatter-Ch_NtsBU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BVzisHFw.js";import"./getScrollParent-Dd6uns12.js";import"./VisuallyHidden-DHkZrGra.js";import"./ModalOverlay-sBWWLOAI.js";import"./x-DI99KDwB.js";import"./createLucideIcon-BWz3rFdE.js";import"./useLocalizedStringFormatter-CYPaady4.js";import"./Heading-uQEv1yk8.js";import"./Button-D3aX5HrM.js";import"./Button.module-BB7N-cLd.js";import"./info-gvNGyC6R.js";import"./Popover-CqAa5rd1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
