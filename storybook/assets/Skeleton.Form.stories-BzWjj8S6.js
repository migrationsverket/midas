import{j as e,l}from"./iframe-qA047as2.js";import{S as t}from"./Skeleton-71pnmsO0.js";import{T as p}from"./TextField-CwDmnWN_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CE5NYoNg.js";import"./utils-CnePkaRa.js";import"./FieldError-aeuP4CDb.js";import"./Text-DZAVuivT.js";import"./useFocusRing-No8xSroW.js";import"./index-BDL1KNLx.js";import"./index-DVFaELLp.js";import"./Text-CzZwSmIU.js";import"./RSPContexts-DtyC-LdE.js";import"./Form-Cacq4RkI.js";import"./useFormValidation-D9d090zr.js";import"./Group-qwlCromb.js";import"./Input-Cicvb2HY.js";import"./Hidden-74NDefsp.js";import"./Button-CDa9hyQV.js";import"./useLabels-BED0MCXy.js";import"./useButton-ZFa7mm27.js";import"./useTextField-DIlc45TP.js";import"./useControlledState-BqDoX1oC.js";import"./useField-Dbbo2A5n.js";import"./TextField.module-DdivwlC8.js";import"./Label-BybkoEIV.js";import"./Dialog-BL2TaiMM.js";import"./OverlayArrow-DdBbsO1q.js";import"./useResizeObserver-BqZpnL1N.js";import"./Collection-Dh4VjxAz.js";import"./index-BHvREsci.js";import"./Separator-BhpHx7-2.js";import"./SelectionManager-BNHHveg4.js";import"./useEvent-DpQSoI-M.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B5C--0__.js";import"./useDescription-3SukAPA1.js";import"./ListKeyboardDelegate-BydgnHxR.js";import"./PressResponder-BFZ8lth1.js";import"./useLocalizedStringFormatter-4TG4W5do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BUa9hm7C.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BNz_8c2V.js";import"./Button-IkqPRuS8.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BEiZ3BMs.js";import"./createLucideIcon-Bdodb09A.js";import"./x-DPER_DtP.js";import"./Heading-860Teim3.js";import"./info-OQEBfFox.js";import"./Popover-blMgf662.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
