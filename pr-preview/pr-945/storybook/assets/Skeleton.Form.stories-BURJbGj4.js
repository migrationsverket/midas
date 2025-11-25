import{j as e,l}from"./iframe-DJf9qtT-.js";import{S as t}from"./Skeleton-DkeSul8M.js";import{T as d}from"./TextField-DqzVOYE_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-nRQf2-U1.js";import"./utils-DujThyaS.js";import"./TextField-CEUltA2u.js";import"./FieldError-i8n9jDus.js";import"./Text-7XMqKPUk.js";import"./useFocusRing-cUFpuTzX.js";import"./index-CdmLneX8.js";import"./index-CzbSK9MD.js";import"./Text-Dg4iii4L.js";import"./RSPContexts-B9pDNvDd.js";import"./Form-DYgj15IJ.js";import"./useFormValidation-Be4z3D39.js";import"./Group-DmE0W2Dn.js";import"./Input-B09cupc2.js";import"./Hidden-B_CnBhbh.js";import"./Button-G1a6TVgJ.js";import"./useLabels-Dx1HV4TR.js";import"./useButton-BqsG7Jfp.js";import"./useTextField-Bg_7HX8V.js";import"./useControlledState-B-NTHKxE.js";import"./useField-DKo_MAwi.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BcOaLSW7.js";import"./Dialog-L1E3LbDx.js";import"./OverlayArrow-CTfRHOoq.js";import"./useResizeObserver-B20cOGqQ.js";import"./Collection-Do-oljpW.js";import"./index-oI6_T9eU.js";import"./Separator-BOGx3q-7.js";import"./SelectionManager-DkHQjBru.js";import"./useEvent-ICf_3wb7.js";import"./scrollIntoView-BG9C9OhB.js";import"./SelectionIndicator-Bgw3dbZo.js";import"./useDescription-DdM7u0og.js";import"./ListKeyboardDelegate-Dn4wo-QZ.js";import"./PressResponder-DVk-cOlO.js";import"./useLocalizedStringFormatter-BJ_uyhGA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B6VaaqX8.js";import"./VisuallyHidden-D1WFPk8a.js";import"./Button-CSrKSu2N.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CYTevErc.js";import"./createLucideIcon-Cd2h-j1E.js";import"./x-KEcraww_.js";import"./Heading-DRe6gMjs.js";import"./info-Dh3Xpjpv.js";import"./Popover-ejKtx1kH.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
