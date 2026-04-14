import{j as e,l}from"./iframe-DG8sLAOy.js";import{S as t}from"./Skeleton-COss4zGz.js";import{T as p}from"./TextField-DrS0GAe3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DxqCILv6.js";import"./utils-DLAFhier.js";import"./FieldError-DWs4hNvn.js";import"./Text-BL7Sfi9Q.js";import"./useFocusRing-mNkvIRfY.js";import"./index-Bi8SYFrz.js";import"./index-3oKnAMqx.js";import"./Text-BnRQmBDY.js";import"./RSPContexts-CMJFVu7E.js";import"./Form-DJ7nF5qY.js";import"./Group-CI_3ak_E.js";import"./Input-DLI75ww7.js";import"./Hidden-BYn-neub.js";import"./Button-e9hh4zze.js";import"./useLabel-BpCu8-Ci.js";import"./useLabels-DGk43mCP.js";import"./useButton-CwsfUSJL.js";import"./useTextField-BHNbyuqs.js";import"./useControlledState-RiscT5mJ.js";import"./useField-FnGI4Iq2.js";import"./TextField.module-DdivwlC8.js";import"./Label-DxHZz_sD.js";import"./Dialog-Cjs26p5J.js";import"./OverlayArrow-CBGpz9F8.js";import"./useResizeObserver-CsSuGL_W.js";import"./Collection-DfpZ8qtz.js";import"./index-Oda9nsrN.js";import"./Separator-CNus_F-X.js";import"./SelectionManager-BfKQiKi4.js";import"./useEvent-VtbUIOmB.js";import"./scrollIntoView-DA1Ufw7z.js";import"./SelectionIndicator-DS6X-NPe.js";import"./useDescription-CvEQI5cY.js";import"./ListKeyboardDelegate-CxhQww-5.js";import"./PressResponder-CHij106b.js";import"./useLocalizedStringFormatter-BhEtSmKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-X3MQfTqk.js";import"./getScrollParent-BX7WBRu0.js";import"./VisuallyHidden-CYqYwLo_.js";import"./Modal-BhNUo4lb.js";import"./x-BslDqAEV.js";import"./createLucideIcon-CiRaq98A.js";import"./useLocalizedStringFormatter-Bm9KZk9G.js";import"./Heading-DXcU2JCi.js";import"./Button-D1u3zQ32.js";import"./Button.module-BB7N-cLd.js";import"./info-CBmcZufD.js";import"./Popover-D3OJZ6Lc.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
