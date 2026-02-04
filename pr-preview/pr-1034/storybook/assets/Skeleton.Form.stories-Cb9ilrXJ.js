import{j as e,l}from"./iframe-xSlZKBk7.js";import{S as t}from"./Skeleton-ButWHfo_.js";import{T as p}from"./TextField-CbLEdGTR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DbBhRGF-.js";import"./utils-5SJY94w3.js";import"./TextField-CemrMs-e.js";import"./FieldError-C_i49J3y.js";import"./Text-DgXR0aOr.js";import"./useFocusRing-D_hK-2vE.js";import"./index-CBg_-d7r.js";import"./index-DVqoIBNR.js";import"./Text-KNOlaizT.js";import"./RSPContexts-aPse6uyn.js";import"./Form-B9HnXKed.js";import"./useFormValidation-D6PKw7Iw.js";import"./Group-Cr2HHr62.js";import"./Input-Dy1NJmIX.js";import"./Hidden-DwvugQlw.js";import"./Button-Dgw1ffzt.js";import"./useLabels-gxsBD3ir.js";import"./useButton-Ccm1vhj3.js";import"./useTextField-BT_P7BPV.js";import"./useControlledState-BEVMoc2A.js";import"./useField-D4-9WxUr.js";import"./TextField.module-DpzeWGpt.js";import"./Label-B3tku9of.js";import"./Dialog-DdVJvzTm.js";import"./OverlayArrow-BMVs552G.js";import"./useResizeObserver-CcRAdEL4.js";import"./Collection-Si9-pC3r.js";import"./index-BoyVYKPh.js";import"./Separator-BlXXzH88.js";import"./SelectionManager-CLqYy-zz.js";import"./useEvent-DhxS9s3R.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-5PT-iEWC.js";import"./useDescription-DsIho0Ts.js";import"./ListKeyboardDelegate-BgaT32mH.js";import"./PressResponder-CwxZN2Nk.js";import"./useLocalizedStringFormatter-DRZZdc_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUJl6i_D.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BGA6bfiz.js";import"./Button-3PLMBo1F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DI3vZSY9.js";import"./createLucideIcon-NQNnXyf7.js";import"./x-C4Ur1Yca.js";import"./Heading-o1yHVKCL.js";import"./info-5TlLbaFA.js";import"./Popover-96ulXReM.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
