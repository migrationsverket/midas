import{j as e,l}from"./iframe-EPbYJ3aH.js";import{S as t}from"./Skeleton-DdYnvC9L.js";import{T as p}from"./TextField-BS5g1SiG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./TextFieldBase-sHZ6h9LG.js";import"./utils-BFyuPOg-.js";import"./FieldError-QU59tQ0w.js";import"./Text-DXPQUnae.js";import"./useFocusRing-vFk-w4SV.js";import"./index-CMa-XrnA.js";import"./index-CEkD2vSE.js";import"./Text-DaRCpEpM.js";import"./RSPContexts-BCgG5sDy.js";import"./Form-Bo93hY_x.js";import"./Group-BQ6Jklka.js";import"./Input-CLcVXigI.js";import"./Hidden-CHhsJSI8.js";import"./Button-D1GYvhMH.js";import"./useLabel-Cb-B9e5n.js";import"./useLabels-bRXyuIVZ.js";import"./useButton-CS8vRMxU.js";import"./useTextField-CQExyJqA.js";import"./useControlledState-B7DCF9AW.js";import"./useField-Czz-xLhT.js";import"./TextField.module-DdivwlC8.js";import"./Label-hTDzrJT1.js";import"./Dialog-n78VMrVu.js";import"./OverlayArrow-CYxpLZMe.js";import"./useResizeObserver-BbDP_QOM.js";import"./Collection-BCcQ8_2d.js";import"./index-Cx30adBd.js";import"./Separator-ZzheoSvB.js";import"./SelectionManager-fY8UI5b1.js";import"./useEvent-DrVet--T.js";import"./scrollIntoView-DIrfA17L.js";import"./SelectionIndicator-Zdxp2d1B.js";import"./useDescription-B2aIStsg.js";import"./ListKeyboardDelegate-CBTehG4B.js";import"./PressResponder-CbR5kRKy.js";import"./useLocalizedStringFormatter-Bl42Cfqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2RjG4Qj.js";import"./getScrollParent-IjDHduKu.js";import"./VisuallyHidden-CRUsIDEu.js";import"./ModalOverlay-Dmzx1hCu.js";import"./x-DpzpagIl.js";import"./createLucideIcon-CDlkFEI-.js";import"./useLocalizedStringFormatter-scKp9dSq.js";import"./Heading-Dg6ksqRs.js";import"./Button-CF00LYtn.js";import"./Button.module-BB7N-cLd.js";import"./info-Bz-zzsad.js";import"./Popover-OahhESU-.js";const ce={component:t,title:"Components/Skeleton/Form",tags:["autodocs","!snapshot"],args:{variant:"form",width:"400px"},render:r=>e.jsx(t,{...r,"data-testid":"skeleton"})},s={args:{size:"large"}},o={args:{size:"medium"}},n={args:{size:"large",isAnimated:!1},parameters:{docs:{source:{code:`<Skeleton
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
