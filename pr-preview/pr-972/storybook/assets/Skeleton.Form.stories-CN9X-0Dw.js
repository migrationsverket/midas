import{j as e,l}from"./iframe-BtnDiUeo.js";import{S as t}from"./Skeleton-B35TMVch.js";import{T as p}from"./TextField-Ce7jgZnB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C21Bgrzo.js";import"./utils-6t5S5iG-.js";import"./TextField-BaQJW_Dw.js";import"./FieldError-BwMKPYqO.js";import"./Text-BHP3jDdS.js";import"./useFocusRing-CeaXn4pv.js";import"./index-DNj_r2ie.js";import"./index-CMMeM23Q.js";import"./Text-5ETkJBTM.js";import"./RSPContexts-DIOS6Ojx.js";import"./Form-DhyVklo3.js";import"./useFormValidation-QJMhqtMl.js";import"./Group-Bts_purp.js";import"./Input-BWhq-5uD.js";import"./Hidden-SeEFEyCD.js";import"./Button-C4A3JbkV.js";import"./useLabels-L9u9tUn5.js";import"./useButton-Dj3Yiida.js";import"./useTextField-LlEhU_rz.js";import"./useControlledState-BMBk6NmG.js";import"./useField-Cbo48EzZ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1by7kx7.js";import"./Dialog-BlQvHMfi.js";import"./OverlayArrow-Dyw6ueAU.js";import"./useResizeObserver-IKiumAb0.js";import"./Collection-Bs_M3g-9.js";import"./index-D8rcrMqJ.js";import"./Separator-CJlTHlzH.js";import"./SelectionManager-BoO8dgsX.js";import"./useEvent--JaFozHk.js";import"./scrollIntoView-BzmlEbl8.js";import"./SelectionIndicator-rrxign9m.js";import"./useDescription-BYAmENSk.js";import"./ListKeyboardDelegate-ClLuk8-x.js";import"./PressResponder-CLcoXyel.js";import"./useLocalizedStringFormatter-BfXnVgGt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJqeFeZI.js";import"./VisuallyHidden-DyHyzLz4.js";import"./Button-COsxIDgV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6oMJ6jzu.js";import"./createLucideIcon-Cyxnybqj.js";import"./x-D8AFAqJa.js";import"./Heading-Dld2UxcG.js";import"./info-CqikwjWj.js";import"./Popover-DAHUnuwF.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
