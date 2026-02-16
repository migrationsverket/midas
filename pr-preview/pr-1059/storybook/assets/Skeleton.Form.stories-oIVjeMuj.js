import{j as e,l}from"./iframe-UW8vLm1f.js";import{S as t}from"./Skeleton-DWWl_Wmg.js";import{T as p}from"./TextField-Bf8yW4Mq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-qksagpHU.js";import"./utils-CLOZA6Qr.js";import"./FieldError-2Or80766.js";import"./Text-Dog5UxXw.js";import"./useFocusRing-CMx22NqV.js";import"./index-Cq0AMSqT.js";import"./index-TM4f8tXD.js";import"./Text-B07qXiJx.js";import"./RSPContexts-YZOHPwcP.js";import"./Form-bRhU2Psn.js";import"./useFormValidation-CCF-9150.js";import"./Group-CNvFiWZZ.js";import"./Input-2lfndvCU.js";import"./Hidden-BxY2u9UP.js";import"./Button-7au76wYW.js";import"./useLabels-DT0_oM0p.js";import"./useButton-DHMLeTON.js";import"./useTextField-BxaRiYVo.js";import"./useControlledState-DrPYTGHy.js";import"./useField-C9XmYr2d.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DDcH675p.js";import"./Dialog-DuyYu8CN.js";import"./OverlayArrow-DPUo3fC4.js";import"./useResizeObserver-BcqkGcmz.js";import"./Collection-Cq3rGgRd.js";import"./index-Cs4cHTgU.js";import"./Separator-CYUS-T7f.js";import"./SelectionManager-DVFtTB8Q.js";import"./useEvent-Bfb0EIZl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CqMYmib_.js";import"./useDescription-Cf2Sv6pY.js";import"./ListKeyboardDelegate-LAGyR_aw.js";import"./PressResponder-ClYP-ws4.js";import"./useLocalizedStringFormatter-ILC68sUH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Celvu16M.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D55BsDJa.js";import"./Button-Bq-BzB1-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B2qxmHUY.js";import"./createLucideIcon-D1-wdHpr.js";import"./x-tk0MJ5Od.js";import"./Heading-C_hAtKHU.js";import"./info-BAzgAVug.js";import"./Popover-DKCElpqt.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
