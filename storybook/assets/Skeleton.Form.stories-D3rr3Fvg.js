import{j as e,l}from"./iframe-hjgHldhA.js";import{S as t}from"./Skeleton-DqOKqLb-.js";import{T as p}from"./TextField-B1u7j0Gf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-oQqInyBy.js";import"./utils-B2oy_Akv.js";import"./FieldError-DyNIXA91.js";import"./Text-C-W1MFmh.js";import"./useFocusRing-DGqM0imy.js";import"./index-wWqPkfY9.js";import"./index-CZGdFrnq.js";import"./Text-BGjvDqqs.js";import"./RSPContexts-BCs-XGXW.js";import"./Form-B6NlaSyc.js";import"./useFormValidation-CpAXD96F.js";import"./Group-EfawC0gw.js";import"./Input-DfYhy-s8.js";import"./Hidden-CkBT3eQL.js";import"./Button-DdHA5O9n.js";import"./useLabels-BUpPlZ0t.js";import"./useButton-3e8Qen6j.js";import"./useTextField-N8eQEtzs.js";import"./useControlledState-p8oWdHew.js";import"./useField-CXw-Mbui.js";import"./TextField.module-DdivwlC8.js";import"./Label-BupS0-_1.js";import"./Dialog-CU_5Duf5.js";import"./OverlayArrow-Cv96EX0M.js";import"./useResizeObserver-CdNoBydG.js";import"./Collection-BUI2UZ4s.js";import"./index-CcKajqZL.js";import"./Separator-CxX227d4.js";import"./SelectionManager-CJ1TE6-Q.js";import"./useEvent-mNSED06z.js";import"./scrollIntoView-BEdUUvdG.js";import"./SelectionIndicator-CcgAMD0V.js";import"./useDescription-g6-DJmWb.js";import"./ListKeyboardDelegate-CjrSiomx.js";import"./PressResponder-DUSCNq91.js";import"./useLocalizedStringFormatter-QPyrmh33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-teKMIvIr.js";import"./getScrollParent-BME3aSxN.js";import"./VisuallyHidden-pF8Dh8C_.js";import"./x-DBeRfKB2.js";import"./createLucideIcon-DxWbUO7j.js";import"./useLocalizedStringFormatter-qYAAoSTQ.js";import"./Heading-DuV-GoVL.js";import"./Button-D4ayGKxz.js";import"./Button.module-D_C6WeTN.js";import"./info-DayYRgE6.js";import"./Popover-DdSYMRVH.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
