import{j as e,l}from"./iframe-C4nZhlHp.js";import{S as t}from"./Skeleton-BnIAOp1R.js";import{T as p}from"./TextField-WRu-aSie.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BMu_KigB.js";import"./utils-BThtOLN3.js";import"./TextField-Ba20M-_9.js";import"./FieldError-BIrWKztk.js";import"./Text-BtqzfC97.js";import"./useFocusRing-CUt9jPRY.js";import"./index-CdzEK6sL.js";import"./index-Bcy_e8uM.js";import"./Text-Bl0ISbQ7.js";import"./RSPContexts-WH4nMcxQ.js";import"./Form-CWA6zdQ3.js";import"./useFormValidation-CXbCMZ0J.js";import"./Group-CIB_c7rK.js";import"./Input-jD2wZ8AI.js";import"./Hidden-DGAgWOv2.js";import"./Button-BoerEFmi.js";import"./useLabels-DFzN42D5.js";import"./useButton-DpHHTz7A.js";import"./useTextField-CocPWATQ.js";import"./useControlledState-CJQYAY_g.js";import"./useField-B48LiqQ_.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-nMZHoR1R.js";import"./Dialog-B3G-tmn3.js";import"./OverlayArrow-CKwxQumt.js";import"./useResizeObserver-CZeyxuFP.js";import"./Collection-BYOOna-_.js";import"./index-CrrCrdFV.js";import"./Separator-CH_H607m.js";import"./SelectionManager-QICQi-ba.js";import"./useEvent-BdTEiYUL.js";import"./scrollIntoView-DvFBFjjW.js";import"./SelectionIndicator-CvD-2Szl.js";import"./useDescription-C8Gi_2UD.js";import"./ListKeyboardDelegate-BH6lIL_e.js";import"./PressResponder-Bf9Ccmnl.js";import"./useLocalizedStringFormatter-6ucjq8Cp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CtN2yNgt.js";import"./VisuallyHidden-BNOgBQKx.js";import"./useLocalizedStringFormatter-CL3ousm2.js";import"./Button-Dfl_9rMf.js";import"./Button.module-CtQ1deO8.js";import"./x-D5_o8_hp.js";import"./createLucideIcon-Cca3XJOR.js";import"./Heading-yb9MM0bb.js";import"./info-DMZ8PHWD.js";import"./Popover-DeuSIbOO.js";import"./Input-CTleftf6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
