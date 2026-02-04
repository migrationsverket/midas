import{j as e,l}from"./iframe-B_SSSC13.js";import{S as t}from"./Skeleton-4ukeguSK.js";import{T as p}from"./TextField-LG3FA51z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-RjvbqXqL.js";import"./utils-DvDYbPsX.js";import"./TextField-BDIIj_nL.js";import"./FieldError-D1TT9t70.js";import"./Text-WBWevH5_.js";import"./useFocusRing-DD9UXZoZ.js";import"./index-h5wgbRS0.js";import"./index-CUO7TZGi.js";import"./Text-zzyNhY3P.js";import"./RSPContexts-Bo6wL8nR.js";import"./Form-zRNHTqke.js";import"./useFormValidation-DeX5ISQ4.js";import"./Group-DucwkJ-c.js";import"./Input--2a9vmyY.js";import"./Hidden-1_dFGxWz.js";import"./Button-BRuyYegt.js";import"./useLabels-MYW5pJHL.js";import"./useButton-D3rl8s_R.js";import"./useTextField-DcRRIu_F.js";import"./useControlledState-7bOzaDvk.js";import"./useField-D5ATrzWx.js";import"./TextField.module-DpzeWGpt.js";import"./Label-C6DEhGpe.js";import"./Dialog-BNNNvoc9.js";import"./OverlayArrow-CAsLYpF3.js";import"./useResizeObserver-7p9RzYhX.js";import"./Collection-Bc4Mkmlx.js";import"./index-DdHBG9m2.js";import"./Separator-Crb950pg.js";import"./SelectionManager-DsvtZaIh.js";import"./useEvent-CNY1qaAe.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C1ClyJxV.js";import"./useDescription-CXeCeKMo.js";import"./ListKeyboardDelegate-GR3jqGFe.js";import"./PressResponder-B0_TIU_P.js";import"./useLocalizedStringFormatter-8PuQ8rfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C6L3jXhq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DBwHi6uI.js";import"./Button-DwlyzCZV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-2Krnf2lE.js";import"./createLucideIcon-BX44XqHc.js";import"./x-CjWkaJ06.js";import"./Heading-CNoL31sb.js";import"./info-BhBHDNKZ.js";import"./Popover-frimzjzU.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
