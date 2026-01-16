import{j as e,l}from"./iframe-Be1aZvSB.js";import{S as t}from"./Skeleton-Dw6pZkS4.js";import{T as p}from"./TextField-DMhzcS1h.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D9sWFGZY.js";import"./utils-Dr5lOQEm.js";import"./TextField-BaNpdLZe.js";import"./FieldError-CKZ818d7.js";import"./Text-77WNyGJQ.js";import"./useFocusRing-4gVfCrlN.js";import"./index-DiNIKx-9.js";import"./index-3_mfRz-m.js";import"./Text-8SUBmIhI.js";import"./RSPContexts-BEvd3q6R.js";import"./Form-Ae3SlhGj.js";import"./useFormValidation-upWxOlB9.js";import"./Group-H9gn1b-g.js";import"./Input-CQzxFH-r.js";import"./Hidden-BG3DEavw.js";import"./Button-JlG5wiA2.js";import"./useLabels-BWJsgRkM.js";import"./useButton-5FzE-eGH.js";import"./useTextField-Bw55hBUV.js";import"./useControlledState-CJEhEPO4.js";import"./useField-BoBuldh2.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BQ4BUlPv.js";import"./Dialog-C7DsTJEp.js";import"./OverlayArrow-DGvPVYtQ.js";import"./useResizeObserver-COv9as7A.js";import"./Collection-CvBji9UX.js";import"./index-BVWxmaTk.js";import"./Separator-DLtRXX2_.js";import"./SelectionManager-CPAVRRU0.js";import"./useEvent-Bgy8ySsQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5SWsty4.js";import"./useDescription-qD4_R6It.js";import"./ListKeyboardDelegate-B-k0R0KY.js";import"./PressResponder-C_Qddwx9.js";import"./useLocalizedStringFormatter-DVu_V5sq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C09V82bP.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQWkGC77.js";import"./Button-KQ3agptm.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3flDKgk.js";import"./createLucideIcon-oLtop38V.js";import"./x-CBDdEqTf.js";import"./Heading-CRZEmuj5.js";import"./info-CTOSBXOP.js";import"./Popover-B_cM8naD.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
