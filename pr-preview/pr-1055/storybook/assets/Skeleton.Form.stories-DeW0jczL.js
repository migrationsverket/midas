import{j as e,l}from"./iframe-CmPG4FoB.js";import{S as t}from"./Skeleton-D26rpilR.js";import{T as p}from"./TextField-Dq77JS8k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Dz9ZHp4q.js";import"./utils-BAAQ8UkA.js";import"./TextField-F0Yzbyi_.js";import"./FieldError-BBtlti2J.js";import"./Text-Cy2IEGkF.js";import"./useFocusRing-Cb7-V4u2.js";import"./index-B72qOhyX.js";import"./index-CWU1EcPI.js";import"./Text-C8u6JSGZ.js";import"./RSPContexts-Cjk68_Rq.js";import"./Form-DYt1yWSH.js";import"./useFormValidation-D90F9Ft3.js";import"./Group-BjpIyx0S.js";import"./Input-BOAD0_1o.js";import"./Hidden-BRolh-uL.js";import"./Button-BopS93OI.js";import"./useLabels-8sZBmGn_.js";import"./useButton-MazVA7qC.js";import"./useTextField-DSNR_uxW.js";import"./useControlledState-DykEM3ap.js";import"./useField-0rPxrk8p.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BOgwkVoy.js";import"./Dialog-CLg91Wd0.js";import"./OverlayArrow-Dp0oCapN.js";import"./useResizeObserver-BswNohqj.js";import"./Collection-BwbdgeJH.js";import"./index-BYkDUZ2-.js";import"./Separator-BoeSI7NJ.js";import"./SelectionManager-BkzOSiiK.js";import"./useEvent-C4oXjZGM.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-E1JMO_0P.js";import"./useDescription-DsFIZovu.js";import"./ListKeyboardDelegate-ByK-z0nv.js";import"./PressResponder-B9Q0vUTr.js";import"./useLocalizedStringFormatter-BgmHW-Xx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1HxKRMlm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Du1fTxZa.js";import"./Button-ryGeYMAs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9Gk6SCX.js";import"./createLucideIcon-BxIqJcJw.js";import"./x-FrzhBZNc.js";import"./Heading-DS5Rtu4V.js";import"./info-EyaroSL0.js";import"./Popover-_TSpe8cf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
