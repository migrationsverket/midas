import{j as e,l}from"./iframe-CY7earj9.js";import{S as t}from"./Skeleton-B4uaFQbJ.js";import{T as p}from"./TextField-8Mj4A8Fj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DUBeU7kI.js";import"./utils-BHj0WwlJ.js";import"./TextField-namiwpx9.js";import"./FieldError-X9ojGEW-.js";import"./Text-DDkXBPqL.js";import"./useFocusRing-D0zrayrq.js";import"./index-BMlkIDuL.js";import"./index-DvjoN402.js";import"./Text-DEbe6_kr.js";import"./RSPContexts-BRbL19jn.js";import"./Form-BY9kSmc9.js";import"./useFormValidation-jQfUv7M_.js";import"./Group-6rBRTPBy.js";import"./Input-BuN8GvyS.js";import"./Hidden-BWeB5vvs.js";import"./Button-Cn9gwPsg.js";import"./useLabels-B26E6Lmi.js";import"./useButton-D33c8uF-.js";import"./useTextField-DR4DnHU_.js";import"./useControlledState-CGlYRVEE.js";import"./useField-B15zj1Pl.js";import"./TextField.module-DpzeWGpt.js";import"./Label-3eLgMKE9.js";import"./Dialog-xHuaqAHU.js";import"./OverlayArrow-CUI5wUXW.js";import"./useResizeObserver-uEAd6X7g.js";import"./Collection-CNEjLfJN.js";import"./index-Bz5K3veL.js";import"./Separator-Da-_h7DR.js";import"./SelectionManager-HfXsibpp.js";import"./useEvent-BmzvquLD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-HcaYXDj8.js";import"./useDescription-B3ZL4MTY.js";import"./ListKeyboardDelegate-Bo1XGjsK.js";import"./PressResponder-CCUsU2dP.js";import"./useLocalizedStringFormatter-CXnWH6sO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-vw1cebNO.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BYqRYUAd.js";import"./Button-DqjjUYYg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CYqH8VQ7.js";import"./createLucideIcon-_3e5Batb.js";import"./x-CXFUVrZJ.js";import"./Heading-DTdA7tNF.js";import"./info-Cy3fZjjt.js";import"./Popover-BeD7AD1F.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
