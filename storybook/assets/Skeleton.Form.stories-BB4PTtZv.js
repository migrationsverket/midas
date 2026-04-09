import{j as e,l}from"./iframe-D6LQdl6O.js";import{S as t}from"./Skeleton-DBVf1opc.js";import{T as p}from"./TextField-BKF-n39z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C5ojUHeb.js";import"./utils-CZfNivSw.js";import"./FieldError-D0W-ZueW.js";import"./Text-CwW63OZO.js";import"./useFocusRing-BDbVtPGE.js";import"./index-DPCjDfDX.js";import"./index-DlVk54G_.js";import"./Text-RYp74C2J.js";import"./RSPContexts-wImFRte6.js";import"./Form-DJN2nlTm.js";import"./Group-CxixKFtH.js";import"./Input-Cmu-G9wA.js";import"./Hidden-yz3dW65o.js";import"./Button-9qwLQrmH.js";import"./useLabel-B512jCzb.js";import"./useLabels-CAs9k4GA.js";import"./useButton-CQHMF8NW.js";import"./useTextField-C5294WGM.js";import"./useControlledState-FXE_mKkD.js";import"./useField-D9v9VApI.js";import"./TextField.module-DdivwlC8.js";import"./Label-TJtPOiMs.js";import"./Dialog-CFtv-yBD.js";import"./OverlayArrow-CfDCqg6_.js";import"./useResizeObserver-CTNNK95Q.js";import"./Collection-LO6NxUTl.js";import"./index-Dp2YHi41.js";import"./Separator-Bwb7CqB-.js";import"./SelectionManager-xlGPflp-.js";import"./useEvent-CZkNrFIT.js";import"./scrollIntoView-DobeBV9b.js";import"./SelectionIndicator-Dj8nmkfr.js";import"./useDescription-Dsci8nVE.js";import"./ListKeyboardDelegate-OVGwDV0D.js";import"./PressResponder-DnVZNDoa.js";import"./useLocalizedStringFormatter-iIj43R9v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CfkmMHKA.js";import"./getScrollParent-c0trNJuS.js";import"./VisuallyHidden-Cd1-ui_g.js";import"./Dialog-Bdck8RKf.js";import"./x-CNFfLLin.js";import"./createLucideIcon-kgcsXuQA.js";import"./useLocalizedStringFormatter-rG6cuzBW.js";import"./Heading-hpYxgTmD.js";import"./Button-BVWIHAUA.js";import"./Button.module-BB7N-cLd.js";import"./info-6gR5Hkcq.js";import"./Popover-CIoEZ0C_.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
