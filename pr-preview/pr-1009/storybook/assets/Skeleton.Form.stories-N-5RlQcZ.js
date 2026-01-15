import{j as e,l}from"./iframe-CSIMALEo.js";import{S as t}from"./Skeleton-CLyG8vHd.js";import{T as p}from"./TextField-CWBnFcgF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-qqaHdySb.js";import"./utils-BhFaZXMS.js";import"./TextField-BEGHc3aN.js";import"./FieldError-QzWPofCp.js";import"./Text-CgjfMSMX.js";import"./useFocusRing-YF8rxIXT.js";import"./index-Bg0fwusk.js";import"./index-Cko5PELv.js";import"./Text-DAP7-Chs.js";import"./RSPContexts-B6yeYefJ.js";import"./Form-B8RAAmya.js";import"./useFormValidation-DdycJShS.js";import"./Group-LvfcS3pd.js";import"./Input-D-u988Ye.js";import"./Hidden-Bzf4_Pb3.js";import"./Button-URk4kmEe.js";import"./useLabels-CPdLbOLr.js";import"./useButton-BV6dPOCz.js";import"./useTextField-OpsHCfDn.js";import"./useControlledState-gQFNofvS.js";import"./useField-xRcIPMLR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-nRchqJPS.js";import"./Dialog-Dc3-Xu4e.js";import"./OverlayArrow-Bd5xf0_A.js";import"./useResizeObserver-Dl6BNA6V.js";import"./Collection-D7usJqLj.js";import"./index-DETqQTae.js";import"./Separator-lAZ_4zB9.js";import"./SelectionManager-C7GMCLRn.js";import"./useEvent-B5sTb3e5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CbrJhCXm.js";import"./useDescription-PhgKx27S.js";import"./ListKeyboardDelegate-DFwfPiIs.js";import"./PressResponder-D-Lp16BO.js";import"./useLocalizedStringFormatter-B9G0gFgf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CwOsGgVW.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-De97aW8X.js";import"./Button-DVHbJF0m.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-jyLw659G.js";import"./createLucideIcon-DF3n-g_Z.js";import"./x-DyzJKXcb.js";import"./Heading-0UZEitdo.js";import"./info-BVBUXgQd.js";import"./Popover-CtzoBQ8h.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
