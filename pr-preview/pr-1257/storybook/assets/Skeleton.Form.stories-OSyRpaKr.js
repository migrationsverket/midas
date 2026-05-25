import{j as e,l}from"./iframe-DHSFkIsy.js";import{S as t}from"./Skeleton-CGgjb_Jg.js";import{T as p}from"./TextField-Dt_s0ryy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-Ch59QOWk.js";import"./utils-CZbTr4bL.js";import"./FieldError-DFzLFMIZ.js";import"./Text-Dlktz5kY.js";import"./useFocusRing-CNpZwhdZ.js";import"./index-oXf-9ID4.js";import"./index-J1_Mq2EC.js";import"./Text-CE2-J5ib.js";import"./RSPContexts-Dm3G7A6M.js";import"./Form-C4OsrVJ1.js";import"./Group-GTWQChIb.js";import"./Input-MzB543d8.js";import"./Hidden-N-s-Oc-P.js";import"./Button-DwFLZ-vl.js";import"./useLabel-BCJ-n4cN.js";import"./useLabels-CTlVno2m.js";import"./useButton-tAptgANb.js";import"./useTextField-CzfnvZVK.js";import"./useControlledState-BC5iZhUu.js";import"./useField-CmEVGEa7.js";import"./TextField.module-DdivwlC8.js";import"./Label-B_ZUWnb7.js";import"./Dialog-h_UASn88.js";import"./OverlayArrow-DVJcUeet.js";import"./useResizeObserver-DwGU07GJ.js";import"./Collection-B0B2WoeJ.js";import"./index-CqWHgfao.js";import"./Separator-CUGVPZ00.js";import"./SelectionManager-JKYT7One.js";import"./useEvent-DMc3Uz1U.js";import"./scrollIntoView-DmtYx3D8.js";import"./SelectionIndicator-CydRsdFr.js";import"./useDescription-COddip1D.js";import"./ListKeyboardDelegate-3IFiTk9z.js";import"./PressResponder-CXr9tQ9l.js";import"./useLocalizedStringFormatter-CrmHRQiX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfJYb7vS.js";import"./getScrollParent-HtTQIod0.js";import"./VisuallyHidden-CdVi298y.js";import"./ModalOverlay-Dm3RFYNm.js";import"./x-Ca2lmhP_.js";import"./createLucideIcon-Bhv8-C3S.js";import"./useLocalizedStringFormatter-AT5R_CzH.js";import"./Heading-pXzzfo8s.js";import"./Button-BCxQv38d.js";import"./Button.module-BB7N-cLd.js";import"./info-BBCoW9Lj.js";import"./Popover-Baq0wk6e.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
