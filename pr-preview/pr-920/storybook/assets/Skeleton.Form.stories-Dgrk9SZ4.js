import{j as e,l}from"./iframe-C8ZRuzT6.js";import{S as t}from"./Skeleton-CPdmIFkv.js";import{T as d}from"./TextField-BI4N0GnG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BKRHpaGq.js";import"./utils-C84SkkdT.js";import"./FieldError-B5DpnWry.js";import"./Text-BXfBqZ1f.js";import"./useFocusRing-CFhXuih-.js";import"./index-uCHJlnyo.js";import"./index-B6Y3uvN4.js";import"./Text-Dg-GiAXO.js";import"./RSPContexts-V5ia4aqN.js";import"./Form-C9lD8Kwy.js";import"./useFormValidation-B17lbehY.js";import"./Group-C3vAvr63.js";import"./Input-DbTUsorp.js";import"./Hidden-DgSXhjQ3.js";import"./Button-DCD_n0HI.js";import"./useLabels-JokUTrF_.js";import"./useButton-cLFZH3Vu.js";import"./useTextField-oQYjtdLX.js";import"./useControlledState-CET-geoU.js";import"./useField-DsT-5LHV.js";import"./TextField.module-DGUQcbB9.js";import"./Label-BezXOqZ1.js";import"./Dialog-ERSem-1O.js";import"./OverlayArrow-CgPubBl4.js";import"./useResizeObserver-qceEyp_m.js";import"./Collection-CB8DaqQI.js";import"./index-DtUnRBZc.js";import"./Separator-OmW-OL1L.js";import"./SelectionManager-DdyA7425.js";import"./useEvent-B0eRtjXK.js";import"./scrollIntoView-C0RUUlHR.js";import"./SelectionIndicator-Z3xAFVmE.js";import"./useDescription-BNQ8ykdi.js";import"./ListKeyboardDelegate-Bo80azgE.js";import"./PressResponder-DzIV2NIL.js";import"./useLocalizedStringFormatter-a2xA8nMP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-fYAg6uM-.js";import"./VisuallyHidden-BvZrm0U-.js";import"./useLocalizedStringFormatter-BFisaavP.js";import"./Button-Cn5XNJYk.js";import"./Button.module-CtQ1deO8.js";import"./x-CW7tLaop.js";import"./createLucideIcon-BgwGjT-s.js";import"./Heading-C0_h2u0m.js";import"./info-Bj_zeA9w.js";import"./Popover-BlFJqfjD.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
