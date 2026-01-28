import{j as e,l}from"./iframe-D-t8l-nQ.js";import{S as t}from"./Skeleton-DabE65-n.js";import{T as p}from"./TextField-IkO8KvcY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DBL_hrZI.js";import"./utils-C09TX1Ea.js";import"./TextField-lCihfSl8.js";import"./FieldError-Nn4mt1Aj.js";import"./Text-CG0yYSyZ.js";import"./useFocusRing-CR_o_Q9s.js";import"./index-BdqC0PhN.js";import"./index-csafQpnv.js";import"./Text-D8XkFvPl.js";import"./RSPContexts-Bjm4deda.js";import"./Form-B3WM99l_.js";import"./useFormValidation-Bh4BmBOT.js";import"./Group-D1BkClNz.js";import"./Input-DWI-UTXe.js";import"./Hidden-8h6Lngiq.js";import"./Button-Bv6XbooR.js";import"./useLabels-BDhfzl9l.js";import"./useButton-ucD7gpk8.js";import"./useTextField-FxkGREDl.js";import"./useControlledState-D_vJ43oY.js";import"./useField-C1D7xTDh.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CYCA0m5-.js";import"./Dialog-rO0zha-c.js";import"./OverlayArrow-CeTGPrJX.js";import"./useResizeObserver-CeMaA03n.js";import"./Collection-BJ_XawYo.js";import"./index-EviCI9Dk.js";import"./Separator-SNTykIrS.js";import"./SelectionManager-K7oo-nKh.js";import"./useEvent-D7sZf_Zj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C-3v6jXm.js";import"./useDescription-DnttFM8m.js";import"./ListKeyboardDelegate-DegdBO48.js";import"./PressResponder-CeZ_li-q.js";import"./useLocalizedStringFormatter-Dt4C4rmW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DPd47qqH.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CznJ6A2t.js";import"./Button-CHG0rl3V.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BmdgiejR.js";import"./createLucideIcon-CI-4TPo-.js";import"./x-D0A6-I5y.js";import"./Heading-BwMOfTtT.js";import"./info-D8EAVG3X.js";import"./Popover-Ckh16Jlm.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
