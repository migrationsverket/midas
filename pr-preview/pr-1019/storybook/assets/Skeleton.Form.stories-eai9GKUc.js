import{j as e,l}from"./iframe-Dw6ThTAb.js";import{S as t}from"./Skeleton-t5IjCMHU.js";import{T as p}from"./TextField-CqSQXP0F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BsobsOPP.js";import"./utils-Cc21G09W.js";import"./TextField-j9bDJc0a.js";import"./FieldError-DXxOP3rc.js";import"./Text-CUe8uG9W.js";import"./useFocusRing-xc1II4Ss.js";import"./index-CYKqCDi7.js";import"./index-MEMx4wU2.js";import"./Text-COf0hmuO.js";import"./RSPContexts-tvXcEv4V.js";import"./Form-XKsvFydX.js";import"./useFormValidation-CRMkN8GB.js";import"./Group-D-nP0mrf.js";import"./Input-dN5D6L9t.js";import"./Hidden-SnJFNY5a.js";import"./Button-0Xunpr60.js";import"./useLabels-DkWQHrpu.js";import"./useButton-Au9jFQG2.js";import"./useTextField-BsccNDKb.js";import"./useControlledState-CUSHFPNB.js";import"./useField-VxKjSK4Y.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CzKfUXQk.js";import"./Dialog-rVuOUoSU.js";import"./OverlayArrow-p_rObb7K.js";import"./useResizeObserver-_DN6Irs7.js";import"./Collection-BBo2i_f0.js";import"./index-BOINZ4le.js";import"./Separator-CYAzFREs.js";import"./SelectionManager-DkglZCtx.js";import"./useEvent-DasM2UJj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DKG-qAuu.js";import"./useDescription-D06z1dS-.js";import"./ListKeyboardDelegate-BP400_Lu.js";import"./PressResponder-CZxiG_Gi.js";import"./useLocalizedStringFormatter-BY0kdCm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dq0qz9Ho.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CdWjTb8h.js";import"./Button-B1ILUDpZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-n073QgDi.js";import"./createLucideIcon-B3ctXaYi.js";import"./x-B_wX4fA-.js";import"./Heading-CxtLSvtP.js";import"./info-BvHn66Gl.js";import"./Popover-Bl0TCAnK.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
