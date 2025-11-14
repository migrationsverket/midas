import{j as e,l}from"./iframe-DlRnEK4k.js";import{S as t}from"./Skeleton-BFzGXECk.js";import{T as d}from"./TextField-W6Lo_4C6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CyW5fRk7.js";import"./utils-D3WMCmhi.js";import"./TextField-qsWrc1O7.js";import"./FieldError-ByTImbG0.js";import"./Text-DzhCPMX9.js";import"./useFocusRing-CtQv74MI.js";import"./index-jCSvyxP9.js";import"./index-DJo1NE8t.js";import"./Text-pxXmd_kg.js";import"./RSPContexts-DpGYM7nP.js";import"./Form-CaNldvlJ.js";import"./useFormValidation-u37mcFJ1.js";import"./Group-D7MN01lK.js";import"./Input-b40avRsE.js";import"./Hidden-Xdwaye0t.js";import"./Button-BVP44qrj.js";import"./useLabels-CqwaHALx.js";import"./useButton-BqQtdQbm.js";import"./useTextField-BVqKXUSF.js";import"./useControlledState-RvjSpX79.js";import"./useField-D4h3c7yb.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-R2IIEnKa.js";import"./Dialog-Gebrl8eh.js";import"./OverlayArrow-Ch9hUsTZ.js";import"./useResizeObserver-Dy4Ea3jU.js";import"./Collection-CHONR_t1.js";import"./index-BwMI2uWM.js";import"./Separator-B9uyh5hr.js";import"./SelectionManager-QKHzDHyN.js";import"./useEvent-BxrOLZT_.js";import"./scrollIntoView-CMHF9MTr.js";import"./SelectionIndicator-htCv98XE.js";import"./useDescription-DJXZM-kB.js";import"./ListKeyboardDelegate-FXAaReNh.js";import"./PressResponder-C4Udsr3r.js";import"./useLocalizedStringFormatter-DyH7cYn1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CN7yZ-C_.js";import"./VisuallyHidden-ifyuuxDl.js";import"./useLocalizedStringFormatter-CMmOeTrS.js";import"./Button-DGJbzUQa.js";import"./Button.module-CtQ1deO8.js";import"./x-CreUOsvr.js";import"./createLucideIcon-BrQGCJQG.js";import"./Heading-wCvU4ISl.js";import"./info-C5nZ4AgA.js";import"./Popover-DywvHrZA.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
