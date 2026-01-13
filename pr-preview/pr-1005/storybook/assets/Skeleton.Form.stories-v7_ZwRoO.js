import{j as e,l}from"./iframe-CvVfZMju.js";import{S as t}from"./Skeleton-BnjLTmC8.js";import{T as p}from"./TextField-BNOyO1Ha.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CS5ZKLFe.js";import"./utils-DWYdFJkQ.js";import"./TextField-Bq1dhlvQ.js";import"./FieldError-AGivlbvG.js";import"./Text-BvmLx5Jg.js";import"./useFocusRing-C0LhZ78-.js";import"./index-D7941otZ.js";import"./index-Pshk4pH4.js";import"./Text-Bu-h3aGF.js";import"./RSPContexts-BqDomoxP.js";import"./Form-DfNI4Fyj.js";import"./useFormValidation-BwiqiVUx.js";import"./Group-DkQ4se4v.js";import"./Input-cwVTspUI.js";import"./Hidden-BEb8_Y6y.js";import"./Button-KsvyKPrf.js";import"./useLabels-CsWyYT6N.js";import"./useButton-DjfUH4ri.js";import"./useTextField-B3IPHEtb.js";import"./useControlledState-CMGDh5hi.js";import"./useField-D7GoXrYm.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CH95ECVi.js";import"./Dialog-CLJNDqU0.js";import"./OverlayArrow-DCWn89kD.js";import"./useResizeObserver-CPf7A2Ov.js";import"./Collection-BDO9FB8m.js";import"./index-Be3mLtxT.js";import"./Separator-J9VHNJ6_.js";import"./SelectionManager-CrGONw2O.js";import"./useEvent-BGpVX2rC.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgJevlzU.js";import"./useDescription-CKnbeb1h.js";import"./ListKeyboardDelegate-Cy2WhaSY.js";import"./PressResponder-DE_lcgFv.js";import"./useLocalizedStringFormatter-BRwLdyH3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKu9FEZm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CuujIUMO.js";import"./Button-gfNGwmaI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-JqvndrtF.js";import"./createLucideIcon-CL0pNCrf.js";import"./x-B5IewCPb.js";import"./Heading-C9B0QyBV.js";import"./info-B9anievW.js";import"./Popover-BIZycej8.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
