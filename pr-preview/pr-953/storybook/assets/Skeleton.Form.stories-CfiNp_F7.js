import{j as e,l}from"./iframe-DXZswXcd.js";import{S as t}from"./Skeleton-BaXI6Lsz.js";import{T as d}from"./TextField-D96L6BhI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-O4OY9cuh.js";import"./utils-Cf0-1u65.js";import"./TextField-DUJ4r1cx.js";import"./FieldError-BvKOTYSn.js";import"./Text-nnXd3bBi.js";import"./useFocusRing-BG9tZgKA.js";import"./index-Crv0Q4vS.js";import"./index-C1YRI8qY.js";import"./Text-BGzfgZXL.js";import"./RSPContexts-C5Z6RhjK.js";import"./Form-BjvnKEQe.js";import"./useFormValidation-BEgmi4Gj.js";import"./Group-B265ba4U.js";import"./Input-ghCLvrtX.js";import"./Hidden-DHOmIzAb.js";import"./Button-D1-arsKK.js";import"./useLabels-DwvLFUwE.js";import"./useButton-C6Wl-MUd.js";import"./useTextField-CtfY75Pr.js";import"./useControlledState-CJ_efx1W.js";import"./useField-DOslAXN9.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DnNKyVfe.js";import"./Dialog-BX9QTNQj.js";import"./OverlayArrow-BOFP6ttP.js";import"./useResizeObserver-DpIMhh4t.js";import"./Collection-BiqV7mQf.js";import"./index-CNK238hP.js";import"./Separator-D1aHTNAV.js";import"./SelectionManager-OME_ZJYN.js";import"./useEvent-BUY7bp5p.js";import"./scrollIntoView-CaLNI_wC.js";import"./SelectionIndicator-AcToMlzz.js";import"./useDescription-IwVOs4ub.js";import"./ListKeyboardDelegate-DwfO7Ojx.js";import"./PressResponder-BbLBRR3U.js";import"./useLocalizedStringFormatter-LFtnKqVA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D9uKd0qs.js";import"./VisuallyHidden-BQhZj104.js";import"./Button-AcRXejUz.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BQ5mUNua.js";import"./createLucideIcon-Jyt4-ntd.js";import"./x-B9aDcILT.js";import"./Heading-Dqbz5JVQ.js";import"./info-Cn_srCiM.js";import"./Popover-TW0uy02k.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
