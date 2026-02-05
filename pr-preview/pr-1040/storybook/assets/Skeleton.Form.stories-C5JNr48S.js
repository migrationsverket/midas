import{j as e,l}from"./iframe-CKGACLCX.js";import{S as t}from"./Skeleton-BkHqzQBu.js";import{T as p}from"./TextField-Bwl1ATCE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B-e0hL8T.js";import"./utils-C1cYwrRL.js";import"./TextField-C5ROB1Cu.js";import"./FieldError-DI7Xo_Io.js";import"./Text-BArB5QvF.js";import"./useFocusRing-BuOXP8Hw.js";import"./index-DoQf3qpc.js";import"./index-oFvCdSIv.js";import"./Text-BXvNDZo-.js";import"./RSPContexts-B9y_dSfG.js";import"./Form-zEYGtEnB.js";import"./useFormValidation-C0Fr8G0C.js";import"./Group-DrowKYWK.js";import"./Input-DAQl0_ph.js";import"./Hidden-DNSOrP-i.js";import"./Button-54xKiT29.js";import"./useLabels-DIZFogYA.js";import"./useButton-BILFtFpB.js";import"./useTextField-BqZnJe7O.js";import"./useControlledState-DDl3VCJO.js";import"./useField-KuI-cIKx.js";import"./TextField.module-DpzeWGpt.js";import"./Label-D2RWakUL.js";import"./Dialog-CHx5kMQk.js";import"./OverlayArrow-DyMZopGC.js";import"./useResizeObserver-8gm3Wp7p.js";import"./Collection-CjyQI97O.js";import"./index-D50zBG9z.js";import"./Separator-Dt6kxqOC.js";import"./SelectionManager-Gtya-evv.js";import"./useEvent-dreapgiA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DmLJO3Jl.js";import"./useDescription-DWckP2Ca.js";import"./ListKeyboardDelegate-DovjS_lQ.js";import"./PressResponder-xTREjKZW.js";import"./useLocalizedStringFormatter-BI6jibPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CpYyHkem.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BHIvprIA.js";import"./Button-8AXkha9Y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQvS5eyN.js";import"./createLucideIcon-RPOR-KCQ.js";import"./x-DWT6hPY4.js";import"./Heading-BGD7UjEp.js";import"./info-BNJVi2Gx.js";import"./Popover-DeK1Vp5W.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
