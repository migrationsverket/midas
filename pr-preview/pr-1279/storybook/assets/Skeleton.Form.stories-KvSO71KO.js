import{j as e,l}from"./iframe-BdqauXPx.js";import{S as t}from"./Skeleton-3kNHNCkP.js";import{T as p}from"./TextField-D_02OPdK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-gnGT8lg0.js";import"./utils-TjQiWSfv.js";import"./FieldError-DGaJEWvC.js";import"./Text-BL07whN_.js";import"./useFocusRing-Djhyctp1.js";import"./index-D26i6JtP.js";import"./index-Ce5gVXXA.js";import"./Text-Cb3R__HW.js";import"./RSPContexts-DWJwZTPK.js";import"./Form-Bsw9pKS8.js";import"./Group-DAsAupNi.js";import"./Input-DFZxFk2j.js";import"./Hidden-D68chLs-.js";import"./Button-BdENfSlN.js";import"./useLabel-MUMZQ-th.js";import"./useLabels-BB2v9ziq.js";import"./useButton-C2K4Azrm.js";import"./useTextField-CyrS5BG0.js";import"./useControlledState-BqbfbBFv.js";import"./useField-C7HioUHP.js";import"./TextField.module-DdivwlC8.js";import"./Label-DCSqFwNN.js";import"./Dialog-Cb0whWoD.js";import"./OverlayArrow-FJZRRUyJ.js";import"./useResizeObserver-RW1CuN27.js";import"./Collection-JvjnwjmG.js";import"./index-BS8HcPx6.js";import"./Separator-DFeV47hE.js";import"./SelectionManager-C6Y-w3s-.js";import"./useEvent-DExcb2G1.js";import"./scrollIntoView-jrzWWzlM.js";import"./SelectionIndicator-DT1mAUJL.js";import"./useDescription-t_eySs42.js";import"./ListKeyboardDelegate-BhDiJ6PN.js";import"./PressResponder-TOh589vR.js";import"./useLocalizedStringFormatter-BItpsgj9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3uQY02MS.js";import"./getScrollParent-H79fyDJz.js";import"./VisuallyHidden-d4YRXwAI.js";import"./ModalOverlay-BxhYsu4X.js";import"./x-CmpCUEVG.js";import"./createLucideIcon-BaaLPnxs.js";import"./useLocalizedStringFormatter-D8pBRmub.js";import"./Heading-KnoXvYNa.js";import"./Button-lQ7FTiYx.js";import"./Button.module-BB7N-cLd.js";import"./info-C_WL5t3o.js";import"./Popover-Cn8zo7bE.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
