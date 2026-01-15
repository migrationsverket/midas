import{j as e,l}from"./iframe-CghREHCp.js";import{S as t}from"./Skeleton-BhzIEKdi.js";import{T as p}from"./TextField-CPkWNutH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DowJHrvE.js";import"./utils-DcbzADZG.js";import"./TextField-CGmLYk1y.js";import"./FieldError-v9jgVeW0.js";import"./Text-Buk_-DSi.js";import"./useFocusRing-Os94pZjv.js";import"./index-C_9syRFs.js";import"./index-bNnSmjOQ.js";import"./Text-Bgsdl3BX.js";import"./RSPContexts-DXf2tjJD.js";import"./Form-CmblNqKq.js";import"./useFormValidation-D-acFxN0.js";import"./Group-B2dFf8ap.js";import"./Input-qQ6a_-uU.js";import"./Hidden-BLP0xzBf.js";import"./Button-BbapMa4Z.js";import"./useLabels-BLq2FESX.js";import"./useButton-DICYCMex.js";import"./useTextField-CQ1crf_g.js";import"./useControlledState-BNCqjruO.js";import"./useField--pcLrrjr.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-noknOOwN.js";import"./Dialog-CiLzqrEe.js";import"./OverlayArrow-Bfh_W1Tb.js";import"./useResizeObserver-D9ozIvVX.js";import"./Collection-B62DR8CB.js";import"./index-Cp1itJqd.js";import"./Separator-BGbIguZq.js";import"./SelectionManager-CibFROCu.js";import"./useEvent-BLXjJ4XY.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DEJFzjSy.js";import"./useDescription-DHW5wKPx.js";import"./ListKeyboardDelegate-BzhPUJdu.js";import"./PressResponder-BmsxlLXe.js";import"./useLocalizedStringFormatter-BHRqU8bD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DX_-x3AZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CK_U2Q_P.js";import"./Button-BgVDIbm9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-43Jpf1jS.js";import"./createLucideIcon-DCyJjHTa.js";import"./x-Zoiz82II.js";import"./Heading-BCIKpTaK.js";import"./info-COZo-S7T.js";import"./Popover-G_MR9vbR.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
