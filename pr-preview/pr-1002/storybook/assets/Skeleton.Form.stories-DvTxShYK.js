import{j as e,l}from"./iframe-Fz1EdHuH.js";import{S as t}from"./Skeleton--XkKzyMu.js";import{T as p}from"./TextField-DZpM7k7x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CxCLhK7P.js";import"./utils-CIhB6G_D.js";import"./TextField-DZKUQUj-.js";import"./FieldError-CiywgrQY.js";import"./Text-DNv-3svf.js";import"./useFocusRing-qf5ZtGZP.js";import"./index-CW1yTPdq.js";import"./index-BLs35tAN.js";import"./Text-DoqQ8nHE.js";import"./RSPContexts-CKI4o4tn.js";import"./Form-DCeu2YwW.js";import"./useFormValidation-DqKDU8Wz.js";import"./Group-M4PDqwWB.js";import"./Input-DxQhQKSW.js";import"./Hidden-BTN0SI0L.js";import"./Button-CBPVsTrf.js";import"./useLabels-BFFI0pNC.js";import"./useButton-DwegKwQx.js";import"./useTextField-B6jdHa9H.js";import"./useControlledState-B4oYVFVf.js";import"./useField-Ox07Q8eM.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BLPApvMM.js";import"./Dialog-Bniec-JW.js";import"./OverlayArrow-Cd49lTDT.js";import"./useResizeObserver-tZr12xgv.js";import"./Collection-DtJ07xnh.js";import"./index-Ci-3Zxjc.js";import"./Separator-CKb9OlXL.js";import"./SelectionManager-BxFEfcB2.js";import"./useEvent-Bi8gGKcE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C9vJGSx6.js";import"./useDescription-BZIgoWp4.js";import"./ListKeyboardDelegate-ohLvDDFs.js";import"./PressResponder-DwgcgRG9.js";import"./useLocalizedStringFormatter-D7aFKFSJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cxt8Tbzx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DdITmKv1.js";import"./Button-DNGuSXTP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Biv9Lv2v.js";import"./createLucideIcon-B2CroOQB.js";import"./x-IpFqXPiI.js";import"./Heading-Qs14-auE.js";import"./info-CvxmEuPG.js";import"./Popover-Cblh_Hp5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
