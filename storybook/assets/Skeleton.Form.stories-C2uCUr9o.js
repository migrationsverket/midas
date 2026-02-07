import{j as e,l}from"./iframe-B7CA7zm9.js";import{S as t}from"./Skeleton-CZrsk1An.js";import{T as p}from"./TextField-BS1o2N5q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CjNhPblC.js";import"./utils-CQgVAoKd.js";import"./TextField-CpZu49LA.js";import"./FieldError-C6l0vGmY.js";import"./Text-D03EwgzM.js";import"./useFocusRing-DlIVYC0Q.js";import"./index-Cwsun3ZN.js";import"./index-BocC1wQt.js";import"./Text-Cj80PO87.js";import"./RSPContexts-DllVX3bg.js";import"./Form-DfyY1zJA.js";import"./useFormValidation-CmLLFYfy.js";import"./Group-Cq0prd9r.js";import"./Input-DeSAsAoa.js";import"./Hidden-D1GMlL2H.js";import"./Button-DCb3Avtf.js";import"./useLabels-COPc6DSg.js";import"./useButton-OekK3SSa.js";import"./useTextField-BcHGj1n2.js";import"./useControlledState-C73mtcAA.js";import"./useField-q_r02WmP.js";import"./TextField.module-DpzeWGpt.js";import"./Label-Ctepl0_M.js";import"./Dialog-B8n15aSr.js";import"./OverlayArrow-BGpEZi_q.js";import"./useResizeObserver-BVLHTBcx.js";import"./Collection-DxnCaOCK.js";import"./index-Dlarzz0C.js";import"./Separator-CFJ4eBpI.js";import"./SelectionManager--8uLHtnZ.js";import"./useEvent-D9DTZ6Bu.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COP-JOsu.js";import"./useDescription-_20e8jer.js";import"./ListKeyboardDelegate-DCvaEldI.js";import"./PressResponder-DP9ZmtgD.js";import"./useLocalizedStringFormatter-jYoZNKU4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMWytpzV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B6IbkCTP.js";import"./Button-D89KgD4F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dmi23tW0.js";import"./createLucideIcon-DrWysga5.js";import"./x-BMjxK86n.js";import"./Heading-BIbzDING.js";import"./info-DpfKa9Kg.js";import"./Popover-B8lVjLh6.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
