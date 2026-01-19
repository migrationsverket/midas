import{j as e,l}from"./iframe-CPEWJk1e.js";import{S as t}from"./Skeleton-BzxxUr1X.js";import{T as p}from"./TextField-CQFem-Ng.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BJkLv0HS.js";import"./utils-zqFEKEPh.js";import"./TextField-CFaaXRtb.js";import"./FieldError-BBhushzd.js";import"./Text-C52_CQW6.js";import"./useFocusRing-ILJnPhUK.js";import"./index-CtVcx0yG.js";import"./index-CHrfy1ht.js";import"./Text-BzUC5NL3.js";import"./RSPContexts-_qG5IX47.js";import"./Form-DBPNPreF.js";import"./useFormValidation-MXNBESz-.js";import"./Group-meBv5suB.js";import"./Input-DoVMqw0U.js";import"./Hidden-BTXMChVh.js";import"./Button-D3ppew-K.js";import"./useLabels-D-Hy4YuH.js";import"./useButton-DQ-7sy2B.js";import"./useTextField-BeHUeS3Q.js";import"./useControlledState-B4oLgPdt.js";import"./useField-D2evXDbG.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Cma1eFeW.js";import"./Dialog-DfXHAGIq.js";import"./OverlayArrow-6918mRBW.js";import"./useResizeObserver-CmDV-ULA.js";import"./Collection-CZrNbxBI.js";import"./index-B4Rt1yXi.js";import"./Separator-Bsaxviz_.js";import"./SelectionManager-CQfYVIUw.js";import"./useEvent-Bp8WcJ43.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BXRPEXa6.js";import"./useDescription-BxyIXG7-.js";import"./ListKeyboardDelegate-ADeysOq7.js";import"./PressResponder-DBMlhjfl.js";import"./useLocalizedStringFormatter-B-rP9j5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbsLMYyh.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cf1hSoJ3.js";import"./Button-BQy3vbUL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CifXZ-cd.js";import"./createLucideIcon-CtQUs0EG.js";import"./x-BKUO9y3k.js";import"./Heading-CsRWFTvi.js";import"./info-Cirzvkyu.js";import"./Popover-g-KzvEHi.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
