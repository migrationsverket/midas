import{j as e,l}from"./iframe-BaDPacjd.js";import{S as t}from"./Skeleton-BJN6sEWd.js";import{T as p}from"./TextField-nOhUobmx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Da4npc_I.js";import"./utils-DIlgsg9w.js";import"./FieldError-CCoQDHBS.js";import"./Text-D9IIAziF.js";import"./useFocusRing-CU-3-Yvs.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./Text-maDwTHxG.js";import"./RSPContexts-Q8mL0bRp.js";import"./Form-oBhPq7WZ.js";import"./Group-DLvsScbU.js";import"./Input-BrXEUkLM.js";import"./Hidden-wYkIMllK.js";import"./Button-xqG4BSxe.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./useTextField-BfD0yxsi.js";import"./useControlledState-C7Qyb7bs.js";import"./useField-DIToGq9j.js";import"./TextField.module-DdivwlC8.js";import"./Label-BG4tYNy3.js";import"./Dialog-BYeY2Kq4.js";import"./OverlayArrow-Dxq5i1Js.js";import"./useResizeObserver-BMJo5MZf.js";import"./Collection-DwVoD4ZF.js";import"./index-zgqX2Yvv.js";import"./Separator-CkGYv_lX.js";import"./SelectionManager-CWk_F_tK.js";import"./useEvent-DWbcd_98.js";import"./scrollIntoView-DP2ELaPl.js";import"./SelectionIndicator-E2Oo2YPO.js";import"./useDescription-4MxSlUac.js";import"./ListKeyboardDelegate-BvsWrhNC.js";import"./PressResponder-D4J1Z43q.js";import"./useLocalizedStringFormatter-D18yrwwN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoR0ZV4_.js";import"./getScrollParent-CQLO__Ec.js";import"./VisuallyHidden-Cc7_mEU0.js";import"./ModalOverlay-CMvAZP1n.js";import"./x-CIJW-8OQ.js";import"./createLucideIcon-Cn3KNUPN.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./Heading-Bf9R16Cd.js";import"./Button-BbMcm-s_.js";import"./Button.module-BB7N-cLd.js";import"./info-Bgk1qFK4.js";import"./Popover-DUTsRoUU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
