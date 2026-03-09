import{j as e,l}from"./iframe-C7bjyZwM.js";import{S as t}from"./Skeleton-FrZrTEls.js";import{T as p}from"./TextField-Dzss_4Ge.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BP3MTOYo.js";import"./utils-CIiQPwyX.js";import"./FieldError-BXfQY4zD.js";import"./Text-BJaGdqWL.js";import"./useFocusRing-5twuRh50.js";import"./index-BcQ7-9aJ.js";import"./index-Dy0iqIGJ.js";import"./Text-C5NeNGM2.js";import"./RSPContexts-CnvL7WZL.js";import"./Form-v5sUP_bv.js";import"./useFormValidation-BWm46lJU.js";import"./Group-BFk5EyV3.js";import"./Input-B1cDLkhA.js";import"./Hidden-aFyf7gu8.js";import"./Button-C2JLJi6L.js";import"./useLabels-B0ZdbmeW.js";import"./useButton-JOi2-Sum.js";import"./useTextField-DxO_Ht67.js";import"./useControlledState-D62BjFgf.js";import"./useField-CpAfE4lc.js";import"./TextField.module-DdivwlC8.js";import"./Label-kCS0HhbY.js";import"./Dialog-Cz3ZB9H5.js";import"./OverlayArrow-B3YLf9Fa.js";import"./useResizeObserver-ezTdfubf.js";import"./Collection-6KqJKeYy.js";import"./index-BSvAKKIw.js";import"./Separator-xCvxJZHm.js";import"./SelectionManager-CvqFuJtb.js";import"./useEvent-B8VlZ3mC.js";import"./scrollIntoView-BhIbPiYG.js";import"./SelectionIndicator-Stz9YuR-.js";import"./useDescription-CweaZgNC.js";import"./ListKeyboardDelegate-C5T3FD_h.js";import"./PressResponder-jUlRYh37.js";import"./useLocalizedStringFormatter-BA72XhLM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpAp9bcE.js";import"./getScrollParent-BeyReYlz.js";import"./VisuallyHidden-B7bbQpVf.js";import"./Button-B0ce8tXc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRvjyLqR.js";import"./createLucideIcon-C5pih5R6.js";import"./x-nSKEkmzv.js";import"./Heading-CT2NG_Xd.js";import"./info-BV12xQAQ.js";import"./Popover-P9PcVLxb.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
