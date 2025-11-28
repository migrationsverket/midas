import{j as e,l}from"./iframe-CdI6Gw-x.js";import{S as t}from"./Skeleton-CxBEq1K0.js";import{T as d}from"./TextField-CA2zWWzn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BiJQTOoL.js";import"./utils-Dp4uK2en.js";import"./TextField-Au02ukSy.js";import"./FieldError-DgNWY6t8.js";import"./Text-BUDuz-ou.js";import"./useFocusRing-BvpIo48n.js";import"./index-ssJF5vHn.js";import"./index-CZWLL0-F.js";import"./Text-B_qeVnZd.js";import"./RSPContexts-DeJrvE8h.js";import"./Form-BFNai_vM.js";import"./useFormValidation-Cvy62jZi.js";import"./Group-B0pw0RRY.js";import"./Input-CtAJc5by.js";import"./Hidden-D7pBTXR8.js";import"./Button-BGSdqTKH.js";import"./useLabels-BGn1qwKC.js";import"./useButton-BhAYw-RT.js";import"./useTextField-Dr1CHL_M.js";import"./useControlledState-D9Me4rKQ.js";import"./useField-Bgbq1SU_.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-3Y17pK9N.js";import"./Dialog-CYqlZABw.js";import"./OverlayArrow-BlHIPL7O.js";import"./useResizeObserver-DnVTZ41V.js";import"./Collection-DIGZRgQX.js";import"./index-D9uhJRXl.js";import"./Separator-CS6_S-5C.js";import"./SelectionManager-CwNFsMPR.js";import"./useEvent-BmsZz-Er.js";import"./scrollIntoView-BHz78EjI.js";import"./SelectionIndicator-DJrimYhw.js";import"./useDescription-DiNIrOvf.js";import"./ListKeyboardDelegate-D3Uq17cw.js";import"./PressResponder-LLBI89U8.js";import"./useLocalizedStringFormatter-4BabvCR2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DOiNHzSc.js";import"./VisuallyHidden-DWNUe8lB.js";import"./Button-DXIfvleB.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C-D13uLG.js";import"./createLucideIcon-B7xMdt7d.js";import"./x-DNIbSfUM.js";import"./Heading-C4vA8AiJ.js";import"./info-DPvCXaxn.js";import"./Popover-0oB6WPIR.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
