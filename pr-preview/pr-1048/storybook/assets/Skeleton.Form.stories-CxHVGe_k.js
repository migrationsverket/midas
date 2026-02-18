import{j as e,l}from"./iframe-BB7xjXo9.js";import{S as t}from"./Skeleton-h81HUyRB.js";import{T as p}from"./TextField-BbZINX10.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CmpfaP9d.js";import"./utils-Dvy0y2aN.js";import"./FieldError-DiGNmRuv.js";import"./Text-CLZT0tYL.js";import"./useFocusRing-CktrVIaE.js";import"./index-C09hS3mR.js";import"./index-B8nO0JsZ.js";import"./Text-CpUAtCa1.js";import"./RSPContexts-D2NFs19Y.js";import"./Form-B-Za89Dc.js";import"./useFormValidation-DQxousKG.js";import"./Group-DuVpEFpY.js";import"./Input-B84_xjya.js";import"./Hidden-7SCFpwar.js";import"./Button-BkFJO1eK.js";import"./number-DfkVkf0F.js";import"./useLabels-B4AtxOYQ.js";import"./useButton-Bm946jai.js";import"./useTextField-D9jJj16b.js";import"./useControlledState-Cfde8CUP.js";import"./useField-BdVdo0-E.js";import"./TextField.module-Cm6797Xw.js";import"./Label-DTcS8O-X.js";import"./Dialog-BFigsiQU.js";import"./OverlayArrow-BUingdP0.js";import"./useResizeObserver-C3AGslVR.js";import"./Collection-DNeu2an7.js";import"./index-BWQBBC6S.js";import"./Separator-DxoFAerF.js";import"./SelectionManager-CyLtq4iJ.js";import"./useEvent-BMI0Onkw.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DTX9bUP0.js";import"./useDescription-Ct3uDuK8.js";import"./ListKeyboardDelegate-DihKRIfe.js";import"./PressResponder-CobclrHp.js";import"./useLocalizedStringFormatter-CVUyHfN-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BlCy8TIS.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CR7zfsA4.js";import"./Modal-qX-DO-vR.js";import"./Button-C22OOxtQ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-8KGrO3.js";import"./createLucideIcon-3X7COU7u.js";import"./x-Dc3uFHWe.js";import"./Heading-DIypV1uE.js";import"./info-cN5kNVqQ.js";import"./Popover-DBK9DmTS.js";const ge={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const ue=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,o as Medium,a as Multiple,n as NoAnimation,i as OnLayer01,ue as __namedExportsOrder,ge as default};
