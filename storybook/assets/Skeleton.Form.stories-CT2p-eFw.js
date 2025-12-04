import{j as e,l}from"./iframe-BnvIDWhX.js";import{S as t}from"./Skeleton--jzwBvC6.js";import{T as d}from"./TextField-Bvpi8cpq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DPF0yuXk.js";import"./utils-BvQhf5aw.js";import"./TextField-CZbqpI4x.js";import"./FieldError-BXYDl_68.js";import"./Text-CcU36hjn.js";import"./useFocusRing-kt0fM5Eg.js";import"./index-DZ5e4qNw.js";import"./index-BBb9LXyW.js";import"./Text-C7YaW3xP.js";import"./RSPContexts-p_3PQZMd.js";import"./Form-CksB7z6J.js";import"./useFormValidation-DldjmbqA.js";import"./Group-UDO2qmDm.js";import"./Input-CxXqC4v8.js";import"./Hidden-SpBz5CyG.js";import"./Button-2vHqoAit.js";import"./useLabels-C7yBIXeo.js";import"./useButton-Dxyw1gnX.js";import"./useTextField-DK2zy1S8.js";import"./useControlledState-DHwPIbAN.js";import"./useField-D9ELBiEA.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ASHlLgAC.js";import"./Dialog-BT7KHO7D.js";import"./OverlayArrow-gsPDqO15.js";import"./useResizeObserver-DtWdT9hl.js";import"./Collection-BJ4Qy3kN.js";import"./index-Bd26Brwk.js";import"./Separator-DoOZOSYN.js";import"./SelectionManager-DrNCUxIW.js";import"./useEvent-CctKA4oo.js";import"./scrollIntoView-DcjaWzfx.js";import"./SelectionIndicator-eOyvRYaz.js";import"./useDescription-BRbn5Aqy.js";import"./ListKeyboardDelegate-DDm69ZdR.js";import"./PressResponder-CsH5riWB.js";import"./useLocalizedStringFormatter-CQGgYv2z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CPzYdZ1O.js";import"./VisuallyHidden-BHMQPsJv.js";import"./Button-DqvzVHOE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCUIru9v.js";import"./createLucideIcon-CfqM0T4F.js";import"./x-tgwQ7WbQ.js";import"./Heading-bqih8IZA.js";import"./info-DOymIFIY.js";import"./Popover-CT_Naab_.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
