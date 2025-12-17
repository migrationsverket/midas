import{j as e,l}from"./iframe-CQ_fy_EY.js";import{S as t}from"./Skeleton-Cizkp_Y-.js";import{T as p}from"./TextField-DVyNHwGK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Cn0M3o7d.js";import"./utils-C7l7LqzK.js";import"./TextField-YbeQ5y3l.js";import"./FieldError-DMdpyDE1.js";import"./Text-CW8LcNQ6.js";import"./useFocusRing-CBjwNCjA.js";import"./index-BJJvraYt.js";import"./index-DXn3pDe8.js";import"./Text-hjykNwCE.js";import"./RSPContexts-DAW1b0Sd.js";import"./Form-CtV0_kwz.js";import"./useFormValidation-BjmZbY_Y.js";import"./Group-pF654sQo.js";import"./Input-DNKeCYoK.js";import"./Hidden-CzYLxqKr.js";import"./Button-B89jYYjE.js";import"./useLabels-DWjvmaBB.js";import"./useButton-BeUorQOe.js";import"./useTextField-DXBBu2fJ.js";import"./useControlledState-CnAeDNgw.js";import"./useField-D5CRbrEp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DgUZ9rTR.js";import"./Dialog-CfxKv9MS.js";import"./OverlayArrow-9MzEcXEe.js";import"./useResizeObserver-BDNmCi4G.js";import"./Collection-BWjNYup_.js";import"./index-DXR6CGk_.js";import"./Separator-Cr1bOOHp.js";import"./SelectionManager-DQ4P_f_Z.js";import"./useEvent-gT9bYXp3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DE6Qn6Zk.js";import"./useDescription-Be4J1cHA.js";import"./ListKeyboardDelegate-BW52_6s5.js";import"./PressResponder-D2dq6e46.js";import"./useLocalizedStringFormatter-C29QY5VX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df-Y-aE1.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DxPMhaND.js";import"./Button-DtIQcLuH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BTlSi4nT.js";import"./createLucideIcon-mqgaB7OL.js";import"./x-2XBO8L6F.js";import"./Heading-jrsyU3L3.js";import"./info-qcmNe9XL.js";import"./Popover-wXoN8svd.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
