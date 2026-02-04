import{j as e,l}from"./iframe-CRW892uF.js";import{S as t}from"./Skeleton-DEgr80Kx.js";import{T as p}from"./TextField-BJSaKiG_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bg1uH2YA.js";import"./utils-Cy5rPxYn.js";import"./TextField-CR6w4Yxh.js";import"./FieldError-BQcQWUaq.js";import"./Text-BMcxzv8r.js";import"./useFocusRing-DYPhP7ff.js";import"./index-CuPhnfQx.js";import"./index-C-PwSL9X.js";import"./Text-Bllz5--I.js";import"./RSPContexts-CZWpHYRK.js";import"./Form-sLRR6eNh.js";import"./useFormValidation-CkXNtAlg.js";import"./Group-C_vAYzKo.js";import"./Input-H0MWE4dR.js";import"./Hidden-DVd7J3jb.js";import"./Button-73ueEsI0.js";import"./useLabels-ChrJAk9N.js";import"./useButton-DDquVdTc.js";import"./useTextField-BQlcLRsS.js";import"./useControlledState-C1CLjRGB.js";import"./useField-Dsdw6Dxh.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BDRgF3oC.js";import"./Dialog-BaWrtAXg.js";import"./OverlayArrow-DVfS8oid.js";import"./useResizeObserver-BL-wr9du.js";import"./Collection-CpPeNV26.js";import"./index-Ci8Rgwt0.js";import"./Separator-DtafUiO6.js";import"./SelectionManager-BXP3sBpC.js";import"./useEvent-QBqF7ml7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CSS8pmUq.js";import"./useDescription-CMI78JnW.js";import"./ListKeyboardDelegate-CcvovjzQ.js";import"./PressResponder-CiN1UJyc.js";import"./useLocalizedStringFormatter-yyiVnhi3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ci5wZznZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DX9a97Gh.js";import"./Button-zEqn1U6h.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zR_q9Jv_.js";import"./createLucideIcon-B-cKx2d-.js";import"./x-3lOLVs8k.js";import"./Heading-Cf-yUcGM.js";import"./info-DCVCOli9.js";import"./Popover-DrtoZ3oB.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
