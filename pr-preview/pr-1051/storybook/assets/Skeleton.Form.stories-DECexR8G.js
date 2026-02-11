import{j as e,l}from"./iframe-fp2Nog4h.js";import{S as t}from"./Skeleton-R8PIGAf2.js";import{T as p}from"./TextField--InHXQFE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-DWdA-tFJ.js";import"./utils-C8oibJ9L.js";import"./TextField-BbK1mxS7.js";import"./FieldError-B0WmEBkc.js";import"./Text-CCjcRRvg.js";import"./useFocusRing-BTvXf_Cd.js";import"./index-D6xqLboL.js";import"./index-B3h2-82A.js";import"./Text-D811-Zq9.js";import"./RSPContexts-BdtlfPBJ.js";import"./Form-D5UMYNM1.js";import"./useFormValidation-pRLeydaA.js";import"./Group-CtCz0qIZ.js";import"./Input-BnYaVFSk.js";import"./Hidden-DOc9bKY7.js";import"./Button-GyiYNsJ6.js";import"./useLabels-DTn6LYUg.js";import"./useButton-D94t8hrE.js";import"./useTextField-DEXLnQGY.js";import"./useControlledState-BU_oUKfA.js";import"./useField-Cypphc-U.js";import"./TextField.module-DpzeWGpt.js";import"./Label-rhgf73VD.js";import"./Dialog-DNXuYuS4.js";import"./OverlayArrow-BUyo7LJ-.js";import"./useResizeObserver-C6vfFtJS.js";import"./Collection-BcD0ih6y.js";import"./index-DDVzHHx3.js";import"./Separator-ZYYVjjiY.js";import"./SelectionManager-BFC7ZP1t.js";import"./useEvent-BkbB1DI_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bx8b-vTn.js";import"./useDescription-BHRPbtLk.js";import"./ListKeyboardDelegate-D6l2r6AG.js";import"./PressResponder-Cem-oT6d.js";import"./useLocalizedStringFormatter-ANzTOMvn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-0ndfuYSB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CLqMczTC.js";import"./Button-DtrbXpSE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D8zHSBgy.js";import"./createLucideIcon-BdCyL4gS.js";import"./x-BF2Z086_.js";import"./Heading-BVNexJLw.js";import"./info-CgRSavl3.js";import"./Popover-v7c0C6cp.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
