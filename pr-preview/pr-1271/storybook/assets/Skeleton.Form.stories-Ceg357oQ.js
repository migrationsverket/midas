import{j as e,l}from"./iframe-GMyNOJOq.js";import{S as t}from"./Skeleton-DOlnw6jH.js";import{T as p}from"./TextField-CRaZ6S4g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-B3DzzNJh.js";import"./utils-BXbplvrq.js";import"./FieldError-C81FQqBO.js";import"./Text-DwP9uMRl.js";import"./useFocusRing-CY-YEC5f.js";import"./index-DSCO44yP.js";import"./index-CiecEaAM.js";import"./Text-DPFOPtH6.js";import"./RSPContexts-ALCmHzcd.js";import"./Form-Bt1ZVAUN.js";import"./Group-C5kGEOYT.js";import"./Input-ByVNz-Ba.js";import"./Hidden-zTZMnLTK.js";import"./Button-BmFFiwR6.js";import"./useLabel-CqPGMRzp.js";import"./useLabels-BBipD7g9.js";import"./useButton-HZCszyxF.js";import"./useTextField-CU-cWo7S.js";import"./useControlledState-yUAT-leZ.js";import"./useField-CA_QjZbA.js";import"./TextField.module-DdivwlC8.js";import"./Label-DkgZd0Gw.js";import"./Dialog-K1psAsFf.js";import"./OverlayArrow-BKaPkWbW.js";import"./useResizeObserver-zWdOXMvT.js";import"./Collection-DVkjdMjT.js";import"./index-CJyCjhTy.js";import"./Separator-Bf8GRhF7.js";import"./SelectionManager-D943sEC2.js";import"./useEvent-CBo9AmGw.js";import"./scrollIntoView-CMEx-M2c.js";import"./SelectionIndicator-C2IpaVjB.js";import"./useDescription-CTuGe5IW.js";import"./ListKeyboardDelegate-BFbJBipB.js";import"./PressResponder-BvdOkDwv.js";import"./useLocalizedStringFormatter-CslKPgSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CjVJX3Fl.js";import"./getScrollParent-9kULsret.js";import"./VisuallyHidden-DOm6YV-1.js";import"./ModalOverlay-BStbUUfg.js";import"./x-CqyquoJ7.js";import"./createLucideIcon-BTNAcQe3.js";import"./useLocalizedStringFormatter-DN9P_vz1.js";import"./Heading-Dvuki4_N.js";import"./Button-DiEAaUmX.js";import"./Button.module-BB7N-cLd.js";import"./info-BLF_5Qzs.js";import"./Popover-C0NXiew-.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
