import{j as e,l}from"./iframe-B_9EF7Dq.js";import{S as t}from"./Skeleton-COjQIpKf.js";import{T as d}from"./TextField-BxIL6f3l.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BXmOo6S6.js";import"./utils-Nc7aiA8g.js";import"./TextField-CMLyjOkA.js";import"./FieldError-BJK3SH0A.js";import"./Text-2PCYJ-aQ.js";import"./useFocusRing-DIePChSt.js";import"./index-BjkNl2Dq.js";import"./index-D8NvM82z.js";import"./Text-DKz7R1Y9.js";import"./RSPContexts-Cr6NzFFP.js";import"./Form-BlK5Rz4M.js";import"./useFormValidation-hqHE3Pmc.js";import"./Group-B8HqE5ff.js";import"./Input-64h9h7R5.js";import"./Hidden-xunvFULB.js";import"./Button-D9HkwZ_O.js";import"./useLabels-61rfT5yO.js";import"./useButton-GH9EGPk7.js";import"./useTextField-B5C7s9vl.js";import"./useControlledState-DTUVTQNc.js";import"./useField-m_z2K0p_.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-3ouPmmU0.js";import"./Dialog-BLmPJOmf.js";import"./OverlayArrow-DmLjrALr.js";import"./useResizeObserver-DqX4n_M1.js";import"./Collection-XFQhUqFv.js";import"./index-QEbMiZIk.js";import"./Separator-CSOEmDmg.js";import"./SelectionManager-CHNFCfk4.js";import"./useEvent--ga3OshJ.js";import"./scrollIntoView-D3JBtAbF.js";import"./SelectionIndicator-D0yV6iR9.js";import"./useDescription-BXSheREr.js";import"./ListKeyboardDelegate-CIb2tA2q.js";import"./PressResponder-DddJyp0w.js";import"./useLocalizedStringFormatter-DogZXGw9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-0FPuTBqt.js";import"./VisuallyHidden-kz0xmvpU.js";import"./Button-v7hW0srN.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DICAckaY.js";import"./createLucideIcon-CTuVUGjm.js";import"./x-BJiEp__p.js";import"./Heading-cGcChm89.js";import"./info-2jLzoUfU.js";import"./Popover-DrLVhOkq.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
