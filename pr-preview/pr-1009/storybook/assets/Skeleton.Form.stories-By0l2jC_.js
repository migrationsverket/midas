import{j as e,l}from"./iframe-BfX_07x0.js";import{S as t}from"./Skeleton-Cd932-ZP.js";import{T as p}from"./TextField-5NItlWHR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-D2RN8Pr3.js";import"./utils-otEk9Sjq.js";import"./TextField-BR_xakxq.js";import"./FieldError-CRBWYL-W.js";import"./Text-BlHVCXfu.js";import"./useFocusRing-B8HbIXNd.js";import"./index-Fv7k2kbU.js";import"./index-Tc84QQew.js";import"./Text-B2HNGjiH.js";import"./RSPContexts-Cjsc-eOQ.js";import"./Form-C-L0Ndhq.js";import"./useFormValidation-TqVcjqfe.js";import"./Group-n0qVvnjo.js";import"./Input-D_WcDAqk.js";import"./Hidden-BW_Q879K.js";import"./Button-BjsM-sZt.js";import"./useLabels-BDfZfP3D.js";import"./useButton-Bnqm25mU.js";import"./useTextField-DD0O9ryS.js";import"./useControlledState-BDBdaFnj.js";import"./useField-D18NE3Od.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C8T1niBL.js";import"./Dialog-BaNlAR24.js";import"./OverlayArrow-CuPHKC8V.js";import"./useResizeObserver-DE6Jojwh.js";import"./Collection-B-H-yU5f.js";import"./index-CAt6XeDx.js";import"./Separator-DgrfS2q7.js";import"./SelectionManager-CGKOZMdZ.js";import"./useEvent-TK48cLph.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CNeDQaEc.js";import"./useDescription-tN0S61gz.js";import"./ListKeyboardDelegate-BxcuPLOy.js";import"./PressResponder-Dyai04df.js";import"./useLocalizedStringFormatter-DfmLe7Uo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKRWm9Cp.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Mgvz9RsA.js";import"./Button-S0b0VHM6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BtSMgK2r.js";import"./createLucideIcon-NdhLV474.js";import"./x-BXf0dImH.js";import"./Heading-DNwj3PZt.js";import"./info-CRmXFHgj.js";import"./Popover-B63yxUdD.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
