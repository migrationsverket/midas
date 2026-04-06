import{j as e,l}from"./iframe-iqG9Nh4p.js";import{S as t}from"./Skeleton-BEY08E96.js";import{T as p}from"./TextField-Ct3tPOOr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BuDgUV4j.js";import"./utils-CoA-xVnF.js";import"./FieldError-BAXhhZix.js";import"./Text-CGCkUK8m.js";import"./useFocusRing-DlPMedN0.js";import"./index-CRxXIn2u.js";import"./index-B42Zj5NC.js";import"./Text-CSjoqRHi.js";import"./RSPContexts-DhG5bWz2.js";import"./Form-CbmDO35g.js";import"./Group-Lj4AaGC3.js";import"./Input-C49iH8T-.js";import"./Hidden-CGqHEiYj.js";import"./Button-DY22xJQl.js";import"./useLabel-CaKtnxKo.js";import"./useLabels-UUcXsAwx.js";import"./useButton-Brn-yYNf.js";import"./useTextField-DruNV9Kq.js";import"./useControlledState-_AGiuRBn.js";import"./useField-BsvjlsG3.js";import"./TextField.module-DdivwlC8.js";import"./Label-C5mNtC66.js";import"./Dialog-CW1jNIiP.js";import"./OverlayArrow-di8VuV2e.js";import"./useResizeObserver-CbqIe_2D.js";import"./Collection-U_BfqLcj.js";import"./index-BLKoWDIL.js";import"./Separator-BWcDzKjK.js";import"./SelectionManager-mV9s15G1.js";import"./useEvent-BB-kg239.js";import"./scrollIntoView-BjOH4z_I.js";import"./SelectionIndicator-xMaCnY94.js";import"./useDescription-Cj0GwJ4J.js";import"./ListKeyboardDelegate-DdqydRaK.js";import"./PressResponder-CSABQyF4.js";import"./useLocalizedStringFormatter-Cghfuk7K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DMO9jmw5.js";import"./getScrollParent-D-DaScmO.js";import"./VisuallyHidden-DzRCdULp.js";import"./x-ItA_xlKi.js";import"./createLucideIcon-Boi8XEVW.js";import"./useLocalizedStringFormatter-QZ0YYeXI.js";import"./Heading-BP9YWUvV.js";import"./Button-DtcyQC3H.js";import"./Button.module-BB7N-cLd.js";import"./info-CObpy4VF.js";import"./Popover-BFBBT22R.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(p,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,de as default};
