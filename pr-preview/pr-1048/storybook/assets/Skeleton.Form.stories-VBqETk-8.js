import{j as e,l}from"./iframe-BooRIkJT.js";import{S as t}from"./Skeleton-DQpIh1-W.js";import{T as p}from"./TextField-CvlE70Tl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DWgLDj4L.js";import"./utils-744b8K7d.js";import"./useObjectRef-C69ZsrXw.js";import"./FieldError-B9tJyWw2.js";import"./Text-BN2_aXJR.js";import"./useFocusRing-zUWJjsLd.js";import"./useFocusable-7IfmtKEg.js";import"./index-DuCxnP6U.js";import"./index-DKsPf0BO.js";import"./Text-EWpD-_jr.js";import"./RSPContexts-DW-eESO9.js";import"./Form-lu2e_-CI.js";import"./useFormValidation-C73jfdEu.js";import"./Group-CSJbziv0.js";import"./Input-oa8hKKVZ.js";import"./Hidden-KVVrjxXu.js";import"./Button-BqahGGDP.js";import"./number-DfkVkf0F.js";import"./useLabels-DEfOhxO2.js";import"./useButton-Dvy7NbEr.js";import"./useTextField-CPZmhmLY.js";import"./useControlledState-BubjIjDe.js";import"./useField-DaTFMrNe.js";import"./TextField.module-DdivwlC8.js";import"./Label-DgdpX6TQ.js";import"./Dialog-BTC-_GDP.js";import"./OverlayArrow-gMNeP8g9.js";import"./useResizeObserver-PuSMNmf3.js";import"./Collection-DURp8c-8.js";import"./CollectionBuilder-ljaGCZ4i.js";import"./index-B__T8vyM.js";import"./Separator-C0Ght5Sg.js";import"./SelectionManager-D1jwCzet.js";import"./useEvent-DMEFFZ8b.js";import"./scrollIntoView-BCltoq3s.js";import"./SelectionIndicator-C9RAn77b.js";import"./useDescription-yfp6cPtE.js";import"./ListKeyboardDelegate-CE4VHnG8.js";import"./PressResponder-G8aGvnJM.js";import"./useLocalizedStringFormatter-DhPS3rKr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2SbqVTa.js";import"./getScrollParent-GNvtAy2u.js";import"./VisuallyHidden-DQnrbbQ6.js";import"./Button-t6IXiYo0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-hCEexaXZ.js";import"./createLucideIcon-CtYgVG1u.js";import"./x-Cy8qabpY.js";import"./Heading-Cm_OjdTp.js";import"./info-CLONA53z.js";import"./Popover-wdM7J1SK.js";const xe={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},o={args:{size:"large"}},s={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,o as Large,s as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,fe as __namedExportsOrder,xe as default};
