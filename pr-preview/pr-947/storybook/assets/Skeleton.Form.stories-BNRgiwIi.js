import{j as e,l}from"./iframe-fq9A6FK9.js";import{S as t}from"./Skeleton-BkVJpF5s.js";import{T as d}from"./TextField-ThZS-JHq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D8oSZbnp.js";import"./utils-B2shJBpj.js";import"./TextField-BBY0V7v-.js";import"./FieldError-B7eqknUY.js";import"./Text-DMJYBmih.js";import"./useFocusRing-NaSrpACO.js";import"./index-DC3OJijG.js";import"./index-DBTT0pcE.js";import"./Text-DT84MTLn.js";import"./RSPContexts-BkNJEeni.js";import"./Form-_y9nNEQD.js";import"./useFormValidation-cD1hDx--.js";import"./Group-BkwHaFU5.js";import"./Input-BAJcm7c6.js";import"./Hidden-DjVuHnC7.js";import"./Button-W9ho1VFG.js";import"./useLabels-B4JEmX2w.js";import"./useButton-BbvEdJxo.js";import"./useTextField-DEprl-EE.js";import"./useControlledState-qB5AvSM2.js";import"./useField-mWqaLvOj.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Dd1dxjVQ.js";import"./Dialog-5L2Z7kvu.js";import"./OverlayArrow-SUAA6HKi.js";import"./useResizeObserver-tgvUSWir.js";import"./Collection-Cy_uzs11.js";import"./index-Cj6eYHz2.js";import"./Separator-BxfdqC88.js";import"./SelectionManager-CvjCb04E.js";import"./useEvent-BxWGM8jN.js";import"./scrollIntoView-D-Ul4rw1.js";import"./SelectionIndicator-C843uyYa.js";import"./useDescription-IpFgs4zH.js";import"./ListKeyboardDelegate-D3IgwcoF.js";import"./PressResponder-BKKh45xx.js";import"./useLocalizedStringFormatter-CK759rVD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CAI0Lw5F.js";import"./VisuallyHidden-CnCvc7Jt.js";import"./Button-BHnqVWV3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Ddt---zu.js";import"./createLucideIcon-CP4QsOlK.js";import"./x-DGGtshoA.js";import"./Heading-f4rdEv-p.js";import"./info-BcYgnBrT.js";import"./Popover-B1riCOLO.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},i={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},a={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,ce as __namedExportsOrder,pe as default};
