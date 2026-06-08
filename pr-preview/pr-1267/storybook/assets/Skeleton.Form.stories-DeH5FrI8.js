import{j as e,l}from"./iframe-_-I-4bmX.js";import{S as t}from"./Skeleton-BIxYMdV5.js";import{T as p}from"./TextField-DOswS6DE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-xie11rcB.js";import"./utils-DzcaSYTj.js";import"./FieldError-B-jtvqK5.js";import"./Text-Cm78CGL1.js";import"./useFocusRing-CMcqGwdV.js";import"./index-0H3AV5Mt.js";import"./index-BRnMJqMO.js";import"./Text-CY5kPrUO.js";import"./RSPContexts-CMPH0wn8.js";import"./Form-BKf2BDdV.js";import"./Group-DnmxEfp3.js";import"./Input-urStWhUC.js";import"./Hidden-BeH_JIKl.js";import"./Button-tRjJFBuJ.js";import"./useLabel-B1uHly2S.js";import"./useLabels-DUwK_POH.js";import"./useButton-CyQYrR3g.js";import"./useTextField-CcAW_0Ue.js";import"./useControlledState-CitIWhQv.js";import"./useField-D0ShrdTz.js";import"./TextField.module-DdivwlC8.js";import"./Label-qHS745gd.js";import"./Dialog-CE24Vm4u.js";import"./OverlayArrow-CdzLxPq_.js";import"./useResizeObserver-CWYs3QmI.js";import"./Collection-CWOLxi88.js";import"./index-uCmAEo7z.js";import"./Separator-CK8hcPJB.js";import"./SelectionManager-CKx8RmD7.js";import"./useEvent-BT5AWThM.js";import"./scrollIntoView-CFKl5YUv.js";import"./SelectionIndicator-Civ_JKaJ.js";import"./useDescription-BdnU8zj8.js";import"./ListKeyboardDelegate-0iBGtitd.js";import"./PressResponder-De-KfKJN.js";import"./useLocalizedStringFormatter-CCGAROZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Db4Op6I0.js";import"./getScrollParent-BjhgnRjO.js";import"./VisuallyHidden-CK8kGowV.js";import"./ModalOverlay-DfmVS9JP.js";import"./x-D2ojVt-R.js";import"./createLucideIcon-0TA1baeh.js";import"./useLocalizedStringFormatter-Cf6u5T_L.js";import"./Heading-D9DO-Wov.js";import"./Button-Cur5alMr.js";import"./Button.module-BB7N-cLd.js";import"./info-B3fRpz2z.js";import"./Popover-DrgSr3ki.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
