import{j as e,l}from"./iframe-B5c7-TS8.js";import{S as t}from"./Skeleton-BcrGfhw3.js";import{T as p}from"./TextField-CKTdGkC0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CpJF1U1V.js";import"./utils-OlD28Oco.js";import"./TextField-CPIhbfuM.js";import"./FieldError-BUOTNQMM.js";import"./Text-DYD59UTl.js";import"./useFocusRing-C18dDj3L.js";import"./index-ByEKdHjQ.js";import"./index-41iNjvFE.js";import"./Text-CXLpjGso.js";import"./RSPContexts-yBqgqokE.js";import"./Form-Cv6_3fLN.js";import"./useFormValidation-fe3exVFC.js";import"./Group-B3WUkKss.js";import"./Input-zoCnMoQY.js";import"./Hidden-DgJfQ7aj.js";import"./Button-C5Qp8sRI.js";import"./useLabels-BKo_NQ3G.js";import"./useButton-Br7F04Rc.js";import"./useTextField-CYI-qgQw.js";import"./useControlledState-DEZrae_z.js";import"./useField-BXzSvw9G.js";import"./TextField.module-DpzeWGpt.js";import"./Label-iOCuPFms.js";import"./Dialog-BEf9ZAnF.js";import"./OverlayArrow-Cl1qYup9.js";import"./useResizeObserver-15Bzp4gu.js";import"./Collection-BNPzsOfb.js";import"./index-CoLrQld2.js";import"./Separator-BSZDTc6g.js";import"./SelectionManager-Bwh8qqDD.js";import"./useEvent-LUYrey9d.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CA3Uq9OB.js";import"./useDescription-BhjMw0Jb.js";import"./ListKeyboardDelegate-GShWNoVd.js";import"./PressResponder-CBrq5ngO.js";import"./useLocalizedStringFormatter-Bu05u6GJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bh91Q0k3.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-ByTPJ2eV.js";import"./Button-MSp50WJ0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dhn_O0nj.js";import"./createLucideIcon-DHsWZlEk.js";import"./x-LkEAYfSs.js";import"./Heading-C6uCjmJK.js";import"./info-CZLFldIB.js";import"./Popover-BKydzdZ2.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
