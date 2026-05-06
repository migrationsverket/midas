import{j as e,l}from"./iframe-UnOrZDCo.js";import{S as t}from"./Skeleton-BKqaRKlr.js";import{T as p}from"./TextField-CvePE-bb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-mO3P5DuQ.js";import"./utils-DKy0aGzr.js";import"./FieldError-BTGqp3OT.js";import"./Text-C6YEGwEA.js";import"./useFocusRing-Bp9IxzZX.js";import"./index-Bfrs3YKb.js";import"./index-DPXy1hV4.js";import"./Text-BkvdwtUJ.js";import"./RSPContexts-B4tPHjXP.js";import"./Form-Bt6GvUIb.js";import"./Group-BljE0MsX.js";import"./Input-Cs81vcsg.js";import"./Hidden-BgWTJ4vd.js";import"./Button-Bxrzo9c5.js";import"./useLabel-De-33T0c.js";import"./useLabels-1WZ6CxHa.js";import"./useButton-BWTGB_Cp.js";import"./useTextField-ByLEKpTJ.js";import"./useControlledState-DgxohqQv.js";import"./useField-DLZ_5onF.js";import"./TextField.module-DdivwlC8.js";import"./Label-B7nVNLra.js";import"./Dialog-hjM60LSU.js";import"./OverlayArrow-BwUJmOnI.js";import"./useResizeObserver-fkAFhLGT.js";import"./Collection-C06BWKHu.js";import"./index-B8SNsTzv.js";import"./Separator-BIkibrNm.js";import"./SelectionManager-CIl23jZ2.js";import"./useEvent-C-gMyQkY.js";import"./scrollIntoView-D4-k8RNQ.js";import"./SelectionIndicator-C80ridiA.js";import"./useDescription-CDMg63Ol.js";import"./ListKeyboardDelegate-DAEtZx3l.js";import"./PressResponder-BIw4ZyBo.js";import"./useLocalizedStringFormatter-lLy4v2xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CyhtBLH4.js";import"./getScrollParent-BhH05UgX.js";import"./VisuallyHidden-ulNGrwFD.js";import"./ModalOverlay-ZdX6FHUK.js";import"./x-DWogN0h0.js";import"./createLucideIcon-A1bnhQ0L.js";import"./useLocalizedStringFormatter-KbPyvbsO.js";import"./Heading-ewwk1_qY.js";import"./Button-DZKUgycP.js";import"./Button.module-BB7N-cLd.js";import"./info-ZnAeMvZK.js";import"./Popover-B7e61P6B.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
