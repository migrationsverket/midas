import{j as e,l}from"./iframe-DpTmCcsu.js";import{S as t}from"./Skeleton-Cu-Jv0us.js";import{T as p}from"./TextField-DjmmDjP1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-dNtwCqp1.js";import"./utils-BkAa9oCc.js";import"./FieldError-DZQ02WXe.js";import"./Text-C2ABOPKT.js";import"./useFocusRing-p-K2lh1y.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./Text-DZjjFYeH.js";import"./RSPContexts-CDes9nfa.js";import"./Form-ZmL5cGy_.js";import"./Group-CjaNmGuh.js";import"./Input-Dmb9VKDV.js";import"./Hidden-pLTvcnD_.js";import"./Button-BsQKBFvZ.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./useTextField-y31WfOTf.js";import"./useControlledState-Du11SrDH.js";import"./useField-BZUShFHQ.js";import"./TextField.module-DdivwlC8.js";import"./Label-Cuy3kht_.js";import"./Dialog-DqnNjaJi.js";import"./OverlayArrow-C3m7dJ5y.js";import"./useResizeObserver-CX6ENk_I.js";import"./Collection-pS06VS6s.js";import"./index-BChFUTeo.js";import"./Separator-DQbe1b_J.js";import"./SelectionManager-EeeeUcvE.js";import"./useEvent-aGapLNe8.js";import"./scrollIntoView-D1143tc0.js";import"./SelectionIndicator-CoqMXBj6.js";import"./useDescription-ZwNvLjiW.js";import"./ListKeyboardDelegate-BqFXxQy7.js";import"./PressResponder-DnodVIaB.js";import"./useLocalizedStringFormatter-B3B7XcvV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUfhnEHD.js";import"./getScrollParent-BTKk9p6-.js";import"./VisuallyHidden-Dp3u6Svq.js";import"./ModalOverlay-DavhYSKE.js";import"./x-Ch6sGbPf.js";import"./createLucideIcon-BVEhdOTx.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./Heading-D1Oj7BSx.js";import"./Button-BML3brTK.js";import"./Button.module-BB7N-cLd.js";import"./info-CBNYmXvC.js";import"./Popover-DO1yXugR.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
