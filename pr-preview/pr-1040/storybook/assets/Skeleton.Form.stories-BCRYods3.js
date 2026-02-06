import{j as e,l}from"./iframe-4ccXjq77.js";import{S as t}from"./Skeleton-CoCig3TR.js";import{T as p}from"./TextField-BEmQuyh7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BUakIrO-.js";import"./utils-DzCHUaRu.js";import"./TextField-BiQcrlzS.js";import"./FieldError-C5onB_PA.js";import"./Text-CrNaDmnw.js";import"./useFocusRing-CDKSPNwB.js";import"./index-BwwLwywv.js";import"./index-sBShM5Ej.js";import"./Text-uQy3wyWh.js";import"./RSPContexts-BT9OTJNE.js";import"./Form-C9Psf8dn.js";import"./useFormValidation-BWYLQkYp.js";import"./Group-BQqYephe.js";import"./Input-Dn94-eTG.js";import"./Hidden-DAE9e0zC.js";import"./Button-BAGANk7J.js";import"./useLabels-BHOH4TdR.js";import"./useButton-DZhhLg_c.js";import"./useTextField-Cw6v0MyZ.js";import"./useControlledState-DeDHhxt6.js";import"./useField-CcBjpygh.js";import"./TextField.module-DpzeWGpt.js";import"./Label-CaJC1djb.js";import"./Dialog-DWvVX6bX.js";import"./OverlayArrow-B_P_ltuq.js";import"./useResizeObserver-CfK3O3xT.js";import"./Collection-1S5RkBco.js";import"./index-Cb5HXPR1.js";import"./Separator-Dx6F7DMv.js";import"./SelectionManager-BJfw3kJb.js";import"./useEvent-CqBhJabH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CFzc82jB.js";import"./useDescription-BqLnkJqr.js";import"./ListKeyboardDelegate-ClfSms08.js";import"./PressResponder-_w6EUsLm.js";import"./useLocalizedStringFormatter-B9UWcyjq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D7rxwsfS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D208qjgw.js";import"./Button-vy5h-HEb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BZCTuKsH.js";import"./createLucideIcon-DXb3Bj9J.js";import"./x-KN0xw9Pv.js";import"./Heading-D3rDIGej.js";import"./info-CJt2CkFw.js";import"./Popover-DYqU5Q_m.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
