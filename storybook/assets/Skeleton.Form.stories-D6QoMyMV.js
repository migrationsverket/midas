import{j as e,l}from"./iframe-BsLcG5dW.js";import{S as t}from"./Skeleton-C98eqD5q.js";import{T as p}from"./TextField-CCJqip25.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DOVnmrU_.js";import"./utils-D4ybwJ5t.js";import"./TextField-C1jLkXeC.js";import"./FieldError-5ugqjl9x.js";import"./Text-BSyI915z.js";import"./useFocusRing-CRMF4aev.js";import"./index-CzmRrwoB.js";import"./index-FzS7-Zeo.js";import"./Text-DxPppo1m.js";import"./RSPContexts-hJUcswH1.js";import"./Form-D4UvjssS.js";import"./useFormValidation-8zANhESY.js";import"./Group-BxhjRX3R.js";import"./Input-CpC47WHk.js";import"./Hidden-qLdjn3wv.js";import"./Button-BTB8VJIr.js";import"./useLabels-BR2Qh3rY.js";import"./useButton-Ba6tOTsI.js";import"./useTextField-DqC3KJ-y.js";import"./useControlledState-C4DuSNuI.js";import"./useField-BMLcCBUB.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-sFF3U46M.js";import"./Dialog-OV4kgN1K.js";import"./OverlayArrow-BE4lLXcC.js";import"./useResizeObserver-BJ3calFd.js";import"./Collection-Cx77u14n.js";import"./index-CIQSoHVc.js";import"./Separator-D_jOc6Zn.js";import"./SelectionManager-CvzC32Xt.js";import"./useEvent-aUuuXZGE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CguOllKQ.js";import"./useDescription-Bh7CB7XY.js";import"./ListKeyboardDelegate-BTIuYiNN.js";import"./PressResponder-BYT0Rh0_.js";import"./useLocalizedStringFormatter-gMpMxUKt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bb2V3bt4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-_HN--CTP.js";import"./Button-B2aniDfg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DPMXn8cB.js";import"./createLucideIcon-18oN6ckY.js";import"./x-D-I5fcbM.js";import"./Heading-B-TWaQON.js";import"./info-YZ8kz2IS.js";import"./Popover-C-8wuYJQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
