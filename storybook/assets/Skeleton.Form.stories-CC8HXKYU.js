import{j as e,l}from"./iframe-D1MYXp-w.js";import{S as t}from"./Skeleton-D0R5VgVp.js";import{T as p}from"./TextField-DYs_4sAC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-EGWXWqN1.js";import"./utils-aWuB-QdR.js";import"./TextField-5cPiecxM.js";import"./FieldError-DXvMK5mU.js";import"./Text-DFmQ5vZk.js";import"./useFocusRing-BMjUS9b1.js";import"./index-BxRInLIQ.js";import"./index-DKk9wEG4.js";import"./Text-3-mIHV0D.js";import"./RSPContexts-KH8njxZF.js";import"./Form-HVkHuvxF.js";import"./useFormValidation-BTUbGtWG.js";import"./Group-BmtJ8h8H.js";import"./Input-DvNj31Bp.js";import"./Hidden-BE2MqSt0.js";import"./Button-Cu_o7jy-.js";import"./useLabels-uwnDLehD.js";import"./useButton-DiNOWPXA.js";import"./useTextField-FtFIiV-m.js";import"./useControlledState-Bn7jLDvo.js";import"./useField-CxdzvUD5.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DqHt3y3H.js";import"./Dialog-CRvj-8ro.js";import"./OverlayArrow-UGJ57ePN.js";import"./useResizeObserver-CxVkjRL0.js";import"./Collection-CHcS2qET.js";import"./index-PVZzuu0U.js";import"./Separator-BTbP6QYi.js";import"./SelectionManager-BLvmfdsR.js";import"./useEvent-D8uPwVMW.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C2eBBNku.js";import"./useDescription-C4XQCS9x.js";import"./ListKeyboardDelegate-CbOELCR-.js";import"./PressResponder-C9J8ZnCw.js";import"./useLocalizedStringFormatter-nJ6vlP7S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-ChZYVjr-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DeZDzV12.js";import"./Button-CWi-yXwr.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH5t1GsE.js";import"./createLucideIcon-DypBOEHT.js";import"./x-BSUoxe2E.js";import"./Heading-CYS4LgEf.js";import"./info-CcVBd5Uc.js";import"./Popover-BfW2GAZP.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
