import{j as e,l}from"./iframe-CPHjxRlP.js";import{S as t}from"./Skeleton-CuDmYwsk.js";import{T as p}from"./TextField-BTWZKm-c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D8TfYvh1.js";import"./utils-B-Qbv9d3.js";import"./FieldError-DUoT8eh2.js";import"./Text-BM8b8hjA.js";import"./useFocusRing-DWjPv-Rc.js";import"./index-BH0p0wiY.js";import"./index-HgmA4Z-C.js";import"./Text-p3Ykg7gy.js";import"./RSPContexts-IuRmAr1v.js";import"./Form-DIHYsu0S.js";import"./useFormValidation-BoDlAAF1.js";import"./Group-C4GcrH0o.js";import"./Input-DNaM9oZI.js";import"./Hidden-BaLLinj_.js";import"./Button-0oqu_HuR.js";import"./useLabels-JrHx6Rsk.js";import"./useButton-BM6c3a1z.js";import"./useTextField-vTgUdtc7.js";import"./useControlledState-kjVA7Iho.js";import"./useField-X6ivfkc5.js";import"./TextField.module-DdivwlC8.js";import"./Label-CFQUSaqJ.js";import"./Dialog-BpI-i29_.js";import"./OverlayArrow-Dqn5MO81.js";import"./useResizeObserver-Cs363CQE.js";import"./Collection-dzAraWz5.js";import"./index-DlfcjIIA.js";import"./Separator-CXP1fQTs.js";import"./SelectionManager-BPXPWQd0.js";import"./useEvent-B67iovzO.js";import"./scrollIntoView-qZ3V1AoT.js";import"./SelectionIndicator-Cpy4WKkL.js";import"./useDescription-BrEL6S7F.js";import"./ListKeyboardDelegate-C6dnvuD-.js";import"./PressResponder-CpG4UWem.js";import"./useLocalizedStringFormatter-IAU1f4xs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C04746Dl.js";import"./getScrollParent-vFXpP8ab.js";import"./VisuallyHidden-DUGlWYSK.js";import"./x-CL_KZXEW.js";import"./createLucideIcon-iYSxmCjy.js";import"./useLocalizedStringFormatter-BXoUii7t.js";import"./Heading-mPYmRqLQ.js";import"./Button-BPjf-uHP.js";import"./Button.module-D_C6WeTN.js";import"./info-BNzpK8pY.js";import"./Popover-cvAu2U6j.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
