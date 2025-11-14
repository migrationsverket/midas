import{j as e,l}from"./iframe-vngjZ-4P.js";import{S as t}from"./Skeleton-BzRZm2XW.js";import{T as d}from"./TextField-j6cO854x.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CWFDzmMi.js";import"./utils-DHeliekZ.js";import"./FieldError-DztSinTd.js";import"./Text-BbKxmc2D.js";import"./useFocusRing-DUbxX868.js";import"./index-CvXFvuDV.js";import"./index-ukHcnXjJ.js";import"./Text-By4ps0no.js";import"./RSPContexts-1mbHIt5l.js";import"./Form-Bewd3abj.js";import"./useFormValidation-CWTit8yj.js";import"./Group-lmL1s7XS.js";import"./Input-DKSDi64T.js";import"./Hidden-Bz5znElO.js";import"./Button-BC9sg2r9.js";import"./useLabels-se4Xxikx.js";import"./useButton-Dc_1rKgZ.js";import"./useTextField-Ce0jxjTv.js";import"./useControlledState-TuR8R_1y.js";import"./useField-IYEadwcm.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BwJNq3HW.js";import"./Dialog-C4yb9t_s.js";import"./OverlayArrow-B5NjMHxX.js";import"./useResizeObserver-ClSKlH08.js";import"./Collection-QNqKIXJO.js";import"./index-CaDPZtqS.js";import"./Separator-BCXWfzeX.js";import"./SelectionManager-CAQN8lul.js";import"./useEvent-DtJ9s--c.js";import"./scrollIntoView-3eYklhXT.js";import"./SelectionIndicator-D6kFnVhK.js";import"./useDescription-DyNeAMeF.js";import"./ListKeyboardDelegate-BjXp0VMi.js";import"./PressResponder-BJWrQB02.js";import"./useLocalizedStringFormatter-CZE4fUbg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BN7bdp6P.js";import"./VisuallyHidden-b4ZPYca2.js";import"./useLocalizedStringFormatter-CsTZX4GC.js";import"./Button-fRzOyLJW.js";import"./Button.module-CtQ1deO8.js";import"./x-dukuuXlu.js";import"./createLucideIcon-CJOpBfq1.js";import"./Heading-pu9kpDJD.js";import"./info-BmAtTYbP.js";import"./Popover-CLHREvEz.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
}`,...m.parameters?.docs?.source}}};const pe=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,a as Multiple,o as NoAnimation,i as OnLayer01,pe as __namedExportsOrder,de as default};
