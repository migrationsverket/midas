import{j as e,l}from"./iframe-B1z-gzHE.js";import{S as t}from"./Skeleton-BhDJiCIL.js";import{T as p}from"./TextField-DwRTAZl5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-4haWjP0A.js";import"./utils-CEIeqKii.js";import"./FieldError-CT39iQs7.js";import"./Text-BYCHxNL_.js";import"./useFocusRing-BvsKcShr.js";import"./index-Di8dd2eE.js";import"./index-BOkWMc0e.js";import"./Text-Dl9x0CG8.js";import"./RSPContexts-BGkblzEm.js";import"./Form-CuLwN7xk.js";import"./useFormValidation-w3v3W7gn.js";import"./Group-Bg64DGy6.js";import"./Input-DF2nEux3.js";import"./Hidden-Cs2MCe5s.js";import"./Button-D77i-hon.js";import"./useLabels-Dmi7cw95.js";import"./useButton-fu8jG2Pq.js";import"./useTextField-4hdYMRQF.js";import"./useControlledState-B3HQDcvg.js";import"./useField-d_oeHlDs.js";import"./TextField.module-DpzeWGpt.js";import"./Label-Dq2Bv3Sh.js";import"./Dialog-1-j5Bo3M.js";import"./OverlayArrow-DEJNKPlL.js";import"./useResizeObserver-DZYX4SHr.js";import"./Collection-DOfSxpZ2.js";import"./index-Bb4iAelt.js";import"./Separator-CXlvbZzP.js";import"./SelectionManager-D7xh7jh3.js";import"./useEvent-EYVAMCj5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bo2ubr1N.js";import"./useDescription-DAgCVnlX.js";import"./ListKeyboardDelegate-CUzhUpcn.js";import"./PressResponder-C1X-ay40.js";import"./useLocalizedStringFormatter-DWVhSEJI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DJ05djJI.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bj8GOm3o.js";import"./Button-pqjMbnpp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEmp5YcF.js";import"./createLucideIcon-B5DI2OI0.js";import"./x-CglcQKFI.js";import"./Heading-BLB8Du94.js";import"./info-BWZR2OeP.js";import"./Popover-BhD_DRu-.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
