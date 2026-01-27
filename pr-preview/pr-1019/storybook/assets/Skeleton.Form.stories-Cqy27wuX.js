import{j as e,l}from"./iframe-C1JT45wI.js";import{S as t}from"./Skeleton-CJAI4aut.js";import{T as p}from"./TextField-BGGoCk9D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-9nlHucL5.js";import"./utils-B3mA2zMb.js";import"./TextField-CCX94qcb.js";import"./FieldError-CRFea137.js";import"./Text-Do4Hf0SC.js";import"./useFocusRing-CMjH5GB-.js";import"./index-C7sIRXbI.js";import"./index-Ddf_a0id.js";import"./Text-BnVMb_Eh.js";import"./RSPContexts-DsZAf0Kq.js";import"./Form-CmZHX-Gu.js";import"./useFormValidation-DlaAewcn.js";import"./Group-cA_WlLed.js";import"./Input-BSiH3PZg.js";import"./Hidden-B97wECjB.js";import"./Button-iYwZhBmL.js";import"./useLabels-DEpiNBM8.js";import"./useButton-gvMW1tsr.js";import"./useTextField-6AtaOWLD.js";import"./useControlledState-1gHrzrW8.js";import"./useField-ClfrWth6.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CsI35Iya.js";import"./Dialog-BWPdqkkK.js";import"./OverlayArrow-6b3z8Dc4.js";import"./useResizeObserver-DNv4RNnC.js";import"./Collection-D6aLFlgl.js";import"./index-NpDGjW3p.js";import"./Separator-M5nPkv4s.js";import"./SelectionManager-Bfq0-7_-.js";import"./useEvent-CMhUQfXy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQBUQ4k9.js";import"./useDescription-AygReMNv.js";import"./ListKeyboardDelegate-B7KmNsgj.js";import"./PressResponder-BOgwUnrt.js";import"./useLocalizedStringFormatter-BMOogDa6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-pC8zvn35.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CExqZ3An.js";import"./Button-Cvr3NX4g.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C-OdPEDV.js";import"./createLucideIcon-DjE8uKST.js";import"./x-BEtEw_xa.js";import"./Heading-ZXPKAgVW.js";import"./info-BXyxxGGm.js";import"./Popover-D1vltZt0.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
