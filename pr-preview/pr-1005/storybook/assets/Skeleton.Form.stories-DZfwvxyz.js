import{j as e,l}from"./iframe-KzFLTGr0.js";import{S as t}from"./Skeleton-pRY3FzHA.js";import{T as p}from"./TextField-B8DqlYD3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Bc1uXMbg.js";import"./utils-CO2yYsr6.js";import"./TextField-vwODPiAo.js";import"./FieldError-B1daGC65.js";import"./Text-Cmn4JyoG.js";import"./useFocusRing-C4wRgiR-.js";import"./index-hPDntuQZ.js";import"./index-BiyGu_5v.js";import"./Text-BH1PFH25.js";import"./RSPContexts-sIRx7DsI.js";import"./Form-CBvpL72C.js";import"./useFormValidation-DOWv8OTt.js";import"./Group-Dc48kuVs.js";import"./Input-DnVHbUsY.js";import"./Hidden-DzrKcQON.js";import"./Button-BBRIbgdT.js";import"./useLabels-8Z9kmpB8.js";import"./useButton-BxP8bzWM.js";import"./useTextField-Cie2w3CG.js";import"./useControlledState-C-UjGiCO.js";import"./useField-YY8zXIMp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BZyjLgDi.js";import"./Dialog-jqE6dH9h.js";import"./OverlayArrow-CofwM2Qh.js";import"./useResizeObserver-C-PipfoT.js";import"./Collection-DVOI67sL.js";import"./index-CKRnJMQr.js";import"./Separator-As3w6HQx.js";import"./SelectionManager-DVLI_Hyy.js";import"./useEvent-BFDZwV-z.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BtQryPzY.js";import"./useDescription-BVYDnjYQ.js";import"./ListKeyboardDelegate-CksOf0SS.js";import"./PressResponder-CaBihIus.js";import"./useLocalizedStringFormatter-cXa5F6yq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D04kpmJ_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-kcpL8sOO.js";import"./Button-BLxQJ6AW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cvui8YbN.js";import"./createLucideIcon-QW7mSHEY.js";import"./x-QPO1I7pH.js";import"./Heading-NeDBoCJT.js";import"./info-CMR4dw2l.js";import"./Popover-BFbr7TL5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
