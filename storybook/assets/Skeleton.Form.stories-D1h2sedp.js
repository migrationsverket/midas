import{j as e,l}from"./iframe-CO-rhcep.js";import{S as t}from"./Skeleton-D7SamoZR.js";import{T as p}from"./TextField-C_f78-rP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BhZ_48Po.js";import"./utils-xXHSLQwD.js";import"./FieldError-DWjrBszR.js";import"./Text-DdPGOhQT.js";import"./useFocusRing-DON0ybQn.js";import"./index-BhaZxxI5.js";import"./index-BCVRneEd.js";import"./Text-BNQMcymU.js";import"./RSPContexts-B-Xm9PzS.js";import"./Form-CBLlznOt.js";import"./Group-DlhD-yy_.js";import"./Input-AKFtLv_s.js";import"./Hidden-CWNbbLzJ.js";import"./Button-BEB_3r-L.js";import"./useLabel-CHsEFPNy.js";import"./useLabels-C_wmlfWA.js";import"./useButton-D7IEmpnO.js";import"./useTextField-BchuB83Y.js";import"./useControlledState-ByGhFCbY.js";import"./useField-J3SWMipS.js";import"./TextField.module-DdivwlC8.js";import"./Label-DFlJBLsV.js";import"./Dialog-pnIFzO4D.js";import"./OverlayArrow-moVMtSdv.js";import"./useResizeObserver-BzyZcqY_.js";import"./Collection--YUStxrO.js";import"./index-COspV66_.js";import"./Separator-CfRKzM-t.js";import"./SelectionManager-7j3V1-Q2.js";import"./useEvent-BTYXRaQg.js";import"./scrollIntoView-D7XGELv_.js";import"./SelectionIndicator--9j1Qi6g.js";import"./useDescription-Be4D-VmW.js";import"./ListKeyboardDelegate-CWdsneQG.js";import"./PressResponder-D72Vt04O.js";import"./useLocalizedStringFormatter-D2pDPRTj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPoia-Ui.js";import"./getScrollParent-BKQZghjE.js";import"./VisuallyHidden-C7JdZ-qs.js";import"./Modal-D7V5nShc.js";import"./x-BAtRtlFw.js";import"./createLucideIcon-oXqbvAOH.js";import"./useLocalizedStringFormatter-C-ngEN8v.js";import"./Heading-Bw96Yzvv.js";import"./Button-ChDRE6gD.js";import"./Button.module-BB7N-cLd.js";import"./info-Cvm1ZQiJ.js";import"./Popover-CQrfQpeQ.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
