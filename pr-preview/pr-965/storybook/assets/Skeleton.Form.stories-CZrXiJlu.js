import{j as e,l}from"./iframe-Dy8YW1nL.js";import{S as t}from"./Skeleton-CQ68ufDh.js";import{T as d}from"./TextField-BRqidQ9j.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-gYhsM1fI.js";import"./utils-C1iN3peK.js";import"./TextField-C3Cy1-Zf.js";import"./FieldError-DyZQ-DTm.js";import"./Text-DWQpvMY3.js";import"./useFocusRing-CHtYKIBZ.js";import"./index-CiKqZaPy.js";import"./index-CtsF22kH.js";import"./Text-hvN0j1za.js";import"./RSPContexts-CGLIBW7g.js";import"./Form-C2Eob-dF.js";import"./useFormValidation-CWizizTm.js";import"./Group-CAh5iPJL.js";import"./Input-B072LnZd.js";import"./Hidden-CMRF2LLs.js";import"./Button-DC3XM5t6.js";import"./useLabels-BfD0hyaw.js";import"./useButton-BzUs9u61.js";import"./useTextField-CJyRmj_B.js";import"./useControlledState-yTQyhLHt.js";import"./useField-C23ze1Dh.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ZIw0cKaI.js";import"./Dialog-B0fIVHVn.js";import"./OverlayArrow-CdekLvSf.js";import"./useResizeObserver-nI4TvI1F.js";import"./Collection-DQpYV1l7.js";import"./index-DYTqj35q.js";import"./Separator-CypzuRi1.js";import"./SelectionManager-mqjIioqG.js";import"./useEvent-CZ4JNl4C.js";import"./scrollIntoView-CvK5Pp_s.js";import"./SelectionIndicator-WMLvYsov.js";import"./useDescription-izPGNkRr.js";import"./ListKeyboardDelegate-D25woScL.js";import"./PressResponder-CeEHBSGP.js";import"./useLocalizedStringFormatter-DY5nz3IE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BDcVMAVa.js";import"./VisuallyHidden-BflTjhoa.js";import"./Button-B67iCngD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bgm_EniW.js";import"./createLucideIcon-Dm8CZmjq.js";import"./x-CLrlV6vH.js";import"./Heading-QM00-eq4.js";import"./info-Dsk6scms.js";import"./Popover-B7fnbKy0.js";const pe={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
