import{j as e,l}from"./iframe-BNcdEUXj.js";import{S as t}from"./Skeleton-B2_HNsBZ.js";import{T as p}from"./TextField-BzSjwzZz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-JBchZ8iW.js";import"./utils-Bxcv5MPT.js";import"./TextField-CEbDw2F6.js";import"./FieldError-BtZ0TnQj.js";import"./Text-B53mvpty.js";import"./useFocusRing-C6YM28qN.js";import"./index-TMTY01Ep.js";import"./index-DSdXJGSi.js";import"./Text-DR0_UwJ4.js";import"./RSPContexts-Bi-J2mqx.js";import"./Form-BDqzKtt_.js";import"./useFormValidation-BlNQ6Bf-.js";import"./Group-wJyjk7qq.js";import"./Input-irlnrlct.js";import"./Hidden-B0zthcPy.js";import"./Button-CaKLSY2s.js";import"./useLabels-Cq9B0I-L.js";import"./useButton-DEu1-L8J.js";import"./useTextField-DdHnyVt6.js";import"./useControlledState-DGlddZrL.js";import"./useField-CjdfMRgy.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cf8xiPUh.js";import"./Dialog-rf362-90.js";import"./OverlayArrow-WKc1anHT.js";import"./useResizeObserver-DbfjkM1E.js";import"./Collection-Bh0FLaqb.js";import"./index-CPL2LM8Z.js";import"./Separator-Cvljqg2w.js";import"./SelectionManager-B7rIaUrL.js";import"./useEvent-SGz4Axl2.js";import"./scrollIntoView-BYkZm8rI.js";import"./SelectionIndicator-C0ddJV60.js";import"./useDescription-BasjIu_5.js";import"./ListKeyboardDelegate-BWVHPwUZ.js";import"./PressResponder-DgW9No9g.js";import"./useLocalizedStringFormatter-QBa3_aSW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BR4s5BG-.js";import"./VisuallyHidden-C4uEYBAI.js";import"./Button-BL-fsXV7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfXz0OFm.js";import"./createLucideIcon-E9DumC9p.js";import"./x-BEnNVYyo.js";import"./Heading-CVL2vkZG.js";import"./info-BmwtRc_D.js";import"./Popover-DrXUutE7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
