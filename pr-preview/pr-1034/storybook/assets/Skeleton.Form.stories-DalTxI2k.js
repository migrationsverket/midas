import{j as e,l}from"./iframe-CIGy1hUJ.js";import{S as t}from"./Skeleton-B4E6BQKn.js";import{T as p}from"./TextField-BT0e16W9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CZDlll1W.js";import"./utils-DIUL7Bc0.js";import"./TextField-BriydQNo.js";import"./FieldError-C7bz9hQq.js";import"./Text-i7AsJtUX.js";import"./useFocusRing-K48KyH83.js";import"./index-CCCmawvM.js";import"./index-wAr858SZ.js";import"./Text-LF-2_9Ad.js";import"./RSPContexts-CeDh6z3w.js";import"./Form-h6qgqcb0.js";import"./useFormValidation-C0jBsUl1.js";import"./Group-BSlzMEV9.js";import"./Input-C2z1SjtK.js";import"./Hidden-BPQtKBZU.js";import"./Button-DhS25rIt.js";import"./useLabels-DE_VkWHn.js";import"./useButton-FPvMdOGq.js";import"./useTextField-DTAS1ove.js";import"./useControlledState-Dw8OuylW.js";import"./useField-ClI-ST5I.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DAr8S7uY.js";import"./Dialog-VVYzmKcR.js";import"./OverlayArrow-CfrCt_gW.js";import"./useResizeObserver-D55TtCKY.js";import"./Collection-AC7Q1j3J.js";import"./index-BtMyF3fa.js";import"./Separator-DZ8cbLJD.js";import"./SelectionManager-Czg5tj3X.js";import"./useEvent-Dj--zDR1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bhg_zArY.js";import"./useDescription-KqjRHglP.js";import"./ListKeyboardDelegate-5Wv4T6R8.js";import"./PressResponder-4oUxD_sy.js";import"./useLocalizedStringFormatter-CMMaxMtm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IO1flq5_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D7Ss9ool.js";import"./Button-DiX-Dk0D.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B7PXQcbb.js";import"./createLucideIcon-C7Y4Oiz-.js";import"./x-6M5LOC7q.js";import"./Heading-BeTsJOic.js";import"./info-DNZJUchD.js";import"./Popover-Cb3R58kf.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
