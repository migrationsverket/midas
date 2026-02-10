import{j as e,l}from"./iframe-D6ADc9_c.js";import{S as t}from"./Skeleton-BmrECQS7.js";import{T as p}from"./TextField-BrL6tLI2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BH6ea1yr.js";import"./utils-Co-WyaVB.js";import"./TextField-Bv0TFicT.js";import"./FieldError-DfqU_xU4.js";import"./Text-Uw6K1FwN.js";import"./useFocusRing-QJf4MrA-.js";import"./index-D1aif8GU.js";import"./index-Ctq9vtSb.js";import"./Text-Cpi5Nlnk.js";import"./RSPContexts-CeqDtQgt.js";import"./Form-DN_MDLWN.js";import"./useFormValidation-BRorHZ80.js";import"./Group-BZ36xxak.js";import"./Input-CjgFuf-r.js";import"./Hidden-BAUwWGh2.js";import"./Button-BD1tt09E.js";import"./useLabels-BSs_hlue.js";import"./useButton-RmGmQnEE.js";import"./useTextField-DRJk2b6v.js";import"./useControlledState-CEf-u91N.js";import"./useField-DhT5MPzX.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DdKVhDr8.js";import"./Dialog-DrsU59Bj.js";import"./OverlayArrow-BVnYCVZu.js";import"./useResizeObserver-RQnHnL5i.js";import"./Collection-DYRtxejX.js";import"./index-Dt_fZTmi.js";import"./Separator-63iumiBg.js";import"./SelectionManager-BRVSpNSw.js";import"./useEvent-CyxeHTbo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-zfcXVD4I.js";import"./useDescription-3hQMCdT7.js";import"./ListKeyboardDelegate-CB_Qp04D.js";import"./PressResponder-DKjG_hpq.js";import"./useLocalizedStringFormatter-BzbrAoH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CmNGN7CG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CBsbYA_W.js";import"./Button-CIEzI-V7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTSyD4LW.js";import"./createLucideIcon-D0OOsTjF.js";import"./x-5V4xGIcw.js";import"./Heading-aqQpVgYi.js";import"./info-D2ATOYqN.js";import"./Popover-DXBqsnMf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
