import{j as e,l}from"./iframe-DwmMgugL.js";import{S as t}from"./Skeleton-CyTgdEgk.js";import{T as d}from"./TextField-SPBwQ9w0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BTulvfTd.js";import"./utils-DmBjYA7q.js";import"./TextField-CRgz-2E0.js";import"./FieldError-D5MBP0wB.js";import"./Text-BgheBiT-.js";import"./useFocusRing-CzZK1_to.js";import"./index-DjWT9C0a.js";import"./index-BRzIZAFy.js";import"./Text-uR4nWzwy.js";import"./RSPContexts-Bu2Edo6o.js";import"./Form-DoiDaZg3.js";import"./useFormValidation-DZHIdgUq.js";import"./Group-B60SHzOG.js";import"./Input-N75LxbJM.js";import"./Hidden-C52U5hS0.js";import"./Button-Dle7h4uT.js";import"./useLabels-BFzRRTRc.js";import"./useButton-CUQ_mzTp.js";import"./useTextField-BMRFKc-Q.js";import"./useControlledState-yWDFBEGR.js";import"./useField-DqouWQCD.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-4-IwTmM5.js";import"./Dialog-D1YNyvRd.js";import"./OverlayArrow-wbJ3ETWU.js";import"./useResizeObserver-BguVcYqf.js";import"./Collection-PdcqvvyM.js";import"./index-D54BHJvF.js";import"./Separator-Cnmu05dX.js";import"./SelectionManager-DgjfJV5o.js";import"./useEvent-Jcjvrjge.js";import"./scrollIntoView-CjjreEs4.js";import"./SelectionIndicator-DNV4kXHD.js";import"./useDescription-DUuO3-sD.js";import"./ListKeyboardDelegate-ar09duhk.js";import"./PressResponder-Djs9pyA3.js";import"./useLocalizedStringFormatter-BaxlK3Fj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BGXuVfZe.js";import"./VisuallyHidden-Bjv_fvAd.js";import"./useLocalizedStringFormatter-Bq9JIZi1.js";import"./Button-DoQx4OEV.js";import"./Button.module-CtQ1deO8.js";import"./x--Paj8wKV.js";import"./createLucideIcon-9R8XYZ6c.js";import"./Heading-L5Dj9Tzl.js";import"./info-CpsTd9QD.js";import"./Popover-CoUsr5oa.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
