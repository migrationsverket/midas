import{j as e,l}from"./iframe-CZ4pIpgM.js";import{S as t}from"./Skeleton-D_VRGSDr.js";import{T as p}from"./TextField-DeVDc6Jl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-cphBvVpd.js";import"./utils-BKAqyTPp.js";import"./FieldError-CAfz9m6m.js";import"./Text-BQl4iJz3.js";import"./useFocusRing-CC14X5Ag.js";import"./index--Vrw-Eoy.js";import"./index-DhnAxJyh.js";import"./Text-DIdbWBzS.js";import"./RSPContexts-D88SRWR9.js";import"./Form-Ds7umKf_.js";import"./useFormValidation-B2pDzUXQ.js";import"./Group-BHpOHXFL.js";import"./Input-bTbCZqCi.js";import"./Hidden-eVbRi0Ga.js";import"./Button-Bzfpb552.js";import"./useLabels-Cqjt9RJx.js";import"./useButton-BLx5WIcY.js";import"./useTextField-sYR35YUp.js";import"./useControlledState-DloD9_PZ.js";import"./useField-3e9SwQn9.js";import"./TextField.module-DdivwlC8.js";import"./Label-WybzUyEy.js";import"./Dialog-C47mvOO0.js";import"./OverlayArrow-BIs3oxR8.js";import"./useResizeObserver-L2UfQ-0J.js";import"./Collection-D0DooXtn.js";import"./index-A8oFdD54.js";import"./Separator-Dpi82mqi.js";import"./SelectionManager-Bpvam3Hj.js";import"./useEvent-D9H4FF1-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-6cVNcxEy.js";import"./useDescription-DpS_jdsI.js";import"./ListKeyboardDelegate-Bwq3uVzn.js";import"./PressResponder-C53ru_xZ.js";import"./useLocalizedStringFormatter-BPfhaoOQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGmPg04v.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6O2-97V.js";import"./Button-BsOyBqD3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-2rZubXmi.js";import"./createLucideIcon-NleWcVUk.js";import"./x-DkZopY_b.js";import"./Heading-Dw6nkjUr.js";import"./info-CcpyDMJ0.js";import"./Popover-DYRZwff5.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
