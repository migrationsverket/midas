import{j as e,l}from"./iframe-100qMnfY.js";import{S as t}from"./Skeleton-DjAJPxZB.js";import{T as d}from"./TextField-C-P6kyiS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DftSSBLy.js";import"./utils-DREZrf5w.js";import"./TextField-7PGTd7Ep.js";import"./FieldError-BvABXoNl.js";import"./Text-B4kw0-X3.js";import"./useFocusRing-CVO60JuB.js";import"./index-DtVlivv4.js";import"./index-4-70Rh_t.js";import"./Text-B8ramOt9.js";import"./RSPContexts-C0KhFtOq.js";import"./Form-29CVYf5x.js";import"./useFormValidation-5HIGbRHA.js";import"./Group-Le6Rn5Mr.js";import"./Input-mdodqvMQ.js";import"./Hidden-BfdaDtwq.js";import"./Button-CLD1ku7M.js";import"./useLabels-ChwZdlgF.js";import"./useButton-BCpYX0mb.js";import"./useTextField-BlHJ7yDn.js";import"./useControlledState-UappQ29V.js";import"./useField-CQ-Xt63e.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-frAuwLVC.js";import"./Dialog-CwQWAlDM.js";import"./OverlayArrow-BGLiWg8z.js";import"./useResizeObserver-BueACssj.js";import"./Collection-D7aIGeON.js";import"./index-2i8EAZWI.js";import"./Separator-DYqZSnxV.js";import"./SelectionManager-BGVqBHe4.js";import"./useEvent-kutblQB0.js";import"./scrollIntoView-7R9ToXO2.js";import"./SelectionIndicator-BTSStY39.js";import"./useDescription-Dr1tnAab.js";import"./ListKeyboardDelegate-CFzyQsN-.js";import"./PressResponder-B2JtbMCO.js";import"./useLocalizedStringFormatter-X_3lrB61.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-kLQEpmJe.js";import"./VisuallyHidden-4x0NHiv7.js";import"./Button-CSE2hNCe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zfYfv8U6.js";import"./createLucideIcon-CoQzWAgu.js";import"./x-i3ng02A_.js";import"./Heading-Rgb2c7mX.js";import"./info-Dk9KzqW4.js";import"./Popover-CU8eGpke.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
