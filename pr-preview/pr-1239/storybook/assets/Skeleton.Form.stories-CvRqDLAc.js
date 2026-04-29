import{j as e,l}from"./iframe-D2jWlRbY.js";import{S as t}from"./Skeleton-OQ5Lf3Dx.js";import{T as p}from"./TextField-BnrLbzKl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DWAmswxv.js";import"./utils-BgILje6T.js";import"./FieldError-BlwhWSc6.js";import"./Text-BlnXWmBt.js";import"./useFocusRing-DCfgz9z-.js";import"./index-BIIWHLUG.js";import"./index-CZEA3OWg.js";import"./Text-dwHB4N6Q.js";import"./RSPContexts-DBHxiWWN.js";import"./Form-CrsOPGrC.js";import"./Group-CuzXyiPi.js";import"./Input-D-UT_ZU8.js";import"./Hidden-BQ9eCogI.js";import"./Button-C20mW5cN.js";import"./useLabel-Dsg-DSz8.js";import"./useLabels-GFu7dakN.js";import"./useButton-Z6COahNx.js";import"./useTextField-D3Jer9O5.js";import"./useControlledState-TsNhVwVg.js";import"./useField-DthL3lsX.js";import"./TextField.module-DdivwlC8.js";import"./Label-Qo-mTOaY.js";import"./Dialog-BB7LJBGw.js";import"./OverlayArrow-C3g-jDCJ.js";import"./useResizeObserver-BkJ1iT0c.js";import"./Collection-CDPRulZI.js";import"./index-ClO5XkG8.js";import"./Separator-ChK8l3B3.js";import"./SelectionManager-GdUQ0_3g.js";import"./useEvent-CcxES9pj.js";import"./scrollIntoView-ZO2UpkDZ.js";import"./SelectionIndicator-De0BlSZX.js";import"./useDescription-CJaXbPeA.js";import"./ListKeyboardDelegate-fCGrHL_b.js";import"./PressResponder-8J5GFZ_B.js";import"./useLocalizedStringFormatter-Bbt0gUnN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dbg56SLM.js";import"./getScrollParent-Bttan2TX.js";import"./VisuallyHidden-DcHq__qP.js";import"./ModalOverlay-TKpdu6VL.js";import"./x-CXavF2G1.js";import"./createLucideIcon-3nESSKIe.js";import"./useLocalizedStringFormatter-BadNQPEc.js";import"./Heading-15Bg67se.js";import"./Button-Cx6hm3Pz.js";import"./Button.module-BB7N-cLd.js";import"./info-C44TV-1j.js";import"./Popover-COKgRpeE.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
