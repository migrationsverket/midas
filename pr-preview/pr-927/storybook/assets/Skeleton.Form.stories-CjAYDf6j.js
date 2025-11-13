import{j as e,l}from"./iframe-CBYo7kOx.js";import{S as t}from"./Skeleton-ChIWjSeu.js";import{T as d}from"./TextField-C3prVSSH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C1cu4mv8.js";import"./utils-CQQdeSwH.js";import"./FieldError-C58NRRtK.js";import"./Text-BG1lNmg-.js";import"./useFocusRing-pPubhNZo.js";import"./index-xwlOjluI.js";import"./index-DFpmMCSI.js";import"./Text-6Hj94soN.js";import"./RSPContexts-DDay4zhV.js";import"./Form-oSCUWjia.js";import"./useFormValidation-CEiuPnYr.js";import"./Group--0aTu2gr.js";import"./Input-CKJu3Ve9.js";import"./Hidden-Di33FxQR.js";import"./Button-Y7Y0wc_X.js";import"./useLabels-B9_I_hZt.js";import"./useButton--YtF3u4m.js";import"./useTextField-D5Nk-OG4.js";import"./useControlledState-DUwb5fNf.js";import"./useField-BhhzVzfO.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DMIWhl_m.js";import"./Dialog-BHl9DQDg.js";import"./OverlayArrow-CJTUlhKD.js";import"./useResizeObserver-Bghh1GFK.js";import"./Collection-BWZdQ8Ml.js";import"./index-CbNy3MTc.js";import"./Separator-DLE1xHj1.js";import"./SelectionManager-I2cLwJ72.js";import"./useEvent-DnWZsab6.js";import"./scrollIntoView-fUM1akbq.js";import"./SelectionIndicator-LcnD4Iuq.js";import"./useDescription-9cbwslIt.js";import"./ListKeyboardDelegate-DUhxe4TV.js";import"./PressResponder-VkDeJPC0.js";import"./useLocalizedStringFormatter-CkQti2eL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DG4JI8Dt.js";import"./VisuallyHidden-B6XBnINU.js";import"./useLocalizedStringFormatter-DzN8djJl.js";import"./Button-CUH9DE-U.js";import"./Button.module-CtQ1deO8.js";import"./x-Dd47j_Qm.js";import"./createLucideIcon-dtR5yiUS.js";import"./Heading-Dz1ZXTGp.js";import"./info-DuOukpOq.js";import"./Popover-cMKd67Az.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
