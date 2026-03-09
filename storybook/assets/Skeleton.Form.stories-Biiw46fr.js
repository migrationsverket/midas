import{j as e,l}from"./iframe-kd_AoAeF.js";import{S as t}from"./Skeleton-D9HM2f_l.js";import{T as p}from"./TextField-BKUufVTx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CQcwEprc.js";import"./utils-rNhv6-p5.js";import"./FieldError-n3fvYIN_.js";import"./Text-0B35jr2S.js";import"./useFocusRing-DAtTESdQ.js";import"./index-Co1AZiIR.js";import"./index-C8QvYmrM.js";import"./Text-DhCHaZIC.js";import"./RSPContexts-Dduov18O.js";import"./Form-B0g7hQdX.js";import"./useFormValidation-CrHP7G67.js";import"./Group-ybN7BaE4.js";import"./Input-JtUl-qmh.js";import"./Hidden-CVTUXncE.js";import"./Button-DeJMe7Hb.js";import"./useLabels-0qTjz8uQ.js";import"./useButton-CrwZeUwe.js";import"./useTextField-CSiKOPgr.js";import"./useControlledState-BFxViZ9m.js";import"./useField-D1DMzf98.js";import"./TextField.module-DdivwlC8.js";import"./Label-C3P9q1tn.js";import"./Dialog-Kwpiy5Nc.js";import"./OverlayArrow-Dhh-yQBJ.js";import"./useResizeObserver-7ofWCrPu.js";import"./Collection-CElgCNYt.js";import"./index-CR_QTErF.js";import"./Separator-CaBtwGDl.js";import"./SelectionManager-CXzDYAc2.js";import"./useEvent-ClTqOmjP.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BafoNrVj.js";import"./useDescription-XJhiBPR3.js";import"./ListKeyboardDelegate-DG2LI3S1.js";import"./PressResponder-DMUVf77S.js";import"./useLocalizedStringFormatter-B8gC_nki.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CGf8eVWx.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DSv4Z3AK.js";import"./Button-CGXac9yi.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DfD4_B_y.js";import"./createLucideIcon-DYqnFHX_.js";import"./x-BKJs55h2.js";import"./Heading-CDuh6Ueo.js";import"./info-DkhTFZjp.js";import"./Popover-B-YC75o1.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
