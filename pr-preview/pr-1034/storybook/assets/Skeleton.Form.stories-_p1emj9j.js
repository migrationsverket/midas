import{j as e,l}from"./iframe-CdQJjHUi.js";import{S as t}from"./Skeleton-C4McNMP6.js";import{T as p}from"./TextField-CU5kzbvk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DfHNKMJi.js";import"./utils-DNRK4ZX5.js";import"./TextField-CPy4fDLS.js";import"./FieldError-CD4-cihP.js";import"./Text-B0vmQyu5.js";import"./useFocusRing-CWhoHb0p.js";import"./index-DYV9Lioy.js";import"./index-C-32_yVP.js";import"./Text-Ch7iewHE.js";import"./RSPContexts-AyfQfw_C.js";import"./Form-Bi6e02ke.js";import"./useFormValidation-C90I0bWA.js";import"./Group-Dl-5cW_7.js";import"./Input-BsjEB1J9.js";import"./Hidden-CC5jBV06.js";import"./Button-BTABl2Ab.js";import"./useLabels-Dr4fNLVL.js";import"./useButton-BnY8ifF_.js";import"./useTextField-D2Mtsrjj.js";import"./useControlledState-C5Qq6LCr.js";import"./useField-VCpATz6H.js";import"./TextField.module-DpzeWGpt.js";import"./Label-m3uD3yMU.js";import"./Dialog-BrRUhIOH.js";import"./OverlayArrow-BDeU8i3A.js";import"./useResizeObserver-xGHsMKmM.js";import"./Collection-Cmou-_XN.js";import"./index-WM4OD6W8.js";import"./Separator-CGKunWAn.js";import"./SelectionManager-B-b6f446.js";import"./useEvent-B7b_rfbF.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CRnaVeBY.js";import"./useDescription-xXh2sHRV.js";import"./ListKeyboardDelegate-CpI5hNSW.js";import"./PressResponder-29gW07jg.js";import"./useLocalizedStringFormatter-5wGuy5gn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C31vhQl2.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-TcZUaxvx.js";import"./Button-CglFoMow.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDtzg0FL.js";import"./createLucideIcon-DPIpdseQ.js";import"./x-Uh3xubMW.js";import"./Heading-C1LTQQVo.js";import"./info-BbudvsX4.js";import"./Popover-BmAgldfl.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
