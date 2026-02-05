import{j as e,l}from"./iframe-CXofTh8m.js";import{S as t}from"./Skeleton-DOT_TeR3.js";import{T as p}from"./TextField-DWunqmV4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-bJxKry-2.js";import"./utils-CcPRcp3b.js";import"./TextField-fsloJloC.js";import"./FieldError-gHbQTmmY.js";import"./Text-Dfh94ZCo.js";import"./useFocusRing-pwOFYrMc.js";import"./index-DgWjWihD.js";import"./index-DTbcmjmi.js";import"./Text-js5dDMWg.js";import"./RSPContexts-uhIJKHog.js";import"./Form-DbR0xU2Q.js";import"./useFormValidation-BkJ0C1px.js";import"./Group-CLXl_rFM.js";import"./Input-DbLMuTOj.js";import"./Hidden-lT_vOSHT.js";import"./Button-Bg0rgDPQ.js";import"./useLabels-Cee1PGsE.js";import"./useButton-Cf-orZyu.js";import"./useTextField-CMebTn5t.js";import"./useControlledState-C-iEYIDx.js";import"./useField-CnOA2Ga6.js";import"./TextField.module-DpzeWGpt.js";import"./Label-05t0sIEn.js";import"./Dialog-BH6XQL2P.js";import"./OverlayArrow-CaY8z3G5.js";import"./useResizeObserver-BIbanGd_.js";import"./Collection-Dpq18B-4.js";import"./index-CIc5rVh6.js";import"./Separator-B2pg4UUU.js";import"./SelectionManager-rdPtBlc1.js";import"./useEvent-Dwblxo1q.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BCKvqx3C.js";import"./useDescription-VWMzRdkS.js";import"./ListKeyboardDelegate-DmOfKD5W.js";import"./PressResponder-DMBvv7ep.js";import"./useLocalizedStringFormatter-B_DAMmIe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-SQwPEGA5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dc5QJa4d.js";import"./Button-CYd-XZXb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Do3rSOLA.js";import"./createLucideIcon-BzjseAjj.js";import"./x-Brxl_cXa.js";import"./Heading-RTBvPZzr.js";import"./info-CJlKqFFs.js";import"./Popover-DOeJP3Qv.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
