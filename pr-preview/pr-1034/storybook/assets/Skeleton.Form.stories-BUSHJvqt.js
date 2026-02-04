import{j as e,l}from"./iframe-CtlzUTic.js";import{S as t}from"./Skeleton-nLq8M9sz.js";import{T as p}from"./TextField-Csq6zsaT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase--Sbuk8Q5.js";import"./utils-Be0LSfA6.js";import"./TextField-C80CR2Ko.js";import"./FieldError-B85O3F2_.js";import"./Text-BW699DP7.js";import"./useFocusRing-DJMLYrjC.js";import"./index-E52zMlCa.js";import"./index-5SHCtBg6.js";import"./Text-DzgVGaDU.js";import"./RSPContexts-CQZGhvKo.js";import"./Form-UrwxiUY0.js";import"./useFormValidation-CxR3xnZI.js";import"./Group-DSHUOC1u.js";import"./Input-DrsMrdpe.js";import"./Hidden-DGVzl5uY.js";import"./Button-DH5UoxLr.js";import"./useLabels-BgCIJPu_.js";import"./useButton-DSvEAlkb.js";import"./useTextField-DOKiG94a.js";import"./useControlledState-CfbZjGvX.js";import"./useField-jOtxtfA7.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DU16NEdC.js";import"./Dialog-najdgrHS.js";import"./OverlayArrow-BoJEOXyb.js";import"./useResizeObserver-Dk7hpC7i.js";import"./Collection-ZWhUlmEB.js";import"./index-BxlIXLxQ.js";import"./Separator-BJjEPYu_.js";import"./SelectionManager-CbX-eWig.js";import"./useEvent-7Vlz65b-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BxaIduyJ.js";import"./useDescription-DnlIBvPV.js";import"./ListKeyboardDelegate-lZINxfqG.js";import"./PressResponder-i5r1OmEb.js";import"./useLocalizedStringFormatter-C0z3Bv7k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCFHBOij.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CQrctRJU.js";import"./Button-Ki9bkVZp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-eyJdwfwF.js";import"./createLucideIcon-DLRJv2UH.js";import"./x-DPwbIeop.js";import"./Heading-wObVOJxK.js";import"./info-B4bUa8f0.js";import"./Popover-BPMUKrH2.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ge=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ge as __namedExportsOrder,ce as default};
