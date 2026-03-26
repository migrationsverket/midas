import{j as e,l}from"./iframe-CRmifMxk.js";import{S as t}from"./Skeleton-D7NueScR.js";import{T as p}from"./TextField-BJ7ywWNR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C4HV1Ofz.js";import"./utils-Dhemezbc.js";import"./FieldError-4mX3m-58.js";import"./Text-7kJBKZyv.js";import"./useFocusRing-C63zC52P.js";import"./index-DsJY3sZz.js";import"./index-C2oL4zj2.js";import"./Text-Cw5AWujN.js";import"./RSPContexts-Ch-opsTz.js";import"./Form-BdfTmg9K.js";import"./Group-BEi-QEnV.js";import"./Input-PRe3Ij8l.js";import"./Hidden-D_jN673M.js";import"./Button-Xq9T9zNn.js";import"./useLabel-CMUsO_ec.js";import"./useLabels-DRk006Lw.js";import"./useButton-BpHW9Z05.js";import"./useTextField-CQSHC6Ee.js";import"./useControlledState-DeYyUgKl.js";import"./useField-CAyp5oSJ.js";import"./TextField.module-DdivwlC8.js";import"./Label-DpfANppt.js";import"./Dialog-DNb1Uoko.js";import"./OverlayArrow-BDQxE5Aw.js";import"./useResizeObserver-Czi0T6ep.js";import"./Collection-BhxLxQcu.js";import"./index-DwLMWdc1.js";import"./Separator-CUTS7byi.js";import"./SelectionManager-DztN3z26.js";import"./useEvent-CCz8s320.js";import"./scrollIntoView-D0gLy9uc.js";import"./SelectionIndicator-kZ0Ry9SW.js";import"./useDescription-Tao1j2gm.js";import"./ListKeyboardDelegate-BPJcXB6C.js";import"./PressResponder-BT7TY4ez.js";import"./useLocalizedStringFormatter-D-hwM5Wx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CJnMoTai.js";import"./getScrollParent-DxnI4PpA.js";import"./VisuallyHidden-C9jbNlKJ.js";import"./x-COiF7Ld4.js";import"./createLucideIcon-DkATSQ6x.js";import"./useLocalizedStringFormatter-CHY6Cxq_.js";import"./Heading-B2jvBi9y.js";import"./Button-C1SdrETN.js";import"./Button.module-BB7N-cLd.js";import"./info-C89V329i.js";import"./Popover-6X5Oeaj7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
