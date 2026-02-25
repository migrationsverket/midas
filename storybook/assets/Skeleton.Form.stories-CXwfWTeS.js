import{j as e,l}from"./iframe-BsATTn7S.js";import{S as t}from"./Skeleton-CxNkSyyr.js";import{T as p}from"./TextField-2fs5Dsr0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-CmvQsbO7.js";import"./utils-CqHUKh2_.js";import"./FieldError-ZIUt4nLn.js";import"./Text-BZiG-sAM.js";import"./useFocusRing-Bv0lKuNU.js";import"./index-B8jfesk_.js";import"./index-DrKA0vjB.js";import"./Text-DWxVSOOD.js";import"./RSPContexts-DlIxtbr4.js";import"./Form-BdI37ukR.js";import"./useFormValidation-DbSiGsSK.js";import"./Group-DhtnEpHN.js";import"./Input-DyQWh7KJ.js";import"./Hidden-STEvN2Ch.js";import"./Button-B8-_2jR7.js";import"./useLabels-Cy5smjs4.js";import"./useButton-BO5H5m2x.js";import"./useTextField-D0T1sM21.js";import"./useControlledState-BRGghZoO.js";import"./useField-faGGhaPE.js";import"./TextField.module-DdivwlC8.js";import"./Label-BG3TQjch.js";import"./Dialog-BFsd_N7N.js";import"./OverlayArrow-Gv4R4ifv.js";import"./useResizeObserver-iwfSAtcH.js";import"./Collection-D-2V9vr-.js";import"./index--aMWt0R4.js";import"./Separator-DhgRJKP2.js";import"./SelectionManager-DS5LU99Q.js";import"./useEvent-BZDrSNpr.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BYimUhfR.js";import"./useDescription-BNPvHP4K.js";import"./ListKeyboardDelegate-CZH46TN4.js";import"./PressResponder-BSf7vw9s.js";import"./useLocalizedStringFormatter-D0E7DUZe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D3tNLTy4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CD5_Pn7B.js";import"./Button-Bupwh-3M.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dy_8RTcF.js";import"./createLucideIcon-CgjvvVBG.js";import"./x-CQFRpNWa.js";import"./Heading-Wcta6dzy.js";import"./info-CWmVrqQc.js";import"./Popover-djP-khse.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
