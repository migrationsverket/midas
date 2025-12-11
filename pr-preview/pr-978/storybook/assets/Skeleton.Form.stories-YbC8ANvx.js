import{j as e,l}from"./iframe-BMeA-RN6.js";import{S as t}from"./Skeleton-BaUMBTQR.js";import{T as p}from"./TextField-CxVAWrtl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BGd3JbFw.js";import"./utils-D-POQ3d7.js";import"./TextField-D1vJD6Bi.js";import"./FieldError-ounuCchV.js";import"./Text-D3CkMuyw.js";import"./useFocusRing-CtghauyP.js";import"./index-CknK32V_.js";import"./index-DwmAtCXr.js";import"./Text-BhHw_bJV.js";import"./RSPContexts-DRDWvQzB.js";import"./Form-CBD9fmdL.js";import"./useFormValidation-9Oc5hIhp.js";import"./Group-yA2iejw5.js";import"./Input-Ig-Zfhmy.js";import"./Hidden-B5LLNwAb.js";import"./Button-b7DAjz5F.js";import"./useLabels-BMjdtdsU.js";import"./useButton-Dw1G8P0H.js";import"./useTextField-B7m6sPNm.js";import"./useControlledState-B9yv0jWj.js";import"./useField-ibKuzWFH.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B8fEjB_Q.js";import"./Dialog-DKQrQLgg.js";import"./OverlayArrow-bR0ExmyO.js";import"./useResizeObserver-DIa2nvb1.js";import"./Collection-BARn_fjG.js";import"./index-dq4IFFK9.js";import"./Separator-DH5w9bVc.js";import"./SelectionManager-DS_AlWz4.js";import"./useEvent-DgIhMCFn.js";import"./scrollIntoView-C4X0t-7E.js";import"./SelectionIndicator-DcpapN0A.js";import"./useDescription-h-uPIWF3.js";import"./ListKeyboardDelegate-CBHJPsVM.js";import"./PressResponder-CQXz0r41.js";import"./useLocalizedStringFormatter-BUX58cI-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BswwR7TE.js";import"./VisuallyHidden-3ctKZrmJ.js";import"./Button-BdoKN1aN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVzCWO_w.js";import"./createLucideIcon-CKOT3wpY.js";import"./x-DSP3N7Y9.js";import"./Heading-Hdvcobgi.js";import"./info-DPOW8J14.js";import"./Popover-C_430p1S.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
