import{j as e,l}from"./iframe-CFSsLpc3.js";import{S as t}from"./Skeleton-DIcHu_Qd.js";import{T as p}from"./TextField-DqU2m4Gw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Df468P-y.js";import"./utils-CgvAx7Eh.js";import"./FieldError-D6ZDrv96.js";import"./Text-CxyFIK0P.js";import"./useFocusRing-BscyqCba.js";import"./index-ov8VoHM9.js";import"./index-B-NeDNxk.js";import"./Text-DJekINTm.js";import"./RSPContexts-Dl7sCpzY.js";import"./Form-DqURqGCQ.js";import"./Group-Db9bSCAd.js";import"./Input-DlF7f-nw.js";import"./Hidden-CLuFLk7t.js";import"./Button-BA4ocZWH.js";import"./useLabel-3d-jaeMs.js";import"./useLabels-CNE6UZfT.js";import"./useButton-ddrptB5P.js";import"./useTextField-B4DwmSYD.js";import"./useControlledState-CbBMw6Jg.js";import"./useField-CPTxJIMP.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bgvq3kDD.js";import"./Dialog-CKK-WVHx.js";import"./OverlayArrow-CSP9UkYr.js";import"./useResizeObserver-CIJyvcl5.js";import"./Collection-Cd7KKzRT.js";import"./index-OvV4dgoH.js";import"./Separator-rmfqRqKb.js";import"./SelectionManager-88QcvJjb.js";import"./useEvent-DS2KGNQU.js";import"./scrollIntoView-DIXoB_F8.js";import"./SelectionIndicator-8krNnwqX.js";import"./useDescription-DR9fGcHM.js";import"./ListKeyboardDelegate-DF2nCrcP.js";import"./PressResponder-Ce1RPxUw.js";import"./useLocalizedStringFormatter-kozoot1o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DG4f8YqV.js";import"./getScrollParent-meA_uFiD.js";import"./VisuallyHidden-CJUN9Oa8.js";import"./ModalOverlay-BVhnULLD.js";import"./x-BqPwmm8B.js";import"./createLucideIcon-DwZpSpKK.js";import"./useLocalizedStringFormatter-9a5YAOSR.js";import"./Heading-BC1iKRRv.js";import"./Button-BpZ-gEJa.js";import"./Button.module-BB7N-cLd.js";import"./info-Cko7SSA9.js";import"./Popover-rwzWFW5V.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
