import{j as e,l}from"./iframe-DQmFqJHS.js";import{S as t}from"./Skeleton-BP6lV4Rd.js";import{T as p}from"./TextField-FmAAFJPD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Hvb8TpPD.js";import"./utils-BWrI25uH.js";import"./FieldError-CaxPGIch.js";import"./Text-D7G5v1zt.js";import"./useFocusRing-DItV0gqG.js";import"./index-DbK-4WGE.js";import"./index-D4usGqcY.js";import"./Text-Dv2vHw0w.js";import"./RSPContexts-DADBvuUA.js";import"./Form-icO7fyR0.js";import"./Group-WhaxRWQU.js";import"./Input-Bazp2pYi.js";import"./Hidden-D-Me28_w.js";import"./Button-CvJGdaRR.js";import"./useLabel-Chhaff-p.js";import"./useLabels-BqXx-hbX.js";import"./useButton-DialTVJ6.js";import"./useTextField-DLSn5o2C.js";import"./useControlledState-C5li1zvV.js";import"./useField-BpO0DqgO.js";import"./TextField.module-DdivwlC8.js";import"./Label-BuAIsOY6.js";import"./Dialog-B1Ri3IBJ.js";import"./OverlayArrow-nTMlyTz5.js";import"./useResizeObserver-B5pvTcE0.js";import"./Collection-PnuOJgDp.js";import"./index-C3OZM2iR.js";import"./Separator-BuFyYAhL.js";import"./SelectionManager-4dXQCzrP.js";import"./useEvent-CTB_6RyV.js";import"./scrollIntoView-5ZKvz8fx.js";import"./SelectionIndicator-BQPUdFWW.js";import"./useDescription-h9Po8Y0i.js";import"./ListKeyboardDelegate-BwQ5f0g5.js";import"./PressResponder-DntQbGBB.js";import"./useLocalizedStringFormatter-BqAD4sFO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpjnqEbo.js";import"./getScrollParent-DjSabJcp.js";import"./VisuallyHidden-CzKNKfXb.js";import"./ModalOverlay-B8F_0DDS.js";import"./x-Dm_VUSkk.js";import"./createLucideIcon-BG_KaWyL.js";import"./useLocalizedStringFormatter-pqjFMR5W.js";import"./Heading-GxnpDQb1.js";import"./Button-Cc39pfDx.js";import"./Button.module-BB7N-cLd.js";import"./info-DqqQK25k.js";import"./Popover-DDzYbG9A.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
