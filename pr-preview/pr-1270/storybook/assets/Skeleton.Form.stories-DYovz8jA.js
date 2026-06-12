import{j as e,l}from"./iframe-D6gs3wS5.js";import{S as t}from"./Skeleton-B6YxsJkM.js";import{T as p}from"./TextField-ORgA_oCs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DgzuhQ9N.js";import"./utils-DJQYVgmX.js";import"./FieldError-Bf6pWkxo.js";import"./Text-BlJm85ZR.js";import"./useFocusRing-CFifySwi.js";import"./index-eJbc0aTW.js";import"./index-Ce1ePnt0.js";import"./Text-DqH78Bzr.js";import"./RSPContexts-h4eiuWjg.js";import"./Form-9Z_XXzsk.js";import"./Group-CPeAu2W-.js";import"./Input-mOQPu2PR.js";import"./Hidden-Chxa0iBH.js";import"./Button-CbEqyxyu.js";import"./useLabel-cgRMBKD-.js";import"./useLabels-5rE94Eky.js";import"./useButton--ll78HR1.js";import"./useTextField-CbgRKsHa.js";import"./useControlledState-CUa1KmDW.js";import"./useField-D_VgcOBp.js";import"./TextField.module-DdivwlC8.js";import"./Label-DQtpeuL0.js";import"./Dialog-C98XP9pU.js";import"./OverlayArrow-Cu6bIr93.js";import"./useResizeObserver-DN7Cfe0F.js";import"./Collection-BPj3IxkI.js";import"./index-MBhbw5TK.js";import"./Separator-DFBkIcjx.js";import"./SelectionManager-D39yDHWQ.js";import"./useEvent-BmTKd3HL.js";import"./scrollIntoView-RTV5yabh.js";import"./SelectionIndicator-BbY2R1af.js";import"./useDescription-ChQWj-NI.js";import"./ListKeyboardDelegate-B-UkNWQd.js";import"./PressResponder-65KHhKmn.js";import"./useLocalizedStringFormatter-lMnXoQqL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CdlQofa4.js";import"./getScrollParent-Do3-zmpB.js";import"./VisuallyHidden-DqFWHqpC.js";import"./ModalOverlay-Dy0Gqqwj.js";import"./x-JmNjUnkH.js";import"./createLucideIcon-Cx44WpFS.js";import"./useLocalizedStringFormatter-CkggrktT.js";import"./Heading-DzMuGclR.js";import"./Button-BVEXhnip.js";import"./Button.module-BB7N-cLd.js";import"./info-CHS89hJ0.js";import"./Popover-BFkht2ft.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
