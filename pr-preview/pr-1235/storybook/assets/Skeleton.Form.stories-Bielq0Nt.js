import{j as e,l}from"./iframe-Cen0ae1x.js";import{S as t}from"./Skeleton-BkF_c8p0.js";import{T as p}from"./TextField-qujehlcO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BDqiJr7J.js";import"./utils-IBVWRADw.js";import"./FieldError-BmQ4jQxz.js";import"./Text-DIYKRKOx.js";import"./useFocusRing-DL4UMbrb.js";import"./index--9VSKs4e.js";import"./index-CAAqL2lM.js";import"./Text-CTsFsWIz.js";import"./RSPContexts-j8AP2XCE.js";import"./Form-CjUsSzQO.js";import"./Group-BkN2Ikmz.js";import"./Input-o46YmxUL.js";import"./Hidden-DeFJbGnS.js";import"./Button-CH2bisSo.js";import"./useLabel-DSnRldp0.js";import"./useLabels-D8TiPXss.js";import"./useButton-SUZhILTb.js";import"./useTextField-1F9i-9HA.js";import"./useControlledState-JSkmdR3M.js";import"./useField-D7rcpCWI.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bn0-olfI.js";import"./Dialog-CVGjXBrR.js";import"./OverlayArrow-Cp2auDpZ.js";import"./useResizeObserver-CmnOszlQ.js";import"./Collection-DzYzow1u.js";import"./index-iFhYwZRt.js";import"./Separator-CSGoviiE.js";import"./SelectionManager-CN3G-fbw.js";import"./useEvent-MaH29R_X.js";import"./scrollIntoView-Dta2NR0L.js";import"./SelectionIndicator-gVFOzTj8.js";import"./useDescription-Co4ko50b.js";import"./ListKeyboardDelegate-CR_c2DFA.js";import"./PressResponder-BDQ-7_LZ.js";import"./useLocalizedStringFormatter-AjdMYjpu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BX_o3H3w.js";import"./getScrollParent-N9kF6Mqp.js";import"./VisuallyHidden-AN2tdixc.js";import"./ModalOverlay-_TZLI4xz.js";import"./x-DckwiAmz.js";import"./createLucideIcon-obLWYbEm.js";import"./useLocalizedStringFormatter-4r_hlzhF.js";import"./Heading-B60h2Jja.js";import"./Button-CA3EkwoT.js";import"./Button.module-BB7N-cLd.js";import"./info-DzT2iTTy.js";import"./Popover-IQmjmTnE.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
