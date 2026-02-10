import{j as e,l}from"./iframe-DOk2o9NQ.js";import{S as t}from"./Skeleton-CSdfYYTZ.js";import{T as p}from"./TextField-JJhjIrKe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cf95aXBD.js";import"./utils-yxEoGQIn.js";import"./TextField-C5R5_cEF.js";import"./FieldError-hXnolGoZ.js";import"./Text-DOsGQ1iy.js";import"./useFocusRing-DfiygLtK.js";import"./index-BDj9Getj.js";import"./index-Bd-kietF.js";import"./Text-B56BHEOe.js";import"./RSPContexts-DkRXQuPU.js";import"./Form-crC5pc-x.js";import"./useFormValidation-D_TTn9Gw.js";import"./Group-DfODhCsQ.js";import"./Input-nIRJJZ5B.js";import"./Hidden-C9UmOyee.js";import"./Button-WADFfC5e.js";import"./useLabels-CXX4Mh78.js";import"./useButton-oJknvzPj.js";import"./useTextField-yot0nzhU.js";import"./useControlledState-D6ABUqgD.js";import"./useField-DGKgmSeQ.js";import"./TextField.module-DpzeWGpt.js";import"./Label-B1F-7PUG.js";import"./Dialog-DTVSTSfM.js";import"./OverlayArrow-t6GdW5jU.js";import"./useResizeObserver-DK1i-9sO.js";import"./Collection-3rCpBz2t.js";import"./index-BzKuUL7b.js";import"./Separator-DuGRF7R_.js";import"./SelectionManager--1kt69tk.js";import"./useEvent-CEdgHe1B.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BA3PwtVp.js";import"./useDescription-B9j_W6AF.js";import"./ListKeyboardDelegate-ni2m7AdV.js";import"./PressResponder-BZXZa_e1.js";import"./useLocalizedStringFormatter-DgU5yhXs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BnViv5qa.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CCQSdTZL.js";import"./Button-BheV8xjG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DTXBmCaA.js";import"./createLucideIcon-De700o01.js";import"./x-C_3F28-_.js";import"./Heading-CPJz5_k4.js";import"./info-DAY1iHHR.js";import"./Popover-_VmASyc7.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
