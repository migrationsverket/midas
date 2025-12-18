import{j as e,l}from"./iframe-DpkXPy0n.js";import{S as t}from"./Skeleton-DEhG4YNW.js";import{T as p}from"./TextField-BjWVkoDT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DKjRzjD7.js";import"./utils-L94HqgzK.js";import"./TextField-BXl0ueiH.js";import"./FieldError-EOCKYRyZ.js";import"./Text-GJ7yr5Nr.js";import"./useFocusRing-BK2U18QP.js";import"./index-Dz73hEDG.js";import"./index-Jpoz6mxO.js";import"./Text-7Zq3gPgG.js";import"./RSPContexts-BfaQoUqD.js";import"./Form-BNHQkg7Q.js";import"./useFormValidation-CK2dLZcq.js";import"./Group-CcT48O2s.js";import"./Input-DFS4Uub7.js";import"./Hidden-BTD0UQQQ.js";import"./Button-CHXzaCY5.js";import"./useLabels-BJw1CHux.js";import"./useButton-DOEAHNgg.js";import"./useTextField-C7wM31gS.js";import"./useControlledState-02wgDfoK.js";import"./useField-BAwJb_95.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-5i7ZbcHV.js";import"./Dialog-DHhbBpHU.js";import"./OverlayArrow-D3k4Vihs.js";import"./useResizeObserver-Dr-ZVF3X.js";import"./Collection-BEDZalt0.js";import"./index-DFiXKCdB.js";import"./Separator-CjHWfU5Z.js";import"./SelectionManager-Bn-2YX0T.js";import"./useEvent-Du52wMZn.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DzR8NV_o.js";import"./useDescription-DFbPOd92.js";import"./ListKeyboardDelegate-Bd-exi9h.js";import"./PressResponder-CXevQebg.js";import"./useLocalizedStringFormatter-MolCtrmQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-0pZ_-tsG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dc6Lrvt7.js";import"./Button-C4Ej8dq3.js";import"./Button.module-CIvIJ45H.js";import"./useLocalizedStringFormatter-B0-0j7mp.js";import"./createLucideIcon-CfN2dpy0.js";import"./x-Dh9LhewW.js";import"./Heading-CXmTa0V7.js";import"./info-Z3QOK22i.js";import"./Popover-Bwua81a_.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
