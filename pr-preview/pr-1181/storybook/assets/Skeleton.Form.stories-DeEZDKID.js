import{j as e,l}from"./iframe-BP7DzUIh.js";import{S as t}from"./Skeleton-AKr98x74.js";import{T as d}from"./TextField-CO9uEX0H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BTPSpFky.js";import"./utils-B9_czYqy.js";import"./FieldError-DwMEu-CZ.js";import"./Text-C6QCLAD1.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./Text-C-lFPFDT.js";import"./RSPContexts-C286y1L4.js";import"./Form-BAJVgpQE.js";import"./Group-DxEw32Ds.js";import"./Input-CXA6qDBj.js";import"./Hidden-DlKvXDgO.js";import"./Button-yD28QKfx.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./useTextField-BJ5rsHJP.js";import"./useControlledState-B7al1qBg.js";import"./useField-p1IS5Xfo.js";import"./TextField.module-DdivwlC8.js";import"./Label-0yjB-E8z.js";import"./Dialog-B6ZEH6ru.js";import"./OverlayArrow-DTP3iI7m.js";import"./useResizeObserver-_Mvg5rJV.js";import"./Collection-CEHuK8QM.js";import"./index-CqTzYnk-.js";import"./Separator-Ci0cwtQM.js";import"./SelectionManager-CcZ5FS4I.js";import"./useEvent-boX-2EsT.js";import"./scrollIntoView-BqUk0Mej.js";import"./SelectionIndicator-3vIypJAh.js";import"./useDescription-B4UE-M1p.js";import"./ListKeyboardDelegate-D_F26l9l.js";import"./PressResponder-BxiRPNH8.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qcmAUM1D.js";import"./getScrollParent-CMfkxxdv.js";import"./VisuallyHidden-CFJkh_29.js";import"./x-BKCqd2ot.js";import"./createLucideIcon-zXtIRWL6.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./Heading-C3r0aHk-.js";import"./Button-e7FuQA8u.js";import"./Button.module-BB7N-cLd.js";import"./info-CCcA_oOV.js";import"./Popover-DQuHdZGW.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
