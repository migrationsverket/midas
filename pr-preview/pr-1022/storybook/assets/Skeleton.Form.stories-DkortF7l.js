import{j as e,l}from"./iframe-DLQn-qTm.js";import{S as t}from"./Skeleton-CzPxY6Dc.js";import{T as p}from"./TextField-_8xiTOfa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Q-Nm6-V0.js";import"./utils-BseBzJWz.js";import"./TextField-D1DOdkEo.js";import"./FieldError-DhgEtkJ4.js";import"./Text-CuFotw1d.js";import"./useFocusRing-Do74QKH1.js";import"./index-BkZE1OTB.js";import"./index-C8Zl_Tv7.js";import"./Text-CjwNLSIP.js";import"./RSPContexts-DvPIEXFn.js";import"./Form-FnL5AQKn.js";import"./useFormValidation--qOyb23-.js";import"./Group-C645S7t3.js";import"./Input-D3_kSc1-.js";import"./Hidden-CNhpunQg.js";import"./Button-DYd3H_n-.js";import"./useLabels-DyMy7daN.js";import"./useButton-C2eCHCKv.js";import"./useTextField-CFtEHhuy.js";import"./useControlledState-BZ3KbGsu.js";import"./useField-BOmmNrOA.js";import"./TextField.module-DpzeWGpt.js";import"./Label-D_G7ZzJH.js";import"./Dialog-CfhFEXao.js";import"./OverlayArrow-CEvcWVl8.js";import"./useResizeObserver-B2vjaTis.js";import"./Collection-Bw773ohV.js";import"./index-B9SqyPko.js";import"./Separator-BZ1LFOFr.js";import"./SelectionManager-p-9hdccP.js";import"./useEvent-dNq17Ah7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C3jZ9U8m.js";import"./useDescription-Cc6Zbq_g.js";import"./ListKeyboardDelegate-Czj8i91Y.js";import"./PressResponder-d1IPJyDZ.js";import"./useLocalizedStringFormatter-BJIt3lYB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DTbeUDHO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden--4vyVQ1_.js";import"./Button-ChhODU99.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJPUWmDD.js";import"./createLucideIcon-Dlil2oPf.js";import"./x-BhU4g9X0.js";import"./Heading-DIsi2CKj.js";import"./info-BmYw3wes.js";import"./Popover-CUCE5Hwx.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
