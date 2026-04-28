import{j as e,l}from"./iframe-4jp4gloH.js";import{S as t}from"./Skeleton-CRFpvRCG.js";import{T as p}from"./TextField-DQas1iY6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-cEc7UVYu.js";import"./utils-VVEWI3IK.js";import"./FieldError-D-ucO46w.js";import"./Text-DKG8In0g.js";import"./useFocusRing-CHjnTN6p.js";import"./index-BZ8dxgHN.js";import"./index-Ba_IRaMO.js";import"./Text-CaWuTb4e.js";import"./RSPContexts-C_Tj-sgU.js";import"./Form-CIwvIR5N.js";import"./Group-Cv7i4TUW.js";import"./Input-DBjxQExL.js";import"./Hidden-uxp9aDmP.js";import"./Button-BmPmOVkQ.js";import"./useLabel-BAWcaNxa.js";import"./useLabels-BIxc1erV.js";import"./useButton-Cnbi6eSC.js";import"./useTextField-DUCQouM-.js";import"./useControlledState-C8OaseGF.js";import"./useField-C6NTEJ5-.js";import"./TextField.module-DdivwlC8.js";import"./Label-Bn89WDN5.js";import"./Dialog-DRahsqTG.js";import"./OverlayArrow-DHc0EFKa.js";import"./useResizeObserver-C3Vw2coy.js";import"./Collection-D6gGdmWj.js";import"./index-GU77QnNE.js";import"./Separator-C8wUcFi5.js";import"./SelectionManager-qtDdSSC6.js";import"./useEvent-BSjWwKyO.js";import"./scrollIntoView-LVymhG08.js";import"./SelectionIndicator-DERD32HY.js";import"./useDescription-Ca_N61mq.js";import"./ListKeyboardDelegate-BU755iyf.js";import"./PressResponder-BpN-lFO9.js";import"./useLocalizedStringFormatter-DPlQOnfn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZi5NauF.js";import"./getScrollParent-lyddzNLU.js";import"./VisuallyHidden-CwExooWt.js";import"./ModalOverlay-TllZkSy1.js";import"./x-C0TcUHvQ.js";import"./createLucideIcon-BGZ9Sagt.js";import"./useLocalizedStringFormatter-BH6_V3D9.js";import"./Heading-CE_cjqfz.js";import"./Button-CeMvvwss.js";import"./Button.module-BB7N-cLd.js";import"./info-Cg34k-x-.js";import"./Popover-BJTZb_ez.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
