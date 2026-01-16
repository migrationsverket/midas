import{j as e,l}from"./iframe-B_Y0DlqQ.js";import{S as t}from"./Skeleton-DuCSaXR6.js";import{T as p}from"./TextField-DoH1pLSK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DOIZyv-S.js";import"./utils-DksA0Tsa.js";import"./TextField-q3Qlm6lK.js";import"./FieldError-i5Ktr5xn.js";import"./Text-CYtRYcLc.js";import"./useFocusRing-Bri1p2OG.js";import"./index-DA90p7VR.js";import"./index-D4TvvLIK.js";import"./Text-CcUZk8IK.js";import"./RSPContexts-B5lGwhcJ.js";import"./Form-BHJz0544.js";import"./useFormValidation-BbQ3XrbH.js";import"./Group-CSmA4msu.js";import"./Input-B7SVIrVB.js";import"./Hidden-DECSsGSE.js";import"./Button-Du8CgB5i.js";import"./useLabels-Ce9ZpRqc.js";import"./useButton-BkIr7UBR.js";import"./useTextField-C8EYfC3m.js";import"./useControlledState-DNwepJua.js";import"./useField-3oWVgLWz.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CzeIbsy3.js";import"./Dialog-ft7UPy6D.js";import"./OverlayArrow-auEgUC_S.js";import"./useResizeObserver-B7Qkibwd.js";import"./Collection-Cy_qBdK2.js";import"./index-yCQs7iDR.js";import"./Separator-DRsqODdx.js";import"./SelectionManager-DuHPqwUB.js";import"./useEvent-DpuzfOt5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DumeAD8r.js";import"./useDescription-B5DmuzQE.js";import"./ListKeyboardDelegate-Cyz7xoOF.js";import"./PressResponder-C7JgJDDb.js";import"./useLocalizedStringFormatter-jn3ikADD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BSPULRBm.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dfda1Uwj.js";import"./Button-DLuLiY2m.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQakQ_l-.js";import"./createLucideIcon-DXYmNs8l.js";import"./x-_e6csGZB.js";import"./Heading-BtF3xjBY.js";import"./info-BOmTufZ3.js";import"./Popover-DmbZwZtw.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
