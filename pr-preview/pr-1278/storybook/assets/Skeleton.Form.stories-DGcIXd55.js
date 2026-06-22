import{j as e,l}from"./iframe-CN8uU3WK.js";import{S as t}from"./Skeleton-NqV0JUNd.js";import{T as p}from"./TextField-dCM_xcei.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BSh_FmbF.js";import"./utils-CZdGWMo4.js";import"./FieldError-CQyQ10Lj.js";import"./Text-DntZGJ-I.js";import"./useFocusRing-CUcvtRrG.js";import"./index-C0vdhhw7.js";import"./index-Cks_K4jE.js";import"./Text-DvVr5DU7.js";import"./RSPContexts-FWWfLY0V.js";import"./Form-CYOLK2lS.js";import"./Group-ya_6Tkk0.js";import"./Input-CjR0E-XM.js";import"./Hidden-i_4Qa2VQ.js";import"./Button-BnmvhNcQ.js";import"./useLabel-DgboamvD.js";import"./useLabels-Do1n23m3.js";import"./useButton-DjAvv2ab.js";import"./useTextField-BjRoFdzK.js";import"./useControlledState-n2go4XxZ.js";import"./useField-BPezoI5_.js";import"./TextField.module-DdivwlC8.js";import"./Label-DH_a-MIE.js";import"./Dialog-Y4sieQzC.js";import"./OverlayArrow-DY03tKAK.js";import"./useResizeObserver-PMRAu2PC.js";import"./Collection-ClFv3c_D.js";import"./index-hDLoztzN.js";import"./Separator-aXVDjkAu.js";import"./SelectionManager-DC7iicly.js";import"./useEvent-B3wdZg5O.js";import"./scrollIntoView-dW3ZURKy.js";import"./SelectionIndicator-CK6GDs9o.js";import"./useDescription-DVfq5zSO.js";import"./ListKeyboardDelegate-DTVdwrrg.js";import"./PressResponder-DKwZi8Z6.js";import"./useLocalizedStringFormatter-BM2-R2IO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoqKfwmY.js";import"./getScrollParent-g_sxJttE.js";import"./VisuallyHidden-D1gwq_r2.js";import"./ModalOverlay-CHz0Hb7j.js";import"./x-3fndBwRx.js";import"./createLucideIcon-D_RMlAle.js";import"./useLocalizedStringFormatter-C8jrJhCU.js";import"./Heading-uOARh3Em.js";import"./Button-BVfd33cu.js";import"./Button.module-BB7N-cLd.js";import"./info-BrWWqy7C.js";import"./Popover-BiyZzAmm.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
