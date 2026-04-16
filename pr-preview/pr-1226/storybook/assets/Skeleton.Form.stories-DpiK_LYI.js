import{j as e,l}from"./iframe-DLmeXnKv.js";import{S as t}from"./Skeleton-DDRHONZT.js";import{T as p}from"./TextField-DW4Luftp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BQvKvJxB.js";import"./utils-ClLZ4yi-.js";import"./FieldError-BpDzH8Cd.js";import"./Text-as2Y-4wz.js";import"./useFocusRing-Chec2SQM.js";import"./index-CXmu4Dre.js";import"./index-Bf1sSXM2.js";import"./Text-ByAHNZXR.js";import"./RSPContexts-DA-h5R_C.js";import"./Form-D9z8hvZj.js";import"./Group-CuXfT3dh.js";import"./Input-CcIXyW6y.js";import"./Hidden-DYR-bjkD.js";import"./Button-6oEuMc47.js";import"./useLabel-DFg61T6F.js";import"./useLabels-CdIpmnty.js";import"./useButton-2j0Kbf_l.js";import"./useTextField-BEsTiIX_.js";import"./useControlledState-B3HwZ_qH.js";import"./useField-C-J_0N0F.js";import"./TextField.module-DdivwlC8.js";import"./Label-xngpEuzc.js";import"./Dialog-CKD2jTTJ.js";import"./OverlayArrow-DHWOJV9Q.js";import"./useResizeObserver-DDCJCKFG.js";import"./Collection-BN6mLPtZ.js";import"./index-D4QiN2go.js";import"./Separator-CJAQYS8Y.js";import"./SelectionManager-DWkTWies.js";import"./useEvent-D3OHHv5s.js";import"./scrollIntoView-DOnnrSvN.js";import"./SelectionIndicator-Cy4dV5Da.js";import"./useDescription-B42TuL4b.js";import"./ListKeyboardDelegate-Cr-a3LsS.js";import"./PressResponder-yUfG0WEN.js";import"./useLocalizedStringFormatter-CjQq4jGT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGjDSiHx.js";import"./getScrollParent-B00tpoYc.js";import"./VisuallyHidden-BCbNtM-G.js";import"./ModalOverlay-DmqLMWJI.js";import"./x-WR_Pezhl.js";import"./createLucideIcon-Cb9jSIDP.js";import"./useLocalizedStringFormatter-CtddYHoj.js";import"./Heading-UueCPB47.js";import"./Button-CmoC0nDS.js";import"./Button.module-BB7N-cLd.js";import"./info-KJtQdgZ8.js";import"./Popover-dlczDKp1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
