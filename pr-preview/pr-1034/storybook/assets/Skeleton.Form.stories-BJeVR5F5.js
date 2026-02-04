import{j as e,l}from"./iframe-CDpCa2C9.js";import{S as t}from"./Skeleton-CWrEUsjZ.js";import{T as p}from"./TextField-BRfmVUsD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BZNUGly5.js";import"./utils-D9b9ono-.js";import"./TextField-DUlG_fqP.js";import"./FieldError-uEbEh-Jd.js";import"./Text-Cvru-1LU.js";import"./useFocusRing-C59_FyC5.js";import"./index-DwmA2ogn.js";import"./index-70fJEBxr.js";import"./Text-BpJbL-li.js";import"./RSPContexts-8Jkfg-tI.js";import"./Form-DXYU4X_v.js";import"./useFormValidation-BTJPfZtn.js";import"./Group-DweasyLz.js";import"./Input-Cxbo2akX.js";import"./Hidden-D4m7F3Ji.js";import"./Button-CJrvF-ti.js";import"./useLabels-C5k7-KLd.js";import"./useButton-BrWdoxqT.js";import"./useTextField-CzH_KQQP.js";import"./useControlledState-BHuEBeNc.js";import"./useField-CcrXeUIf.js";import"./TextField.module-DpzeWGpt.js";import"./Label-BYD0_h15.js";import"./Dialog-lKc9OK4p.js";import"./OverlayArrow-Dcq8tjKU.js";import"./useResizeObserver-BTDxpmuG.js";import"./Collection-B5itjfdf.js";import"./index-DNOYjG2g.js";import"./Separator-UgiltROw.js";import"./SelectionManager-DGRaZ6UT.js";import"./useEvent-cEyOWBqm.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CIQKt0_T.js";import"./useDescription-rjgwWDBk.js";import"./ListKeyboardDelegate-BHqgzlqT.js";import"./PressResponder-De97Hhui.js";import"./useLocalizedStringFormatter-nd4U6D0y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8SK4htG.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-pZHGOQBw.js";import"./Button-Huv8tAxG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fHnA6nV5.js";import"./createLucideIcon-D3Pi_s-P.js";import"./x-CfHHzjmO.js";import"./Heading-BNZMV9xs.js";import"./info-DpmkpdAR.js";import"./Popover-BMaQxCRA.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
