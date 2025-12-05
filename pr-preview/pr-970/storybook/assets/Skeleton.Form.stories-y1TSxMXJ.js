import{j as e,l}from"./iframe-4MXvvXb4.js";import{S as t}from"./Skeleton-DF_8E8_0.js";import{T as p}from"./TextField-BNMoOsw8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C3k-jx7l.js";import"./utils-CKUJDRfd.js";import"./TextField-2w0-2kmP.js";import"./FieldError-B07U-Qv-.js";import"./Text-DEF8XyQD.js";import"./useFocusRing-CGRZ6TsU.js";import"./index-DNLPWJUA.js";import"./index-BNLaGBTn.js";import"./Text-CjfGH0e9.js";import"./RSPContexts-BC_6Dhn9.js";import"./Form-Diwti7Bb.js";import"./useFormValidation-C_E33eAj.js";import"./Group-DjYYcrKt.js";import"./Input-BZDUnuhz.js";import"./Hidden-Bs6UcX7L.js";import"./Button-D7OB0dKW.js";import"./useLabels-BcyACAXj.js";import"./useButton-ELwrz3PB.js";import"./useTextField-CaS2B26W.js";import"./useControlledState-Yot6ptr4.js";import"./useField-FpwzJluE.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DpQTpgb8.js";import"./Dialog-7Iq_rX5x.js";import"./OverlayArrow-CJxlX3_-.js";import"./useResizeObserver-DvvtWspO.js";import"./Collection-BmcvaKsn.js";import"./index-DmP-bg2h.js";import"./Separator-BGt4y3Xs.js";import"./SelectionManager-C7R0JqoP.js";import"./useEvent-B7HYYs6V.js";import"./scrollIntoView-wQ_uh2wm.js";import"./SelectionIndicator-CAnfLgtL.js";import"./useDescription-09Y_4eEe.js";import"./ListKeyboardDelegate-XDBkvJpT.js";import"./PressResponder-BTRow9R1.js";import"./useLocalizedStringFormatter-uwpQqsQ4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BeL4ndT4.js";import"./VisuallyHidden-Bltgpije.js";import"./Button-D6HZYVFH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-S9rOgstl.js";import"./createLucideIcon-DbyMZvJr.js";import"./x-DFJOvBpt.js";import"./Heading-CdN84TBh.js";import"./info-DpiIksJf.js";import"./Popover-9KPmg7Ej.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
