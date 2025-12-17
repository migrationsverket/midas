import{j as e,l}from"./iframe-BkwZBgQB.js";import{S as t}from"./Skeleton-BXER2ObV.js";import{T as p}from"./TextField-BMBESfcQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CozbJEg2.js";import"./utils-DRDg4FYD.js";import"./TextField-CZ4FUFSW.js";import"./FieldError-CywfLTZm.js";import"./Text-CqraFZpH.js";import"./useFocusRing-yaIiikqm.js";import"./index-Dc04iqLv.js";import"./index-tLxIEPdH.js";import"./Text-BS5-w4Gk.js";import"./RSPContexts-DfwIAS8E.js";import"./Form-DgLgCzqI.js";import"./useFormValidation-CLD-WUtI.js";import"./Group-lJ5qZEW1.js";import"./Input-Dlvy_FLE.js";import"./Hidden-CjaNJwk3.js";import"./Button-DpNES8Mp.js";import"./useLabels-CoCvP3vg.js";import"./useButton-f6mPFvlj.js";import"./useTextField-KBZgRS_a.js";import"./useControlledState-BBX4_4Sa.js";import"./useField-DZPzH0zS.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B0ex03hS.js";import"./Dialog-CwWk4o7K.js";import"./OverlayArrow-D_E5Q14Q.js";import"./useResizeObserver-2zGeZJAK.js";import"./Collection-70mOt9uf.js";import"./index-Did7KFZZ.js";import"./Separator-C0Djmryq.js";import"./SelectionManager-Dhwe5l0W.js";import"./useEvent-CsBEnloE.js";import"./scrollIntoView-DoC-WaXh.js";import"./SelectionIndicator-D0a4Qyly.js";import"./useDescription-DJivPjTX.js";import"./ListKeyboardDelegate-BIUOdfPa.js";import"./PressResponder-DO6GQeqd.js";import"./useLocalizedStringFormatter-DU0hnyiw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DRpoKEwA.js";import"./VisuallyHidden-CfZQE67O.js";import"./Button-BXuxybWM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BDvEu7Qr.js";import"./createLucideIcon-D32Zx4L2.js";import"./x-DQzFCr8_.js";import"./Heading-DTe6A-8I.js";import"./info-D0qnYVyr.js";import"./Popover-WXNltfzT.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
