import{j as e,l}from"./iframe-DTLJLCqo.js";import{S as t}from"./Skeleton-DwmdVhGQ.js";import{T as p}from"./TextField-SDL8hX-H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CtbXGjFB.js";import"./utils-aQAqN8gs.js";import"./TextField-DePVi3jt.js";import"./FieldError-CveCLVTj.js";import"./Text-BVi5Ej-u.js";import"./useFocusRing-CCXTTGcy.js";import"./index-R7zWEzuw.js";import"./index-DWROMjn1.js";import"./Text-VQywqbiS.js";import"./RSPContexts-C0vMLaLM.js";import"./Form-CdS54emo.js";import"./useFormValidation-DXoy3rZ6.js";import"./Group-dqMiXdSk.js";import"./Input-BU141T_w.js";import"./Hidden-Ba9IdiNq.js";import"./Button-DLbZMMBE.js";import"./useLabels-C_LVKDoo.js";import"./useButton-Dm0JCrG-.js";import"./useTextField-C_rJIOGj.js";import"./useControlledState-D7_B-bjt.js";import"./useField-DrzhCEc1.js";import"./TextField.module-DpzeWGpt.js";import"./Label-R8BXxaCn.js";import"./Dialog-DRhVCDqR.js";import"./OverlayArrow-DG6HMC2P.js";import"./useResizeObserver-CCgPS4-2.js";import"./Collection-S7fflzp9.js";import"./index-D3QbyDlh.js";import"./Separator-3k9QuH-P.js";import"./SelectionManager-CVMkAKx2.js";import"./useEvent-DuEmEayB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COJaXbf_.js";import"./useDescription-D_-VTjQ7.js";import"./ListKeyboardDelegate-Dk3H0uLl.js";import"./PressResponder-D-Mi3XpB.js";import"./useLocalizedStringFormatter-Cpm5l6p9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YSh_JxkF.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cr5LwEwU.js";import"./Button-wjvYMOzu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNlIS9z.js";import"./createLucideIcon-ZFlUY_RU.js";import"./x-BYwfMl4s.js";import"./Heading-Bc1LbtIk.js";import"./info-5A3TfLzF.js";import"./Popover-DLWdgYPb.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
