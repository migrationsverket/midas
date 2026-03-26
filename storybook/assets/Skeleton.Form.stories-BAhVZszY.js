import{j as e,l}from"./iframe-B6v7SNgB.js";import{S as t}from"./Skeleton-lLAm6ppB.js";import{T as p}from"./TextField-Bsa97B6M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-jn2E4NaE.js";import"./utils-DvQnzAUx.js";import"./FieldError-lkabuhB0.js";import"./Text-BIYy6_GG.js";import"./useFocusRing-BmrkPpfG.js";import"./index-CKeRqnm_.js";import"./index-D5Cv7XFv.js";import"./Text-IRrkNmmn.js";import"./RSPContexts-xsTqzyol.js";import"./Form-CFc7lGpW.js";import"./Group-B_1NLwKO.js";import"./Input-B-WrNOQP.js";import"./Hidden-DVRxRWYq.js";import"./Button-R8L0fisR.js";import"./useLabel-CZ56tTPg.js";import"./useLabels-BrspC8rV.js";import"./useButton-k8VWywdi.js";import"./useTextField-DZ5kzp9G.js";import"./useControlledState-BWAzPrBc.js";import"./useField-CQP4R4b6.js";import"./TextField.module-DdivwlC8.js";import"./Label-DF_bI9RR.js";import"./Dialog-Dp9bGLpv.js";import"./OverlayArrow-BX0fJ1ms.js";import"./useResizeObserver-BxIih74O.js";import"./Collection-BlrbCw0M.js";import"./index-BNtVYo6Q.js";import"./Separator-CdOFmzmr.js";import"./SelectionManager-BEdA5cgA.js";import"./useEvent-DDlHCXaB.js";import"./scrollIntoView-4Kj4GFr4.js";import"./SelectionIndicator-CSYpu25s.js";import"./useDescription-CGrNZaxo.js";import"./ListKeyboardDelegate-CP7RNJLy.js";import"./PressResponder-BGSY_gbR.js";import"./useLocalizedStringFormatter-DoD5PX0W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoWW0umo.js";import"./getScrollParent-TDrNm2Qd.js";import"./VisuallyHidden-s-TUYsoQ.js";import"./x-DEpZC0gz.js";import"./createLucideIcon-DJSw6RDm.js";import"./useLocalizedStringFormatter-d_TsE8p1.js";import"./Heading-GqHKyTua.js";import"./Button-DFw2NzPi.js";import"./Button.module-BB7N-cLd.js";import"./info-DBHRwVyt.js";import"./Popover-C_aDSXU0.js";const de={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},n={args:{size:"medium"}},o={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
