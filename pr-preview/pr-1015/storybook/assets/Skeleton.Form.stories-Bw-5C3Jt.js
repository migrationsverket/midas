import{j as e,l}from"./iframe-D-2Z30c8.js";import{S as t}from"./Skeleton-O7ZQL8mB.js";import{T as p}from"./TextField-BnC_vuFW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-_z1DGf1T.js";import"./utils-DNydHYc7.js";import"./TextField-BUU3wEWL.js";import"./FieldError-CSFHdZGJ.js";import"./Text-CDWb81vy.js";import"./useFocusRing-DHbfBmoZ.js";import"./index-CXlyEFlC.js";import"./index-y-LtlDB7.js";import"./Text-CwJkDPGR.js";import"./RSPContexts-DqxaNqYF.js";import"./Form-GyyhpmPV.js";import"./useFormValidation-g9InWXfo.js";import"./Group-DCfXJ3pF.js";import"./Input-CPeZTNcN.js";import"./Hidden-CvH6QNsS.js";import"./Button-B7aUUd8D.js";import"./useLabels-BRLzE6Cb.js";import"./useButton-E9BEr0uy.js";import"./useTextField-CSjh0vYN.js";import"./useControlledState-DQ7Q1QxO.js";import"./useField-Cm8tVB4V.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dxb6-MDz.js";import"./Dialog-BsWMUXlA.js";import"./OverlayArrow-B9kOCwsL.js";import"./useResizeObserver-DmGq7PFA.js";import"./Collection-BUKZd-PH.js";import"./index-B-bagfVX.js";import"./Separator-DJ-qjVA6.js";import"./SelectionManager-CCPHjx2I.js";import"./useEvent-D8Y6SyA6.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D08Kxu1u.js";import"./useDescription-D38Fa9LD.js";import"./ListKeyboardDelegate-enAcSWZ-.js";import"./PressResponder-CT_KiDtX.js";import"./useLocalizedStringFormatter-BGPhrwPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CR4yh9oB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-G01riaNf.js";import"./Button-Do142c3E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgZG97CC.js";import"./createLucideIcon-DQV7tCjS.js";import"./x-DCcFjLN0.js";import"./Heading-a8hrmiZA.js";import"./info-DWsvjYHH.js";import"./Popover-19PiCP30.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
