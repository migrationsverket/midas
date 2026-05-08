import{j as e,l}from"./iframe-u1Lp3cWH.js";import{S as t}from"./Skeleton-ZGb67PW0.js";import{T as p}from"./TextField-CDxHtsdw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ozj8clX9.js";import"./utils-Gcf78cCr.js";import"./FieldError-D-oYDuTv.js";import"./Text-DNrFEZpf.js";import"./useFocusRing-Bt9lRSbz.js";import"./index-vqf3vopk.js";import"./index-CV03FtcW.js";import"./Text-slIPEHAS.js";import"./RSPContexts-DkuerkqF.js";import"./Form-D4DocfVX.js";import"./Group-D9LK4iRd.js";import"./Input-BPY-OfvJ.js";import"./Hidden-C90fOqUW.js";import"./Button-YBWgb3jY.js";import"./useLabel-CfQyR9Ip.js";import"./useLabels-XR_-vmuV.js";import"./useButton-CJlrbFFl.js";import"./useTextField-D94UlNAr.js";import"./useControlledState-Dq3PeISU.js";import"./useField-Dk69aVnb.js";import"./TextField.module-DdivwlC8.js";import"./Label-D4g6js0I.js";import"./Dialog-CGsfVXRQ.js";import"./OverlayArrow-DEsyUpqU.js";import"./useResizeObserver-F0kdb6Hu.js";import"./Collection-ScDJmlrl.js";import"./index-Y44MDtrN.js";import"./Separator-C9aHwUF3.js";import"./SelectionManager-BfSBhsyy.js";import"./useEvent-Bs3S41aN.js";import"./scrollIntoView-i7bgZAzR.js";import"./SelectionIndicator-CxRRdMcp.js";import"./useDescription-2tob2pF0.js";import"./ListKeyboardDelegate-DiyRSclW.js";import"./PressResponder-DE-HejzW.js";import"./useLocalizedStringFormatter-BuqYPbAV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DEDnfxzU.js";import"./getScrollParent-dU7UAF5-.js";import"./VisuallyHidden-D7l7xynE.js";import"./ModalOverlay-Ly6FYZws.js";import"./x-BwlYKxxl.js";import"./createLucideIcon-DswZ9rJ-.js";import"./useLocalizedStringFormatter-9sVAI35M.js";import"./Heading-D_cJLnK6.js";import"./Button-CeEdTiGh.js";import"./Button.module-BB7N-cLd.js";import"./info-BZoorwl1.js";import"./Popover-CgT6YQ6e.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
