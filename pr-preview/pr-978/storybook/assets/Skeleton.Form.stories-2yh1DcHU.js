import{j as e,l}from"./iframe-Cr8ZG8qc.js";import{S as t}from"./Skeleton-ByG-Qiu_.js";import{T as p}from"./TextField-CvE-FWGn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CUSSlIXZ.js";import"./utils-1qB61-Q9.js";import"./TextField-BHmNKTRo.js";import"./FieldError-0m6zvZi0.js";import"./Text-BATGuSGj.js";import"./useFocusRing-Pn26Wr7i.js";import"./index-CK-mVwAb.js";import"./index-Cx2Cv-0i.js";import"./Text-CKb2n81p.js";import"./RSPContexts-CJfEBTxH.js";import"./Form-CFccYjWI.js";import"./useFormValidation-B-jEyMki.js";import"./Group-B3vFpxWn.js";import"./Input-CHBpSrk8.js";import"./Hidden-D4ZqPy51.js";import"./Button-DtiX6Cf7.js";import"./useLabels-JD4Ch7YH.js";import"./useButton-g037VBgg.js";import"./useTextField-CR4C79Xe.js";import"./useControlledState-Bq5QlAOQ.js";import"./useField-C5gOy8n5.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-y2T0S9BB.js";import"./Dialog-Bf0tgj6F.js";import"./OverlayArrow-DBmEBNBc.js";import"./useResizeObserver-BhLMEd_M.js";import"./Collection-BKkFvI9u.js";import"./index-DKcY2Hsy.js";import"./Separator-ClcmQ9Iw.js";import"./SelectionManager-B6vAPeUZ.js";import"./useEvent-BmxhW0Eo.js";import"./scrollIntoView-Dx_UjdcJ.js";import"./SelectionIndicator-DK1B8K9f.js";import"./useDescription-BVnW2p89.js";import"./ListKeyboardDelegate-BbfckbyY.js";import"./PressResponder-81tUL4W7.js";import"./useLocalizedStringFormatter-ClP7AtYj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DCoSIGQk.js";import"./VisuallyHidden-BNibYwT3.js";import"./Button-BxRBYVZ9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DoVeJ82i.js";import"./createLucideIcon-9WJw1iTO.js";import"./x-CfgPtn44.js";import"./Heading-DOVZhLqw.js";import"./info-Dp83SbWD.js";import"./Popover-B6LGvGQn.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
