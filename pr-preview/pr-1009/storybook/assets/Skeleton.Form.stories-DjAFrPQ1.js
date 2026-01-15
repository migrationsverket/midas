import{j as e,l}from"./iframe-CwO_vEig.js";import{S as t}from"./Skeleton-B2_rfdsI.js";import{T as p}from"./TextField-CleTOFX6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-4JvjZoFa.js";import"./utils-Dcyt8KFL.js";import"./TextField-LVjnz6Nf.js";import"./FieldError-DpHlxz7t.js";import"./Text-D3llpeIz.js";import"./useFocusRing-DzT9pjjg.js";import"./index-flraatrJ.js";import"./index-Dn24hxdf.js";import"./Text-DSQgPK-U.js";import"./RSPContexts-B5f3SCDX.js";import"./Form-BAyWeyjg.js";import"./useFormValidation-DHqzGwKI.js";import"./Group-DeIn1EeZ.js";import"./Input-C79O0n6B.js";import"./Hidden-BSz-TAr8.js";import"./Button-Y-0P3U6L.js";import"./useLabels-BOtoWz6H.js";import"./useButton-8AyGm2ZJ.js";import"./useTextField-gEBWibuA.js";import"./useControlledState-BRDDwNe3.js";import"./useField-BHh1ZKOn.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C_dWFkaO.js";import"./Dialog-D3Frax7u.js";import"./OverlayArrow-DyMHez5P.js";import"./useResizeObserver-qh0N3Zwh.js";import"./Collection-zNyuWi72.js";import"./index-DdnDhsmA.js";import"./Separator-DVSYi0EM.js";import"./SelectionManager-JKBef09K.js";import"./useEvent-hlHKtKnL.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BMLV58w6.js";import"./useDescription-BeM__QPz.js";import"./ListKeyboardDelegate-DyxxzBwP.js";import"./PressResponder-VzzBAOpQ.js";import"./useLocalizedStringFormatter-BgGLDAJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-QDKHO_hI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-iIY1n2oT.js";import"./Button-DQNtSNmC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5Wm0lTx.js";import"./createLucideIcon-2kw6RoTp.js";import"./x-ALfYQzAP.js";import"./Heading-ClTgLYnQ.js";import"./info-BTOdQ4g2.js";import"./Popover-DaTEMQEK.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
