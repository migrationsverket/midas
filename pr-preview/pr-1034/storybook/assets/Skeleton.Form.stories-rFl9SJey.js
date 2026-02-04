import{j as e,l}from"./iframe-BUlYeenf.js";import{S as t}from"./Skeleton-B75PBxEq.js";import{T as p}from"./TextField-CC-exDwD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C8s-t1J6.js";import"./utils-lHsRwqJp.js";import"./TextField-D0XRw4V0.js";import"./FieldError-BuLprRq1.js";import"./Text-BEqbNabF.js";import"./useFocusRing-CviEpoWZ.js";import"./index-DGEIcEWR.js";import"./index-DmdJ6ljJ.js";import"./Text-Bcb19OuN.js";import"./RSPContexts-DyT-IAgl.js";import"./Form-B0C8SxTV.js";import"./useFormValidation-CNOyznno.js";import"./Group-DESjM8FE.js";import"./Input-DDkprMC_.js";import"./Hidden-xA7wwpGq.js";import"./Button-CAFxmTKU.js";import"./useLabels-BwlyzcSz.js";import"./useButton-BwVzS7tb.js";import"./useTextField-X3JUxu3r.js";import"./useControlledState-BQ1_hIib.js";import"./useField-BhMTZZgY.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C5yUH3T8.js";import"./Dialog-sEw9lXyx.js";import"./OverlayArrow-gd4hgrwL.js";import"./useResizeObserver-Dfpbi31M.js";import"./Collection-DXOyl8IL.js";import"./index-BFmyVk_-.js";import"./Separator-_jFFnUtm.js";import"./SelectionManager-BveSUUx6.js";import"./useEvent-qyTooRJj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cb7FhzC-.js";import"./useDescription-DtuYr6PG.js";import"./ListKeyboardDelegate-MnX_BZtB.js";import"./PressResponder-B7tqUOSP.js";import"./useLocalizedStringFormatter-CZUMuckE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvNegiz2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BE5YEdq7.js";import"./Button-atNiNEsO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B7ud72d9.js";import"./createLucideIcon-D-YObSxS.js";import"./x-DgqlYmTg.js";import"./Heading-X-PaujHH.js";import"./info-Bep_ZP7Z.js";import"./Popover-t757kgyT.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
