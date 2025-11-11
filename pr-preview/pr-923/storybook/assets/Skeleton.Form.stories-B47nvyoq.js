import{j as e,l}from"./iframe-CuNlhVbe.js";import{S as t}from"./Skeleton-CO-8MRth.js";import{T as d}from"./TextField-BFo9u-WR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-C_KkVeKi.js";import"./utils-B8NVfSfe.js";import"./FieldError-CTY2IPpm.js";import"./Text-D8GREq1L.js";import"./useFocusRing-wXiAEqmT.js";import"./index-DV8HCzUV.js";import"./index-CXWed7tA.js";import"./Text-BvIukjwj.js";import"./RSPContexts-CXRqJ3P2.js";import"./Form-DVXNxj7c.js";import"./useFormValidation-DVvRwfTA.js";import"./Group-Ba8RQsK9.js";import"./Input-DTQgHboS.js";import"./Hidden-l86ZZb_o.js";import"./Button-DiUERCEo.js";import"./useLabels-vXYiQgPh.js";import"./useButton-MVrmgZI_.js";import"./useTextField-BBbhz2V_.js";import"./useControlledState-5ENUpcQW.js";import"./useField-D6kOKrFi.js";import"./TextField.module-DGUQcbB9.js";import"./Label-DYuz32Xs.js";import"./Dialog-BP9fK9Th.js";import"./OverlayArrow-Ck1uu4bl.js";import"./useResizeObserver-BIwXZ-he.js";import"./Collection-CvfN2Hbs.js";import"./index-BKnCBsAx.js";import"./Separator-BS3j5Nj5.js";import"./SelectionManager-DAUP0ih6.js";import"./useEvent-BrBR3UbR.js";import"./scrollIntoView-DRGTjY3J.js";import"./SelectionIndicator-tZPo14fy.js";import"./useDescription-DkbdkEhe.js";import"./ListKeyboardDelegate-C4GDJ1UQ.js";import"./PressResponder-EG-aYIps.js";import"./useLocalizedStringFormatter-DYbPbioc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BslocY4m.js";import"./VisuallyHidden-Ba3tVXVU.js";import"./useLocalizedStringFormatter-DWEhKcFp.js";import"./Button-g0PWpBa7.js";import"./Button.module-CtQ1deO8.js";import"./x-CccK87QT.js";import"./createLucideIcon-TK9FCAYu.js";import"./Heading-CZW8hNx0.js";import"./info-DNyTsDWA.js";import"./Popover-DWt2hNt5.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
