import{j as e,l}from"./iframe-scLSUKLC.js";import{S as t}from"./Skeleton-DAIRomuK.js";import{T as p}from"./TextField-jRRW-U6p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-6BD9pR_T.js";import"./utils-VusYSVV3.js";import"./TextField-qwnSBzDA.js";import"./FieldError-CFquMVDb.js";import"./Text-DTyekGW6.js";import"./useFocusRing-_IjzIfKM.js";import"./index-mQxC8hvk.js";import"./index-DpJjKeec.js";import"./Text-Dt0v8fCv.js";import"./RSPContexts-DuBR0pyr.js";import"./Form-DfsYFccC.js";import"./useFormValidation-CSTJe35f.js";import"./Group-C1sBjPMW.js";import"./Input-WBGTxWy8.js";import"./Hidden-D_mDfWbG.js";import"./Button-DV8mnRES.js";import"./useLabels-CMKHi586.js";import"./useButton-Cj9v_jLE.js";import"./useTextField-Cyj6jo9h.js";import"./useControlledState-BLpi_x0u.js";import"./useField-2RcysjcJ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DzNRkmH8.js";import"./Dialog-BTLbqk4N.js";import"./OverlayArrow-B4WRUgAO.js";import"./useResizeObserver-KYSZwn-M.js";import"./Collection-DN-3I-_7.js";import"./index-ChoGj1Ct.js";import"./Separator-inq0kH5q.js";import"./SelectionManager-BIc1t39b.js";import"./useEvent-DedY8LRC.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1uui7tH5.js";import"./useDescription-B0-u872d.js";import"./ListKeyboardDelegate-C5uHsGyp.js";import"./PressResponder-DFvDffbc.js";import"./useLocalizedStringFormatter-C0RBb53M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COXPLuj_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BH-0CD7g.js";import"./Button-Da7_Ionc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B1l7IBDm.js";import"./createLucideIcon-D5mqExBa.js";import"./x-D0Bj0XkU.js";import"./Heading-DJNjhrJN.js";import"./info-VLNYI4uz.js";import"./Popover-gy1ZOpM_.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
