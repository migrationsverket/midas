import{j as e,l}from"./iframe-CYrC2O7n.js";import{S as t}from"./Skeleton-C91gMbeq.js";import{T as p}from"./TextField-BHGhNS7O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-BGZ8qu_1.js";import"./utils-W9KFSJyi.js";import"./FieldError-Co8p2V5G.js";import"./Text-kU8vQOsb.js";import"./useFocusRing-DwhBMXNM.js";import"./index-Dd5lO-PO.js";import"./index-BE0HShMl.js";import"./Text-C6dUuRFD.js";import"./RSPContexts-96m8ngxa.js";import"./Form-B3TXkIwh.js";import"./useFormValidation-CYVywKCd.js";import"./Group-DcURj3h1.js";import"./Input-DhwYBGg5.js";import"./Hidden-Cuqxaz-j.js";import"./Button-BKTJlLGY.js";import"./useLabels-JnCkPdA7.js";import"./useButton-DzzAV_qM.js";import"./useTextField-BPInpXO5.js";import"./useControlledState-CWVzqNB6.js";import"./useField-BuQKvOvB.js";import"./TextField.module-DdivwlC8.js";import"./Label-CXKF3Agi.js";import"./Dialog-BTKGCqJw.js";import"./OverlayArrow-gbdM9ti7.js";import"./useResizeObserver-C7khmZ6Y.js";import"./Collection-C0qlFWCq.js";import"./index-C6ZPDeAo.js";import"./Separator-Ou9floIC.js";import"./SelectionManager-C2qcIVnE.js";import"./useEvent-Cl9zlQud.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BisZMVPl.js";import"./useDescription-CS0207ko.js";import"./ListKeyboardDelegate-Cq5x0cfE.js";import"./PressResponder-HHm5zrGH.js";import"./useLocalizedStringFormatter-D52FmrAL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IiM63RyR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-vjowbZXC.js";import"./Button-OKR0VFLl.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CEUvbGBF.js";import"./createLucideIcon-B2v0PGO8.js";import"./x-Bso_vTII.js";import"./Heading-gejMn2xX.js";import"./info-CE9qWfQo.js";import"./Popover-xvlzBOBY.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
