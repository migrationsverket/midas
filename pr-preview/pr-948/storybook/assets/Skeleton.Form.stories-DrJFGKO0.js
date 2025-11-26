import{j as e,l}from"./iframe-CNs3Hc78.js";import{S as t}from"./Skeleton-DGI2n5nY.js";import{T as d}from"./TextField-lrRu4Bzz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-GMQiDPSJ.js";import"./utils-BCAzWPEC.js";import"./TextField-Bj77P4pv.js";import"./FieldError-zFhVoF9-.js";import"./Text-wtOrpJHq.js";import"./useFocusRing-zj2lvc57.js";import"./index-B3WrROuP.js";import"./index-D4SN8WxL.js";import"./Text-BgKg61nJ.js";import"./RSPContexts-BrkOvu8M.js";import"./Form-DYRseO7L.js";import"./useFormValidation-D30uUmE0.js";import"./Group-C1oDJn9X.js";import"./Input-C0ofQ6OM.js";import"./Hidden-DgJuJ0IA.js";import"./Button-tVHEZQYV.js";import"./useLabels-CT5lp67H.js";import"./useButton-BXGXxck1.js";import"./useTextField-CRpkXfPO.js";import"./useControlledState-TNI0bjBI.js";import"./useField-Cw6RQ1mB.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BHxTCLjC.js";import"./Dialog-CoIngXy8.js";import"./OverlayArrow-B_pIAp34.js";import"./useResizeObserver-D6XN12W9.js";import"./Collection-DFfxkGXX.js";import"./index-CDein1hB.js";import"./Separator-2-T3Ee-g.js";import"./SelectionManager-CplIeKd3.js";import"./useEvent-CPgKTkC-.js";import"./scrollIntoView-C3r_DWJ9.js";import"./SelectionIndicator-DEn9IElk.js";import"./useDescription-DCIm4kSk.js";import"./ListKeyboardDelegate-B54wTjfW.js";import"./PressResponder-BaXSQ7LF.js";import"./useLocalizedStringFormatter-BN9wWTBZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BCP-FySj.js";import"./VisuallyHidden-DpNrlenL.js";import"./Button-Co8s4gf_.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CV3R0Jov.js";import"./createLucideIcon-gnxpVPhb.js";import"./x-r97zZEq7.js";import"./Heading-6lhQ2fmS.js";import"./info-DRs9hkc-.js";import"./Popover-CDYrlnhi.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
