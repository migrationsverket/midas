import{j as e,l}from"./iframe-CAxX8b8z.js";import{S as t}from"./Skeleton-3qukuPvr.js";import{T as p}from"./TextField-Bhuu7NOm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BzpANVBY.js";import"./utils-DCHF2L9h.js";import"./TextField-B6LPg8h8.js";import"./FieldError-D4Sp8V1Y.js";import"./Text-BLQTNCsN.js";import"./useFocusRing-CJGxaojv.js";import"./index-BFL8txhV.js";import"./index-BsUamICG.js";import"./Text-D4pRrquR.js";import"./RSPContexts-DSQBOyK1.js";import"./Form-DdIW8y_X.js";import"./useFormValidation-ORBzuIse.js";import"./Group-CmhRRQeQ.js";import"./Input-DFPKX6GQ.js";import"./Hidden-BhCMtZNx.js";import"./Button-4YWHHaEC.js";import"./useLabels-DOCuV8eN.js";import"./useButton-pswNsnH0.js";import"./useTextField-DUDeOcF8.js";import"./useControlledState-CrLblIfK.js";import"./useField-BJlVD6tn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-D0-ZtA9y.js";import"./Dialog-v-8j5ffk.js";import"./OverlayArrow-ChU4HsBS.js";import"./useResizeObserver-Bv8Dp1M7.js";import"./Collection-CHE2qNUL.js";import"./index-hoFEFN5M.js";import"./Separator-iD-1dxU-.js";import"./SelectionManager-BNvdJXY_.js";import"./useEvent-Be56k_0k.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cned-ECi.js";import"./useDescription-DlwMEBen.js";import"./ListKeyboardDelegate-DzMoo9Rf.js";import"./PressResponder-NTZTd40v.js";import"./useLocalizedStringFormatter-CTDPvKwa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjThJUmE.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BxgXzkUT.js";import"./Button-hIWv77LG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Ck8_EjzN.js";import"./createLucideIcon-Btl_k1Dg.js";import"./x-DFKddAaY.js";import"./Heading-BB8-Gqoe.js";import"./info-CIX-ujr0.js";import"./Popover-DmLQWAeN.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
