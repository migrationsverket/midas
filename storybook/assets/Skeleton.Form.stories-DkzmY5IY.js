import{j as e,l}from"./iframe-BHGbmSoX.js";import{S as t}from"./Skeleton-NYkILYOn.js";import{T as p}from"./TextField-W4kwYGu2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CPqofumv.js";import"./utils-u6nfEu2d.js";import"./TextField-B_jgD9WZ.js";import"./FieldError-BbuZpPii.js";import"./Text-DR-y75op.js";import"./useFocusRing-C-fWWvCQ.js";import"./index-DHRUWqon.js";import"./index-BlWlHcen.js";import"./Text-Co-Ig638.js";import"./RSPContexts-DxDwxdvK.js";import"./Form-C7P4m3f5.js";import"./useFormValidation-Djr0e9BL.js";import"./Group-BYkViKg0.js";import"./Input-PashETkB.js";import"./Hidden-HuY8qCdY.js";import"./Button-DBP2ABnj.js";import"./useLabels-jG-RMIhn.js";import"./useButton-DyLMe38J.js";import"./useTextField-DKjVGFlI.js";import"./useControlledState-BRSDM5kG.js";import"./useField-B4LIi9WL.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BCn-pGoc.js";import"./Dialog-CSAQrJFe.js";import"./OverlayArrow-D70C4uGL.js";import"./useResizeObserver-DNsdgQR9.js";import"./Collection-WK4i6Gww.js";import"./index-DqvNs5ao.js";import"./Separator-D1MFmn8z.js";import"./SelectionManager-B4SuEaEN.js";import"./useEvent-Dz6duQ_C.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5zgZXgJ.js";import"./useDescription-CztadFVS.js";import"./ListKeyboardDelegate-CeRSS6c8.js";import"./PressResponder-Dw1OdbxQ.js";import"./useLocalizedStringFormatter-CKK1hwYD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CyuRnS8g.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BSU9NXEn.js";import"./Button-Dt4Dz_uA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DYD_fmTs.js";import"./createLucideIcon-Pf4v_yLg.js";import"./x-CaOaLzID.js";import"./Heading-qIrSr_bu.js";import"./info-6j5tkDmW.js";import"./Popover-C4EEoVIv.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
