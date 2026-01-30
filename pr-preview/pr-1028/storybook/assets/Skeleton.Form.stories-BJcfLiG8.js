import{j as e,l}from"./iframe-D7hgefFi.js";import{S as t}from"./Skeleton-ZE4agpb0.js";import{T as p}from"./TextField-q5GBEnKF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B0FLys74.js";import"./utils-1x5w2eFs.js";import"./TextField-DTa8yuuQ.js";import"./FieldError-CIHFT2OA.js";import"./Text-bVuSsYW4.js";import"./useFocusRing-BEIKl4Np.js";import"./index-DPE8HPpB.js";import"./index-Dc5FCrrK.js";import"./Text-DGN2slpv.js";import"./RSPContexts-edSBr0y1.js";import"./Form-dGELDKxX.js";import"./useFormValidation-DyceQfcW.js";import"./Group-DvYOIurc.js";import"./Input-BuVEFLLt.js";import"./Hidden-BPthAdp1.js";import"./Button-BkQQAf76.js";import"./useLabels-BNWiTCFC.js";import"./useButton-fmMn4P32.js";import"./useTextField-BK6YMpNa.js";import"./useControlledState-C_xkaUiB.js";import"./useField-C4uTTXDp.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DZswzBQt.js";import"./Dialog-CPp57JpH.js";import"./OverlayArrow-CshA3CdM.js";import"./useResizeObserver-CoBEwF8j.js";import"./Collection-DT-GXrOm.js";import"./index-lLpdZDLW.js";import"./Separator-PRL3nm89.js";import"./SelectionManager-DizDU1Yl.js";import"./useEvent-Bq0KSq8o.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DSpOUr3d.js";import"./useDescription-BnUO2d3M.js";import"./ListKeyboardDelegate-B4SqK4yR.js";import"./PressResponder-GJNPmhvW.js";import"./useLocalizedStringFormatter-Df3u4y0n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ba7Bng00.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-JgK0gAZ6.js";import"./Button-rPxCLKTe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_1GwcS9.js";import"./createLucideIcon-B4zeiAHI.js";import"./x-DLgV2fM1.js";import"./Heading-CjrbX93v.js";import"./info-zy5dga28.js";import"./Popover-CgvIwbeH.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
