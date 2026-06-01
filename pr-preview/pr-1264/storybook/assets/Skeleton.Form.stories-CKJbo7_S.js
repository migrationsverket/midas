import{j as e,l}from"./iframe-Bd9H7Vfx.js";import{S as t}from"./Skeleton-C6a8ijqT.js";import{T as p}from"./TextField-ZNDv4J1X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CTGVcSmh.js";import"./utils-DsmRkWxC.js";import"./FieldError-DpsZbolk.js";import"./Text-B_j7rweg.js";import"./useFocusRing-CnLPB_6u.js";import"./index-BtBPjCGs.js";import"./index-CaWaKKHJ.js";import"./Text-6cOQ6dAC.js";import"./RSPContexts-CuXYnuDl.js";import"./Form-CZMTNuAO.js";import"./Group-BIjuMvxj.js";import"./Input-DVkWBuv0.js";import"./Hidden-BsqjLjJT.js";import"./Button-BiRWLd5m.js";import"./useLabel-lBHMCnWn.js";import"./useLabels-D4u2oU-D.js";import"./useButton-BfgVUf0f.js";import"./useTextField-BHngxQZ6.js";import"./useControlledState-075FDtLg.js";import"./useField-BPmKK2hO.js";import"./TextField.module-DdivwlC8.js";import"./Label-BGHBDr8q.js";import"./Dialog-D5Rjgzgw.js";import"./OverlayArrow-BSvQtyR7.js";import"./useResizeObserver-BW4mypps.js";import"./Collection-DWNfCn8n.js";import"./index-CRFez_EJ.js";import"./Separator-Dzzbxscp.js";import"./SelectionManager-5QY68epY.js";import"./useEvent-DN0cDM1V.js";import"./scrollIntoView-Bf_lnXkb.js";import"./SelectionIndicator-CQVWmUVk.js";import"./useDescription-C3g1on3s.js";import"./ListKeyboardDelegate-JM4p0mT-.js";import"./PressResponder-OkwJmME0.js";import"./useLocalizedStringFormatter-BsyS8WPI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C-EkjH-D.js";import"./getScrollParent-Cbimak5V.js";import"./VisuallyHidden-ytL0956d.js";import"./ModalOverlay-C-Ael9T-.js";import"./x-CYsXEKRm.js";import"./createLucideIcon-DpMYq6qz.js";import"./useLocalizedStringFormatter-DCais5ZN.js";import"./Heading-DoXH1r2E.js";import"./Button-6v77JWTX.js";import"./Button.module-BB7N-cLd.js";import"./info-Ey6aZQdZ.js";import"./Popover-4JKvDwLT.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
