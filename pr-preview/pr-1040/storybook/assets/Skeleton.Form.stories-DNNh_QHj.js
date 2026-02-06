import{j as e,l}from"./iframe-Bu2zzzE-.js";import{S as t}from"./Skeleton-BHEYgYPn.js";import{T as p}from"./TextField-oDjOxJAE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DsATsc7v.js";import"./utils-D4qoxq6V.js";import"./TextField-Bs6aDF_N.js";import"./FieldError-C-kLbmfj.js";import"./Text-CyZW-0MA.js";import"./useFocusRing-YWhjqEgC.js";import"./index-B4VLM8wj.js";import"./index-CLepp-yy.js";import"./Text-CbpLUl1P.js";import"./RSPContexts-DghJNKta.js";import"./Form-BrEUFrti.js";import"./useFormValidation-CYLG9fgC.js";import"./Group-BY8-8PfZ.js";import"./Input-Do5bfAkw.js";import"./Hidden-B80qSbZA.js";import"./Button-S1cZ3oDo.js";import"./useLabels-CBl0gRZS.js";import"./useButton-D1KNfoAL.js";import"./useTextField-Dr9sigZv.js";import"./useControlledState-DGpDrNxO.js";import"./useField-wWbyNm1N.js";import"./TextField.module-DpzeWGpt.js";import"./Label-DrW1IDND.js";import"./Dialog-BEckTAmw.js";import"./OverlayArrow-BDsNbTge.js";import"./useResizeObserver-d3X9sJcN.js";import"./Collection-CZk8itpW.js";import"./index-lgmsj2SM.js";import"./Separator-rJNtfHwJ.js";import"./SelectionManager-B1dioWQj.js";import"./useEvent-BM4aK4KA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DiW9jQwU.js";import"./useDescription-DN9USHD9.js";import"./ListKeyboardDelegate-2Wzj6kBl.js";import"./PressResponder-Ck7XRF-Q.js";import"./useLocalizedStringFormatter-Bgu754vE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CIZ16NRu.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DvEZM9Lw.js";import"./Button-q_TKGLf8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dt6zB3aB.js";import"./createLucideIcon-DOjvHL5l.js";import"./x-dhS2SloF.js";import"./Heading-DmmunIUe.js";import"./info-D6UN05sj.js";import"./Popover-MYxmXvPm.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
