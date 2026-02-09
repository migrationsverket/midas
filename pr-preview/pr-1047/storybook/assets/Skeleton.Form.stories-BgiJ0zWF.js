import{j as e,l}from"./iframe-DVQ0lchi.js";import{S as t}from"./Skeleton-BsycUGJG.js";import{T as p}from"./TextField-CF1Qf1oC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BtIr73oG.js";import"./utils-D9gSMjNq.js";import"./TextField-E4BffJMj.js";import"./FieldError-BZ5WZxgy.js";import"./Text-BT_jL1TS.js";import"./useFocusRing-BK_0R4Cd.js";import"./index-Cj7CZlN3.js";import"./index-BwU4zFag.js";import"./Text-CG8-q4rG.js";import"./RSPContexts-qfClobBw.js";import"./Form-D2lawrpE.js";import"./useFormValidation-DsVKrsU7.js";import"./Group-CQqXr4U4.js";import"./Input-CttqmATG.js";import"./Hidden-CFa_YiSP.js";import"./Button-wRPSXeW1.js";import"./useLabels-DHWU2EjP.js";import"./useButton-7QHFLhkI.js";import"./useTextField-DdEYnQrI.js";import"./useControlledState-CVbkXYHz.js";import"./useField-CAm7Tj1f.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C1nMF9tl.js";import"./Dialog-Dns8O4wX.js";import"./OverlayArrow-wxDJs7DW.js";import"./useResizeObserver-CNC-T4O9.js";import"./Collection-BeXItj4l.js";import"./index-9ps3Ho_D.js";import"./Separator-Y48f79s-.js";import"./SelectionManager-DlhalhRG.js";import"./useEvent-B4aA5pHy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B--YyAaZ.js";import"./useDescription-BIgViSQ9.js";import"./ListKeyboardDelegate-DgB76bGG.js";import"./PressResponder-Dc_9NIP-.js";import"./useLocalizedStringFormatter-BgI6hB3-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CTzSbRK9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D9m3MBoK.js";import"./Button-UCEzLs7l.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DL9CCeFC.js";import"./createLucideIcon-C72qyWqC.js";import"./x-BawT75ci.js";import"./Heading-F4cTSlGL.js";import"./info-C6bYHcwb.js";import"./Popover-CswrE1Dt.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
