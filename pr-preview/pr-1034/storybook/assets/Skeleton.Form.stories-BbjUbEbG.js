import{j as e,l}from"./iframe-a-0QSjcf.js";import{S as t}from"./Skeleton-DR_BJLI1.js";import{T as p}from"./TextField-Daimn2oW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DW_PjiB9.js";import"./utils-B_-tSBeZ.js";import"./TextField-BRt79qr6.js";import"./FieldError-DsswgMzG.js";import"./Text-BKQI6ihA.js";import"./useFocusRing-Czic3fia.js";import"./index-7-rgoRIg.js";import"./index-BW6KTqQa.js";import"./Text-B2LxCzJs.js";import"./RSPContexts-D7vEIwAp.js";import"./Form-BGTqQH8a.js";import"./useFormValidation-Du4LTqk6.js";import"./Group-mS_sftn7.js";import"./Input-DbfA93Bb.js";import"./Hidden-B9ZA2jSe.js";import"./Button-C60PLABZ.js";import"./useLabels-BJ97I3JO.js";import"./useButton-CYqr7EFX.js";import"./useTextField-NOopuUc-.js";import"./useControlledState-DQziIZ9T.js";import"./useField-CGPrKXG5.js";import"./TextField.module-DpzeWGpt.js";import"./Label-YgUgumpZ.js";import"./Dialog-w2u3UMAw.js";import"./OverlayArrow-b72sAqXS.js";import"./useResizeObserver-W2ayqQuc.js";import"./Collection-ErSyUHVz.js";import"./index-DWKJl1jK.js";import"./Separator-BxqIoaxC.js";import"./SelectionManager-Cos7Ara1.js";import"./useEvent-DG_5MX2s.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3aVRxCVz.js";import"./useDescription-DFv-da9o.js";import"./ListKeyboardDelegate-B5PjmmDN.js";import"./PressResponder-Cl2-_IoC.js";import"./useLocalizedStringFormatter-JU1_R9Z5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2sqxsit.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B518bO6H.js";import"./Button-D2oQUHVT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3fQfCDh.js";import"./createLucideIcon-Dsg6rjRC.js";import"./x-CIpaA31e.js";import"./Heading-D2oXPaON.js";import"./info-_GEbiMwg.js";import"./Popover-DY7AGX_k.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
