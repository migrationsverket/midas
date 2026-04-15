import{j as e,l}from"./iframe-BQ0rH5Sa.js";import{S as t}from"./Skeleton-CerMQTsJ.js";import{T as p}from"./TextField-Bvgn55Pi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CCiBuCp1.js";import"./utils-BbCSG2Ds.js";import"./FieldError-DF9g5RSV.js";import"./Text-Uu1ScPl1.js";import"./useFocusRing-CUcWLsdz.js";import"./index-BRzOPMdu.js";import"./index-B9nWUi91.js";import"./Text-rQ7Pcap6.js";import"./RSPContexts-DXFVYlMo.js";import"./Form-CmjcdI7v.js";import"./Group-aavVp2ib.js";import"./Input-DW5nz6f0.js";import"./Hidden-B903bi5e.js";import"./Button-BWU_U6pL.js";import"./useLabel-G48bLjJ4.js";import"./useLabels-Btdu3CAb.js";import"./useButton-D_NyLkoF.js";import"./useTextField-tla-sBga.js";import"./useControlledState-Bj7Wg3w8.js";import"./useField-CrN0JmcK.js";import"./TextField.module-DdivwlC8.js";import"./Label-CEcwAWdk.js";import"./Dialog-DyTiNzWr.js";import"./OverlayArrow-DmOeEDl-.js";import"./useResizeObserver-dQOF5v6o.js";import"./Collection-DElV5k5j.js";import"./index-BgWuFVSf.js";import"./Separator-CjgADAso.js";import"./SelectionManager-DgEIU_G2.js";import"./useEvent-CV3GCwBx.js";import"./scrollIntoView-BZLVH2bl.js";import"./SelectionIndicator-CR-oyooM.js";import"./useDescription-n70PdxFN.js";import"./ListKeyboardDelegate-NXm3dSJr.js";import"./PressResponder-DlymkY53.js";import"./useLocalizedStringFormatter-yem2oIc6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDQMmawh.js";import"./getScrollParent-DbuXa8OY.js";import"./VisuallyHidden-PaW3vCB4.js";import"./ModalOverlay-Dzl52ksE.js";import"./x-DW52Hs4o.js";import"./createLucideIcon-CmTdOvE9.js";import"./useLocalizedStringFormatter-87HHeiEB.js";import"./Heading-CLHofvwk.js";import"./Button-xgeMudhK.js";import"./Button.module-BB7N-cLd.js";import"./info-CVVa66bd.js";import"./Popover-DSfuVx7p.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
