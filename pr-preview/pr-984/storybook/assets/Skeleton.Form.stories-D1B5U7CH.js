import{j as e,l}from"./iframe-Dm1httYB.js";import{S as t}from"./Skeleton-C5HQFoLh.js";import{T as p}from"./TextField-vLJ5ZOpU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-9m6FZC-V.js";import"./utils-DAcLM52Y.js";import"./TextField-CF4zXTco.js";import"./FieldError-DPFfxwf1.js";import"./Text-C4WcM4sb.js";import"./useFocusRing-C0iZIFPr.js";import"./index-Cq_lPOA_.js";import"./index-2aXvH78J.js";import"./Text-BeOvwamM.js";import"./RSPContexts-0sXFgJk0.js";import"./Form-B5p6DEVu.js";import"./useFormValidation-Ykv_NSJS.js";import"./Group-0dlVnuik.js";import"./Input-DX-gAmBf.js";import"./Hidden-BUN5HDam.js";import"./Button-D4Ys_IRP.js";import"./useLabels-Dn030z5M.js";import"./useButton-DaUM1Uk2.js";import"./useTextField-DIyGK06-.js";import"./useControlledState-XoQnkC5P.js";import"./useField-DBfobrXT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B06rjkw6.js";import"./Dialog-D-SGJ0S8.js";import"./OverlayArrow-DGKuXn9b.js";import"./useResizeObserver-Ctdqq1yK.js";import"./Collection-JaQ0dDLU.js";import"./index-CL1GZ2-L.js";import"./Separator-CcrxgTQA.js";import"./SelectionManager-scOJ3zht.js";import"./useEvent-Bta9D14b.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Chwu4rrB.js";import"./useDescription-BmoRSyqj.js";import"./ListKeyboardDelegate-BSoZkleV.js";import"./PressResponder-DWlr7lOf.js";import"./useLocalizedStringFormatter-B-lsgELR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-HvSNPS4K.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CHSyJVG_.js";import"./Button-DcFMStX5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BA3OZleP.js";import"./createLucideIcon-Cua-ZzbR.js";import"./x-DwDd4qDw.js";import"./Heading-CX0JwD51.js";import"./info-D-td9-jM.js";import"./Popover-DzSKeTx8.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
