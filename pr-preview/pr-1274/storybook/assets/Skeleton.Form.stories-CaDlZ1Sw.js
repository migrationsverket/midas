import{j as e,l}from"./iframe-CX9u6T8Y.js";import{S as t}from"./Skeleton-TFVTHUiE.js";import{T as p}from"./TextField-0CKbJ89o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-RuJPELT0.js";import"./utils-B_VHG1Gv.js";import"./FieldError--tTRVDtY.js";import"./Text-C6_BqquS.js";import"./useFocusRing-VvtcDzXm.js";import"./index-CMK6CEsG.js";import"./index-BVrz2ZAp.js";import"./Text-e2IPEiX4.js";import"./RSPContexts-BNooXlrN.js";import"./Form-CcjwXvgg.js";import"./Group-DykfZ54i.js";import"./Input-MSTc-SIR.js";import"./Hidden-BBME2lcH.js";import"./Button-DNtvrS_L.js";import"./useLabel-BDLn6W6W.js";import"./useLabels-B630tUke.js";import"./useButton-CBDoaz5U.js";import"./useTextField-DJBn353g.js";import"./useControlledState-CqdFbIjJ.js";import"./useField-B8XYujKH.js";import"./TextField.module-DdivwlC8.js";import"./Label-DUzdzQsm.js";import"./Dialog-KMkeEz2A.js";import"./OverlayArrow-DyKE0IPh.js";import"./useResizeObserver-C6yuo73Q.js";import"./Collection-BQaK6DiV.js";import"./index-BxaUb3R0.js";import"./Separator-4Z7SGmJN.js";import"./SelectionManager-B23DL8iR.js";import"./useEvent-zf2pcSAO.js";import"./scrollIntoView-DpK8DHna.js";import"./SelectionIndicator-hxR0v41A.js";import"./useDescription-EWWy_tBC.js";import"./ListKeyboardDelegate-DbPEeBPI.js";import"./PressResponder-BB8d3xdq.js";import"./useLocalizedStringFormatter-Bk5zOPZH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BEO9m3RA.js";import"./getScrollParent-CX4KiXNJ.js";import"./VisuallyHidden-CQlGnIWD.js";import"./ModalOverlay-Cp1C1FLx.js";import"./x-3RPgUNSS.js";import"./createLucideIcon-B3Yd5B-T.js";import"./useLocalizedStringFormatter-BMBTKo38.js";import"./Heading-RxnKE-X9.js";import"./Button-DlDZpI3n.js";import"./Button.module-BB7N-cLd.js";import"./info-B2F7-Zsm.js";import"./Popover-CL4ZuKS5.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
