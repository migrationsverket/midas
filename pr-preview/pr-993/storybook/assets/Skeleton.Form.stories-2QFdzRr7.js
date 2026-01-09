import{j as e,l}from"./iframe-DZrsJ6b-.js";import{S as t}from"./Skeleton-DznLoXN6.js";import{T as p}from"./TextField-DKPSXCj2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-GQ0q2WmH.js";import"./TextField-CruUSAD2.js";import"./utils-Dj7V2bMs.js";import"./FieldError-DWKhV9VC.js";import"./Text-BS3cp343.js";import"./useFocusRing-BAHUxiR4.js";import"./index-fuZi8ECT.js";import"./index-DFt0fMY8.js";import"./Text-BkGWbYp3.js";import"./RSPContexts-BzuDnhhk.js";import"./Form-ChmaP7kS.js";import"./useFormValidation-BrYcYbB9.js";import"./Group-AYkyZsQI.js";import"./Input-BzRjCK_J.js";import"./Hidden-cX5Qttkt.js";import"./Button-070y6CBf.js";import"./useLabels-CGrX1VVn.js";import"./useButton-D7Y3-94U.js";import"./useTextField-QOSHG1zq.js";import"./useControlledState-Cz4Rv-Q4.js";import"./useField-DRxI2KW9.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B85Ga-jl.js";import"./Dialog-DDR9sTvd.js";import"./OverlayArrow-CfGAwh-B.js";import"./useResizeObserver-CDzZWKWX.js";import"./Collection-B814snHy.js";import"./index-CZ68S7a7.js";import"./Separator-_kZ-5Zxb.js";import"./SelectionManager-DFWJnm8l.js";import"./useEvent-BDOSgNI1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BB5OSBJX.js";import"./useDescription-ByaruJF3.js";import"./ListKeyboardDelegate-B4vn44dM.js";import"./PressResponder-Bt1vcSZ0.js";import"./useLocalizedStringFormatter-COTKWZiP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BOTn-ddj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CK7v_0-7.js";import"./Button-LBa2vNHq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-sjnB8c4y.js";import"./createLucideIcon-Dbd2m_Uk.js";import"./x-B6Do5IYF.js";import"./Heading-DTEpKgOI.js";import"./info-ByB_3fnq.js";import"./Popover-rHp-3z4d.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
