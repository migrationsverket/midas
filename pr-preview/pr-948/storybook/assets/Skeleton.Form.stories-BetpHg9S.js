import{j as e,l}from"./iframe-7ZExgDLE.js";import{S as t}from"./Skeleton-BFu-W5E6.js";import{T as d}from"./TextField-Ccj33yyh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-_qkN7Cj1.js";import"./utils-BoXSSKyR.js";import"./TextField-DxZNoX9_.js";import"./FieldError-DiCKIn2u.js";import"./Text-BVSLsEHx.js";import"./useFocusRing-CX-L5Kpl.js";import"./index-DwsAXc7Z.js";import"./index-eZbuALby.js";import"./Text-BWmmQCxQ.js";import"./RSPContexts-P8m1kxZt.js";import"./Form-8_AHTNmS.js";import"./useFormValidation-DgUvMbiF.js";import"./Group-CiejCyz8.js";import"./Input-CjST07Hc.js";import"./Hidden-Ce_euZaI.js";import"./Button-DYO8g5_-.js";import"./useLabels-CsqYfXZE.js";import"./useButton-DdjH6yH6.js";import"./useTextField-CYqlmFPu.js";import"./useControlledState-CDwK7HKb.js";import"./useField-BTmanUoT.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-D-A4c0s6.js";import"./Dialog-DI7mIQaz.js";import"./OverlayArrow-DNU32fBP.js";import"./useResizeObserver-C3__wwbA.js";import"./Collection-CfJw5GD2.js";import"./index-DzbanXKQ.js";import"./Separator-BdoLtaY4.js";import"./SelectionManager-Ct447hjp.js";import"./useEvent-Dg2rn8v8.js";import"./scrollIntoView-BAkViWMs.js";import"./SelectionIndicator-CgcRgM0p.js";import"./useDescription-CDQNtBpg.js";import"./ListKeyboardDelegate-BIPBU9aX.js";import"./PressResponder-D1FlewEP.js";import"./useLocalizedStringFormatter-CPNOebpp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Gd1uit5C.js";import"./VisuallyHidden-DU8j1gfc.js";import"./Button-CxDis2kk.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BgxsfTck.js";import"./createLucideIcon-ECDaDi6j.js";import"./x-cLdMTT66.js";import"./Heading-CdeywLRe.js";import"./info-geoQQmH_.js";import"./Popover-pYjXSSws.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
