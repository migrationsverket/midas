import{j as e,l}from"./iframe-BdMP7xRe.js";import{S as t}from"./Skeleton-hR8thNJL.js";import{T as d}from"./TextField-B0nFzni2.js";import"./preload-helper-Ct5FWWRu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-VVzfrfEf.js";import"./utils-BXZxyj6A.js";import"./FieldError-C8wOBOO7.js";import"./Text-DVcK-pIr.js";import"./useFocusRing-DNVUOvoN.js";import"./index-ran4ZW8i.js";import"./index-CG9v_bJu.js";import"./Text-iZDkKzt3.js";import"./RSPContexts-R6BMhwXi.js";import"./Form-DU3NOwU0.js";import"./useFormValidation-CYa8QPFR.js";import"./Group-Ctiy7UPA.js";import"./Input-CirKi5uL.js";import"./Hidden-21u4YwCE.js";import"./Button-BShsBV_n.js";import"./useLabels-BBjabKP_.js";import"./useButton-Dp6FlW9J.js";import"./useTextField-ChDeooLZ.js";import"./useControlledState-BdK1PO_0.js";import"./useField-V4lYSNQA.js";import"./TextField.module-DGUQcbB9.js";import"./Label-ClvlwuzW.js";import"./Dialog-BTupGEaP.js";import"./OverlayArrow-DZhrcjav.js";import"./useResizeObserver-C9He1-ve.js";import"./Collection-CJ9Vb2-A.js";import"./index-CBhk_DAJ.js";import"./Separator-BZlGpEBB.js";import"./SelectionManager-Bs7V6cxh.js";import"./useEvent-Dg6CSePe.js";import"./scrollIntoView-Bipo5DH-.js";import"./SelectionIndicator-BESTi7vY.js";import"./useDescription-ta-S5uMH.js";import"./ListKeyboardDelegate-rzNb3E0p.js";import"./PressResponder-xTqNKP1Y.js";import"./useLocalizedStringFormatter-uCha_X5U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-0ab75Emi.js";import"./VisuallyHidden-DTwk-y4u.js";import"./useLocalizedStringFormatter-Bmt49OaR.js";import"./Button-B87e4ZpD.js";import"./Button.module-CtQ1deO8.js";import"./x--C2HZCgu.js";import"./createLucideIcon-B_BA-bIQ.js";import"./Heading-C-n8PJFQ.js";import"./info-z_pSRbSH.js";import"./Popover-Osvtu8q-.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
