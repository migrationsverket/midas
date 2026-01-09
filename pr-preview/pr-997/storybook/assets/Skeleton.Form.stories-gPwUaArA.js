import{j as e,l}from"./iframe--YiVc9hQ.js";import{S as t}from"./Skeleton-DRsLWA2Z.js";import{T as p}from"./TextField-4fixs1Mh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CisQul9s.js";import"./utils-CpTnsnHV.js";import"./TextField-D2jbUiyL.js";import"./FieldError-BTW40C7o.js";import"./Text-o29tJk3p.js";import"./useFocusRing-0ty734hP.js";import"./index-JKE8F4U8.js";import"./index-BL2jGLxX.js";import"./Text-CpCRGjDE.js";import"./RSPContexts-Cj5AcZ5v.js";import"./Form-DqMg5srB.js";import"./useFormValidation-CQ7W6iFw.js";import"./Group-DMFqgC2S.js";import"./Input-NUq3casV.js";import"./Hidden-BTZxWKRt.js";import"./Button-DG5CDtQI.js";import"./useLabels-BJE1cm7E.js";import"./useButton-jtZkJpn4.js";import"./useTextField-CSTOg0bT.js";import"./useControlledState-C3lB_-hB.js";import"./useField-Bek4DV6E.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BxsASF-G.js";import"./Dialog-BttT1W7O.js";import"./OverlayArrow-DP9vaZ_M.js";import"./useResizeObserver-B29bVLOX.js";import"./Collection-xD8Y3ccY.js";import"./index-CbtIlzo-.js";import"./Separator-C4RUysbw.js";import"./SelectionManager-Bh9JhaZY.js";import"./useEvent-foWgZimj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BJs-u6TU.js";import"./useDescription-W6MpaIcO.js";import"./ListKeyboardDelegate-CqcuA2vR.js";import"./PressResponder-vGzMUI1V.js";import"./useLocalizedStringFormatter-Dw3D2Uxn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BQFHdY9W.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-oIx4p_CA.js";import"./Button-UFPEZg__.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-39Qfkypc.js";import"./createLucideIcon-MgWQY606.js";import"./x-DoZor33n.js";import"./Heading-B6Ybwa57.js";import"./info-BFgZkJXj.js";import"./Popover-CVOrbPeG.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
