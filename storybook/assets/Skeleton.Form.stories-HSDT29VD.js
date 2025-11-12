import{j as e,l}from"./iframe-Cjrlzh3H.js";import{S as t}from"./Skeleton-CAiAcqGm.js";import{T as d}from"./TextField-Cz6fn_jA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DWkiNwJA.js";import"./utils-CuTptj1-.js";import"./FieldError-CX25NBUn.js";import"./Text-BIGnKIDS.js";import"./useFocusRing-1xU_Qusa.js";import"./index-DXVX_pBX.js";import"./index-DF80V0P0.js";import"./Text-CEpVYdQN.js";import"./RSPContexts-CXMSQIsh.js";import"./Form-CExE1hJ5.js";import"./useFormValidation-ECz5jMJZ.js";import"./Group-BLfnKkAi.js";import"./Input-wS26WBmb.js";import"./Hidden-C0Y7LQUz.js";import"./Button-DMFEHXPJ.js";import"./useLabels-VB_Q-W40.js";import"./useButton-BTUGUDje.js";import"./useTextField-BzNd5BGm.js";import"./useControlledState-D7BOsOAW.js";import"./useField-DCRzP6ar.js";import"./TextField.module-DGUQcbB9.js";import"./Label-Cz0gx62A.js";import"./Dialog-BANuhqWG.js";import"./OverlayArrow-D2__XqTe.js";import"./useResizeObserver-B6vWCd_A.js";import"./Collection-CWa3-bgD.js";import"./index-DbEpgTaz.js";import"./Separator-C9vrPJuE.js";import"./SelectionManager-FfE84nRk.js";import"./useEvent-JWBWCRar.js";import"./scrollIntoView-DB_apnjb.js";import"./SelectionIndicator-D9vKUr7i.js";import"./useDescription-Cz0FZt-N.js";import"./ListKeyboardDelegate-NeDGGBOM.js";import"./PressResponder-rqGyn6Wb.js";import"./useLocalizedStringFormatter-BG0SYhYk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BJm2tcrQ.js";import"./VisuallyHidden-Cg1wAZAe.js";import"./useLocalizedStringFormatter-jDeIXcGB.js";import"./Button-Cenw66Ks.js";import"./Button.module-CtQ1deO8.js";import"./x-B2cnKvIo.js";import"./createLucideIcon-BkgNquZM.js";import"./Heading-4T_V5vUB.js";import"./info-DO_dZgRF.js";import"./Popover-6ahpux5K.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
