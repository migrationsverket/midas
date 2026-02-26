import{j as e,l}from"./iframe-CCQoa_za.js";import{S as t}from"./Skeleton-CnxW6siu.js";import{T as d}from"./TextField-BwI2acbT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DUDTgqPL.js";import"./utils-BdXRUyql.js";import"./FieldError-CpKUhFOP.js";import"./Text-YX2OQKIh.js";import"./useFocusRing-BCtmiU0K.js";import"./index-B-zUS5Y_.js";import"./index-v9D4YVUO.js";import"./Text-CqLZ0QeB.js";import"./RSPContexts-7vhnChNh.js";import"./Form-CtASfJWn.js";import"./useFormValidation-Cbtdnqjx.js";import"./Group-CM9tXWmS.js";import"./Input-CUDkpndu.js";import"./Hidden-DcjYmRqi.js";import"./Button-BrsQgG2O.js";import"./useLabels-B6SFlZG6.js";import"./useButton-CrmhM509.js";import"./useTextField-Dd2cx5I5.js";import"./useControlledState-CDPjHx4z.js";import"./useField-DmXFFhmO.js";import"./TextField.module-DdivwlC8.js";import"./Label-oSwHdS4B.js";import"./Dialog-CPfRBNp_.js";import"./Button-C_b8qgGp.js";import"./Button.module-CPCFE9o0.js";import"./useLocalizedStringFormatter-C-e4eVhQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./createLucideIcon-Q-uPorfw.js";import"./VisuallyHidden-B--Ked72.js";import"./Collection-QWDkhOmC.js";import"./index-CO5TAJRV.js";import"./Separator-Q7_RWth6.js";import"./SelectionManager-VGqUM2UO.js";import"./useEvent-CScpbFfp.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DxjscOJj.js";import"./useDescription-DTFIEJBZ.js";import"./ListKeyboardDelegate-wa-GcMJZ.js";import"./PressResponder-CcoQZDOV.js";import"./useLocalizedStringFormatter-DGLdWeqa.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CDIA4O5d.js";import"./Heading-e8mJhic5.js";import"./info-CahQ617a.js";import"./Popover-CbyNasAR.js";const me={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
  variant="form"
  size="large"
  width="400px"
  isAnimated={false}
/>`}}}},a={args:{size:"large",isOnLayer01:!0},render:r=>e.jsx("div",{style:{backgroundColor:l,padding:"1rem"},children:e.jsx(t,{...r,"data-testid":"skeleton"})})},i={args:{size:"large"},render:r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(t,{...r,"data-testid":"skeleton-1"}),e.jsx(t,{...r,"data-testid":"skeleton-2"}),e.jsx(t,{...r,"data-testid":"skeleton-3"})]})},m={tags:["!autodocs"],render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-start"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Skeleton (Loading)"}),e.jsx(t,{variant:"form",size:"large"})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h3",{style:{marginTop:0,fontSize:"1rem",fontWeight:500},children:"Actual TextField"}),e.jsx(d,{label:"Namn",description:"Fyll i ditt fullständiga namn"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["Large","Medium","NoAnimation","OnLayer01","Multiple","Comparison"];export{m as Comparison,s as Large,n as Medium,i as Multiple,o as NoAnimation,a as OnLayer01,le as __namedExportsOrder,me as default};
