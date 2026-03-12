import{j as e,l}from"./iframe-BKt9EFfY.js";import{S as t}from"./Skeleton-CBrxxbwS.js";import{T as p}from"./TextField-DZw_cmEl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DEmN7Pbb.js";import"./utils-UHPC9nWZ.js";import"./FieldError-x-AT8pl1.js";import"./Text-Cx5eezfb.js";import"./useFocusRing-cxIDuQxL.js";import"./index--2FdksYv.js";import"./index-YDrS01VO.js";import"./Text-QG4NB2hl.js";import"./RSPContexts-C1Y2t1uV.js";import"./Form-BIn8UGe1.js";import"./useFormValidation-Dsa57_F2.js";import"./Group-Dj1vye4d.js";import"./Input-D0EQnqOR.js";import"./Hidden-BIzqGf_Y.js";import"./Button-54WAdtvn.js";import"./useLabels-Dg5v2BlI.js";import"./useButton-DZMjZ0Xn.js";import"./useTextField-BuVFyPkC.js";import"./useControlledState-BZs3lQsK.js";import"./useField-DoDrCpUl.js";import"./TextField.module-DdivwlC8.js";import"./Label-Ccv4NXgC.js";import"./Dialog-Cwu02sHs.js";import"./OverlayArrow-CKG8ikC0.js";import"./useResizeObserver-D-YYA0Ni.js";import"./Collection-BuYk4Gk5.js";import"./index-CcGrGtPC.js";import"./Separator-CtVyKUJH.js";import"./SelectionManager-D3YQtbVB.js";import"./useEvent-BsotznEQ.js";import"./scrollIntoView-D7dRqv7d.js";import"./SelectionIndicator-fUDz65K_.js";import"./useDescription-ClLBcdJg.js";import"./ListKeyboardDelegate-BEZyuz-l.js";import"./PressResponder-CJbEg2ds.js";import"./useLocalizedStringFormatter-CEsxsRDH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-Skfg5M.js";import"./getScrollParent-JoXPjCTV.js";import"./VisuallyHidden-oXJqa0w4.js";import"./x-DbaGL1T9.js";import"./createLucideIcon-CwzpYKvj.js";import"./useLocalizedStringFormatter-C4CK9KxZ.js";import"./Heading-C48sIEiR.js";import"./Button-BP3_jhUy.js";import"./Button.module-D_C6WeTN.js";import"./info-D-668lkH.js";import"./Popover-CL7jeCE7.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
