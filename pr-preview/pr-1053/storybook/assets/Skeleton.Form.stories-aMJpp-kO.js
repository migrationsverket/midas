import{j as e,l}from"./iframe-BAZk80fE.js";import{S as t}from"./Skeleton-CW5SO4tD.js";import{T as p}from"./TextField-1vXVRH5R.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-lpKIm8NV.js";import"./utils-BhwQ1U93.js";import"./TextField-CMiTxWf8.js";import"./FieldError-DkhBXd6b.js";import"./Text-Y_F9Qc3q.js";import"./useFocusRing-KQoMJM9B.js";import"./index-Dt6rToeR.js";import"./index-B34iUau2.js";import"./Text-Bot8P-aJ.js";import"./RSPContexts-Ch508LJX.js";import"./Form-CLsQOS9e.js";import"./useFormValidation-3uDySqxb.js";import"./Group-wVntAzck.js";import"./Input-BTCqUZbP.js";import"./Hidden-CYtm9s7u.js";import"./Button-eLqhqo_k.js";import"./useLabels-CMB4fTd1.js";import"./useButton-CPWt2pMm.js";import"./useTextField-B7oXgd8v.js";import"./useControlledState-Cu0nMJYp.js";import"./useField-CzfiE8Id.js";import"./TextField.module-DpzeWGpt.js";import"./Label-bUmXrbRz.js";import"./Dialog-I6ArOmci.js";import"./OverlayArrow-D4E-POyn.js";import"./useResizeObserver-jKdj-9Bn.js";import"./Collection-RYZnXscw.js";import"./index-DRW4hoi9.js";import"./Separator-B7gVewdW.js";import"./SelectionManager-DGsipqzM.js";import"./useEvent-vN0H1Ozz.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B0NoolGA.js";import"./useDescription-CPqrosz3.js";import"./ListKeyboardDelegate-DxlpbXJb.js";import"./PressResponder-btOu00TB.js";import"./useLocalizedStringFormatter-B43e0zJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BLotUQCh.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Coy_xA-f.js";import"./Button-BOvHyuxs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-GVvU4XfJ.js";import"./createLucideIcon-DfErYrVe.js";import"./x-BN85pv_s.js";import"./Heading-Dob0vkkd.js";import"./info-CUaHiiwh.js";import"./Popover-D47IUhzN.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
