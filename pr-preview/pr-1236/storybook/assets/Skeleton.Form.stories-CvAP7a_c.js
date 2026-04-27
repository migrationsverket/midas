import{j as e,l}from"./iframe-BiQ8HasD.js";import{S as t}from"./Skeleton-B9swXYqk.js";import{T as p}from"./TextField-BZP90-z-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DcnhVS38.js";import"./utils-HJUYK1j_.js";import"./FieldError-jePN0XGs.js";import"./Text-DGK2Zvf0.js";import"./useFocusRing-Dh9TFhU0.js";import"./index-CxCqsVJY.js";import"./index-B9ZJX168.js";import"./Text-BdITZZNK.js";import"./RSPContexts-CmmbFvVN.js";import"./Form-D2H-KRh-.js";import"./Group-BYPqrYrz.js";import"./Input-DaFhkqYK.js";import"./Hidden-DEdvWcqT.js";import"./Button-DOF2Ijgw.js";import"./useLabel-8IgHcDVM.js";import"./useLabels-H9owUaj8.js";import"./useButton-BbHDi8ZV.js";import"./useTextField-B71p3qEk.js";import"./useControlledState-DOzruH4H.js";import"./useField-CBOuPJem.js";import"./TextField.module-DdivwlC8.js";import"./Label-DmUqhf98.js";import"./Dialog-B0QD4OmU.js";import"./OverlayArrow-BqRYBi2P.js";import"./useResizeObserver-TsvqsiXt.js";import"./Collection-CNlGcjka.js";import"./index-Cjx5nzwT.js";import"./Separator-CWOrQW37.js";import"./SelectionManager-DsyP4aRP.js";import"./useEvent-Ym0ZfLi1.js";import"./scrollIntoView-rDKecejh.js";import"./SelectionIndicator-Cvp4OCBG.js";import"./useDescription-Crs7vcLi.js";import"./ListKeyboardDelegate-8COEurd_.js";import"./PressResponder-zcpw2awt.js";import"./useLocalizedStringFormatter-CembVOjU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BHHwGKEZ.js";import"./getScrollParent-BcnQWZnN.js";import"./VisuallyHidden-iHVSgYDu.js";import"./ModalOverlay-BDN8lnTi.js";import"./x-Cmfu2hA0.js";import"./createLucideIcon-Dn_efDgc.js";import"./useLocalizedStringFormatter-CgDdVzRk.js";import"./Heading-BezJITJT.js";import"./Button-CBosCwI1.js";import"./Button.module-BB7N-cLd.js";import"./info-C6wv22-b.js";import"./Popover-RUzEP-l1.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
