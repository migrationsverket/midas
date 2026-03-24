import{j as e,l}from"./iframe-DZ1EsSEK.js";import{S as t}from"./Skeleton-C07DNnWO.js";import{T as d}from"./TextField-BSgAhVR9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-7KjR3Vvx.js";import"./utils-lK9T8_jl.js";import"./FieldError-BzMgxN1Q.js";import"./Text-DZdpfwqx.js";import"./useFocusRing-D_vCbsr-.js";import"./index-71P1Szw3.js";import"./index-BQnaZYa2.js";import"./Text-DqGoi7_4.js";import"./RSPContexts-BoDURVtR.js";import"./Form-Uz8HRtXw.js";import"./Group-CXVlAMhZ.js";import"./Input-CUDeexPh.js";import"./Hidden-Ds6hIAxc.js";import"./Button-ZOWpVm8T.js";import"./useLabels-D4tzMtOA.js";import"./useButton-c1Yevao-.js";import"./useTextField-B9qE1ySm.js";import"./useControlledState-CfPDeg3b.js";import"./useField-BW5TjY1c.js";import"./TextField.module-DdivwlC8.js";import"./Label-BxbGCYay.js";import"./Dialog-bAdrd9cC.js";import"./OverlayArrow-APioeWdU.js";import"./useResizeObserver-DytEHUXd.js";import"./Collection-D-oaO6og.js";import"./index-Tron79TB.js";import"./Separator-C-M-Rc9B.js";import"./SelectionManager-CIztqYLV.js";import"./useEvent-BIB_rKuR.js";import"./scrollIntoView-CULTOlwa.js";import"./SelectionIndicator-DOlDYJIj.js";import"./useDescription-XzJJ2X8U.js";import"./ListKeyboardDelegate-DZNAPElA.js";import"./PressResponder-B8Lb9S-i.js";import"./useLocalizedStringFormatter-D4af7QR2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C_PCgPyl.js";import"./getScrollParent-zITgOpZ8.js";import"./VisuallyHidden-DVsJMowt.js";import"./x-CqUvAfPO.js";import"./createLucideIcon-CHs8jxVv.js";import"./useLocalizedStringFormatter-CXoae_qU.js";import"./Heading-CE2k7wpi.js";import"./Button-BU-tH8i8.js";import"./Button.module-BB7N-cLd.js";import"./info-1DX7jtbo.js";import"./Popover-I8Us_sHn.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
